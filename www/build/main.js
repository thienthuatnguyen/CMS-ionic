webpackJsonp([37],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxisPosition; });
var AxisPosition = /** @class */ (function () {
    function AxisPosition() {
    }
    return AxisPosition;
}());

//# sourceMappingURL=position.model.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_config_local_setting_model__ = __webpack_require__(59);

var Config = /** @class */ (function () {
    function Config() {
    }
    Config.hostUrl = __WEBPACK_IMPORTED_MODULE_0__models_config_local_setting_model__["a" /* LocalSettingModel */].hostUrl;
    Config.baseUrl = Config.hostUrl + '/api';
    Config.appServiceUrl = Config.baseUrl + '/services/app';
    Config.vehicleServiceUrl = Config.baseUrl + '/services/vehicle';
    // All API response will be transformed. Please checkout HttpClientConfig.transformResponseBody()
    Config.api = {
        GetVehiclesWithApplicationForApp: Config.appServiceUrl + '/vehicle/GetVehiclesWithApplicationForApp',
        Login: Config.baseUrl + '/Account',
        SignUp: "SignUp",
        GetCurrentLoginInformations: Config.appServiceUrl + '/session/GetCurrentLoginInformations',
        GetAllLocalizationsForApp: Config.appServiceUrl + '/language/GetAllLocalizationForApp',
        GetAllPermissionsForApp: Config.appServiceUrl + '/permission/GetAllPermissionsForApp',
        GetFormattedAddress: Config.appServiceUrl + '/googleApi/GetFormattedAddress',
        GetApplicationsForApp: Config.appServiceUrl + '/application/GetApplicationsForApp',
        CreateOrUpdateReservationForApp: Config.appServiceUrl + '/application/CreateOrUpdateReservationForApp',
        CreateOrUpdateApplicationForApp: Config.appServiceUrl + '/application/CreateOrUpdateApplicationForApp',
        GetAvailableReservationTimeSlots: Config.appServiceUrl + '/appointmentSlot/GetAvailableReservationTimeSlots',
        CancelReservation: Config.appServiceUrl + '/application/CancelReservation',
        StartDrivingRecord: Config.appServiceUrl + '/drivingRecord/StartDrivingRecord',
        CreateDrivingRawRecords: Config.appServiceUrl + '/drivingRecord/CreateDrivingRawRecords',
        CreateVehicleForApp: Config.appServiceUrl + '/vehicle/CreateVehicleForApp',
        GetVehicleSegments: Config.appServiceUrl + '/vehicleSegment/GetVehicleSegments',
        GetVehiclesForApp: Config.appServiceUrl + '/vehicle/GetVehiclesForApp',
        GetApplicationsSurveyUndoneWithDrivingRecord: Config.appServiceUrl + '/application/GetApplicationsSurveyUndoneWithDrivingRecord',
        GetVehicleHealthCheckDamages: Config.appServiceUrl + '/vehicleHealthCheck/GetVehicleHealthCheckDamages',
        GetVehicleHealthCheckDamagesAndCommentAndPhotos: Config.appServiceUrl + '/vehicleHealthCheck/GetVehicleHealthCheckDamagesAndCommentAndPhotos',
        UploadPicture: Config.hostUrl + '/file/UploadPicture',
        GetPicture: Config.hostUrl + '/file/GetPicture',
        DownloadUserManualAsPdf: Config.hostUrl + '/file/DownloadUserManualAsPdf',
        CreateOrUpdateVehicleHealthCheckDamages: Config.appServiceUrl + '/vehicleHealthCheck/CreateOrUpdateVehicleHealthCheckDamages',
        CreateVehicleHealthCheckDamagesAndCommentAndPhotos: Config.appServiceUrl + '/vehicleHealthCheck/CreateVehicleHealthCheckDamagesAndCommentAndPhotos',
        CreateOrUpdateSimpleSurveyResponses: Config.appServiceUrl + '/simpleSurvey/CreateOrUpdateSimpleSurveyResponses',
        GetSimpleSurveyQuestionsAndResponses: Config.appServiceUrl + '/simpleSurvey/GetSimpleSurveyQuestionsAndResponses',
        GetVehicleHealthCheckCommentAndPhotos: Config.appServiceUrl + '/vehicleHealthCheck/GetVehicleHealthCheckCommentAndPhotos',
        CreateOrUpdateVehicleHealthCheckCommentAndPhotosForApp: Config.appServiceUrl + '/vehicleHealthCheck/CreateOrUpdateVehicleHealthCheckCommentAndPhotosForApp',
        ChangePassword: Config.appServiceUrl + '/profile/ChangePassword',
        EndDrivingRecord: Config.appServiceUrl + '/drivingRecord/EndDrivingRecord',
        ContinueDrivingRecord: Config.appServiceUrl + '/drivingRecord/ContinueDrivingRecord',
        FinishDrivingRecord: Config.appServiceUrl + '/drivingRecord/FinishDrivingRecord',
        GetDrivingRecords: Config.appServiceUrl + '/drivingRecord/GetDrivingRecords',
        UploadProfilePicture: Config.hostUrl + '/file/UploadProfilePicture',
        GetAllSettingsForApp: Config.appServiceUrl + '/tenantSettings/GetAllSettingsForApp',
        CreateVehicleOdometerForApp: Config.appServiceUrl + '/vehicleOdometer/CreateVehicleOdometerForApp',
        CheckVersionForUpdates: Config.appServiceUrl + '/appVersion/CheckVersionForUpdates'
    };
    // date format is used for angular date pipe
    Config.date = {
        formatTime: 'hh:mm',
        SeverFormatMoment: "YYYY-MM-DD HH:mm:ss",
        YYYYMMDD: "YYYY-MM-DD",
        displayFormat: "MM/dd/yyyy HH:mm:ss",
        displayShortTime: "MM/dd/yyyy",
        displayFormatDateSurvey: "MM/dd/yyyy HH:mm",
        TestDriveResultKoreanFormat: "YYYY년 M월 D일, HH:mm",
        TestDriveResultDurationDateFormat: "HH/mm"
    };
    // date format is used for moment
    Config.moment = {
        displayFormat: "MM/DD/YYYY HH:mm:ss",
        locale: "en"
    };
    Config.setting = {
        auto_start: "settings.auto_start",
        prevent_screen_from_sleeping: "settings.prevent_screen_from_sleeping"
    };
    Config.LocationForApp = "LocationForApp";
    Config.AllPermissionForApp = "AllPermissionForApp";
    Config.AppSetting = "AppSetting";
    Config.reservation = {
        startDrive: ["CheckIn", "Driving"],
        createDocument: ["Appointment", "NoShow"],
        editDocument: ["Appointment", "NoShow", "Canceled"],
        done: ["Done", "Canceled"]
    };
    Config.direction = {
        ltr: "ltr",
        rtl: "rtl"
    };
    return Config;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_providers_vehicleItems__ = __webpack_require__(394);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__mocks_providers_vehicleItems__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(475);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__util__["a"]; });



// export {RequestReservationList} from "./items/reservationList";
// export {BluetoothCall} from "./bluetooth/bluetooth";

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_open_native_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__ = __webpack_require__(416);
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










var GeoService = /** @class */ (function () {
    function GeoService(backgroundGeolocation, toastSvc, utils, platform, ngZone, diagnostic, openNativeSettings, translate, dialog, locationAccuracy) {
        var _this = this;
        this.backgroundGeolocation = backgroundGeolocation;
        this.toastSvc = toastSvc;
        this.utils = utils;
        this.platform = platform;
        this.ngZone = ngZone;
        this.diagnostic = diagnostic;
        this.openNativeSettings = openNativeSettings;
        this.translate = translate;
        this.dialog = dialog;
        this.locationAccuracy = locationAccuracy;
        this.storedLocations = [];
        this.isRecording = false;
        this.serviceRunning = false;
        this.listeners = [];
        this._window = window;
        this.platform.ready().then(function () {
            var isIOS = _this.utils.isIOS();
            _this.config = {
                locationProvider: _this.backgroundGeolocation.LocationProvider.ANDROID_DISTANCE_FILTER_PROVIDER,
                desiredAccuracy: 0,
                stationaryRadius: isIOS ? 5 : 1,
                distanceFilter: isIOS ? 5 : 1,
                debug: false,
                stopOnTerminate: true,
                interval: 2000,
                fastestInterval: 1000,
                activitiesInterval: 1000,
                activityType: 'AutomotiveNavigation',
                saveBatteryOnBackground: false,
                pauseLocationUpdates: false // Apple docs ask to restart manually, so we don't allow to pause
            };
        });
    }
    /**
     * Stop background geolocation task and reset service state
     */
    GeoService.prototype.stop = function () {
        // this.backgroundGeolocation.stop();
        console.log('[GeoService] stop');
        this.serviceRunning = false;
        // this._window.backgroundGeolocation.stop();
        if (this.utils.isIOS()) {
            this.backgroundGeolocation.finish();
        }
        this.backgroundGeolocation.stop();
        // this._window.BackgroundGeolocation.removeAllListeners('location');
        // this._window.BackgroundGeolocation.removeAllListeners('stationary');
        // this._window.BackgroundGeolocation.removeAllListeners('background');
        // this._window.BackgroundGeolocation.removeAllListeners('foreground');
        this.listeners = [];
        this.isRecording = false;
        this.storedLocations = [];
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    GeoService.prototype.pauseRecord = function () {
        this.isRecording = false;
    };
    GeoService.prototype.resumeRecord = function () {
        this.isRecording = true;
    };
    GeoService.prototype.getStoredLocations = function () {
        return this.storedLocations;
    };
    /**
     * Subscribe to location changes. If you don't want to receive the changes, please ubsubscribe it
     * @param fn
     */
    GeoService.prototype.subscribe = function (fn) {
        var _this = this;
        this.listeners.push(fn);
        var index = this.listeners.length - 1;
        this.ngZone.run(function () {
            _this.storedLocations.forEach(function (loc) { return fn(loc); });
        });
        return {
            unsubscribe: function () {
                _this.listeners.splice(index, 1);
            }
        };
    };
    /**
     * Start background geolocation
     * Cannot subscribe multiple times on the same Observable
     */
    GeoService.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.isRecording = true;
                        this.storedLocations = [];
                        this.serviceRunning = true;
                        this.subscription = this.backgroundGeolocation.configure(this.config).subscribe(function (loc) {
                            _this.onNewLocation(loc);
                        }, function (ex) {
                            console.error('start failed.......', ex);
                            _this.toastSvc.error('msg.background_location_failed');
                            // throw Observable.throw(ex);
                        });
                        this.backgroundGeolocation.start();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeoService.prototype.switchToForeground = function () {
        // return this._window.BackgroundGeolocation.switchMode(this._window.BackgroundGeolocation.FOREGROUND_MODE);
        return this.backgroundGeolocation.switchMode(this.backgroundGeolocation.Mode.FOREGROUND);
    };
    GeoService.prototype.switchToBackground = function () {
        // return this._window.BackgroundGeolocation.switchMode(this._window.BackgroundGeolocation.BACKGROUND_MODE);
        return this.backgroundGeolocation.switchMode(this.backgroundGeolocation.Mode.BACKGROUND);
    };
    // private async forceLocationPeriodically() {
    //     await this.platform.ready();
    //     this.interval = setInterval(
    //         () => {
    //             // window.BackgroundGeolocation.getCurrentLocation(
    //             //     (location: BackgroundGeolocationResponse) => {
    //             //         this.onNewLocation(location);
    //             //     },
    //             //     (code: number, message: string) => {
    //             //     },
    //             //     {
    //             //         timeout: 3000,
    //             //         enableHighAccuracy: true
    //             //     }
    //             // )
    //             this.backgroundGeolocation.getLocations().then(
    //                 loc => console.log('backgroundGeolocation:..', loc)
    //             )
    //             this.geolocation.getCurrentPosition({
    //                 timeout: 3000
    //                 // enableHighAccuracy: true
    //             }).then(
    //                 (pos: Geoposition) => {
    //                     this.onNewLocation({
    //                         latitude: pos.coords.latitude,
    //                         longitude: pos.coords.longitude,
    //                         accuracy: pos.coords.accuracy,
    //                         altitude: pos.coords.altitude,
    //                         coords: pos.coords,
    //                         speed: pos.coords.speed,
    //                         timestamp: pos.timestamp,
    //                         time: pos.timestamp
    //                     } as BackgroundGeolocationResponse);
    //                 },
    //                 err => console.error('geolocation error', err)
    //             )
    //         },
    //         1000
    //     );
    // }
    GeoService.prototype.mockTestLocation = function () {
        var _this = this;
        var i = 0;
        setInterval(function () {
            i++;
            _this.onNewLocation({
                accuracy: 10,
                latitude: 10 + i,
                longitude: 100 + i,
            });
        }, 3000);
    };
    GeoService.prototype.onNewLocation = function (loc) {
        var _this = this;
        console.log('[onNewLocation]...', loc);
        var invokeSubscribers = function (_loc) {
            _this.ngZone.run(function () {
                console.log('[onNewLocation] ngZone');
                _this.listeners.forEach(function (fn) {
                    fn(_loc);
                });
            });
        };
        if (this.isRecording) {
            this.storedLocations.push(loc);
            invokeSubscribers(loc);
        }
    };
    GeoService.prototype.requestLocationPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.diagnostic.getLocationAuthorizationStatus()];
                    case 1:
                        status_1 = _a.sent();
                        console.log('[requestLocationPermission] status=', status_1);
                        switch (status_1) {
                            case this.diagnostic.permissionStatus.NOT_REQUESTED:
                                console.log("Permission not requested"); // show alert dialog
                                return [2 /*return*/, this.requestLocationAuthorization()];
                            case this.diagnostic.permissionStatus.DENIED:
                                console.log("Permission denied");
                                return [2 /*return*/, false];
                            case this.diagnostic.permissionStatus.GRANTED:
                                console.log("Permission granted always");
                            case this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                                console.log("Permission granted only when in use");
                                return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GeoService.prototype.requestLocationAccuracy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var canRequest, accuracy, err_1, accuracy, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.utils.isAndroid()) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.locationAccuracy.canRequest()];
                    case 1:
                        canRequest = _a.sent();
                        console.log('canRequest=', canRequest);
                        if (!canRequest) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)];
                    case 3:
                        accuracy = _a.sent();
                        console.log("Successfully requested accuracy: " + accuracy.message);
                        return [2 /*return*/, true];
                    case 4:
                        err_1 = _a.sent();
                        console.log('Error requesting location accuracy', err_1);
                        return [2 /*return*/, false];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, false];
                    case 7: return [3 /*break*/, 12];
                    case 8:
                        if (!this.utils.isIOS()) return [3 /*break*/, 12];
                        _a.label = 9;
                    case 9:
                        _a.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)];
                    case 10:
                        accuracy = _a.sent();
                        console.log("IOS Successfully requested accuracy: " + accuracy);
                        return [2 /*return*/, true];
                    case 11:
                        err_2 = _a.sent();
                        console.log('IOS Error requesting location accuracy', err_2);
                        return [2 /*return*/, false];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    GeoService.prototype.requestLocationAuthorization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var requestStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.requestLocationAuthorization('always')];
                    case 1:
                        requestStatus = _a.sent();
                        if (requestStatus === this.diagnostic.permissionStatus.DENIED || requestStatus === this.diagnostic.permissionStatus.NOT_REQUESTED) {
                            return [2 /*return*/, false];
                        }
                        else {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GeoService.prototype.displayLocationRequiredAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translate.get('msg.location_service_required').toPromise()];
                    case 1:
                        msg = _a.sent();
                        return [2 /*return*/, this.dialog.alert(msg)];
                }
            });
        });
    };
    GeoService.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var deg2rad = function (deg) {
            return deg * (Math.PI / 180);
        };
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // distance in km
        console.log("[getDistanceFromLatLonInKm]: distance: ", d);
        return d;
    };
    GeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_3__util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__["a" /* LocationAccuracy */]])
    ], GeoService);
    return GeoService;
}());

//# sourceMappingURL=geo.service.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
/* unused harmony export SalutationEnum */
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());

var SalutationEnum = /** @class */ (function () {
    function SalutationEnum() {
    }
    SalutationEnum.Mr = 'Mr.';
    return SalutationEnum;
}());

//# sourceMappingURL=customer.model.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicle; });
/* unused harmony export VehicleStatusEnum */
/* unused harmony export VehicleDrivingStatusEnum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_model__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_model__ = __webpack_require__(178);


var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.pairedDevice = new __WEBPACK_IMPORTED_MODULE_1__device_model__["a" /* IvtDevice */]();
        this.location = new __WEBPACK_IMPORTED_MODULE_0__location_model__["a" /* GPSLocation */]();
    }
    Vehicle.prototype.isActive = function () {
        // API always return active Vehicles only
        return !this.isInActive() && !this.isRepairing();
    };
    Vehicle.prototype.isInActive = function () {
        return this.status === VehicleStatusEnum.Inactive;
    };
    Vehicle.prototype.isRepairing = function () {
        return this.status === VehicleStatusEnum.Repair;
    };
    Vehicle.prototype.isDrivingOnRoad = function () {
        return this.drivingStatus === VehicleDrivingStatusEnum.OnRoad;
    };
    Vehicle.prototype.isDrivingStop = function () {
        return this.drivingStatus === VehicleDrivingStatusEnum.Stop;
    };
    return Vehicle;
}());

/**
 * Typescript has limitation for Enum. So we use static field
 */
var VehicleStatusEnum = /** @class */ (function () {
    function VehicleStatusEnum() {
    }
    VehicleStatusEnum.Active = 'Active';
    VehicleStatusEnum.Inactive = 'Inactive';
    VehicleStatusEnum.Repair = 'Repair';
    return VehicleStatusEnum;
}());

var VehicleDrivingStatusEnum = /** @class */ (function () {
    function VehicleDrivingStatusEnum() {
    }
    VehicleDrivingStatusEnum.OnRoad = 'OnRoad';
    VehicleDrivingStatusEnum.Stop = 'Stop';
    return VehicleDrivingStatusEnum;
}());

//# sourceMappingURL=vehicle.model.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvtDevice; });
var IvtDevice = /** @class */ (function () {
    function IvtDevice() {
    }
    return IvtDevice;
}());

//# sourceMappingURL=device.model.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeTab; });
// The page the user lands on after opening the app and without a session
//   export const FirstRunPage = 'TabsPage';
var FirstRunPage = 'LoginPage';
// export const FirstRunPage = 'TutorialPage';
//초기 시작 화면
// The initial root pages for our tabs (remove if not using tabs)
// Moved to TabsPage
// export const Tab1Root = 'ListMasterPage';
// export const Tab2Root = 'ReservationPage';
// export const Tab3Root = 'ReservationListPage';
// export const Tab4Root = 'CsSurveyPage';
// The main page the user will see as they use the app over a long period of responseTime.
// Change this if not using tabs
var MainPage = 'TabsPage';
var HomeTab = 0;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_userInfo_model__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http, config, injector) {
        return _super.call(this, http, '', __WEBPACK_IMPORTED_MODULE_3__models_userInfo_model__["a" /* UserInfoModel */], config, injector) || this;
    }
    UserService.prototype.signup = function (accountInfo) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.SignUp;
        return _super.prototype.search.call(this, accountInfo);
    };
    UserService.prototype.getAllLocalizationsForApp = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetAllLocalizationsForApp;
        return _super.prototype.search.call(this, {});
    };
    UserService.prototype.getAllPermissionsForApp = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetAllPermissionsForApp;
        return _super.prototype.search.call(this, {});
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__["a" /* UIAwareHttpService */]));

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_setting_model__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingService = /** @class */ (function (_super) {
    __extends(SettingService, _super);
    function SettingService(http, config, injector) {
        var _this = _super.call(this, http, '', __WEBPACK_IMPORTED_MODULE_1__models_setting_model__["a" /* Setting */], config, injector) || this;
        _this.KEY = 'user_setting';
        _this._settings = [];
        _this._settings = (JSON.parse(localStorage.getItem(_this.KEY)) || []);
        console.log('settings:', _this._settings);
        return _this;
    }
    SettingService.prototype.clear = function () {
        this._settings = [];
    };
    SettingService.prototype.search = function () {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(this._settings);
    };
    SettingService.prototype.save = function (item) {
        var filterList = this._settings.filter(function (_item) { return _item.name === item.name; });
        if (filterList.length == 0) {
            var setting = new __WEBPACK_IMPORTED_MODULE_1__models_setting_model__["a" /* Setting */]();
            setting.name = item.name;
            setting.value = item.value;
            this._settings.push(setting);
        }
        else {
            filterList.forEach(function (_item) {
                _item.value = item.value;
            });
        }
        localStorage.setItem(this.KEY, JSON.stringify(this._settings));
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(item);
    };
    SettingService.prototype.saveAll = function (items) {
        var _this = this;
        items.forEach(function (_item) {
            _this.save(_item);
        });
        localStorage.setItem(this.KEY, JSON.stringify(this._settings));
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(items);
    };
    SettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], SettingService);
    return SettingService;
}(__WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__["a" /* UIAwareHttpService */]));

