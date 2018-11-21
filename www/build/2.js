webpackJsonp([2],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveResultPageModule", function() { return TestDriveResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_drive_result__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestDriveResultPageModule = /** @class */ (function () {
    function TestDriveResultPageModule() {
    }
    TestDriveResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_drive_result__["a" /* TestDriveResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_drive_result__["a" /* TestDriveResultPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], TestDriveResultPageModule);
    return TestDriveResultPageModule;
}());

//# sourceMappingURL=test-drive-result.module.js.map

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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDriveResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_test_drive_test_drive__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_driving_record_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_customer_model__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_camera_service__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_vehicle_odometer_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_bluetooth_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_notification_service__ = __webpack_require__(464);
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
 * Generated class for the TestDriveResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestDriveResultPage = /** @class */ (function () {
    function TestDriveResultPage(navCtrl, navParams, alertCtrl, testDriveProvider, loadingCtrl, util, toastSvr, translate, drivingSvc, loadingSvc, storeage, modalCtrl, camera, fileSvc, vehicleOdometerService, bluetoothSvc, notificationService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.testDriveProvider = testDriveProvider;
        this.loadingCtrl = loadingCtrl;
        this.util = util;
        this.toastSvr = toastSvr;
        this.translate = translate;
        this.drivingSvc = drivingSvc;
        this.loadingSvc = loadingSvc;
        this.storeage = storeage;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.fileSvc = fileSvc;
        this.vehicleOdometerService = vehicleOdometerService;
        this.bluetoothSvc = bluetoothSvc;
        this.notificationService = notificationService;
        this.totalDrivingTime = 0;
        this.totalDrivenMileage = 0;
        this.displayTotalDrivenMileage = 0;
        this.displayTotalDrivingTime = 0;
        this.displayDateFormat = __WEBPACK_IMPORTED_MODULE_11__app_app_config__["a" /* Config */].date.displayFormatDateSurvey;
        this.tabElement = document.querySelector('.tabbar');
        this.displayTab('none');
        this.item = navParams.get('item');
        this.applicationId = navParams.get('applicationId');
        this.drivenDurationInSec = navParams.get('drivenDurationInSec');
        this.displayDrivenDurationInSec = this.drivenDurationInSec.format('HH:mm:ss', {
            trim: false
        });
        this.drivenMileage = navParams.get('drivenMileage');
        this.callback = this.navParams.get('callback');
        this.previousRecordItems = [];
        console.log("record로 부터 받아온 item 파라미터값: ", this.item);
        this.translate.get('msg.available_gps').subscribe(function (value) {
            _this.availableGpsString = value;
        });
        this.getAppSetting();
    }
    TestDriveResultPage.prototype.getAppSetting = function () {
        this.appSetting = this.storeage.get(__WEBPACK_IMPORTED_MODULE_11__app_app_config__["a" /* Config */].AppSetting);
    };
    TestDriveResultPage.prototype.displayTab = function (display) {
        if (this.tabElement && this.tabElement.style)
            this.tabElement.style.display = display;
    };
    TestDriveResultPage.prototype.ionViewWillEnter = function () {
        this.displayTab('none');
    };
    TestDriveResultPage.prototype.ionViewWillLeave = function () {
        this.displayTab('flex');
    };
    TestDriveResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestDriveResultPage');
        this.loading = this.loadingCtrl.create();
        this.getDrivingRecords();
        // this.requestGeolocation()
    };
    TestDriveResultPage.prototype.openVhcPage = function (vehicleId) {
        var profileModal = this.modalCtrl.create('VehicleHealthCheckPage', {
            vehicleId: vehicleId,
            BeforeTestDrive: false
        }, {
            cssClass: 'full-modal'
        });
        profileModal.present();
    };
    TestDriveResultPage.prototype.takeOdometer = function (applicationId) {
        return __awaiter(this, void 0, void 0, function () {
            var profileModal;
            return __generator(this, function (_a) {
                profileModal = this.modalCtrl.create('DriveShootingPage', {
                    applicationId: applicationId,
                    pageType: 'odometer',
                    BeforeTestDrive: false
                }, {
                    cssClass: 'full-modal'
                });
                profileModal.present();
                return [2 /*return*/];
            });
        });
    };
    TestDriveResultPage.prototype.subscribe = function () {
        var _this = this;
        if (this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
            if (this.subscription == undefined || this.subscription.closed == true) {
                this.subscription = this.notificationService.takeOdometerAfterDrive.subscribe(function (result) {
                    _this.subscription.unsubscribe();
                    if (_this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
                        _this.openVhcPage(_this.item.vehicleId);
                    }
                    else {
                        _this.moveSurvey();
                    }
                });
            }
        }
        if (this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
            if (this.vhcSubscription == undefined || this.vhcSubscription.closed == true) {
                this.vhcSubscription = this.notificationService.updateAfterVehicleHealthCheck.subscribe(function (result) {
                    _this.vhcSubscription.unsubscribe();
                    _this.moveSurvey();
                });
            }
        }
    };
    TestDriveResultPage.prototype.finishTestDrive = function () {
        if (this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
            this.takeOdometer(this.applicationId);
        }
        else if (this.appSetting.smartTestDriveSetting.tenantSide.performVhcBeforeAndAfterTestDrive) {
            this.openVhcPage(this.item.vehicleId);
        }
        else {
            this.moveSurvey();
        }
        this.subscribe();
    };
    TestDriveResultPage.prototype.moveSurvey = function () {
        //운행 기록 종료 버튼 탭
        this.finishDrivingRecord();
        /*
            let confirm = this.alertCtrl.create({
        //TODO translate처리. 메시지 텍스트 부분
              title: 'Thanks.',
              buttons: [
                {
                  text: 'Go to Survey',
                  handler: () => {
    
    
    
                    let data = {
                      data: surveyItem
    
                    }
    
                  }
                }
              ]
            });
            confirm.present();*/
    };
    TestDriveResultPage.prototype.finishDrivingRecord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("finishDrivingRecord running...");
                        return [4 /*yield*/, this.loadingSvc.create('msg.finishing_driving_record')];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        this.drivingSvc.finishRecord({
                            applicationId: this.applicationId,
                            startLatitude: null,
                            driveStartTime: null,
                            startLongitude: null
                        }).toPromise().then(function () {
                            var customer = new __WEBPACK_IMPORTED_MODULE_9__models_customer_model__["a" /* Customer */]();
                            customer.fullName = _this.item.customerFullName;
                            // customer id is not correctly an application id. They are different, will fix this later
                            customer.id = _this.applicationId;
                            _this.navCtrl.push("SurveyDetailPage", { customer: customer, disableBack: true }).then(function (_) { return loader.dismiss(); });
                            _this.navCtrl.popToRoot();
                        }, function (err) {
                            console.error('[finishDrivingRecord] error happens..', err);
                            var msg = err.message || 'msg.failed_to_finish_record';
                            _this.toastSvr.error(msg);
                            loader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TestDriveResultPage.prototype.getDrivingRecords = function () {
        var _this = this;
        this.loading.present();
        this.drivingRecord = this.testDriveProvider.getDrivingRecords({ applicationId: this.applicationId });
        this.drivingRecord.subscribe(function (res) {
            if (res.code === __WEBPACK_IMPORTED_MODULE_3__ivt_http_client__["a" /* APICode */].Success) {
                console.log("getDriving record!: ", res.data);
                for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.previousRecordItems.push({
                        drivenStartTime: /* this.util.koreanDateFormat(item.driveStartTime)*/ __WEBPACK_IMPORTED_MODULE_5_moment__(item.driveStartTime).locale(__WEBPACK_IMPORTED_MODULE_11__app_app_config__["a" /* Config */].moment.locale).format("LLL"),
                        drivenDurationInSec: __WEBPACK_IMPORTED_MODULE_5_moment__(parseInt(item.drivenDurationInSec) * 1000).utc().locale(__WEBPACK_IMPORTED_MODULE_11__app_app_config__["a" /* Config */].moment.locale).format("HH:mm:ss"),
                        drivenMileage: item.drivenMileage,
                        endFullAddress: item.endFullAddress,
                        startFullAddress: item.startFullAddress,
                        endLatitude: item.endLatitude,
                        endLongitude: item.endLongitude,
                        recordId: item.id
                    });
                    console.log("this.previousRecordItems: ", _this.previousRecordItems);
                    _this.totalDrivingTime += item.drivenDurationInSec;
                    _this.totalDrivenMileage += item.drivenMileage;
                    console.log("Record this: ", _this);
                }
                _this.displayTotalDrivenMileage = parseFloat(_this.totalDrivenMileage.toFixed(1));
                _this.displayTotalDrivingTime = __WEBPACK_IMPORTED_MODULE_5_moment__(parseInt(_this.totalDrivingTime) * 1000).utc().locale(__WEBPACK_IMPORTED_MODULE_11__app_app_config__["a" /* Config */].moment.locale).format("HH:mm:ss");
                return _this.loading.dismiss();
                /* {
                  items: [{
                    id: 1,
                    startLatitude: 43.54645645,
                    endLatitude: 43.54645645,
                    startLongitude: 54.334454,
                    endLongitude: 54.334454,
                    startFullAddress: "",
                    endFullAddress: "",
                    drivenMileage: 10.20,
                    drivenDurationInSec: 4234,
                    drivingRecordStatusEnum: "Done"
                  }]
                }*/
            }
            else {
                //TODO 기존 기록이 없어서 받아올 값이 없으므로. 초기 상태로 시작하기 위해 초기값으로 세팅.
            }
        }, function (err) {
            console.error('[getDrivingRecords]..', err);
            _this.loading.dismiss();
        });
    };
    TestDriveResultPage.prototype.generateUniqueFileName = function () {
        return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
    };
    TestDriveResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-test-drive-result',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/test-drive-result/test-drive-result.html"*/'<!--\n  Generated template for the TestDriveResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  hideBackButton *navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'TESTDRIVERESULT_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="vehicle-title">\n    {{item.vehicleDisplayName}}\n  </div>\n\n  <div class="drive-result">\n    <div class="drive-button-group">\n      <ion-grid>\n        <ion-row>\n          <!-- <ion-col>\n            <button ion-button full (click)="restartRecord()" class="continue"><span>{{ \'test_drive.test_drive\' | translate }}</span><span>{{ \'test_drive.continue\' | translate }}</span></button>\n          </ion-col> -->\n          <ion-col>\n            <button ion-button full (click)="finishTestDrive()" class="finish"><span></span><span>{{ \'test_drive.drive_finish\' | translate }}</span></button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="drive-statistics">\n      <ion-grid class="statistics-head">\n        <ion-row>\n          <ion-col>\n            <p><ion-icon name="icon_clock"></ion-icon>{{ \'test_drive.driving_time\' | translate }}</p>\n            <p>{{ displayDrivenDurationInSec }}</p>\n          </ion-col>\n          <ion-col>\n            <p><ion-icon name="icon_car"></ion-icon>{{ \'test_drive.total_distance\' | translate }}</p>\n            <p>{{ drivenMileage |number:\'1.1-1\' }} &nbsp;<span>{{ \'test_drive.km\' | translate }}</span></p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-card class="travel-route">\n        <dl class="travel-course" *ngFor="let item of previousRecordItems">\n          <dt>\n            <span class="date-time">{{item.drivenStartTime | date: displayDateFormat}}</span>\n            <span class="distance">{{item.drivenDurationInSec}} / {{item.drivenMileage | number:\'1.1-1\'}} km</span> <!---->\n          </dt>\n          <dd>\n            <p class="text-row">\n              <span class="course-message course-start">\n                {{item.startFullAddress}}\n              </span>\n            </p>\n          </dd>\n          <dd>\n            <p class="text-row">\n              <span class="course-message course-end">\n                <em>{{item.endFullAddress}}</em>\n              </span>\n            </p>\n          </dd>\n        </dl>\n\n        <!--         <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <ion-icon name="icon_location"></ion-icon>\n\n                    </ion-col>\n                    <ion-col>\n                      <h2>{{item.endRecordTime}}</h2><br>\n                      {{item.item.location}}<br>\n                      {{item.endLocation}}<br>\n                      {{item.recordTime}}<br>\n                      {{item.recordDistance}}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> -->\n\n      </ion-card>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/test-drive-result/test-drive-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_test_drive_test_drive__["a" /* TestDriveProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* Util */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__services_driving_record_service__["b" /* DrivingRecordService */],
            __WEBPACK_IMPORTED_MODULE_10__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_12__ivt_security__["e" /* IvtStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_13__services_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_14__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_15__services_vehicle_odometer_service__["a" /* VehicleOdometerService */],
            __WEBPACK_IMPORTED_MODULE_16__services_bluetooth_service__["a" /* BluetoothService */],
            __WEBPACK_IMPORTED_MODULE_17__services_notification_service__["a" /* NotificationService */]])
    ], TestDriveResultPage);
    return TestDriveResultPage;
}());

//# sourceMappingURL=test-drive-result.js.map

/***/ })

});
//# sourceMappingURL=2.js.map