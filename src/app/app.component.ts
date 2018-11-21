import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Config, ModalController, Nav, Platform, AlertController, LoadingController } from 'ionic-angular';
import { IvtStorageService, IvtSecurityConfig, IvtSecurityService, User, Tenant } from '@ivt/security';

import { FirstRunPage, MainPage, HomeTab } from '../pages';
import { VehicleItems } from '../providers';
import { SplashPage } from '../pages/splash/splash';
import { FileService } from '../services/file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityService } from '../security/security.service';
import { Insomnia } from '@ionic-native/insomnia';
import { SettingService } from '../services/setting.service';
import * as moment from 'moment';
import { Utils } from '../services/util.service';
import { Config as stdConfig } from './app.config';
import { DEALER_CODE, USER_NAME } from '../pages/login/login';
import { DocumentDirection } from 'ionic-angular/platform/platform';
import { LocalSettingModel } from '../models/config/local.setting.model';
import { LanguageService } from '../services/language.service';
import { UpdateVersionService } from '../services/update.version.service';

@Component({
  templateUrl: './app.component.html'
})
export class MyApp {
  menuSide: string = 'right';
  reminderList: any;
  rootPage = FirstRunPage;
  user: User;
  tenant: Tenant = new Tenant();
  @ViewChild(Nav) nav: Nav;
  avatar: any = "assets/icon/write_document.png";
  pages: any[] = [
    { no: 1, iconSrc: "icon_home", title: 'menu.home', component: 'ListMasterPage' },
    { no: 2, iconSrc: "icon_cal_checklist", title: 'menu.test_drive_reservation', component: 'ReservationPage' },
    { no: 3, iconSrc: "icon_guage", title: 'menu.test_drive', component: 'ReservationListPage' },
    { no: 4, iconSrc: "icon_survey", title: 'menu.cs_survey', component: 'CsSurveyPage' },
    { no: 5, iconSrc: "icon_carsearch", title: 'menu.vehicle_health_check', component: 'VehicleHealthCheckPage' },
    { no: 6, iconSrc: "icon_vehicle_list", title: 'menu.vehicle_list', component: 'VehicleListPage' },
    { no: 7, iconSrc: "icon_setting", title: 'menu.setting', component: 'SettingsPage' },
    // { no: 8, iconSrc: "icon_book", title: 'menu.manual', component: 'ManualPage' },
    { no: 9, iconSrc: "icon_logout", title: 'menu.logout', component: 'LoginPage' },

  ]
  constructor(
    public domSanitizer: DomSanitizer,
    private translate: TranslateService,
    private platform: Platform,
    private config: Config,
    modalCtrl: ModalController,
    public items: VehicleItems,
    private storageService: IvtStorageService,
    private securityConfig: IvtSecurityConfig,
    private service: IvtSecurityService,
    private fileService: FileService,
    private insomnia: Insomnia,
    public settingService: SettingService,
    private utils: Utils,
    private fileSvc: FileService,
    private languageService: LanguageService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private updateVersionService: UpdateVersionService
  ) {
    this.languageService.onDirectionChanged(
      (isRTL) => {
        if (isRTL) {
          this.menuSide = 'left';
          this.platform.setDir(<DocumentDirection>stdConfig.direction.rtl, true);
        }
        else {
          this.menuSide = 'right';
          this.platform.setDir(<DocumentDirection>stdConfig.direction.ltr, true);
        }
      }
    )
    this.initTranslate(); // this should be at the first line

    this.user = new User();
    let securityService: any = this.service;
    (securityService as SecurityService).processAfterLogin(result => {
      this.avatar = null;
      this.user = this.service.getUser();
      if (this.user) {
        if (this.user.tenant)
          this.tenant = this.user.tenant;
        if (this.user.pictureID)
          fileService.download(this.user.pictureID).then(result => {
            this.avatar = result;
          })
      } else {
        this.user = new User();
      }
    })
    var locale = /*window.navigator.userLanguage || */window.navigator.language;
    moment.locale(locale)



    this.settingService.search().subscribe(_settings => {
      const _mapedSetting = _settings.find(_setting => _setting.name === 'Prevent Screen From Sleeping');
      if (_mapedSetting) {
        if (_mapedSetting.value.toString() === 'false') {
          this.insomnia.allowSleepAgain();
        }
        else {
          this.insomnia.keepAwake();
        }
      }
      else {
        this.insomnia.allowSleepAgain();
      }
    })

    this.user = this.service.getUser();
    if (this.user) {
      if (this.user.tenant)
        this.tenant = this.user.tenant;
      if (this.user.pictureID)
        fileService.download(this.user.pictureID).then(result => {
          this.avatar = result;
        })
    } else {
      this.user = new User();
    }
    platform.ready().then(() => {
        window.open('http://192.168.1.19/index.html');

      // platform.setDir(<DocumentDirection>LocalSettingModel.direction, true);
      platform.registerBackButtonAction(() => {
        // do nothing, disable back button from device
        // will implement later when there is new requirement


      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();

      /* this.splashScreen.show();

       setTimeout(()=>{
         this.splashScreen.hide();
       },4000)*/
      // Sentry.init({ dsn: 'https://1105f08f77244b29807da44f617b22ef@sentry.io/120482' });

      let splash = modalCtrl.create(SplashPage);
      splash.present().then(()=>{
        if(this.platform.is('android')){
          this.updateVersionService.updateVersionAndroid();
        }
      });
      this.settingService.search().subscribe(_settings => {
        const _mapedSetting = _settings.find(_setting => _setting.name === stdConfig.setting.prevent_screen_from_sleeping);
        if (_mapedSetting) {
          if (_mapedSetting.value.toString() === 'false') {
            this.insomnia.allowSleepAgain();
          } else {
            this.insomnia.keepAwake();
          }
        } else {
          this.insomnia.allowSleepAgain();
        }
      });

    });

    // this.storageService.save("vehicleList", this.items.items);
    this.securityConfig.onUnAuthorized = (err) => {
      this.nav.setRoot('LoginPage');
    }

    this.reminderList = [];
    let i = 0;
    while (i < 10) {
      i++;
      this.reminderList.push({
        id: i,
        name: "Test Drive appointment is approaching " + i,
        vehicle: "TUCSON (52 3679)",
        driver: "LEE GUHA (010-1234-5678)",
        time: "03/09/2018 11:30AM - 12:30PM"
      });
    }

    this.storageService.save("reminderList", this.reminderList);
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    this.translate.use(LocalSettingModel.lang); // Set your language here
    // will check later
    // const browserLang = this.translate.getBrowserLang();

    // if (browserLang) {
    //   if (browserLang === 'zh') {
    //     const browserCultureLang = this.translate.getBrowserCultureLang();

    //     if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
    //       this.translate.use('zh-cmn-Hans');
    //     } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
    //       this.translate.use('zh-cmn-Hant');
    //     }
    //   } else {
    //     this.translate.use(this.translate.getBrowserLang());
    //   }
    // } else {
    //   this.translate.use('ar'); // Set your language here
    // }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    switch (page.no) {
      case 1: this.nav.setRoot(MainPage, { opentab: HomeTab }); break;
      case 2: this.nav.setRoot(MainPage, { opentab: 1 }); break;
      case 3: this.nav.setRoot(MainPage, { opentab: 2 }); break;
      case 4: this.nav.setRoot(MainPage, { opentab: 3 }); break;
      // case 8: {
      //   window.open('http://www.google.com', '_system');
      //   break;
      // }
      // case 8:
      //   if (!this.utils.isBrowser()) {
      //     this.fileSvc.viewDocument('www/assets/doc/SmartTestDriveManual.pdf', 'application/pdf', {
      //       title: 'Manual'
      //     });
      //   }
      //   break;
      case 9: {
        this.logout();
        break;
      }
      default:
        this.nav.push(page.component);
        break;
    }

  }
  logout() {
    this.service.logout();
    let dealerCode = localStorage.getItem(DEALER_CODE);
    let username = localStorage.getItem(USER_NAME);
    localStorage.clear();
    localStorage.setItem(DEALER_CODE, dealerCode);
    localStorage.setItem(USER_NAME, username);
    this.nav.setRoot('LoginPage');
  }
}
