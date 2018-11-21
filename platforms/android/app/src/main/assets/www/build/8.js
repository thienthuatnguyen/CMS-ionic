webpackJsonp([8],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListPageModule", function() { return VehicleListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_list__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VehicleListPageModule = /** @class */ (function () {
    function VehicleListPageModule() {
    }
    VehicleListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_list__["a" /* VehicleListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_list__["a" /* VehicleListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_list__["a" /* VehicleListPage */]
            ],
        })
    ], VehicleListPageModule);
    return VehicleListPageModule;
}());

//# sourceMappingURL=vehicle-list.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__(461);
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
 * Generated class for the VehicleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VehicleListPage = /** @class */ (function () {
    function VehicleListPage(navCtrl, navParams, viewCtrl, vehicleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.vehicleService = vehicleService;
    }
    VehicleListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.vehicleService.search(true).subscribe(function (_list) {
            _this.vehicles = _list;
        });
    };
    VehicleListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleListPage');
    };
    VehicleListPage.prototype.showDetail = function (vehicle) {
        this.navCtrl.push("VehicleRegistrationPage", { vehicle: vehicle });
    };
    VehicleListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VehicleListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vehicle-list',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-list/vehicle-list.html"*/'<!--\n  Generated template for the VehicleListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <!-- <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'VEHICLELIST_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <button item-end ion-button clear icon-start (click)="showDetail()" color="dark">\n        <ion-icon name="icon_plus"></ion-icon>\n        <span>{{ \'ADD_VEHICLE_BUTTON\' | translate }}</span>\n      </button>\n    </ion-list-header>\n    <!-- <ion-item *ngFor="let item of vehicles" (click)="showDetail(item)"> -->\n    <ion-item *ngFor="let item of vehicles">\n      <p> {{item.vehicleType.name}} ({{item.plateNo}})</p>\n      <p> {{item.modelYear.name}} {{item.trim.name}}</p>\n      <!-- <p>\n        <ion-icon name="icon_man" icon-start></ion-icon>\n        <span>{{item.consultantName}}</span>\n      </p> -->\n      <div item-end>\n        <div class="vhc-status">\n          <span class="repair" *ngIf="item.isRepairing()">{{ \'REPAIR\' | translate }}</span>\n          <span class="onload" *ngIf="item.isDrivingOnRoad() && !item.isRepairing()">{{ \'ON_THE_ROAD\' | translate }}</span>\n          <span class="waiting" *ngIf="item.isDrivingStop() && !item.isDrivingOnRoad() && !item.isRepairing()">{{ \'WAITING\' | translate }}</span>\n\n<!--      <img src="assets/img/vehicle-list-status3.png" *ngIf="item.isRepairing()" />\n          <img src="assets/img/vehicle-list-status1.png" *ngIf="item.isDrivingOnRoad() && !item.isRepairing()" />\n          <img src="assets/img/vehicle-list-status2.png" *ngIf="item.isDrivingStop() && !item.isDrivingOnRoad() && !item.isRepairing()" /> -->\n        </div>\n        <!-- <div *ngIf="item.isDrivingOnRoad()">\n          <ion-icon name="ios-person-outline" icon-start>\n          </ion-icon>\n          {{item.tenantName}}\n        </div> -->\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-list/vehicle-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */]])
    ], VehicleListPage);
    return VehicleListPage;
}());

//# sourceMappingURL=vehicle-list.js.map

/***/ })

});
//# sourceMappingURL=8.js.map