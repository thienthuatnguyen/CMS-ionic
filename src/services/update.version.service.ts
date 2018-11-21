import { TranslateService } from "@ngx-translate/core";
import { VersionService } from "./version.service";
import { AlertController, LoadingController, Platform } from "ionic-angular";
import { VersionModel } from "../models/version.model";
import { AppVersion } from "@ionic-native/app-version";
import { Injectable } from "@angular/core";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from "@ionic-native/diagnostic";
@Injectable()
export class UpdateVersionService {
  private VersionName: string;
  private versionCode: string;
  private okString: string;
  private laterString: string;
  private yesString: string;
  private confirmString: string;
  private forceUpdateLater: string;
  private forceUpdateNow: string;
  private packageName: string;
  private checkVersion: string;
  private appName: string;
  private versionInfo = {
    version: null,
    name: null,
    url: null
  };
  private forceToUpdate: boolean = true;
  constructor(private translate: TranslateService,
    private appVersion: AppVersion,
    private versionService: VersionService,
    private alertCtrl: AlertController,
    private diagnostic: Diagnostic,
    private platfrom : Platform,
    private loadingCtrl: LoadingController) {

  }
  private async updateAppAndroid(versionInfo) {
    let requestPermission = await this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.WRITE_EXTERNAL_STORAGE);
    console.log(requestPermission);
    if (requestPermission == this.diagnostic.permissionStatus.DENIED) {
       this.showAlertInfo();
    }
    else if (requestPermission == this.diagnostic.permissionStatus.NOT_REQUESTED) {
      let checkPermission = await this.diagnostic.requestRuntimePermission(this.diagnostic.permission.WRITE_EXTERNAL_STORAGE)
      console.log(checkPermission);
      if (checkPermission.WRITE_EXTERNAL_STORAGE == this.diagnostic.permissionStatus.GRANTED || this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE) {
        this.processUpdate(versionInfo);
      }
      else {
        this.showAlertInfo();
      }
    }
    else {
      console.log(requestPermission);
     this.processUpdate(versionInfo);
    }
  }
  private processUpdate(versionInfo){
    (<any>window).AppUpdate.checkAppUpdate(
      (onSuccess) => { },
      (onFail) => { },
      versionInfo, {
        'skipPromptDialog': true
      });
      let confirm = this.alertCtrl.create({
        message: this.translate.instant('msg.app_is_downloading_and_updating'),
        enableBackdropDismiss: false,
        buttons: []
      }).present();
  }
  private showAlertInfo(){
    let confirm = this.alertCtrl.create({
      message: this.translate.instant('msg.to_continue_using_app_you_must_allow_app_to_access_photos_media_and_files_on_your_device'),
      enableBackdropDismiss: false,
      buttons: [
        {
          text: this.okString,
          handler: () => {
            this.platfrom.exitApp();
          }
        }
      ]
    });
    confirm.present();
  }
  async updateVersionAndroid() {
    this.translate.get('OK_BUTTON').subscribe((value) => {
      this.okString = value;
    })
    this.translate.get('msg.later').subscribe((value) => {
      this.laterString = value;
    })
    this.translate.get('YES_BUTTON').subscribe((value) => {
      this.yesString = value;
    })
    this.translate.get('msg.confirm_update').subscribe((value) => {
      this.confirmString = value;
    })
    this.translate.get('msg.force_update_later').subscribe((value) => {
      this.forceUpdateLater = value;
    })
    this.translate.get('msg.force_update_now').subscribe((value) => {
      this.forceUpdateNow = value;
    })
    this.translate.get('msg.checkversion').subscribe((value) => {
      this.checkVersion = value;
    })
    let loading = this.loadingCtrl.create({
      content: this.checkVersion
    });

    loading.present();

    this.packageName = await this.appVersion.getPackageName();
    this.VersionName = await this.appVersion.getVersionNumber();
    this.versionCode = await this.appVersion.getVersionCode();
    this.appName = await this.appVersion.getAppName();

    let versionModel = new VersionModel;
    versionModel.appIdentifier = this.packageName;
    versionModel.currentVersionName = this.VersionName;

    this.versionService.search(versionModel).subscribe((res) => {
      // console.log(res);
      loading.dismiss();
      let data: any = res;
      if (data.latestVersionName != this.VersionName) {
        this.versionInfo.url = data.storeUrl;
        this.versionInfo.version = this.versionCode + 1;
        this.versionInfo.name = this.appName;
        if (data.forceToUpdate == true) {
          let confirm = this.alertCtrl.create({
            title: this.confirmString,
            message: this.forceUpdateNow,
            enableBackdropDismiss: false,
            buttons: [
              {
                text: this.okString,
                handler: () => {
                  this.updateAppAndroid(this.versionInfo);
                }
              }
            ]
          });

          confirm.present();
        }
        else {
          let confirm = this.alertCtrl.create({
            title: this.confirmString,
            enableBackdropDismiss: false,
            message: this.forceUpdateLater,
            buttons: [
              {
                text: this.yesString,
                handler: () => {
                  this.updateAppAndroid(this.versionInfo);
                }
              },
              {
                text: this.laterString,
                handler: () => {

                }
              }
            ]
          });
          confirm.present();
        }

      }

    },
      (error) => {
        console.log(error);
        loading.dismiss();
      }
    );

  }
}
