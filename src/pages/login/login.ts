import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { MainPage } from '../';
import { LoginModel } from '../../models/login.model';
import { IvtSecurityService, IvtStorageService } from '@ivt/security';
import { UserInfoModel, UserInfoServerModel } from '../../models/userInfo.model';
import { Config } from '../../app/app.config';
import { UserService } from '../../services/user.service';
import { LocalizationModel } from '../../models/config/localization.model';
import { ToastService } from '../../services/toast.service';
import { AppSettingService } from '../../services/app.setting.service';
import { AppSettingModel } from '../../models/config/app.setting.model';
import { LanguageService } from '../../services/language.service';
import { LocalSettingModel } from '../../models/config/local.setting.model';
export const DEALER_CODE = 'dealerCode';
export const USER_NAME = 'username';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  currentlanguage: string;
  langList: { name: string; value: string; culture: string, direction: string }[];

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: LoginModel;
  constructor(private navCtrl: NavController,
    private toastService: ToastService,
    private translateService: TranslateService,
    private userService: UserService,
    private securityService: IvtSecurityService,
    private storeage: IvtStorageService,
    private loadingCtrl: LoadingController,
    private appSettingService: AppSettingService,
    private languageService: LanguageService
  ) {
    this.langList = this.languageService.search();
    this.currentlanguage = LocalSettingModel.lang;
    this.account = new LoginModel();
    this.account.tenancyName = localStorage.getItem(DEALER_CODE);
    this.account.usernameOrEmailAddress = localStorage.getItem(USER_NAME);
  }
  // Attempt to login in through our User service
  doLogin(form) {
    if (!form.form.valid) {
      return;
    }

    let loading = this.loadingCtrl.create({
      content: this.translateService.instant('msg.login')
    });

    loading.present();

    this.securityService.login(this.account).subscribe(
      (resp) => {

        localStorage.setItem(DEALER_CODE, this.account.tenancyName);
        localStorage.setItem(USER_NAME, this.account.usernameOrEmailAddress);

        this.userService.getAllPermissionsForApp().toPromise().then(permission => {
          this._saveAllPermission(permission);
        })

        this.appSettingService.search().toPromise().then(setting => {
          this.storeage.save(Config.AppSetting, setting);
        })
        this.navCtrl.push(MainPage).then(
          _ => loading.dismiss()
        )
      },
      (err) => {
        loading.dismiss();
        this.toastService.error(this.translateService.instant('LOGIN_ERROR'));
      });
  }
  async changeLanguage(lang) {
    this.languageService.changeLanguage(lang);
  }
  private _saveLocalizationsForApp(response) {
    let localization = new LocalizationModel();
    localization.AbpConfig = response.Abp;
    localization.STDConfig = response.SmartTestDrive;
    this.storeage.save(Config.LocationForApp, localization);
  }

  private _saveAllPermission(response) {
    // will consider about json object from server later
    if (response && response.length > 0)
      this.storeage.save(Config.AllPermissionForApp, response[0]);
  }
}
