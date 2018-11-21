webpackJsonp([26],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePageModule", function() { return ChangeProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_profile__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangeProfilePageModule = /** @class */ (function () {
    function ChangeProfilePageModule() {
    }
    ChangeProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__change_profile__["a" /* ChangeProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__change_profile__["a" /* ChangeProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__change_profile__["a" /* ChangeProfilePage */]
            ]
        })
    ], ChangeProfilePageModule);
    return ChangeProfilePageModule;
}());

//# sourceMappingURL=change-profile.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_camera_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_picture_model__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_file_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ivt_security__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_toast_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ChangeProfilePage = /** @class */ (function () {
    function ChangeProfilePage(navCtrl, formBuilder, navParams, translate, alertCtrl, toastCtrl, camera, fileSvc, util, ivtSecurityService, toastSvc, domSanitizer) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.fileSvc = fileSvc;
        this.util = util;
        this.ivtSecurityService = ivtSecurityService;
        this.toastSvc = toastSvc;
        this.domSanitizer = domSanitizer;
    }
    ChangeProfilePage.prototype.changeAvatar = function () {
        var _this = this;
        this.camera.getPicture(200, 200).then(function (_base64) {
            var picture = new __WEBPACK_IMPORTED_MODULE_6__models_picture_model__["a" /* Picture */]();
            picture.url = _base64;
            _this.Pictures = picture;
        });
    };
    ChangeProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userInfor = this.ivtSecurityService.getUser();
        this.Pictures = new __WEBPACK_IMPORTED_MODULE_6__models_picture_model__["a" /* Picture */]();
        this.Pictures.id = this.userInfor.pictureID;
        this.fileSvc.download(this.Pictures.id).then(function (url) { return _this.Pictures.url = url; });
    };
    ChangeProfilePage.prototype.submitSave = function () {
        var _this = this;
        this.fileSvc.uploadProfile(this.Pictures.url, { fileName: this.generateUniqueFileName() }).then(function (_id) {
            _this.Pictures.id = _id;
            var _service = _this.ivtSecurityService;
            var user = _this.ivtSecurityService.getUser();
            user.pictureID = _id;
            _service.upateProfile(user);
            _this.toastSvc.success('msg.save_successful');
        });
    };
    ChangeProfilePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    ChangeProfilePage.prototype.generateUniqueFileName = function () {
        return new Date().getTime().toString() + this.fileSvc.FILE_EXTENSION;
    };
    ChangeProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-profile',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/change-profile/change-profile.html"*/'<ion-header>\n  <ion-navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>   \n    <ion-title class="header-title">{{ \'SETTINGS_PAGE_PROFILE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid text-center class="profile-Picture">\n        <ion-icon name="add-circle" (click)="changeAvatar()"></ion-icon>\n        <ion-row align-items-center justify-content-center>\n          <ion-item no-lines style="width:100px">\n            <ion-avatar>\n              <img (click)="changeAvatar()" [src]="domSanitizer.bypassSecurityTrustUrl(Pictures?.url)" />\n            </ion-avatar>\n          </ion-item>\n        </ion-row>  \n        <ion-grid class="default-button-group">\n          <ion-row>\n            <ion-col>\n              <button ion-button full color="light" (click)="cancel()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n            </ion-col>\n            <ion-col>\n              <button ion-button full (click)="submitSave()">{{ \'SAVE_BUTTON\' | translate }}</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/change-profile/change-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__services_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_7__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* Util */],
            __WEBPACK_IMPORTED_MODULE_8__ivt_security__["d" /* IvtSecurityService */],
            __WEBPACK_IMPORTED_MODULE_9__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ChangeProfilePage);
    return ChangeProfilePage;
}());

//# sourceMappingURL=change-profile.js.map

/***/ })

});
//# sourceMappingURL=26.js.map