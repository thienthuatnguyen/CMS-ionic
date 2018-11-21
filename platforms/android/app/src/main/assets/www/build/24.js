webpackJsonp([24],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsSurveyPageModule", function() { return CsSurveyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cs_survey__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CsSurveyPageModule = /** @class */ (function () {
    function CsSurveyPageModule() {
    }
    CsSurveyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cs_survey__["a" /* CsSurveyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cs_survey__["a" /* CsSurveyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CsSurveyPageModule);
    return CsSurveyPageModule;
}());

//# sourceMappingURL=cs-survey.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsSurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_vehicle_service__ = __webpack_require__(461);
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
 * Generated class for the CsSurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CsSurveyPage = /** @class */ (function () {
    function CsSurveyPage(navCtrl, navParams, alertCtrl, customerService, vehicleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.customerService = customerService;
        this.vehicleService = vehicleService;
        this.displayDateFormat = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].date.displayFormatDateSurvey;
        this.undoneSurveyCustomers = [];
    }
    CsSurveyPage.prototype.ionViewDidEnter = function () {
        this.getUndoneSurveyCustomers();
    };
    CsSurveyPage.prototype.openSurvey = function (customer) {
        this.navCtrl.push('SurveyDetailPage', {
            customer: customer
        });
    };
    CsSurveyPage.prototype.getUndoneSurveyCustomers = function () {
        var _this = this;
        this.params = {
            baseDateFromLocal: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* Config */].date.YYYYMMDD)
        };
        this.customerService.search(this.params).subscribe(function (res) {
            _this.undoneSurveyCustomers = res;
            _this.vehicleService.search().subscribe(function (_vehicles) {
                _this.undoneSurveyCustomers.forEach(function (_customer) {
                    _customer.vehicle = _vehicles.find(function (_item) { return _item.id === _customer.vehicle.id; }) || _customer.vehicle;
                });
            });
        });
    };
    CsSurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cs-survey',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/cs-survey/cs-survey.html"*/'<!--\n  Generated template for the CsSurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar class="head-nav-bar">\n   \n      <ion-title class="header-title">{{ \'CSSURVEY_TITLE\' | translate }}</ion-title>\n      \n        <button end ion-button menuToggle>\n          <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n        </button>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item  *ngFor="let customer of undoneSurveyCustomers" (click)="openSurvey(customer)">\n      <h2>\n        {{customer.fullName}}\n      </h2>\n      <h3>\n          <div *ngIf="customer.vehicle">{{customer.vehicle?.vehicleType?.name}} ({{ customer.vehicle?.plateNo}}) </div>\n      </h3>\n      <p>\n        {{customer.driveStartTime | date: displayDateFormat }} - {{customer.driveEndTime | date: displayDateFormat }}\n      </p>\n      <ion-icon name="ios-create-outline" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/cs-survey/cs-survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_5__services_vehicle_service__["a" /* VehicleService */]])
    ], CsSurveyPage);
    return CsSurveyPage;
}());

//# sourceMappingURL=cs-survey.js.map

/***/ })

});
//# sourceMappingURL=24.js.map