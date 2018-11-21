import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  private loginFixed: boolean;
  private signupFixed: boolean;

  constructor(public navCtrl: NavController) {
    this.loginFixed = true
    this.signupFixed = true

  }
  ionViewDidLeave(){
    this.loginFixed = true
    this.signupFixed = true
  }

  login() {
    if(this.loginFixed)
      this.navCtrl.push('LoginPage');
    this.loginFixed=false
  }

  signup() {
    if(this.signupFixed)
      this.navCtrl.push('SignupPage');
    this.signupFixed=false
  }
}
