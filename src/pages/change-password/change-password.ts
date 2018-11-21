import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { PasswordService } from '../../services/password.service';
import { PasswordModel } from '../../models/password.model';
import { ToastService } from '../../services/toast.service';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html'
})
export class ChangePasswordPage {
  // Our local settings object
  password: any;
  newPassword: any;
  newPasswordRepeat: any;
  account = new PasswordModel();

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    private alertCtrl: AlertController,
    private passwordService: PasswordService,
    private toastCtrl: ToastController,
    private toastSvc: ToastService
  ) {
    this.account.CurrentPassword = '';
    this.account.NewPassword = '';
    this.account.NewPasswordRepeat = '';
  }
  cancel() {
    this.navCtrl.pop();
  }

  changePassword(form: any) {
    if (!form.form.valid) {
      return;
    }
    let confirm = this.alertCtrl.create({
      title: this.translate.instant('msg.are_you_sure_you_want_to_change_password'),
      message: '',
      buttons: [
        {
          text: this.translate.instant('CANCEL_BUTTON'),
          handler: () => {
          }
        }, {
          text: this.translate.instant('OK_BUTTON'),
          handler: () => {
            this.passwordService.save(this.account).subscribe(res => {
              this.toastSvc.success('msg.your_password_have_change');
              this.navCtrl.push('LoginPage');
            }, (err) => {
              this.toastSvc.error(err.message);
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
