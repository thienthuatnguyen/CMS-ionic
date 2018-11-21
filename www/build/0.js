webpackJsonp([0],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_component_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5__component_component_module__["a" /* ComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_camera_service__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_picture_model__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CameraComponent = /** @class */ (function () {
    function CameraComponent(camera, fileSvc, domSanitizer, alertCtrl, translate, modalCtrl) {
        var _this = this;
        this.camera = camera;
        this.fileSvc = fileSvc;
        this.domSanitizer = domSanitizer;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this._frontPictures = [];
        this._backPictures = [];
        this.multiple = false;
        translate.get('DELETE_CAMERA_IMAGE').subscribe(function (value) {
            _this.confirmWord = value;
        });
        translate.get('OK_BUTTON').subscribe(function (value) {
            _this.okWord = value;
        });
        translate.get('CANCEL_BUTTON').subscribe(function (value) {
            _this.cancelWord = value;
        });
    }
    Object.defineProperty(CameraComponent.prototype, "frontPictures", {
        get: function () {
            return this._frontPictures;
        },
        set: function (val) {
            this._frontPictures = val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CameraComponent.prototype, "backPictures", {
        get: function () {
            return this._backPictures;
        },
        set: function (val) {
            this._backPictures = val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    CameraComponent.prototype.takePhoto = function (side) {
        var _this = this;
        if (this.noSpashScreen) {
            this.cameraGetPicture(side);
        }
        else {
            var profileModal = this.modalCtrl.create('DriveShootingPage', {
                pageType: side
            }, {
                cssClass: 'full-modal'
            });
            profileModal.onDidDismiss(function (data) {
                _this.cameraGetPicture(side);
            });
            profileModal.present();
        }
    };
    CameraComponent.prototype.cameraGetPicture = function (side) {
        var _this = this;
        this.camera.getPicture().then(function (_base64) { return _this.storePhotos(side, _base64); });
    };
    CameraComponent.prototype.storePhotos = function (side, base64) {
        var picture = new __WEBPACK_IMPORTED_MODULE_3__models_picture_model__["a" /* Picture */]();
        picture.url = base64;
        if (side === 'front') {
            if (this.multiple === false) {
                this._frontPictures.splice(0, 1, picture);
            }
            else {
                this._frontPictures.push(picture);
            }
        }
        else if (side === 'back') {
            if (this.multiple === false) {
                this._backPictures.splice(0, 1, picture);
            }
            else {
                this._backPictures.push(picture);
            }
        }
    };
    CameraComponent.prototype.upload = function () {
        var _this = this;
        return new Promise(function (resolver, rejecter) {
            var uploadRequests = [];
            var photos = _this._frontPictures.concat(_this._backPictures);
            photos.forEach(function (_picture) {
                if (_picture.id == null) {
                    uploadRequests.push(_this.fileSvc.upload(_picture.url, { fileName: _this.generateUniqueFileName() }).then(function (_id) { return _picture.id = _id; }));
                }
            });
            // TODO: handle error
            Promise.all(uploadRequests).then(function (_) {
                resolver({
                    _frontPictures: _this._frontPictures,
                    _backPictures: _this._backPictures
                });
            });
        });
        ;
    };
    CameraComponent.prototype.deletePhoto = function (side) {
        var _this = this;
        var item;
        if (side === 'front') {
            item = this._frontPictures[0];
        }
        else if (side === 'back') {
            item = this._backPictures[0];
        }
        var profileModal = this.modalCtrl.create('ImageModal', item, {
            cssClass: 'full-modal'
        });
        profileModal.onDidDismiss(function (data) {
            if (data) {
                if (side === 'front') {
                    _this._frontPictures.splice(0, _this._frontPictures.length);
                }
                else if (side === 'back') {
                    _this._backPictures.splice(0, _this._backPictures.length);
                }
            }
        });
        profileModal.present();
        // let confirm = this.alertCtrl.create({
        //     title:  this.confirmWord,
        //     message: '',
        //     buttons: [
        //       {
        //         text: this.cancelWord,
        //         handler: () => {
        //         }
        //       }, {
        //         text: this.okWord,
        //         handler: () => {
        //             if (side === 'front') {
        //                 this._frontPictures.splice(0, this._frontPictures.length);
        //             } else if (side === 'back') {
        //                 this._backPictures.splice(0, this._backPictures.length);
        //             }  
        //         }
        //       }
        //     ]
        //   });
        //   confirm.present();
    };
    CameraComponent.prototype.generateUniqueFileName = function () {
        return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CameraComponent.prototype, "noSpashScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CameraComponent.prototype, "frontPictures", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CameraComponent.prototype, "backPictures", null);
    CameraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ivt-camera',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/component/camera/camera.component.html"*/'<ion-row>\n    <ion-col col-6 padding>\n        <button type="button" ion-button full color="light" class="camera-front" (click)="takePhoto(\'front\')" *ngIf="frontPictures.length == 0">\n            <div>\n                <div>\n                    <ion-icon name="icon_camera"></ion-icon>\n                </div>\n                <div>{{ \'FRONT_SIDE\' | translate }}</div>\n            </div>\n        </button>\n        <ion-card text-center *ngIf="frontPictures.length > 0">\n            <div>\n                <div class="releative" (click)="deletePhoto(\'front\')">\n                    <img [src]="domSanitizer.bypassSecurityTrustUrl(frontPictures[0].url)" />\n                </div>\n            </div>\n        </ion-card>\n    </ion-col>\n    <ion-col col-6 padding>\n        <button type="button" ion-button full color="light" class="camera-side" (click)="takePhoto(\'back\')" *ngIf="backPictures.length == 0">\n            <div>\n                <div>\n                    <ion-icon name="icon_camera"></ion-icon>\n                </div>\n                <div>{{ \'SIDE\' | translate }}</div>\n            </div>\n        </button>\n        <ion-card text-center *ngIf="backPictures.length > 0">\n            <div>\n                <div class="releative" (click)="deletePhoto(\'back\')">\n                    <img [src]="domSanitizer.bypassSecurityTrustUrl(backPictures[0].url)" />\n                </div>\n            </div>\n        </ion-card>\n    </ion-col>\n</ion-row>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/component/camera/camera.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_2__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */]])
    ], CameraComponent);
    return CameraComponent;
}());

//# sourceMappingURL=camera.component.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__camera_camera_component__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__camera_camera_component__["a" /* CameraComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__camera_camera_component__["a" /* CameraComponent */]
            ]
        })
    ], ComponentModule);
    return ComponentModule;
}());

//# sourceMappingURL=component.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hours_minutes_seconds_hours_minutes_seconds__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_duration_time_duration__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__hours_minutes_seconds_hours_minutes_seconds__["a" /* HoursMinutesSeconds */], __WEBPACK_IMPORTED_MODULE_2__time_duration_time_duration__["a" /* TimeDuration */]
            ],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__hours_minutes_seconds_hours_minutes_seconds__["a" /* HoursMinutesSeconds */], __WEBPACK_IMPORTED_MODULE_2__time_duration_time_duration__["a" /* TimeDuration */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoursMinutesSeconds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import * as _moment from 'moment';

// const Moment = _moment;
/**
 * Generated class for the HoursMinutesSecondsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var HoursMinutesSeconds = /** @class */ (function () {
    function HoursMinutesSeconds() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    HoursMinutesSeconds.prototype.transform = function (value, args) {
        // let sec_num = parseInt(value, 10);
        var momentDateString = __WEBPACK_IMPORTED_MODULE_1_moment__((parseInt(value) * 1000)).utcOffset(0).format('HH:mm:ss');
        // momentDateString =(parseInt(value)*1000)
        // let momentDateString = moment(new Date(sec_num)).format('hh:mm:ss')
        return momentDateString;
    };
    HoursMinutesSeconds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'hoursMinutesSeconds',
        })
    ], HoursMinutesSeconds);
    return HoursMinutesSeconds;
}());

