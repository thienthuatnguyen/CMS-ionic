webpackJsonp([23],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geo__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__geo__["a" /* GeoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__geo__["a" /* GeoPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__geo__["a" /* GeoPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=geo.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GeoPage = /** @class */ (function () {
    function GeoPage(navCtrl, navParams, items, device, geolocation, platform, file, mail) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.device = device;
        this.geolocation = geolocation;
        this.platform = platform;
        this.file = file;
        this.mail = mail;
        this.currentItems = [];
        this.errorItems = [];
        this.geoItems = [];
        this.platform.ready().then(function () {
            _this.watchGeolocation();
        });
    }
    /**
     * Perform a service for the proper items.
     */
    GeoPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    GeoPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    GeoPage.prototype.watchGeolocation = function () {
        var _this = this;
        var lat;
        var lng;
        var accuracy, heading, speed;
        /*  if (this.device.platform == 'iOS'){
           setInterval(() => {
    
             let time2 = moment().format('YYYY-MM-DD hh:mm:ss') //요청시
    
             this.geolocation.getCurrentPosition().then((res) => {
    
               this.geoItems.push({
                 requestTime: time2,
                 responseTime: moment().format('YYYY-MM-DD hh:mm:ss'),
                 isreallocation: "",
                 geoLat: (res.coords.latitude).toFixed(8),
                 geoLng: (res.coords.longitude).toFixed(8),
                 accuracy: res.coords.accuracy,
                 heading: res.coords.heading,
                 speed: res.coords.speed,
                 error: "없음", errorTime: "없음"
               })
    
    
               lat = (res.coords.latitude).toFixed(8);
               lng = (res.coords.longitude).toFixed(8);
               // alert(lat)
    
             }, (e) => {
               // alert("겟커런트포지션 에러" + e)
    
               this.geoItems.push({
                 requestTime: time2,
                 responseTime: moment().format('YYYY-MM-DD hh:mm:ss'),
                 isreallocation: "",
                 geoLat: "",
                 geoLng: "",
                 accuracy: "",
                 heading: "",
                 speed: "",
                 error: e,
                 errorTime: moment().format('YYYY-MM-DD hh:mm:ss')
               })
    
    
             })
           }, 2000)
    
         }*/
        // else if (this.device.platform == 'Android') {
        var time2 = __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY-MM-DD hh:mm:ss');
        var subscription = this.geolocation.watchPosition({ timeout: 500000, enableHighAccuracy: true });
        subscription.subscribe(function (data) {
            try {
                _this.geoItems.push({
                    requestTime: time2,
                    responseTime: __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY-MM-DD hh:mm:ss'),
                    isreallocation: "",
                    geoLat: (data.coords.latitude).toFixed(5),
                    geoLng: (data.coords.longitude).toFixed(5),
                    accuracy: data.coords.accuracy,
                    heading: data.coords.heading,
                    speed: data.coords.speed,
                    errorTime: "없음", error: "없음"
                });
                lat = (data.coords.latitude).toFixed(5);
                lng = (data.coords.longitude).toFixed(5);
                accuracy = data.coords.accuracy;
                heading = data.coords.heading;
                speed = data.coords.speed;
            }
            catch (e) {
                console.log("geoLat catch" + e);
            }
        }, function (e) {
            //요청시간 + 메시지
            _this.geoItems.push({
                requestTime: time2,
                responseTime: __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY-MM-DD hh:mm:ss'),
                isreallocation: "",
                geoLat: "",
                geoLng: "",
                accuracy: "",
                heading: "",
                speed: "",
                error: e,
                errorTime: __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY-MM-DD hh:mm:ss')
            });
        });
        /*
              setInterval(() => {
  
  
                this.geolocation.getCurrentPosition().then((res) => {
  
                  lat = (res.coords.latitude).toFixed(8);
                  lng = (res.coords.longitude).toFixed(8);
                  // alert(lat)
  
                }, (e) => {
                  alert("겟커런트포지션 에러" + e)
  
                })
              }, 2000)
  
            }*/
        /*
              let _repeat = () => {
                return (
                  setInterval(() => {
                    this.geoItems.push({
                      responseTime: moment().format('YYYY-MM-DD hh:mm:ss'),
                      isreallocation: "fake",
                      geoLat: lat,
                      geoLng: lng,
                      accuracy: accuracy,
                      heading: heading,
                      speed: speed
                    })
                  }, 1000)
  
  
                )
              }
  
              let rp = _repeat()
              setTimeout(() => {
                clearInterval(rp);
              }, 500000)*/
        // }
        /* else {
           alert("other OS")
     
         }*/
    };
    GeoPage.prototype.sendMail = function () {
        this.mail.isAvailable().then(function (available) {
            if (available) {
            }
        });
        var email = {
            to: 'ws@inventis.kr',
            subject: __WEBPACK_IMPORTED_MODULE_5_moment__().format('YYYY-MM-DD hh:mm:ss') + '_GPS테스트_' + this.device.platform,
            body: JSON.stringify(this.geoItems),
            isHtml: true
        };
        this.mail.open(email);
    };
    GeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/geolocation/geo.html"*/'<ion-header>\n\n  <ion-navbar class="head-nav-bar">\n    <button end ion-button menuToggle>\n      <ion-icon name="icon_menu" class="menu-toggle"></ion-icon>\n    </button>\n    <ion-title class="header-title">{{ \'GEO_TITLE\' | translate }}</ion-title>\n    <!--<button end ion-button (click)="sendMail()"/>-->\n    <ion-buttons end>\n      <button ion-button icon-only (click)="sendMail()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n      <ion-avatar item-start>\n        <img [src]="item.profilePic" />\n      </ion-avatar>\n      <h2>{{item.name}}</h2>\n      <p>{{item.about}}</p>\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </button>\n\n    <ion-item *ngFor="let item of geoItems">\n      <p>\n        요청시간: {{item.requestTime || "없음"}} <br>\n        응답시간: {{item.responseTime|| "없음"}} <br>\n        위도: {{item.geoLng|| "없음"}}, 경도: {{item.geoLat|| "없음"}}<br>\n        정확도: {{item.accuracy|| "없음"}} m 반경 내, 방향: {{item.heading|| "없음"}}<br>\n        속력: {{item.speed|| "없음"}}, {{item.isreallocation}}<br>\n        에러: {{item.error|| "없음"}}, 에러발생시간: {{item.errorTime || "없음"}}\n      </p>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/cordova/smarttestdrive/src/pages/geolocation/geo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], GeoPage);
    return GeoPage;
}());

//# sourceMappingURL=geo.js.map

/***/ })

});
//# sourceMappingURL=23.js.map