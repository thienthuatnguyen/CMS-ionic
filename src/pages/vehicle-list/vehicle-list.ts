import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Item } from '../../models/item';
import { IvtStorageService } from '@ivt/security';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle/vehicle.model';

/**
 * Generated class for the VehicleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-list',
  templateUrl: 'vehicle-list.html',
})
export class VehicleListPage {

  id: any
  vehicles: Array<Vehicle>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    protected vehicleService: VehicleService
  ) {}
  ionViewDidEnter() {
    this.vehicleService.search(true).subscribe(
      _list => {
        this.vehicles = _list;
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleListPage');
  }
  showDetail(vehicle?: Vehicle) {
    this.navCtrl.push("VehicleRegistrationPage", {vehicle: vehicle});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
