import { Component, ViewChild } from '@angular/core';
import {
  AlertController,
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  ViewController,
  LoadingController,
  Select,
} from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { VehicleRegistrationTakepicGuidePage } from '../vehicle-registration-takepic-guide/vehicle-registration-takepic-guide';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleTypeService, ModelYearService, TrimService } from '../../services/vehicle.type.service';
import { VehicleTypeSegment, ModelYearSegment, TrimSegment } from '../../models/vehicle/vehicle.segment.model';
import { APIResponse } from '@ivt/http-client';

import { VehicleSegmentModel } from '../../models/vehicleSegment.model';

import { Vehicle } from '../../models/vehicle/vehicle.model';
import { ToastService } from '../../services/toast.service';
import { FileService } from '../../services/file.service';
import { Picture } from '../../models/picture.model';
import { CameraComponent } from '../../component/camera/camera.component';
import { BluetoothService } from '../../services/bluetooth.service';
import { IvtDevice } from '../../models/device.model';
import { DialogService } from '../../services/dialog.service';
import { Utils } from '../../services/util.service';

/**
 * Generated class for the VehicleRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-registration',
  templateUrl: 'vehicle-registration.html',
})
export class VehicleRegistrationPage {
  dummyDevice = new IvtDevice();
  devices: IvtDevice[] = [];
  private vehicleTypeSegments: Array<VehicleTypeSegment>;
  private trimSegments: Array<TrimSegment> = [];
  private modelYearSegments: Array<ModelYearSegment> = [];
  @ViewChild(CameraComponent) private cameraComponent: CameraComponent;

  private vehicle = new Vehicle();
  private frontPictures: Array<Picture> = [];
  private backPictures: Array<Picture> = [];



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastService: ToastService,
    private translateService: TranslateService,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private vehicleService: VehicleService,
    private vehicleTypeService: VehicleTypeService,
    private modelYearService: ModelYearService,
    private trimService: TrimService,
    private fileSvc: FileService,
    private bluetoothSvc: BluetoothService,
    private loadingCtrl: LoadingController,
    private dialogSvc: DialogService,
    private utils: Utils
  ) {
    this.loadData();
  }

  searchBluetooth() {
    //if (!this.utils.isBrowser()) {
      this.dialogSvc.alert(this.translateService.instant('vehicle_registration.activate_the_bluetooth_add_on_status_in_the_bluetooth_setting')).then(() => {
        this.scanningDevices(); 
      })
    //}
  }

  loadData() {
  
    this.dummyDevice.id = "anonymous_device";
    this.dummyDevice.name = "anonymous_device";

    this.vehicleTypeService.search().subscribe(
      _items => {
        this.vehicleTypeSegments = _items;
      },
      (res: APIResponse) => {
        this.toastService.error(res.message);
      }
    );
    this.vehicle = this.navParams.get('vehicle') || new Vehicle();
  }

  takePicModal(side) {
    this.showTakePictureGuide(side)
  }

  showTakePictureGuide(front: boolean) {
    this.navCtrl.push('VehicleRegistrationTakepicGuidePage', { 'side': front ? 'front' : 'rear' });
  }

  cancelTab() {
    this.navCtrl.pop();
  }

  save() {
    this.uploadPhotos(this.vehicle).then(() => {
      this.vehicleService.save(this.vehicle).subscribe(
        () => {
          let msg = '';
          if (this.vehicle.id) {
            msg = 'msg.vehicle_is_updated';
          } else {
            msg = 'msg.vehicle_is_registered';
          }
          this.toastService.success(msg).then(() => {
            this.navCtrl.pop();
          })
        },
        (res: APIResponse) => {
          console.log('create vehicle:', res);
          this.toastService.error(res.message)
        }
      )
    })

  }

  uploadPhotos(vehicle: Vehicle) {
    return this.cameraComponent.upload().then(_result => {
      if (_result._frontPictures.length > 0) {
        this.vehicle.frontPicture = _result._frontPictures[0];
      }
      if (_result._backPictures.length > 0) {
        this.vehicle.sidePicture = _result._backPictures[0];
      }
    })
  }

  changeVehicleType(vehicleType: VehicleTypeSegment) {
    this.vehicle.modelYear = null;
    this.vehicle.trim = null;
    this.modelYearService.search(vehicleType.id).subscribe(
      _items => {
        this.modelYearSegments = _items;
      },
      (res: APIResponse) => {
        this.toastService.error(res.message);
      }
    )
  }

  changeModelYear(modelYear: ModelYearSegment) {
    this.vehicle.trim = null;
    this.trimService.search(modelYear.id).subscribe(
      _items => {
        this.trimSegments = _items;
      },
      (res: APIResponse) => {
        this.toastService.error(res.message);
      }
    )
  }

  checkVehicleTypeValid() {
    if(!this.vehicle.vehicleType) {
      this.toastService.error('msg.please_select_a_vehicle_model_first');
    }
  }

  checkYearValid() {
    if(!this.vehicle.modelYear) {
      this.toastService.error('msg.please_select_a_vehicle_model_and_an_year_first');
    }
  }

  async scanningDevices($event?: Event) {
    let loader = this.loadingCtrl.create({
      content: this.translateService.instant('vehicle_registration.scanning_bluetooth_devices'),
      enableBackdropDismiss: true
    });
    loader.present();

    this.devices = await this.bluetoothSvc.discoverUnpaired();
    loader.dismiss();
    if (this.devices.length == 0) {
      this.dialogSvc.alert(this.translateService.instant('vehicle_registration.no_bluetooth_device_found'));
    }
  }
}