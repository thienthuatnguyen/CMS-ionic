webpackJsonp([17],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationListPageModule", function() { return ReservationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservation_list__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReservationListPageModule = /** @class */ (function () {
    function ReservationListPageModule() {
    }
    ReservationListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__reservation_list__["a" /* ReservationListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__reservation_list__["a" /* ReservationListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ReservationListPageModule);
    return ReservationListPageModule;
}());

//# sourceMappingURL=reservation-list.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_reservation_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ivt_security__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_toast_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core_src_translate_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_camera_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_file_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_vehicle_odometer_service__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ReservationListPage = /** @class */ (function () {
    function ReservationListPage(navCtrl, navParams, viewCtrl, service, util, translateService, toastService, securityService, storeage, modalCtrl, camera, fileSvc, vehicleOdometerService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.util = util;
        this.translateService = translateService;
        this.toastService = toastService;
        this.securityService = securityService;
        this.storeage = storeage;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.fileSvc = fileSvc;
        this.vehicleOdometerService = vehicleOdometerService;
        this.currentUser = false;
        this.list = [];
        this.reservationList = [];
        this.resultList = [];
        this.displayDateFormat = __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].date.displayShortTime;
        var userInfor = this.securityService.getUser();
        this.userId = userInfor.id;
        this.today = __WEBPACK_IMPORTED_MODULE_5_moment___default()(__WEBPACK_IMPORTED_MODULE_5_moment___default()().format(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].date.YYYYMMDD), __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].date.YYYYMMDD).toDate();
        this.translateService.get('reservation.you_can_only_proceed_with_your_reservation').subscribe(function (value) {
            _this.validateMessage = value;
        });
        this.getAppSetting();
    }
    ReservationListPage.prototype.getReservationList = function (searchCriteria) {
        var _this = this;
        this.service.getReservationList(searchCriteria).subscribe(function (reservations) {
            _this.list = _this.util.transformToReservationList(reservations);
            _this.resultList = _this.util.transformToGroupBy(_this.list, 'appointmentDateLocal');
        }, function (fail) {
            // to do will show error message 
        });
    };
    ReservationListPage.prototype.getAppSetting = function () {
        this.appSetting = this.storeage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].AppSetting);
    };
    ReservationListPage.prototype.ionViewDidEnter = function () {
        this.params = {
            appointmentFromDateLocal: __WEBPACK_IMPORTED_MODULE_5_moment___default()().format(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].date.YYYYMMDD)
        };
        this.getReservationList(this.params);
    };
    ReservationListPage.prototype.toggleUser = function () {
        this.currentUser = !this.currentUser;
        var userItems = this.list;
        if (this.currentUser)
            userItems = __WEBPACK_IMPORTED_MODULE_2_underscore__["_"].where(this.list, { consultantUserId: this.userId });
        this.resultList = this.util.transformToGroupBy(userItems, 'appointmentDateLocal');
    };
    ReservationListPage.prototype.changeDate = function (selectedDate) {
        this.params = {
            appointmentFromDateLocal: __WEBPACK_IMPORTED_MODULE_5_moment___default()(selectedDate).format(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].date.YYYYMMDD),
            appointmentToDateLocal: __WEBPACK_IMPORTED_MODULE_5_moment___default()(selectedDate).format(__WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].date.YYYYMMDD)
        };
        this.getReservationList(this.params);
    };
    ReservationListPage.prototype.showCreateDocument = function (applicationStatusEnum) {
        return __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].reservation.createDocument.indexOf(applicationStatusEnum) >= 0;
    };
    ReservationListPage.prototype.showEditDocument = function (applicationStatusEnum) {
        return __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].reservation.editDocument.indexOf(applicationStatusEnum) < 0;
    };
    ReservationListPage.prototype.showStartDriver = function (applicationStatusEnum) {
        return __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* Config */].reservation.startDrive.indexOf(applicationStatusEnum) >= 0;
    };
    /**
     * Perform a service for the proper items.
     */
    ReservationListPage.prototype.searchByKeyWord = function (ev) {
        if (ev.target.value === undefined)
            this.resultList = this.util.transformToGroupBy(this.list, 'appointmentDateLocal');
        else {
            var result = __WEBPACK_IMPORTED_MODULE_2_underscore__["_"].filter(this.list, function (item) {
                return (item.customerFullName.toLowerCase().indexOf(ev.target.value.toLowerCase()) >= 0
                    || item.vehicleDisplayName.toLowerCase().indexOf(ev.target.value.toLowerCase()) >= 0
                    || item.consultantUserName.toLowerCase().indexOf(ev.target.value.toLowerCase()) >= 0);
            });
            this.resultList = this.util.transformToGroupBy(result, 'appointmentDateLocal');
        }
    };
    /**
     * Navigate to the detail page for this item.
     */
    ReservationListPage.prototype.editReservation = function (item) {
        this.navCtrl.push('ReservationPage', {
            item: item
        });
    };
    ReservationListPage.prototype.updateDocument = function (item) {
        this.navCtrl.push('DocumentPage', {
            item: item
        });
    };
    ReservationListPage.prototype.openTestDriveReady = function (item) {
        if (this.isOwnReservation(item)) {
            // if(this.appSetting.smartTestDriveSetting.tenantSide.performTakingOdometerPhotoBeforeAndAfterTestDrive) {
            //   let profileModal = this.modalCtrl.create(DriveShootingPage, {
            //     pageType: 'odometer',
            //     page: 'reservation-list'
            //   });
            //   profileModal.onDidDismiss(data => {
            //     this.camera.getPicture().then(
            //       _base64 => {      
            //         this.fileSvc.upload(_base64, { fileName: this.generateUniqueFileName() }).then(
            //           _id => {
            //             let vehicleOdometerModel = new VehicleOdometerModel();
            //             vehicleOdometerModel.applicationId = item.id;
            //             vehicleOdometerModel.odometerPictureId = _id;
            //             this.vehicleOdometerService.save(vehicleOdometerModel).subscribe(res => {
            this.navCtrl.setRoot('TestDriveReadyPage', {
                item: item
            });
            //           })
            //         }    
            //       )
            //     }
            //   )
            // });
            // profileModal.present();
            // }
            // else {
            //   this.navCtrl.setRoot('TestDriveReadyPage', {
            //     item: item
            //   });
            // }
        }
        else {
            this.toastService.error(this.validateMessage);
        }
    };
    ReservationListPage.prototype.isOwnReservation = function (item) {
        if (item.consultantUserId)
            return item.consultantUserId == this.userId;
        return false;
    };
    ReservationListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReservationListPage.prototype.generateUniqueFileName = function () {
        return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
    };
    ReservationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservation-list',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/reservation-list/reservation-list.html"*/'<!--\n  Generated template for the ReservationListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <!--뒤로가기 버튼. 취소버튼.-->\n    <!--    <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n          </ion-buttons>-->\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'RESERVATION_LIST_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-toolbar class="search">\n    <ion-searchbar (ionInput)="searchByKeyWord($event)" placeholder="{{ \'SEARCH_PLACEHOLDER\' | translate }}"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only color="dark" (click)="datePicker.open()">\n        <ion-icon name="icon_calendar"></ion-icon>\n      </button>\n      <ion-datetime hidden #datePicker no-padding displayFormat="MM/DD/YYYY"  pickerFormat="MM/DD/YYYY" [(ngModel)]="myDate" (ngModelChange)="changeDate(myDate)">\n      </ion-datetime>\n      <button ion-button icon-only color="dark" (click) = "toggleUser()">\n        <ion-icon *ngIf="!currentUser" name="icon_people"></ion-icon>\n        <ion-icon *ngIf="currentUser" name="icon_man"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  <ion-list class="reservation-list">\n    <ng-container *ngFor="let itemByDate of resultList">\n      <ion-list-header>\n        {{itemByDate.key | date: displayDateFormat}}\n        <span class="box" *ngIf="today==itemByDate.key">{{ \'reservation_list.today\' | translate }}</span>\n      </ion-list-header>\n      <ion-item *ngFor="let item of itemByDate.value">\n        <div>\n          <ion-row>\n            <ion-col col-5>\n              <ion-row (click)="editReservation(item)" class="open-time">\n                {{item.appointmentFromDateTimeLocal | date: \'HH:mm\'}} - {{item.appointmentToDateTimeLocal | date: \'HH:mm\'}}\n              </ion-row>\n\n              <ion-row padding-top>\n                <div (click)="editReservation(item)" class="status">\n                  <span translate="reservation.status.{{item.applicationStatusEnum}}" class="{{item.applicationStatusEnum | lowercase}}"></span>\n                </div>\n                <div (click) = "updateDocument(item)" *ngIf="showEditDocument(item.applicationStatusEnum)">\n                  <ion-icon name="icon_memo"></ion-icon>\n                </div>\n              </ion-row>\n            </ion-col>\n\n            <ion-col col-7 (click)="editReservation(item)">\n              <ion-row>\n                <h2>{{item.customerFullName}}</h2>\n              </ion-row>\n              <ion-row>\n                <p>{{item.vehicleTypeDisplayName}} ({{item.licensePlateNo}})</p>\n              </ion-row>\n              <ion-row>\n                <p class="assigned-to">{{ \'reservation_list.assigned_to\' | translate }} {{item.consultantUserName}}</p>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div item-end>\n          <button ion-button class="write-document" (click)="updateDocument(item)" *ngIf="showCreateDocument(item.applicationStatusEnum)">\n            <ion-icon name="icon_memo"></ion-icon>\n          </button>\n          <button ion-button class="drive-start" (click)="openTestDriveReady(item)" *ngIf="showStartDriver(item.applicationStatusEnum)">\n            <span [innerHTML]="\'reservation_list.drive_start\' | translate"></span>\n          </button>\n        </div>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/reservation-list/reservation-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_reservation_service__["a" /* ReservationService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core_src_translate_service__["a" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__ivt_security__["d" /* IvtSecurityService */],
            __WEBPACK_IMPORTED_MODULE_7__ivt_security__["e" /* IvtStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__services_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_11__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_12__services_vehicle_odometer_service__["a" /* VehicleOdometerService */]])
    ], ReservationListPage);
    return ReservationListPage;
}());

//# sourceMappingURL=reservation-list.js.map

/***/ })

});
//# sourceMappingURL=17.js.map