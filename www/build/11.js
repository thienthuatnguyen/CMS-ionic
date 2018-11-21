webpackJsonp([11],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalModule", function() { return ImageModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_modal__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImageModalModule = /** @class */ (function () {
    function ImageModalModule() {
    }
    ImageModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__image_modal__["a" /* ImageModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__image_modal__["a" /* ImageModal */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__image_modal__["a" /* ImageModal */]
            ]
        })
    ], ImageModalModule);
    return ImageModalModule;
}());

//# sourceMappingURL=image-modal.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(46);
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
var ImageModal = /** @class */ (function () {
    function ImageModal(params, viewCtrl, domSanitizer) {
        this.viewCtrl = viewCtrl;
        this.domSanitizer = domSanitizer;
        this.pictureUrl = params.get('url');
    }
    ImageModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    ImageModal.prototype.delete = function () {
        this.viewCtrl.dismiss(true);
    };
    ImageModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'image-modal',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/imageModal/image-modal.html"*/'<div class="modal-container">\n    <div class="modal-header">\n        <ion-header>\n            <ion-navbar class="head-nav-bar">\n              <ion-title class="header-title">{{ \'PHOTO\' | translate }}</ion-title>\n            </ion-navbar>\n        </ion-header>\n    </div>\n    <div class="modal-content">\n        <ion-grid class="image-model-content-grid">\n            <ion-row class="image-model-content-row">\n                <ion-col text-center>\n                    <img class="image-model-pic" [src]="domSanitizer.bypassSecurityTrustUrl(pictureUrl)" />\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div class="modal-bottom">\n        <ion-grid >\n            <ion-row >\n                <ion-col >\n                    <button full ion-button color="light" (click)= "dismiss()">{{ \'CLOSE_BUTTON\' | translate }}</button>\n                </ion-col>\n                <ion-col >\n                    <button full ion-button  (click)= "delete()">{{ \'DELETE_BUTTON\' | translate }}</button>   \n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</div>\n\n\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/imageModal/image-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ImageModal);
    return ImageModal;
}());

//# sourceMappingURL=image-modal.js.map

/***/ })

});
//# sourceMappingURL=11.js.map