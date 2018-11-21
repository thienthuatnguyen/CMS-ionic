webpackJsonp([27],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveShootingPageModule", function() { return DriveShootingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drive_shooting__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DriveShootingPageModule = /** @class */ (function () {
    function DriveShootingPageModule() {
    }
    DriveShootingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__drive_shooting__["a" /* DriveShootingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__drive_shooting__["a" /* DriveShootingPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__drive_shooting__["a" /* DriveShootingPage */]
            ]
        })
    ], DriveShootingPageModule);
    return DriveShootingPageModule;
}());

//# sourceMappingURL=drive-shooting.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriveShootingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_camera_service__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_vehicle_odometer_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_VehicleOdometer_model__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__(464);
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








var DriveShootingPage = /** @class */ (function () {
    function DriveShootingPage(navCtrl, camera, fileSvc, vehicleOdometerService, navParams, toastSvc, notificationService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.fileSvc = fileSvc;
        this.vehicleOdometerService = vehicleOdometerService;
        this.navParams = navParams;
        this.toastSvc = toastSvc;
        this.notificationService = notificationService;
        this.viewCtrl = viewCtrl;
    }
    DriveShootingPage.prototype.ionViewDidEnter = function () {
        this.pageType = this.navParams.get('pageType');
    };
    DriveShootingPage.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _base64, applicationId, _id, vehicleOdometerModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.pageType == 'odometer')) return [3 /*break*/, 3];
                        _base64 = void 0;
                        applicationId = this.navParams.data.applicationId;
                        return [4 /*yield*/, this.camera.getPicture()];
                    case 1:
                        _base64 = _a.sent();
                        return [4 /*yield*/, this.fileSvc.upload(_base64, {})];
                    case 2:
                        _id = _a.sent();
                        vehicleOdometerModel = new __WEBPACK_IMPORTED_MODULE_6__models_VehicleOdometer_model__["a" /* VehicleOdometerModel */]();
                        vehicleOdometerModel.applicationId = applicationId;
                        vehicleOdometerModel.odometerPictureId = _id;
                        this.vehicleOdometerService.save(vehicleOdometerModel).subscribe(function () {
                        }, function (fail) {
                            _this.toastSvc.error(fail.message);
                        });
                        if (this.navParams.data && this.navParams.data.BeforeTestDrive) {
                            this.notificationService.takeOdometerBeforeDrive.next(true);
                        }
                        if (this.navParams.data && !this.navParams.data.BeforeTestDrive) {
                            this.notificationService.takeOdometerAfterDrive.next(true);
                        }
                        _a.label = 3;
                    case 3:
                        this.viewCtrl.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    DriveShootingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'drive-shooting',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/drive-shooting/drive-shooting.html"*/'<ion-content padding>\n  <div *ngIf="pageType == \'odometer\'">\n    <p class="title" text-center>\n      {{ \'drive_shooting.total_mileage\' | translate }}\n    </p>\n    <p class="title" text-center>\n      {{ \'drive_shooting.highlight_and_shoot\' | translate }}\n    </p>\n  </div>\n  <div *ngIf="pageType == \'front\'">\n      <p class="title" text-center>\n        {{ \'drive_shooting.please_take_a_picture_of_the_front_of_the_vehicle\' | translate }}\n      </p>\n      <p text-center>\n        {{ \'drive_shooting.please_make_sure_the_license_plate_is_clearly_visible\' | translate }}\n      </p>\n  </div>\n  <div *ngIf="pageType == \'back\'">\n      <p class="title" text-center>\n        {{ \'drive_shooting.please_take_a_picture_of_the_side_of_the_vehicle\' | translate }}\n      </p>\n      <p text-center>\n        {{ \'drive_shooting.please_take_a_picture_so_that_the_decal_looks_good\' | translate }}\n      </p>\n  </div>\n  <ion-grid text-center class="profile-Picture">\n    <ion-row align-items-center justify-content-center>\n        <div *ngIf="pageType == \'odometer\'">\n            <img src="assets/img/dashboard-view.svg">\n        </div>\n        <div *ngIf="pageType == \'front\'">\n            <img src="assets/img/front-view.svg">\n        </div>\n        <div *ngIf="pageType == \'back\'">\n            <img src="assets/img/side-view.svg">\n        </div>\n        <p>"{{ \'drive_shooting.should_take_a_photo_with_landscape_mode\' | translate }}"</p>\n      </ion-row>\n      <ion-grid class="default-button-group">\n        <ion-row>\n          <ion-col>\n            <button ion-button full (click)="takePicture()">Begin shooting</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/drive-shooting/drive-shooting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_3__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_5__services_vehicle_odometer_service__["a" /* VehicleOdometerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], DriveShootingPage);
    return DriveShootingPage;
}());

//# sourceMappingURL=drive-shooting.js.map

/***/ })

});
//# sourceMappingURL=27.js.map