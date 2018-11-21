import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Util } from '../../providers';
import { CameraService } from '../../services/camera.service';
import { Picture } from "../../models/picture.model";
import { FileService } from '../../services/file.service';
import { User, IvtSecurityService } from '@ivt/security';
import { SecurityService } from '../../security/security.service';
import { ToastService } from '../../services/toast.service';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-change-profile',
  templateUrl: 'change-profile.html'
})
export class ChangeProfilePage {
  userInfor: User;
  Pictures: any;
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private camera: CameraService,
    private fileSvc: FileService,
    private util: Util,
    private ivtSecurityService: IvtSecurityService,
    private toastSvc: ToastService,
    public domSanitizer: DomSanitizer,

  ) {
  }
  changeAvatar() {

    this.camera.getPicture(200, 200, true).then(
      _base64 => {
        let picture = new Picture();
        picture.url = _base64;

        this.Pictures = picture;
      }
    )
  }
  ionViewDidEnter() {
    this.userInfor = this.ivtSecurityService.getUser()
    this.Pictures = new Picture();
    this.Pictures.id = this.userInfor.pictureID;
    this.fileSvc.download(this.Pictures.id).then(
      url => this.Pictures.url = url
    )

  }
  submitSave() {
    this.fileSvc.uploadProfile(this.Pictures.url, { fileName: this.generateUniqueFileName() }).then(
      _id => {
        this.Pictures.id = _id;
        let _service: any = this.ivtSecurityService;
        let user = this.ivtSecurityService.getUser();
        user.pictureID = _id;
        (_service as SecurityService).upateProfile(user);
        this.toastSvc.success('msg.save_successful');
      }

    )
  }

  cancel() {
    this.navCtrl.pop();
  }

  private generateUniqueFileName(): string {
    return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
  }

}
