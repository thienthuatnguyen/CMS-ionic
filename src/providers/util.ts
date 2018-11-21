import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from "ionic-angular";
import { Device } from "@ionic-native/device";
import { ReservationModel, Reservation, ReservationDocument } from '../models/reservation/reservation.model';
import moment from 'moment';
import { _ } from 'underscore';
import { Config } from '../app/app.config';
@Injectable()
export class Util {

  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public device: Device, ) {


  }

  isDoneReservation(status): boolean {
    return Config.reservation.done.indexOf(status) >= 0
  }

  // getCurrentLoginId() {
  //   let result = this.securityService.getUser();
  //   if (result)
  //     return result.id;
  //   return 0;
  // }
  // getCurrentUserInfor() : User {
  //   return this.securityService.getUser();
  // }

  transformToDocument(item: ReservationModel): ReservationDocument {
    let document = new ReservationDocument();
    document.id = item.id;
    document.vehicleId = item.vehicleId;
    document.vehicleDisplayName = item.vehicleDisplayName;
    document.consultantUserId = item.consultantUserId
    document.customerFullName = item.customerFullName
    document.customerPhoneNumber = item.customerPhoneNumber
    document.customerEmailAddress = item.customerEmailAddress
    document.recommenderFullName = item.recommenderFullName
    document.customerSalutationEnum = item.customerSalutationEnum
    document.driverLicenseFrontSidePictureId = item.driverLicenseFrontSidePictureId
    document.driverLicenseBackSidePictureId = item.driverLicenseBackSidePictureId
    document.isAgreedWithTermsAndConditions = item.isAgreedWithTermsAndConditions
    document.isAgreedWithPrivacyPolicy = item.isAgreedWithPrivacyPolicy
    document.isAgreedWithEmailMarketing = item.isAgreedWithEmailMarketing
    document.customerSignatureId = item.customerSignatureId
    document.consultantSignatureId = item.consultantSignatureId
    document.customerSignedTime = item.customerSignedTime;
    document.consultantSignedTime = item.consultantSignedTime;
    return document;
  }
  transformToReservation(item: ReservationModel): Reservation {
    let reservation = new Reservation();
    reservation.id = item.id;
    reservation.vehicleId = item.vehicleId || 0;
    reservation.recommenderFullName = item.recommenderFullName;
    reservation.customerPhoneNumber = item.customerPhoneNumber;
    reservation.customerFullName = item.customerFullName;
    reservation.customerEmailAddress = item.customerEmailAddress;
    reservation.consultantUserId = item.consultantUserId;
    if (item.appointmentFromDateTimeLocal) {
      reservation.appointmentFromTime = moment(item.appointmentFromDateTimeLocal).locale(Config.moment.locale).format("HH:mm");
      reservation.appointmentDate = item.appointmentFromDateTimeLocal;
    }
    if (item.appointmentToDateTimeLocal) {
      reservation.appointmentToTime = moment(item.appointmentToDateTimeLocal).locale(Config.moment.locale).format("HH:mm");
    }
    return reservation;
  }
  transformToReservationList(items: any) {
    if (!items)
      return null;
    let list: any = [];
    items.forEach((element: ReservationModel) => {
      element.appointmentDateLocal = moment(element.appointmentFromDateTimeLocal, Config.date.YYYYMMDD).toDate();
      element.appointmentFromDateTimeLocal = moment(element.appointmentFromDateTimeLocal, Config.date.SeverFormatMoment).toDate();
      element.appointmentToDateTimeLocal = moment(element.appointmentToDateTimeLocal, Config.date.SeverFormatMoment).toDate();
      list.push(element);
    });
    return list;
  }

  transformToGroupBy(collection: any, property: string): any {
    if (!collection)
      return null;
    collection = _.sortBy(collection, property);
    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }
      return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

  buildSignature(signaturePadDataUrl: string, fileName: string){
    let blob : any = this.base64toBlob(signaturePadDataUrl, '.png');
    blob.name = fileName;
    return blob;

  };

  autoLocaleFormat(date){
console.log("Result KoreaFormat: ",moment(date).format(Config.date.TestDriveResultKoreanFormat))
    return moment(date).format(Config.date.TestDriveResultKoreanFormat)
  }
  durationDateFormat(date){

    return moment(date).format(Config.date.TestDriveResultDurationDateFormat)
  }

private base64toBlob(dataURI, contentType) {
    contentType = contentType || '';
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(rawLength);
    for(let i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return new Blob([array], { type: contentType });
}

  checkDeviceOS() {
      return this.device.platform
  }

  /*
    callLoadingBar(sel) {
      let loading  = this.loadingCtrl;

      if (sel == 'create') {
        loading.create();
      }
      else if (sel == 'play') {
        loading.present()
      } else if (sel == 'dismiss') {
        loading.dismiss()
      }
    }*/


  callConfirmAlert(title, msg, bt1Text, bt1Func?, bt2Text?, bt2Func?) {
    if (bt2Text) { //버튼 2개인 경우
      let confirm = this.alertCtrl.create({
        title: title,
        message: msg,
        buttons: [
          {
            text: bt1Text,
            handler: () => {
              return bt1Func
            }
          },
          {
            text: bt2Text,
            handler: () => {
              return bt2Func
            }
          }
        ]
      });
      confirm.present();
    }
    else { //버튼 1개인 경우.
      let confirm = this.alertCtrl.create({
        title: title,
        message: msg,
        buttons: [
          {
            text: bt1Text,
            handler: () => {
              return bt1Func
            }
          }
        ]
      });
      confirm.present();

    }
  }
}
