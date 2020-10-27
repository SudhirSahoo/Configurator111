(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+lvf":
/*!****************************************************!*\
  !*** ./src/app/navigation/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "umHo");
/* harmony import */ var _toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle-sidebar/toggle-sidebar.module */ "kNJY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");






class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["ToggleSidebarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["ToggleSidebarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["ToggleSidebarModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GALC\UI\Configurator\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "J1Ni":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: mainContentAnimation, sidebarAnimation, iconAnimation, labelAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainContentAnimation", function() { return mainContentAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarAnimation", function() { return sidebarAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconAnimation", function() { return iconAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelAnimation", function() { return labelAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const defaultDuration = '100ms';
const defaultMinWidth = '60px';
const defaultMaxWidth = '200px';
const defaultMinFontSize = '20px';
const defaultMaxFontSize = '24px';
function mainContentAnimation(animationDuration = defaultDuration, minWidth = defaultMinWidth, maxWidth = defaultMaxWidth) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('onSideNavChange', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'margin-left': minWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'margin-left': maxWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-in`)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-out`)),
    ]);
}
function sidebarAnimation(animationDuration = defaultDuration, minWidth = defaultMinWidth, maxWidth = defaultMaxWidth) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('onSideNavChange', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: minWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            width: maxWidth,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@iconAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@labelAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-in-out`)
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@iconAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@labelAnimation', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-in-out`)
        ])),
    ]);
}
function iconAnimation(animationDuration = defaultDuration, minFontSize = defaultMinFontSize, maxFontSize = defaultMaxFontSize) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('iconAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            fontSize: maxFontSize,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            fontSize: minFontSize,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-in-out`)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-in-out`)),
    ]);
}
function labelAnimation(animationDuration = defaultDuration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('labelAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'inline',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            display: 'none',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-in-out`)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${animationDuration} ease-in-out`)),
    ]);
}


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() {
        this.title = 'Dashboard';
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[1, "main_container", 2, "height", "100vh"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hello...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "J1Ni");
/* harmony import */ var _navigation_service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/service/sidebar.service */ "XUxe");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/header/header.component */ "umHo");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/sidebar/sidebar.component */ "UB3v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AppComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    ngOnInit() {
        this.sidebarService.sidebarStateObservable$
            .subscribe((newState) => {
            this.sidebarState = newState;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navigation_service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [["mode", "side", "opened", "true", "autosize", "", "fixedTopGap", "56", 2, "min-width", "60px", "background", "#F3F3F3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@onSideNavChange", ctx.sidebarState);
    } }, directives: [_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _navigation_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            Object(_animations__WEBPACK_IMPORTED_MODULE_1__["mainContentAnimation"])(),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_animations__WEBPACK_IMPORTED_MODULE_1__["mainContentAnimation"])(),
                ]
            }]
    }], function () { return [{ type: _navigation_service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");




class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "UB3v":
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "J1Ni");
/* harmony import */ var _service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/sidebar.service */ "XUxe");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");








const _c0 = function (a0) { return { "rotated": a0 }; };
function SidebarComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.showSubmenu));
} }
function SidebarComponent_div_8_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nested Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_8_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.showSubSubMenu));
} }
const _c1 = function (a0) { return { "expanded": a0 }; };
function SidebarComponent_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SubSubmenu Item 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SubSubmenu Item 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r4.showSubSubMenu));
} }
function SidebarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terminal 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Terminal 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Terminal 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Terminal 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_8_Template_mat_list_item_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showSubSubMenu = !ctx_r5.showSubSubMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_div_8_span_11_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarComponent_div_8_mat_icon_12_Template, 2, 3, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidebarComponent_div_8_div_13_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r1.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/terminal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/terminal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isExpanded || ctx_r1.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isExpanded || ctx_r1.isShowing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isShowing || ctx_r1.isExpanded);
} }
class SidebarComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.isExpanded = true;
        this.showSubmenu = false;
        this.isShowing = false;
        this.showSubSubMenu = false;
    }
    ngOnInit() {
        this.sidebarService.sidebarStateObservable$.
            subscribe((newState) => {
            this.sidebarState = newState;
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 25, vars: 11, consts: [[1, "sidebar_menu"], [1, "menu-list"], ["routerLinkActive", "active-list-item", "routerLink", "login", "title", "af", 1, "parent", 3, "click"], [1, "icon", "menu-icon", 2, "font-size", "1em !important"], ["class", "menu-button", 3, "ngClass", 4, "ngIf"], [1, "label"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], ["routerLinkActive", "active-list-item", "routerLink", "dashboard", "title", "Dashboard"], [1, "icon"], ["routerLinkActive", "active-list-item", "routerLink", "work", "title", "Work"], ["routerLinkActive", "active-list-item", "routerLink", "feedback", "title", "Feedback"], [1, "menu-button", 3, "ngClass"], [1, "submenu", 3, "ngClass"], ["mat-list-item", "", 3, "routerLink"], ["mat-list-item", "", "routerLink", "/terminal", "routerLinkActive", "active"], ["routerLink", "/terminal"], [3, "routerLink"], [1, "parent", 3, "click"], ["class", "full-width", 4, "ngIf"], [1, "full-width"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-nav-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_list_item_click_2_listener() { return ctx.showSubmenu = !ctx.showSubmenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_mat_icon_5_Template, 2, 3, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "AF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_div_8_Template, 14, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@onSideNavChange", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconAnimation", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconAnimation", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconAnimation", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@iconAnimation", ctx.sidebarState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@labelAnimation", ctx.sidebarState);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".sidebar_menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.sidebar_menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: normal;\n}\n.sidebar_menu[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 10px 1px 0 0;\n  text-align: center;\n  vertical-align: middle;\n}\n.sidebar_menu[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  font-size: 1em !important;\n}\n.sidebar_menu[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sidebar_menu[_ngcontent-%COMP%]   .active-list-item[_ngcontent-%COMP%] {\n  color: #3f51b5 !important;\n}\n.menu-button[_ngcontent-%COMP%] {\n  transition: 300ms ease-in-out;\n  transform: rotate(-90deg);\n}\n.menu-button.rotated[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.submenu[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  transition: transform 300ms ease;\n  transform: scaleY(0);\n  transform-origin: top;\n  padding-left: 30px;\n}\n.submenu.expanded[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.arrow-down[_ngcontent-%COMP%] {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAHwAAAB8ARUP7eQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAACISURBVChTvc+xCoNAEIThDXkQH8FCYhGwsRLEgJ2lEN81VQg2toIW2qVK7z9RREEtHfjg7liWOTslIZzxeJhgYhU+uOmykwQd3rpEaNEg1cMiFzyh4Rc82BU5fqjxf5xS4AstUwMtmJNBm0r4eKCHhtViMzFUTzSsGkd/W9XbrLGXO9zxeG7MBoKmGaM1wCzfAAAAAElFTkSuQmCC) no-repeat right;\n}\n.arrow-up[_ngcontent-%COMP%] {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAbrQAAG60BIeRSlQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAANpJREFUOE9jGJzAwsJCyM7OztPMzIwPKkQ8sLe353F2dl7v6ur6BEjPBmI1qBRxAGgAh6OjY4m7u/t/oCF/gQacBtJuUGmiAQvQC7YuLi5fgZr/Ozk5fQCyC6ByxANLS0sxoAsuAzX/dXNz+w9kzwKGDydUmijADPSSA9AVv4CG/Ae5CIhjoXL4gY2NjSjQxlKghtdQb5wGGhYClcYPgBotgQG5BqjxN9TpM4CaNaDS+AEoDQA13ABpBNr+G2hQkpWVFS9UmijABDTAEGj7DqAhIFuZIMLYAAMDAPuUQ9EUeG3QAAAAAElFTkSuQmCC) no-repeat right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFDRSxPQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNFLHlCQUFBO0FBREY7QUFJRTtFQUNFLFNBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7QUFISjtBQU1BO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtBQUhGO0FBS0E7RUFDRSx1QkFBQTtBQUZGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHQTtFQUNFLG9CQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGO0FBR0E7RUFDQSwyYUFBQTtBQUFBO0FBR0E7RUFDQSx1Z0JBQUE7QUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJfbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLm1lbnUtbGlzdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDFweCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbi5tZW51LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgLmxhYmVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUtbGlzdC1pdGVtIHtcclxuICAgIGNvbG9yOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5tZW51LWJ1dHRvbiB7XHJcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG4ubWVudS1idXR0b24ucm90YXRlZCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbn1cclxuLnN1Ym1lbnUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zdWJtZW51LmV4cGFuZGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYXJyb3ctZG93biB7XHJcbmJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUF3QUFBQU1DQVlBQUFCV2RWem5BQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBQUh3QUFBQjhBUlVQN2VRQUFBQVlkRVZZZEZOdlpuUjNZWEpsQUhCaGFXNTBMbTVsZENBMExqQXVOV1dGTW1VQUFBQ0lTVVJCVkNoVHZjK3hDb05BRUlUaERYa1FIOEZDWWhHd3NSTEVnSjJsRU44MVZRZzJ0b0lXMnFWSzd6OVJSRUV0SGZqZzdsaVdPVHNsSVp6eGVKaGdZaFUrdU9teWt3UWQzcnBFYU5FZzFjTWlGenloNFJjODJCVTVmcWp4ZjV4UzRBc3RVd010bUpOQm0wcjRlS0NIaHRWaU16RlVUelNzR2tkL1c5WGJyTEdYTzl6eGVHN01Cb0ttR2FNMXdDemZBQUFBQUVsRlRrU3VRbUNDKSBuby1yZXBlYXQgcmlnaHQ7XHJcbn1cclxuXHJcbi5hcnJvdy11cCB7XHJcbmJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQU1DQVlBQUFCcjV6MkJBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQWx3U0ZsekFBQWJyUUFBRzYwQkllUlNsUUFBQUJoMFJWaDBVMjltZEhkaGNtVUFjR0ZwYm5RdWJtVjBJRFF1TUM0MVpZVXlaUUFBQU5wSlJFRlVPRTlqR0p6QXdzSkN5TTdPenRQTXpJd1BLa1E4c0xlMzUzRjJkbDd2NnVyNkJFalBCbUkxcUJSeEFHZ0FoNk9qWTRtN3UvdC9vQ0YvZ1FhY0J0SnVVR21pQVF2UUM3WXVMaTVmZ1pyL096azVmUUN5QzZCeXhBTkxTMHN4b0FzdUF6WC9kWE56K3c5a3p3S0dEeWRVbWlqQURQU1NBOUFWdjRDRy9BZTVDSWhqb1hMNGdZMk5qU2pReGxLZ2h0ZFFiNXdHR2hZQ2xjWVBnQm90Z1FHNUJxanhOOVRwTTRDYU5hRFMrQUVvRFFBMTNBQnBCTnIrRzJoUWtwV1ZGUzlVbWlqQUJEVEFFR2o3RHFBaElGdVpJTUxZQUFNREFQdVVROUVVZUczUUFBQUFBRWxGVGtTdVFtQ0MpIG5vLXJlcGVhdCByaWdodDtcclxufVxyXG5cclxuIl19 */"], data: { animation: [
            Object(_animations__WEBPACK_IMPORTED_MODULE_1__["sidebarAnimation"])(),
            Object(_animations__WEBPACK_IMPORTED_MODULE_1__["iconAnimation"])(),
            Object(_animations__WEBPACK_IMPORTED_MODULE_1__["labelAnimation"])(),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss'],
                animations: [
                    Object(_animations__WEBPACK_IMPORTED_MODULE_1__["sidebarAnimation"])(),
                    Object(_animations__WEBPACK_IMPORTED_MODULE_1__["iconAnimation"])(),
                    Object(_animations__WEBPACK_IMPORTED_MODULE_1__["labelAnimation"])(),
                ]
            }]
    }], function () { return [{ type: _service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "XUxe":
/*!*******************************************************!*\
  !*** ./src/app/navigation/service/sidebar.service.ts ***!
  \*******************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SidebarService {
    constructor() {
        this.sidebarState = 'open';
        this.sidebarStateChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebarState);
        this.sidebarStateObservable$ = this.sidebarStateChanged$.asObservable();
        this.sidebarStateChanged$.next('open');
    }
    toggle() {
        this.sidebarState = this.sidebarState === 'open' ? 'close' : 'open';
        this.sidebarStateChanged$.next(this.sidebarState);
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-module */ "j5wd");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "TDBs");
/* harmony import */ var _navigation_toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/toggle-sidebar/toggle-sidebar.module */ "kNJY");
/* harmony import */ var _navigation_header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/header/header.module */ "+lvf");
/* harmony import */ var _navigation_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/sidebar/sidebar.module */ "oziH");
/* harmony import */ var _af_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./af/terminal/terminal.module */ "pHe6");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MatModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
            _navigation_header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
            _navigation_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"],
            _navigation_toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["ToggleSidebarModule"],
            _af_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_10__["TerminalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["MatModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
        _navigation_header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
        _navigation_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"],
        _navigation_toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["ToggleSidebarModule"],
        _af_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_10__["TerminalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__["MatModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
                    _navigation_header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
                    _navigation_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"],
                    _navigation_toggle_sidebar_toggle_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["ToggleSidebarModule"],
                    _af_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_10__["TerminalModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cTMq":
/*!***************************************************!*\
  !*** ./src/app/af/terminal/terminal.component.ts ***!
  \***************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TerminalComponent {
    constructor() { }
    ngOnInit() {
    }
}
TerminalComponent.ɵfac = function TerminalComponent_Factory(t) { return new (t || TerminalComponent)(); };
TerminalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminalComponent, selectors: [["app-terminal"]], decls: 3, vars: 0, consts: [[1, "main_container", 2, "height", "100vh"]], template: function TerminalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "terminal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FmL3Rlcm1pbmFsL3Rlcm1pbmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terminal',
                templateUrl: './terminal.component.html',
                styleUrls: ['./terminal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j5wd":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");











class MatModule {
}
MatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatModule });
MatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatModule_Factory(t) { return new (t || MatModule)(); }, providers: [], imports: [[
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
        ], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatModule, { imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
                ],
                providers: [],
                exports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kNJY":
/*!********************************************************************!*\
  !*** ./src/app/navigation/toggle-sidebar/toggle-sidebar.module.ts ***!
  \********************************************************************/
/*! exports provided: ToggleSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebarModule", function() { return ToggleSidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _toggle_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-sidebar.component */ "xINd");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class ToggleSidebarModule {
}
ToggleSidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToggleSidebarModule });
ToggleSidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToggleSidebarModule_Factory(t) { return new (t || ToggleSidebarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToggleSidebarModule, { declarations: [_toggle_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ToggleSidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]], exports: [_toggle_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ToggleSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleSidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _toggle_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ToggleSidebarComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                ],
                exports: [
                    _toggle_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ToggleSidebarComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "oziH":
/*!******************************************************!*\
  !*** ./src/app/navigation/sidebar/sidebar.module.ts ***!
  \******************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component */ "UB3v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");







class SidebarModule {
}
SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidebarModule });
SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidebarModule_Factory(t) { return new (t || SidebarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarModule, { declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]], exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                ],
                exports: [
                    _sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "pHe6":
/*!************************************************!*\
  !*** ./src/app/af/terminal/terminal.module.ts ***!
  \************************************************/
/*! exports provided: TerminalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalModule", function() { return TerminalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _terminal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminal.component */ "cTMq");




