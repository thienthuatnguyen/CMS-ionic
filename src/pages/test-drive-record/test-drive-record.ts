import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams, Platform } from 'ionic-angular';

import { Items, Util } from '../../providers';
import { TestDriveResultPage } from "../test-drive-result/test-drive-result";
import { TranslateService } from "@ngx-translate/core";
import * as moment from 'moment';
import 'moment-duration-format';
import { RealTimeCheckProvider } from "../../providers/real-time-check/real-time-check";
import { RealTimeItems } from "../../models/realtimeItems";
import { TestDrivingModel } from "../../models/testDrivingModel";
import { TestDriveProvider } from "../../providers/test-drive/test-drive";
import { Subscription } from "rxjs/Subscription";
import { APICode, APIResponse } from "@ivt/http-client";
import { IvtStorageService } from "@ivt/security";
import { DrivingRecordRequest, DrivingRecordService, DrivingRecord, DrivingLocation, DrivingRawRecordsRequest } from '../../services/driving.record.service';
import { Observable } from 'rxjs/Observable';
import { BackgroundGeolocation, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { GeoService } from '../../services/geo.service';
import { LoadingService } from '../../services/loading.service';
import { ToastService } from '../../services/toast.service';
import { TaskQueueService, TaskQueue, RETRY_TIMEOUT, Task } from '../../services/task.queue.service';
import { retry } from 'rxjs/operators';
import { Config } from '../../app/app.config';


/**
 * Generated class for the TestDriveRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-drive-record',
  templateUrl: 'test-drive-record.html',
})
export class TestDriveRecordPage {

  queue: TaskQueue;
  private readonly RECORD_SIZE = 10; // how many recording locations we post to server at a time
  private tabElement: any;
  private lastRecordedLocation: BackgroundGeolocationResponse;
  private calculatedLocs: Array<BackgroundGeolocationResponse> = [];

  private timeout: any;

  private getAddress() {
    this.drivingRecordService.getFormattedAddress({
      latitude: this.drivingRecordRequest.startLatitude,
      longitude: this.drivingRecordRequest.startLongitude,
      language: null
    }).toPromise().then(
      val => this.startAddress = val
    );
  }
  okString: any;
  cancelString: any;

  recordId: any;
  confirmWord: string;
  item: any;
  startAddress: string

  drivenMileage: number

  displayDrivenDurationInSec: string;
  timePassed: moment.Duration = moment.duration();
  drivingRecordRequest: DrivingRecordRequest;
  isTestDriving: boolean = true;
  timer: number;

  playButtonIcon = 'pause';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private items: Items,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    public util: Util,
    private testDriveProvider: TestDriveProvider,
    private storageService: IvtStorageService,
    private loadingCtrl: LoadingController,
    private drivingRecordService: DrivingRecordService,
    private geoService: GeoService,
    private loadingSvc: LoadingService,
    private toastSvc: ToastService,
    private taskQueueService: TaskQueueService
  ) {

    this.confirmWord = "";

    this.tabElement = document.querySelector('.tabbar')
    this.displayTab('none');

    this.item = navParams.get('item'); //Reservation Number가져와야 함.
    this.recordId = navParams.get('recordId');

    translate.get('ENDTESTDRIVE_CONFIRM').subscribe((value) => {
      this.confirmWord = value;
    })

    translate.get('CANCEL_BUTTON').subscribe((value) => {
      this.cancelString = value;
    })

    translate.get('OK_BUTTON').subscribe((value) => {
      this.okString = value;
    });

    this.drivingRecordRequest = navParams.get('recordRequest');


    this.queue = this.taskQueueService.createQueue("TestDriveRecordPage_" + new Date().getTime(), {
      retryTimeout: RETRY_TIMEOUT
    });
    this.lastRecordedLocation = null;
    this.getAddress();
    this.watchingDrivenDistance();
  }

  ionViewDidLeave() {

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
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  ionViewDidLoad() {
    // this can be init state or background-resume state
    console.log('view did load');
    this.queue.execute();
    this.startTimer();
  }



  private watchingDrivenDistance() {
    console.log('start watchingDrivenDistance');
    this.drivenMileage = 0;
    this.geoService.subscribe(
      (loc: BackgroundGeolocationResponse) => {
        this.calculatedLocs.push(loc);
        console.log('[test-drive-record] getting new loc = ', JSON.stringify(loc));
        // this.toastSvc.success('Getting new loc ' + loc.latitude + '-' + loc.longitude);
        if (this.lastRecordedLocation) {
          this.drivenMileage += this.geoService.getDistanceFromLatLonInKm(this.lastRecordedLocation.latitude, this.lastRecordedLocation.longitude, loc.latitude, loc.longitude);
        }
        this.lastRecordedLocation = loc;
        console.log('Current mileage ', this.drivenMileage);
        this.postRecordingLocations(this.calculatedLocs.splice(0), this.drivenMileage, this.timePassed.asSeconds());
      }
    )
    // this.geoService.switchToForeground();

  }
  private _startTime: moment.Moment;
  private _restartTime: moment.Moment;

  private startTimer() {
    this._startTime = moment(moment(), Config.date.SeverFormatMoment);
    this.displayDrivenDurationInSec = this.timePassed.locale(Config.moment.locale).format('HH:mm:ss', {
      trim: false
    });
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this._restartTime = moment(moment(), Config.date.SeverFormatMoment);
      let time = this._restartTime.diff(this._startTime, 'seconds');
      this._startTime = this._restartTime;
      if (time > 1) {
        this.timePassed.add(time, 's');
      }
      else {
        this.timePassed.add(1, 's');
      }
      this.displayDrivenDurationInSec = this.timePassed.locale(Config.moment.locale).format('HH:mm:ss', {
        trim: false
      })
    }, 1000);
  }

  private postRecordingLocations(calculatedLocs: Array<BackgroundGeolocationResponse>, drivenMileage: number, timePassed: number, flushAll?: boolean) {
    if (this.geoService.getStoredLocations().length > 0) {
      const drivingLocations = calculatedLocs.map((loc, index) => {
        return {
          latitude: loc.latitude,
          longitude: loc.longitude,
          accuracy: loc.accuracy,
          speed: loc.speed,
          heading: loc.coords ? loc.coords.heading : null,
          recordOrder: new Date().getTime(),
          recordTime: moment(loc.time).toISOString()
        } as DrivingLocation
      });
      const payload = {
        applicationId: this.drivingRecordRequest.applicationId,
        drivenDurationInSec: timePassed,
        drivenMileage: drivenMileage,
        drivingRawRecords: drivingLocations,
        drivingRecordId: this.recordId
      } as DrivingRawRecordsRequest;

      const task = new Task(
        () => {
          return this.createDrivingRawRecords(payload);
        }
      );
      this.queue.add(task);
    }
  }


  async endTestDrive() {
    try {

      const title_first_line = await this.translate.get('test_drive.exit_test_drive_title_first_line').toPromise();
      const title_second_line = await this.translate.get('test_drive.exit_test_drive_title_second_line').toPromise();
      const subtitle = await this.translate.get('test_drive.exit_test_drive_subtitle').toPromise();

      let confirm = this.alertCtrl.create({
        title: `<span>${title_first_line}</span><br><span>${title_second_line}</span>`,
        message: subtitle,
        buttons: [
          {
            text: this.cancelString,
            handler: () => {
            }
          }, {
            text: this.okString,
            handler: async () => {
              this.isTestDriving = false;
              this.stopTimer();
              this.geoService.stop();
              const loader = await this.loadingSvc.create('msg.posting_test_drive_result');
              loader.present();
              this.queue.stop(() => { });
              try {
                await this.drivingRecordService.endRecord({
                  applicationId: this.drivingRecordRequest.applicationId,
                  drivenDurationInSec: this.timePassed.asSeconds(),
                  drivenMileage: this.drivenMileage,
                  driveEndTime: moment().toISOString(),
                  endLatitude: this.lastRecordedLocation ? this.lastRecordedLocation.latitude : null,
                  endLongitude: this.lastRecordedLocation ? this.lastRecordedLocation.longitude : null,
                  id: this.recordId
                }).toPromise();
                return this.nextToResultPage();

              } catch (err) {
                this.isTestDriving = true;
                console.error('[endRecord] fail..', err);
                // let msg = err.message || 'msg.failed_to_end_driving_record';
                // this.toastSvc.error(msg);
              } finally {
                loader.dismiss();
              }
            }
          }
        ]
      });
      confirm.present();
    } catch (err) {
      console.error('[endTestDrive]..', err);
    }
  }

  private async createDrivingRawRecords(request: DrivingRawRecordsRequest): Promise<boolean> {
    let result = false;
    console.log('[createDrivingRawRecords] mileage= ', request.drivenMileage + ', duration=' + request.drivenDurationInSec);
    console.log('[createDrivingRawRecords] records= ', JSON.stringify(request.drivingRawRecords));
    try {
      await this.drivingRecordService.createDrivingRawRecords(request).toPromise();
      console.log('[createDrivingRawRecords] success ');
      result = true;
    } catch (err) {
      console.log('[createDrivingRawRecords] fail..', err);
    }
    return result;
  }
  private nextToResultPage() {
    this.geoService.stop();
    this.stopTimer();
    this.navCtrl.setRoot(
      "TestDriveResultPage",
      {
        item: this.item,
        applicationId: this.drivingRecordRequest.applicationId,
        drivenDurationInSec: this.timePassed,
        drivenMileage: this.drivenMileage
      })
    return this.navCtrl.popToRoot(); // to destroy TestDriveRecord Page
  }

  togglePlayButton() {
    this.isTestDriving = !this.isTestDriving;
    if (this.isTestDriving) {
      this.resumeRecording();
    } else {
      this.pauseRecording();
    }
  }

  private stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      // this.timer.clearInterval();
    }
  }

  private resumeRecording() {
    this.startTimer();
    this.geoService.resumeRecord();
    this.playButtonIcon = 'pause';
  }
  private pauseRecording() {
    this.stopTimer();
    this.geoService.pauseRecord();
    this.playButtonIcon = 'play';
  }
}

