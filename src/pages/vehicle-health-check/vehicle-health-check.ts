import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { VehicleItems, Util } from "../../providers";
import { DomSanitizer } from "@angular/platform-browser";
import * as moment from 'moment';
import { MarkService } from '../../services/mark.service';
import { VehicleService } from '../../services/vehicle.service';
import { APIResponse } from '@ivt/http-client';
import { ToastService } from '../../services/toast.service';
import { Mark, DamageTypeEnum } from '../../models/vehicle/mark.model';
import { FileService } from '../../services/file.service';
import { AxisPosition } from '../../models/position.model';
import { VehicleHealthCheckModel, VhcCommentPhotosModel } from '../../models/commentAndPhoto.model';
import { VehcileHealthCheckService } from '../../services/commentAndPhoto.service';
import { ImageModal } from './imageModal/image-modal';
import { VHCService } from '../../services/mark.comment.service';
import { CameraService } from '../../services/camera.service';
import { Picture } from '../../models/picture.model';
import { HistoryDetailPage } from './history/vhc-history';
import { Config } from '../../app/app.config';

import { _ } from 'underscore';
import { LocalSettingModel } from '../../models/config/local.setting.model';
import { LanguageService } from '../../services/language.service';
import { NotificationService } from '../../services/notification.service';
/**
 * Generated class for the VehicleHealthCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-vehicle-health-check',
  templateUrl: 'vehicle-health-check.html',
})


export class VehicleHealthCheckPage {
  fontSize: any;
  Pictures: Picture[] = [];
  checkDamage: Mark[];
  checkDamageScalable = [];
  vehicleList: any;
  @ViewChild('canvas') ElementRef
  @ViewChild('markArea') markArea: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.scalePosition();
  }

  vhcPhoto: any;
  private base64Prefix: string = 'data:image/jpeg;base64,';
  photos: any = [];
  history: any;
  private _CANVAS: any;
  private _CONTEXT: any;
  canvasEl: any;

  vhc: VehicleHealthCheckModel;
  displayDateFormat = Config.date.displayShortTime;
  direction: string;
  vehicleIdFromReservation: boolean;
  constructor(
    public domSanitizer: DomSanitizer,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: CameraService,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private elementRef: ElementRef,
    private util: Util,
    private markSvc: MarkService,
    private vehcileHealthCheckService: VehcileHealthCheckService,
    private fileSvc: FileService,
    private toastSvc: ToastService,
    private vehicleSvc: VehicleService,
    private vhcSvc: VHCService,
    private languageService: LanguageService,
    private notifyService: NotificationService
  ) {
    this.languageService.onDirectionChanged(
      (isRTL) => {
        if (isRTL) {
          this.direction = Config.direction.rtl;
        }
        else {
          this.direction = Config.direction.ltr;
        }
      }
    )
    this.vhc = new VehicleHealthCheckModel();
    this.vhcPhoto = [];
    this.checkDamage = [];
    // this.fileSvc.upload('fake', {});
    this.initData();
  }
  initData() {
    this.loadData();
    if (this.navParams.data && this.navParams.data.vehicleId) {
      this.vehicleIdFromReservation = true;
      this.loadVHCItem(this.navParams.data.vehicleId);
    };
  }
  loadData() {
    this.vehicleSvc.search().subscribe(
      _items => {
        this.vehicleList = _items;
      },
      (err: APIResponse) => {
        this.toastSvc.error(err.message);
      }
    );
  }

  loadVHCItem(vehicleId: string) {
    this.loadVhcData(vehicleId);
  }

  private downloadPhoto(vhcCommentPhotos: VhcCommentPhotosModel[]) {
    vhcCommentPhotos.forEach(item => {
      this.fileSvc.download(item.pictureId).then(result => {
        this.Pictures.push({ id: item.pictureId, url: result })
      })
    })
  }
  loadVhcData(vehicleId: string) {
    this.Pictures = [];
    this.vhc = new VehicleHealthCheckModel();
    this.vhc.comment = "";
    this.vhc.id = vehicleId;
    this.vhcSvc.search({ vehicleId: vehicleId }).subscribe((_vhc: any) => {
      if (_vhc) {
        this.checkDamage = _vhc.mark;
        this.vhc.comment = _vhc.vhcComment.comment;
        this.downloadPhoto(_vhc.vhcComment.vhcCommentPhotos)
        this.history = _vhc.vhcCommentHistory;

        this.scalePosition();
      }
    },
      (res: APIResponse) => {
        console.log("Mark error:", res);
      }
    )
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#checkDamageArea')
      .addEventListener('click', this.checkDamageEvent.bind(this));
  }

  checkDamageEvent(event) {
    if(this.vhc.id){
      
      if(event.target.tagName == 'IMG') {
        let mark = new Mark();
        mark.id = null;
        mark.damageType = DamageTypeEnum.Check;

        const iconWidth = this.markArea.nativeElement.offsetWidth / 309 * 8;

        const position = new AxisPosition();
        position.XVal = event.offsetX - iconWidth;
        position.YVal = event.offsetY - iconWidth;
        mark.position = position;

        this.checkDamageScalable.push({
          id: null,
          position: {
            XVal: mark.position.XVal,
            YVal: mark.position.YVal
          }
        });

        mark.position.XVal = Math.round(mark.position.XVal / (this.markArea.nativeElement.offsetWidth / 309)),
        mark.position.YVal = Math.round(mark.position.YVal / (this.markArea.nativeElement.offsetHeight / 232))

        this.checkDamage.push(mark);
      }
      else if(event.target.tagName == 'ION-ICON') {
        let nodes = Array.prototype.slice.call( document.getElementById('checkDamageArea').children );
        const idx = nodes.indexOf( event.target ) - 1;

        this.checkDamage.splice(idx, 1);
        this.checkDamageScalable.splice(idx, 1);
      }      
    }
  }

  cancel() {
    if (this.navParams.data.BeforeTestDrive==false) {
      this.notifyService.updateAfterVehicleHealthCheck.next(true);
      this.viewCtrl.dismiss();
    }
    else
      this.navCtrl.pop();
  }

  submitSave() {
    if (this.navParams.data && this.navParams.data.vehicleId) {
      if (this.navParams.data.BeforeTestDrive) {
        this.notifyService.updateBeforeVehicleHealthCheck.next(true);
      }
      if (!this.navParams.data.BeforeTestDrive) {
        this.notifyService.updateAfterVehicleHealthCheck.next(true);
      }
    }
    this.getVHCPhotoComment().then(result => {
      let vhcCommentAndPhoto = {
        comment: this.vhc.comment,
        vhcCommentPhotos: result
      }
      this.vhcSvc.save(
        {
          vehicleId: this.vhc.id,
          mark: this.checkDamage,
          vhcComment: vhcCommentAndPhoto
        }
      ).subscribe(success => {
        if (this.navParams.data && this.navParams.data.vehicleId) {
          this.viewCtrl.dismiss();
        }
        else {
          this.loadVhcData(this.vhc.id);
        }
      }, (fail) => {
        this.viewCtrl.dismiss();
        this.toastSvc.error(fail.message);
      });
    })
  }
  ngOnInit() { }
  ionViewDidLoad() {
  }
  initialiseCanvas(): void {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }
  setupCanvas(): void {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, 500, 500);
  }

  /**
   * Reset the Canvas element/clear previous content
   *
   * @public
   * @method clearCanvas
   * @return {none}
   */
  clearCanvas(): void {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }

  takePhoto() {
    this.camera.getPicture(200, 200, true).then(
      _base64 => {
        let picture = new Picture();
        picture.url = _base64;
        this.Pictures.push(picture);
        console.log(this.Pictures);
      }
    )
  }
  private uploadFile(urlBlob) {
    return this.fileSvc.upload(urlBlob, { mimeType: ".png" });
  }
  private getVHCPhotoComment(): Promise<any> {
    let lstPictures: any = [];
    let uploadRequests = [];
    return new Promise((resolve, reject) => {
      this.Pictures.forEach(picture => {
        if (!picture.id) {
          uploadRequests.push(this.uploadFile(picture.url).then(result => {
            lstPictures.push({ pictureId: result });
          }))
        }
        else {
          lstPictures.push({ pictureId: picture.id });
        }
      })
      Promise.all(uploadRequests).then(_ => {
        resolve(lstPictures);
      })
    })
  }

  historyDetail(item) {
    let profileModal = this.modalCtrl.create('HistoryDetailPage',
      {
        item: item
      },
      {
        cssClass: 'popup-vehicle'
      }
    );

    profileModal.present();
  }

  scalePosition() {
    this.checkDamageScalable = [];

    this.checkDamage.forEach((value: Mark, i: number) => {
      this.checkDamageScalable.push({
        id: this.checkDamage[i].id,
        position: {
          XVal: this.markArea.nativeElement.offsetWidth / 309 * value.position.XVal,
          YVal: this.markArea.nativeElement.offsetHeight / 232 * value.position.YVal
        }
      })
    })

    this.fontSize = this.markArea.nativeElement.offsetWidth / 309 * 35;
  }
  showImageModal(item: Picture) {
    let imageModal = this.modalCtrl.create('ImageModal', item, {
        cssClass: 'full-modal'
    });
    imageModal.onDidDismiss(data => {
      if (data) {
        if (item.id) {
          this.Pictures = _.reject(this.Pictures, { id: item.id });
        }
        else {
          this.Pictures = _.reject(this.Pictures, { url: item.url });
        }
      }
    });
    imageModal.present();
  }
}