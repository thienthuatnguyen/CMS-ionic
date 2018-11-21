webpackJsonp([29],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperPageModule", function() { return DeveloperPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__developer__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DeveloperPageModule = /** @class */ (function () {
    function DeveloperPageModule() {
    }
    DeveloperPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__developer__["a" /* DeveloperPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__developer__["a" /* DeveloperPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__developer__["a" /* DeveloperPage */]
            ]
        })
    ], DeveloperPageModule);
    return DeveloperPageModule;
}());

//# sourceMappingURL=developer.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_developer_service__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeveloperPage = /** @class */ (function () {
    function DeveloperPage(developerService) {
        this.array = [];
        this.arraySearch = [];
        this.arrayStore = [];
        this.array = developerService.array;
        this.arrayStore = developerService.array;
    }
    DeveloperPage.prototype.clearLog = function () {
        this.array = [];
    };
    DeveloperPage.prototype.searchByKeyWord = function ($event) {
        var _this = this;
        if (this.txt) {
            this.arraySearch = this.array.filter(function (el) {
                return el.indexOf(_this.txt) > -1;
            });
            this.array = this.arraySearch;
        }
        else {
            this.array = this.arrayStore;
        }
    };
    DeveloperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-developer',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/developer/developer.html"*/'<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <button start (click)= "clearLog()">\n        <ion-icon name="trash"></ion-icon>\n    </button>\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">Developer site</ion-title>\n   \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-searchbar [(ngModel)] = "txt" (ionInput)="searchByKeyWord($event)" placeholder="{{ \'SEARCH_PLACEHOLDER\' | translate }}"></ion-searchbar>\n  <h1 text-center>This is all log of page</h1>\n  <ion-list>\n    <ion-item *ngFor="let item of array ">{{item}}</ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/developer/developer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_developer_service__["a" /* DeveloperService */]])
    ], DeveloperPage);
    return DeveloperPage;
}());

//# sourceMappingURL=developer.js.map

/***/ })

});
//# sourceMappingURL=29.js.map