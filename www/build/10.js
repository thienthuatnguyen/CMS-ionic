webpackJsonp([10],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleHealthCheckPageModule", function() { return VehicleHealthCheckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_health_check__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_health_check__["a" /* VehicleHealthCheckPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            entryComponents: []
        })
    ], VehicleHealthCheckPageModule);
    return VehicleHealthCheckPageModule;
}());

//# sourceMappingURL=vehicle-health-check.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleHealthCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mark_service__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_vehicle_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_vehicle_mark_model__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_position_model__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_commentAndPhoto_model__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_commentAndPhoto_service__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_mark_comment_service__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_camera_service__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_picture_model__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_underscore__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_language_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_notification_service__ = __webpack_require__(464);
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
    function VehicleHealthCheckPage(domSanitizer, viewCtrl, navCtrl, navParams, camera, alertCtrl, modalCtrl, elementRef, util, markSvc, vehcileHealthCheckService, fileSvc, toastSvc, vehicleSvc, vhcSvc, languageService, notifyService) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.elementRef = elementRef;
        this.util = util;
        this.markSvc = markSvc;
        this.vehcileHealthCheckService = vehcileHealthCheckService;
        this.fileSvc = fileSvc;
        this.toastSvc = toastSvc;
        this.vehicleSvc = vehicleSvc;
        this.vhcSvc = vhcSvc;
        this.languageService = languageService;
        this.notifyService = notifyService;
        this.Pictures = [];
        this.checkDamageScalable = [];
        this.base64Prefix = 'data:image/jpeg;base64,';
        this.photos = [];
        this.displayDateFormat = __WEBPACK_IMPORTED_MODULE_15__app_app_config__["a" /* Config */].date.displayShortTime;
        this.languageService.onDirectionChanged(function (isRTL) {
            if (isRTL) {
                _this.direction = __WEBPACK_IMPORTED_MODULE_15__app_app_config__["a" /* Config */].direction.rtl;
            }
            else {
                _this.direction = __WEBPACK_IMPORTED_MODULE_15__app_app_config__["a" /* Config */].direction.ltr;
            }
        });
        this.vhc = new __WEBPACK_IMPORTED_MODULE_10__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */]();
        this.vhcPhoto = [];
        this.checkDamage = [];
        // this.fileSvc.upload('fake', {});
        this.initData();
    }
    VehicleHealthCheckPage.prototype.onResize = function (event) {
        this.scalePosition();
    };
    VehicleHealthCheckPage.prototype.initData = function () {
        this.loadData();
        if (this.navParams.data && this.navParams.data.vehicleId) {
            this.vehicleIdFromReservation = true;
            this.loadVHCItem(this.navParams.data.vehicleId);
        }
        ;
    };
    VehicleHealthCheckPage.prototype.loadData = function () {
        var _this = this;
        this.vehicleSvc.search().subscribe(function (_items) {
            _this.vehicleList = _items;
        }, function (err) {
            _this.toastSvc.error(err.message);
        });
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
        this.vhc = new __WEBPACK_IMPORTED_MODULE_10__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */]();
        this.vhc.comment = "";
        this.vhc.id = vehicleId;
        this.vhcSvc.search({ vehicleId: vehicleId }).subscribe(function (_vhc) {
            if (_vhc) {
                _this.checkDamage = _vhc.mark;
                _this.vhc.comment = _vhc.vhcComment.comment;
                _this.downloadPhoto(_vhc.vhcComment.vhcCommentPhotos);
                _this.history = _vhc.vhcCommentHistory;
                _this.scalePosition();
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
        if (this.vhc.id) {
            if (event.target.tagName == 'IMG') {
                var mark = new __WEBPACK_IMPORTED_MODULE_7__models_vehicle_mark_model__["b" /* Mark */]();
                mark.id = null;
                mark.damageType = __WEBPACK_IMPORTED_MODULE_7__models_vehicle_mark_model__["a" /* DamageTypeEnum */].Check;
                var iconWidth = this.markArea.nativeElement.offsetWidth / 309 * 8;
                var position = new __WEBPACK_IMPORTED_MODULE_9__models_position_model__["a" /* AxisPosition */]();
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
                    mark.position.YVal = Math.round(mark.position.YVal / (this.markArea.nativeElement.offsetHeight / 232));
                this.checkDamage.push(mark);
            }
            else if (event.target.tagName == 'ION-ICON') {
                var nodes = Array.prototype.slice.call(document.getElementById('checkDamageArea').children);
                var idx = nodes.indexOf(event.target) - 1;
                this.checkDamage.splice(idx, 1);
                this.checkDamageScalable.splice(idx, 1);
            }
        }
    };
    VehicleHealthCheckPage.prototype.cancel = function () {
        if (this.navParams.data.BeforeTestDrive == false) {
            this.notifyService.updateAfterVehicleHealthCheck.next(true);
            this.viewCtrl.dismiss();
        }
        else
            this.navCtrl.pop();
    };
    VehicleHealthCheckPage.prototype.submitSave = function () {
        var _this = this;
        if (this.navParams.data && this.navParams.data.vehicleId) {
            if (this.navParams.data.BeforeTestDrive) {
                this.notifyService.updateBeforeVehicleHealthCheck.next(true);
            }
            if (!this.navParams.data.BeforeTestDrive) {
                this.notifyService.updateAfterVehicleHealthCheck.next(true);
            }
        }
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
                if (_this.navParams.data && _this.navParams.data.vehicleId) {
                    _this.viewCtrl.dismiss();
                }
                else {
                    _this.loadVhcData(_this.vhc.id);
                }
            }, function (fail) {
                _this.viewCtrl.dismiss();
                _this.toastSvc.error(fail.message);
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
        this.camera.getPicture(200, 200, true).then(function (_base64) {
            var picture = new __WEBPACK_IMPORTED_MODULE_14__models_picture_model__["a" /* Picture */]();
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
        var profileModal = this.modalCtrl.create('HistoryDetailPage', {
            item: item
        }, {
            cssClass: 'popup-vehicle'
        });
        profileModal.present();
    };
    VehicleHealthCheckPage.prototype.scalePosition = function () {
        var _this = this;
        this.checkDamageScalable = [];
        this.checkDamage.forEach(function (value, i) {
            _this.checkDamageScalable.push({
                id: _this.checkDamage[i].id,
                position: {
                    XVal: _this.markArea.nativeElement.offsetWidth / 309 * value.position.XVal,
                    YVal: _this.markArea.nativeElement.offsetHeight / 232 * value.position.YVal
                }
            });
        });
        this.fontSize = this.markArea.nativeElement.offsetWidth / 309 * 35;
    };
    VehicleHealthCheckPage.prototype.showImageModal = function (item) {
        var _this = this;
        var imageModal = this.modalCtrl.create('ImageModal', item, {
            cssClass: 'full-modal'
        });
        imageModal.onDidDismiss(function (data) {
            if (data) {
                if (item.id) {
                    _this.Pictures = __WEBPACK_IMPORTED_MODULE_16_underscore__["_"].reject(_this.Pictures, { id: item.id });
                }
                else {
                    _this.Pictures = __WEBPACK_IMPORTED_MODULE_16_underscore__["_"].reject(_this.Pictures, { url: item.url });
                }
            }
        });
        imageModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], VehicleHealthCheckPage.prototype, "ElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('markArea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VehicleHealthCheckPage.prototype, "markArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VehicleHealthCheckPage.prototype, "onResize", null);
    VehicleHealthCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vehicle-health-check',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/vehicle-health-check.html"*/'<ion-header>\n  <ion-navbar class="head-nav-bar">\n    <ion-title class="header-title">{{ \'VEHICLE_HEALTH_CHECK_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="submitSave(form)" validate>\n  <ion-item>\n    <ion-label stacked>{{ \'TEST_VEHICLE_SELECT\' | translate }}</ion-label>\n    <ion-select [disabled]="vehicleIdFromReservation" name="vhclist" cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" required placeholder="{{ \'SELECT_A_VEHICLE\' | translate }}" [(ngModel)]="vhc.id"  (ngModelChange)="loadVHCItem(vhc.id)">\n      <ion-option *ngFor="let item of vehicleList" value="{{item.id}}">{{item.vehicleType.name}} ({{item.plateNo}})&#x200E;</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <div class="bodyBackground" id="checkDamageArea" style="margin: 0 auto; position: relative;">\n      <img src="assets/img/vhcBody.png" style="width: 100%; height: auto;" #markArea>\n      <ion-icon class="damage-icon" name="ios-checkmark" *ngFor="let item of checkDamageScalable" [ngStyle]="{\'top\': item.position.YVal + \'px\', \'left\': item.position.XVal  + \'px\', \'font-size\': fontSize + \'px\'}"\n        style="position: absolute; font-size: 35px;"></ion-icon>\n    </div>\n  </ion-item>\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <span>{{ \'vehicle_health_check.upload_photos\' | translate }}</span>\n              <span class="box-point">{{Pictures.length}}</span>\n            </ion-col>\n            <ion-col  text-end class="camera-col">\n              <button  type="button" class="camera-button" [disabled]="!vhc.id" ion-button clear (click)="takePhoto()">\n                <ion-icon name="icon_camera"></ion-icon>\n              </button>\n            </ion-col>\n           \n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf="Pictures.length > 0">\n          <ion-slides pager slidesPerView="3" dir="{{direction}}">\n              <ion-slide *ngFor="let item of Pictures" (click) = "showImageModal(item)">\n                  <img [src]= "domSanitizer.bypassSecurityTrustUrl(item.url)"/>\n              </ion-slide>\n          </ion-slides>\n        </ion-col>\n        <ion-col no-padding class="col-card" *ngIf="Pictures.length ==0">\n          <ion-card class="card-no-style" text-center>\n            <ion-card-content>\n              <p>{{ \'msg.there_are_no_pictures\' | translate}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-grid class="comment">\n    <ion-row>\n      <ion-col>\n        <ion-label stacked>{{ \'COMMENT\' | translate }}</ion-label>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-textarea  required name="comment" [(ngModel)]="vhc.comment" placeholder=""></ion-textarea>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="default-button-group">\n    <ion-row>\n      <ion-col>\n        <button type="button" ion-button full color="light" (click)="cancel()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n      </ion-col>\n      <ion-col>\n        <button type="submit" [disabled]="!form.valid" ion-button full >{{ \'SAVE_BUTTON\' | translate }}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="check-list">\n    <ion-list>\n      <ion-list-header>\n        <ion-row>\n\n          <ion-col col-4>\n              {{ \'CHECK_DATE\' | translate }}\n          </ion-col>\n          <ion-col col-8>\n              {{ \'SALES_CONSULTANT\' | translate }}\n          </ion-col>\n        </ion-row>\n      </ion-list-header>\n      <!--      <ion-row ion-list-header>\n              <ion-col>\n                Check Date\n              </ion-col>\n              <ion-col>\n                Sales Consultant\n              </ion-col>\n            </ion-row>-->\n      <ion-item *ngFor="let item of history">\n        <ion-row (click)="historyDetail(item)">\n          <ion-col col-4>\n            <p>{{item.creationTime | date: displayDateFormat}}</p>\n          </ion-col>\n          <ion-col col-7>\n            <p>{{item.creatorUserName}}</p>\n          </ion-col>\n          <ion-col col-1 text-right>\n            <ion-icon name="md-arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n\n    </ion-list>\n  </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/vehicle-health-check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_13__services_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* Util */],
            __WEBPACK_IMPORTED_MODULE_4__services_mark_service__["a" /* MarkService */],
            __WEBPACK_IMPORTED_MODULE_11__services_commentAndPhoto_service__["a" /* VehcileHealthCheckService */],
            __WEBPACK_IMPORTED_MODULE_8__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_12__services_mark_comment_service__["a" /* VHCService */],
            __WEBPACK_IMPORTED_MODULE_17__services_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_18__services_notification_service__["a" /* NotificationService */]])
    ], VehicleHealthCheckPage);
    return VehicleHealthCheckPage;
}());

//# sourceMappingURL=vehicle-health-check.js.map

/***/ })

});
//# sourceMappingURL=10.js.map