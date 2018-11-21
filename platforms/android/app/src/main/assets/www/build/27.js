webpackJsonp([27],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */]
            ]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_password_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_password_model__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(55);
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
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, formBuilder, navParams, translate, alertCtrl, passwordService, toastCtrl, toastSvc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.passwordService = passwordService;
        this.toastCtrl = toastCtrl;
        this.toastSvc = toastSvc;
        this.account = new __WEBPACK_IMPORTED_MODULE_5__models_password_model__["a" /* PasswordModel */]();
        this.account.CurrentPassword = '';
        this.account.NewPassword = '';
        this.account.NewPasswordRepeat = '';
        this.translate.get('msg.are_you_sure_you_want_to_change_password').subscribe(function (value) {
            _this.changePasswordString = value;
        });
        this.translate.get('CANCEL_BUTTON').subscribe(function (value) {
            _this.cancelString = value;
        });
        this.translate.get('OK_BUTTON').subscribe(function (value) {
            _this.okString = value;
        });
    }
    ChangePasswordPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    ChangePasswordPage.prototype.changePassword = function (form) {
        var _this = this;
        if (!form.form.valid) {
            return;
        }
        var confirm = this.alertCtrl.create({
            title: this.changePasswordString,
            message: '',
            buttons: [
                {
                    text: this.cancelString,
                    handler: function () {
                    }
                }, {
                    text: this.okString,
                    handler: function () {
                        _this.passwordService.save(_this.account).subscribe(function (res) {
                            _this.toastSvc.success('msg.your_password_have_change');
                            _this.navCtrl.push('LoginPage');
                        }, function (err) {
                            _this.toastSvc.error(err.message);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/change-password/change-password.html"*/'<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    \n    <ion-title class="header-title">{{ \'SETTINGS_PAGE_PROFILE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<form  #form="ngForm"  validate>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>{{ \'CURRENT_PASSWORD\' | translate }}</ion-label>\n      <ion-input required type="password" name = "password" [(ngModel)]="account.CurrentPassword"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ \'NEW_PASSWORD\' | translate }}</ion-label>\n      <ion-input required type="password" name = "newPassword" [(ngModel)]="account.NewPassword"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>{{ \'CONFIRM_PASSWORD\' | translate }}</ion-label>\n      <ion-input required type="password" name = "newPasswordRepeat" [(ngModel)]="account.NewPasswordRepeat"></ion-input>\n    </ion-item>\n\n    <ion-grid class="default-button-group">\n      <ion-row>\n        <ion-col>\n          <button ion-button full color="light" (click)="cancel()">{{ \'CANCEL_BUTTON\' | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button (click) = "changePassword(form)" ion-button full type="submit"  [disabled] = "account.NewPassword != account.NewPasswordRepeat  || !form.valid">{{ \'SAVE_BUTTON\' | translate }}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-list>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/change-password/change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__services_password_service__["a" /* PasswordService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=27.js.map