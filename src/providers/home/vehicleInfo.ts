import {Injectable} from '@angular/core';
import {Api} from '../api/api';

/**
 * @deprecated
 * Use VehicleService instead
 */

@Injectable()
export class RequestVehicleInfo {
  constructor(public api: Api) {}
  public getVehicleInfo( token?: any) {
    let seq = this.api.post('service/vehicle/GetVehiclesWithApplicationForApp', token).share();
    seq.subscribe((res: any) => {
      // console.log(res)
      if (res.success == true) {
            console.log(res);
      } else {
        console.log(res);
      }
    }, err => {
      // console.error('ERROR', err.error.error.message);
    });
    return seq;
  }
  public getVehicleImage(id: any) {
    let seq = this.api.get('service/app/file/GetPicture', id).share();
    seq.subscribe((res: any) => {
      // console.log(res)
      if (res.success == true) {
            console.log(res);
      } else {
        console.log(res);
      }
    }, err => {
      // console.error('ERROR', err.error.error.message);
    });
    return seq;
  }
}
