import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VehicleRegistrationTakepicGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-registration-takepic-guide',
  templateUrl: 'vehicle-registration-takepic-guide.html',
})
export class VehicleRegistrationTakepicGuidePage {

  isFront: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isFront = this.navParams.get('side') === 'front';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleRegistrationTakepicGuidePage');
  }

}
