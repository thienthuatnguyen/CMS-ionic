import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Api} from "../api/api";
import {Config} from "../../app/app.config";
// import {TestdrivingAddress} from "../../models/testdrivingItems";

/*
  Generated class for the TestDriveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class TestDriveProvider {


  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello TestDriveProvider Provider');
  }


  getFormattedAddress(geolocation) {
    let seq = this.api.post(Config.api.GetFormattedAddress, geolocation).share();
    /* let data
     seq.subscribe((res: any) => {
       // console.log(res)
       if (res.success == true) {
         let address = new TestdrivingAddress
         address.setAddress(res.result)
         console.log("address.address  provider: ",address.getAddress() );

       } else {
         console.log(res);

       }
     }, err => {

       alert("Network Error!")
       console.error('ERROR', err.error.message);
     });*/
    return seq

  }

  uploadStartDrivingRecord(record) {
    let seq = this.api.post(Config.api.StartDrivingRecord, record).share();
    /*seq.subscribe((res: any) => {
      if (res.success == true) {
        console.log(res);
      } else {
        console.log(res);
      }
    }, err => {
    });*/
    return seq;
  }

  uploadContinueDrivingRecord(record) {
    let seq = this.api.post(Config.api.ContinueDrivingRecord, record).share();
  /*  seq.subscribe((res: any) => {
      if (res.success == true) {
        console.log(res);
      } else {
        console.log(res);
      }
    }, err => {
    });*/
    return seq;
  }


  uploadCreateDrivingRawRecords(record) {
    let seq = this.api.post(Config.api.CreateDrivingRawRecords, record).share();
    seq.subscribe((res: any) => {
      console.log(res)
      /*
            if (res.success == true) {
              console.log("CreateDrivingRawRecords 저장성공",res);

            } else {
              console.log(res);
            }
          }*/
    }, err => {
    });
    return seq;

  }

  uploadEndDrivingRecord(record) {
    let seq = this.api.post(Config.api.EndDrivingRecord, record).share();
    seq.subscribe((res: any) => {
      console.log(res)

    }, err => {
      console.error('uploadEndDrivingRecord error')
      // this.uploadEndDrivingRecord(record) // 에러시 자동 호출
    });
    return seq;
  }
  uploadFinishDrivingRecord(record) {
    let seq = this.api.post(Config.api.FinishDrivingRecord, record).share();
    seq.subscribe((res: any) => {
      console.log(res)

    }, err => {
      console.error('uploadFinishDrivingRecord error')
      // this.uploadEndDrivingRecord(record) // 에러시 자동 호출
    });
    return seq;
  }
  getDrivingRecords(record) {
    let seq = this.api.post(Config.api.GetDrivingRecords, record).share();
    seq.subscribe((res: any) => {
      console.log(res)

    }, err => {
      console.error('uploadFinishDrivingRecord error')
      // this.uploadEndDrivingRecord(record) // 에러시 자동 호출
    });
    return seq;
  }


}
