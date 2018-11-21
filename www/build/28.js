webpackJsonp([28],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServiceModalModule", function() { return TermsOfServiceModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_modal__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TermsOfServiceModalModule = /** @class */ (function () {
    function TermsOfServiceModalModule() {
    }
    TermsOfServiceModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__terms_of_service_modal__["a" /* TermsOfServiceModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_modal__["a" /* TermsOfServiceModal */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__terms_of_service_modal__["a" /* TermsOfServiceModal */]
            ]
        })
    ], TermsOfServiceModalModule);
    return TermsOfServiceModalModule;
}());

//# sourceMappingURL=terms-of-service-modal.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServiceModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var TermsOfServiceModal = /** @class */ (function () {
    function TermsOfServiceModal(params, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.content = params.get('showTerms');
    }
    TermsOfServiceModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TermsOfServiceModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'terms-of-service-modal',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/document/terms-of-service-modal/terms-of-service-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n            <ion-icon name="md-close"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title class="header-title">{{ \'document.terms_of_service\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="term-of-service-content">{{content}}</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/document/terms-of-service-modal/terms-of-service-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], TermsOfServiceModal);
    return TermsOfServiceModal;
}());

//# sourceMappingURL=terms-of-service-modal.js.map

/***/ })

});
//# sourceMappingURL=28.js.map