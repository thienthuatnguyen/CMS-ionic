webpackJsonp([5],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_page__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_component_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__test_page__["a" /* TestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__test_page__["a" /* TestPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__component_component_module__["a" /* ComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__test_page__["a" /* TestPage */]
            ]
        })
    ], TestPageModule);
    return TestPageModule;
}());

//# sourceMappingURL=test.page.module.js.map

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

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bluetooth_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_geo_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dialog_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_bluetooth_serial__ = __webpack_require__(183);
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






var TestPage = /** @class */ (function () {
    function TestPage(bluetoothSvc, geoSvc, vehicleService, dialog, bluetoothSerial) {
        this.bluetoothSvc = bluetoothSvc;
        this.geoSvc = geoSvc;
        this.vehicleService = vehicleService;
        this.dialog = dialog;
        this.bluetoothSerial = bluetoothSerial;
        this.devices = [];
        this.drivenMileage = 0;
    }
    TestPage.prototype.getVehicle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.vehicleService.searchForHomePage()
                    .toPromise().then(function (res) { return console.log(res); }, function (err) { return console.error(err); });
                return [2 /*return*/];
            });
        });
    };
    TestPage.prototype.blue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ok;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bluetoothSvc.enable()];
                    case 1:
                        ok = _a.sent();
                        if (ok) {
                            this.internalSubscription = this.bluetoothSvc.scan().subscribe(function (rs) {
                                console.log('this=', _this);
                                rs && _this.devices.push(rs);
                            }, function (err) { return console.error(err); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TestPage.prototype.serialScan = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.bluetoothSvc.discoverUnpaired().then(function (devices) {
                    console.log('Serial list: ', devices);
                });
                this.bluetoothSerial.list().then(function (devices) {
                    console.log('bonded devices=', devices);
                });
                return [2 /*return*/];
            });
        });
    };
    TestPage.prototype.connect = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.internalSubscription && this.internalSubscription.unsubscribe();
                this.bluetoothSvc.connect(id).subscribe();
                return [2 /*return*/];
            });
        });
    };
    TestPage.prototype.startGeo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ok;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geoSvc.requestLocationPermission()];
                    case 1:
                        ok = _a.sent();
                        if (!ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.geoSvc.requestLocationAccuracy()];
                    case 2:
                        ok = _a.sent();
                        if (ok) {
                            this.geoSvc.subscribe(function (loc) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log('Get the first location');
                                    if (this.lastRecordedLocation) {
                                        this.drivenMileage += this.geoSvc.getDistanceFromLatLonInKm(this.lastRecordedLocation.latitude, this.lastRecordedLocation.longitude, loc.latitude, loc.longitude);
                                    }
                                    this.lastRecordedLocation = loc;
                                    console.log('Current mileage ', this.drivenMileage);
                                    return [2 /*return*/];
                                });
                            }); });
                            this.geoSvc.start();
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'test-page',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/test-page/test.page.html"*/'<ion-content>\n\n    <button ion-button (click)="blue()">\n        LE Scan\n    </button>\n    <button ion-button (click)="serialScan()">\n        Serial Scan\n    </button>\n    <button ion-button (click)="connect()">\n        Connect\n    </button>\n    <button ion-button (click)="startGeo()">\n        Start Geo\n    </button>\n    <button ion-button (click)="getVehicle()">\n        Get Vehicle\n    </button>\n\n    <div *ngFor="let d of devices" (click)="connect(d.id)">\n        <div>\n            id: {{d.id}}\n        </div>\n        <div>\n            name: {{d.name}}\n        </div>\n        <div>\n            address: {{d.address}}\n        </div>\n    </div>\n\n    <br>\n    <h4>Driven Distance</h4>\n    <div>{{drivenMileage}}</div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/test-page/test.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_bluetooth_service__["a" /* BluetoothService */],
            __WEBPACK_IMPORTED_MODULE_2__services_geo_service__["a" /* GeoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_4__services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.page.js.map

/***/ })

});
//# sourceMappingURL=5.js.map