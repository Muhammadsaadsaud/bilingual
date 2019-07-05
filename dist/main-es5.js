(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 i18n=\"User welcome|An introduction header for this sample@@introductionHeader\">\n  Hello i18n!\n</h1>\n\n<ng-container i18n>I don't output any element</ng-container>\n\n<br />\n\n<img [src]=\"logo\" i18n-title title=\"Angular logo\" />\n<br>\n<button (click)=\"inc(1)\">+</button> <button (click)=\"inc(-1)\">-</button>\n<span i18n>Updated {minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}</span>\n({{minutes}})\n<br><br>\n<button (click)=\"male()\">&#9794;</button> <button (click)=\"female()\">&#9792;</button> <button (click)=\"other()\">&#9895;</button>\n<span i18n>The author is {gender, select, male {male} female {female} other {other}}</span>\n<br><br>\n<span i18n>Updated: {minutes, plural,\n  =0 {just now}\n  =1 {one minute ago}\n  other {{{minutes}} minutes ago by {gender, select, male {male} female {female} other {other}}}}\n</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/locale/messages.fr.xlf":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/locale/messages.fr.xlf ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n  <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n    <body>\n      <trans-unit id=\"introductionHeader\" datatype=\"html\">\n        <source>\n    Hello i18n!\n</source>\n        <target>\n    Bonjour i18n !\n</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">4</context>\n        </context-group>\n        <note priority=\"1\" from=\"description\">An introduction header for this sample</note>\n        <note priority=\"1\" from=\"meaning\">User welcome</note>\n      </trans-unit>\n      <trans-unit id=\"ba0cc104d3d69bf669f97b8d96a4c5d8d9559aa3\" datatype=\"html\">\n        <source>I don&apos;t output any element</source>\n        <target>Je n'affiche aucun élément</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">10</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"701174153757adf13e7c24a248c8a873ac9f5193\" datatype=\"html\">\n        <source>Angular logo</source>\n        <target>Logo d'Angular</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">16</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"d69f6b42305f49332026fef24b40227f02e34594\" datatype=\"html\">\n        <source>Updated <x id=\"ICU\" equiv-text=\"{minutes, plural, =0 {...} =1 {...} other {...}}\"/></source>\n        <target>Mis à jour <x id=\"ICU\" equiv-text=\"{minutes, plural, =0 {...} =1 {...} other {...}}\"/></target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">21</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"5a134dee893586d02bffc9611056b9cadf9abfad\" datatype=\"html\">\n        <source>{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {<x id=\"INTERPOLATION\" equiv-text=\"{{minutes}}\"/> minutes ago} }</source>\n        <target>{VAR_PLURAL, plural, =0 {à l'instant} =1 {il y a une minute} other {il y a <x id=\"INTERPOLATION\" equiv-text=\"{{minutes}}\"/> minutes} }</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">21</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"f99f34ac9bd4606345071bd813858dec29f3b7d1\" datatype=\"html\">\n        <source>The author is <x id=\"ICU\" equiv-text=\"{gender, select, male {...} female {...} other {...}}\"/></source>\n        <target>L'auteur est <x id=\"ICU\" equiv-text=\"{gender, select, male {...} female {...} other {...}}\"/></target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">27</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"eff74b75ab7364b6fa888f1cbfae901aaaf02295\" datatype=\"html\">\n        <source>{VAR_SELECT, select, male {male} female {female} other {other} }</source>\n        <target>{VAR_SELECT, select, male {un homme} female {une femme} other {autre} }</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">27</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"972cb0cf3e442f7b1c00d7dab168ac08d6bdf20c\" datatype=\"html\">\n        <source>Updated: <x id=\"ICU\" equiv-text=\"{minutes, plural, =0 {...} =1 {...} other {...}}\"/>\n</source>\n        <target>Mis à jour: <x id=\"ICU\" equiv-text=\"{minutes, plural, =0 {...} =1 {...} other {...}}\"/>\n</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">31</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"7151c2e67748b726f0864fc443861d45df21d706\" datatype=\"html\">\n        <source>{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {<x id=\"INTERPOLATION\" equiv-text=\"{{minutes}}\"/> minutes ago by {VAR_SELECT, select, male {male} female {female} other {other} }} }</source>\n        <target>{VAR_PLURAL, plural, =0 {à l'instant} =1 {il y a une minute} other {il y a <x id=\"INTERPOLATION\" equiv-text=\"{{minutes}}\"/> minutes par {VAR_SELECT, select, male {un homme} female {une femme} other {autre} }} }</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app\\app.component.ts</context>\n          <context context-type=\"linenumber\">31</context>\n        </context-group>\n      </trans-unit>\n    </body>\n  </file>\n</xliff>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.minutes = 0;
        this.gender = 'female';
        this.fly = true;
        this.logo = 'https://angular.io/assets/images/logos/angular/angular.png';
        this.heroes = ['Magneta', 'Celeritas', 'Dynama'];
    }
    AppComponent.prototype.inc = function (i) {
        this.minutes = Math.min(5, Math.max(0, this.minutes + i));
    };
    AppComponent.prototype.male = function () { this.gender = 'male'; };
    AppComponent.prototype.female = function () { this.gender = 'female'; };
    AppComponent.prototype.other = function () { this.gender = 'other'; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'fr' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// we use the webpack raw-loader to return the content as a string
var translations = __webpack_require__(/*! raw-loader!./locale/messages.fr.xlf */ "./node_modules/raw-loader/index.js!./src/locale/messages.fr.xlf");
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TRANSLATIONS"], useValue: translations },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TRANSLATIONS_FORMAT"], useValue: 'xlf' }
    ]
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\muhsau\Downloads\i18n\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map