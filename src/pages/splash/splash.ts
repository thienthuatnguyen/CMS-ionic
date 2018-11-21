import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from "@ionic-native/splash-screen";
import { LocalSettingModel } from '../../models/config/local.setting.model';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  splashTitle: string;
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {
    this.splashTitle = LocalSettingModel.splashTitle;
  }

  ionViewDidEnter() {

    this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 2000);

  }
}
