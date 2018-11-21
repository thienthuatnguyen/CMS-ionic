webpackJsonp([19],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLanguagePageModule", function() { return SelectLanguagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_language__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectLanguagePageModule = /** @class */ (function () {
    function SelectLanguagePageModule() {
    }
    SelectLanguagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__select_language__["a" /* SelectLanguagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__select_language__["a" /* SelectLanguagePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__select_language__["a" /* SelectLanguagePage */]
            ]
        })
    ], SelectLanguagePageModule);
    return SelectLanguagePageModule;
}());

//# sourceMappingURL=select-language.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_language_service__ = __webpack_require__(97);
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




var SelectLanguagePage = /** @class */ (function () {
    function SelectLanguagePage(navCtrl, navParams, languageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.languageService = languageService;
        this.langList = this.languageService.search();
        this.currentlanguage = __WEBPACK_IMPORTED_MODULE_3__models_config_local_setting_model__["a" /* LocalSettingModel */].lang;
    }
    SelectLanguagePage.prototype.selectLanguage = function () {
        this.languageService.changeLanguage(this.currentlanguage);
    };
    SelectLanguagePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    SelectLanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-language',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/select-language/select-language.html"*/'<ion-header>\n\n    <ion-navbar class="head-nav-bar">\n      <button end ion-button menuToggle>\n        <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n      </button>\n      \n      <ion-title class="header-title">{{ \'settings.select_language\' | translate }}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-list radio-group [(ngModel)]="currentlanguage">\n        <ion-item *ngFor="let item of langList">\n            <ion-label>{{item.value}}</ion-label>\n            <ion-radio value="{{item.name}}"></ion-radio>\n        </ion-item>\n    </ion-list>\n\n    <ion-grid class="default-button-group">\n        <ion-row>\n            <ion-col>\n                <button ion-button full color="light" (click)="cancel()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button full (click) = "selectLanguage()">{{ \'SAVE_BUTTON\' | translate }}</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/select-language/select-language.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_language_service__["a" /* LanguageService */]])
    ], SelectLanguagePage);
    return SelectLanguagePage;
}());

//# sourceMappingURL=select-language.js.map

/***/ })

});
//# sourceMappingURL=19.js.map