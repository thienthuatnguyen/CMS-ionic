webpackJsonp([18],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setting_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_setting_model__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_insomnia__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_autostart__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate, insomnia, platform, autostart) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.insomnia = insomnia;
        this.platform = platform;
        this.autostart = autostart;
        this.settingsReady = false;
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
        this.settingItems = [
            // hidden auto start button
            // {
            //   name: Config.setting.auto_start,
            //   type: 'toggle',
            //   platform: 'android',
            //   value: true
            // },
            {
                name: __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].setting.prevent_screen_from_sleeping,
                type: 'toggle',
                value: false
            },
            {
                name: 'settings.change_profile_picture',
                type: 'navigation',
                page: 'ChangeProfilePage',
                params: {
                    page: 'profilePicture',
                    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
                }
            },
            {
                name: 'settings.change_password',
                type: 'navigation',
                page: 'ChangePasswordPage',
                params: {
                    page: 'profile',
                    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
                }
            },
            {
                name: 'settings.select_language',
                type: 'navigation',
                page: 'SelectLanguagePage'
            }
        ];
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.ionViewWillLeave = function () {
        this.save();
    };
    SettingsPage.prototype.save = function () {
        this.settings.clear();
        this.settings.saveAll(this.settingItems.filter(function (_item) { return _item.type === 'toggle'; }).map(function (_item) {
            var setting = new __WEBPACK_IMPORTED_MODULE_5__models_setting_model__["a" /* Setting */]();
            setting.name = _item.name;
            setting.value = _item.value;
            return setting;
        }));
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.search().subscribe(function (_settings) {
            _this.settingItems.forEach(function (_item) {
                var _mapedSetting = _settings.find(function (_setting) { return _setting.name === _item.name; });
                if (_mapedSetting) {
                    _item.value = _mapedSetting.value;
                }
            });
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SettingsPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    SettingsPage.prototype.settingChanged = function (name, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        // this.save();
                        if (name === __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].setting.prevent_screen_from_sleeping) {
                            if (value.toString() == 'false') {
                                this.insomnia.allowSleepAgain().then(function () { return console.log('success'); }, function (err) { return console.log('error', err); });
                            }
                            else {
                                this.insomnia.keepAwake().then(function () { return console.log('success'); }, function (err) { return console.log('error', err); });
                            }
                        }
                        if (name === __WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* Config */].setting.auto_start) {
                            if (value.toString() == 'false') {
                                this.autostart.disable();
                            }
                            else {
                                this.autostart.enable();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ pageTitle }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <form *ngIf="settingsReady"> -->\n  <ion-list *ngIf="page == \'main\'">\n    <ng-container *ngFor="let settingItem of settingItems">\n      <ion-item *ngIf="settingItem.type === \'toggle\'">\n        <ion-label>{{ settingItem.name | translate }}</ion-label>\n        <ion-toggle [(ngModel)]="settingItem.value" (ngModelChange)="settingChanged(settingItem.name, $event)"></ion-toggle>\n      </ion-item>\n      <button ion-item [navPush]="settingItem.page" [navParams]="settingItem.params" *ngIf="settingItem.type==\'navigation\'">\n        {{ settingItem.name | translate }}\n      </button>\n    </ng-container>\n  </ion-list>\n  <!-- </form> -->\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_setting_service__["a" /* SettingService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_insomnia__["a" /* Insomnia */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_autostart__["a" /* Autostart */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=18.js.map