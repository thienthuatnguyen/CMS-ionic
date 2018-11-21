import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, ModalController } from 'ionic-angular';
import { _ } from 'underscore';
import { Util } from '../../providers';
import { ReservationPage } from "../reservation/reservation";
import { TestDriveReadyPage } from "../test-drive-ready/test-drive-ready";
import { MainPage } from "../index";
import { ReservationService } from '../../services/reservation.service';
import { ReservationModel } from '../../models/reservation/reservation.model';
import moment from 'moment';
import { Config } from '../../app/app.config';
import { UserInfoModel } from '../../models/userInfo.model';
import { IvtStorageService, IvtSecurityService } from '@ivt/security';
import { ToastService } from '../../services/toast.service';
import { TranslateService } from '@ngx-translate/core/src/translate.service';
import { AppSettingModel } from '../../models/config/app.setting.model';
import { DriveShootingPage } from '../../pages/drive-shooting/drive-shooting';
import { CameraService } from '../../services/camera.service';
import { FileService } from '../../services/file.service';
import { VehicleOdometerModel } from '../../models/VehicleOdometer.model';
import { VehicleOdometerService } from '../../services/vehicle.odometer.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { NotificationService } from '../../services/notification.service';
@IonicPage()
@Component({
  selector: 'page-reservation-list',
  templateUrl: 'reservation-list.html'
})
export class ReservationListPage {
  private currentUser: boolean = false;
  private userId: any;
  private list: any = [];
  private reservationList: any = [];
  private params: any;
  private validateMessage: string;
  private appSetting: AppSettingModel;
  today: Date;
  resultList: any = [];
  displayDateFormat = Config.date.displayShortTime;
  private subscription: Subscription;
  private vhcSubscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private service: ReservationService,
    private util: Util,
    private translateService: TranslateService,
    private toastService: ToastService,
    private securityService: IvtSecurityService,
    private storeage: IvtStorageService,
    private modalCtrl: ModalController,
    private camera: CameraService,
    private fileSvc: FileService,
    private vehicleOdometerService: VehicleOdometerService,
    private notificationService: NotificationService
  ) {
    let userInfor = this.securityService.getUser();
    this.userId = userInfor.id;

    this.today = moment(moment().format(Config.date.YYYYMMDD), Config.date.YYYYMMDD).toDate();
    this.translateService.get('reservation.you_can_only_proceed_with_your_reservation').subscribe((value) => {
      this.validateMessage = value;
    })
    this.getAppSetting();
  }

  private getReservationList(searchCriteria: any) {
    this.service.getReservationList(searchCriteria).subscribe((reservations: ReservationModel[]) => {
      this.list = this.util.transformToReservationList(reservations);
      this.resultList = this.util.transformToGroupBy(this.list, 'appointmentDateLocal');
    }, fail => {
      // to do will show error message 
    });
  }

  private getAppSetting() {
    this.appSetting = this.storeage.get(Config.AppSetting);
  }

  ionViewDidEnter() {
    this.params = {
      appointmentFromDateLocal: moment()
    }
    this.getReservationList(this.params);
  }

  toggleUser() {
    this.currentUser = !this.currentUser;
    let userItems = this.list;
    if (this.currentUser)
      userItems = _.where(this.list, { consultantUserId: this.userId });
    this.resultList = this.util.transformToGroupBy(userItems, 'appointmentDateLocal');
  }

  changeDate(selectedDate) {
    this.params = {
      appointmentFromDateLocal: moment(selectedDate),
      appointmentToDateLocal: moment(selectedDate)
    }
    this.getReservationList(this.params);
  }

  showCreateDocument(applicationStatusEnum: any) {
    return Config.reservation.createDocument.indexOf(applicationStatusEnum) >= 0
  }

  showEditDocument(applicationStatusEnum: any) {
    return Config.reservation.editDocument.indexOf(applicationStatusEnum) < 0
  }

  showStartDriver(applicationStatusEnum: any) {
    return Config.reservation.startDrive.indexOf(applicationStatusEnum) >= 0
  }
  /**
   * Perform a service for the proper items.
   */
  searchByKeyWord(ev) {
    if (ev.target.value === undefined)
      this.resultList = this.util.transformToGroupBy(this.list, 'appointmentDateLocal');
    else {
      var result = _.filter(this.list, item => {
        return (
          item.customerFullName.toLowerCase().indexOf(ev.target.value.toLowerCase()) >= 0
          || item.vehicleDisplayName.toLowerCase().indexOf(ev.target.value.toLowerCase()) >= 0
          || item.consultantUserName.toLowerCase().indexOf(ev.target.value.toLowerCase()) >= 0)
      });
      this.resultList = this.util.transformToGroupBy(result, 'appointmentDateLocal');
    }
  }


  /**
   * Navigate to the detail page for this item.
   */
  editReservation(item: ReservationModel) {
    this.navCtrl.push('ReservationPage', {
      item: item
    });
  }

  updateDocument(item: ReservationModel) {
    this.navCtrl.push('DocumentPage', {
      item: item
    });
  }

  private openVhcPage(vehicleId: number) {
    let profileModal = this.modalCtrl.create('VehicleHealthCheckPage', {
      vehicleId: vehicleId,
      BeforeTestDrive: true,
      page: 'reservation-list'
    }, {
        cssClass: 'full-modal'
      });
    profileModal.present();
  }
  private async takeOdometer(applicationId: number) {
    let profileModal = this.modalCtrl.create('DriveShootingPage',
      {
        applicationId: applicationId,
        BeforeTestDrive: true,
        pageType: 'odometer',
        page: 'reservation-list'
      }, {
        cssClass: 'full-modal'
      });
    profileModal.present();
  }
  private startTestDrive(item: ReservationModel) {
    this.navCtrl.setRoot('TestDriveReadyPage', {
      item: item
    });
  }

  private startDriveBasedOnSetting(item: ReservationModel) {
    //this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive = false;
    //this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive = false;
    if (this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
      this.openVhcPage(item.vehicleId);
    }
    else if (this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
      this.takeOdometer(item.id);
    }
    else {
      this.startTestDrive(item);
    }
    this.subscribe(item);
  }
  
  private subscribe(item: ReservationModel) {
    if (this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
      if (this.vhcSubscription == undefined || this.vhcSubscription.closed == true) {
        this.vhcSubscription = this.notificationService.updateBeforeVehicleHealthCheck.subscribe(result => {
          this.vhcSubscription.unsubscribe();
          if (this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
            this.takeOdometer(item.id);
          }
          else {
            this.startTestDrive(item);
          }
        })
      }
    }
    if (this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
      if (this.subscription == undefined || this.subscription.closed == true) {
        this.subscription = this.notificationService.takeOdometerBeforeDrive.subscribe(result => {
          this.subscription.unsubscribe();
          this.startTestDrive(item);
        })
      }
    }
  }

  openTestDriveReady(item: ReservationModel) {
    if (this.isOwnReservation(item)) {
      this.startDriveBasedOnSetting(item);
    }
    else {
      this.toastService.error(this.validateMessage);
    }
  }
  isOwnReservation(item): boolean {
    if (item.consultantUserId)
      return item.consultantUserId == this.userId
    return false;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // private generateUniqueFileName(): string {
  //   return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
  // }

}
