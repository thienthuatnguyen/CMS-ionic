import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'image-modal',
  templateUrl: 'image-modal.html'
})
export class ImageModal {
 

  pictureUrl: string;
  constructor(params: NavParams, 
              public viewCtrl: ViewController, 
              public domSanitizer: DomSanitizer) {
    this.pictureUrl = params.get('url');
  }

  dismiss() {
    this.viewCtrl.dismiss(false);
  }

  delete() {
    this.viewCtrl.dismiss(true);
  }
  
}
