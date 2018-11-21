webpackJsonp([14],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDriveReadyPageModule", function() { return TestDriveReadyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_drive_ready__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_drive_ready__["a" /* TestDriveReadyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], TestDriveReadyPageModule);
    return TestDriveReadyPageModule;
}());

//# sourceMappingURL=test-drive-ready.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDriveReadyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loading_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_bluetooth_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_driving_record_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_geo_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_progress_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_dialog_service__ = __webpack_require__(64);
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
 * Generated class for the TestDriveReadyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestDriveReadyPage = /** @class */ (function () {
    function TestDriveReadyPage(storeage, navCtrl, navParams, bluetoothSvc, platform, toastCtrl, alertCtrl, fileService, domSanitizer, translate, loadingSvc, utils, drivingRecordService, geoService, progressSvc, dialog) {
        var _this = this;
        this.storeage = storeage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bluetoothSvc = bluetoothSvc;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.fileService = fileService;
        this.domSanitizer = domSanitizer;
        this.translate = translate;
        this.loadingSvc = loadingSvc;
        this.utils = utils;
        this.drivingRecordService = drivingRecordService;
        this.geoService = geoService;
        this.progressSvc = progressSvc;
        this.dialog = dialog;
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
        this.item = navParams.get('item');
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
        this.getAppSetting();
    }
    TestDriveReadyPage.prototype.getAppSetting = function () {
        this.appSetting = this.storeage.get(__WEBPACK_IMPORTED_MODULE_12__app_app_config__["a" /* Config */].AppSetting);
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
                        // testing
                        // this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive = true;
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
            var bluetoothEnable, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bluetoothEnable = false;
                        if (!this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.bluetoothSvc.enable()];
                    case 2:
                        bluetoothEnable = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error('[requestPermission] error: ', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        bluetoothEnable = true;
                        _a.label = 6;
                    case 6: return [2 /*return*/, bluetoothEnable && this.requestLocationAccuracy()]; // location is mandatory
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
                            if (lastRecord.drivingRecordStatusEnum === __WEBPACK_IMPORTED_MODULE_9__services_driving_record_service__["a" /* DrivingRecord */].DrivingRecordStatusEnum.OnRecord) {
                                return [2 /*return*/, lastRecord.id];
                            }
                            else if (lastRecord.drivingRecordStatusEnum === __WEBPACK_IMPORTED_MODULE_9__services_driving_record_service__["a" /* DrivingRecord */].DrivingRecordStatusEnum.Done) {
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
            var permissionOk, requestAccuracyOk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geoService.requestLocationPermission()];
                    case 1:
                        permissionOk = _a.sent();
                        if (!permissionOk) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.geoService.requestLocationAccuracy()];
                    case 2:
                        requestAccuracyOk = _a.sent();
                        if (requestAccuracyOk) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.geoService.displayLocationRequiredAlert()];
                    case 4:
                        _a.sent();
                        this.goBackToReservationList();
                        return [2 /*return*/, false];
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
            var passBluetoothChecking, targetDeviceId, isEnabled, loader, err_3, msg, loc, requestRecord, recordId, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passBluetoothChecking = false;
                        targetDeviceId = null;
                        if (!this.appSetting.smartTestDriveSetting.hostSide.tryToConnectToBluetoothDeviceBeforeTestDrive) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.bluetoothSvc.isEnabled()];
                    case 1:
                        isEnabled = _a.sent();
                        if (!isEnabled) return [3 /*break*/, 10];
                        this.btMsg = 'test_drive.bluetooth_established_test_drive_start_soon'; // change UI text
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 9]);
                        if (!(this.utils.isIOS() && this.item.pairedDeviceIdOniOS)) return [3 /*break*/, 3];
                        passBluetoothChecking = true; // scanning classic Bluetooth is not supported on IOS
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(this.utils.isAndroid() && this.item.pairedDeviceIdOnAndroid)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.loadingSvc.create('bluetooth.scanning_bluetooth_devices')];
                    case 4:
                        loader = _a.sent();
                        loader.present();
                        return [4 /*yield*/, this.findTargetDevice(this.item.pairedDeviceIdOnAndroid)];
                    case 5:
                        passBluetoothChecking = _a.sent();
                        loader.dismiss();
                        if (passBluetoothChecking) {
                            targetDeviceId = this.item.pairedDeviceIdOnAndroid;
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        // vehicle were not registered with a bluetooth device
                        passBluetoothChecking = true;
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (this.utils.isIOS()) {
                            passBluetoothChecking = true;
                        }
                        _a.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        passBluetoothChecking = true;
                        _a.label = 13;
                    case 13:
                        if (!!passBluetoothChecking) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.translate.get('test_drive.cannot_find_registered_device').toPromise()];
                    case 14:
                        msg = _a.sent();
                        return [4 /*yield*/, this.dialog.alert(msg)];
                    case 15:
                        _a.sent();
                        this.goBackToReservationList();
                        return [3 /*break*/, 21];
                    case 16: return [4 /*yield*/, this.requestGeoLocation()];
                    case 17:
                        loc = _a.sent();
                        requestRecord = {
                            applicationId: this.applicationId,
                            startLatitude: loc.latitude,
                            startLongitude: loc.longitude,
                            driveStartTime: __WEBPACK_IMPORTED_MODULE_2_moment__().toISOString()
                        };
                        if (targetDeviceId != null) {
                            requestRecord.pairedDeviceId = targetDeviceId;
                        }
                        _a.label = 18;
                    case 18:
                        _a.trys.push([18, 20, , 21]);
                        return [4 /*yield*/, this.getRecordSession(requestRecord)];
                    case 19:
                        recordId = _a.sent();
                        this.nextPage(recordId, requestRecord);
                        return [3 /*break*/, 21];
                    case 20:
                        err_4 = _a.sent();
                        console.error('[getRecordSession]..', err_4);
                        return [3 /*break*/, 21];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Scanning for a target device. Promise resolve with true if found, false if not found
     * @param address_or_uuid
     */
    TestDriveReadyPage.prototype.findTargetDevice = function (address_or_uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1, msg, confirm_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 5]);
                        return [4 /*yield*/, this.bluetoothSvc.scanWithDeviceID(address_or_uuid)];
                    case 1:
                        _a.sent();
                        // found device;
                        return [2 /*return*/, true];
                    case 2:
                        ex_1 = _a.sent();
                        return [4 /*yield*/, this.translate.get('bluetooth.cannot_find_target_device_try_again').toPromise()];
                    case 3:
                        msg = _a.sent();
                        return [4 /*yield*/, this.dialog.confirm(msg)];
                    case 4:
                        confirm_1 = _a.sent();
                        if (confirm_1) {
                            return [2 /*return*/, this.findTargetDevice(address_or_uuid)];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TestDriveReadyPage.prototype.requestGeoLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingSvc.create('msg.receiving_geolocation')];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        return [2 /*return*/, new Promise(function (parentResolve, parentReject) {
                                var subscription = null;
                                var promise = new Promise(function (resolve, _) {
                                    subscription = _this.geoService.subscribe(function (loc) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            console.log('Get the first location');
                                            resolve();
                                            parentResolve(loc);
                                            if (subscription) {
                                                subscription.unsubscribe();
                                            }
                                            loader.dismiss();
                                            return [2 /*return*/];
                                        });
                                    }); });
                                });
                                _this.progressSvc.observe(function () {
                                    loader.dismiss();
                                    if (subscription) {
                                        subscription.unsubscribe();
                                    }
                                    _this.geoService.stop();
                                    parentReject();
                                }, promise, _this.GEO_TIMEOUT);
                                _this.geoService.start();
                            })];
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
                        var subscription, loader, promise;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingSvc.create(this.translate.instant('msg.connecting_to_bluetooth_device'))];
                                case 1:
                                    loader = _a.sent();
                                    loader.present();
                                    promise = new Promise(function (finishProgress, _) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            subscription = this.bluetoothSvc.connect(btId).subscribe(function (_) {
                                                resolve();
                                                console.log('Bluetooth connected');
                                                loader.dismiss();
                                                finishProgress();
                                            }, function (err) {
                                                reject(err);
                                                loader.dismiss();
                                                finishProgress();
                                            });
                                            return [2 /*return*/];
                                        });
                                    }); });
                                    this.progressSvc.observe(function () {
                                        subscription && subscription.unsubscribe();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ivt_security__["e" /* IvtStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__services_bluetooth_service__["a" /* BluetoothService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_7__services_util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_9__services_driving_record_service__["b" /* DrivingRecordService */],
            __WEBPACK_IMPORTED_MODULE_10__services_geo_service__["a" /* GeoService */],
            __WEBPACK_IMPORTED_MODULE_13__services_progress_service__["a" /* ProgressService */],
            __WEBPACK_IMPORTED_MODULE_14__services_dialog_service__["a" /* DialogService */]])
    ], TestDriveReadyPage);
    return TestDriveReadyPage;
}());

//# sourceMappingURL=test-drive-ready.js.map

/***/ })

});
//# sourceMappingURL=14.js.map