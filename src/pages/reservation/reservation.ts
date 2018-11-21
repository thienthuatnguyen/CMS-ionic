import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import moment from 'moment';
import { Item } from '../../models/item';
import { Reservation, ReservationModel } from '../../models/reservation/reservation.model';
import { ReservationTimeSlotModel } from '../../models/reservation/reservation.timeslot.model';
import { Util, VehicleItems } from '../../providers';
import { _ } from 'underscore';
import { AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Vehicle } from '../../models/vehicle/vehicle.model';
import { ReservationService } from '../../services/reservation.service';
import { Config } from '../../app/app.config';
import { VehicleService } from '../../services/vehicle.service';
import { IvtStorageService, IvtSecurityService } from '@ivt/security';
import { ToastService } from '../../services/toast.service';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'reservation.html'
})
export class ReservationPage {
  maxYear = (new Date()).getFullYear() + 1;
  private reservationObj: any = {
    consultantUserId: null,
    timeSlot: [],
    reservationStatus: null
  };
  currentItems: any = [];
  reserveDate: any;
  reservation: Reservation;
  reservationTimeSlots: ReservationTimeSlotModel[];
  vehicleList: Vehicle[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    private util: Util,
    private service: ReservationService,
    private vehicleService: VehicleService,
    private toastSvc: ToastService,
    private navParam: NavParams,
    private securityService: IvtSecurityService) {
    let userInfor = this.securityService.getUser();
    this.reservationObj.consultantUserId = userInfor.id; 
    this.init();
  }
  private init(){
    this.reservationObj.timeSlot = [];
    this.reservationObj.reservationStatus = null;
    let reservationFromServer : ReservationModel;
    if (this.navParam.data.item) {
      reservationFromServer = this.navParam.data.item;
      this.reservation = this.util.transformToReservation(reservationFromServer);
      this.reservation.appointmentDate = moment(this.reservation.appointmentDate).locale(Config.moment.locale).format(Config.date.YYYYMMDD)
      this.reservationObj.reservationStatus = reservationFromServer.applicationStatusEnum; 
    }
    else {
      this.reservation = new Reservation();
      this.reservation.consultantUserId = this.reservationObj.consultantUserId
      this.reservation.appointmentDate = moment().locale(Config.moment.locale).format(Config.date.YYYYMMDD)
    }
  }
  ionViewWillEnter() {
    this.init();
    this.getAvailableReservationTimeSlots();
    this.getVehicle();
    this.setCurrentReservationTimeSlot();
  }
  private getVehicle() {
    this.vehicleService.search().subscribe(result => {
      this.vehicleList = result;
    }, fail => {
      this.toastSvc.error(fail.message);
    })
  }

  selectTimeSlot(item: ReservationTimeSlotModel, index: number) {
    if (this.reservationObj.timeSlot.length == 0) {
      this.reservationObj.timeSlot.push({ timeSelected: item.timeInHHMM, id: index })
      item.timeSelected = true;
    }
    else {
      let result = _.where(this.reservationObj.timeSlot, { id: index })
      if (result.length == 0) {
        if (this.reservationObj.timeSlot[0].id - index == 1 || this.reservationObj.timeSlot[this.reservationObj.timeSlot.length - 1].id - index == -1) {
          this.reservationObj.timeSlot.push({ timeSelected: item.timeInHHMM, id: index })
          item.timeSelected = true;
          this.reservationObj.timeSlot = _.sortBy(this.reservationObj.timeSlot, 'id');
          console.log(this.reservationObj.timeSlot);
        }
        else {
          this.toastSvc.error(this.translate.instant('reservation.this_time_slot_cannot_selected'));
        }
      }
      else {
        // remove time slot
        if (this.reservationObj.timeSlot[0].id === index) {
          this.reservationTimeSlots[index].timeSelected = false;
          this.reservationObj.timeSlot.splice(0, 1);
        } 
        else if (this.reservationObj.timeSlot[this.reservationObj.timeSlot.length - 1].id === index) {
          this.reservationTimeSlots[index].timeSelected = false;
          this.reservationObj.timeSlot.pop();
        }
        else {
          this.reservationObj.timeSlot = [];
          this.reservationTimeSlots.forEach((timeSlot: ReservationTimeSlotModel) => {
            timeSlot.timeSelected = false;
          })
        }        
      }
    }
  }
  changeReservationDate(reservationDate: string) {
    if (this.reservation.vehicleId) {
      this.resetAvaillableTimeSlot();
    }
  }