//# sourceMappingURL=setting.service.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageTypeEnum; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_model__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Mark = /** @class */ (function () {
    function Mark() {
    }
    /**
     *
     * @param area
     * calculate display-position based on position and @area
     */
    Mark.prototype.getDisplayPosition = function (area) {
        // TODO
        return new __WEBPACK_IMPORTED_MODULE_1__position_model__["a" /* AxisPosition */]();
    };
    /**
     *
     * @param displayPosition
     * @param area
     * Update position based on @displayPosition and @are
     */
    Mark.prototype.updatePosition = function (displayPosition, area) {
        // TODO
        var updatedPos = new __WEBPACK_IMPORTED_MODULE_1__position_model__["a" /* AxisPosition */]();
        this.position = updatedPos;
        return this.position;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_class_transformer__["Expose"])({ name: "damageTypeEnum" }),
        __metadata("design:type", String)
    ], Mark.prototype, "damageType", void 0);
    return Mark;
}());

var DamageTypeEnum = /** @class */ (function () {
    function DamageTypeEnum() {
    }
    DamageTypeEnum.Check = 'Check';
    return DamageTypeEnum;
}());

//# sourceMappingURL=mark.model.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleHealthCheckModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VhcCommentPhotosModel; });
var VehicleHealthCheckModel = /** @class */ (function () {
    function VehicleHealthCheckModel() {
        this.vhcCommentPhotos = [];
    }
    return VehicleHealthCheckModel;
}());

var VhcCommentPhotosModel = /** @class */ (function () {
    function VhcCommentPhotosModel() {
    }
    return VhcCommentPhotosModel;
}());

//# sourceMappingURL=commentAndPhoto.model.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIHttpInjector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
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
 * This class will provide necessary service for @UIAwareHttpService class
 */
var UIHttpInjector = /** @class */ (function () {
    function UIHttpInjector(loadingService, dialog, translateService) {
        this.loadingService = loadingService;
        this.dialog = dialog;
        this.translateService = translateService;
    }
    UIHttpInjector = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], UIHttpInjector);
    return UIHttpInjector;
}());

//# sourceMappingURL=ui.http.injector.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		720,
		34
	],
	"../pages/change-password/change-password.module": [
		721,
		33
	],
	"../pages/change-profile/change-profile.module": [
		722,
		32
	],
	"../pages/content/content.module": [
		723,
		31
	],
	"../pages/cs-survey/cs-survey.module": [
		724,
		30
	],
	"../pages/cs-survey/survey-detail/survey.detail.component.module": [
		725,
		3
	],
	"../pages/developer/developer.module": [
		726,
		29
	],
	"../pages/document/document.module": [
		727,
		6
	],
	"../pages/document/terms-of-service-modal/terms-of-service-modal.module": [
		728,
		28
	],
	"../pages/drive-shooting/drive-shooting.module": [
		729,
		27
	],
	"../pages/item-create/item-create.module": [
		730,
		26
	],
	"../pages/item-detail/item-detail.module": [
		731,
		25
	],
	"../pages/list-master/list-master.module": [
		732,
		0
	],
	"../pages/login/login.module": [
		733,
		36
	],
	"../pages/manual/manual.module": [
		734,
		24
	],
	"../pages/menu/menu.module": [
		736,
		23
	],
	"../pages/reminder/reminder.module": [
		737,
		22
	],
	"../pages/reservation-list/reservation-list.module": [
		738,
		21
	],
	"../pages/reservation/reservation.module": [
		739,
		20
	],
	"../pages/select-language/select-language.module": [
		740,
		19
	],
	"../pages/settings/settings.module": [
		741,
		18
	],
	"../pages/signup/signup.module": [
		742,
		17
	],
	"../pages/stop-timing/stop-timing.module": [
		743,
		16
	],
	"../pages/tabs/tabs.module": [
		744,
		15
	],
	"../pages/test-drive-ready/test-drive-ready.module": [
		745,
		14
	],
	"../pages/test-drive-record/test-drive-record.module": [
		746,
		1
	],
	"../pages/test-drive-result/test-drive-result.module": [
		747,
		2
	],
	"../pages/test-page/test.page.module": [
		748,
		5
	],
	"../pages/tutorial/tutorial.module": [
		749,
		13
	],
	"../pages/vehicle-health-check/history/vhc-history.module": [
		750,
		12
	],
	"../pages/vehicle-health-check/imageModal/image-modal.module": [
		751,
		11
	],
	"../pages/vehicle-health-check/vehicle-health-check.module": [
		752,
		10
	],
	"../pages/vehicle-list/vehicle-list.module": [
		753,
		9
	],
	"../pages/vehicle-registration-takepic-guide/vehicle-registration-takepic-guide.module": [
		754,
		8
	],
	"../pages/vehicle-registration/vehicle-registration.module": [
		755,
		4
	],
	"../pages/welcome/welcome.module": [
		756,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(113);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var reqOpts = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
};
var Api = /** @class */ (function () {
    function Api(http, storeage) {
        this.http = http;
        this.storeage = storeage;
        this.url = 'https://testdrive-stable.waservice.net:9443/api';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body) {
        if (endpoint == 'Account') {
            return this.http.post(endpoint, body, reqOpts);
        }
        /*   const token = "kPX5BBMfpfGqdebIvSLbVBLg205NiFjNoctuEoxN95Or2kiK-Us1vRA4yo0usW2NNKQxKD1BH9eFRivHBsiygtW61Lhdg7f5S9CdL7kISGHmVFuwPqNEphKAnKs-Fbm7A1A8fHJfOGVrKDJWLCWZgS2-xxesFIDwL1JZe72UyWlqUrrRunvM3WMdtawuFkm21fisj0CJFHlBb8GN5qxBk6OMP8xgjsh35Q1leqFQIeaHDQYxUN4OxARtu8RF0gbgPQNtY7NZYVSZzeA7m9RWXGySupK-MDiaBICTx81-OJ4M0iNBrTa_jZQ_B4fiS72ynK8To6uxgXYYbW1yEIYtxIM_4f9tgSf71phzTa1nZATywSV6Kwf9GxkasaXWVdq4xOU_LGl3pF3Lh-mU6pK0Q3V169wNWN89ovE7yWBpKyvlsFcBax4ZD6ef_81Hai3XwW5MZJeHXVDTr-Diauw4yQA7kX9zt7B6IA1WsdEtGSPZZWKRAVV7Ihrdw813T1PXJMAIBfQMqTuTpWssCqCPew";
           reqOpts.headers = reqOpts.headers.append('Authorization','Bearer '+ token)*/
        return this.http.post(endpoint, body); //service에서 토큰값과 헤더값을 자동으로 넣어주므로.
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.today = __WEBPACK_IMPORTED_MODULE_2_moment__().format('MM/DD/YYYY'); //목업 데이터용
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        //실제 아이템 값
        var items = [
            {
                "name": "SONATA (23더 1123)",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": 1,
                "userId": "admin",
                "progress": "In Progress",
                "time": "09 : 30",
                "date": this.today,
                "ApplicationStatusEnum": "",
                "userName": "Lee Jaeho",
                "consultantName": "Woosuk Oh",
                "finishRideTime": __WEBPACK_IMPORTED_MODULE_2_moment__().format('DD/hh'),
                "location": "서울 송파구 마천로 87"
            },
            {
                "name": "TUCSON (52더 3679)",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": 4,
                "userId": "admin",
                "progress": "Upcoming",
                "time": "09 : 30",
                "date": this.today,
                "ApplicationStatusEnum": "Appointment"
            },
            {
                "name": "SANTA FE (66가 7273)",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": 5,
                "userId": "admin",
                "progress": "Complete",
                "time": "09 : 30",
                "date": this.today,
                "ApplicationStatusEnum": ""
            },
            {
                "name": "I30 (32가 7051)",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": 6,
                "time": "09 : 30",
                "progress": "Complete",
                "date": this.today,
                "ApplicationStatusEnum": ""
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": 7,
                "time": "09 : 30",
                "progress": "Upcoming",
                "date": this.today,
                "ApplicationStatusEnum": "Appointment"
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": 6,
                "time": "09 : 30",
                "progress": "In Progress",
                "date": this.today,
                "ApplicationStatusEnum": "NoShow"
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": 4,
                "time": "09 : 30",
                "progress": "Upcoming",
                "date": this.today,
                "ApplicationStatusEnum": "Appointment"
            }
        ];
        //만들어둔 모델에 값 넣는곳.
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        var paramNum = Object.keys(params).length;
        var result;
        // console.log(params.name)
        // if(paramNum == 1){
        return this.items.filter(function (items) {
            if (params.userId == undefined && params.name == undefined) {
                return 1; //전체검색
            }
            else if (!(params.userId == undefined) && params.name == undefined) {
                return items.userId == params.userId; //내예약건만 검색
            }
            else if (params.userId == undefined && !(params.name == undefined)) {
                return items.name.toLowerCase().indexOf(params.name.toLowerCase()) >= 0; //서치바에 입력한 값이 포함된 값 출력
            }
            else if (!(params.userId == undefined) && !(params.name == undefined)) {
                return items.userId == params.userId && items.name.toLowerCase().indexOf(params.name.toLowerCase()) >= 0;
                // 서치바 입력값 + 내예약건만 검색
            }
            return null;
        });
        // }else if(paramNum == 2){
        //
        // }
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpAbstractService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServerModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_aware_http_service__ = __webpack_require__(63);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * This class extends @UIAwareHttpService
 * Use this as base class if you want to convert between Client model and Server model
 *
 * @T: Client Model
 * @S: Server Model
 *
 */
var HttpAbstractService = /** @class */ (function (_super) {
    __extends(HttpAbstractService, _super);
    function HttpAbstractService(http, config, url, ClassT, ClassV, injector) {
        var _this = _super.call(this, http, url, ClassT, config, injector) || this;
        _this.ClassV = ClassV;
        return _this;
    }
    HttpAbstractService.prototype.save = function (t, hiddenLoading) {
        var vInstance = new this.ClassV();
        vInstance.fromClientModel(t);
        vInstance = this.transformEntity(vInstance, t);
        return _super.prototype.save.call(this, vInstance);
    };
    /**
     *
     * @param tList
     * @param associatedID
     * Save a list of entities to server.
     * You should overwrite transformRequestBody() if you want to customize request payload otherwise only list of entities are submitted
     */
    HttpAbstractService.prototype.saveAll = function (tList, associatedID, hiddenLoading) {
        var _this = this;
        var promise = this.showLoading(hiddenLoading);
        var vList = tList.map(function (_t) {
            var vInstance = new _this.ClassV();
            vInstance.fromClientModel(_t);
            vInstance = _this.transformEntity(vInstance, _t);
            return vInstance;
        });
        var payload = this.transformRequestBody(vList, associatedID);
        return this.httpClient.post(this.url, payload)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return _this.extractData(res); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (err) {
            console.error(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["finalize"])(function () {
            _this.hideLoading(promise);
        }));
    };
    /**
     * To process more with V instance before requesting API.
     */
    HttpAbstractService.prototype.transformEntity = function (serverModel, clientModel) {
        return serverModel;
    };
    /**
     *
     * @param entityOrEntities
     * @param associatedID
     * To transform request body before requesting API
     */
    HttpAbstractService.prototype.transformRequestBody = function (entityOrEntities, associatedID) {
        return entityOrEntities;
    };
    HttpAbstractService.prototype.extractData = function (res) {
        var response = (res);
        var results;
        if (response.code === __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["a" /* APICode */].Success) {
            if (response.data instanceof Array) {
                results = Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(this.ClassV, response.data);
                if (results) {
                    results = results.map(function (_serverModel) {
                        return _serverModel.toClientModel();
                    });
                }
            }
            else {
                results = Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["plainToClass"])(this.ClassV, response.data);
                if (results) {
                    results = results.toClientModel();
                }
            }
        }
        else {
            results = _super.prototype.extractData.call(this, res);
        }
        return results;
    };
    return HttpAbstractService;
}(__WEBPACK_IMPORTED_MODULE_4__ui_aware_http_service__["a" /* UIAwareHttpService */]));

var ServerModel = /** @class */ (function () {
    function ServerModel() {
    }
    ServerModel.prototype.toClientModel = function () {
        throw new Error("Method not implemented.");
    };
    ServerModel.prototype.fromClientModel = function (t) {
        throw new Error("Method not implemented.");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Exclude"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ServerModel.prototype, "toClientModel", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_class_transformer__["Exclude"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ServerModel.prototype, "fromClientModel", null);
    return ServerModel;
}());

//# sourceMappingURL=http.abstract.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleItems = /** @class */ (function () {
    function VehicleItems() {
        this.items = [];
        this.today = __WEBPACK_IMPORTED_MODULE_1_moment__().format('MM/DD/YYYY'); //목업 데이터용
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        //실제 아이템 값
        // this.items = [{
        //   "id": 9,
        //   "tenantId": 1,
        //   "tenantName": "LEE JAEHO",
        //   "vehicleTypeDisplayName": "Avante",
        //   "trimDisplayName": "Limited",
        //   "licensePlateNo": "55나 3421",
        //   "pairedDeviceId": "324234-2342-4234234-2342",
        //   "pairedDeviceDisplayName": "Avante(55나 4567)",
        //   "vehicleFrontSidePictureId": "234234-234324-2424-423",
        //   "vehicleSidePictureId": "234234-234-234324234-234-234",
        //   "vehicleStatusEnum": "Active",
        //   "vehicleDrivingStatusEnum": "On the Road",
        //   "initialMileage": 1000,
        //   "drivenMileage": 0,
        //   "drivenDurationInSec": 0,
        //   "assignmentCount": 0,
        //   "currentLatitude": 33.13,
        //   "currentLongitude": 34.12,
        //   "currentFullAddress": "대한민국 서울시 강서구 염창동",
        //   "vehicleDisplayName": "Avante(55나 4567), 2017, Limited",
        //   "creationTime": "2018-05-09 12:00:00"},
        //   {
        //     "id": 10,
        //     "tenantId": 1,
        //     "tenantName": "",
        //     "vehicleTypeSegmentId": 1,
        //     "modelYearSegmentId": 2,
        //     "trimSegmentId": 3,
        //     "vehicleTypeDisplayName": "Avante",
        //     "modelYearDisplayName": "2017",
        //     "trimDisplayName": "Limited",
        //     "licensePlateNo": "55나 3421",
        //     "pairedDeviceId": "324234-2342-4234234-2342",
        //     "pairedDeviceDisplayName": "Avante(55나 9999)",
        //     "vehicleFrontSidePictureId": "234234-234324-2424-423",
        //     "vehicleSidePictureId": "234234-234-234324234-234-234",
        //     "vehicleStatusEnum": "Active",
        //     "vehicleDrivingStatusEnum": "Waiting",
        //     "initialMileage": 1000,
        //     "drivenMileage": 0,
        //     "drivenDurationInSec": 0,
        //     "assignmentCount": 0,
        //     "currentLatitude": 33.13,
        //     "currentLongitude": 34.12,
        //     "currentFullAddress": "대한민국 서울시 강서구 염창동",
        //     "vehicleDisplayName": "Avante(55나 9999), 2017, Limited",
        //     "creationTime": "2018-05-09 12:00:00"},
        //     {
        //       "id": 11,
        //       "tenantId": 1,
        //       "tenantName": "",
        //       "vehicleTypeSegmentId": 1,
        //       "modelYearSegmentId": 2,
        //       "trimSegmentId": 3,
        //       "vehicleTypeDisplayName": "Avante",
        //       "modelYearDisplayName": "2017",
        //       "trimDisplayName": "Limited",
        //       "licensePlateNo": "55나 3421",
        //       "pairedDeviceId": "324234-2342-4234234-2342",
        //       "pairedDeviceDisplayName": "Avante(55나 8888)",
        //       "vehicleFrontSidePictureId": "234234-234324-2424-423",
        //       "vehicleSidePictureId": "234234-234-234324234-234-234",
        //       "vehicleStatusEnum": "Repair",
        //       "vehicleDrivingStatusEnum": "",
        //       "initialMileage": 1000,
        //       "drivenMileage": 0,
        //       "drivenDurationInSec": 0,
        //       "assignmentCount": 0,
        //       "currentLatitude": 33.13,
        //       "currentLongitude": 34.12,
        //       "currentFullAddress": "대한민국 서울시 강서구 염창동",
        //       "vehicleDisplayName": "Avante(55나 8888), 2017, Limited",
        //       "creationTime": "2018-05-09 12:00:00"}
        // ];
    }
    VehicleItems.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (items) {
            if (params.userId == undefined && params.name == undefined) {
                return 1; //전체검색
            }
            return null;
        });
    };
    VehicleItems.prototype.add = function (item) {
        this.items.push(item);
    };
    VehicleItems.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    VehicleItems = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], VehicleItems);
    return VehicleItems;
}());

//# sourceMappingURL=vehicleItems.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpClientConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APITestDriveResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpClientConfig = /** @class */ (function (_super) {
    __extends(HttpClientConfig, _super);
    function HttpClientConfig(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.DO_NOT_TRANSFORM = null;
        return _this;
    }
    HttpClientConfig.prototype.getAuthorizationHeader = function () {
        if (this.service.isAuthenticated()) {
            return 'Bearer ' + this.service.getUser().token;
        }
        else {
            return '';
        }
    };
    HttpClientConfig.prototype.transformResponseBody = function (response) {
        if (response.url) {
            for (var apiName in __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].api) {
                // url may have params, so checking indexOf
                if (response.url.indexOf(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].api[apiName]) > -1) {
                    var testDriveResponse = void 0;
                    if (response instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                        testDriveResponse = response.error;
                    }
                    else {
                        testDriveResponse = response.body;
                    }
                    return this.convertToAPIResponse(testDriveResponse);
                }
            }
        }
        return this.DO_NOT_TRANSFORM;
    };
    HttpClientConfig.prototype.convertToAPIResponse = function (testDriveResponse) {
        try {
            var apiResponse = new __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["b" /* APIResponse */]();
            if (testDriveResponse.result && testDriveResponse.result.items) {
                apiResponse.data = testDriveResponse.result.items;
            }
            else {
                apiResponse.data = testDriveResponse.result;
            }
            if (testDriveResponse.success === true) {
                apiResponse.code = __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["a" /* APICode */].Success;
            }
            else {
                apiResponse.code = testDriveResponse.error.code;
                apiResponse.message = testDriveResponse.error.message;
                if (testDriveResponse.error.details) {
                    apiResponse.message = testDriveResponse.error.details;
                }
                // if (testDriveResponse.error.validationErrors) {
                //     apiResponse.message = testDriveResponse.error.validationErrors;
                // }
            }
            return apiResponse;
        }
        catch (exception) {
            console.info('[HttpClientConfig] transformResponse(): Cannot cast to APITestDriveResponse');
            return this.DO_NOT_TRANSFORM;
        }
    };
    HttpClientConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ivt_security__["d" /* IvtSecurityService */]])
    ], HttpClientConfig);
    return HttpClientConfig;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */]));

var APITestDriveResponse = /** @class */ (function () {
    function APITestDriveResponse() {
    }
    return APITestDriveResponse;
}());

//# sourceMappingURL=http.client.config.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GPSLocation; });
var GPSLocation = /** @class */ (function () {
    function GPSLocation() {
    }
    return GPSLocation;
}());

//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VehicleTypeSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelYearSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TrimSegment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__segment_model__ = __webpack_require__(650);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var VehicleTypeSegment = /** @class */ (function (_super) {
    __extends(VehicleTypeSegment, _super);
    function VehicleTypeSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleTypeSegment.prototype.getType = function () {
        return 'Vehicle';
    };
    return VehicleTypeSegment;
}(__WEBPACK_IMPORTED_MODULE_0__segment_model__["a" /* Segment */]));

var ModelYearSegment = /** @class */ (function (_super) {
    __extends(ModelYearSegment, _super);
    function ModelYearSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelYearSegment.prototype.getType = function () {
        return 'ModelYear';
    };
    return ModelYearSegment;
}(__WEBPACK_IMPORTED_MODULE_0__segment_model__["a" /* Segment */]));

var TrimSegment = /** @class */ (function (_super) {
    __extends(TrimSegment, _super);
    function TrimSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrimSegment.prototype.getType = function () {
        return 'Trim';
    };
    return TrimSegment;
}(__WEBPACK_IMPORTED_MODULE_0__segment_model__["a" /* Segment */]));

//# sourceMappingURL=vehicle.segment.model.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyResponse; });
var SurveyQuestion = /** @class */ (function () {
    function SurveyQuestion() {
    }
    return SurveyQuestion;
}());

var SurveyResponse = /** @class */ (function () {
    function SurveyResponse() {
    }
    return SurveyResponse;
}());

//# sourceMappingURL=survey.model.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoModel; });
/* unused harmony export TenantInfo */
/* unused harmony export UserInfoServerModel */
/* unused harmony export TenantServer */
/* unused harmony export UserServer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_security__ = __webpack_require__(37);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserInfoModel = /** @class */ (function (_super) {
    __extends(UserInfoModel, _super);
    function UserInfoModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserInfoModel;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_security__["g" /* User */]));

var TenantInfo = /** @class */ (function (_super) {
    __extends(TenantInfo, _super);
    function TenantInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TenantInfo;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_security__["f" /* Tenant */]));

var UserInfoServerModel = /** @class */ (function () {
    function UserInfoServerModel() {
    }
    return UserInfoServerModel;
}());

var TenantServer = /** @class */ (function () {
    function TenantServer() {
    }
    return TenantServer;
}());

var UserServer = /** @class */ (function () {
    function UserServer() {
    }
    return UserServer;
}());

