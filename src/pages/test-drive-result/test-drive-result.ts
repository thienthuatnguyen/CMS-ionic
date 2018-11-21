import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ModalController } from 'ionic-angular';
import { TestDriveProvider } from "../../providers/test-drive/test-drive";
import { Observable } from "rxjs/Observable";
import { SurveyDetailPage } from "../cs-survey/survey-detail/survey.detail.component";
import { APICode, APIResponse } from "@ivt/http-client";
import { Util } from "../../providers";
import * as moment from 'moment';
import { ToastService } from '../../services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { DrivingRecordService } from '../../services/driving.record.service';
import { Customer } from '../../models/customer.model';
import { LoadingService } from '../../services/loading.service';
import { Config } from '../../app/app.config';
import { AppSettingModel } from '../../models/config/app.setting.model';
import { IvtStorageService } from '@ivt/security';
import { VehicleOdometerModel } from '../../models/VehicleOdometer.model';
import { CameraService } from '../../services/camera.service';
import { FileService } from '../../services/file.service';
import { VehicleOdometerService } from '../../services/vehicle.odometer.service';
import { DriveShootingPage } from '../../pages/drive-shooting/drive-shooting';
import { BluetoothService } from '../../services/bluetooth.service';
import { Subscription } from 'rxjs/Subscription';
import { NotificationService } from '../../services/notification.service';

