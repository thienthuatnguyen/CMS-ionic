webpackJsonp([16],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPageModule", function() { return ReservationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservation__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReservationPageModule = /** @class */ (function () {
    function ReservationPageModule() {
    }
    ReservationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__reservation__["a" /* ReservationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__reservation__["a" /* ReservationPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__reservation__["a" /* ReservationPage */]
            ]
        })
    ], ReservationPageModule);
    return ReservationPageModule;
}());

//# sourceMappingURL=reservation.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reservation_reservation_model__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_reservation_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_vehicle_service__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ivt_security__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toast_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ReservationPage = /** @class */ (function () {
    function ReservationPage(navCtrl, navParams, viewCtrl, alertCtrl, translate, util, service, vehicleService, toastSvc, navParam, securityService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.util = util;
        this.service = service;
        this.vehicleService = vehicleService;
        this.toastSvc = toastSvc;
        this.navParam = navParam;
        this.securityService = securityService;
        this.maxYear = (new Date()).getFullYear() + 1;
        this.reservationObj = {
            confirmMakeAReservationText: null,
            okButtonText: null,
            cancelButtonText: null,
            saveSuccessText: null,
            confirmCancelText: null,
            cancelSuccessText: null,
            updateReservationText: null,
            consultantUserId: null,
            timeSlot: [],
            reservationStatus: null
        };
        this.currentItems = [];
        var userInfor = this.securityService.getUser();
        this.reservationObj.consultantUserId = userInfor.id;
        this.init();
        this.translate.get('ARE_YOU_SURE_YOU_WANT_TO_MAKE_A_RESERVATION').subscribe(function (value) {
            _this.reservationObj.confirmMakeAReservationText = value;
        });
        this.translate.get('YOUR_RESERVATION_WAS_MADE_OR_WAS_CHANGED_SUCCESSFULLY').subscribe(function (value) {
            _this.reservationObj.saveSuccessText = value;
        });
        this.translate.get('OK_BUTTON').subscribe(function (value) {
            _this.reservationObj.okButtonText = value;
        });
        this.translate.get('CANCEL_BUTTON').subscribe(function (value) {
            _this.reservationObj.cancelButtonText = value;
        });
        this.translate.get('ARE_YOUR_SURE_YOU_WANT_TO_CANCEL_THIS_RESERVATION').subscribe(function (value) {
            _this.reservationObj.confirmCancelText = value;
        });
        this.translate.get('YOUR_RESERVATION_WAS_CANCELED_SUCCESSFULLY').subscribe(function (value) {
            _this.reservationObj.cancelSuccessText = value;
        });
        this.translate.get('YOUR_RESERVATION_HAS_BEEN_CHANGED_DO_YOU_WANT_TO_SAVE_IT').subscribe(function (value) {
            _this.reservationObj.updateReservationText = value;
        });
        this.translate.get('reservation.this_time_slot_cannot_selected').subscribe(function (value) {
            _this.reservationObj.validateTimeSlot = value;
        });
    }
    ReservationPage.prototype.init = function () {
        this.reservationObj.timeSlot = [];
        this.reservationObj.reservationStatus = null;
        var reservationFromServer;
        if (this.navParam.data.item) {
            reservationFromServer = this.navParam.data.item;
            this.reservation = this.util.transformToReservation(reservationFromServer);
            this.reservation.appointmentDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.reservation.appointmentDate).format(__WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* Config */].date.YYYYMMDD);
            this.reservationObj.reservationStatus = reservationFromServer.applicationStatusEnum;
        }
        else {
            this.reservation = new __WEBPACK_IMPORTED_MODULE_3__models_reservation_reservation_model__["a" /* Reservation */]();
            this.reservation.consultantUserId = this.reservationObj.consultantUserId;
            this.reservation.appointmentDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format(__WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* Config */].date.YYYYMMDD);
        }
    };
    ReservationPage.prototype.ionViewWillEnter = function () {
        this.init();
        this.getAvailableReservationTimeSlots();
        this.getVehicle();
        this.setCurrentReservationTimeSlot();
    };
    ReservationPage.prototype.getVehicle = function () {
        var _this = this;
        this.vehicleService.search().subscribe(function (result) {
            _this.vehicleList = result;
        }, function (fail) {
            _this.toastSvc.error(fail.message);
        });
    };
    ReservationPage.prototype.selectTimeSlot = function (item, index) {
        if (this.reservationObj.timeSlot.length == 0) {
            this.reservationObj.timeSlot.push({ timeSelected: item.timeInHHMM, id: index });
            item.timeSelected = true;
        }
        else {
            var result = __WEBPACK_IMPORTED_MODULE_5_underscore__["_"].where(this.reservationObj.timeSlot, { id: index });
            if (result.length == 0) {
                if (this.reservationObj.timeSlot[0].id - index == 1 || this.reservationObj.timeSlot[this.reservationObj.timeSlot.length - 1].id - index == -1) {
                    this.reservationObj.timeSlot.push({ timeSelected: item.timeInHHMM, id: index });
                    item.timeSelected = true;
                    this.reservationObj.timeSlot = __WEBPACK_IMPORTED_MODULE_5_underscore__["_"].sortBy(this.reservationObj.timeSlot, 'id');
                    console.log(this.reservationObj.timeSlot);
                }
                else {
                    this.toastSvc.error(this.reservationObj.validateTimeSlot);
                }
            }
            else {
                // remove time slot
                if (this.reservationObj.timeSlot[0].id === index) {
                    this.reservationTimeSlots[index].timeSelected = false;
                    this.reservationObj.timeSlot.splice(0, 1);
                }
                else if (this.reservationObj.timeSlot[this.reservationObj.timeSlot.length - 1].id === index) {
                    this.reservationTimeSlots[index].timeSelected = false;
                    this.reservationObj.timeSlot.pop();
                }
                else {
                    this.reservationObj.timeSlot = [];
                    this.reservationTimeSlots.forEach(function (timeSlot) {
                        timeSlot.timeSelected = false;
                    });
                }
            }
        }
    };
    ReservationPage.prototype.changeReservationDate = function (reservationDate) {
        if (this.reservation.vehicleId) {
            this.resetAvaillableTimeSlot();
        }
    };
    ReservationPage.prototype.changeVehicle = function (vehicleId) {
        if (this.reservation.appointmentDate) {
            this.resetAvaillableTimeSlot();
        }
    };
    ReservationPage.prototype.resetAvaillableTimeSlot = function () {
        this.reservation.appointmentFromTime = null;
        this.reservation.appointmentToTime = null;
        this.getAvailableReservationTimeSlots();
    };
    ReservationPage.prototype.getAvailableReservationTimeSlots = function () {
        var _this = this;
        var searchCriteria = {
            applicationId: this.reservation.id || null,
            consultantUserId: this.reservationObj.consultantUserId,
            vehicleId: this.reservation.vehicleId || null,
            appointmentDateLocal: this.reservation.appointmentDate
        };
        this.service.getAvailableReservationTimeSlots(searchCriteria).subscribe(function (result) {
            _this.reservationTimeSlots = result;
            _this.setCurrentReservationTimeSlot();
        }, function (fail) {
            // to do later
        });
    };
    ReservationPage.prototype.setCurrentReservationTimeSlot = function () {
        var _this = this;
        this.reservationObj.timeSlot = [];
        if (this.reservationTimeSlots) {
            this.reservationTimeSlots.forEach(function (item, index) {
                if (item.timeInHHMM >= _this.reservation.appointmentFromTime && item.timeInHHMM <= _this.reservation.appointmentToTime) {
                    item.timeSelected = true;
                    _this.reservationObj.timeSlot.push({ timeSelected: item.timeInHHMM, id: index });
                }
            });
        }
    };
    ReservationPage.prototype.getTimeSlotIndex = function (list, timeSlot) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].timeInHHMM == timeSlot)
                return i;
        }
        return -1;
    };
    ReservationPage.prototype.isDisabled = function (item) {
        return ((this.reservation.vehicleId === 0) || item.assignedToMe || item.assignedToOtherConsultantUser || item.assignedToThisVehicle);
    };
    ReservationPage.prototype.isSelectedTimeSlot = function (item) {
        return (item.timeInHHMM >= this.reservation.appointmentFromTime && item.timeInHHMM <= this.reservation.appointmentToTime);
    };
    ReservationPage.prototype.isOwnReservation = function () {
        if (this.reservation.consultantUserId)
            return this.reservation.consultantUserId == this.reservationObj.consultantUserId;
        return true;
    };
    ReservationPage.prototype.isDoneReservation = function () {
        return this.util.isDoneReservation(this.reservationObj.reservationStatus);
    };
    ReservationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReservationPage.prototype.cancel = function () {
        this.navCtrl.parent.select(2);
    };
    ReservationPage.prototype.save = function () {
        var _this = this;
        var title = this.reservationObj.updateReservationText;
        if (this.reservation.id === undefined)
            title = this.reservationObj.confirmMakeAReservationText;
        var confirm = this.alertCtrl.create({
            title: title,
            buttons: [
                {
                    text: this.reservationObj.cancelButtonText,
                }, {
                    text: this.reservationObj.okButtonText,
                    handler: function () {
                        var timeSlots = _this.reservationObj.timeSlot;
                        if (timeSlots.length > 0) {
                            _this.reservation.appointmentFromTime = timeSlots[0].timeSelected;
                            _this.reservation.appointmentToTime = timeSlots[timeSlots.length - 1].timeSelected;
                        }
                        else {
                            _this.reservation.appointmentFromTime = null;
                            _this.reservation.appointmentToTime = null;
                        }
                        _this.service.save(_this.reservation).subscribe(function (success) {
                            _this.toastSvc.error(_this.reservationObj.saveSuccessText);
                            _this.navCtrl.parent.select(2);
                        }, function (fail) {
                            _this.toastSvc.error(fail.message);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ReservationPage.prototype.cancelReservation = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.reservationObj.confirmCancelText,
            buttons: [
                {
                    text: this.reservationObj.cancelButtonText,
                }, {
                    text: this.reservationObj.okButtonText,
                    handler: function () {
                        _this.service.cancel({ id: _this.reservation.id }).subscribe(function (success) {
                            _this.toastSvc.error(_this.reservationObj.cancelSuccessText);
                            _this.navCtrl.parent.select(2);
                        }, function (fail) {
                            _this.toastSvc.error(fail.message);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/reservation/reservation.html"*/'<ion-header>\n\n    <ion-navbar class="head-nav-bar">\n      <button type="button" end ion-button menuToggle>\n        <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n      </button>\n      <ion-title class="header-title">{{ \'RESERVATION_TITLE\' | translate }}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <form #form="ngForm" (ngSubmit)="save(form)" validate>\n      <ion-item>\n        <ion-label stacked>{{ \'RESERVATION_DATE\' | translate }}</ion-label>\n        <ion-datetime cancelText="{{ \'CANCEL_BUTTON\' | translate }}" doneText="{{ \'DONE_BUTTON\' | translate }}" max="{{maxYear}}" name ="reservationDate" displayFormat="MM/DD/YYYY" [(ngModel)]="reservation.appointmentDate" (ngModelChange)="changeReservationDate(reservation.appointmentDate)"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'VEHICLE_NAME\' | translate }}</ion-label>\n        <ion-select cancelText="{{ \'CANCEL_BUTTON\' | translate }}" okText="{{ \'OK_BUTTON\' | translate }}" name="vehicleId" required placeholder="{{ \'SELECT_A_VEHICLE\' | translate }}" [(ngModel)]="reservation.vehicleId" (ngModelChange)="changeVehicle(reservation.vehicleId)">\n          <ion-option *ngFor="let item of vehicleList" value="{{item.id}}">{{item.vehicleType.name}} ({{item.plateNo}})</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class="input-field">\n        <ion-label stacked>{{ \'CUSTOMER_NAME\' | translate }}</ion-label>\n        <ion-input required name="customerName" [(ngModel)]="reservation.customerFullName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'PHONE_NO\' | translate }}</ion-label>\n        <ion-input name ="customerPhoneNumber" [(ngModel)]="reservation.customerPhoneNumber"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'RECOMMENDER\' | translate }}</ion-label>\n        <ion-input name ="recommenderFullName" [(ngModel)]="reservation.recommenderFullName"></ion-input>\n      </ion-item>\n  \n      <div class="select-schedule">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 *ngFor="let item of reservationTimeSlots; let i = index">\n              <button type="button" [disabled]="isDisabled(item)" [class.selected]="item.timeSelected" (click)="selectTimeSlot(item, i)"\n                ion-button full>{{ item.timeInHHMM }}</button>\n              <i *ngIf="isDisabled(item)" class="private-sign icon_h icon_manblock"></i>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  \n      <ion-grid class="default-button-group">\n        <ion-row>\n          <ion-col>\n            <button type="button" *ngIf="!reservation.id" ion-button full color="light" (click)="cancel()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n            <button type="button" full color="light" [disabled]="isDoneReservation()" *ngIf="reservation.id" ion-button (click)="cancelReservation()">{{ \'CANCEL_RESERVATION_BUTTON\' | translate }}</button>\n          </ion-col>\n          <ion-col>\n            <button type="submit" full [disabled]="!form.valid  || isDoneReservation()" ion-button>{{ \'SAVE_BUTTON\' | translate }}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/reservation/reservation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_7__services_reservation_service__["a" /* ReservationService */],
            __WEBPACK_IMPORTED_MODULE_9__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_11__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ivt_security__["d" /* IvtSecurityService */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ })

});
//# sourceMappingURL=16.js.map