//# sourceMappingURL=userInfo.model.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingService; });
/* unused harmony export AppSettingModelServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_config_app_setting_model__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppSettingService = /** @class */ (function (_super) {
    __extends(AppSettingService, _super);
    function AppSettingService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_5__models_config_app_setting_model__["a" /* AppSettingModel */], AppSettingModelServerModel, injector) || this;
    }
    AppSettingService.prototype.search = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetAllSettingsForApp;
        return _super.prototype.search.call(this);
    };
    AppSettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], AppSettingService);
    return AppSettingService;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["a" /* HttpAbstractService */]));

var AppSettingModelServerModel = /** @class */ (function (_super) {
    __extends(AppSettingModelServerModel, _super);
    function AppSettingModelServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppSettingModelServerModel.prototype.toClientModel = function () {
        var appSettingModel = new __WEBPACK_IMPORTED_MODULE_5__models_config_app_setting_model__["a" /* AppSettingModel */]();
        appSettingModel.general = this.general;
        appSettingModel.security = this.security;
        appSettingModel.smartTestDriveSetting = this.smartTestDriveSettings;
        return appSettingModel;
    };
    return AppSettingModelServerModel;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=app.setting.service.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_config_local_setting_model__ = __webpack_require__(59);
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
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
        this.splashTitle = __WEBPACK_IMPORTED_MODULE_3__models_config_local_setting_model__["a" /* LocalSettingModel */].splashTitle;
    }
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 2000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/splash/splash.html"*/'<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1>{{ \'splash.hyundai\' | translate }}<br>{{ \'splash.driving_experience\' | translate }}</h1>\n        <h2>{{ \'splash.smart_test_drive\' | translate }}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>{{ splashTitle }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>{{ \'APP_VERSION\' | translate }}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n<!--   \n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n    <defs>\n      <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n    </defs>\n    <title>jmlogo</title>\n    <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n    <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n    <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n    <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n    <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n    <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n  </svg> \n-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateVersionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version_service__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_version_model__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(91);
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







var UpdateVersionService = /** @class */ (function () {
    function UpdateVersionService(translate, appVersion, versionService, alertCtrl, diagnostic, platfrom, loadingCtrl) {
        this.translate = translate;
        this.appVersion = appVersion;
        this.versionService = versionService;
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.platfrom = platfrom;
        this.loadingCtrl = loadingCtrl;
        this.versionInfo = {
            version: null,
            name: null,
            url: null
        };
        this.forceToUpdate = true;
    }
    UpdateVersionService.prototype.updateAppAndroid = function (versionInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var requestPermission, checkPermission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.WRITE_EXTERNAL_STORAGE)];
                    case 1:
                        requestPermission = _a.sent();
                        console.log(requestPermission);
                        if (!(requestPermission == this.diagnostic.permissionStatus.DENIED)) return [3 /*break*/, 2];
                        this.showAlertInfo();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(requestPermission == this.diagnostic.permissionStatus.NOT_REQUESTED)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.diagnostic.requestRuntimePermission(this.diagnostic.permission.WRITE_EXTERNAL_STORAGE)];
                    case 3:
                        checkPermission = _a.sent();
                        console.log(checkPermission);
                        if (checkPermission.WRITE_EXTERNAL_STORAGE == this.diagnostic.permissionStatus.GRANTED || this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE) {
                            this.processUpdate(versionInfo);
                        }
                        else {
                            this.showAlertInfo();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        console.log(requestPermission);
                        this.processUpdate(versionInfo);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UpdateVersionService.prototype.processUpdate = function (versionInfo) {
        window.AppUpdate.checkAppUpdate(function (onSuccess) { }, function (onFail) { }, versionInfo, {
            'skipPromptDialog': true
        });
        var confirm = this.alertCtrl.create({
            message: this.translate.instant('msg.app_is_downloading_and_updating'),
            enableBackdropDismiss: false,
            buttons: []
        }).present();
    };
    UpdateVersionService.prototype.showAlertInfo = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: this.translate.instant('msg.to_continue_using_app_you_must_allow_app_to_access_photos_media_and_files_on_your_device'),
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: this.okString,
                    handler: function () {
                        _this.platfrom.exitApp();
                    }
                }
            ]
        });
        confirm.present();
    };
    UpdateVersionService.prototype.updateVersionAndroid = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, _a, _b, _c, _d, versionModel;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.translate.get('OK_BUTTON').subscribe(function (value) {
                            _this.okString = value;
                        });
                        this.translate.get('msg.later').subscribe(function (value) {
                            _this.laterString = value;
                        });
                        this.translate.get('YES_BUTTON').subscribe(function (value) {
                            _this.yesString = value;
                        });
                        this.translate.get('msg.confirm_update').subscribe(function (value) {
                            _this.confirmString = value;
                        });
                        this.translate.get('msg.force_update_later').subscribe(function (value) {
                            _this.forceUpdateLater = value;
                        });
                        this.translate.get('msg.force_update_now').subscribe(function (value) {
                            _this.forceUpdateNow = value;
                        });
                        this.translate.get('msg.checkversion').subscribe(function (value) {
                            _this.checkVersion = value;
                        });
                        loading = this.loadingCtrl.create({
                            content: this.checkVersion
                        });
                        loading.present();
                        _a = this;
                        return [4 /*yield*/, this.appVersion.getPackageName()];
                    case 1:
                        _a.packageName = _e.sent();
                        _b = this;
                        return [4 /*yield*/, this.appVersion.getVersionNumber()];
                    case 2:
                        _b.VersionName = _e.sent();
                        _c = this;
                        return [4 /*yield*/, this.appVersion.getVersionCode()];
                    case 3:
                        _c.versionCode = _e.sent();
                        _d = this;
                        return [4 /*yield*/, this.appVersion.getAppName()];
                    case 4:
                        _d.appName = _e.sent();
                        versionModel = new __WEBPACK_IMPORTED_MODULE_3__models_version_model__["a" /* VersionModel */];
                        versionModel.appIdentifier = this.packageName;
                        versionModel.currentVersionName = this.VersionName;
                        this.versionService.search(versionModel).subscribe(function (res) {
                            // console.log(res);
                            loading.dismiss();
                            var data = res;
                            if (data.latestVersionName != _this.VersionName) {
                                _this.versionInfo.url = data.storeUrl;
                                _this.versionInfo.version = _this.versionCode + 1;
                                _this.versionInfo.name = _this.appName;
                                if (data.forceToUpdate == true) {
                                    var confirm_1 = _this.alertCtrl.create({
                                        title: _this.confirmString,
                                        message: _this.forceUpdateNow,
                                        enableBackdropDismiss: false,
                                        buttons: [
                                            {
                                                text: _this.okString,
                                                handler: function () {
                                                    _this.updateAppAndroid(_this.versionInfo);
                                                }
                                            }
                                        ]
                                    });
                                    confirm_1.present();
                                }
                                else {
                                    var confirm_2 = _this.alertCtrl.create({
                                        title: _this.confirmString,
                                        enableBackdropDismiss: false,
                                        message: _this.forceUpdateLater,
                                        buttons: [
                                            {
                                                text: _this.yesString,
                                                handler: function () {
                                                    _this.updateAppAndroid(_this.versionInfo);
                                                }
                                            },
                                            {
                                                text: _this.laterString,
                                                handler: function () {
                                                }
                                            }
                                        ]
                                    });
                                    confirm_2.present();
                                }
                            }
                        }, function (error) {
                            console.log(error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateVersionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_1__version_service__["a" /* VersionService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
    ], UpdateVersionService);
    return UpdateVersionService;
}());

//# sourceMappingURL=update.version.service.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionService; });
/* unused harmony export VersionResponseServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_version_model__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VersionService = /** @class */ (function (_super) {
    __extends(VersionService, _super);
    function VersionService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_5__models_version_model__["b" /* VersionResponseModel */], VersionResponseServerModel, injector) || this;
    }
    VersionService.prototype.search = function (versionModel) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.CheckVersionForUpdates;
        return _super.prototype.search.call(this, versionModel);
    };
    VersionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["c" /* IvtHttpClientConfig */], __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], VersionService);
    return VersionService;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["a" /* HttpAbstractService */]));

var VersionResponseServerModel = /** @class */ (function (_super) {
    __extends(VersionResponseServerModel, _super);
    function VersionResponseServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VersionResponseServerModel.prototype.toClientModel = function () {
        var versionResponseModel = new __WEBPACK_IMPORTED_MODULE_5__models_version_model__["b" /* VersionResponseModel */]();
        versionResponseModel.forceToUpdate = this.forceToUpdate;
        versionResponseModel.latestVersionName = this.latestVersionName;
        versionResponseModel.storeUrl = this.storeUrl;
        return versionResponseModel;
    };
    return VersionResponseServerModel;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=version.service.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VersionResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionModel; });
var VersionResponseModel = /** @class */ (function () {
    function VersionResponseModel() {
    }
    return VersionResponseModel;
}());

var VersionModel = /** @class */ (function () {
    function VersionModel() {
    }
    return VersionModel;
}());

//# sourceMappingURL=version.model.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_crop__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CameraService = /** @class */ (function () {
    function CameraService(camera, crop, fileSvc, utils) {
        this.camera = camera;
        this.crop = crop;
        this.fileSvc = fileSvc;
        this.utils = utils;
        this.MaxTargetWidth = 640; // maximum size is 300KB. don't change, to keep image size small
        this.MaxTargetHeight = 640; // don't change, to keep image size small
        this.options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
    }
    /**
     *
     * @param width expected resulting image width
     * @param height expected resulting image height
     * @param squareCrop use crop square area or not. Default crop with ratio 16:9
     */
    CameraService.prototype.getPicture = function (width, height, squareCrop) {
        var _this = this;
        return this.camera.getPicture(this.options).then(function (data) {
            if (_this.utils.isAndroid()) {
                data = 'file://' + data;
            }
            var opt = {
                quality: 100,
                heightRatio: 9,
                widthRatio: 16,
                targetWidth: width || _this.MaxTargetWidth,
                targetHeight: height || _this.MaxTargetHeight
            };
            if (squareCrop) {
                opt.heightRatio = 1;
                opt.widthRatio = 1;
            }
            /*
                NOTE: when npm install on new environment, please add widthRatio: number; and heightRatio: number;
                to interface CropOptions in node_modules@ionic-native\crop\index.d.ts
            */
            return _this.crop.crop(data, opt).then(function (cropImg) {
                return _this.fileSvc.readFileWithoutPath(cropImg).then(function (base64) {
                    if (_this.utils.isIOS()) {
                        _this.camera.cleanup();
                    }
                    return base64;
                }, function (error) {
                    if (_this.utils.isIOS()) {
                        _this.camera.cleanup();
                    }
                    return Promise.reject(error);
                });
            });
        }, function (err) {
            return Promise.reject(err);
        });
    };
    CameraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_2__file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_4__util_service__["a" /* Utils */]])
    ], CameraService);
    return CameraService;
}());

//# sourceMappingURL=camera.service.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picture; });
var Picture = /** @class */ (function () {
    function Picture() {
    }
    return Picture;
}());

//# sourceMappingURL=picture.model.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
/* unused harmony export VehicleServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_vehicle_vehicle_model__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_vehicle_vehicle_segment_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_class_transformer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_consultant_model__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_customer_model__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_picture_model__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_location_model__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_device_model__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var VehicleService = /** @class */ (function (_super) {
    __extends(VehicleService, _super);
    function VehicleService(http, config, utils, injector) {
        var _this = _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_4__models_vehicle_vehicle_model__["a" /* Vehicle */], VehicleServerModel, injector) || this;
        _this.utils = utils;
        return _this;
    }
    VehicleService.prototype.search = function (includeRepair) {
        if (includeRepair === void 0) { includeRepair = false; }
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.GetVehiclesForApp;
        return _super.prototype.search.call(this, { includeVehiclesUnderRepair: includeRepair });
    };
    VehicleService.prototype.get = function (id) {
        return this.search().map(function (_list) {
            var vehicle = _list.find(function (_item) {
                return _item.id === id;
            });
            return vehicle;
        });
    };
    VehicleService.prototype.save = function (vehicle) {
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.CreateVehicleForApp;
        return _super.prototype.save.call(this, vehicle);
    };
    VehicleService.prototype.transformEntity = function (serverModel, vehicle) {
        if (this.utils.isAndroid()) {
            serverModel.setPairedDeviceIdOnAndroid(vehicle.pairedDevice.id);
        }
        else if (this.utils.isIOS()) {
            serverModel.setPairedDeviceIdOniOS(vehicle.pairedDevice.id);
        }
        return serverModel;
    };
    VehicleService.prototype.searchForHomePage = function (hiddenLoading) {
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.GetVehiclesWithApplicationForApp;
        return _super.prototype.search.call(this, { todayDateLocal: __WEBPACK_IMPORTED_MODULE_14_moment___default()().locale(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].moment.locale).format(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].date.YYYYMMDD) }, hiddenLoading);
    };
    VehicleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_5__util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_16__ui_http_injector__["a" /* UIHttpInjector */]])
    ], VehicleService);
    return VehicleService;
}(__WEBPACK_IMPORTED_MODULE_9__http_abstract_service__["a" /* HttpAbstractService */]));

var VehicleServerModel = /** @class */ (function (_super) {
    __extends(VehicleServerModel, _super);
    function VehicleServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleServerModel.prototype.fromClientModel = function (vehicle) {
        this.id = vehicle.id;
        this.vehicleDisplayName = vehicle.displayName;
        this.vehicleTypeSegmentId = vehicle.vehicleType ? vehicle.vehicleType.id : null;
        this.modelYearSegmentId = vehicle.modelYear ? vehicle.modelYear.id : null;
        this.trimSegmentId = vehicle.trim ? vehicle.trim.id : null;
        this.vehicleTypeDisplayName = vehicle.vehicleType ? vehicle.vehicleType.name : null;
        this.modelYearDisplayName = vehicle.modelYear ? vehicle.modelYear.name : null;
        this.trimDisplayName = vehicle.trim ? vehicle.trim.name : null;
        this.licensePlateNo = vehicle.plateNo;
        this.pairedDeviceDisplayName = vehicle.pairedDevice.name || vehicle.pairedDevice.address;
        this.vehicleFrontSidePictureId = vehicle.frontPicture ? vehicle.frontPicture.id : null;
        this.vehicleSidePictureId = vehicle.sidePicture ? vehicle.sidePicture.id : null;
        this.initialMileage = vehicle.initialMileage;
        this.vehicleStatusEnum = vehicle.status;
        this.vehicleDrivingStatusEnum = vehicle.drivingStatus;
        this.tenantId = vehicle.tenant ? vehicle.tenant.id : null;
        if (vehicle.customer) {
            this.consultantUserId = vehicle.customer.consultant.id;
            this.consultantUserName = vehicle.customer.consultant.name;
            this.consultantProfilePictureId = vehicle.customer.consultant.pictureID;
            this.customerFullName = vehicle.customer.fullName;
        }
        this.todayReservationCount = vehicle.todayReservationCount;
        this.drivenDurationInSec = vehicle.drivenDurationInSec;
        this.drivenMileage = vehicle.drivenMileage;
        if (vehicle.location) {
            this.currentFullAddress = vehicle.location.address;
        }
    };
    VehicleServerModel.prototype.setPairedDeviceIdOnAndroid = function (pairedDeviceId) {
        this.pairedDeviceIdOnAndroid = pairedDeviceId;
    };
    VehicleServerModel.prototype.setPairedDeviceIdOniOS = function (pairedDeviceId) {
        this.pairedDeviceIdOniOS = pairedDeviceId;
    };
    VehicleServerModel.prototype.toClientModel = function () {
        var vehicle = new __WEBPACK_IMPORTED_MODULE_4__models_vehicle_vehicle_model__["a" /* Vehicle */]();
        vehicle.id = this.id;
        vehicle.displayName = this.vehicleDisplayName;
        var vehicleTypeSegment = new __WEBPACK_IMPORTED_MODULE_6__models_vehicle_vehicle_segment_model__["c" /* VehicleTypeSegment */]();
        vehicleTypeSegment.id = this.vehicleTypeSegmentId;
        vehicleTypeSegment.name = this.vehicleTypeDisplayName;
        vehicle.vehicleType = vehicleTypeSegment;
        var trimSegment = new __WEBPACK_IMPORTED_MODULE_6__models_vehicle_vehicle_segment_model__["b" /* TrimSegment */]();
        trimSegment.id = this.trimSegmentId;
        trimSegment.name = this.trimDisplayName;
        vehicle.trim = trimSegment;
        var modelYearSegment = new __WEBPACK_IMPORTED_MODULE_6__models_vehicle_vehicle_segment_model__["a" /* ModelYearSegment */]();
        modelYearSegment.id = this.modelYearSegmentId;
        modelYearSegment.name = this.modelYearDisplayName;
        modelYearSegment.parent = vehicleTypeSegment;
        vehicle.modelYear = modelYearSegment;
        vehicle.plateNo = this.licensePlateNo;
        var frontPicture = new __WEBPACK_IMPORTED_MODULE_12__models_picture_model__["a" /* Picture */]();
        frontPicture.id = this.vehicleFrontSidePictureId;
        vehicle.frontPicture = frontPicture;
        var sidePicture = new __WEBPACK_IMPORTED_MODULE_12__models_picture_model__["a" /* Picture */]();
        sidePicture.id = this.vehicleSidePictureId;
        vehicle.sidePicture = sidePicture;
        vehicle.initialMileage = this.initialMileage;
        var pairedDevice = new __WEBPACK_IMPORTED_MODULE_15__models_device_model__["a" /* IvtDevice */]();
        pairedDevice.id = this.pairedDeviceIdOnAndroid || this.pairedDeviceIdOniOS;
        pairedDevice.name = this.pairedDeviceDisplayName;
        vehicle.pairedDevice = pairedDevice;
        vehicle.status = this.vehicleStatusEnum;
        vehicle.drivingStatus = this.vehicleDrivingStatusEnum;
        var tenant = new __WEBPACK_IMPORTED_MODULE_8__ivt_security__["f" /* Tenant */]();
        tenant.id = this.tenantId;
        vehicle.tenant = tenant;
        var consultant = new __WEBPACK_IMPORTED_MODULE_10__models_consultant_model__["a" /* Consultant */]();
        consultant.id = this.consultantUserId;
        consultant.name = this.consultantUserName;
        consultant.pictureID = this.consultantProfilePictureId;
        var customer = new __WEBPACK_IMPORTED_MODULE_11__models_customer_model__["a" /* Customer */]();
        customer.fullName = this.customerFullName;
        customer.consultant = consultant;
        vehicle.customer = customer;
        vehicle.todayReservationCount = this.todayReservationCount;
        vehicle.drivenDurationInSec = this.drivenDurationInSec;
        vehicle.drivenMileage = this.drivenMileage;
        if (this.currentFullAddress) {
            var location_1 = new __WEBPACK_IMPORTED_MODULE_13__models_location_model__["a" /* GPSLocation */]();
            location_1.address = this.currentFullAddress;
            vehicle.location = location_1;
        }
        return vehicle;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7_class_transformer__["Exclude"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], VehicleServerModel.prototype, "setPairedDeviceIdOnAndroid", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7_class_transformer__["Exclude"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], VehicleServerModel.prototype, "setPairedDeviceIdOniOS", null);
    return VehicleServerModel;
}(__WEBPACK_IMPORTED_MODULE_9__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=vehicle.service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.updateBeforeVehicleHealthCheck = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.takeOdometerBeforeDrive = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.updateAfterVehicleHealthCheck = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.takeOdometerAfterDrive = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], NotificationService);
    return NotificationService;
}());

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_open_native_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geo_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_bluetooth_serial__ = __webpack_require__(183);
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












