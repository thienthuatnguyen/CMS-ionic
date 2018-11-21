import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Platform } from 'ionic-angular';

import { SettingService } from '../../services/setting.service';
import { Setting } from '../../models/setting.model';
import { IvtSecurityService } from '@ivt/security';
import { Insomnia } from '@ionic-native/insomnia';
import { Config } from '../../app/app.config';
import { Autostart } from '@ionic-native/autostart';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;
  settingsReady = false;
  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;
  subSettings: any = SettingsPage;

  settingItems: Array<any> = [
    // hidden auto start button
    // {
    //   name: Config.setting.auto_start,
    //   type: 'toggle',
    //   platform: 'android',
    //   value: true
    // },
    {
      name: Config.setting.prevent_screen_from_sleeping,
      type: 'toggle',
      value: false
    },
    {
      name: 'settings.change_profile_picture',
      type: 'navigation',
      page: 'ChangeProfilePage',
      params: {
        page: 'profilePicture',
        pageTitleKey: 'SETTINGS_PAGE_PROFILE'
      }
    },
    {
      name: 'settings.change_password',
      type: 'navigation',
      page: 'ChangePasswordPage',
      params: {
        page: 'profile',
        pageTitleKey: 'SETTINGS_PAGE_PROFILE'
      }
    },
    {
      name: 'settings.select_language',
      type: 'navigation',
      page: 'SelectLanguagePage'
    }
  ]

  constructor(public navCtrl: NavController,
    public settings: SettingService,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    private insomnia: Insomnia,
    private platform: Platform,
    private autostart: Autostart
  ) {

  }



  ionViewWillLeave() {
    this.save();
  }

  save() {
    this.settings.clear();
    this.settings.saveAll(this.settingItems.filter((_item) => _item.type === 'toggle').map(_item => {
      const setting = new Setting();
      setting.name = _item.name;
      setting.value = _item.value;
      return setting;
    }))
  }

  ionViewWillEnter() {
    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })
    this.settings.search().subscribe(_settings => {
      this.settingItems.forEach(_item => {
        const _mapedSetting = _settings.find(_setting => _setting.name === _item.name);
        if (_mapedSetting) {
          _item.value = _mapedSetting.value;
        }
      })
    })
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
  cancel() {
    this.navCtrl.pop();
  }
  async settingChanged(name: string, value: string) {
    await this.platform.ready();
    // this.save();
    if (name === Config.setting.prevent_screen_from_sleeping) {
      if (value.toString() == 'false') {
        this.insomnia.allowSleepAgain().then(
          () => console.log('success'),
          (err) => console.log('error', err)
        );
      } else {
        this.insomnia.keepAwake().then(
          () => console.log('success'),
          (err) => console.log('error', err)
        );
      }
    }

    if (name === Config.setting.auto_start) {
      if (value.toString() == 'false') {
        this.autostart.disable();
      } else {
        this.autostart.enable();
      }
    }
  }
}
