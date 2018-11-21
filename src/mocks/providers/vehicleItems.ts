import {Injectable} from '@angular/core';

import {Item} from '../../models/item';
import * as moment from 'moment';
import { Vehicle } from '../../models/vehicle/vehicle.model';

@Injectable()
export class VehicleItems {
  items: Vehicle[] = [];

  today : any = moment().format('MM/DD/YYYY'); //목업 데이터용


  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    //실제 아이템 값
    // this.items = [{
    //   "id": 9,
    //   "tenantId": 1,
    //   "tenantName": "LEE JAEHO",
    //   "vehicleTypeDisplayName": "Avante",
    //   "trimDisplayName": "Limited",
    //   "licensePlateNo": "55나 3421",
    //   "pairedDeviceId": "324234-2342-4234234-2342",
    //   "pairedDeviceDisplayName": "Avante(55나 4567)",
    //   "vehicleFrontSidePictureId": "234234-234324-2424-423",
    //   "vehicleSidePictureId": "234234-234-234324234-234-234",
    //   "vehicleStatusEnum": "Active",
    //   "vehicleDrivingStatusEnum": "On the Road",
    //   "initialMileage": 1000,
    //   "drivenMileage": 0,
    //   "drivenDurationInSec": 0,
    //   "assignmentCount": 0,
    //   "currentLatitude": 33.13,
    //   "currentLongitude": 34.12,
    //   "currentFullAddress": "대한민국 서울시 강서구 염창동",
    //   "vehicleDisplayName": "Avante(55나 4567), 2017, Limited",
    //   "creationTime": "2018-05-09 12:00:00"},
    //   {
    //     "id": 10,
    //     "tenantId": 1,
    //     "tenantName": "",
    //     "vehicleTypeSegmentId": 1,
    //     "modelYearSegmentId": 2,
    //     "trimSegmentId": 3,
    //     "vehicleTypeDisplayName": "Avante",
    //     "modelYearDisplayName": "2017",
    //     "trimDisplayName": "Limited",
    //     "licensePlateNo": "55나 3421",
    //     "pairedDeviceId": "324234-2342-4234234-2342",
    //     "pairedDeviceDisplayName": "Avante(55나 9999)",
    //     "vehicleFrontSidePictureId": "234234-234324-2424-423",
    //     "vehicleSidePictureId": "234234-234-234324234-234-234",
    //     "vehicleStatusEnum": "Active",
    //     "vehicleDrivingStatusEnum": "Waiting",
    //     "initialMileage": 1000,
    //     "drivenMileage": 0,
    //     "drivenDurationInSec": 0,
    //     "assignmentCount": 0,
    //     "currentLatitude": 33.13,
    //     "currentLongitude": 34.12,
    //     "currentFullAddress": "대한민국 서울시 강서구 염창동",
    //     "vehicleDisplayName": "Avante(55나 9999), 2017, Limited",
    //     "creationTime": "2018-05-09 12:00:00"},
    //     {
    //       "id": 11,
    //       "tenantId": 1,
    //       "tenantName": "",
    //       "vehicleTypeSegmentId": 1,
    //       "modelYearSegmentId": 2,
    //       "trimSegmentId": 3,
    //       "vehicleTypeDisplayName": "Avante",
    //       "modelYearDisplayName": "2017",
    //       "trimDisplayName": "Limited",
    //       "licensePlateNo": "55나 3421",
    //       "pairedDeviceId": "324234-2342-4234234-2342",
    //       "pairedDeviceDisplayName": "Avante(55나 8888)",
    //       "vehicleFrontSidePictureId": "234234-234324-2424-423",
    //       "vehicleSidePictureId": "234234-234-234324234-234-234",
    //       "vehicleStatusEnum": "Repair",
    //       "vehicleDrivingStatusEnum": "",
    //       "initialMileage": 1000,
    //       "drivenMileage": 0,
    //       "drivenDurationInSec": 0,
    //       "assignmentCount": 0,
    //       "currentLatitude": 33.13,
    //       "currentLongitude": 34.12,
    //       "currentFullAddress": "대한민국 서울시 강서구 염창동",
    //       "vehicleDisplayName": "Avante(55나 8888), 2017, Limited",
    //       "creationTime": "2018-05-09 12:00:00"}
    // ];
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((items) => {

      if(params.userId == undefined && params.name == undefined){
        return 1 //전체검색
      }

      return null;
    });


  }

  add(item: Vehicle) {
    this.items.push(item);
  }

  delete(item: Vehicle) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