var BluetoothService = /** @class */ (function () {
    function BluetoothService(bluetoothLE, platform, dialogService, translate, diagnostic, utils, dialog, openNativeSettings, geoService, bluetoothSerial) {
        this.bluetoothLE = bluetoothLE;
        this.platform = platform;
        this.dialogService = dialogService;
        this.translate = translate;
        this.diagnostic = diagnostic;
        this.utils = utils;
        this.dialog = dialog;
        this.openNativeSettings = openNativeSettings;
        this.geoService = geoService;
        this.bluetoothSerial = bluetoothSerial;
    }
    BluetoothService.prototype.IamReady = function () {
        return this.platform.ready();
    };
    BluetoothService.prototype.isEnabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.IamReady()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.bluetoothSerial.isEnabled()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * return true if enable bluetooth successfully
     */
    BluetoothService.prototype.enable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, msg, isEnabled, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.IamReady()];
                    case 1:
                        _a.sent();
                        if (!this.utils.isAndroid()) return [3 /*break*/, 8];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 7]);
                        return [4 /*yield*/, this.bluetoothSerial.enable()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.prepareScan()];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [4 /*yield*/, this.translate.get('bluetooth.turn_on_bluetooth').toPromise()];
                    case 5:
                        msg = _a.sent();
                        return [4 /*yield*/, this.dialog.alert(msg)];
                    case 6:
                        _a.sent();
                        this.openNativeSettings.open('bluetooth');
                        return [2 /*return*/, false];
                    case 7: return [3 /*break*/, 13];
                    case 8:
                        if (!this.utils.isIOS()) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.isEnabled()];
                    case 9:
                        isEnabled = _a.sent();
                        console.log('[ios] bluetooth enable status: ', isEnabled);
                        if (!!isEnabled) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.translate.get('bluetooth.turn_on_bluetooth').toPromise()];
                    case 10:
                        msg = _a.sent();
                        return [4 /*yield*/, this.dialog.alert(msg)];
                    case 11:
                        _a.sent();
                        this.openNativeSettings.open('bluetooth');
                        return [2 /*return*/, false];
                    case 12: return [2 /*return*/, this.prepareScan()];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    BluetoothService.prototype.prepareScan = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.IamReady()];
                    case 1:
                        _a.sent();
                        // BLE scan require Location data
                        // Serial scan doesn't require Location data
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     *
     */
    BluetoothService.prototype.scan = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"](function (observer) {
            var timeout, subscription;
            var _devices = [];
            var fn = function () {
                subscription = _this.bluetoothLE.scan([], 5).subscribe(function (device) {
                    console.log('[scan] result: ', device);
                    var found = _devices.find(function (_d) { return _d.id == device.id; });
                    if (found) {
                        found.id = device.id;
                        found.name = device.name;
                        found.address = device.address;
                        return null;
                    }
                    else {
                        _devices.push({
                            id: device.id,
                            name: device.name,
                            address: device.address
                        });
                        observer.next(device);
                    }
                }, function (err) { return console.error(err); });
                timeout = setTimeout(function () {
                    fn();
                }, 5000);
            };
            fn();
            return {
                unsubscribe: function () {
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            };
        });
    };
    /**
     * Support Android only. Promise resolve if target device is found.
     * @param macAddress_or_uuid
     *
     */
    BluetoothService.prototype.scanWithDeviceID = function (macAddress_or_uuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.utils.isIOS()) {
                reject();
                return;
            }
            var found = false;
            // let subscription = this.bluetoothSerial.setDeviceDiscoveredListener().subscribe(
            //     (device: IvtDevice) => {
            //         console.log('Scanning found device: ', device);
            //         if (macAddress_or_uuid === device.address || macAddress_or_uuid === device.id) {
            //             console.log('[scanWithDeviceID] found device');
            //             found = true;
            //             if (subscription) {
            //                 subscription.unsubscribe();
            //             }
            //             resolve(device);
            //         }
            //     }
            // )
            // this.bluetoothSerial.discoverUnpaired().then(
            //     (devices: Array<IvtDevice>) => {
            //         if (!found) {
            //             console.log('[scanWithDeviceID] not found device');
            //             reject();
            //         }
            //     }
            // ).catch(
            //     ex => {
            //         console.error('[scanWithDeviceID] err...', ex);
            //         reject();
            //     }
            // )
            _this.bluetoothSerial.list().then(function (devices) {
                for (var i = 0; i < devices.length; i++) {
                    var device = devices[i];
                    if (macAddress_or_uuid === device.address || macAddress_or_uuid === device.id) {
                        found = true;
                        resolve(device);
                    }
                }
                if (!found) {
                    reject();
                }
            }, function (ex) {
                console.error('[scanWithDeviceID] err...', ex);
                reject();
            });
            // // try to scan paired device first
            // this.bluetoothSerial.list().then(
            //     (devices: Array<IvtDevice>) => {
            //         let found = false;
            //         for (let i = 0; i < devices.length; i++) {
            //             if (macAddress_or_uuid === devices[i].address || macAddress_or_uuid === devices[i].id) {
            //                 console.log('[scanWithDeviceID] found device');
            //                 found = true;
            //                 resolve(devices[i]);
            //                 break;
            //             }
            //         }
            //         if (!found) {
            //             throw new Error('Catch me and scan unpaired devices please');
            //         }
            //     }
            // ).catch(
            //     (err) => {
            //         console.error('[scanWithDeviceID] err...', err);
            //         this.bluetoothSerial.discoverUnpaired().then(
            //             (devices: Array<IvtDevice>) => {
            //                 for (let i = 0; i < devices.length; i++) {
            //                     if (macAddress_or_uuid === devices[i].address || macAddress_or_uuid === devices[i].id) {
            //                         resolve(devices[i]);
            //                         break;
            //                     }
            //                 }
            //                 reject();
            //             }
            //         )
            //     }
            // )
        });
    };
    /**
     * You need to subscribe to trigger connect. You cannot use toPrimise()
     * @param macAddress_or_uuid
     */
    BluetoothService.prototype.connect = function (macAddress_or_uuid) {
        return this.bluetoothLE.connect(macAddress_or_uuid).pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["map"])(function (data) {
            console.log('Pair device successfully..', macAddress_or_uuid);
            console.log('Peripheral data..', data);
            return data;
        }), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["catchError"])(function (err) {
            console.error('Pair device failed..', err);
            throw err;
        }));
        ;
    };
    BluetoothService.prototype.disconnect = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bluetoothLE.disconnect(id)];
            });
        });
    };
    BluetoothService.prototype.discoverUnpaired = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // (<any>window).bluetoothClassicSerial.discoverUnpaired(
                //     devices => {
                //         console.log('[bluetoothSerial] devices=', devices);
                //     },
                //     err => console.error('[bluetoothSerial] err =', err)
                // )
                if (this.utils.isAndroid()) {
                    return [2 /*return*/, this.bluetoothSerial.discoverUnpaired()];
                }
                else if (this.utils.isIOS()) {
                    return [2 /*return*/, this.bluetoothSerial.list()];
                }
                return [2 /*return*/];
            });
        });
    };
    BluetoothService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_6__util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_3__dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
            __WEBPACK_IMPORTED_MODULE_10__geo_service__["a" /* GeoService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], BluetoothService);
    return BluetoothService;
}());

//# sourceMappingURL=bluetooth.service.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleOdometerService; });
/* unused harmony export VehicleOdometerServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_VehicleOdometer_model__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VehicleOdometerService = /** @class */ (function (_super) {
    __extends(VehicleOdometerService, _super);
    function VehicleOdometerService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_5__models_VehicleOdometer_model__["a" /* VehicleOdometerModel */], VehicleOdometerServerModel, injector) || this;
    }
    VehicleOdometerService.prototype.save = function (vehicleOdometerModel) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.CreateVehicleOdometerForApp;
        return _super.prototype.save.call(this, vehicleOdometerModel);
    };
    VehicleOdometerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["c" /* IvtHttpClientConfig */], __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], VehicleOdometerService);
    return VehicleOdometerService;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["a" /* HttpAbstractService */]));

var VehicleOdometerServerModel = /** @class */ (function (_super) {
    __extends(VehicleOdometerServerModel, _super);
    function VehicleOdometerServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleOdometerServerModel.prototype.fromClientModel = function (vehicleOdometerResponse) {
        this.applicationId = vehicleOdometerResponse.applicationId;
        this.odometerPictureId = vehicleOdometerResponse.odometerPictureId;
    };
    return VehicleOdometerServerModel;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=vehicle.odometer.service.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrivingRecordService; });
/* unused harmony export DrivingEndRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrivingRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DrivingRecordService = /** @class */ (function (_super) {
    __extends(DrivingRecordService, _super);
    function DrivingRecordService(http, config, injector) {
        return _super.call(this, http, '', DrivingRecord, config, injector) || this;
    }
    DrivingRecordService.prototype.startRecord = function (request) {
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.StartDrivingRecord;
        return this.save(request);
    };
    DrivingRecordService.prototype.continueRecord = function (request) {
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.ContinueDrivingRecord;
        return this.save(request);
    };
    DrivingRecordService.prototype.endRecord = function (request) {
        console.log('endRecord: ', request);
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.EndDrivingRecord;
        return this.save(request);
    };
    DrivingRecordService.prototype.finishRecord = function (request) {
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.FinishDrivingRecord;
        return this.save(request);
    };
    DrivingRecordService.prototype.getFormattedAddress = function (params) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.GetFormattedAddress, params).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) {
            if (res.code === __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["a" /* APICode */].Success) {
                return res.data;
            }
            else {
                console.error(res);
                return '';
            }
        })).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            console.error(err);
            return '';
        }));
    };
    DrivingRecordService.prototype.createDrivingRawRecords = function (params) {
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.CreateDrivingRawRecords;
        return this.save(params, true, false);
    };
    DrivingRecordService.prototype.search = function (criteria) {
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.GetDrivingRecords;
        return _super.prototype.search.call(this, criteria);
    };
    DrivingRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */], __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], DrivingRecordService);
    return DrivingRecordService;
}(__WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__["a" /* UIAwareHttpService */]));

var DrivingEndRequest = /** @class */ (function () {
    function DrivingEndRequest() {
    }
    return DrivingEndRequest;
}());

var DrivingRecord = /** @class */ (function () {
    function DrivingRecord() {
    }
    DrivingRecord.DrivingRecordStatusEnum = {
        Done: 'Done',
        OnRecord: 'OnRecord'
    };
    return DrivingRecord;
}());

//# sourceMappingURL=driving.record.service.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeveloperService = /** @class */ (function () {
    function DeveloperService() {
        this.array = [];
        // this.addLog();
    }
    DeveloperService.prototype.addLog = function () {
        var _this = this;
        // let windowConsole = window.console;
        var windowLog = window.console.log;
        window.console.log = function (text, value) {
            if (text && !value) {
                windowLog(text);
                _this.array.push(text);
            }
            if (value && !text) {
                windowLog(value);
                _this.array.push(value);
            }
            if (text && value) {
                windowLog(text, value);
                _this.array.push(text, value);
            }
            // this.array.push(windowConsole.info);
        };
        var windowError = window.console.error;
        window.console.error = function (text, value) {
            if (text && !value) {
                windowError(text);
                _this.array.push(text);
            }
            if (value && !text) {
                windowError(value);
                _this.array.push(value);
            }
            if (text && value) {
                windowError(text, value);
                _this.array.push(text, value);
            }
        };
    };
    DeveloperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DeveloperService);
    return DeveloperService;
}());

//# sourceMappingURL=developer.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Utils = /** @class */ (function () {
    function Utils(device, platform) {
        this.device = device;
        this.platform = platform;
    }
    Utils.prototype.isIOS = function () {
        return this.device.platform === 'iOS';
    };
    Utils.prototype.isAndroid = function () {
        return this.device.platform === 'Android';
    };
    Utils.prototype.isBrowser = function () {
        return (this.platform.is('core') || this.platform.is('mobileweb'));
    };
    Utils.prototype.dataURIToBlob = function (dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var bb = new Blob([ab]);
        return bb;
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reservation_reservation_model__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_aware_http_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReservationService = /** @class */ (function (_super) {
    __extends(ReservationService, _super);
    function ReservationService(http, config, injector) {
        return _super.call(this, http, '', __WEBPACK_IMPORTED_MODULE_3__models_reservation_reservation_model__["c" /* ReservationModel */], config, injector) || this;
    }
    /**
     *
     * @param searchCriteria {
         appointmentFromDateLocal: "2018-05-09",
         appointmentToDateLocal: "2018-05-09",
     * }
     */
    ReservationService.prototype.getReservationList = function (searchCriteria) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetApplicationsForApp;
        searchCriteria.appointmentFromDateLocal = __WEBPACK_IMPORTED_MODULE_5_moment___default()(searchCriteria.appointmentFromDateLocal).locale(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].moment.locale).format(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].date.YYYYMMDD);
        if (searchCriteria.appointmentToDateLocal) {
            searchCriteria.appointmentToDateLocal = __WEBPACK_IMPORTED_MODULE_5_moment___default()(searchCriteria.appointmentToDateLocal).locale(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].moment.locale).format(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].date.YYYYMMDD);
        }
        return _super.prototype.search.call(this, searchCriteria);
    };
    ReservationService.prototype.save = function (reservation) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.CreateOrUpdateReservationForApp;
        return _super.prototype.save.call(this, reservation);
    };
    ReservationService.prototype.cancel = function (item) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.CancelReservation;
        return _super.prototype.save.call(this, item);
    };
    /**
      *
      * @param searchCriteria {
         consultantUserId: 1,
         vehicleId: 1,
         appointmentDateLocal: "2018-05-05"
      * }
      */
    ReservationService.prototype.getAvailableReservationTimeSlots = function (searchCriteria) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetAvailableReservationTimeSlots;
        return _super.prototype.search.call(this, searchCriteria);
    };
    ReservationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_7__ui_http_injector__["a" /* UIHttpInjector */]])
    ], ReservationService);
    return ReservationService;
}(__WEBPACK_IMPORTED_MODULE_6__ui_aware_http_service__["a" /* UIAwareHttpService */]));

//# sourceMappingURL=reservation.service.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDriveProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {TestdrivingAddress} from "../../models/testdrivingItems";
/*
  Generated class for the TestDriveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TestDriveProvider = /** @class */ (function () {
    function TestDriveProvider(http, api) {
        this.http = http;
        this.api = api;
        console.log('Hello TestDriveProvider Provider');
    }
    TestDriveProvider.prototype.getFormattedAddress = function (geolocation) {
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.GetFormattedAddress, geolocation).share();
        /* let data
         seq.subscribe((res: any) => {
           // console.log(res)
           if (res.success == true) {
             let address = new TestdrivingAddress
             address.setAddress(res.result)
             console.log("address.address  provider: ",address.getAddress() );
    
           } else {
             console.log(res);
    
           }
         }, err => {
    
           alert("Network Error!")
           console.error('ERROR', err.error.message);
         });*/
        return seq;
    };
    TestDriveProvider.prototype.uploadStartDrivingRecord = function (record) {
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.StartDrivingRecord, record).share();
        /*seq.subscribe((res: any) => {
          if (res.success == true) {
            console.log(res);
          } else {
            console.log(res);
          }
        }, err => {
        });*/
        return seq;
    };
    TestDriveProvider.prototype.uploadContinueDrivingRecord = function (record) {
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.ContinueDrivingRecord, record).share();
        /*  seq.subscribe((res: any) => {
            if (res.success == true) {
              console.log(res);
            } else {
              console.log(res);
            }
          }, err => {
          });*/
        return seq;
    };
    TestDriveProvider.prototype.uploadCreateDrivingRawRecords = function (record) {
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.CreateDrivingRawRecords, record).share();
        seq.subscribe(function (res) {
            console.log(res);
            /*
                  if (res.success == true) {
                    console.log("CreateDrivingRawRecords 저장성공",res);
      
                  } else {
                    console.log(res);
                  }
                }*/
        }, function (err) {
        });
        return seq;
    };
    TestDriveProvider.prototype.uploadEndDrivingRecord = function (record) {
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.EndDrivingRecord, record).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error('uploadEndDrivingRecord error');
            // this.uploadEndDrivingRecord(record) // 에러시 자동 호출
        });
        return seq;
    };
    TestDriveProvider.prototype.uploadFinishDrivingRecord = function (record) {
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.FinishDrivingRecord, record).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error('uploadFinishDrivingRecord error');
            // this.uploadEndDrivingRecord(record) // 에러시 자동 호출
        });
        return seq;
    };
    TestDriveProvider.prototype.getDrivingRecords = function (record) {
        var seq = this.api.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].api.GetDrivingRecords, record).share();
        seq.subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error('uploadFinishDrivingRecord error');
            // this.uploadEndDrivingRecord(record) // 에러시 자동 호출
        });
        return seq;
    };
    TestDriveProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], TestDriveProvider);
    return TestDriveProvider;
}());

//# sourceMappingURL=test-drive.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createTranslateLoader;
/* unused harmony export SentryIonicErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_crop__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_open_native_settings__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_ble__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_document_viewer__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_bluetooth_serial__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mocks_providers_items__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mocks_providers_vehicleItems__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_splash_splash__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_signaturepad__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_real_time_check_real_time_check__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_test_drive_test_drive__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_services_module__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_moment__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_insomnia__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_background_geolocation__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_location_accuracy__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_diagnostic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_pdf_viewer__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_autostart__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_version__ = __webpack_require__(460);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { SignaturePadModule2 } from 'angular2-signaturepad';
// import * as Sentry from 'sentry-cordova';












// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var SentryIonicErrorHandler = /** @class */ (function (_super) {
    __extends(SentryIonicErrorHandler, _super);
    function SentryIonicErrorHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(
    //   private toastSvc: ToastService
    // ) {
    //   super();
    // }
    SentryIonicErrorHandler.prototype.handleError = function (error) {
        console.error('[Global Error Handler] error: ', error);
        // super.handleError(error);
        // try {
        //   Sentry.captureException(error.originalError || error);
        // } catch (e) {
        //   console.error(e);
        // }
    };
    return SentryIonicErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_splash_splash__["a" /* SplashPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_26_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_22_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__services_services_module__["a" /* AppServicesModule */],
                __WEBPACK_IMPORTED_MODULE_32_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-profile/change-profile.module#ChangeProfilePageModule', name: 'ChangeProfilePage', segment: 'change-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cs-survey/cs-survey.module#CsSurveyPageModule', name: 'CsSurveyPage', segment: 'cs-survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cs-survey/survey-detail/survey.detail.component.module#SurveyDetailModule', name: 'SurveyDetailPage', segment: 'survey.detail.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/developer/developer.module#DeveloperPageModule', name: 'DeveloperPage', segment: 'developer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document/document.module#DocumentPageModule', name: 'DocumentPage', segment: 'document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document/terms-of-service-modal/terms-of-service-modal.module#TermsOfServiceModalModule', name: 'TermsOfServiceModal', segment: 'terms-of-service-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drive-shooting/drive-shooting.module#DriveShootingPageModule', name: 'DriveShootingPage', segment: 'drive-shooting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manual/manual.module#ManualPageModule', name: 'ManualPage', segment: 'manual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reminder/reminder.module#ReminderPageModule', name: 'ReminderPage', segment: 'reminder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservation-list/reservation-list.module#ReservationListPageModule', name: 'ReservationListPage', segment: 'reservation-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservation/reservation.module#ReservationPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-language/select-language.module#SelectLanguagePageModule', name: 'SelectLanguagePage', segment: 'select-language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stop-timing/stop-timing.module#StopTimingPageModule', name: 'StopTimingPage', segment: 'stop-timing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-drive-ready/test-drive-ready.module#TestDriveReadyPageModule', name: 'TestDriveReadyPage', segment: 'test-drive-ready', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-drive-record/test-drive-record.module#TestDriveRecordPageModule', name: 'TestDriveRecordPage', segment: 'test-drive-record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-drive-result/test-drive-result.module#TestDriveResultPageModule', name: 'TestDriveResultPage', segment: 'test-drive-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-page/test.page.module#TestPageModule', name: 'TestPage', segment: 'test.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-health-check/history/vhc-history.module#VhcHistoryModule', name: 'HistoryDetailPage', segment: 'vhc-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-health-check/imageModal/image-modal.module#ImageModalModule', name: 'ImageModal', segment: 'image-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-health-check/vehicle-health-check.module#VehicleHealthCheckPageModule', name: 'VehicleHealthCheckPage', segment: 'vehicle-health-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-list/vehicle-list.module#VehicleListPageModule', name: 'VehicleListPage', segment: 'vehicle-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-registration-takepic-guide/vehicle-registration-takepic-guide.module#VehicleRegistrationTakepicGuidePageModule', name: 'VehicleRegistrationTakepicGuidePage', segment: 'vehicle-registration-takepic-guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-registration/vehicle-registration.module#VehicleRegistrationPageModule', name: 'VehicleRegistrationPage', segment: 'vehicle-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_splash_splash__["a" /* SplashPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__providers_test_drive_test_drive__["a" /* TestDriveProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_insomnia__["a" /* Insomnia */],
                __WEBPACK_IMPORTED_MODULE_19__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_17__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_18__mocks_providers_vehicleItems__["a" /* VehicleItems */],
                __WEBPACK_IMPORTED_MODULE_19__providers__["c" /* Util */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_autostart__["a" /* Autostart */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                // Keep this to enable Ionic's runtime error handling during development
                // { provide: ErrorHandler, useClass: IonicErrorHandler }
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: SentryIonicErrorHandler },
                __WEBPACK_IMPORTED_MODULE_23__providers_real_time_check_real_time_check__["a" /* RealTimeCheckProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_test_drive_test_drive__["a" /* TestDriveProvider */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_version__["a" /* AppVersion */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordService; });
/* unused harmony export PasswordServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_password_model__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PasswordService = /** @class */ (function (_super) {
    __extends(PasswordService, _super);
    function PasswordService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_5__models_password_model__["a" /* PasswordModel */], PasswordServerModel, injector) || this;
    }
    PasswordService.prototype.save = function (passwordModel) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.ChangePassword;
        return _super.prototype.save.call(this, passwordModel);
    };
    PasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], PasswordService);
    return PasswordService;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["a" /* HttpAbstractService */]));

var PasswordServerModel = /** @class */ (function (_super) {
    __extends(PasswordServerModel, _super);
    function PasswordServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordServerModel.prototype.fromClientModel = function (passwordModel) {
        this.CurrentPassword = passwordModel.CurrentPassword;
        this.NewPassword = passwordModel.NewPassword;
        this.NewPasswordRepeat = passwordModel.NewPasswordRepeat;
    };
    return PasswordServerModel;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=password.service.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordModel; });
var PasswordModel = /** @class */ (function () {
    function PasswordModel() {
    }
    return PasswordModel;
}());

