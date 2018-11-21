webpackJsonp([11],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveReadyPageModule", function() { return TestDriveReadyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_drive_ready__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TestDriveReadyPageModule = /** @class */ (function () {
    function TestDriveReadyPageModule() {
    }
    TestDriveReadyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_drive_ready__["a" /* TestDriveReadyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_drive_ready__["a" /* TestDriveReadyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], TestDriveReadyPageModule);
    return TestDriveReadyPageModule;
}());

//# sourceMappingURL=test-drive-ready.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDriveReadyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bluetooth_bluetooth__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_test_drive_test_drive__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_file_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_dialog_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_loading_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_util_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_location_accuracy__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_diagnostic__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_bluetooth_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_driving_record_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_toast_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_geo_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ivt_security__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_app_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_progress_service__ = __webpack_require__(489);
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























// import {ionicSuperPopup} from "../../component/popup/ionic-super-popup"
/**
 * Generated class for the TestDriveReadyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestDriveReadyPage = /** @class */ (function () {
    function TestDriveReadyPage(storeage, navCtrl, navParams, items, bluetoothSvc, loadingCtrl, platform, ble, toastCtrl, geolocation, testDriveProvider, util, bt, alertCtrl, fileService, domSanitizer, translate, dialog, loadingSvc, utils, locationAccuracy, diagnostic, drivingRecordService, toastSvc, geoService, progressSvc) {
        var _this = this;
        this.storeage = storeage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.bluetoothSvc = bluetoothSvc;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.ble = ble;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.testDriveProvider = testDriveProvider;
        this.util = util;
        this.bt = bt;
        this.alertCtrl = alertCtrl;
        this.fileService = fileService;
        this.domSanitizer = domSanitizer;
        this.translate = translate;
        this.dialog = dialog;
        this.loadingSvc = loadingSvc;
        this.utils = utils;
        this.locationAccuracy = locationAccuracy;
        this.diagnostic = diagnostic;
        this.drivingRecordService = drivingRecordService;
        this.toastSvc = toastSvc;
        this.geoService = geoService;
        this.progressSvc = progressSvc;
        this.msg = {
            ok: 'OK'
        };
        this.GEO_TIMEOUT = 40000;
        this.BLUETOOTH_TIMEOUT = 30000;
        this.tabElement = document.querySelector('.tabbar');
        this.displayTab('none');
        this.geoItems = [];
        this.isConnected = false;
        this.btUnpaireItems = [];
        this.previousRecord = [];
        //서버로부터 가져온 BT ID값이 같으면 바로 record로 넘김
        this.info = [];
        this.btMsg = 'test_drive.bluetooth_connection_required';
        this.item = navParams.get('item') || items.defaultItem;
        this.applicationId = this.item.id;
        // this.applicationId = 127 //TODO Reservation List에서 받아온 id값이 500 인터널 에러 나서 일단 127로 사용.
        console.log("이전 파라미터: ", this.item);
        this.carInfo = this.item.vehicleDisplayName;
        // this.info.push({
        //   userName: this.item.customerFullName,
        //   consultant: this.item.consultantUserName,
        //   useTime: this.item.time,
        //   location: this.item.location
        // })
        this.translate.get('msg.bluetooth').subscribe(function (value) {
            _this.bluetoothString = value;
        });
        this.translate.get('msg.bluetooth_is_off_do_you_want_to_proceed_anyway').subscribe(function (value) {
            _this.bluetoothOffString = value;
        });
        this.translate.get('YES_BUTTON').subscribe(function (value) {
            _this.yesString = value;
        });
        this.translate.get('NO_BUTTON').subscribe(function (value) {
            _this.noString = value;
        });
        this.translate.get('msg.connecting_to_bluetooth_device').subscribe(function (value) {
            _this.connectingToBluetoothDeviceString = value;
        });
        this.translate.get('test_drive.connection_failed_to').subscribe(function (value) {
            _this.connectionFailedToString = value;
        });
        this.translate.get('test_drive.tried_to_connect_to').subscribe(function (value) {
            _this.triedToConnectToString = value;
        });
        this.translate.get('test_drive.but_failed').subscribe(function (value) {
            _this.butFailedString = value;
        });
        this.translate.get('test_drive.reason').subscribe(function (value) {
            _this.reasonString = value;
        });
        this.translate.get('test_drive.do_you_want_to_proceed_anyway').subscribe(function (value) {
            _this.doYouWantToProceedAnywayString = value;
        });
        this.translate.get('msg.gps').subscribe(function (value) {
            _this.gpsString = value;
        });
        this.translate.get('msg.access_to_location_services_is_denied').subscribe(function (value) {
            _this.accessToLocationServicesIsDeniedString = value;
        });
        this.translate.get('OK_BUTTON').subscribe(function (value) {
            _this.okString = value;
        });
        this.translate.get('msg.receiving_geolocation').subscribe(function (value) {
            _this.receivingGeolocationString = value;
        });
        this.getAppSetting();
    }
    TestDriveReadyPage.prototype.getAppSetting = function () {
        this.appSetting = this.storeage.get(__WEBPACK_IMPORTED_MODULE_21__app_app_config__["a" /* Config */].AppSetting);
    };
    TestDriveReadyPage.prototype.displayTab = function (display) {
        if (this.tabElement && this.tabElement.style)
            this.tabElement.style.display = display;
    };
    TestDriveReadyPage.prototype.ionViewWillEnter = function () {
        this.displayTab('none');
    };
    TestDriveReadyPage.prototype.ionViewWillLeave = function () {
        this.displayTab('flex');
    };
    TestDriveReadyPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getVehiclePicture();
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.requestPermission()];
                    case 2:
                        if (_a.sent()) {
                            this.process();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TestDriveReadyPage.prototype.requestPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var success, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        success = false;
                        if (!this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.bluetoothSvc.enable()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error('[requestPermission] error: ', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, this.requestLocationAccuracy()]; // location is mandatory
                }
            });
        });
    };
    /**
     * Get record session id
     */
    TestDriveReadyPage.prototype.getRecordSession = function (recordRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var records, shouldMakeNewSession, lastRecord, newRecord, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.drivingRecordService.search({ "applicationId": this.applicationId }).toPromise()];
                    case 1:
                        records = _a.sent();
                        console.log('[getRecordSession] get records ...', records);
                        shouldMakeNewSession = false;
                        if (!records || records.length == 0) {
                            // first test drive
                            shouldMakeNewSession = true;
                        }
                        else {
                            // resort to prevent server side mistake
                            records.sort(function (record1, record2) { return Number(record1.id) - Number(record2.id); });
                            console.log('[getRecordSession] sort Records: records ...', records);
                            lastRecord = records[records.length - 1];
                            if (lastRecord.drivingRecordStatusEnum === __WEBPACK_IMPORTED_MODULE_17__services_driving_record_service__["a" /* DrivingRecord */].DrivingRecordStatusEnum.OnRecord) {
                                return [2 /*return*/, lastRecord.id];
                            }
                            else if (lastRecord.drivingRecordStatusEnum === __WEBPACK_IMPORTED_MODULE_17__services_driving_record_service__["a" /* DrivingRecord */].DrivingRecordStatusEnum.Done) {
                                shouldMakeNewSession = true;
                            }
                        }
                        if (!shouldMakeNewSession) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.drivingRecordService.startRecord(recordRequest).toPromise()];
                    case 2:
                        newRecord = _a.sent();
                        console.log('[getRecordSession] startRecord: newRecord ...', newRecord);
                        return [2 /*return*/, newRecord.id];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        console.error('[getRecordSession]', err_2);
                        // this.toastSvc.error('msg.failed_to_get_record_session');
                        throw err_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TestDriveReadyPage.prototype.requestLocationAccuracy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authorized, status_1, gpsServiceOn, canRequest, accuracy, err_3, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.isLocationAuthorized()];
                    case 1:
                        authorized = _a.sent();
                        console.log('authorized =', authorized);
                        if (!!authorized) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.diagnostic.requestLocationAuthorization()];
                    case 2:
                        status_1 = _a.sent();
                        console.log('status =', status_1);
                        switch (status_1) {
                            case this.diagnostic.permissionStatus.NOT_REQUESTED:
                                console.log("Permission not requested"); // show alert dialog
                            case this.diagnostic.permissionStatus.DENIED:
                                console.log("Permission denied");
                                break;
                            case this.diagnostic.permissionStatus.GRANTED:
                                console.log("Permission granted always");
                                authorized = true;
                                break;
                            case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                                console.log("Permission granted only when in use");
                                authorized = true;
                                break;
                        }
                        _a.label = 3;
                    case 3:
                        gpsServiceOn = false;
                        if (!authorized) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.locationAccuracy.canRequest()];
                    case 4:
                        canRequest = _a.sent();
                        console.log('canRequest=', canRequest);
                        if (!canRequest) return [3 /*break*/, 8];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)];
                    case 6:
                        accuracy = _a.sent();
                        gpsServiceOn = true;
                        console.log("Successfully requested accuracy: " + accuracy.message);
                        return [3 /*break*/, 8];
                    case 7:
                        err_3 = _a.sent();
                        console.log('Error requesting location accuracy', err_3);
                        return [3 /*break*/, 8];
                    case 8:
                        if (!!gpsServiceOn) return [3 /*break*/, 11];
                        console.error('Application need location permission to work correctly');
                        return [4 /*yield*/, this.translate.get('msg.location_service_required').toPromise()];
                    case 9:
                        msg = _a.sent();
                        return [4 /*yield*/, this.dialog.alert(msg)];
                    case 10:
                        _a.sent();
                        this.goBackToReservationList();
                        _a.label = 11;
                    case 11: return [2 /*return*/, gpsServiceOn];
                }
            });
        });
    };
    TestDriveReadyPage.prototype.getVehiclePicture = function () {
        var _this = this;
        this.fileService.download(this.item.vehicleFrontSidePictureId).then(function (result) {
            _this.vehiclePicture = result;
        });
    };
    TestDriveReadyPage.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isEnabled, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isEnabled = false;
                        if (!this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.bluetoothSvc.isEnabled()];
                    case 1:
                        isEnabled = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!isEnabled) return [3 /*break*/, 10];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 9, , 10]);
                        if (!(this.item.pairedDeviceIdOniOS || this.item.pairedDeviceIdOnAndroid)) return [3 /*break*/, 8];
                        if (!this.utils.isIOS()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.pairWithDevice(this.item.pairedDeviceIdOniOS)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        if (!this.utils.isAndroid()) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.pairWithDevice(this.item.pairedDeviceIdOnAndroid)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        this.btMsg = 'test_drive.bluetooth_established_test_drive_start_soon';
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [3 /*break*/, 10];
                    case 10:
                        // If user do not allow the permission, skip all of the following procedures in this issue description. Then we will proceed WITHOUT Bluetooth connection trial. No user message to show at this time.
                        // if (!paired) {
                        //   let msg = await this.translate.get('msg.press_ok_when_you_are_ready').toPromise();
                        //   let isConfirmed = await this.dialog.confirm(msg);
                        //   if (!isConfirmed) {
                        //     // not proceed further
                        //     return;
                        //   }
                        // }
                        this.requestGeoLocation();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestDriveReadyPage.prototype.requestGeoLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader, subscription, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingSvc.create(this.receivingGeolocationString)];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        subscription = null;
                        promise = new Promise(function (resolve, reject) {
                            var subscription = _this.geoService.subscribe(function (loc) { return __awaiter(_this, void 0, void 0, function () {
                                var requestRecord, recordId, err_5;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('Get the first location');
                                            // if (timeChecking) {
                                            //   clearInterval(timeChecking);
                                            // }
                                            resolve();
                                            loader.dismiss();
                                            if (subscription) {
                                                subscription.unsubscribe();
                                            }
                                            requestRecord = {
                                                applicationId: this.applicationId,
                                                startLatitude: loc.latitude,
                                                startLongitude: loc.longitude,
                                                driveStartTime: __WEBPACK_IMPORTED_MODULE_5_moment__().toISOString()
                                            };
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, this.getRecordSession(requestRecord)];
                                        case 2:
                                            recordId = _a.sent();
                                            this.nextPage(recordId, requestRecord);
                                            return [3 /*break*/, 4];
                                        case 3:
                                            err_5 = _a.sent();
                                            console.error('[getRecordSession]..', err_5);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        this.progressSvc.observe(function () {
                            loader.dismiss();
                            if (subscription) {
                                subscription.unsubscribe();
                            }
                            _this.geoService.stop();
                        }, promise, this.GEO_TIMEOUT);
                        this.geoService.start();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Promise resolve if pairing successfully, reject if it fails
     * @param btId
     */
    TestDriveReadyPage.prototype.pairWithDevice = function (btId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Pairing with device ', btId);
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        var loader, promise;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingSvc.create(this.connectingToBluetoothDeviceString)];
                                case 1:
                                    loader = _a.sent();
                                    loader.present();
                                    promise = new Promise(function (finishProgress, _) { return __awaiter(_this, void 0, void 0, function () {
                                        var err_6;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, 3, 4]);
                                                    return [4 /*yield*/, this.bluetoothSvc.connect(btId)];
                                                case 1:
                                                    _a.sent();
                                                    resolve();
                                                    return [3 /*break*/, 4];
                                                case 2:
                                                    err_6 = _a.sent();
                                                    reject(err_6);
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    loader.dismiss();
                                                    finishProgress();
                                                    return [7 /*endfinally*/];
                                                case 4: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    this.progressSvc.observe(function () {
                                        _this.bluetoothSvc.disconnect();
                                        reject();
                                        loader.dismiss();
                                    }, promise, this.BLUETOOTH_TIMEOUT);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    TestDriveReadyPage.prototype.nextPage = function (recordId, recordRequest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.setRoot('TestDriveRecordPage', {
                    item: this.item,
                    recordId: recordId,
                    recordRequest: recordRequest
                });
                this.navCtrl.popToRoot();
                return [2 /*return*/];
            });
        });
    };
    TestDriveReadyPage.prototype.clickReselection = function () {
        this.goBackToReservationList();
    };
    TestDriveReadyPage.prototype.goBackToReservationList = function () {
        this.navCtrl.setRoot('ReservationListPage');
        this.navCtrl.popToRoot();
        this.geoService.stop();
    };
    TestDriveReadyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-test-drive-ready',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/test-drive-ready/test-drive-ready.html"*/'<ion-header>\n\n  <ion-navbar  hideBackButton *navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'TESTDRIVEREADY_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding lightsand>\n  <h2 text-center>{{ \'test_drive.get_in_the_test_vehicle\' | translate }} &amp; <br>{{ \'test_drive.start_the_engine\' | translate }}</h2>\n  <div text-center class="bluetooth">\n    <ion-icon name="bluetooth"></ion-icon>\n    <span>{{btMsg | translate}}</span>\n  </div>\n  <div class="current-car">\n    <div class="car-image">\n      <img [src]="vehiclePicture" *ngIf="vehiclePicture"/>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto text-left>{{carInfo}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-grid class="user-info">\n      <ion-row>\n        <ion-col col-auto><ion-icon name="icon_man"></ion-icon></ion-col>\n        <ion-col col-auto>{{item.consultantUserName}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col  col-auto><ion-icon name="happy"></ion-icon>\n        </ion-col>\n        <ion-col  col-auto>{{item.customerFullName}}</ion-col>\n      </ion-row>\n     <!-- <ion-row>\n        <ion-col  col-auto><ion-icon name="icon_car"></ion-icon></ion-col>\n        <ion-col  col-auto>마지막 종료시간</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto><ion-icon name="icon_location"></ion-icon></ion-col>\n        <ion-col col-auto>차량 현재 위치</ion-col>\n      </ion-row>-->\n    </ion-grid>\n  </div>\n\n  <div text-center padding class="return-button">\n    <button ion-button clear (click)="clickReselection()">\n      <ion-icon name="undo"></ion-icon>\n      <span>{{ \'test_drive.reselection\' | translate }}</span>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/test-drive-ready/test-drive-ready.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_20__ivt_security__["e" /* IvtStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_16__services_bluetooth_service__["a" /* BluetoothService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__providers_test_drive_test_drive__["a" /* TestDriveProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_6__providers_bluetooth_bluetooth__["a" /* BluetoothCall */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11__services_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_12__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_13__services_util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_17__services_driving_record_service__["b" /* DrivingRecordService */],
            __WEBPACK_IMPORTED_MODULE_18__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_19__services_geo_service__["a" /* GeoService */],
            __WEBPACK_IMPORTED_MODULE_22__services_progress_service__["a" /* ProgressService */]])
    ], TestDriveReadyPage);
    return TestDriveReadyPage;
}());

//# sourceMappingURL=test-drive-ready.js.map

/***/ })

});
//# sourceMappingURL=11.js.map