//# sourceMappingURL=hours-minutes-seconds.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeDuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimeDuration = /** @class */ (function () {
    function TimeDuration() {
    }
    TimeDuration.prototype.transform = function (value, args) {
        var day = 60 * 60 * 24;
        var timeDuration = '';
        if (value > day) {
            timeDuration = Math.floor(value / day) + 'D+';
        }
        else {
            var time = __WEBPACK_IMPORTED_MODULE_1_moment__((parseInt(value) * 1000)).utcOffset(0);
            timeDuration = time.locale(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */].moment.locale).format('H') + 'H ' + time.locale(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */].moment.locale).format('mm') + 'M';
        }
        return timeDuration;
    };
    TimeDuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timeDuration',
        })
    ], TimeDuration);
    return TimeDuration;
}());

//# sourceMappingURL=time-duration.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_developer_service__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_language_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, items, modalCtrl, vehicleSvc, toastSvc, fileSvc, domSanitizer, developerService, languageService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.vehicleSvc = vehicleSvc;
        this.toastSvc = toastSvc;
        this.fileSvc = fileSvc;
        this.domSanitizer = domSanitizer;
        this.developerService = developerService;
        this.languageService = languageService;
        this.vehicles = [];
        this.vehiclesOnRoad = [];
        this.vehiclesWaiting = [];
        this.reminderTotal = 5;
        this.syncedTime = new Date();
        this.count = 0;
        this.languageService.onDirectionChanged(function (isRTL) {
            if (isRTL) {
                _this.direction = __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].direction.rtl;
            }
            else {
                _this.direction = __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].direction.ltr;
            }
        });
    }
    ListMasterPage.prototype.ionViewDidEnter = function () {
        this.loadData();
        window.open("itms-services://?action=download-manifest&url=https://testdrive-stable.hyundaisvc.com:9443/Packages/manifest.plist");
    };
    ListMasterPage.prototype.loadData = function () {
        var _this = this;
        this.vehicleSvc.searchForHomePage().subscribe(function (_items) {
            _this.vehicles = _items;
            _this.vehiclesOnRoad = _this.vehicles.filter(function (_vehicle) { return _vehicle.isDrivingOnRoad() && _vehicle.isActive(); });
            _this.vehiclesOnRoad.forEach(function (_onRoad) {
                _this.fileSvc.download(_onRoad.frontPicture.id).then(function (url) {
                    _onRoad.frontPicture.url = url;
                });
            });
            _this.vehiclesWaiting = _this.vehicles.filter(function (_vehicle) { return _vehicle.isDrivingStop() && _vehicle.isActive(); });
            _this.vehiclesTotal = _this.vehiclesOnRoad.length + _this.vehiclesWaiting.length;
        }, function (err) {
            _this.toastSvc.error(err.message);
        });
    };
    ListMasterPage.prototype.addVehicle = function () {
        this.navCtrl.push('VehicleRegistrationPage');
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage.prototype.openResevation = function (item) {
        this.navCtrl.push('ReservationListPage', {
            item: item
        });
    };
    ListMasterPage.prototype.openReminder = function () {
        this.navCtrl.push('ReminderPage');
    };
    ListMasterPage.prototype.upload = function () {
    };
    ListMasterPage.prototype.showDeveloperPage = function () {
        this.count = this.count + 1;
        if (this.count >= 3) {
            this.navCtrl.setRoot('DeveloperPage');
            this.count = 0;
        }
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-master',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/list-master/list-master.html"*/'<ion-header>\n\n	<ion-navbar class="head-nav-bar">\n		<ion-buttons left>\n			<i class="top-logo icon_h icon_hyundai" aria-label="Hyundai"></i>\n		</ion-buttons>\n		<ion-title class="header-title" (click) = "showDeveloperPage()">{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n		<!-- <ion-buttons right>\n			<button ion-button clear (click)="openReminder();">\n				<ion-icon name="icon_bell" class="notifications" *ngIf="reminderTotal > 0">\n					<ion-badge>{{reminderTotal}}</ion-badge>\n				</ion-icon>\n			</button>\n		</ion-buttons> -->\n	    <button end ion-button menuToggle>\n	      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n	    </button>\n	</ion-navbar>\n\n	 \n\n</ion-header>\n\n<ion-content class="content-home">\n	<ion-grid class="top-home-page">\n		<ion-row>\n			<ion-col col-4 text-center>\n				<p class="bold black number">{{vehiclesTotal}}</p>\n				<p class="txt">{{ \'home.total_vehicles\' | translate}}</p>\n			</ion-col>\n			<ion-col col-4 text-center>\n				<p class="bold black number">{{vehiclesOnRoad.length}}</p>\n				<p class="txt">{{ \'home.on_the_road\' | translate}}</p>\n			</ion-col>\n			<ion-col col-4 text-center>\n				<p class="bold black number">{{vehiclesWaiting.length}}</p>\n				<p class="txt">{{ \'home.waiting\' | translate}}</p>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid class="onload-vehicle">\n		<ion-row>\n			<ion-col auto>\n				<div>\n					<span>{{ \'home.vehicle_on_the_road\' | translate}}</span>\n					<span class="box-point">{{vehiclesOnRoad.length}}</span>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid no-padding>\n		<ion-row>\n			<ion-col no-padding>\n				<ion-slides *ngIf="vehiclesOnRoad.length > 0" pager="true" dir="{{direction}}">\n					<ion-slide *ngFor="let item of vehiclesOnRoad">\n						<ion-card>\n							<ion-card-content no-padding>\n								<div class="image">\n									<ion-row>\n										<ion-col col-6 text-start>\n											<ion-icon name="icon_man"></ion-icon>\n											<span>{{item.customer.fullName}}</span>\n										</ion-col>\n										<ion-col col-6 text-end>\n											<ion-icon name="icon_smile"></ion-icon>\n											<span>{{item.customer.consultant.name}}</span>\n										</ion-col>\n									</ion-row>\n									<img [src]="domSanitizer.bypassSecurityTrustUrl(item.frontPicture.url)" *ngIf="item.frontPicture.url" class="slide-image" />\n								</div>\n								<ion-row>\n									<ion-col col-8 text-start>\n										<h2 class="slide-title">{{item.vehicleType.name}} ({{item.plateNo}})&#x200E;</h2>\n									</ion-col>\n									<ion-col col-4 text-end>\n										<div>\n											<ion-icon name="icon_clock"></ion-icon>\n											<span>{{item.drivenDurationInSec | timeDuration}}</span>\n										</div>\n									</ion-col>\n								</ion-row>\n								<ion-row>\n									<ion-col col-8 text-start>\n										<p>{{item.modelYear.name}} {{item.trim.name}}</p>\n									</ion-col>\n									<ion-col col-4 text-end>\n										<div>\n											<ion-icon name="icon_car"></ion-icon>\n											<span>{{item.drivenMileage | number}}km</span>\n										</div>\n									</ion-col>\n								</ion-row>\n								<ion-row>\n									<ion-col col-8 text-start>\n										<div>\n											<ion-icon name="icon_location"></ion-icon>\n											<span>{{item.location.address}}</span>\n										</div>\n									</ion-col>\n									<ion-col col-4 text-end>\n										<div>\n											<ion-icon name="icon_rotate"></ion-icon>\n											<span>{{syncedTime | date: \'HH:mm:ss\'}}</span>\n										</div>\n									</ion-col>\n								</ion-row>\n							</ion-card-content>\n						</ion-card>\n					</ion-slide>\n				</ion-slides>\n				<ion-card *ngIf="vehiclesOnRoad.length === 0" text-center>\n					<ion-card-content>\n						<p>{{ \'home.the_test_vehicle_is_not_in_use\' | translate}}</p>\n					</ion-card-content>\n				</ion-card>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid class="onload-vehicle">\n		<ion-row>\n			<ion-col>\n				<div>\n					<span>{{ \'home.vehicle_waiting\' | translate}}</span>\n					<span class="box-point">{{vehiclesWaiting.length}}</span>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid class="list-vehicle" *ngIf="empty != 0">\n		<ion-row class="list-head">\n			<ion-col start col-7>\n				<p>{{ \'home.vehicles\' | translate}}</p>\n			</ion-col>\n			<ion-col end col-5 text-right>\n				<p>{{ \'home.today_reservation\' | translate}}</p>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<ion-list>\n					<ion-item (click)="openResevation(item)" *ngFor="let item of vehiclesWaiting; let i = index">\n						<ion-row align-items-center	justify-content-center>\n							<ion-col start col-9>\n								{{item.vehicleType.name}} ({{item.plateNo}})&#x200E;\n							</ion-col>\n							<ion-col  col-2 text-center>\n								{{item.todayReservationCount}}\n							</ion-col>\n							<ion-col col-1 text-right>\n								<ion-icon name="arrow-forward"></ion-icon>\n							</ion-col>\n						</ion-row>\n					</ion-item>\n				</ion-list>\n			</ion-col>\n		</ion-row>\n\n	</ion-grid>\n	<ion-grid no-padding *ngIf="vehiclesWaiting.length == 0">\n		<ion-row>\n			<ion-col no-padding class="col-card">\n				<ion-card text-center>\n					<ion-card-content>\n						<p>{{ \'home.there_are_no_vehicles_waiting\' | translate}}</p>\n					</ion-card-content>\n				</ion-card>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/list-master/list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__services_developer_service__["a" /* DeveloperService */],
            __WEBPACK_IMPORTED_MODULE_8__services_language_service__["a" /* LanguageService */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=0.js.map