//# sourceMappingURL=password.model.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reservation_reservation_model__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Util = /** @class */ (function () {
    function Util(toastCtrl, loadingCtrl, alertCtrl, device) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.device = device;
    }
    Util.prototype.isDoneReservation = function (status) {
        return __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].reservation.done.indexOf(status) >= 0;
    };
    // getCurrentLoginId() {
    //   let result = this.securityService.getUser();
    //   if (result)
    //     return result.id;
    //   return 0;
    // }
    // getCurrentUserInfor() : User {
    //   return this.securityService.getUser();
    // }
    Util.prototype.transformToDocument = function (item) {
        var document = new __WEBPACK_IMPORTED_MODULE_4__models_reservation_reservation_model__["b" /* ReservationDocument */]();
        document.id = item.id;
        document.vehicleId = item.vehicleId;
        document.vehicleDisplayName = item.vehicleDisplayName;
        document.consultantUserId = item.consultantUserId;
        document.customerFullName = item.customerFullName;
        document.customerPhoneNumber = item.customerPhoneNumber;
        document.customerEmailAddress = item.customerEmailAddress;
        document.recommenderFullName = item.recommenderFullName;
        document.customerSalutationEnum = item.customerSalutationEnum;
        document.driverLicenseFrontSidePictureId = item.driverLicenseFrontSidePictureId;
        document.driverLicenseBackSidePictureId = item.driverLicenseBackSidePictureId;
        document.isAgreedWithTermsAndConditions = item.isAgreedWithTermsAndConditions;
        document.isAgreedWithPrivacyPolicy = item.isAgreedWithPrivacyPolicy;
        document.isAgreedWithEmailMarketing = item.isAgreedWithEmailMarketing;
        document.customerSignatureId = item.customerSignatureId;
        document.consultantSignatureId = item.consultantSignatureId;
        document.customerSignedTime = item.customerSignedTime;
        document.consultantSignedTime = item.consultantSignedTime;
        return document;
    };
    Util.prototype.transformToReservation = function (item) {
        var reservation = new __WEBPACK_IMPORTED_MODULE_4__models_reservation_reservation_model__["a" /* Reservation */]();
        reservation.id = item.id;
        reservation.vehicleId = item.vehicleId || 0;
        reservation.recommenderFullName = item.recommenderFullName;
        reservation.customerPhoneNumber = item.customerPhoneNumber;
        reservation.customerFullName = item.customerFullName;
        reservation.customerEmailAddress = item.customerEmailAddress;
        reservation.consultantUserId = item.consultantUserId;
        if (item.appointmentFromDateTimeLocal) {
            reservation.appointmentFromTime = __WEBPACK_IMPORTED_MODULE_5_moment___default()(item.appointmentFromDateTimeLocal).locale(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].moment.locale).format("HH:mm");
            reservation.appointmentDate = item.appointmentFromDateTimeLocal;
        }
        if (item.appointmentToDateTimeLocal) {
            reservation.appointmentToTime = __WEBPACK_IMPORTED_MODULE_5_moment___default()(item.appointmentToDateTimeLocal).locale(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].moment.locale).format("HH:mm");
        }
        return reservation;
    };
    Util.prototype.transformToReservationList = function (items) {
        if (!items)
            return null;
        var list = [];
        items.forEach(function (element) {
            element.appointmentDateLocal = __WEBPACK_IMPORTED_MODULE_5_moment___default()(element.appointmentFromDateTimeLocal, __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].date.YYYYMMDD).toDate();
            element.appointmentFromDateTimeLocal = __WEBPACK_IMPORTED_MODULE_5_moment___default()(element.appointmentFromDateTimeLocal, __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].date.SeverFormatMoment).toDate();
            element.appointmentToDateTimeLocal = __WEBPACK_IMPORTED_MODULE_5_moment___default()(element.appointmentToDateTimeLocal, __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].date.SeverFormatMoment).toDate();
            list.push(element);
        });
        return list;
    };
    Util.prototype.transformToGroupBy = function (collection, property) {
        if (!collection)
            return null;
        collection = __WEBPACK_IMPORTED_MODULE_6_underscore__["_"].sortBy(collection, property);
        var groupedCollection = collection.reduce(function (previous, current) {
            if (!previous[current[property]]) {
                previous[current[property]] = [current];
            }
            else {
                previous[current[property]].push(current);
            }
            return previous;
        }, {});
        // this will return an array of objects, each object containing a group of objects
        return Object.keys(groupedCollection).map(function (key) { return ({ key: key, value: groupedCollection[key] }); });
    };
    Util.prototype.buildSignature = function (signaturePadDataUrl, fileName) {
        var blob = this.base64toBlob(signaturePadDataUrl, '.png');
        blob.name = fileName;
        return blob;
    };
    ;
    Util.prototype.autoLocaleFormat = function (date) {
        console.log("Result KoreaFormat: ", __WEBPACK_IMPORTED_MODULE_5_moment___default()(date).format(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].date.TestDriveResultKoreanFormat));
        return __WEBPACK_IMPORTED_MODULE_5_moment___default()(date).format(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].date.TestDriveResultKoreanFormat);
    };
    Util.prototype.durationDateFormat = function (date) {
        return __WEBPACK_IMPORTED_MODULE_5_moment___default()(date).format(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].date.TestDriveResultDurationDateFormat);
    };
    Util.prototype.base64toBlob = function (dataURI, contentType) {
        contentType = contentType || '';
        var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return new Blob([array], { type: contentType });
    };
    Util.prototype.checkDeviceOS = function () {
        return this.device.platform;
    };
    /*
      callLoadingBar(sel) {
        let loading  = this.loadingCtrl;
  
        if (sel == 'create') {
          loading.create();
        }
        else if (sel == 'play') {
          loading.present()
        } else if (sel == 'dismiss') {
          loading.dismiss()
        }
      }*/
    Util.prototype.callConfirmAlert = function (title, msg, bt1Text, bt1Func, bt2Text, bt2Func) {
        if (bt2Text) {
            var confirm_1 = this.alertCtrl.create({
                title: title,
                message: msg,
                buttons: [
                    {
                        text: bt1Text,
                        handler: function () {
                            return bt1Func;
                        }
                    },
                    {
                        text: bt2Text,
                        handler: function () {
                            return bt2Func;
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var confirm_2 = this.alertCtrl.create({
                title: title,
                message: msg,
                buttons: [
                    {
                        text: bt1Text,
                        handler: function () {
                            return bt1Func;
                        }
                    }
                ]
            });
            confirm_2.present();
        }
    };
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], Util);
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* unused harmony export CustomerServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_customer_model__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_vehicle_vehicle_model__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CustomerService = /** @class */ (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_1__models_customer_model__["a" /* Customer */], CustomerServerModel, injector) || this;
    }
    CustomerService.prototype.search = function (searchCriteria) {
        this.url = __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].api.GetApplicationsSurveyUndoneWithDrivingRecord;
        searchCriteria.baseDateFromLocal = __WEBPACK_IMPORTED_MODULE_7_moment___default()(searchCriteria.baseDateFromLocal).locale(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].moment.locale).format(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].date.YYYYMMDD);
        return _super.prototype.search.call(this, searchCriteria);
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_8__ui_http_injector__["a" /* UIHttpInjector */]])
    ], CustomerService);
    return CustomerService;
}(__WEBPACK_IMPORTED_MODULE_4__http_abstract_service__["a" /* HttpAbstractService */]));

var CustomerServerModel = /** @class */ (function (_super) {
    __extends(CustomerServerModel, _super);
    function CustomerServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerServerModel.prototype.fromClientModel = function (customer) {
        this.vehicleId = customer.vehicle.id;
    };
    CustomerServerModel.prototype.toClientModel = function () {
        var customer = new __WEBPACK_IMPORTED_MODULE_1__models_customer_model__["a" /* Customer */]();
        if (this.vehicleId) {
            var vehicle = new __WEBPACK_IMPORTED_MODULE_5__models_vehicle_vehicle_model__["a" /* Vehicle */]();
            vehicle.id = this.vehicleId;
            customer.id = this.id;
            customer.driveEndTime = this.driveEndTime;
            customer.driveStartTime = this.driveStartTime;
            customer.vehicle = vehicle;
            customer.fullName = this.customerFullName;
        }
        return customer;
    };
    return CustomerServerModel;
}(__WEBPACK_IMPORTED_MODULE_4__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionService; });
/* unused harmony export SurveyQuestionServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_survey_survey_model__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SurveyQuestionService = /** @class */ (function (_super) {
    __extends(SurveyQuestionService, _super);
    function SurveyQuestionService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_5__models_survey_survey_model__["a" /* SurveyQuestion */], SurveyQuestionServerModel, injector) || this;
    }
    SurveyQuestionService.prototype.search = function (applicationID) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetSimpleSurveyQuestionsAndResponses;
        return _super.prototype.search.call(this, { applicationId: applicationID });
    };
    SurveyQuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], SurveyQuestionService);
    return SurveyQuestionService;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["a" /* HttpAbstractService */]));

var SurveyQuestionServerModel = /** @class */ (function (_super) {
    __extends(SurveyQuestionServerModel, _super);
    function SurveyQuestionServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyQuestionServerModel.prototype.fromClientModel = function (surveyQuestion) {
    };
    SurveyQuestionServerModel.prototype.toClientModel = function () {
        var surveyQuestion = new __WEBPACK_IMPORTED_MODULE_5__models_survey_survey_model__["a" /* SurveyQuestion */]();
        surveyQuestion.id = this.simpleSurveyQuestionId;
        surveyQuestion.title = this.questionTitle;
        surveyQuestion.maxScore = this.maxScore;
        var response = new __WEBPACK_IMPORTED_MODULE_5__models_survey_survey_model__["b" /* SurveyResponse */]();
        response.selectedScore = this.selectedScore;
        response.question = surveyQuestion;
        surveyQuestion.response = response;
        return surveyQuestion;
    };
    return SurveyQuestionServerModel;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=survey.question.service.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponseService; });
/* unused harmony export SurveyResponseServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_survey_survey_model__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SurveyResponseService = /** @class */ (function (_super) {
    __extends(SurveyResponseService, _super);
    function SurveyResponseService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_5__models_survey_survey_model__["b" /* SurveyResponse */], SurveyResponseServerModel, injector) || this;
    }
    SurveyResponseService.prototype.saveAll = function (surveyResponses, applicationID) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.CreateOrUpdateSimpleSurveyResponses;
        return _super.prototype.saveAll.call(this, surveyResponses, applicationID);
    };
    SurveyResponseService.prototype.transformRequestBody = function (serverModel, associatedID) {
        return {
            "applicationId": associatedID,
            "simpleSurveyResponses": serverModel
        };
    };
    SurveyResponseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], SurveyResponseService);
    return SurveyResponseService;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["a" /* HttpAbstractService */]));

var SurveyResponseServerModel = /** @class */ (function (_super) {
    __extends(SurveyResponseServerModel, _super);
    function SurveyResponseServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyResponseServerModel.prototype.fromClientModel = function (surveyResponse) {
        this.id = surveyResponse.id;
        this.simpleSurveyQuestionId = surveyResponse.question.id;
        this.selectedScore = surveyResponse.selectedScore;
    };
    return SurveyResponseServerModel;
}(__WEBPACK_IMPORTED_MODULE_3__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=survey.response.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reservation_reservation_model__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentService = /** @class */ (function (_super) {
    __extends(DocumentService, _super);
    function DocumentService(http, config, injector) {
        return _super.call(this, http, '', __WEBPACK_IMPORTED_MODULE_4__models_reservation_reservation_model__["b" /* ReservationDocument */], config, injector) || this;
    }
    DocumentService.prototype.save = function (document) {
        this.url = __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* Config */].api.CreateOrUpdateApplicationForApp;
        return _super.prototype.save.call(this, document);
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], DocumentService);
    return DocumentService;
}(__WEBPACK_IMPORTED_MODULE_5__ui_aware_http_service__["a" /* UIAwareHttpService */]));

//# sourceMappingURL=document.service.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleOdometerModel; });
var VehicleOdometerModel = /** @class */ (function () {
    function VehicleOdometerModel() {
    }
    return VehicleOdometerModel;
}());

//# sourceMappingURL=VehicleOdometer.model.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEALER_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_login_model__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_config_localization_model__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_app_setting_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_language_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_config_local_setting_model__ = __webpack_require__(59);
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













var DEALER_CODE = 'dealerCode';
var USER_NAME = 'username';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastService, translateService, userService, securityService, storeage, loadingCtrl, appSettingService, languageService) {
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.translateService = translateService;
        this.userService = userService;
        this.securityService = securityService;
        this.storeage = storeage;
        this.loadingCtrl = loadingCtrl;
        this.appSettingService = appSettingService;
        this.languageService = languageService;
        this.langList = this.languageService.search();
        this.currentlanguage = __WEBPACK_IMPORTED_MODULE_12__models_config_local_setting_model__["a" /* LocalSettingModel */].lang;
        this.account = new __WEBPACK_IMPORTED_MODULE_4__models_login_model__["a" /* LoginModel */]();
        this.account.tenancyName = localStorage.getItem(DEALER_CODE);
        this.account.usernameOrEmailAddress = localStorage.getItem(USER_NAME);
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function (form) {
        var _this = this;
        if (!form.form.valid) {
            return;
        }
        var loading = this.loadingCtrl.create({
            content: this.translateService.instant('msg.login')
        });
        loading.present();
        this.securityService.login(this.account).subscribe(function (resp) {
            localStorage.setItem(DEALER_CODE, _this.account.tenancyName);
            localStorage.setItem(USER_NAME, _this.account.usernameOrEmailAddress);
            _this.userService.getAllPermissionsForApp().toPromise().then(function (permission) {
                _this._saveAllPermission(permission);
            });
            _this.appSettingService.search().toPromise().then(function (setting) {
                _this.storeage.save(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].AppSetting, setting);
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3____["c" /* MainPage */]).then(function (_) { return loading.dismiss(); });
        }, function (err) {
            loading.dismiss();
            _this.toastService.error(_this.translateService.instant('LOGIN_ERROR'));
        });
    };
    LoginPage.prototype.changeLanguage = function (lang) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.languageService.changeLanguage(lang);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype._saveLocalizationsForApp = function (response) {
        var localization = new __WEBPACK_IMPORTED_MODULE_8__models_config_localization_model__["a" /* LocalizationModel */]();
        localization.AbpConfig = response.Abp;
        localization.STDConfig = response.SmartTestDrive;
        this.storeage.save(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].LocationForApp, localization);
    };
    LoginPage.prototype._saveAllPermission = function (response) {
        // will consider about json object from server later
        if (response && response.length > 0)
            this.storeage.save(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].AllPermissionForApp, response[0]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/login/login.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-content>\n  <div class="login-container">\n    <ion-title text-center>{{\'APP_NAME\'| translate}}</ion-title>\n    <form #form="ngForm" (ngSubmit)="doLogin(form)" validate>\n      <ion-list no-lines>\n        <ion-item class="ivt-item">\n          <ion-input class="ivt-input" required type="text" [(ngModel)]="account.tenancyName" name="tenancyName" placeholder="{{\'TENANCYNAME\' | translate}}"></ion-input>\n        </ion-item>\n        <ion-item class="ivt-item">\n          <ion-input class="ivt-input" required type="text" [(ngModel)]="account.usernameOrEmailAddress" name="email" placeholder="{{ \'EMAIL\' | translate }}"></ion-input>\n        </ion-item>\n        <ion-item class="ivt-item">\n          <ion-input class="ivt-input" required type="password" [(ngModel)]="account.password" name="password" placeholder="{{ \'PASSWORD\' | translate }}"></ion-input>\n        </ion-item>\n        <ion-item class="ivt-item select-lang">\n           <ion-label>{{\'LANGUAGE\'| translate}}</ion-label>\n           <ion-select  cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" name="language" [(ngModel)]="currentlanguage" (ngModelChange)="changeLanguage(currentlanguage)">\n            <ion-option *ngFor="let lang of langList" value="{{lang.name}}">{{lang.value}}</ion-option>\n           </ion-select>\n        </ion-item>\n        <div class="ivt-button-container" text-center>\n          <button type="submit" [disabled]="!form.valid" ion-button color="primary" class="ivt-button" center>{{ \'LOGIN_BUTTON\' | translate }}</button>\n        </div>\n      </ion-list>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__ivt_security__["d" /* IvtSecurityService */],
            __WEBPACK_IMPORTED_MODULE_5__ivt_security__["e" /* IvtStorageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_10__services_app_setting_service__["a" /* AppSettingService */],
            __WEBPACK_IMPORTED_MODULE_11__services_language_service__["a" /* LanguageService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Setting; });
var Setting = /** @class */ (function () {
    function Setting() {
    }
    return Setting;
}());

//# sourceMappingURL=setting.model.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_service__ = __webpack_require__(64);
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



var ProgressService = /** @class */ (function () {
    function ProgressService(translate, dialog) {
        this.translate = translate;
        this.dialog = dialog;
    }
    ProgressService.prototype.observe = function (stopWaiting, progressDone, timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var timeChecking, confirmDialog, isWaiting, progressFinished, msg, createConfirmDialog, func;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isWaiting = false;
                        progressFinished = false;
                        return [4 /*yield*/, this.translate.get('msg.it_take_too_much_time_keep_waiting').toPromise()];
                    case 1:
                        msg = _a.sent();
                        createConfirmDialog = function () {
                            return _this.dialog.createConfirm({
                                subTitle: msg,
                                onConfirmed: function (_isConfirmed) {
                                    // not waiting for geolocation
                                    isWaiting = _isConfirmed;
                                    if (!_isConfirmed) {
                                        if (timeChecking) {
                                            clearTimeout(timeChecking);
                                        }
                                        stopWaiting();
                                    }
                                }
                            });
                        };
                        func = function () {
                            timeChecking = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!!progressFinished) return [3 /*break*/, 2];
                                            return [4 /*yield*/, createConfirmDialog()];
                                        case 1:
                                            confirmDialog = _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            if (!progressFinished && confirmDialog) {
                                                confirmDialog.present();
                                                confirmDialog.onDidDismiss(function (data) {
                                                    console.log('[ProgressService] observe: data..', data);
                                                    confirmDialog = null;
                                                    if (isWaiting && !progressFinished) {
                                                        func();
                                                    }
                                                });
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, timeout);
                        };
                        progressDone.then(function (_) {
                            progressFinished = true;
                            if (timeChecking) {
                                clearTimeout(timeChecking);
                            }
                            if (confirmDialog) {
                                confirmDialog.dismiss();
                            }
                        });
                        return [4 /*yield*/, createConfirmDialog()];
                    case 2:
                        confirmDialog = _a.sent();
                        func();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */]])
    ], ProgressService);
    return ProgressService;
}());

//# sourceMappingURL=progress.service.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RETRY_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TaskQueueService; });
/* unused harmony export TaskQueue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Task; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var RETRY_TIMEOUT = 3000;
var TaskQueueService = /** @class */ (function () {
    // private queues: Array<TaskQueue> = [];
    // private queueIDs: Array<string> = [];
    function TaskQueueService() {
    }
    /**
     *
     * @param id
     * @param opts
     */
    TaskQueueService.prototype.createQueue = function (id, opts) {
        var queue = new TaskQueue(id);
        queue.runWhen(opts);
        // this.queues.push(queue);
        // this.queueIDs.push(id);
        return queue;
    };
    TaskQueueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TaskQueueService);
    return TaskQueueService;
}());

