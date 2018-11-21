import {Injectable} from '@angular/core';
import {Item} from './item';
import * as moment from 'moment';
export class VehicleOnRoad {
  customerFullName: string;
  consultantUserName: string;
  vehicleDisplayName: string;
  trimDisplayName: string;
  currentFullAddress: string;
  vehicleImage: string;
  drivenMileage: string;
  drivenDurationInSec: string;
  creationTime: string;
  constructor() {
  }
}
export class VehicleWaitting {
  vehicleDisplayName: string;
  todayReservationCount: number;
  constructor() {
  }
}

