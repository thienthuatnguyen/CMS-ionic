webpackJsonp([4],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRegistrationPageModule", function() { return VehicleRegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_registration__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_component_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VehicleRegistrationPageModule = /** @class */ (function () {
    function VehicleRegistrationPageModule() {
    }
    VehicleRegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_registration__["a" /* VehicleRegistrationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_registration__["a" /* VehicleRegistrationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__component_component_module__["a" /* ComponentModule */]
            ],
        })
    ], VehicleRegistrationPageModule);
    return VehicleRegistrationPageModule;
}());

//# sourceMappingURL=vehicle-registration.module.js.map

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

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicle_type_service__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_vehicle_vehicle_model__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_camera_camera_component__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_bluetooth_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_device_model__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_dialog_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_util_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













/**
 * Generated class for the VehicleRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VehicleRegistrationPage = /** @class */ (function () {
    function VehicleRegistrationPage(navCtrl, navParams, alertCtrl, toastService, translateService, modalCtrl, viewCtrl, vehicleService, vehicleTypeService, modelYearService, trimService, fileSvc, bluetoothSvc, loadingCtrl, dialogSvc, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastService = toastService;
        this.translateService = translateService;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.vehicleService = vehicleService;
        this.vehicleTypeService = vehicleTypeService;
        this.modelYearService = modelYearService;
        this.trimService = trimService;
        this.fileSvc = fileSvc;
        this.bluetoothSvc = bluetoothSvc;
        this.loadingCtrl = loadingCtrl;
        this.dialogSvc = dialogSvc;
        this.utils = utils;
        this.dummyDevice = new __WEBPACK_IMPORTED_MODULE_10__models_device_model__["a" /* IvtDevice */]();
        this.devices = [];
        this.trimSegments = [];
        this.modelYearSegments = [];
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_5__models_vehicle_vehicle_model__["a" /* Vehicle */]();
        this.frontPictures = [];
        this.backPictures = [];
        this.loadData();
    }
    VehicleRegistrationPage.prototype.searchBluetooth = function () {
        var _this = this;
        //if (!this.utils.isBrowser()) {
        this.dialogSvc.alert(this.translateService.instant('vehicle_registration.activate_the_bluetooth_add_on_status_in_the_bluetooth_setting')).then(function () {
            _this.scanningDevices();
        });
        //}
    };
    VehicleRegistrationPage.prototype.loadData = function () {
        var _this = this;
        this.dummyDevice.id = "anonymous_device";
        this.dummyDevice.name = "anonymous_device";
        this.vehicleTypeService.search().subscribe(function (_items) {
            _this.vehicleTypeSegments = _items;
        }, function (res) {
            _this.toastService.error(res.message);
        });
        this.vehicle = this.navParams.get('vehicle') || new __WEBPACK_IMPORTED_MODULE_5__models_vehicle_vehicle_model__["a" /* Vehicle */]();
    };
    VehicleRegistrationPage.prototype.takePicModal = function (side) {
        this.showTakePictureGuide(side);
    };
    VehicleRegistrationPage.prototype.showTakePictureGuide = function (front) {
        this.navCtrl.push('VehicleRegistrationTakepicGuidePage', { 'side': front ? 'front' : 'rear' });
    };
    VehicleRegistrationPage.prototype.cancelTab = function () {
        this.navCtrl.pop();
    };
    VehicleRegistrationPage.prototype.save = function () {
        var _this = this;
        this.uploadPhotos(this.vehicle).then(function () {
            _this.vehicleService.save(_this.vehicle).subscribe(function () {
                var msg = '';
                if (_this.vehicle.id) {
                    msg = 'msg.vehicle_is_updated';
                }
                else {
                    msg = 'msg.vehicle_is_registered';
                }
                _this.toastService.success(msg).then(function () {
                    _this.navCtrl.pop();
                });
            }, function (res) {
                console.log('create vehicle:', res);
                _this.toastService.error(res.message);
            });
        });
    };
    VehicleRegistrationPage.prototype.uploadPhotos = function (vehicle) {
        var _this = this;
        return this.cameraComponent.upload().then(function (_result) {
            if (_result._frontPictures.length > 0) {
                _this.vehicle.frontPicture = _result._frontPictures[0];
            }
            if (_result._backPictures.length > 0) {
                _this.vehicle.sidePicture = _result._backPictures[0];
            }
        });
    };
    VehicleRegistrationPage.prototype.changeVehicleType = function (vehicleType) {
        var _this = this;
        this.vehicle.modelYear = null;
        this.vehicle.trim = null;
        this.modelYearService.search(vehicleType.id).subscribe(function (_items) {
            _this.modelYearSegments = _items;
        }, function (res) {
            _this.toastService.error(res.message);
        });
    };
    VehicleRegistrationPage.prototype.changeModelYear = function (modelYear) {
        var _this = this;
        this.vehicle.trim = null;
        this.trimService.search(modelYear.id).subscribe(function (_items) {
            _this.trimSegments = _items;
        }, function (res) {
            _this.toastService.error(res.message);
        });
    };
    VehicleRegistrationPage.prototype.checkVehicleTypeValid = function () {
        if (!this.vehicle.vehicleType) {
            this.toastService.error('msg.please_select_a_vehicle_model_first');
        }
    };
    VehicleRegistrationPage.prototype.checkYearValid = function () {
        if (!this.vehicle.modelYear) {
            this.toastService.error('msg.please_select_a_vehicle_model_and_an_year_first');
        }
    };
    VehicleRegistrationPage.prototype.scanningDevices = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loader = this.loadingCtrl.create({
                            content: this.translateService.instant('vehicle_registration.scanning_bluetooth_devices'),
                            enableBackdropDismiss: true
                        });
                        loader.present();
                        _a = this;
                        return [4 /*yield*/, this.bluetoothSvc.discoverUnpaired()];
                    case 1:
                        _a.devices = _b.sent();
                        loader.dismiss();
                        if (this.devices.length == 0) {
                            this.dialogSvc.alert(this.translateService.instant('vehicle_registration.no_bluetooth_device_found'));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__component_camera_camera_component__["a" /* CameraComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__component_camera_camera_component__["a" /* CameraComponent */])
    ], VehicleRegistrationPage.prototype, "cameraComponent", void 0);
    VehicleRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vehicle-registration',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-registration/vehicle-registration.html"*/'<!--\n  Generated template for the VehicleRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'VEHICLE_REGISTRATION_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="save()" validate>\n    <ion-list>\n      \n      <ion-item>\n        <ion-label stacked>{{ \'VEHICLE_MODEL\' | translate }}</ion-label>\n        <ion-select required name="vehicleType" cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" placeholder="{{ \'SELECT_A_VEHICLE_MODEL\' | translate }}" [(ngModel)]="vehicle.vehicleType" (ngModelChange)="changeVehicleType($event)">\n          <ion-option *ngFor="let type of vehicleTypeSegments" [value]="type">{{type.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item (click)="checkVehicleTypeValid()">\n        <ion-label stacked>{{ \'MODEL_YEAR\' | translate }}</ion-label>\n        <ion-select [disabled]="!vehicle.vehicleType" required name="year" cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" placeholder="{{ \'SELECT_A_YEAR\' | translate }}" [(ngModel)]="vehicle.modelYear" (ngModelChange)="changeModelYear($event)">\n          <ion-option *ngFor="let item of modelYearSegments" [value]="item">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item (click)="checkYearValid()">\n        <ion-label stacked>{{ \'TRIM\' | translate }}</ion-label>\n        <ion-select [disabled]="!vehicle.modelYear" required name="trim" cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" placeholder="{{ \'SELECT_A_TRIM\' | translate }}" [(ngModel)]="vehicle.trim">\n          <ion-option *ngFor="let item of trimSegments" [value]="item">{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>{{ \'PLATE_NUMBER\' | translate }}</ion-label>\n        <ion-input required name="plateNo" [(ngModel)]="vehicle.plateNo"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label stacked>{{ \'INITIAL_OPERATING_DISTANCE\' | translate }}</ion-label>\n        <ion-input required name="initialOperatingDistance" type="number" [(ngModel)]="vehicle.initialMileage"></ion-input>\n      </ion-item>\n\n      <ivt-camera [(frontPictures)]="frontPictures" [(backPictures)]="backPictures"></ivt-camera>\n\n      <ion-item class="search-bluetooth">\n          <ion-label stacked>{{ \'SELECT_VEHICLE_BLUETOOTH\' | translate }} <button type="button" ion-button (click)="searchBluetooth()" >{{ \'SEARCH_BUTTON\' | translate }}</button></ion-label>\n      </ion-item>      \n      \n      <ion-item>\n          <ion-label stacked style="display: none;">{{ \'SELECT_VEHICLE_BLUETOOTH\' | translate }}</ion-label>\n          <ion-select required name="vehicleSelect" cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" placeholder="{{ \'SELECT_A_BLUETOOTH_AUDIO_DEVICE_INSTALLED_ON_THE_VEHICLE\' | translate }}" [(ngModel)]="vehicle.pairedDevice">\n            <ion-option [value]="dummyDevice">{{ (\'vehicle_registration.\' + dummyDevice.name) | translate }}</ion-option>\n            <ion-option *ngFor="let device of devices" [value]="device">{{ (device.name || device.address) }}</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-list>\n\n    \n\n    <ion-grid class="default-button-group">\n      <ion-row>\n        <ion-col>\n          <button type="button" ion-button full color="light" (click)="cancelTab()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button type="submit"  ion-button full [disabled]="!form.valid || !vehicle.pairedDevice.id || frontPictures.length == 0 || backPictures.length == 0 ">{{ \'SAVE_BUTTON\' | translate }}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-registration/vehicle-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_4__services_vehicle_type_service__["c" /* VehicleTypeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_vehicle_type_service__["a" /* ModelYearService */],
            __WEBPACK_IMPORTED_MODULE_4__services_vehicle_type_service__["b" /* TrimService */],
            __WEBPACK_IMPORTED_MODULE_7__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_9__services_bluetooth_service__["a" /* BluetoothService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_11__services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_12__services_util_service__["a" /* Utils */]])
    ], VehicleRegistrationPage);
    return VehicleRegistrationPage;
}());

//# sourceMappingURL=vehicle-registration.js.map

/***/ })

});
//# sourceMappingURL=4.js.map