/**
 * Generated class for the TestDriveResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-drive-result',
  templateUrl: 'test-drive-result.html',
})
export class TestDriveResultPage {
  private appSetting: AppSettingModel;
  availableGpsString: any;
  item: any;
  applicationId: any;
  latlng: any;
  uploadDrivingRecord: any;
  recordId: any;
  startAddress: any;
  callback: any;
  totalRecordTime: any;
  totalRecordDistance: any;
  recordTime: any;
  recordDistance: any;
  endLocation: any;
  location: any;
  firstDate: any;
  secondDate: any;
  drivenMileage: any;
  drivenDurationInSec: moment.Duration;
  displayDrivenDurationInSec: string;
  loading: any
  drivingRecord: any;

  previousRecord: any;


  // previousRecordItems: Array<{drivenStartTime: any, drivenDurationInSec: any, drivenMileage: any, endFullAddress?: any, startFullAddress: any, endLatitude?: any, endLongitude?: any, recordId: any}>
  previousRecordItems: any;
  totalDrivingTime: any = 0;
  totalDrivenMileage: number = 0;
  displayTotalDrivenMileage: number = 0;
  displayTotalDrivingTime: any = 0;
  displayDateFormat = Config.date.displayFormatDateSurvey;

  private tabElement: any;
  private subscription: Subscription;
  private vhcSubscription: Subscription;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private testDriveProvider: TestDriveProvider,
    private loadingCtrl: LoadingController,
    private util: Util,
    private toastSvr: ToastService,
    private translate: TranslateService,
    private drivingSvc: DrivingRecordService,
    private loadingSvc: LoadingService,
    private storeage: IvtStorageService,
    private modalCtrl: ModalController,
    private camera: CameraService,
    private fileSvc: FileService,
    private vehicleOdometerService: VehicleOdometerService,
    private bluetoothSvc: BluetoothService,
    private notificationService: NotificationService
  ) {
    this.tabElement = document.querySelector('.tabbar')
    this.displayTab('none');
    this.item = navParams.get('item')
    this.applicationId = navParams.get('applicationId')
    this.drivenDurationInSec = navParams.get('drivenDurationInSec') as moment.Duration;
    this.displayDrivenDurationInSec = this.drivenDurationInSec.format('HH:mm:ss', {
      trim: false
    });

    this.drivenMileage = navParams.get('drivenMileage')

    this.callback = this.navParams.get('callback');

    this.previousRecordItems = [];


    console.log("record로 부터 받아온 item 파라미터값: ", this.item)

    this.translate.get('msg.available_gps').subscribe((value) => {
      this.availableGpsString = value;
    });

    this.getAppSetting();
  }

  private getAppSetting() {
    this.appSetting = this.storeage.get(Config.AppSetting);
  }

  private displayTab(display: string) {
    if (this.tabElement && this.tabElement.style)
      this.tabElement.style.display = display;
  }
  ionViewWillEnter() {
    this.displayTab('none');
  }
  ionViewWillLeave() {
    this.displayTab('flex');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestDriveResultPage');
    this.loading = this.loadingCtrl.create()
    this.getDrivingRecords()

    // this.requestGeolocation()

  }
  private openVhcPage(vehicleId: number) {
    let profileModal = this.modalCtrl.create('VehicleHealthCheckPage', {
      vehicleId: vehicleId,
      BeforeTestDrive: false
    }, {
        cssClass: 'full-modal'
      });
    profileModal.present();
  }
  private async takeOdometer(applicationId: number) {
    let profileModal = this.modalCtrl.create('DriveShootingPage', {
      applicationId: applicationId,
      pageType: 'odometer',
      BeforeTestDrive: false
    }, {
        cssClass: 'full-modal'
      });
    profileModal.present();
  }

  private subscribe() {
    if (this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
      if (this.subscription == undefined || this.subscription.closed == true) {
        this.subscription = this.notificationService.takeOdometerAfterDrive.subscribe(result => {
          this.subscription.unsubscribe();
          if (this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
            this.openVhcPage(this.item.vehicleId)
          }
          else {
            this.moveSurvey();
          }
        })
      }
    }
    if (this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
      if (this.vhcSubscription == undefined || this.vhcSubscription.closed == true) {
        this.vhcSubscription = this.notificationService.updateAfterVehicleHealthCheck.subscribe(result => {
          this.vhcSubscription.unsubscribe();
          this.moveSurvey();
        })
      }
    }
  }

  finishTestDrive() {
    if (this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
      this.takeOdometer(this.applicationId)
    }
    else if (this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
      this.openVhcPage(this.item.vehicleId)
    }
    else {
      this.moveSurvey();
    }
    this.subscribe();
  }

  moveSurvey() {
    //운행 기록 종료 버튼 탭
    this.finishDrivingRecord()
    /*
        let confirm = this.alertCtrl.create({
    //TODO translate처리. 메시지 텍스트 부분
          title: 'Thanks.',
          buttons: [
            {
              text: 'Go to Survey',
              handler: () => {



                let data = {
                  data: surveyItem

                }

              }
            }
          ]
        });
        confirm.present();*/
  }



  async finishDrivingRecord() {
    console.log("finishDrivingRecord running...");
    const loader = await this.loadingSvc.create('msg.finishing_driving_record');
    loader.present();
    this.drivingSvc.finishRecord({
      applicationId: this.applicationId,
      startLatitude: null,
      driveStartTime: null,
      startLongitude: null
    }).toPromise().then(
      () => {
        let customer = new Customer();
        customer.fullName = this.item.customerFullName;
        // customer id is not correctly an application id. They are different, will fix this later
        customer.id = this.applicationId
        this.navCtrl.push("SurveyDetailPage", { customer: customer, disableBack: true }).then(
          _ => loader.dismiss()
        );
        this.navCtrl.popToRoot();
      },
      err => {
        console.error('[finishDrivingRecord] error happens..', err);
        const msg = err.message || 'msg.failed_to_finish_record';
        this.toastSvr.error(msg);
        loader.dismiss();
      }
    )
  }

  getDrivingRecords() {
    this.loading.present();

    this.drivingRecord = this.testDriveProvider.getDrivingRecords({ applicationId: this.applicationId })
    this.drivingRecord.subscribe((res) => {

      if (res.code === APICode.Success) {
        console.log("getDriving record!: ", res.data)


        for (let item of res.data) {
          this.previousRecordItems.push({
            drivenStartTime: /* this.util.koreanDateFormat(item.driveStartTime)*/ moment(item.driveStartTime).locale(Config.moment.locale).format("LLL"),
            drivenDurationInSec: moment(parseInt(item.drivenDurationInSec) * 1000).utc().locale(Config.moment.locale).format("HH:mm:ss"),
            drivenMileage: item.drivenMileage,
            endFullAddress: item.endFullAddress,
            startFullAddress: item.startFullAddress,
            endLatitude: item.endLatitude,
            endLongitude: item.endLongitude,
            recordId: item.id
          })
          console.log("this.previousRecordItems: ", this.previousRecordItems)

          this.totalDrivingTime += item.drivenDurationInSec
          this.totalDrivenMileage += item.drivenMileage

          console.log("Record this: ", this)
        }
        this.displayTotalDrivenMileage = parseFloat(this.totalDrivenMileage.toFixed(1))
        this.displayTotalDrivingTime = moment(parseInt(this.totalDrivingTime) * 1000).utc().locale(Config.moment.locale).format("HH:mm:ss")


        return this.loading.dismiss()
        /* {
          items: [{
            id: 1,
            startLatitude: 43.54645645,
            endLatitude: 43.54645645,
            startLongitude: 54.334454,
            endLongitude: 54.334454,
            startFullAddress: "",
            endFullAddress: "",
            drivenMileage: 10.20,
            drivenDurationInSec: 4234,
            drivingRecordStatusEnum: "Done"
          }]
        }*/
      } else {
        //TODO 기존 기록이 없어서 받아올 값이 없으므로. 초기 상태로 시작하기 위해 초기값으로 세팅.
      }
    },
      err => {
        console.error('[getDrivingRecords]..', err);
        this.loading.dismiss();
      }
    )

  }

  private generateUniqueFileName(): string {
    return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
  }

  // getAddress() {
  //   let getAddress = this.testDriveProvider.getFormattedAddress(this.latlng)

  //   getAddress.subscribe((res: any) => {
  //     if (res.code === APICode.Success) {
  //       this.startAddress = res.data
  //       console.log("this.statAddress: ", this.startAddress)
  //       return this.uploadContinueDrivingRecord()
  //     } else {
  //       console.log(res);
  //       return alert("error!")
  //     }
  //   })
  // }

  // disposableGeolocation() {
  //   // this.loading.present()

  //   const getCurrentGeo = this.geolocation.getCurrentPosition()
  //   getCurrentGeo.then((data) => {

  //     this.latlng = {
  //       latitude: data.coords.latitude,
  //       longitude: data.coords.longitude,
  //       language: null
  //     }
  //     if (this.latlng)
  //       console.log("Result Page. getCurrentPosition. latlng값 있음. ")
  //     return this.getAddress()

  //   }, err => {
  //     console.error("Network Error!", err)
  //     // console.error('ERROR', err.error.message);
  //   })

  //   // return getCurrentGeo

  // }

  // requestGeolocation() { //위경도 변화 없을때 가져오는용도.


  //   const geolc = this.geolocation.watchPosition({ timeout: 100 });

  //   geolc.subscribe((data) => {

  //     if (data) {

  //       console.log('gps 정보 정상적으로 받아옴 (gps 퍼미션 체크 완료)')
  //     } else {
  //       this.toastSvr.success('msg.please_check_gps_permission');
  //       // this.navCtrl.goToRoot(null)
  //     }

  //   }, (e) => {
  //     this.toastSvr.success(this.availableGpsString + ': ' + JSON.stringify(e));
  //     // this.navCtrl.goToRoot(null)
  //   })


  // }


}
