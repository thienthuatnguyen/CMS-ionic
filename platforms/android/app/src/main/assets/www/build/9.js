webpackJsonp([9],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleHealthCheckPageModule", function() { return VehicleHealthCheckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_health_check__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HistoryDetailPage } from './vehicle-health-check';

var VehicleHealthCheckPageModule = /** @class */ (function () {
    function VehicleHealthCheckPageModule() {
    }
    VehicleHealthCheckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_health_check__["a" /* VehicleHealthCheckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_health_check__["a" /* VehicleHealthCheckPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            entryComponents: []
        })
    ], VehicleHealthCheckPageModule);
    return VehicleHealthCheckPageModule;
}());

//# sourceMappingURL=vehicle-health-check.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleHealthCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ivt_security__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_mark_service__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_vehicle_service__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_vehicle_mark_model__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_file_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_position_model__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_commentAndPhoto_model__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_commentAndPhoto_service__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__imageModal_image_modal__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_mark_comment_service__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_camera_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_picture_model__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__history_vhc_history__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_app_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_underscore__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















/**
 * Generated class for the VehicleHealthCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VehicleHealthCheckPage = /** @class */ (function () {
    function VehicleHealthCheckPage(domSanitizer, navCtrl, navParams, camera, alertCtrl, modalCtrl, storageService, elementRef, util, markSvc, vehcileHealthCheckService, fileSvc, toastSvc, vehicleSvc, vhcSvc) {
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storageService = storageService;
        this.elementRef = elementRef;
        this.util = util;
        this.markSvc = markSvc;
        this.vehcileHealthCheckService = vehcileHealthCheckService;
        this.fileSvc = fileSvc;
        this.toastSvc = toastSvc;
        this.vehicleSvc = vehicleSvc;
        this.vhcSvc = vhcSvc;
        this.Pictures = [];
        this.base64Prefix = 'data:image/jpeg;base64,';
        this.photos = [];
        this.displayDateFormat = __WEBPACK_IMPORTED_MODULE_18__app_app_config__["a" /* Config */].date.displayShortTime;
        this.vhc = new __WEBPACK_IMPORTED_MODULE_11__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */]();
        this.vhcPhoto = [];
        this.checkDamage = [];
        // this.fileSvc.upload('fake', {});
    }
    VehicleHealthCheckPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    VehicleHealthCheckPage.prototype.loadData = function () {
        var _this = this;
        this.vehicleSvc.search().subscribe(function (_items) {
            _this.vehicleList = _items;
        }, function (err) {
            _this.toastSvc.error(err.message);
        });
        // this.history = this.storageService.get("vhcList");
    };
    VehicleHealthCheckPage.prototype.loadVHCItem = function (vehicleId) {
        this.loadVhcData(vehicleId);
    };
    VehicleHealthCheckPage.prototype.downloadPhoto = function (vhcCommentPhotos) {
        var _this = this;
        vhcCommentPhotos.forEach(function (item) {
            _this.fileSvc.download(item.pictureId).then(function (result) {
                _this.Pictures.push({ id: item.pictureId, url: result });
            });
        });
    };
    VehicleHealthCheckPage.prototype.loadVhcData = function (vehicleId) {
        var _this = this;
        this.Pictures = [];
        this.vhc = new __WEBPACK_IMPORTED_MODULE_11__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */]();
        this.vhc.comment = "";
        this.vhc.id = vehicleId;
        this.vhcSvc.search({ vehicleId: vehicleId }).subscribe(function (_vhc) {
            if (_vhc) {
                _this.checkDamage = _vhc.mark;
                _this.vhc.comment = _vhc.vhcComment.comment;
                _this.downloadPhoto(_vhc.vhcComment.vhcCommentPhotos);
                _this.history = _vhc.vhcCommentHistory;
            }
        }, function (res) {
            console.log("Mark error:", res);
        });
    };
    VehicleHealthCheckPage.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.querySelector('#checkDamageArea')
            .addEventListener('click', this.checkDamageEvent.bind(this));
    };
    VehicleHealthCheckPage.prototype.checkDamageEvent = function (event) {
        if (this.vhc.id && event.target.tagName == 'IMG') {
            var mark = new __WEBPACK_IMPORTED_MODULE_8__models_vehicle_mark_model__["b" /* Mark */]();
            mark.id = null;
            mark.damageType = __WEBPACK_IMPORTED_MODULE_8__models_vehicle_mark_model__["a" /* DamageTypeEnum */].Check;
            var position = new __WEBPACK_IMPORTED_MODULE_10__models_position_model__["a" /* AxisPosition */]();
            position.XVal = event.offsetX - 9;
            position.YVal = event.offsetY - 18;
            mark.position = position;
            this.checkDamage.push(mark);
        }
    };
    VehicleHealthCheckPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    VehicleHealthCheckPage.prototype.submitSave = function () {
        var _this = this;
        this.getVHCPhotoComment().then(function (result) {
            var vhcCommentAndPhoto = {
                comment: _this.vhc.comment,
                vhcCommentPhotos: result
            };
            _this.vhcSvc.save({
                vehicleId: _this.vhc.id,
                mark: _this.checkDamage,
                vhcComment: vhcCommentAndPhoto
            }).subscribe(function (success) {
                _this.loadVhcData(_this.vhc.id);
            });
        });
    };
    VehicleHealthCheckPage.prototype.ngOnInit = function () { };
    VehicleHealthCheckPage.prototype.ionViewDidLoad = function () {
    };
    VehicleHealthCheckPage.prototype.initialiseCanvas = function () {
        if (this._CANVAS.getContext) {
            this.setupCanvas();
        }
    };
    VehicleHealthCheckPage.prototype.setupCanvas = function () {
        this._CONTEXT = this._CANVAS.getContext('2d');
        this._CONTEXT.fillStyle = "#3e3e3e";
        this._CONTEXT.fillRect(0, 0, 500, 500);
    };
    /**
     * Reset the Canvas element/clear previous content
     *
     * @public
     * @method clearCanvas
     * @return {none}
     */
    VehicleHealthCheckPage.prototype.clearCanvas = function () {
        this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
        this.setupCanvas();
    };
    VehicleHealthCheckPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture(200, 200).then(function (_base64) {
            var picture = new __WEBPACK_IMPORTED_MODULE_16__models_picture_model__["a" /* Picture */]();
            picture.url = _base64;
            _this.Pictures.push(picture);
            console.log(_this.Pictures);
        });
    };
    VehicleHealthCheckPage.prototype.uploadFile = function (urlBlob) {
        return this.fileSvc.upload(urlBlob, { mimeType: ".png" });
    };
    VehicleHealthCheckPage.prototype.getVHCPhotoComment = function () {
        var _this = this;
        var lstPictures = [];
        var uploadRequests = [];
        return new Promise(function (resolve, reject) {
            _this.Pictures.forEach(function (picture) {
                if (!picture.id) {
                    uploadRequests.push(_this.uploadFile(picture.url).then(function (result) {
                        lstPictures.push({ pictureId: result });
                    }));
                }
                else {
                    lstPictures.push({ pictureId: picture.id });
                }
            });
            Promise.all(uploadRequests).then(function (_) {
                resolve(lstPictures);
            });
        });
    };
    VehicleHealthCheckPage.prototype.historyDetail = function (item) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_17__history_vhc_history__["a" /* HistoryDetailPage */], {
            item: item
        }, {
            cssClass: 'popup-vehicle'
        });
        profileModal.present();
    };
    VehicleHealthCheckPage.prototype.scalePosition = function () {
        var _this = this;
        this.checkDamage.forEach(function (value, i) {
            _this.checkDamage[i].position.YVal = _this.markArea.nativeElement.offsetHeight / 232 * value.position.YVal;
            _this.checkDamage[i].position.XVal = _this.markArea.nativeElement.offsetWidth / 309 * value.position.XVal;
        });
    };
    VehicleHealthCheckPage.prototype.showImageModal = function (item) {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__imageModal_image_modal__["a" /* ImageModal */], item);
        profileModal.onDidDismiss(function (data) {
            if (data) {
                if (item.id) {
                    _this.Pictures = __WEBPACK_IMPORTED_MODULE_19_underscore__["_"].reject(_this.Pictures, { id: item.id });
                }
                else {
                    _this.Pictures = __WEBPACK_IMPORTED_MODULE_19_underscore__["_"].reject(_this.Pictures, { url: item.url });
                }
            }
        });
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], VehicleHealthCheckPage.prototype, "ElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('markArea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VehicleHealthCheckPage.prototype, "markArea", void 0);
    VehicleHealthCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vehicle-health-check',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/vehicle-health-check.html"*/'<ion-header>\n  <ion-navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'VEHICLE_HEALTH_CHECK_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="submitSave(form)" validate>\n  <ion-item>\n    <ion-label stacked>{{ \'TEST_VEHICLE_SELECT\' | translate }}</ion-label>\n    <ion-select name="vhclist" cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" required placeholder="{{ \'SELECT_A_VEHICLE\' | translate }}" [(ngModel)]="vhc.id"  (ngModelChange)="loadVHCItem(vhc.id)">\n      <ion-option *ngFor="let item of vehicleList" value="{{item.id}}">{{item.displayName}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <div class="bodyBackground" id="checkDamageArea" style="margin: 0 auto; position: relative;" #markArea>\n      <img src="assets/img/vhcBody.png" style="width: 100%; height: auto;">\n      <ion-icon name="ios-checkmark" *ngFor="let item of checkDamage" [ngStyle]="{\'top\': item.position.YVal + \'px\', \'left\': item.position.XVal  + \'px\'}"\n        style="position: absolute; font-size: 35px;"></ion-icon>\n    </div>\n  </ion-item>\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <span>{{ \'vehicle_health_check.upload_photos\' | translate }}</span>\n              <span class="box-point">{{Pictures.length}}</span>\n            </ion-col>\n            <ion-col text-right>\n              <button type="button" class="camera-button" [disabled]="!vhc.id" ion-button clear (click)="takePhoto()">\n                <ion-icon name="icon_camera"></ion-icon>\n              </button>\n            </ion-col>\n           \n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf="Pictures.length > 0">\n          <ion-slides pager slidesPerView="3">\n              <ion-slide *ngFor="let item of Pictures" (click) = "showImageModal(item)">\n                  <img [src]= "domSanitizer.bypassSecurityTrustUrl(item.url)"/>\n              </ion-slide>\n          </ion-slides>\n        </ion-col>\n        <ion-col no-padding class="col-card" *ngIf="Pictures.length ==0">\n          <ion-card class="card-no-style" text-center>\n            <ion-card-content>\n              <p>{{ \'msg.there_are_no_pictures\' | translate}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-grid class="comment">\n    <ion-row>\n      <ion-col>\n        <ion-label stacked>{{ \'COMMENT\' | translate }}</ion-label>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-textarea required name="comment" [(ngModel)]="vhc.comment" placeholder=""></ion-textarea>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="default-button-group">\n    <ion-row>\n      <ion-col>\n        <button type="button" ion-button full color="light" (click)="cancel()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n      </ion-col>\n      <ion-col>\n        <button type="submit" [disabled]="!form.valid" ion-button full >{{ \'SAVE_BUTTON\' | translate }}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="check-list">\n    <ion-list>\n      <ion-list-header>\n        <ion-row>\n\n          <ion-col col-4>\n              {{ \'CHECK_DATE\' | translate }}\n          </ion-col>\n          <ion-col col-8>\n              {{ \'SALES_CONSULTANT\' | translate }}\n          </ion-col>\n        </ion-row>\n      </ion-list-header>\n      <!--      <ion-row ion-list-header>\n              <ion-col>\n                Check Date\n              </ion-col>\n              <ion-col>\n                Sales Consultant\n              </ion-col>\n            </ion-row>-->\n      <ion-item *ngFor="let item of history">\n        <ion-row (click)="historyDetail(item)">\n          <ion-col col-4>\n            <p>{{item.creationTime | date: displayDateFormat}}</p>\n          </ion-col>\n          <ion-col col-7>\n            <p>{{item.creatorUserName}}</p>\n          </ion-col>\n          <ion-col col-1 text-right>\n            <ion-icon name="md-arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n\n    </ion-list>\n  </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/vehicle-health-check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_15__services_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ivt_security__["e" /* IvtStorageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_5__services_mark_service__["a" /* MarkService */],
            __WEBPACK_IMPORTED_MODULE_12__services_commentAndPhoto_service__["a" /* VehcileHealthCheckService */],
            __WEBPACK_IMPORTED_MODULE_9__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_14__services_mark_comment_service__["a" /* VHCService */]])
    ], VehicleHealthCheckPage);
    return VehicleHealthCheckPage;
}());

//# sourceMappingURL=vehicle-health-check.js.map

/***/ })

});
//# sourceMappingURL=9.js.map