  changeVehicle(vehicleId: number) {
    if (this.reservation.appointmentDate) {
      this.resetAvaillableTimeSlot();
    }
  }
  private resetAvaillableTimeSlot(){
    this.reservation.appointmentFromTime = null;
    this.reservation.appointmentToTime = null;
    this.getAvailableReservationTimeSlots()
  }
  private getAvailableReservationTimeSlots() {
    let searchCriteria = {
      applicationId: this.reservation.id || null,
      consultantUserId: this.reservationObj.consultantUserId,
      vehicleId: this.reservation.vehicleId || null,
      appointmentDateLocal: this.reservation.appointmentDate
    }
    this.service.getAvailableReservationTimeSlots(searchCriteria).subscribe((result: ReservationTimeSlotModel[]) => {
      this.reservationTimeSlots = result;
      this.setCurrentReservationTimeSlot();
    }, fail => {
      // to do later
    })
  }

  setCurrentReservationTimeSlot() {
    this.reservationObj.timeSlot = [];
    if(this.reservationTimeSlots){
    this.reservationTimeSlots.forEach((item: ReservationTimeSlotModel, index: number) => {
      if(item.timeInHHMM >= this.reservation.appointmentFromTime && item.timeInHHMM <= this.reservation.appointmentToTime)  {
        item.timeSelected = true;
        this.reservationObj.timeSlot.push({ timeSelected: item.timeInHHMM, id: index })
      }
    })
  }
  }

  private getTimeSlotIndex(list: ReservationTimeSlotModel[], timeSlot: string) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].timeInHHMM == timeSlot)
        return i;
    }
    return -1;
  }

  isDisabled(item: ReservationTimeSlotModel) : boolean{
    return ((this.reservation.vehicleId === 0) || item.assignedToMe || item.assignedToOtherConsultantUser || item.assignedToThisVehicle)
  }

  isSelectedTimeSlot(item: ReservationTimeSlotModel) {
    return (item.timeInHHMM >= this.reservation.appointmentFromTime && item.timeInHHMM <= this.reservation.appointmentToTime)
  }

  isOwnReservation(): boolean {
    if (this.reservation.consultantUserId)
      return this.reservation.consultantUserId == this.reservationObj.consultantUserId
    return true;
  }
  isDoneReservation (): boolean{
    return this.util.isDoneReservation(this.reservationObj.reservationStatus);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  cancel() {
    this.navCtrl.parent.select(2);
  }

  save() {
    let title = this.translate.instant('YOUR_RESERVATION_HAS_BEEN_CHANGED_DO_YOU_WANT_TO_SAVE_IT');
    if (this.reservation.id === undefined)
      title = this.translate.instant('ARE_YOU_SURE_YOU_WANT_TO_MAKE_A_RESERVATION');
    let confirm = this.alertCtrl.create({
      title: title,
      buttons: [
        {
          text: this.translate.instant('CANCEL_BUTTON')
        }, {
          text: this.translate.instant('OK_BUTTON'),
          handler: () => {
            let timeSlots = this.reservationObj.timeSlot;

            if(timeSlots.length>0){
              this.reservation.appointmentFromTime = timeSlots[0].timeSelected;
              this.reservation.appointmentToTime = timeSlots[timeSlots.length - 1].timeSelected;
            }
            else {
              this.reservation.appointmentFromTime = null;
              this.reservation.appointmentToTime = null;
            }
            this.service.save(this.reservation).subscribe(success => {
              this.toastSvc.success(this.translate.instant('YOUR_RESERVATION_WAS_MADE_OR_WAS_CHANGED_SUCCESSFULLY'));
              this.navCtrl.parent.select(2);
            }, fail => {
              this.toastSvc.error(fail.message);
            })
          }
        }
      ]
    });
    confirm.present();
  }

  cancelReservation() {
    let confirm = this.alertCtrl.create({
      title: this.translate.instant('ARE_YOUR_SURE_YOU_WANT_TO_CANCEL_THIS_RESERVATION'),
      buttons: [
        {
          text: this.translate.instant('CANCEL_BUTTON'),
        }, {
          text: this.translate.instant('OK_BUTTON'),
          handler: () => {
            this.service.cancel({ id: this.reservation.id }).subscribe(success => {
              this.toastSvc.error(this.translate.instant('YOUR_RESERVATION_WAS_CANCELED_SUCCESSFULLY'));
              this.navCtrl.parent.select(2);
            }, fail => {
              this.toastSvc.error(fail.message);
            });

          }
        }
      ]
    });
    confirm.present();
  }
}