var TaskQueue = /** @class */ (function () {
    function TaskQueue(id) {
        this.queue = [];
        this.running = false;
        this.timeout = null;
        this.id = id;
    }
    TaskQueue.prototype.getId = function () {
        return this.id;
    };
    TaskQueue.prototype.length = function () {
        return this.queue.length;
    };
    /**
     * Invoke this function after configuring TaskQueue by using @runWhen() method
     * @param task
     */
    TaskQueue.prototype.add = function (task) {
        console.log('[TaskQueue] add task');
        this.queue.push(task);
        this.runNextTask();
    };
    /**
     * This method should run at first to configure strategy of running
     * @param options
     */
    TaskQueue.prototype.runWhen = function (options) {
        this.options = options;
    };
    TaskQueue.prototype.runTaskInContainer = function (fn) {
        this.taskRunnerContainer = fn;
    };
    /**
     * Invoke this function after configuring TaskQueue by using @runWhen() method
     */
    TaskQueue.prototype.execute = function () {
        this.runNextTask();
    };
    /**
     * Helpful when app is resumed from background mode. We don't which point the queue was stoped before background
     */
    TaskQueue.prototype.forceExecute = function () {
        this.running = false;
        this.runNextTask();
    };
    TaskQueue.prototype.stop = function (fn) {
        var _this = this;
        if (this.queue.length == 0) {
            console.log('[TaskQueue] stopped');
            // stop
        }
        else {
            setTimeout(function () {
                // try stopping again
                _this.runNextTask();
                _this.stop(fn);
            }, 3000);
        }
    };
    TaskQueue.prototype.runNextTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var firsTask, runSuccess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[runNextTask] queue length = ', this.queue.length);
                        console.log('[runNextTask] running = ', this.running);
                        if (this.queue.length == 0) {
                            this.running = false;
                            return [2 /*return*/];
                        }
                        if (this.running)
                            return [2 /*return*/];
                        // start task
                        this.running = true;
                        firsTask = this.queue[0];
                        runSuccess = false;
                        // if (this.taskRunnerContainer) {
                        //     console.log('[TaskQueue] running in task container');
                        //     runSuccess = await this.taskRunnerContainer(firsTask);
                        // } else {
                        console.log('[TaskQueue] running task');
                        return [4 /*yield*/, firsTask.execute()];
                    case 1:
                        runSuccess = _a.sent();
                        // }
                        this.running = false;
                        if (runSuccess) {
                            this.queue.shift();
                            this.runNextTask();
                        }
                        else {
                            // fail, retry after timeout
                            if (this.timeout) {
                                clearTimeout(this.timeout);
                            }
                            this.timeout = setTimeout(function () {
                                _this.runNextTask();
                            }, this.options.retryTimeout);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskQueue.prototype.snapshot = function () {
        localStorage.setItem(TaskQueue.PERSIS_KEY + this.id, JSON.stringify(this.queue));
    };
    TaskQueue.prototype.restoreSnapshot = function () {
    };
    TaskQueue.PERSIS_KEY = 'TaskQueue_';
    return TaskQueue;
}());

var Task = /** @class */ (function () {
    function Task(fn) {
        this.fn = fn;
    }
    Task.prototype.execute = function () {
        return this.fn();
    };
    return Task;
}());

//# sourceMappingURL=task.queue.service.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkService; });
/* unused harmony export MarkServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_mark_model__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_vehicle_mark_area_model__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_position_model__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MarkService = /** @class */ (function (_super) {
    __extends(MarkService, _super);
    function MarkService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_1__models_vehicle_mark_model__["b" /* Mark */], MarkServerModel, injector) || this;
    }
    MarkService.prototype.search = function (criteria) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetVehicleHealthCheckDamages;
        return _super.prototype.search.call(this, criteria);
    };
    MarkService.prototype.saveAll = function (vhcDamages, vehicleId) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.CreateOrUpdateVehicleHealthCheckDamages;
        return _super.prototype.saveAll.call(this, vhcDamages, vehicleId);
    };
    MarkService.prototype.transformRequestBody = function (vhcDamages, vehicleId) {
        return {
            vehicleId: vehicleId,
            vhcDamages: vhcDamages
        };
    };
    MarkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */], __WEBPACK_IMPORTED_MODULE_8__ui_http_injector__["a" /* UIHttpInjector */]])
    ], MarkService);
    return MarkService;
}(__WEBPACK_IMPORTED_MODULE_5__http_abstract_service__["a" /* HttpAbstractService */]));

var MarkServerModel = /** @class */ (function (_super) {
    __extends(MarkServerModel, _super);
    function MarkServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkServerModel.prototype.toClientModel = function () {
        var mark = new __WEBPACK_IMPORTED_MODULE_1__models_vehicle_mark_model__["b" /* Mark */]();
        mark.id = this.id;
        mark.damageType = this.damageTypeEnum;
        var axisPosition = new __WEBPACK_IMPORTED_MODULE_7__models_position_model__["a" /* AxisPosition */]();
        axisPosition.XVal = this.positionX;
        axisPosition.YVal = this.positionY;
        mark.position = axisPosition;
        var area = new __WEBPACK_IMPORTED_MODULE_6__models_vehicle_mark_area_model__["a" /* MarkArea */]();
        area.id = this.marAreaId;
        area.width = this.width;
        area.height = this.height;
        return mark;
    };
    MarkServerModel.prototype.fromClientModel = function (mark) {
        this.id = mark.id;
        this.damageTypeEnum = mark.damageType;
        this.positionX = mark.position.XVal;
        this.positionY = mark.position.YVal;
        // this.marAreaId = mark.area.id;
        // this.width = mark.area.width;
        // this.height = mark.area.height;
    };
    return MarkServerModel;
}(__WEBPACK_IMPORTED_MODULE_5__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=mark.service.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehcileHealthCheckService; });
/* unused harmony export VehicleHealthCheckServerModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_commentAndPhoto_model__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VehcileHealthCheckService = /** @class */ (function (_super) {
    __extends(VehcileHealthCheckService, _super);
    function VehcileHealthCheckService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_1__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */], VehicleHealthCheckServerModel, injector) || this;
    }
    VehcileHealthCheckService.prototype.get = function (criteria) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetVehicleHealthCheckCommentAndPhotos;
        return _super.prototype.get.call(this, criteria);
    };
    VehcileHealthCheckService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ui_http_injector__["a" /* UIHttpInjector */]])
    ], VehcileHealthCheckService);
    return VehcileHealthCheckService;
}(__WEBPACK_IMPORTED_MODULE_5__http_abstract_service__["a" /* HttpAbstractService */]));

var VehicleHealthCheckServerModel = /** @class */ (function (_super) {
    __extends(VehicleHealthCheckServerModel, _super);
    function VehicleHealthCheckServerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleHealthCheckServerModel.prototype.toClientModel = function () {
        var vhc = new __WEBPACK_IMPORTED_MODULE_1__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */]();
        vhc.id = this.id;
        vhc.comment = this.comment;
        vhc.creatorUserId = this.creatorUserId;
        vhc.creatorUserName = this.creatorUserName;
        vhc.creationTime = this.creationTime;
        this.vhcCommentPhtos.forEach(function (value) {
            var photos = new __WEBPACK_IMPORTED_MODULE_1__models_commentAndPhoto_model__["b" /* VhcCommentPhotosModel */]();
            photos.id = value.id;
            photos.vhcCommentId = value.vhcCommentId;
            photos.pictureId = value.pictureId;
            vhc.vhcCommentPhotos.push(photos);
        });
        return vhc;
    };
    VehicleHealthCheckServerModel.prototype.fromClientModel = function (vhc) {
        this.id = vhc.id;
        this.comment = vhc.comment;
        this.creatorUserId = vhc.creatorUserId;
        this.creatorUserName = vhc.creatorUserName;
        this.creationTime = vhc.creationTime;
        this.vhcCommentPhtos = vhc.vhcCommentPhotos;
    };
    return VehicleHealthCheckServerModel;
}(__WEBPACK_IMPORTED_MODULE_5__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=commentAndPhoto.service.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VHCService; });
/* unused harmony export MarkAndCommentServer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_mark_model__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_abstract_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_position_model__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_vehicle_mark_comment_model__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_commentAndPhoto_model__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_http_injector__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VHCService = /** @class */ (function (_super) {
    __extends(VHCService, _super);
    function VHCService(http, config, injector) {
        return _super.call(this, http, config, '', __WEBPACK_IMPORTED_MODULE_7__models_vehicle_mark_comment_model__["a" /* MarkAndComment */], MarkAndCommentServer, injector) || this;
    }
    VHCService.prototype.search = function (criteria) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetVehicleHealthCheckDamagesAndCommentAndPhotos;
        return _super.prototype.search.call(this, criteria);
    };
    VHCService.prototype.save = function (vhc) {
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.CreateVehicleHealthCheckDamagesAndCommentAndPhotos;
        return _super.prototype.save.call(this, vhc);
    };
    VHCService.prototype.transformRequestBody = function (vhc, vehicleId) {
        return {
            vehicleId: vehicleId,
            vhcDamages: vhc.vhcDamages,
            vhcComment: vhc.vhcComment
        };
    };
    VHCService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["c" /* IvtHttpClientConfig */], __WEBPACK_IMPORTED_MODULE_9__ui_http_injector__["a" /* UIHttpInjector */]])
    ], VHCService);
    return VHCService;
}(__WEBPACK_IMPORTED_MODULE_5__http_abstract_service__["a" /* HttpAbstractService */]));

var MarkAndCommentServer = /** @class */ (function (_super) {
    __extends(MarkAndCommentServer, _super);
    function MarkAndCommentServer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vhcDamages = [];
        return _this;
    }
    MarkAndCommentServer.prototype.toClientModel = function () {
        var _this = this;
        var markComment = new __WEBPACK_IMPORTED_MODULE_7__models_vehicle_mark_comment_model__["a" /* MarkAndComment */]();
        markComment.mark = [];
        if (this.vhcDamVhcComments && this.vhcDamVhcComments.length > 0) {
            markComment.vhcComment = this.vhcDamVhcComments.pop();
            markComment.vhcCommentHistory = this.vhcDamVhcComments;
        }
        else {
            markComment.vhcComment = new __WEBPACK_IMPORTED_MODULE_8__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */]();
            markComment.vhcCommentHistory = [];
        }
        this.vhcDamages.forEach(function (damage) {
            var mark = new __WEBPACK_IMPORTED_MODULE_1__models_vehicle_mark_model__["b" /* Mark */]();
            mark.id = _this.id;
            mark.damageType = damage.damageTypeEnum;
            var axisPosition = new __WEBPACK_IMPORTED_MODULE_6__models_position_model__["a" /* AxisPosition */]();
            axisPosition.XVal = damage.positionX;
            axisPosition.YVal = damage.positionY;
            mark.position = axisPosition;
            markComment.mark.push(mark);
        });
        return markComment;
    };
    MarkAndCommentServer.prototype.fromClientModel = function (vhc) {
        var _this = this;
        vhc.mark.forEach(function (damage) {
            var markModel = new __WEBPACK_IMPORTED_MODULE_7__models_vehicle_mark_comment_model__["b" /* MarkModel */]();
            markModel.damageTypeEnum = damage.damageType;
            markModel.positionX = damage.position.XVal;
            markModel.positionY = damage.position.YVal;
            _this.vhcDamages.push(markModel);
        });
        this.vhcComment = new __WEBPACK_IMPORTED_MODULE_8__models_commentAndPhoto_model__["a" /* VehicleHealthCheckModel */]();
        this.vhcComment.vhcCommentPhotos = [];
        vhc.vhcComment.vhcCommentPhotos.forEach(function (photo) {
            var commentAndPhoto = new __WEBPACK_IMPORTED_MODULE_8__models_commentAndPhoto_model__["b" /* VhcCommentPhotosModel */]();
            commentAndPhoto.pictureId = photo.pictureId;
            commentAndPhoto.vhcCommentId = photo.vhcCommentId;
            commentAndPhoto.id = photo.id;
            _this.vhcComment.vhcCommentPhotos.push(photo);
        });
        this.vhcComment.comment = vhc.vhcComment.comment;
        this.vehicleId = vhc.vehicleId;
    };
    return MarkAndCommentServer;
}(__WEBPACK_IMPORTED_MODULE_5__http_abstract_service__["b" /* ServerModel */]));

//# sourceMappingURL=mark.comment.service.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VehicleTypeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelYearService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TrimService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__segment_abstract_service__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_vehicle_segment_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ivt_http_client__ = __webpack_require__(13);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleTypeService = /** @class */ (function (_super) {
    __extends(VehicleTypeService, _super);
    function VehicleTypeService(http, config) {
        return _super.call(this, http, '', __WEBPACK_IMPORTED_MODULE_1__models_vehicle_vehicle_segment_model__["c" /* VehicleTypeSegment */], config) || this;
    }
    VehicleTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ivt_http_client__["c" /* IvtHttpClientConfig */]])
    ], VehicleTypeService);
    return VehicleTypeService;
}(__WEBPACK_IMPORTED_MODULE_0__segment_abstract_service__["a" /* SegmentAbstractService */]));

var ModelYearService = /** @class */ (function (_super) {
    __extends(ModelYearService, _super);
    function ModelYearService(http, config) {
        return _super.call(this, http, '', __WEBPACK_IMPORTED_MODULE_1__models_vehicle_vehicle_segment_model__["a" /* ModelYearSegment */], config) || this;
    }
    ModelYearService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ivt_http_client__["c" /* IvtHttpClientConfig */]])
    ], ModelYearService);
    return ModelYearService;
}(__WEBPACK_IMPORTED_MODULE_0__segment_abstract_service__["a" /* SegmentAbstractService */]));

var TrimService = /** @class */ (function (_super) {
    __extends(TrimService, _super);
    function TrimService(http, config) {
        return _super.call(this, http, '', __WEBPACK_IMPORTED_MODULE_1__models_vehicle_vehicle_segment_model__["b" /* TrimSegment */], config) || this;
    }
    TrimService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ivt_http_client__["c" /* IvtHttpClientConfig */]])
    ], TrimService);
    return TrimService;
}(__WEBPACK_IMPORTED_MODULE_0__segment_abstract_service__["a" /* SegmentAbstractService */]));

//# sourceMappingURL=vehicle.type.service.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(472);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalSettingModel; });
var LocalSettingModel = /** @class */ (function () {
    function LocalSettingModel() {
    }
    // static hostUrl = 'https://testdrive-stable.hyundaisvc.com:9443';    
    LocalSettingModel.lang = "en";
    LocalSettingModel.splashTitle = "Saudi Arabia"; // Saudi Arabia, Ecuador
    LocalSettingModel.hostUrl = 'https://ksa.hyundaisvc.com:9443';
    return LocalSettingModel;
}());

//# sourceMappingURL=local.setting.model.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIAwareHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * This service take care of UI displaying:
 * 1. Display loading bar during request (set hiddenLoading = false to hide loading bar)
 * 2. Display Retry confirmation popup if request is failed due to network timeout ( )
 */
var UIAwareHttpService = /** @class */ (function (_super) {
    __extends(UIAwareHttpService, _super);
    function UIAwareHttpService(http, url, ClassT, config, injector) {
        var _this = _super.call(this, http, url, ClassT, config) || this;
        _this.injector = injector;
        return _this;
    }
    UIAwareHttpService.prototype.showLoading = function (hiddenLoading) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hideLoading)
                            return [2 /*return*/, null];
                        loading = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.injector.loadingService.create('msg.loading')];
                    case 2:
                        loading = _a.sent();
                        loading.present();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, loading];
                }
            });
        });
    };
    UIAwareHttpService.prototype.hideLoading = function (promise) {
        promise.then(function (loading) {
            if (loading) {
                loading.dismiss();
            }
        });
    };
    UIAwareHttpService.prototype.displayRetryPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var msg, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.injector.translateService.get('msg.network_disconnect_try_again').toPromise()];
                    case 1:
                        msg = _a.sent();
                        return [4 /*yield*/, this.injector.dialog.confirm(msg)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UIAwareHttpService.prototype.retryPipe = function (attemp) {
        var _this = this;
        return attemp.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["delayWhen"])(function (error) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                console.log('Retry with error ', error);
                if (error.code != __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["a" /* APICode */].Progress && error.code != '0') {
                    observer.error(error);
                    observer.complete();
                }
                else {
                    _this.displayRetryPopup().then(function (retry) {
                        if (retry) {
                            observer.next(1);
                        }
                        else {
                            observer.error(error);
                        }
                        observer.complete();
                    });
                }
            });
        }));
    };
    UIAwareHttpService.prototype.getAll = function (parentId, hiddenLoading) {
        var _this = this;
        var promise = this.showLoading(hiddenLoading);
        return _super.prototype.getAll.call(this, parentId).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retryWhen"])(function (attemp) { return _this.retryPipe(attemp); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () { return _this.hideLoading(promise); }));
    };
    UIAwareHttpService.prototype.get = function (id, hiddenLoading) {
        var _this = this;
        var promise = this.showLoading(hiddenLoading);
        return _super.prototype.get.call(this, id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retryWhen"])(function (attemp) { return _this.retryPipe(attemp); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () { return _this.hideLoading(promise); }));
    };
    UIAwareHttpService.prototype.save = function (item, hiddenLoading, retryPopup) {
        var _this = this;
        var promise = this.showLoading(hiddenLoading);
        if (retryPopup) {
            return _super.prototype.save.call(this, item).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retryWhen"])(function (attemp) { return _this.retryPipe(attemp); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () { return _this.hideLoading(promise); }));
        }
        else {
            return _super.prototype.save.call(this, item).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () { return _this.hideLoading(promise); }));
        }
    };
    UIAwareHttpService.prototype.search = function (criteria, hiddenLoading) {
        var _this = this;
        var promise = this.showLoading(hiddenLoading);
        return _super.prototype.search.call(this, criteria).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retryWhen"])(function (attemp) { return _this.retryPipe(attemp); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () { return _this.hideLoading(promise); }));
    };
    UIAwareHttpService.prototype.delete = function (id, hiddenLoading) {
        var _this = this;
        var promise = this.showLoading(hiddenLoading);
        return _super.prototype.delete.call(this, id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["retryWhen"])(function (attemp) { return _this.retryPipe(attemp); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () { return _this.hideLoading(promise); }));
    };
    return UIAwareHttpService;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["e" /* IvtHttpService */]));

//# sourceMappingURL=ui.aware.http.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
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



var DialogService = /** @class */ (function () {
    function DialogService(alertCtrl, translate) {
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.OK_BTN_KEY = 'OK_BUTTON';
        this.CANCEL_BTN_KEY = 'CANCEL_BUTTON';
        // should not translate in constructor. 
        // If translateService is not set to a specific language, the translated text will be not found
    }
    DialogService.prototype.getLocalization = function (key) {
        return this.translate.get(key).toPromise();
    };
    /**
     * Wrapping of Ionic AlertController. Return a promise which will be resolved when user click OK button
     */
    DialogService.prototype.alert = function (title, subTitle) {
        var _this = this;
        var promise = new Promise(function (resolver, rejecter) { return __awaiter(_this, void 0, void 0, function () {
            var okBtnText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLocalization(this.OK_BTN_KEY)];
                    case 1:
                        okBtnText = _a.sent();
                        this.alertCtrl.create({
                            // title: title,
                            subTitle: title,
                            enableBackdropDismiss: false,
                            buttons: [{
                                    text: okBtnText,
                                    handler: function () {
                                        resolver(true);
                                    }
                                }]
                        }).present();
                        return [2 /*return*/];
                }
            });
        }); });
        return promise;
    };
    DialogService.prototype.createConfirm = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var okBtnText, cancelBtnText, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLocalization(this.OK_BTN_KEY)];
                    case 1:
                        okBtnText = _a.sent();
                        return [4 /*yield*/, this.getLocalization(this.CANCEL_BTN_KEY)];
                    case 2:
                        cancelBtnText = _a.sent();
                        alert = this.alertCtrl.create({
                            title: opts ? opts.title : null,
                            subTitle: opts ? opts.subTitle : null,
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: cancelBtnText,
                                    handler: function () {
                                        opts && opts.onConfirmed(false);
                                    }
                                },
                                {
                                    text: okBtnText,
                                    handler: function () {
                                        opts && opts.onConfirmed(true);
                                    }
                                }
                            ]
                        });
                        return [2 /*return*/, alert];
                }
            });
        });
    };
    DialogService.prototype.confirm = function (message) {
        var _this = this;
        var promise = new Promise(function (resolver, rejecter) { return __awaiter(_this, void 0, void 0, function () {
            var okBtnText, cancelBtnText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLocalization(this.OK_BTN_KEY)];
                    case 1:
                        okBtnText = _a.sent();
                        return [4 /*yield*/, this.getLocalization(this.CANCEL_BTN_KEY)];
                    case 2:
                        cancelBtnText = _a.sent();
                        this.alertCtrl.create({
                            // title: title,
                            subTitle: message,
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: okBtnText,
                                    handler: function () {
                                        resolver(true);
                                    }
                                },
                                {
                                    text: cancelBtnText,
                                    handler: function () {
                                        resolver(false);
                                    }
                                }
                            ]
                        }).present();
                        return [2 /*return*/];
                }
            });
        }); });
        return promise;
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], DialogService);
    return DialogService;
}());

//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

