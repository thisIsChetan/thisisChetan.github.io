webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.currencyCode = "";
        this.amount = "";
        this.proxyType = "";
        this.proxyValue = "";
        this.isAmountEditable = "";
        this.expiryDate = "";
        this.name = "";
        this.discription = "";
        this.generatedQrString = "";
    }
    HomePage.prototype.generateQr = function () {
        var qrData = {
            proxyType: this.proxyType,
            proxyValue: this.proxyValue,
            isAmountEditable: this.isAmountEditable,
            expiryDate: this.expiryDate // "20201231"
        };
        var _generatedQrString = this.generateQR("PAYNOW", qrData, this.currencyCode, this.amount, this.name, this.discription);
        this.generatedQrString = _generatedQrString;
    };
    //Mock to generate QR code.
    HomePage.prototype.generateQR = function (type, qrData, currencyCode, amount, name, discription) {
        if (type === "PAYNOW") {
            var paynowFormat = {
                "00": "SG.PAYNOW",
                "01": qrData.proxyType,
                "02": qrData.proxyValue,
                "03": qrData.isAmountEditable,
                "05": qrData.expiryDate
            };
            var additionalInfo = {};
            if (discription !== "") {
                additionalInfo = {
                    "01": discription
                };
            }
            var sgqrFormat = {
                "00": "01",
                "01": "11",
                "26": paynowFormat,
                "53": currencyCode,
                "54": amount,
                "59": name,
                "62": additionalInfo
            };
            var qrWithoutCRC = this._getQrString(sgqrFormat);
            return qrWithoutCRC + +"6304" + this.getCRC(qrWithoutCRC + "6304");
        }
    };
    HomePage.prototype._getQrString = function (obj) {
        var _createdQr = "";
        console.log("This is obj ", obj);
        var keys = Object.keys(obj).map(function (d) { return parseInt(d); }).sort();
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var k = keys_1[_i];
            var key = ((100 + parseInt(k)) + "").slice(1);
            if (typeof obj[key] === 'string') {
                _createdQr = _createdQr + key + ((100 + parseInt(obj[key].length)) + "").slice(1) + obj[key];
            }
            else if (typeof obj[key] === 'object') {
                var subString = this._getQrString(obj[key]);
                _createdQr = _createdQr + key + ((100 + parseInt(subString.length)) + "").slice(1) + subString;
            }
        }
        return _createdQr;
    };
    HomePage.prototype.getCRC = function (qrString) {
        // let inCodeCRC = qrString.slice(-4);
        // qrString = qrString.slice(0,-4);
        var crc = 0xFFFF;
        var polynomial = 0x1021;
        var i, j;
        for (i = 0; i < qrString.length; i++) {
            var b = qrString.charCodeAt(i);
            for (j = 0; j < 8; j++) {
                var bit = ((b >> (7 - j) & 1) == 1);
                var c15 = ((crc >> 15 & 1) == 1);
                crc <<= 1;
                if (c15 ^ bit)
                    crc ^= polynomial;
            }
        }
        crc &= 0xFFFF;
        debugger;
        console.log(crc);
        console.log(crc.toString(16).toUpperCase());
        var crcToreturn = crc.toString(16).toUpperCase();
        while (crcToreturn.length < 4) {
            crcToreturn = "0" + crcToreturn;
        }
        console.log(crcToreturn);
        return crcToreturn;
        //01221900B
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sujeetkumarsrivastava/Desktop/demo/ionic/qrgenerator/qrgenerator/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      QR Generator POC\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-auto class="form">\n        <ion-list>\n\n          <ion-item>\n            <ion-label text-wrap stacked>currencyCode (702 for SGD)</ion-label>\n            <ion-input type="text" [(ngModel)]="currencyCode"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-wrap stacked>amount</ion-label>\n            <ion-input type="text" [(ngModel)]="amount"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-wrap stacked>proxyType (0 - Mobile number (for P2P); 1 (Not used); 2 – UEN): </ion-label>\n            <ion-input type="text" [(ngModel)]="proxyType"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-wrap stacked>proxyValue (If proxy type is 0, mobile number is International Dialling Code preceding with \'+\' plus up to 15-\n              digit Mobile Number if proxy type is 2, Unique Entity Number (UEN) can be 9 or 10 (without suffix) OR 12 or\n              13 (with suffix) char):</ion-label>\n            <ion-input type="text" [(ngModel)]="proxyValue"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-wrap stacked>isAmountEditable (“0” – amount cannot be edited or “1” amount can be edited; To be ‘1’ if no amount is provided.\n              If amount is provided, can be either ‘0’ or ‘1’.):</ion-label>\n            <ion-input type="text" [(ngModel)]="isAmountEditable"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-wrap stacked>expiryDate (YYYYMMDD):</ion-label>\n            <ion-input type="text" [(ngModel)]="expiryDate"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-wrap stacked>name Used for P2M only (This is the trade name/store name/ “doing-business-as” name.):</ion-label>\n            <ion-input type="text" [(ngModel)]="name"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-wrap stacked>discription</ion-label>\n            <ion-input type="text" [(ngModel)]="discription"></ion-input>\n          </ion-item>\n\n        </ion-list>\n\n        <button class="btn-center" ion-button (click)="generateQr()">Generate QR</button>\n      </ion-col>\n      <ion-col col-auto class="qr">\n        <ion-item>\n          <ion-label text-wrap stacked>QR string</ion-label>\n          <ion-textarea [(ngModel)]="generatedQrString"></ion-textarea>\n        </ion-item>\n        <qr-code class="qrcode" [level]="\'H\'" [value]="generatedQrString" [size]="300"></qr-code>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/sujeetkumarsrivastava/Desktop/demo/ionic/qrgenerator/qrgenerator/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_qrcode__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7_angular2_qrcode__["a" /* QRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sujeetkumarsrivastava/Desktop/demo/ionic/qrgenerator/qrgenerator/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sujeetkumarsrivastava/Desktop/demo/ionic/qrgenerator/qrgenerator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map