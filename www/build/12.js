webpackJsonp([12],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VhcHistoryModule", function() { return VhcHistoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vhc_history__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VhcHistoryModule = /** @class */ (function () {
    function VhcHistoryModule() {
    }
    VhcHistoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__vhc_history__["a" /* HistoryDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__vhc_history__["a" /* HistoryDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__vhc_history__["a" /* HistoryDetailPage */]
            ]
        })
    ], VhcHistoryModule);
    return VhcHistoryModule;
}());

//# sourceMappingURL=vhc-history.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_file_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_language_service__ = __webpack_require__(97);
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









var HistoryDetailPage = /** @class */ (function () {
    function HistoryDetailPage(fileSvc, params, viewCtrl, domSanitizer, loadingCtrl, translate, languageService) {
        var _this = this;
        this.fileSvc = fileSvc;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.domSanitizer = domSanitizer;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.languageService = languageService;
        this.Pictures = [];
        this.displayDateFormat = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].date.displayFormatDateSurvey;
        this.history = this.params.data.item;
        this.downloadPhoto(this.history.vhcCommentPhotos);
        this.languageService.onDirectionChanged(function (isRTL) {
            if (isRTL) {
                _this.direction = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].direction.rtl;
            }
            else {
                _this.direction = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* Config */].direction.ltr;
            }
        });
    }
    HistoryDetailPage.prototype.downloadPhoto = function (vhcCommentPhotos) {
        return __awaiter(this, void 0, void 0, function () {
            var _list, loadingMsg, loading, _loop_1, this_1, _i, vhcCommentPhotos_1, item, _loop_2, this_2, _a, vhcCommentPhotos_2, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _list = [];
                        if (!(this.history.vhcCommentPhotos && this.history.vhcCommentPhotos.length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.translate.get('msg.loading').toPromise()];
                    case 1:
                        loadingMsg = _b.sent();
                        loading = this.loadingCtrl.create({
                            content: loadingMsg
                        });
                        loading.present();
                        _loop_1 = function (item) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.fileSvc.download(item.pictureId).then(function (result) {
                                            _list.push({ id: item.pictureId, url: result });
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, vhcCommentPhotos_1 = vhcCommentPhotos;
                        _b.label = 2;
                    case 2:
                        if (!(_i < vhcCommentPhotos_1.length)) return [3 /*break*/, 5];
                        item = vhcCommentPhotos_1[_i];
                        return [5 /*yield**/, _loop_1(item)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        _loop_2 = function (item) {
                            var temp = _list.find(function (_photo) {
                                return _photo.id == item.pictureId;
                            });
                            this_2.Pictures.push(temp);
                        };
                        this_2 = this;
                        for (_a = 0, vhcCommentPhotos_2 = vhcCommentPhotos; _a < vhcCommentPhotos_2.length; _a++) {
                            item = vhcCommentPhotos_2[_a];
                            _loop_2(item);
                        }
                        loading.dismiss();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HistoryDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HistoryDetailPage.prototype.next = function () {
        this.slides.slideNext();
    };
    HistoryDetailPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], HistoryDetailPage.prototype, "slides", void 0);
    HistoryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'vhc-history',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/history/vhc-history.html"*/'\n<ion-header class="header-popup">\n            <button class="btn-close-popup" ion-button (click)="dismiss()">\n                <ion-icon name="md-close"></ion-icon>\n            </button>\n        <ion-item no-lines class="info" no-padding>\n                <span class="date">{{history.creationTime| date: displayDateFormat}}</span>\n                <ion-icon name="person"></ion-icon>\n                <span class="name">{{history.creatorUserName}}</span>\n        </ion-item>\n</ion-header>\n<ion-content>\n    <div class="content-popup">\n        <div class="no-image" *ngIf= " !Pictures.length"></div>\n        <div class="wrapper-slider" *ngIf= "Pictures.length">\n            <ion-slides pager="false" slidesPerView="1"  dir="{{direction}}">\n                    <ion-slide *ngFor="let item of Pictures">\n                        <img [src]="domSanitizer.bypassSecurityTrustUrl(item.url)" class="popup-vehicle-img" />\n                    </ion-slide>\n            </ion-slides>\n            <button class="btn-slider next-slider" (click)="next()"> \n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n            <button class="btn-slider prev-slider" (click) = "prev()">  \n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </div>\n    <div class="comment"  text-left>\n            <ion-textarea readonly  rows= "4" [(ngModel)] = "history.comment" >\n            </ion-textarea>    \n    </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/vehicle-health-check/history/vhc-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_language_service__["a" /* LanguageService */]])
    ], HistoryDetailPage);
    return HistoryDetailPage;
}());

//# sourceMappingURL=vhc-history.js.map

/***/ })

});
//# sourceMappingURL=12.js.map