// 
//# sourceMappingURL=item.js.map

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 271,
	"./af.js": 271,
	"./ar": 272,
	"./ar-dz": 273,
	"./ar-dz.js": 273,
	"./ar-kw": 274,
	"./ar-kw.js": 274,
	"./ar-ly": 275,
	"./ar-ly.js": 275,
	"./ar-ma": 276,
	"./ar-ma.js": 276,
	"./ar-sa": 277,
	"./ar-sa.js": 277,
	"./ar-tn": 278,
	"./ar-tn.js": 278,
	"./ar.js": 272,
	"./az": 279,
	"./az.js": 279,
	"./be": 280,
	"./be.js": 280,
	"./bg": 281,
	"./bg.js": 281,
	"./bm": 282,
	"./bm.js": 282,
	"./bn": 283,
	"./bn.js": 283,
	"./bo": 284,
	"./bo.js": 284,
	"./br": 285,
	"./br.js": 285,
	"./bs": 286,
	"./bs.js": 286,
	"./ca": 287,
	"./ca.js": 287,
	"./cs": 288,
	"./cs.js": 288,
	"./cv": 289,
	"./cv.js": 289,
	"./cy": 290,
	"./cy.js": 290,
	"./da": 291,
	"./da.js": 291,
	"./de": 292,
	"./de-at": 293,
	"./de-at.js": 293,
	"./de-ch": 294,
	"./de-ch.js": 294,
	"./de.js": 292,
	"./dv": 295,
	"./dv.js": 295,
	"./el": 296,
	"./el.js": 296,
	"./en-au": 297,
	"./en-au.js": 297,
	"./en-ca": 298,
	"./en-ca.js": 298,
	"./en-gb": 299,
	"./en-gb.js": 299,
	"./en-ie": 300,
	"./en-ie.js": 300,
	"./en-il": 301,
	"./en-il.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./eo": 303,
	"./eo.js": 303,
	"./es": 304,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es-us": 306,
	"./es-us.js": 306,
	"./es.js": 304,
	"./et": 307,
	"./et.js": 307,
	"./eu": 308,
	"./eu.js": 308,
	"./fa": 309,
	"./fa.js": 309,
	"./fi": 310,
	"./fi.js": 310,
	"./fo": 311,
	"./fo.js": 311,
	"./fr": 312,
	"./fr-ca": 313,
	"./fr-ca.js": 313,
	"./fr-ch": 314,
	"./fr-ch.js": 314,
	"./fr.js": 312,
	"./fy": 315,
	"./fy.js": 315,
	"./gd": 316,
	"./gd.js": 316,
	"./gl": 317,
	"./gl.js": 317,
	"./gom-latn": 318,
	"./gom-latn.js": 318,
	"./gu": 319,
	"./gu.js": 319,
	"./he": 320,
	"./he.js": 320,
	"./hi": 321,
	"./hi.js": 321,
	"./hr": 322,
	"./hr.js": 322,
	"./hu": 323,
	"./hu.js": 323,
	"./hy-am": 324,
	"./hy-am.js": 324,
	"./id": 325,
	"./id.js": 325,
	"./is": 326,
	"./is.js": 326,
	"./it": 327,
	"./it.js": 327,
	"./ja": 328,
	"./ja.js": 328,
	"./jv": 329,
	"./jv.js": 329,
	"./ka": 330,
	"./ka.js": 330,
	"./kk": 331,
	"./kk.js": 331,
	"./km": 332,
	"./km.js": 332,
	"./kn": 333,
	"./kn.js": 333,
	"./ko": 334,
	"./ko.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mn": 344,
	"./mn.js": 344,
	"./mr": 345,
	"./mr.js": 345,
	"./ms": 346,
	"./ms-my": 347,
	"./ms-my.js": 347,
	"./ms.js": 346,
	"./mt": 348,
	"./mt.js": 348,
	"./my": 349,
	"./my.js": 349,
	"./nb": 350,
	"./nb.js": 350,
	"./ne": 351,
	"./ne.js": 351,
	"./nl": 352,
	"./nl-be": 353,
	"./nl-be.js": 353,
	"./nl.js": 352,
	"./nn": 354,
	"./nn.js": 354,
	"./pa-in": 355,
	"./pa-in.js": 355,
	"./pl": 356,
	"./pl.js": 356,
	"./pt": 357,
	"./pt-br": 358,
	"./pt-br.js": 358,
	"./pt.js": 357,
	"./ro": 359,
	"./ro.js": 359,
	"./ru": 360,
	"./ru.js": 360,
	"./sd": 361,
	"./sd.js": 361,
	"./se": 362,
	"./se.js": 362,
	"./si": 363,
	"./si.js": 363,
	"./sk": 364,
	"./sk.js": 364,
	"./sl": 365,
	"./sl.js": 365,
	"./sq": 366,
	"./sq.js": 366,
	"./sr": 367,
	"./sr-cyrl": 368,
	"./sr-cyrl.js": 368,
	"./sr.js": 367,
	"./ss": 369,
	"./ss.js": 369,
	"./sv": 370,
	"./sv.js": 370,
	"./sw": 371,
	"./sw.js": 371,
	"./ta": 372,
	"./ta.js": 372,
	"./te": 373,
	"./te.js": 373,
	"./tet": 374,
	"./tet.js": 374,
	"./tg": 375,
	"./tg.js": 375,
	"./th": 376,
	"./th.js": 376,
	"./tl-ph": 377,
	"./tl-ph.js": 377,
	"./tlh": 378,
	"./tlh.js": 378,
	"./tr": 379,
	"./tr.js": 379,
	"./tzl": 380,
	"./tzl.js": 380,
	"./tzm": 381,
	"./tzm-latn": 382,
	"./tzm-latn.js": 382,
	"./tzm.js": 381,
	"./ug-cn": 383,
	"./ug-cn.js": 383,
	"./uk": 384,
	"./uk.js": 384,
	"./ur": 385,
	"./ur.js": 385,
	"./uz": 386,
	"./uz-latn": 387,
	"./uz-latn.js": 387,
	"./uz.js": 386,
	"./vi": 388,
	"./vi.js": 388,
	"./x-pseudo": 389,
	"./x-pseudo.js": 389,
	"./yo": 390,
	"./yo.js": 390,
	"./zh-cn": 391,
	"./zh-cn.js": 391,
	"./zh-hk": 392,
	"./zh-hk.js": 392,
	"./zh-tw": 393,
	"./zh-tw.js": 393
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 648;

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Segment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_class_transformer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Segment = /** @class */ (function () {
    function Segment() {
    }
    Segment.prototype.getType = function () {
        throw new Error("Method not implemented.");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_class_transformer__["Expose"])({ name: "segmentName" }),
        __metadata("design:type", String)
    ], Segment.prototype, "name", void 0);
    return Segment;
}());

//# sourceMappingURL=segment.model.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consultant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_security__ = __webpack_require__(37);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Consultant = /** @class */ (function (_super) {
    __extends(Consultant, _super);
    function Consultant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Consultant;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_security__["g" /* User */]));

//# sourceMappingURL=consultant.model.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationModel; });
/* unused harmony export AbpServerConfig */
/* unused harmony export SmartTestDriveServerConfig */
var LocalizationModel = /** @class */ (function () {
    function LocalizationModel() {
    }
    return LocalizationModel;
}());

var AbpServerConfig = /** @class */ (function () {
    function AbpServerConfig() {
    }
    return AbpServerConfig;
}());

var SmartTestDriveServerConfig = /** @class */ (function () {
    function SmartTestDriveServerConfig() {
    }
    return SmartTestDriveServerConfig;
}());

//# sourceMappingURL=localization.model.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingModel; });
/* unused harmony export General */
/* unused harmony export Security */
/* unused harmony export PasswordComplexity */
/* unused harmony export SmartTestDriveSetting */
/* unused harmony export TenantSide */
/* unused harmony export HostSide */
var AppSettingModel = /** @class */ (function () {
    function AppSettingModel() {
    }
    return AppSettingModel;
}());

var General = /** @class */ (function () {
    function General() {
    }
    return General;
}());

var Security = /** @class */ (function () {
    function Security() {
    }
    return Security;
}());

var PasswordComplexity = /** @class */ (function () {
    function PasswordComplexity() {
    }
    return PasswordComplexity;
}());

var SmartTestDriveSetting = /** @class */ (function () {
    function SmartTestDriveSetting() {
    }
    return SmartTestDriveSetting;
}());

var TenantSide = /** @class */ (function () {
    function TenantSide() {
    }
    return TenantSide;
}());

var HostSide = /** @class */ (function () {
    function HostSide() {
    }
    return HostSide;
}());

//# sourceMappingURL=app.setting.model.js.map

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkArea; });
var MarkArea = /** @class */ (function () {
    function MarkArea() {
    }
    return MarkArea;
}());

//# sourceMappingURL=mark.area.model.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkAndComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MarkModel; });
var MarkAndComment = /** @class */ (function () {
    function MarkAndComment() {
    }
    return MarkAndComment;
}());

var MarkModel = /** @class */ (function () {
    function MarkModel() {
    }
    return MarkModel;
}());

//# sourceMappingURL=mark.comment.model.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentAbstractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SegmentAbstractService = /** @class */ (function (_super) {
    __extends(SegmentAbstractService, _super);
    function SegmentAbstractService(http, url, clazzT, config) {
        var _this = _super.call(this, http, url, clazzT, config) || this;
        _this.clazzT = clazzT;
        _this.segmentType = new clazzT().getType();
        return _this;
    }
    SegmentAbstractService.prototype.setParentID = function (item, parentID) {
        var parent = new this.clazzT();
        parent.id = parentID;
        item.parent = parent;
        return item;
    };
    SegmentAbstractService.prototype.extractSegment = function (res, parentID) {
        var _this = this;
        var itemOrItems = _super.prototype.extractData.call(this, res);
        if (itemOrItems && parentID) {
            if (itemOrItems instanceof Array) {
                itemOrItems.forEach(function (item) {
                    _this.setParentID(item, parentID);
                });
            }
            else {
                this.setParentID(itemOrItems, parentID);
            }
        }
        return itemOrItems;
    };
    SegmentAbstractService.prototype.search = function (parentID) {
        var _this = this;
        this.url = __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* Config */].api.GetVehicleSegments;
        return this.httpClient.post(this.url, {
            "segmentTypeEnum": this.segmentType,
            'parentSegmentId': parentID || null
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return _this.extractSegment(res, parentID); })).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) { return _this.handleError(err); }));
    };
    return SegmentAbstractService;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_http_client__["e" /* IvtHttpService */]));

//# sourceMappingURL=segment.abstract.service.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_insomnia__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_setting_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_config_local_setting_model__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_language_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_update_version_service__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = /** @class */ (function () {
    function MyApp(domSanitizer, translate, platform, config, modalCtrl, items, storageService, securityConfig, service, fileService, insomnia, settingService, utils, fileSvc, languageService, alertCtrl, loadingCtrl, updateVersionService) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.items = items;
        this.storageService = storageService;
        this.securityConfig = securityConfig;
        this.service = service;
        this.fileService = fileService;
        this.insomnia = insomnia;
        this.settingService = settingService;
        this.utils = utils;
        this.fileSvc = fileSvc;
        this.languageService = languageService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.updateVersionService = updateVersionService;
        this.menuSide = 'right';
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* FirstRunPage */];
        this.tenant = new __WEBPACK_IMPORTED_MODULE_3__ivt_security__["f" /* Tenant */]();
        this.avatar = "assets/icon/write_document.png";
        this.pages = [
            { no: 1, iconSrc: "icon_home", title: 'menu.home', component: 'ListMasterPage' },
            { no: 2, iconSrc: "icon_cal_checklist", title: 'menu.test_drive_reservation', component: 'ReservationPage' },
            { no: 3, iconSrc: "icon_guage", title: 'menu.test_drive', component: 'ReservationListPage' },
            { no: 4, iconSrc: "icon_survey", title: 'menu.cs_survey', component: 'CsSurveyPage' },
            { no: 5, iconSrc: "icon_carsearch", title: 'menu.vehicle_health_check', component: 'VehicleHealthCheckPage' },
            { no: 6, iconSrc: "icon_vehicle_list", title: 'menu.vehicle_list', component: 'VehicleListPage' },
            { no: 7, iconSrc: "icon_setting", title: 'menu.setting', component: 'SettingsPage' },
            // { no: 8, iconSrc: "icon_book", title: 'menu.manual', component: 'ManualPage' },
            { no: 9, iconSrc: "icon_logout", title: 'menu.logout', component: 'LoginPage' },
        ];
        this.languageService.onDirectionChanged(function (isRTL) {
            if (isRTL) {
                _this.menuSide = 'left';
                _this.platform.setDir(__WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* Config */].direction.rtl, true);
            }
            else {
                _this.menuSide = 'right';
                _this.platform.setDir(__WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* Config */].direction.ltr, true);
            }
        });
        this.initTranslate(); // this should be at the first line
        this.user = new __WEBPACK_IMPORTED_MODULE_3__ivt_security__["g" /* User */]();
        var securityService = this.service;
        securityService.processAfterLogin(function (result) {
            _this.avatar = null;
            _this.user = _this.service.getUser();
            if (_this.user) {
                if (_this.user.tenant)
                    _this.tenant = _this.user.tenant;
                if (_this.user.pictureID)
                    fileService.download(_this.user.pictureID).then(function (result) {
                        _this.avatar = result;
                    });
            }
            else {
                _this.user = new __WEBPACK_IMPORTED_MODULE_3__ivt_security__["g" /* User */]();
            }
        });
        var locale = window.navigator.language;
        __WEBPACK_IMPORTED_MODULE_11_moment__["locale"](locale);
        this.settingService.search().subscribe(function (_settings) {
            var _mapedSetting = _settings.find(function (_setting) { return _setting.name === 'Prevent Screen From Sleeping'; });
            if (_mapedSetting) {
                if (_mapedSetting.value.toString() === 'false') {
                    _this.insomnia.allowSleepAgain();
                }
                else {
                    _this.insomnia.keepAwake();
                }
            }
            else {
                _this.insomnia.allowSleepAgain();
            }
        });
        this.user = this.service.getUser();
        if (this.user) {
            if (this.user.tenant)
                this.tenant = this.user.tenant;
            if (this.user.pictureID)
                fileService.download(this.user.pictureID).then(function (result) {
                    _this.avatar = result;
                });
        }
        else {
            this.user = new __WEBPACK_IMPORTED_MODULE_3__ivt_security__["g" /* User */]();
        }
        platform.ready().then(function () {
            window.open('http://192.168.1.19/index.html');
            // platform.setDir(<DocumentDirection>LocalSettingModel.direction, true);
            platform.registerBackButtonAction(function () {
                // do nothing, disable back button from device
                // will implement later when there is new requirement
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            // this.splashScreen.hide();
            /* this.splashScreen.show();
      
             setTimeout(()=>{
               this.splashScreen.hide();
             },4000)*/
            // Sentry.init({ dsn: 'https://1105f08f77244b29807da44f617b22ef@sentry.io/120482' });
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* SplashPage */]);
            splash.present().then(function () {
                if (_this.platform.is('android')) {
                    _this.updateVersionService.updateVersionAndroid();
                }
            });
            _this.settingService.search().subscribe(function (_settings) {
                var _mapedSetting = _settings.find(function (_setting) { return _setting.name === __WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* Config */].setting.prevent_screen_from_sleeping; });
                if (_mapedSetting) {
                    if (_mapedSetting.value.toString() === 'false') {
                        _this.insomnia.allowSleepAgain();
                    }
                    else {
                        _this.insomnia.keepAwake();
                    }
                }
                else {
                    _this.insomnia.allowSleepAgain();
                }
            });
        });
        // this.storageService.save("vehicleList", this.items.items);
        this.securityConfig.onUnAuthorized = function (err) {
            _this.nav.setRoot('LoginPage');
        };
        this.reminderList = [];
        var i = 0;
        while (i < 10) {
            i++;
            this.reminderList.push({
                id: i,
                name: "Test Drive appointment is approaching " + i,
                vehicle: "TUCSON (52 3679)",
                driver: "LEE GUHA (010-1234-5678)",
                time: "03/09/2018 11:30AM - 12:30PM"
            });
        }
        this.storageService.save("reminderList", this.reminderList);
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        this.translate.use(__WEBPACK_IMPORTED_MODULE_15__models_config_local_setting_model__["a" /* LocalSettingModel */].lang); // Set your language here
        // will check later
        // const browserLang = this.translate.getBrowserLang();
        // if (browserLang) {
        //   if (browserLang === 'zh') {
        //     const browserCultureLang = this.translate.getBrowserCultureLang();
        //     if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
        //       this.translate.use('zh-cmn-Hans');
        //     } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
        //       this.translate.use('zh-cmn-Hant');
        //     }
        //   } else {
        //     this.translate.use(this.translate.getBrowserLang());
        //   }
        // } else {
        //   this.translate.use('ar'); // Set your language here
        // }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        switch (page.no) {
            case 1:
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MainPage */], { opentab: __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* HomeTab */] });
                break;
            case 2:
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MainPage */], { opentab: 1 });
                break;
            case 3:
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MainPage */], { opentab: 2 });
                break;
            case 4:
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MainPage */], { opentab: 3 });
                break;
            // case 8: {
            //   window.open('http://www.google.com', '_system');
            //   break;
            // }
            // case 8:
            //   if (!this.utils.isBrowser()) {
            //     this.fileSvc.viewDocument('www/assets/doc/SmartTestDriveManual.pdf', 'application/pdf', {
            //       title: 'Manual'
            //     });
            //   }
            //   break;
            case 9: {
                this.logout();
                break;
            }
            default:
                this.nav.push(page.component);
                break;
        }
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        var dealerCode = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* DEALER_CODE */]);
        var username = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_14__pages_login_login__["c" /* USER_NAME */]);
        localStorage.clear();
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* DEALER_CODE */], dealerCode);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_14__pages_login_login__["c" /* USER_NAME */], username);
        this.nav.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/app/app.component.html"*/'<ion-menu *ngIf="menuSide == \'right\'" side="right" [content]="content">\n    <ng-container  *ngTemplateOutlet="contentMenu">\n    </ng-container>\n</ion-menu>\n<ion-menu *ngIf="menuSide == \'left\'" side="left" [content]="content">\n    <ng-container  *ngTemplateOutlet="contentMenu">\n    </ng-container>\n</ion-menu>\n\n<ng-template #contentMenu>\n        <ion-content>\n                <div class="menu-header">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col col-3>\n                                <ion-avatar item-start>\n                                    <img *ngIf="avatar" [src]="domSanitizer.bypassSecurityTrustUrl(avatar)" />\n                                </ion-avatar>\n                            </ion-col>\n                            <ion-col>\n                                <ion-row>\n                                    <h2>{{user.name}}</h2>\n                                </ion-row>\n                                <ion-row>\n                                    <p>{{tenant.name}}</p>\n                                </ion-row>\n                                <ion-row>\n                                    <p>{{user.email}}</p>\n                                </ion-row>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n        \n                <ion-list>\n                    <button menuClose detail-none ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                        <ion-icon [name]="p.iconSrc" item-start></ion-icon>\n                        {{p.title | translate}}\n                    </button>\n                </ion-list>\n            </ion-content>\n</ng-template>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/app/app.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* VehicleItems */],
            __WEBPACK_IMPORTED_MODULE_3__ivt_security__["e" /* IvtStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__ivt_security__["b" /* IvtSecurityConfig */],
            __WEBPACK_IMPORTED_MODULE_3__ivt_security__["d" /* IvtSecurityService */],
            __WEBPACK_IMPORTED_MODULE_7__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_insomnia__["a" /* Insomnia */],
            __WEBPACK_IMPORTED_MODULE_10__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_12__services_util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_7__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_16__services_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_17__services_update_version_service__["a" /* UpdateVersionService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeCheckProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RealTimeCheckProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RealTimeCheckProvider = /** @class */ (function () {
    function RealTimeCheckProvider(storage) {
        this.storage = storage;
        this.projects = [];
        this.projectActive = false;
        this.secondsElapsed = 0;
    }
    RealTimeCheckProvider.prototype.load = function (id) {
        //스토리지로부터 배열 가져와서 배열에 다시 저장 후 마지막 레코드가 기록 중이였던거면, 다시 해당 레코드(마지막 레코드)에 기록 재개
        var _this = this;
        this.storage.get('testDriveRecords' + id || null).then(function (projects) {
            if (projects) {
                console.log("project 스토리지로 부터 가져옴, projects있음.");
                for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
                    var project = projects_1[_i];
                    var savedProject = void 0; /* = new RealTimeItems(project.vehicleId, new Date(project.lastChecked), project.totalSeconds, project.active, project.id, project.vehicleDrivingStatusEnum, project.currentLatitude, project.currentLongitude);*/
                    _this.projects.push(savedProject);
                    console.log("savedProject: ", savedProject);
                }
                if (projects[projects.length - 1].active) {
                    _this.startTiming(_this.projects[_this.projects.length], true, id);
                }
            }
        });
        this.storage.get('permatimerTime').then(function (time) {
            _this.secondsElapsed = time;
        });
    };
    RealTimeCheckProvider.prototype.save = function (id) {
        this.storage.set('testDriveRecords' + id || null, this.projects);
        this.storage.set('permatimerTime', this.secondsElapsed);
    };
    RealTimeCheckProvider.prototype.startTiming = function (project, restarting, id) {
        var _this = this;
        this.projectActive = true;
        if (!restarting) {
            project.setIsActive(true);
            project.setLastChecked(new Date());
        }
        this.timerInterval = setInterval(function () {
            var now = new Date();
            var timeDifference = now.getTime() - project.lastChecked.getTime();
            var seconds = timeDifference / 1000;
            _this.secondsElapsed += seconds;
            project.addToTotalSeconds(seconds);
            project.setLastChecked(now);
            _this.save(id);
        }, 1000);
    };
    RealTimeCheckProvider.prototype.stopTiming = function (project, id) {
        var totalTimeElapsed = this.secondsElapsed;
        this.projectActive = false;
        project.setIsActive(false);
        clearInterval(this.timerInterval);
        this.timerInterval = false;
        this.secondsElapsed = 0;
        this.save(id);
        return totalTimeElapsed;
    };
    RealTimeCheckProvider.prototype.increaseSeconds = function (project, amount, id) {
        project.addToTotalSeconds(amount);
        this.save(id);
    };
    RealTimeCheckProvider.prototype.decreaseSeconds = function (project, amount, id) {
        project.deductFromTotalSeconds(amount);
        this.save(id);
    };
    RealTimeCheckProvider.prototype.addProject = function (project, id) {
        this.projects.push(project);
        this.save();
    };
    RealTimeCheckProvider.prototype.editProject = function (project, title, id) {
        project.setName(title);
        this.save(id);
    };
    RealTimeCheckProvider.prototype.removeProject = function (project, id) {
        var index = this.projects.indexOf(project);
        if (index > -1) {
            this.projects.splice(index, 1);
            this.save(id);
        }
    };
    RealTimeCheckProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], RealTimeCheckProvider);
    return RealTimeCheckProvider;
}());

