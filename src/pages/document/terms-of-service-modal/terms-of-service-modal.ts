import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'terms-of-service-modal',
  templateUrl: 'terms-of-service-modal.html'
})
export class TermsOfServiceModal {
 
  content : any;
  constructor(params: NavParams, public viewCtrl: ViewController) {
      this.content = params.get('showTerms');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
