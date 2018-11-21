webpackJsonp([24],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageModule", function() { return ManualPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manual__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ManualPageModule = /** @class */ (function () {
    function ManualPageModule() {
    }
    ManualPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manual__["a" /* ManualPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manual__["a" /* ManualPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer__["a" /* PdfViewerModule */]
            ],
        })
    ], ManualPageModule);
    return ManualPageModule;
}());

//# sourceMappingURL=manual.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core_src_translate_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_file_service__ = __webpack_require__(96);
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
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManualPage = /** @class */ (function () {
    function ManualPage(navCtrl, navParams, file, utils, loadingCtrl, translateService, fileService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.utils = utils;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.fileService = fileService;
        this.currentZoom = 1;
    }
    ManualPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadPdfBrowser();
        // create a new Gesture instance hooked to the DOM element
        this.gesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Gesture */](this.pinchElement.nativeElement);
        // start listening for ...
        this.gesture.listen();
        // ... the pinchstart event
        this.gesture.on('pinchstart', function (e) {
        });
        // ... for the pinch event
        this.gesture.on('pinch', function (e) {
        });
        this.gesture.on('pinchend', function (event) {
            // get the current zoom value
            var zoom = _this.currentZoom;
            // get the scaled amount
            var scale = zoom * event.scale / 10;
            // if the user is zooming in
            if (event.additionalEvent === 'pinchout') {
                zoom += scale;
            }
            else {
                // if zooming out
                zoom -= scale * 10;
            }
            // if zoom is too small or too big set them to max values
            if (zoom < 1) {
                zoom = 1;
            }
            else if (zoom > 2) {
                zoom = 2;
            }
            // set the current zoom
            _this.currentZoom = zoom;
        });
    };
    ManualPage.prototype.ngOnDestroy = function () {
        // stop listening
        this.gesture.destroy();
    };
    ManualPage.prototype.openManual = function (idx) {
        alert(idx + 1 + "번째 manual open");
    };
    ManualPage.prototype.loadPdf = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = new XMLHttpRequest();
                        request.open('GET', path, true);
                        request.responseType = 'blob';
                        request.onload = function () {
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                _this.loading.dismiss();
                                resolve(e.target.result);
                            };
                            reader.onerror = function (err) {
                                _this.loading.dismiss();
                                reject(err);
                            };
                            reader.readAsDataURL(request.response);
                        };
                        request.send();
                    })];
            });
        });
    };
    ManualPage.prototype.loadPdfBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loading = this.loadingCtrl.create({
                    content: this.translateService.instant('msg.loading')
                });
                this.loading.present();
                this.fileService.downloadUserManual().then(function (_blob) {
                    _this.pdfSrc = _blob;
                    _this.loading.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pinchElement'),
        __metadata("design:type", Object)
    ], ManualPage.prototype, "pinchElement", void 0);
    ManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manual',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/manual/manual.html"*/'<!--\n  Generated template for the ManualPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'MANUAL_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #pinchElement>\n    <pdf-viewer [src]="pdfSrc" \n                [render-text]="true"\n                [zoom]="currentZoom" \n                [fit-to-page]="true"\n                style="display: block;"\n                \n    ></pdf-viewer>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/manual/manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core_src_translate_service__["a" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_file_service__["a" /* FileService */]])
    ], ManualPage);
    return ManualPage;
}());

//# sourceMappingURL=manual.js.map

/***/ })

});
//# sourceMappingURL=24.js.map