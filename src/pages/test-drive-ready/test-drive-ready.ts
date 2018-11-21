import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  Platform,
  ToastController
} from 'ionic-angular';

import { BLE } from "@ionic-native/ble";
import * as moment from "moment";
import { Subscription, ISubscription } from "rxjs/Subscription";
import { FileService } from "../../services/file.service";
import { DomSanitizer } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '../../services/loading.service';
import { Utils } from '../../services/util.service';
import { ReservationModel } from '../../models/reservation/reservation.model';
import { BluetoothService } from '../../services/bluetooth.service';
import { DrivingRecordService, DrivingRecord, DrivingRecordRequest } from '../../services/driving.record.service';
import { GeoService } from '../../services/geo.service';
import { BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { IvtStorageService } from '@ivt/security';
import { Config } from '../../app/app.config';
import { AppSettingModel } from '../../models/config/app.setting.model';
import { ProgressService } from '../../services/progress.service';
import { DialogService } from '../../services/dialog.service';

/**
 * Generated class for the TestDriveReadyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-test-drive-ready',
  templateUrl: 'test-drive-ready.html',
})
export class TestDriveReadyPage {

  msg: {
    ok: string
  } = {
      ok: 'OK'
    }
  receivingGeolocationString: any;
  doYouWantToProceedAnywayString: any;
  okString: any;
  accessToLocationServicesIsDeniedString: any;
  gpsString: any;
  reasonString: any;
  butFailedString: string;
  triedToConnectToString: string;
  connectionFailedToString: any;
  connectingToBluetoothDeviceString: any;
  noString: any;
  yesString: any;
  bluetoothString: any;
  bluetoothOffString: any;
  startDrivingRecord: any;
  latlng: any
  recordId: any
  item: ReservationModel;
  carInfo: string;
  info: Array<{ userName: any, consultant: any, useTime: any, location: any }>
  btUnpaireItems: Array<{ name: any, address: any, id: any, class: any }>;
  geoItems: any;
  uploadDrivingRecord: any;

  applicationId: any;

  isConnected: boolean

  btMsg: string
  macAddress: string


  startAddress: any

  drivingRecord: any;
  previousRecord: any;
  btConnect: Subscription
  vehiclePicture: any;
  internalSubscription: Subscription;
  private tabElement: any;
  private appSetting: AppSettingModel;
  private readonly GEO_TIMEOUT = 40000;

  private readonly BLUETOOTH_TIMEOUT = 30000;

  constructor(
    private storeage: IvtStorageService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private bluetoothSvc: BluetoothService,
    public platform: Platform,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private fileService: FileService,
    public domSanitizer: DomSanitizer,
    private translate: TranslateService,
    private loadingSvc: LoadingService,
    private utils: Utils,
    private drivingRecordService: DrivingRecordService,
    private geoService: GeoService,
    private progressSvc: ProgressService,
    private dialog: DialogService
  ) {
    this.tabElement = document.querySelector('.tabbar')
    this.displayTab('none');
    this.geoItems = [];
    this.isConnected = false
    this.btUnpaireItems = [];
    this.previousRecord = [];

    //서버로부터 가져온 BT ID값이 같으면 바로 record로 넘김
    this.info = [];
    this.btMsg = 'test_drive.bluetooth_connection_required';

    this.item = navParams.get('item')
    this.applicationId = this.item.id;
    // this.applicationId = 127 //TODO Reservation List에서 받아온 id값이 500 인터널 에러 나서 일단 127로 사용.

    console.log("이전 파라미터: ", this.item);


    this.carInfo = this.item.vehicleDisplayName;

    // this.info.push({
    //   userName: this.item.customerFullName,
    //   consultant: this.item.consultantUserName,
    //   useTime: this.item.time,
    //   location: this.item.location
    // })

    this.translate.get('msg.bluetooth').subscribe((value) => {
      this.bluetoothString = value;
    });

    this.translate.get('msg.bluetooth_is_off_do_you_want_to_proceed_anyway').subscribe((value) => {
      this.bluetoothOffString = value;
    });

    this.translate.get('YES_BUTTON').subscribe((value) => {
      this.yesString = value;
    });

    this.translate.get('NO_BUTTON').subscribe((value) => {
      this.noString = value;
    });

    this.translate.get('test_drive.connection_failed_to').subscribe((value) => {
      this.connectionFailedToString = value;
    });

    this.translate.get('test_drive.tried_to_connect_to').subscribe((value) => {
      this.triedToConnectToString = value;
    });

    this.translate.get('test_drive.but_failed').subscribe((value) => {
      this.butFailedString = value;
    });

    this.translate.get('test_drive.reason').subscribe((value) => {
      this.reasonString = value;
    });

    this.translate.get('test_drive.do_you_want_to_proceed_anyway').subscribe((value) => {
      this.doYouWantToProceedAnywayString = value;
    });

    this.translate.get('msg.gps').subscribe((value) => {
      this.gpsString = value;
    });

    this.translate.get('msg.access_to_location_services_is_denied').subscribe((value) => {
      this.accessToLocationServicesIsDeniedString = value;
    });

    this.translate.get('OK_BUTTON').subscribe((value) => {
      this.okString = value;
    });
    this.getAppSetting();
  }

  private getAppSetting() {
    this.appSetting = this.storeage.get(Config.AppSetting);
  }
  private displayTab(display: string) {
    if (this.tabElement && this.tabElement.style)
      this.tabElement.style.display = display;
  }
  ionViewWillEnter() {
    this.displayTab('none');
  }
  ionViewWillLeave() {
    this.displayTab('flex');
  }

  async ionViewDidEnter() {
    this.getVehiclePicture()
    await this.platform.ready();
    // testing
    // this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive = true;
    if (await this.requestPermission()) {
      this.process();
    }
  }

  async requestPermission(): Promise<boolean> {
    let bluetoothEnable = false; // bluetooth permission is optional
    if (this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive) {
      try {
        bluetoothEnable = await this.bluetoothSvc.enable();
      } catch (err) {
        console.error('[requestPermission] error: ', err);
      }
    } else {
      bluetoothEnable = true;
    }
    return bluetoothEnable && this.requestLocationAccuracy(); // location is mandatory
  }

  /**
   * Get record session id
   */
  async getRecordSession(recordRequest: DrivingRecordRequest): Promise<string> {
    try {
      // console.log('[getRecordSession] applicationId ...', this.applicationId);
      let records = await this.drivingRecordService.search({ "applicationId": this.applicationId }).toPromise();
      console.log('[getRecordSession] get records ...', records);
      let shouldMakeNewSession = false;
      if (!records || records.length == 0) {
        // first test drive
        shouldMakeNewSession = true;
      } else {
        // resort to prevent server side mistake
        records.sort((record1: DrivingRecord, record2: DrivingRecord) => Number(record1.id) - Number(record2.id));
        console.log('[getRecordSession] sort Records: records ...', records);
        const lastRecord = records[records.length - 1];
        if (lastRecord.drivingRecordStatusEnum === DrivingRecord.DrivingRecordStatusEnum.OnRecord) {
          return lastRecord.id;
        } else if (lastRecord.drivingRecordStatusEnum === DrivingRecord.DrivingRecordStatusEnum.Done) {
          shouldMakeNewSession = true;
        }
      }
      if (shouldMakeNewSession) {
        // console.log('[getRecordSession] startRecord: recordRequest ...', recordRequest);
        let newRecord = await this.drivingRecordService.startRecord(recordRequest).toPromise();
        console.log('[getRecordSession] startRecord: newRecord ...', newRecord);
        return newRecord.id;
      }

    } catch (err) {
      console.error('[getRecordSession]', err);
      // this.toastSvc.error('msg.failed_to_get_record_session');
      throw err;
    }
  }

  async requestLocationAccuracy(): Promise<boolean> {
    let permissionOk = await this.geoService.requestLocationPermission();
    if (permissionOk) {
      let requestAccuracyOk = await this.geoService.requestLocationAccuracy();
      if (requestAccuracyOk) {
        return true;
      }
    }
    await this.geoService.displayLocationRequiredAlert();
    this.goBackToReservationList();
    return false;
  }

  getVehiclePicture() {
    this.fileService.download(this.item.vehicleFrontSidePictureId).then(result => {
      this.vehiclePicture = result;
    });
  }

  async process() {
    let passBluetoothChecking = false;
    let targetDeviceId = null;
    if (this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive) {
      let isEnabled = await this.bluetoothSvc.isEnabled();
      if (isEnabled) {
        this.btMsg = 'test_drive.bluetooth_established_test_drive_start_soon'; // change UI text
        try {
          if (this.utils.isIOS() && this.item.pairedDeviceIdOniOS) {
            passBluetoothChecking = true; // scanning classic Bluetooth is not supported on IOS
            // await this.pairWithDevice(this.item.pairedDeviceIdOniOS).then(res => {
            //   pairedDeviceId = this.item.pairedDeviceIdOniOS;
            // })
          } else if (this.utils.isAndroid() && this.item.pairedDeviceIdOnAndroid) {
            const loader = await this.loadingSvc.create('bluetooth.scanning_bluetooth_devices');
            loader.present();
            passBluetoothChecking = await this.findTargetDevice(this.item.pairedDeviceIdOnAndroid);
            loader.dismiss();
            if (passBluetoothChecking) {
              targetDeviceId = this.item.pairedDeviceIdOnAndroid;
            }
          } else {
            // vehicle were not registered with a bluetooth device
            passBluetoothChecking = true;
          }
        } catch (err) {
          console.error(err);
        }
      } else if (this.utils.isIOS()) {
        passBluetoothChecking = true;
      }
    } else {
      passBluetoothChecking = true;
    }
    if (!passBluetoothChecking) {
      let msg = await this.translate.get('test_drive.cannot_find_registered_device').toPromise();
      await this.dialog.alert(msg);
      this.goBackToReservationList();
    } else {
      let loc = await this.requestGeoLocation();
      let requestRecord = {
        applicationId: this.applicationId,
        startLatitude: loc.latitude,
        startLongitude: loc.longitude,
        driveStartTime: moment().toISOString()
      } as DrivingRecordRequest;

      if (targetDeviceId != null) {
        requestRecord.pairedDeviceId = targetDeviceId;
      }
      try {
        let recordId = await this.getRecordSession(requestRecord);
        this.nextPage(recordId, requestRecord);
      } catch (err) {
        console.error('[getRecordSession]..', err);
      }
    }
  }

  /**
   * Scanning for a target device. Promise resolve with true if found, false if not found
   * @param address_or_uuid 
   */
  private async findTargetDevice(address_or_uuid: string): Promise<boolean> {
    try {
      await this.bluetoothSvc.scanWithDeviceID(address_or_uuid);
      // found device;
      return true;
    } catch (ex) {
      // cannot find target device, ask user to try again
      let msg = await this.translate.get('bluetooth.cannot_find_target_device_try_again').toPromise();
      let confirm = await this.dialog.confirm(msg);
      if (confirm) {
        return this.findTargetDevice(address_or_uuid);
      } else {
        return false;
      }
    }
  }
  private async requestGeoLocation(): Promise<BackgroundGeolocationResponse> {
    let loader = await this.loadingSvc.create('msg.receiving_geolocation');
    loader.present();

    return new Promise<BackgroundGeolocationResponse>(
      (parentResolve, parentReject) => {
        let subscription = null;
        const promise = new Promise(
          (resolve, _) => {
            subscription = this.geoService.subscribe(
              async (loc: BackgroundGeolocationResponse) => {
                console.log('Get the first location');
                resolve();
                parentResolve(loc);
                if (subscription) {
                  subscription.unsubscribe();
                }
                loader.dismiss();
              }
            )
          }
        )
        this.progressSvc.observe(
          () => {
            loader.dismiss();
            if (subscription) {
              subscription.unsubscribe();
            }
            this.geoService.stop();
            parentReject();
          },
          promise,
          this.GEO_TIMEOUT
        )
        this.geoService.start();
      }
    );
  }

  /**
   * Promise resolve if pairing successfully, reject if it fails
   * @param btId 
   */
  async pairWithDevice(btId): Promise<any> {
    console.log('Pairing with device ', btId);
    return new Promise(
      async (resolve, reject) => {

        let subscription: ISubscription;
        let loader = await this.loadingSvc.create(this.translate.instant('msg.connecting_to_bluetooth_device'));
        loader.present();
        const promise = new Promise(
          async (finishProgress, _) => {
            subscription = this.bluetoothSvc.connect(btId).subscribe(
              _ => {
                resolve();
                console.log('Bluetooth connected');
                loader.dismiss();
                finishProgress();
              },
              err => {
                reject(err);
                loader.dismiss();
                finishProgress();
              }
            );
          }
        );
        this.progressSvc.observe(
          () => {
            subscription && subscription.unsubscribe();
            reject();
            loader.dismiss();
          },
          promise,
          this.BLUETOOTH_TIMEOUT
        );
      }
    );


  }

  async nextPage(recordId: string, recordRequest: DrivingRecordRequest) {
    this.navCtrl.setRoot('TestDriveRecordPage', {
      item: this.item,
      recordId: recordId,
      recordRequest: recordRequest
    });
    this.navCtrl.popToRoot();
  }

  clickReselection() {
    this.goBackToReservationList();
  }

  private goBackToReservationList() {
    this.navCtrl.setRoot('ReservationListPage');
    this.navCtrl.popToRoot();
    this.geoService.stop();
  }


}