class TerminalModule {
}
TerminalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TerminalModule });
TerminalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TerminalModule_Factory(t) { return new (t || TerminalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TerminalModule, { declarations: [_terminal_component__WEBPACK_IMPORTED_MODULE_2__["TerminalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_terminal_component__WEBPACK_IMPORTED_MODULE_2__["TerminalComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "umHo":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _toggle_sidebar_toggle_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle-sidebar/toggle-sidebar.component */ "xINd");




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [["color", "primary"], [1, "title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toggle-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Awesome slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _toggle_sidebar_toggle_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ToggleSidebarComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _af_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./af/terminal/terminal.component */ "cTMq");






const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'terminal', component: _af_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_3__["TerminalComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xINd":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/toggle-sidebar/toggle-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ToggleSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSidebarComponent", function() { return ToggleSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/sidebar.service */ "XUxe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class ToggleSidebarComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    ngOnInit() { }
    toggleSideNav() {
        this.sidebarService.toggle();
    }
}
ToggleSidebarComponent.ɵfac = function ToggleSidebarComponent_Factory(t) { return new (t || ToggleSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"])); };
ToggleSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleSidebarComponent, selectors: [["app-toggle-sidebar"]], decls: 3, vars: 0, consts: [["mat-icon-button", "", 3, "click"]], template: function ToggleSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleSidebarComponent_Template_button_click_0_listener() { return ctx.toggleSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vdG9nZ2xlLXNpZGViYXIvdG9nZ2xlLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toggle-sidebar',
                templateUrl: './toggle-sidebar.component.html',
                styleUrls: ['./toggle-sidebar.component.scss']
            }]
    }], function () { return [{ type: _service_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map