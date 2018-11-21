webpackJsonp([6],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentPageModule", function() { return DocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_component_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {SignaturePadModule2} from "angular2-signaturepad";
var DocumentPageModule = /** @class */ (function () {
    function DocumentPageModule() {
    }
    DocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__component_component_module__["a" /* ComponentModule */]
                // SignaturePadModule2
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */]
            ]
        })
    ], DocumentPageModule);
    return DocumentPageModule;
}());

//# sourceMappingURL=document.module.js.map

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

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_document_service__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_util__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_camera_camera_component__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_picture_model__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ivt_security__ = __webpack_require__(37);
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











 // import { Validators, FormControl, FormGroup } from '@angular/forms';



// import {SignaturePad2} from "angular2-signaturepad/signature-pad2";
/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentPage = /** @class */ (function () {
    function DocumentPage(domSanitizer, navCtrl, navParams, camera, alertCtrl, translateService, documentService, util, fileService, toastService, securityService, modalCtrl) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.documentService = documentService;
        this.util = util;
        this.fileService = fileService;
        this.toastService = toastService;
        this.securityService = securityService;
        this.modalCtrl = modalCtrl;
        this.base64Prefix = 'data:image/jpeg;base64,';
        this.isDrawing = false;
        this.documentObj = {
            reservationStatus: null,
            consultantUserId: null,
            consultantUrlBlob: null,
            consultantSign: false,
            customerUrlBlob: null,
            customerSign: false
        };
        this.frontPictures = [];
        this.backPictures = [];
        this.displayDateFormat = __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].date.displayShortTime;
        this.signaturePadOptions = {
            'minWidth': 2,
            'backgroundColor': '#ffffff',
            'penColor': '#666a73'
        };
        this.salutationEnum = [
            { name: 'document.male', value: 'Male' },
            { name: 'document.female', value: 'Female' }
        ];
        var userInfor = this.securityService.getUser();
        this.documentObj.consultantUserId = userInfor.id;
        if (userInfor && userInfor.tenant)
            this.termAndCondition = userInfor.tenant.termsAndConditions;
        var reservationFromServer = navParams.data.item;
        this.documentObj.reservationStatus = reservationFromServer.applicationStatusEnum;
        this.item = util.transformToDocument(reservationFromServer);
        if (this.item.customerSignedTime)
            this.customerSignedTime = __WEBPACK_IMPORTED_MODULE_8_moment___default()(this.item.customerSignedTime, __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].date.YYYYMMDD).toDate();
        if (this.item.customerSignedTime)
            this.consultantSignedTime = __WEBPACK_IMPORTED_MODULE_8_moment___default()(this.item.consultantSignedTime, __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* Config */].date.YYYYMMDD).toDate();
        if (this.item.customerSignatureId) {
            fileService.download(this.item.customerSignatureId).then(function (result) {
                _this.customerUrl = result;
            });
            this.documentObj.customerUrlBlob = this.item.customerSignatureId;
        }
        if (this.item.consultantSignatureId) {
            fileService.download(this.item.consultantSignatureId).then(function (result) {
                _this.consultantUrl = result;
            });
            this.documentObj.consultantUrlBlob = this.item.consultantSignatureId;
        }
        if (this.item.driverLicenseFrontSidePictureId) {
            fileService.download(this.item.driverLicenseFrontSidePictureId).then(function (result) {
                _this.frontPicture = new __WEBPACK_IMPORTED_MODULE_13__models_picture_model__["a" /* Picture */]();
                _this.frontPicture.id = _this.item.driverLicenseFrontSidePictureId;
                _this.frontPicture.url = result;
                _this.frontPictures.push(_this.frontPicture);
                _this.frontUrl = result;
            });
        }
        if (this.item.driverLicenseBackSidePictureId) {
            fileService.download(this.item.driverLicenseBackSidePictureId).then(function (result) {
                _this.backPicture = new __WEBPACK_IMPORTED_MODULE_13__models_picture_model__["a" /* Picture */]();
                _this.backPicture.id = _this.item.driverLicenseFrontSidePictureId;
                _this.backPicture.url = result;
                _this.backPictures.push(_this.backPicture);
                _this.backUrl = result;
            });
        }
    }
    DocumentPage.prototype.onResize = function (event) {
        this.resizeCanvas();
    };
    DocumentPage.prototype.resizeCanvas = function () {
        var customerImg = null;
        var consultantImg = null;
        if (this.customerSignPad) {
            if (!this.customerSignPad.isEmpty()) {
                customerImg = this.customerSignPad.toDataURL();
            }
        }
        if (this.consultantSignPad && !this.consultantSignPad.isEmpty()) {
            consultantImg = this.consultantSignPad.toDataURL();
        }
        if (this.customerSignPad)
            this.customerSignPad.resizeCanvas();
        if (this.consultantSignPad)
            this.consultantSignPad.resizeCanvas();
        if (this.customerSignPad && customerImg) {
            this.customerSignPad.fromDataURL(customerImg);
        }
        if (this.consultantSignPad && consultantImg) {
            this.consultantSignPad.fromDataURL(consultantImg);
        }
    };
    DocumentPage.prototype.ngOnInit = function () {
        this.photos_front = [];
        this.photos_back = [];
    };
    DocumentPage.prototype.ionViewDidEnter = function () {
        this.resizeCanvas();
        if (this.customerSignPad)
            this.customerSignPad.clear();
        if (this.consultantSignPad)
            this.consultantSignPad.clear();
    };
    DocumentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentPage');
    };
    DocumentPage.prototype.isOwnReservation = function () {
        if (this.item.consultantUserId)
            return this.item.consultantUserId == this.documentObj.consultantUserId;
        return true;
    };
    DocumentPage.prototype.isDoneReservation = function () {
        return this.util.isDoneReservation(this.documentObj.reservationStatus);
    };
    DocumentPage.prototype.takePic = function (photos) {
        var _this = this;
        try {
            var options = {
                quality: 50,
                // destinationType: this.camera.DestinationType.FILE_URI,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
                // this.base64Image = this.urlPrefix + imageData;
                var safeUrl = _this.base64Prefix + imageData;
                photos.push(safeUrl);
                photos.reverse();
            }, function (err) {
                console.log(err);
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    DocumentPage.prototype.drawComplete = function (selector) {
        this.isDrawing = false;
        if (selector == 'customer') {
            this.documentObj.customerUrlBlob = this.customerSignPad.toDataURL();
            this.documentObj.customerSign = true;
        }
        else {
            this.documentObj.consultantUrlBlob = this.consultantSignPad.toDataURL();
            this.documentObj.consultantSign = true;
        }
    };
    DocumentPage.prototype.drawStart = function () {
        this.isDrawing = true;
    };
    DocumentPage.prototype.saveCustomerSignature = function () {
        return this.fileService.upload(this.documentObj.customerUrlBlob, { mimeType: ".png" });
    };
    DocumentPage.prototype.saveConsultantSignature = function () {
        return this.fileService.upload(this.documentObj.consultantUrlBlob, { mimeType: ".png" });
    };
    DocumentPage.prototype.clearPad = function (selector) {
        if (selector == 'customer') {
            this.customerSignPad.clear();
            this.documentObj.customerUrlBlob = null;
            this.documentObj.customerSign = false;
        }
        else if (selector == 'consultant') {
            this.consultantSignPad.clear();
            this.documentObj.consultantUrlBlob = null;
            this.documentObj.consultantSign = false;
        }
    };
    DocumentPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    DocumentPage.prototype.saveDocument = function () {
        var _this = this;
        this.documentService.save(this.item).subscribe(function (success) {
            _this.navCtrl.pop();
        }, function (fail) {
            _this.toastService.error(fail.message);
        });
    };
    DocumentPage.prototype.save = function () {
        var _this = this;
        if (!this.item.isAgreedWithPrivacyPolicy) {
            this.toastService.error(this.translateService.instant('reservation.validation.term_of_service_message'));
            return;
        }
        var alert = this.alertCtrl.create({
            title: this.translateService.instant('msg.confirm_title'),
            message: this.translateService.instant('msg.are_you_sure_you_want_to_save'),
            buttons: [
                {
                    text: this.translateService.instant('CANCEL_BUTTON'),
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: this.translateService.instant('SAVE_BUTTON'),
                    handler: function () {
                        if (_this.item.isAgreedWithPrivacyPolicy) {
                            _this._updateDocument();
                        }
                        else {
                            _this.toastService.error(_this.translateService.instant('reservation.validation.term_of_service_message'));
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    DocumentPage.prototype.uploadPhotos = function () {
        var _this = this;
        return this.cameraComponent.upload().then(function (_result) {
            if (_result._frontPictures.length > 0) {
                _this.item.driverLicenseFrontSidePictureId = _result._frontPictures[0].id;
                _this.frontUrl = _result._frontPictures[0].url;
            }
            else {
                _this.item.driverLicenseFrontSidePictureId = null;
                _this.frontUrl = null;
            }
            if (_result._backPictures.length > 0) {
                _this.item.driverLicenseBackSidePictureId = _result._backPictures[0].id;
                _this.backUrl = _result._backPictures[0].url;
            }
            else {
                _this.item.driverLicenseBackSidePictureId = null;
                _this.backUrl = null;
            }
        });
    };
    DocumentPage.prototype.showTerms = function (showTerms) {
        var profileModal = this.modalCtrl.create('TermsOfServiceModal', { showTerms: showTerms }, {
            cssClass: 'full-modal'
        });
        profileModal.present();
    };
    DocumentPage.prototype._updateDocument = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customerResult, consultantResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadPhotos()];
                    case 1:
                        _a.sent();
                        if (!this.documentObj.customerSign) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveCustomerSignature()];
                    case 2:
                        customerResult = _a.sent();
                        this.item.customerSignatureId = customerResult;
                        this.item.customerSignedTime = __WEBPACK_IMPORTED_MODULE_8_moment___default()();
                        _a.label = 3;
                    case 3:
                        if (!this.documentObj.consultantSign) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.saveConsultantSignature()];
                    case 4:
                        consultantResult = _a.sent();
                        this.item.consultantSignatureId = consultantResult;
                        this.item.consultantSignedTime = __WEBPACK_IMPORTED_MODULE_8_moment___default()();
                        _a.label = 5;
                    case 5:
                        this.saveDocument();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('customerSignPad'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], DocumentPage.prototype, "customerSignPad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('consultantSignPad'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], DocumentPage.prototype, "consultantSignPad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_12__component_camera_camera_component__["a" /* CameraComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__component_camera_camera_component__["a" /* CameraComponent */])
    ], DocumentPage.prototype, "cameraComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DocumentPage.prototype, "onResize", null);
    DocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-document',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/document/document.html"*/'<!--\n  Generated template for the DocumentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <button type="button" end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{\'DOCUMENT_TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <form #form="ngForm" (ngSubmit)="save(form)" validate>\n    <h3>{{ \'document.tap_here_to_capture_drivers_license\' | translate }}</h3>\n    <ivt-camera [frontPictures]="frontPictures" [backPictures]="backPictures" [noSpashScreen]="true"></ivt-camera>\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card text-center>\n            <div *ngIf="photos_front[0]==undefined" (click)="takePic(photos_front)" class="camera-front">\n              <ion-card-header>\n                <ion-icon name="icon_camera"></ion-icon>\n              </ion-card-header>\n              <ion-card-content>\n                Front side\n              </ion-card-content>\n            </div>\n            <div *ngIf="photos_front[0]!=undefined">\n              <div *ngFor="let photo of photos_front; let id = index" class="releative" (click)="deletePhoto(id, photos_front)">\n                <img [src]="domSanitizer.bypassSecurityTrustUrl(photo)" *ngIf="photo" />\n              </div>\n            </div>\n          </ion-card>\n        </ion-col>\n\n        <ion-col>\n          <ion-card text-center>\n            <div *ngIf="photos_back[0]==undefined" (click)="takePic(photos_back)" class="camera-side">\n              <ion-card-header>\n                <ion-icon name="icon_camera"></ion-icon>\n              </ion-card-header>\n              <ion-card-content>\n                Back side\n              </ion-card-content>\n            </div>\n            <div *ngIf="photos_back[0]!=undefined">\n              <div *ngFor="let photo of photos_back; let id = index" class="releative" (click)="deletePhoto(id, photos_back)">\n                <img [src]="domSanitizer.bypassSecurityTrustUrl(photo)" *ngIf="photo" />\n              </div>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n\n    <h3>{{ \'document.customer_infomation\' | translate }}</h3>\n    <ion-item>\n      <ion-label stacked>{{ \'document.gender\' | translate }} *</ion-label>\n      <ion-select  cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" required name="salutation" [(ngModel)]="item.customerSalutationEnum">\n        <ion-option *ngFor="let salutation of salutationEnum" value="{{salutation.value}}">{{salutation.name | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ \'document.name\' | translate }} *</ion-label>\n      <ion-input name="customerName" required [(ngModel)]="item.customerFullName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ \'document.phone_no\' | translate }} *</ion-label>\n      <ion-input name="phoneNo" required [(ngModel)]="item.customerPhoneNumber"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ \'document.email\' | translate }}</ion-label>\n      <ion-input name="email" [(ngModel)]="item.customerEmailAddress"></ion-input>\n    </ion-item>\n\n    <h3>{{ \'document.test_vehicle\' | translate }}</h3>\n    <ion-item>\n      <ion-input readonly name="vehicleName" placeholder="{{ \'SELECT_A_VEHICLE\' | translate }}" [(ngModel)]="item.vehicleDisplayName"></ion-input>\n    </ion-item>\n\n    <h3>{{ \'document.terms_of_service\' | translate }}</h3>\n    <ion-item>\n      <ion-textarea rows="4" name="termCondition" readonly [(ngModel)] ="termAndCondition" (click)="showTerms(termAndCondition)"></ion-textarea>\n    </ion-item>\n    <ion-grid class="terms">\n      <ion-row>\n        <ion-col col-1>\n          <ion-checkbox name="isArgee" required [(ngModel)]="item.isAgreedWithPrivacyPolicy"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n            (*){{ \'document.term_agree_1\' | translate }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n\n        <ion-col col-1>\n          <ion-checkbox name="agrreEmail" [(ngModel)]="item.isAgreedWithEmailMarketing"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n            {{ \'document.term_agree_2\' | translate }}\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    <h3>{{ \'document.signature\' | translate }} (*)</h3>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card class="signature">\n            <ion-card-header>\n              <ion-item>\n                <span item-left>{{ \'document.customer_signature\' | translate }}</span>\n                <ion-icon *ngIf="!item.customerSignatureId" (click)="clearPad(\'customer\')" item-end name="refresh" md="ios-refresh"></ion-icon>\n              </ion-item>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-input name="customerSign" [(ngModel)]= "documentObj.customerUrlBlob" hidden required></ion-input>\n              <img *ngIf="item.customerSignatureId" [src]="domSanitizer.bypassSecurityTrustUrl(customerUrl)"/>\n              <signature-pad *ngIf="!item.customerSignatureId" #customerSignPad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete(\'customer\')"></signature-pad>\n            </ion-card-content>\n          </ion-card>\n          <p text-right *ngIf="customerSignedTime">{{ \'document.date_signed\' | translate }}:{{customerSignedTime | date: displayDateFormat}}</p>\n        </ion-col>\n\n        <ion-col>\n          <ion-card class="signature">\n            <ion-card-header>\n              <ion-item>\n                <span item-left>{{ \'document.sales_consultants_signature\' | translate }}</span>\n                <ion-icon *ngIf="!item.consultantSignatureId" item-end (click)="clearPad(\'consultant\')" name="refresh" md="ios-refresh"></ion-icon>\n              </ion-item>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-input name="consultantSign" [(ngModel)]= "documentObj.consultantUrlBlob" hidden required></ion-input>\n              <img *ngIf="item.consultantSignatureId" [src]="domSanitizer.bypassSecurityTrustUrl(consultantUrl)"/>\n              <signature-pad  *ngIf="!item.consultantSignatureId" #consultantSignPad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete(\'consultant\')"></signature-pad>\n            </ion-card-content>\n          </ion-card>\n          <p text-right *ngIf="consultantSignedTime">{{ \'document.date_signed\' | translate }}: {{consultantSignedTime | date: displayDateFormat}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class="default-button-group">\n      <ion-row>\n        <ion-col>\n          <button type="button" ion-button full color="light" (click)="cancel()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button type="submit" [disabled]="!form.valid || isDoneReservation()" ion-button full>{{ \'SAVE_BUTTON\' | translate }}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   </form> \n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/document/document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_document_service__["a" /* DocumentService */], __WEBPACK_IMPORTED_MODULE_11__providers_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_7__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_10__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_14__ivt_security__["d" /* IvtSecurityService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], DocumentPage);
    return DocumentPage;
}());

//# sourceMappingURL=document.js.map

/***/ })

});
//# sourceMappingURL=6.js.map