//# sourceMappingURL=real-time-check.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_http_client_config__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_security_config__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setting_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vehicle_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vehicle_type_service__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__security_security_service__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_service__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mark_service__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commentAndPhoto_service__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reservation_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__document_service__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__survey_question_service__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__survey_response_service__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__password_service__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__camera_service__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bluetooth_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dialog_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__loading_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__driving_record_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__geo_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__mark_comment_service__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_setting_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__vehicle_odometer_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__task_queue_service__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__progress_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__developer_service__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__std_interceptor__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ui_http_injector__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__language_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__notification_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__version_service__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__update_version_service__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_android_permissions__ = __webpack_require__(718);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppServicesModule = /** @class */ (function () {
    function AppServicesModule() {
    }
    AppServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["d" /* IvtHttpClientModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__ivt_security__["c" /* IvtSecurityModule */].forRoot(),
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__ivt_http_client__["c" /* IvtHttpClientConfig */], useClass: __WEBPACK_IMPORTED_MODULE_3__app_http_client_config__["b" /* HttpClientConfig */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__ivt_security__["b" /* IvtSecurityConfig */], useClass: __WEBPACK_IMPORTED_MODULE_4__security_security_config__["a" /* SecurityConfig */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__ivt_security__["d" /* IvtSecurityService */], useClass: __WEBPACK_IMPORTED_MODULE_8__security_security_service__["a" /* SecurityService */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_33__std_interceptor__["a" /* STDClientInterceptor */], multi: true
                },
                __WEBPACK_IMPORTED_MODULE_15__reservation_service__["a" /* ReservationService */],
                __WEBPACK_IMPORTED_MODULE_16__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__document_service__["a" /* DocumentService */],
                __WEBPACK_IMPORTED_MODULE_5__setting_service__["a" /* SettingService */],
                __WEBPACK_IMPORTED_MODULE_6__vehicle_service__["a" /* VehicleService */],
                __WEBPACK_IMPORTED_MODULE_7__vehicle_type_service__["c" /* VehicleTypeService */],
                __WEBPACK_IMPORTED_MODULE_7__vehicle_type_service__["a" /* ModelYearService */],
                __WEBPACK_IMPORTED_MODULE_7__vehicle_type_service__["b" /* TrimService */],
                __WEBPACK_IMPORTED_MODULE_9__util_service__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_10__toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_11__customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_12__mark_service__["a" /* MarkService */],
                __WEBPACK_IMPORTED_MODULE_14__file_service__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_13__commentAndPhoto_service__["a" /* VehcileHealthCheckService */],
                __WEBPACK_IMPORTED_MODULE_18__survey_question_service__["a" /* SurveyQuestionService */],
                __WEBPACK_IMPORTED_MODULE_19__survey_response_service__["a" /* SurveyResponseService */],
                __WEBPACK_IMPORTED_MODULE_20__password_service__["a" /* PasswordService */],
                __WEBPACK_IMPORTED_MODULE_21__camera_service__["a" /* CameraService */],
                __WEBPACK_IMPORTED_MODULE_22__bluetooth_service__["a" /* BluetoothService */],
                __WEBPACK_IMPORTED_MODULE_23__dialog_service__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_24__loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_25__driving_record_service__["b" /* DrivingRecordService */],
                __WEBPACK_IMPORTED_MODULE_26__geo_service__["a" /* GeoService */],
                __WEBPACK_IMPORTED_MODULE_27__mark_comment_service__["a" /* VHCService */],
                __WEBPACK_IMPORTED_MODULE_28__app_setting_service__["a" /* AppSettingService */],
                __WEBPACK_IMPORTED_MODULE_29__vehicle_odometer_service__["a" /* VehicleOdometerService */],
                __WEBPACK_IMPORTED_MODULE_30__task_queue_service__["c" /* TaskQueueService */],
                __WEBPACK_IMPORTED_MODULE_31__progress_service__["a" /* ProgressService */],
                __WEBPACK_IMPORTED_MODULE_32__developer_service__["a" /* DeveloperService */],
                __WEBPACK_IMPORTED_MODULE_35__ui_http_injector__["a" /* UIHttpInjector */],
                __WEBPACK_IMPORTED_MODULE_36__language_service__["a" /* LanguageService */],
                __WEBPACK_IMPORTED_MODULE_37__notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_38__version_service__["a" /* VersionService */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_39__update_version_service__["a" /* UpdateVersionService */]
            ]
        })
    ], AppServicesModule);
    return AppServicesModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecurityConfig = /** @class */ (function (_super) {
    __extends(SecurityConfig, _super);
    function SecurityConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiUrl = __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* Config */].api.Login;
        _this.rememberLogin = true;
        return _this;
    }
    SecurityConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])()
    ], SecurityConfig);
    return SecurityConfig;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_security__["b" /* IvtSecurityConfig */]));

//# sourceMappingURL=security.config.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ivt_security__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_userInfo_model__ = __webpack_require__(401);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SecurityService = /** @class */ (function (_super) {
    __extends(SecurityService, _super);
    function SecurityService(http, db, config) {
        return _super.call(this, http, db, config) || this;
    }
    SecurityService.prototype.afterLogin = function (res) {
        var _this = this;
        if (res.code === __WEBPACK_IMPORTED_MODULE_3__ivt_http_client__["a" /* APICode */].Success) {
            var user_1 = new __WEBPACK_IMPORTED_MODULE_0__ivt_security__["g" /* User */]();
            user_1.token = res.data;
            this.storeUserCredentials(user_1);
            this.getCurrentLoginInformations().subscribe(function (result) {
                user_1 = _this.getCurrentLoginInfor(result);
                user_1.token = res.data;
                _this.storeUserCredentials(user_1);
                _this.callbackSuccess();
            });
        }
    };
    SecurityService.prototype.upateProfile = function (user) {
        this.storeUserCredentials(user);
        this.callbackSuccess();
    };
    SecurityService.prototype.processAfterLogin = function (success) {
        this.callbackSuccess = success;
    };
    SecurityService.prototype.logout = function () {
        return _super.prototype.logout.call(this);
    };
    SecurityService.prototype.getCurrentLoginInformations = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].api.GetCurrentLoginInformations;
        return this.http.post(url, {});
    };
    ;
    SecurityService.prototype.getCurrentLoginInfor = function (response) {
        var user = new __WEBPACK_IMPORTED_MODULE_5__models_userInfo_model__["a" /* UserInfoModel */]();
        response = response.data;
        user.id = response.user.id;
        user.email = response.user.emailAddress;
        user.pictureID = response.user.profilePictureId;
        user.name = response.user.name;
        user.surname = response.user.surname;
        user.username = response.user.userName;
        user.tenant = new __WEBPACK_IMPORTED_MODULE_0__ivt_security__["f" /* Tenant */]();
        user.tenant.logoID = response.tenant.logoId;
        user.tenant.name = response.tenant.name;
        user.tenant.termsAndConditions = response.tenant.termsAndConditions;
        return user;
    };
    SecurityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ivt_security__["e" /* IvtStorageService */], __WEBPACK_IMPORTED_MODULE_0__ivt_security__["b" /* IvtSecurityConfig */]])
    ], SecurityService);
    return SecurityService;
}(__WEBPACK_IMPORTED_MODULE_0__ivt_security__["a" /* IvtSecurityAbstractService */]));

//# sourceMappingURL=security.service.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STDClientInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_config_local_setting_model__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var STDClientInterceptor = /** @class */ (function () {
    function STDClientInterceptor() {
    }
    STDClientInterceptor.prototype.intercept = function (req, next) {
        var clonedReq = null;
        clonedReq = req.clone({
            setParams: {
                "Abp.Localization.CultureName": __WEBPACK_IMPORTED_MODULE_1__models_config_local_setting_model__["a" /* LocalSettingModel */].lang
            }
        });
        req = req.clone(clonedReq);
        return next.handle(req);
    };
    STDClientInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], STDClientInterceptor);
    return STDClientInterceptor;
}());

//# sourceMappingURL=std.interceptor.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl, translateSvc) {
        this.toastCtrl = toastCtrl;
        this.translateSvc = translateSvc;
    }
    ToastService.prototype.success = function (message) {
        return this.showMessage(message);
    };
    ToastService.prototype.error = function (message) {
        return this.showMessage(message);
    };
    ToastService.prototype.showMessage = function (message) {
        var _this = this;
        return this.translateSvc.get(message).toPromise().then(function (localizedMsg) {
            _this.toastCtrl.create({
                message: localizedMsg,
                duration: 3000
            }).present();
        });
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ivt_http_client__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_http_client_config__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_document_viewer__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loading_service__ = __webpack_require__(98);
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













var FileService = /** @class */ (function () {
    function FileService(transfer, file, http, toastSvc, utils, httpClientConfig, loadingSvc, platform, document, translate) {
        var _this = this;
        this.transfer = transfer;
        this.file = file;
        this.http = http;
        this.toastSvc = toastSvc;
        this.utils = utils;
        this.httpClientConfig = httpClientConfig;
        this.loadingSvc = loadingSvc;
        this.platform = platform;
        this.document = document;
        this.translate = translate;
        this.uploadUrl = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */].api.UploadPicture;
        this.uploadProfileUrl = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */].api.UploadProfilePicture;
        this.downloadUrl = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */].api.GetPicture;
        this.downloadUserManualURL = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */].api.DownloadUserManualAsPdf;
        this.canCache = false;
        this.cachedFolder = null;
        this.FILE_TYPE = 'image/jpeg';
        this.FILE_EXTENSION = '.jpg';
        this.platform.ready().then(function (_) {
            _this.fileTransfer = _this.transfer.create();
            _this.cachedFolder = _this.file.cacheDirectory + 'assets/';
            _this.file.checkDir(_this.file.cacheDirectory, 'assets').then(function (_) {
                _this.canCache = true;
            }).catch(function (err) {
                _this.file.createDir(_this.file.cacheDirectory, 'assets', false).then(function (_) {
                    _this.canCache = true;
                }).catch(function (err) {
                    console.error('Cannot create /assets folder');
                    _this.canCache = false;
                });
            });
        });
    }
    FileService.prototype.viewDocument = function (url, contentType, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.IamReady()];
                    case 1:
                        _a.sent();
                        this.document.viewDocument(this.file.applicationDirectory + url, contentType, options);
                        return [2 /*return*/];
                }
            });
        });
    };
    FileService.prototype.IamReady = function () {
        var _this = this;
        this.translate.get('msg.uploading_images').subscribe(function (value) {
            _this.uploadingImagesString = value;
        });
        return this.platform.ready();
    };
    /**
     *
     * @param fileUrl: dataURI or FileSystem URL
     *
     * How to use:
     *
     * this.fileSvc.upload(files.item(0)).then(
     * (result: APIResponse) => {
     *   console.log('result....', result);
     * },
     * (error) => {
     *   console.log('Error uploading...', error);
     * }
     *
     */
    FileService.prototype.upload = function (fileUrl, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.uploadCommon(fileUrl, options, this.uploadUrl)];
            });
        });
    };
    FileService.prototype.uploadProfile = function (fileUrl, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.uploadCommon(fileUrl, options, this.uploadProfileUrl)];
            });
        });
    };
    /**
     *
     * @param id
     * On Browser: this will return URL.createObjectURL(), so remember to revoke URL after using
     * On Device: this will return base64 string
     */
    FileService.prototype.download = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.IamReady()];
                    case 1:
                        _a.sent();
                        _url = this.downloadUrl + ("?id=" + id);
                        if (this.utils.isBrowser()) {
                            return [2 /*return*/, this.downloadBrowser(_url)];
                        }
                        else {
                            return [2 /*return*/, this.downloadNative(_url, id + this.FILE_EXTENSION)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileService.prototype.downloadUserManual = function () {
        return this.downloadBrowser(this.downloadUserManualURL);
    };
    FileService.prototype.uploadCommon = function (fileUrl, options, uploadUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, loader, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.IamReady()];
                    case 1:
                        _a.sent();
                        options.fileKey = "file";
                        result = null;
                        return [4 /*yield*/, this.loadingSvc.create('msg.uploading_images')];
                    case 2:
                        loader = _a.sent();
                        loader.present();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 8, 9, 10]);
                        if (!this.utils.isBrowser()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.uploadBrowser(this.utils.dataURIToBlob(fileUrl), options, uploadUrl).catch(function (err) { return _this.handleUploadError(err); })];
                    case 4:
                        result = _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.uploadNative(fileUrl, options, uploadUrl).catch(function (err) { return _this.handleUploadError(err); })];
                    case 6:
                        result = _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        ex_1 = _a.sent();
                        result = ex_1;
                        return [3 /*break*/, 10];
                    case 9:
                        loader.dismiss();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, result];
                }
            });
        });
    };
    FileService.prototype.downloadBrowser = function (_url) {
        var _this = this;
        return this.http.get(_url, {
            responseType: "blob"
        }).toPromise().then(function (res) {
            return URL.createObjectURL(res);
        }, function (reject) { return _this.handleDownloadError(reject); });
    };
    FileService.prototype.downloadNative = function (_url, fileName) {
        var _this = this;
        return this.checkLocalFile(fileName).then(function (_) {
            return _this.readLocalFile(fileName);
        }).catch(function (err) {
            return _this.downloadToLocal(_url, fileName).then(function (entry) { return _this.readLocalFile(entry.name); }, function (reject) { return _this.handleDownloadError(reject); });
        });
    };
    FileService.prototype.readFileWithoutPath = function (fileName) {
        var folder = '';
        var file = '';
        if (this.platform.is('android')) {
            fileName = fileName.replace(this.file.externalCacheDirectory, '');
            if (fileName.indexOf('?') > 0) {
                fileName = fileName.substr(0, fileName.indexOf('?'));
            }
            folder = this.file.externalCacheDirectory;
            file = fileName;
        }
        else {
            var lastIndex = fileName.lastIndexOf("/");
            folder = fileName.substr(0, lastIndex + 1);
            file = fileName.substr(lastIndex + 1);
        }
        return this.file.readAsDataURL(folder, file).then(function (base64) {
            return base64;
        }).catch(function (err) {
            console.error('Error while reading cached asset file to base64');
            return '';
        });
    };
    FileService.prototype.readLocalFile = function (fileName) {
        return this.file.readAsDataURL(this.cachedFolder, fileName).then(function (base64) {
            return base64;
        }).catch(function (err) {
            console.error('Error while reading cached asset file to base64');
            return '';
        });
    };
    FileService.prototype.downloadToLocal = function (url, fileName) {
        return this.fileTransfer.download(url, this.cachedFolder + fileName, true, {
            headers: {
                "Authorization": this.httpClientConfig.getAuthorizationHeader(),
                "Content-Type": this.FILE_TYPE
            }
        });
    };
    FileService.prototype.checkLocalFile = function (fileName) {
        return this.file.checkFile(this.cachedFolder, fileName);
    };
    FileService.prototype.uploadBrowser = function (file, options, uploadUrl) {
        var _this = this;
        var formData = new FormData();
        formData.append(options.fileKey, file, options.fileName);
        return this.http.post(uploadUrl, formData, {
            reportProgress: true
        }).toPromise()
            .then(function (res) {
            if (res.code === __WEBPACK_IMPORTED_MODULE_5__ivt_http_client__["a" /* APICode */].Success) {
                return res.data.id;
            }
            else {
                return Promise.reject(res);
            }
        }, function (rejection) { return _this.handleUploadError(rejection); });
    };
    FileService.prototype.uploadNative = function (fileUrl, options, uploadUrl) {
        var _this = this;
        return this.fileTransfer.upload(fileUrl, uploadUrl, {
            fileKey: 'file',
            headers: {
                "Authorization": this.httpClientConfig.getAuthorizationHeader()
            }
        }).then(function (result) {
            try {
                var testDriveResponse = JSON.parse(result.response);
                if (testDriveResponse.success === true) {
                    return testDriveResponse.result.id;
                }
                else {
                    return Promise.reject(testDriveResponse);
                }
            }
            catch (ex) {
                console.error('Cannot extract APITestDriveResponse ', ex);
                return Promise.reject(result);
            }
        }, function (rejection) { return _this.handleUploadError(rejection); });
    };
    FileService.prototype.handleDownloadError = function (err) {
        // this.toastSvc.error('msg.file_download_failed');
        return this.handleError(err);
    };
    FileService.prototype.handleUploadError = function (err) {
        // this.toastSvc.error('msg.file_upload_failed');
        return this.handleError(err);
    };
    FileService.prototype.handleError = function (err) {
        console.error(err);
        var res = new __WEBPACK_IMPORTED_MODULE_5__ivt_http_client__["b" /* APIResponse */]();
        if (err instanceof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpErrorResponse */]) {
            res.code = err.status.toString();
            res.message = err.message;
            // errorMessage = err.message;
        }
        else if (err instanceof __WEBPACK_IMPORTED_MODULE_5__ivt_http_client__["b" /* APIResponse */]) {
            res = err;
            // errorMessage = err.message;
        }
        else if (err instanceof __WEBPACK_IMPORTED_MODULE_8__app_http_client_config__["a" /* APITestDriveResponse */] || err.error) {
            // errorMessage = err.error.message;
            res.code = err.error.code;
            res.message = err.error.message;
        }
        else {
            // try from FileTransferError
            if (err.http_status == '500') {
                // file not found
                res.message = 'msg.file_not_found';
                res.code = '500';
            }
            else {
                // try extracting message from FileUploadResult
                res.code = __WEBPACK_IMPORTED_MODULE_5__ivt_http_client__["a" /* APICode */].Undefined;
                if (err.error && err.error.message) {
                    res.message = err.error.message;
                }
                else {
                    res.message = 'msg.unhandled_error';
                }
            }
        }
        this.toastSvc.error(res.message);
        return Promise.reject(res);
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_5__ivt_http_client__["c" /* IvtHttpClientConfig */],
            __WEBPACK_IMPORTED_MODULE_12__loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], FileService);
    return FileService;
}());

//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* unused harmony export LanguageModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_config_local_setting_model__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LanguageService = /** @class */ (function () {
    function LanguageService(platform, translateService) {
        this.platform = platform;
        this.translateService = translateService;
        this.listener = new Map();
        this.lstLanguage = [];
        var lang = new LanguageModel();
        lang.direction = "ltr";
        lang.name = "en";
        lang.value = "English";
        this.lstLanguage.push(lang);
        lang = new LanguageModel();
        lang.direction = "rtl";
        lang.name = "ar-AE";
        lang.value = "Saudi Arabia";
        this.lstLanguage.push(lang);
        lang = new LanguageModel();
        lang.direction = "ltr";
        lang.name = "es";
        lang.value = "Español";
        this.lstLanguage.push(lang);
        this.currentLanguage = this.get(__WEBPACK_IMPORTED_MODULE_2__models_config_local_setting_model__["a" /* LocalSettingModel */].lang);
    }
    LanguageService.prototype.get = function (id) {
        var language = this.lstLanguage.find(function (_item) {
            return _item.name === id;
        });
        return language;
    };
    LanguageService.prototype.onDirectionChanged = function (fn) {
        var _this = this;
        var key = Math.random();
        this.listener.set(key, fn);
        fn(this.currentLanguage.direction == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].direction.rtl ? true : false);
        return {
            unsubscribe: function () {
                _this.listener.delete(key);
            }
        };
    };
    LanguageService.prototype.setDirectionChanged = function () {
        var _this = this;
        this.listener.forEach(function (element) {
            element(_this.currentLanguage.direction == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].direction.rtl ? true : false);
            // allow subcrible 
        });
    };
    LanguageService.prototype.changeLanguage = function (lang) {
        var _this = this;
        this.currentLanguage = this.get(lang);
        // LocalSettingModel.direction = language.direction;
        // LocalSettingModel.culture = language.culture;
        __WEBPACK_IMPORTED_MODULE_2__models_config_local_setting_model__["a" /* LocalSettingModel */].lang = lang;
        this.platform.ready().then(function () {
            // this.platform.setDir(<DocumentDirection>  this.currentLanguage.direction, true);
            _this.translateService.use(__WEBPACK_IMPORTED_MODULE_2__models_config_local_setting_model__["a" /* LocalSettingModel */].lang);
            _this.setDirectionChanged();
        });
    };
    LanguageService.prototype.search = function () {
        return this.lstLanguage;
    };
    LanguageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LanguageService);
    return LanguageService;
}());

var LanguageModel = /** @class */ (function () {
    function LanguageModel() {
    }
    return LanguageModel;
}());

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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



var LoadingService = /** @class */ (function () {
    function LoadingService(translate, loadingCtrl) {
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.create = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var translated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translate.get(message).toPromise()];
                    case 1:
                        translated = _a.sent();
                        return [2 /*return*/, this.loadingCtrl.create({
                                content: translated
                            })];
                }
            });
        });
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseReservation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReservationDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReservationModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseReservation = /** @class */ (function () {
    function BaseReservation() {
        this.vehicleId = 0;
        this.vehicleDisplayName = null;
        this.customerFullName = null;
        this.customerPhoneNumber = null;
        this.customerEmailAddress = null;
        this.recommenderFullName = null;
    }
    return BaseReservation;
}());

var Reservation = /** @class */ (function (_super) {
    __extends(Reservation, _super);
    function Reservation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appointmentFromTime = null;
        _this.appointmentToTime = null;
        return _this;
    }
    return Reservation;
}(BaseReservation));

var ReservationDocument = /** @class */ (function (_super) {
    __extends(ReservationDocument, _super);
    function ReservationDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReservationDocument;
}(BaseReservation));

var ReservationModel = /** @class */ (function (_super) {
    __extends(ReservationModel, _super);
    function ReservationModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReservationModel;
}(ReservationDocument));

//# sourceMappingURL=reservation.model.js.map

/***/ })

},[493]);
//# sourceMappingURL=main.js.map