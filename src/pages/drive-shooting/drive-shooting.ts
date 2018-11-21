import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ViewController } from 'ionic-angular';

import { Util } from '../../providers';
import { CameraService } from '../../services/camera.service';
import { FileService } from '../../services/file.service';
import { IvtSecurityService } from '@ivt/security';
import { ToastService } from '../../services/toast.service';
import { VehicleOdometerService } from '../../services/vehicle.odometer.service';
import { LoadingService } from '../../services/loading.service';
import { DrivingRecordService } from '../../services/driving.record.service';
import { VehicleOdometerModel } from '../../models/VehicleOdometer.model';
import { NotificationService } from '../../services/notification.service';

@IonicPage()
@Component({
  selector: 'drive-shooting',
  templateUrl: 'drive-shooting.html'
})
export class DriveShootingPage {
  pageType: string;
  constructor(public navCtrl: NavController,
    private camera: CameraService,
    private fileSvc: FileService,
    private vehicleOdometerService: VehicleOdometerService,
    private navParams: NavParams,
    private toastSvc: ToastService,
    private notificationService: NotificationService,
    private viewCtrl: ViewController
  ) {
  }
  ionViewDidEnter() {
    this.pageType = this.navParams.get('pageType');
  }
  async takePicture() {
    if(this.pageType == 'odometer') {
      let _base64: string;
      let applicationId = this.navParams.data.applicationId;
      _base64 = await this.camera.getPicture();
      let _id = await this.fileSvc.upload(_base64, {});
      let vehicleOdometerModel = new VehicleOdometerModel();
      vehicleOdometerModel.applicationId = applicationId;
      vehicleOdometerModel.odometerPictureId = _id;
      this.vehicleOdometerService.save(vehicleOdometerModel).subscribe(() => {
      },(fail)=>{
        this.toastSvc.error(fail.message);
      });
      if (this.navParams.data && this.navParams.data.BeforeTestDrive) {
        this.notificationService.takeOdometerBeforeDrive.next(true);
      }
      if (this.navParams.data && !this.navParams.data.BeforeTestDrive) {
        this.notificationService.takeOdometerAfterDrive.next(true);
      }
    }
    
    this.viewCtrl.dismiss();
  }
}
