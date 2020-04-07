function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<mat-drawer-container>\n    <mat-drawer-content>\n        <router-outlet></router-outlet>\n    </mat-drawer-content>\n</mat-drawer-container>\n\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-patient/new-patient.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-patient/new-patient.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNewPatientNewPatientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>New Patient</h2>\n\n<form class=\"example-form\" id=\"info_form\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>First name: (*)</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\">\n    </mat-form-field>\n\n    <!--<mat-form-field class=\"example-full-width\">\n        <mat-label>Last name:</mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\">\n    </mat-form-field>-->\n\n    <mat-label style=\"color:darkgray; font-size: small;\">Date of Birth: (*)</mat-label>\n    <br/>\n    <mat-form-field style=\"width: 50px;\">\n        <mat-select [(value)]=\"day\">\n            <mat-option *ngFor=\"let d of daysLst\" [value]=\"d\">{{d}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 80px;\">\n        <mat-select [(value)]=\"month\">\n            <mat-option *ngFor=\"let m of monthsLst\" [value]=\"m\">{{m.name}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 80px;\">\n        <mat-select [(value)]=\"year\">\n            <mat-option *ngFor=\"let y of yearsLst\" [value]=\"y\">{{y}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <br/>\n    <mat-checkbox [(ngModel)]=\"inRisk\" name=\"inrisk\">Risk group</mat-checkbox>\n    <br/>\n    <br/>\n    <mat-label style=\"color:darkgray; font-size: small;\">Sensors:</mat-label>\n    <br/>\n    <table mat-table \n           #table\n           [dataSource]=\"sensorsDataSource\" \n           class=\"mat-elevation-z8\" \n           style=\"width: 100%;\"\n           >\n        <!-- UnitID Column -->\n        <ng-container matColumnDef=\"UnitID\">\n          <th mat-header-cell *matHeaderCellDef> UnitID </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.UnitID}} </td>\n        </ng-container>\n      \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"Name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Name}} </td>\n        </ng-container>\n      \n        <!-- Vendor Column -->\n        <ng-container matColumnDef=\"Vendor\">\n          <th mat-header-cell *matHeaderCellDef> Vendor </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Vendor}} </td>\n        </ng-container>\n\n        <!--Release Col-->\n        <ng-container matColumnDef=\"remove\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)='removeSensorFromPatient(element)'>\n                <mat-icon>highlight_off</mat-icon>\n            </button>\n            </td>\n          </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <br/>\n      <br/>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor.Name}}</mat-label>\n        <mat-select [(value)]=\"sensor\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.Name}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <button mat-raised-button color='primary' (click)='AddSensorToPatient()'>Add</button>\n    <!--<label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor2.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor2\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor3.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor3\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor4.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor4\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor5.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor5\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>-->\n  </form>\n  \n  <form class=\"example-form\" id=\"remarks_form\">\n      <!--<h3>Remarks</h3>-->\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Remarks</mat-label>\n          <textarea matInput type=\"text\" \n            style=\"width: 500px; height: 50px;\" [(ngModel)]=\"remarks\" name=\"remarks\"></textarea>\n        </mat-form-field>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Room:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"department\" name=\"department\" placeholder=\"Department (*)\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Room number (*)\">\n          </mat-form-field>\n          <br/>\n          <mat-label style=\"color:darkgray; font-size: small;\">Bed:</mat-label>\n          <label style=\"visibility: hidden;\">.........</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedNumber\" name=\"bedNumber\" placeholder=\"Bed number (*)\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedLocation\" name=\"bedLocation\" placeholder=\"Bed location\">\n          </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal HR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minHR\" name=\"minHR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxHR\" name=\"maxHR\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal SpO2 range:</mat-label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minSpO2\" name=\"minSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxSpO2\" name=\"maxSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal BR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minBR\" name=\"minBR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxBR\" name=\"maxBR\" disabled=\"true\">\n        </mat-form-field>        \n  </form>\n\n<button mat-raised-button color='primary' (click)='OnClick()'>Finish</button>\n<br/>\n  \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-sensor/new-sensor.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-sensor/new-sensor.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNewSensorNewSensorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>New Sensor</h1>\n\n<form class=\"example-form\" id=\"info_form\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Sensor name: (*)</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"sensorName\" name=\"sensorName\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Vendor: (*)</mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"sensorVendor\" name=\"sensorVendor\">\n    </mat-form-field>\n</form>\n\n\n<button mat-raised-button color='primary' (click)='OnClick()'>Finish</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-data.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-data.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group>\n    <mat-tab label=\"Patient Information\">\n        <!--<h1>{{name}}</h1>-->\n        <div style=\"width: 100%; display: flex; flex-flow: row wrap;\">\n            <app-patient-personal-data id=\"patient_personal_info\"></app-patient-personal-data>\n            <app-patient-monitor id=\"monitor\"></app-patient-monitor>\n        </div>\n        <app-patient-history></app-patient-history>\n    </mat-tab>\n    <mat-tab label=\"Settings\">\n        <app-patient-settings></app-patient-settings>\n    </mat-tab>\n</mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-history/patient-history.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-history/patient-history.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientHistoryPatientHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 style=\"width: 100%;\">Patient History:</h2>\n\n<div style=\"width: 100%; display: flex; flex-flow: row wrap;\">\n<mat-card id=\"alerts_history\" >\n  <div>\n      <label><b>Alerts:</b></label>\n      <ul>\n        <li *ngFor=\"let alert of alerts\">\n          <b>{{ alert.name }}</b> : {{alert.time.toLocaleString()}}\n        </li>\n      </ul>\n    </div>\n</mat-card>\n\n<mat-card id=\"scoring_graph\">\n  <div class=\"chart-wrapper\"> \n      <canvas baseChart \n          [datasets]=\"lineChartData\" \n          [labels]=\"lineChartLabels\" \n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\" \n          [legend]=\"lineChartLegend\" \n          [chartType]=\"lineChartType\" \n          [plugins]=\"lineChartPlugins\">\n      </canvas>\n  </div>\n</mat-card>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorBreathingRateMonitorBreathingRateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <b><label style=\"font-size: xx-small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: yellow;\n                     \"\n        >\nBrPm\n</label></b>\n<br/>\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"BR\">{{currBr}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorHeartRateMonitorHeartRateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <b><label style=\"font-size: xx-small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: cadetblue;\n                     \"\n        >\nBPM\n</label></b>\n<br/>\n<img [src] = 'currPic' style=\"width: 20px;\">\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"HR\">{{heartRate}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorSpo2MonitorSpo2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <b><label style=\"font-size: xx-small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: cornflowerblue;\n                     \"\n        >\nSpO2 %\n</label></b>\n<br/>\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"SPO2\">{{SpO2}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorTemperatureMonitorTemperatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <b><label style=\"font-size: small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: aqua;\n                     \"\n        >\n&#x2103;\n</label></b>\n<br/>\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"TMP\">{{currTmp}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/patient-monitor.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/patient-monitor.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorPatientMonitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-monitor-heart-rate></app-monitor-heart-rate>\n<app-monitor-spo2></app-monitor-spo2>\n<app-monitor-breathing-rate></app-monitor-breathing-rate>\n<app-monitor-temperature></app-monitor-temperature>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientPersonalDataPatientPersonalDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card style=\"width: 320px;\">\n    <h1>{{patientName}}</h1>\n    <label style=\"color:darkgray; font-size: small;\">Location:</label><br/>\n    <label>{{location.Hospital}}, {{location.Department}}/{{location.RoomNumber}}</label>\n    <label style=\"visibility: hidden;\">..</label>\n    <label style=\"color:darkgray; font-size: small;\">Bed No: </label>\n    <label style=\"visibility: hidden;\">.</label>\n    <label>{{location.BedNumber}} {{location.BedLocation}}</label><br/><br/>\n    <label style=\"color:darkgray; font-size: small;\">Risk group:</label>\n    <label style=\"visibility: hidden;\">..</label>\n    <mat-checkbox [(ngModel)]=\"inRisk\" [disabled]=\"disabled\"></mat-checkbox><br/><br/>\n    <label style=\"color:darkgray; font-size: small;\">Attached to respirator:</label>\n    <label style=\"visibility: hidden;\">..</label>\n    <mat-checkbox [(ngModel)]=\"extraO2\" [disabled]=\"disabled\"></mat-checkbox><br/><br/>\n    <img class=\"roundImg\" [src] = \"statusPath\"><br/>\n</mat-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-settings/patient-settings.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-settings/patient-settings.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientSettingsPatientSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"example-form\">\n    <mat-label style=\"color:darkgray; font-size: small;\">Sensors:</mat-label>\n    <br/>\n    <br/>\n    <table mat-table \n        #table\n        [dataSource]=\"sensorsDataSource\" \n        class=\"mat-elevation-z8\" \n        style=\"width: 80%;\"\n        >\n    <!-- UnitID Column -->\n    <ng-container matColumnDef=\"UnitID\">\n    <th mat-header-cell *matHeaderCellDef> UnitID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.UnitID}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.Name}} </td>\n    </ng-container>\n\n    <!-- Vendor Column -->\n    <ng-container matColumnDef=\"Vendor\">\n    <th mat-header-cell *matHeaderCellDef> Vendor </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.Vendor}} </td>\n    </ng-container>\n\n    <!--Release Col-->\n    <ng-container matColumnDef=\"remove\">\n        <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n        <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button (click)='removeSensorFromPatient(element)'>\n            <mat-icon>highlight_off</mat-icon>\n        </button>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <br/>\n    <mat-form-field style=\"width: 65%;\">\n        <mat-label style=\"color: black;\">{{sensor1.Name}}</mat-label>\n        <mat-select [(value)]=\"sensor1\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.Name}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <button mat-raised-button color='primary' (click)='AddSensorToPatient()'>Add</button>\n    <!--<label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor2.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor2\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor3.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor3\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor4.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor4\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor5.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor5\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>-->\n\n    <br/>\n    <mat-label style=\"color:darkgray; font-size: small;\">Room:</mat-label>\n        <!--<label style=\"visibility: hidden;\">......</label>\n        <mat-form-field>\n          <input matInput type=\"text\" style=\"width: 30px;\" [(ngModel)]=\"roomNum\" name=\"room\">\n        </mat-form-field>\n        <br/>-->\n\n        <label style=\"visibility: hidden;\">......</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"department\" name=\"department\" placeholder=\"Department\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Room number\">\n          </mat-form-field>\n          <br/>\n          <mat-label style=\"color:darkgray; font-size: small;\">Bed:</mat-label>\n          <label style=\"visibility: hidden;\">.........</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedNumber\" name=\"bedNumber\" placeholder=\"Bed number\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedLocation\" name=\"bedLocation\" placeholder=\"Bed location\">\n          </mat-form-field>\n\n          <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal HR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minHR\" name=\"minHR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxHR\" name=\"maxHR\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal SpO2 range:</mat-label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minSpO2\" name=\"minSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxSpO2\" name=\"maxSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal BR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minBR\" name=\"minBR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxBR\" name=\"maxBR\" disabled=\"true\">\n        </mat-form-field>\n  </form>\n\n  <button mat-raised-button color='primary' (click)='OnSave()'>Save</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-release/patient-release.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-release/patient-release.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientReleasePatientReleaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Release Document</h1>\n<br/>\n\n<div id='patient_summary'>\n    <label>First name: </label>\n    <label>{{firstName}}</label>\n    <br/>\n    <br/>\n    <label>Age: </label>\n    <label>{{age}}</label>\n    <br/>\n    <br/>\n</div>\n\n<div id='remarks'>\n    <label>Remarks:</label>\n    <br/>\n    <textarea class=\"input_class\" rows=\"20\" [(ngModel)]=\"remarks\"></textarea>\n</div>\n<app-patient-history></app-patient-history>\n<br/>\n\n<button mat-raised-button (click)='OnFinishClick()'>Finish</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patients/patients.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patients/patients.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientsPatientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Patients Info</h1>\n<br/>\n\n<div>\n  <button mat-raised-button color='primary' (click) = 'newPatient()'>New patient</button>\n  <label style=\"visibility: hidden;\">..</label>\n  <!--<button mat-raised-button color='primary' (click) = 'newSensor()'>New sensor</button>-->\n</div>\n\n<br/>\n\n<div>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--Patient Col-->\n        <ng-container matColumnDef=\"PatientID\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> \n              <div>\n                <img [src] = 'patient_icon' class = 'icon'>\n                <br/>\n                Patient \n            </div>\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.PatientID}} </td>\n          </ng-container>\n\n          <!--Room Col-->\n          <ng-container matColumnDef=\"room\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'room_icon' class = 'icon'>\n              <br/>\n              Room\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.location.RoomNumber}} </td>\n          </ng-container>\n\n          <!--Age Col-->\n          <ng-container matColumnDef=\"age\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'age_icon' class = 'icon'>\n              <br/>\n              Age\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.personal.Age}} </td>\n          </ng-container>\n\n          <!--HR Col-->\n          <ng-container matColumnDef=\"heartRate\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'hr_icon' class = 'icon'>\n              <br/>\n              HR\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.heartRate}} </td>\n          </ng-container>\n\n          <!--BP Col-->\n          <ng-container matColumnDef=\"bloodPresure\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> \n              <img [src] = 'bp_icon' class = 'icon'>\n              <br/>\n              BP\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.bloodPresure}} </td>\n          </ng-container>\n\n          <!--SpO2 Col-->\n          <ng-container matColumnDef=\"spO2\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'spo2_icon' class = 'icon'>\n              <br/>\n              SpO2\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.spO2}} </td>\n          </ng-container>\n\n          <!--BR Col-->\n          <ng-container matColumnDef=\"breathingRate\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'br_icon' class = 'icon'>\n              <br/>\n              BR\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.breathingRate}} </td>\n          </ng-container>\n\n          <!--Extra O2 Col-->\n          <ng-container matColumnDef=\"extraO2\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> Extra <br/> O2 </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.extraO2}} </td>\n          </ng-container>\n\n          <!--Fever Col-->\n          <ng-container matColumnDef=\"fever\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'fever_icon' class = 'icon'>\n              <br/>\n              Fever\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.fever}} </td>\n          </ng-container>\n\n          <!--Breathing info-->\n          <ng-container matColumnDef=\"breathingInfo\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> Breathing <br/> Info </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.breathingInfo}} </td>\n          </ng-container>\n\n          <!--Alerts Col-->\n          <ng-container matColumnDef=\"alerts\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'alerts_icon' class = 'icon'>\n              <br/>\n              Alerts\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.alerts}} </td>\n          </ng-container>\n\n          <!--Progress Col-->\n          <ng-container matColumnDef=\"progress\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'progress_icon' class = 'icon'>\n              <br/>\n              Progress\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.progress}} </td>\n          </ng-container>\n\n          <!--Score Col-->\n          <ng-container matColumnDef=\"score\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> Score </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.score}} </td>\n          </ng-container>\n\n          <!--Data Col-->\n          <ng-container matColumnDef=\"data\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)='patientData(element)'>\n                <mat-icon>assignment_ind</mat-icon>\n            </button>\n            </td>\n          </ng-container>\n\n          <!--Release Col-->\n          <ng-container matColumnDef=\"release\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)='releasePatient(element)'>\n                <mat-icon>highlight_off</mat-icon>\n            </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n</div>\n\n<br/>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-divider></mat-divider>\n<footer color='primary'>\n    <!--TODO: maybe add content-->\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color='primary'>\n    <mat-toolbar-row>\n        <a routerLink=\"\">\n            <div>\n                <span (click)='OnClick()'>APP LOGO</span>\n            </div>\n        </a>\n\n        <!--<label style=\"visibility: hidden;\">\n            ................................................................\n        </label>-->\n\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"position: absolute; right: 0;\">\n            <mat-icon>settings</mat-icon>\n        </button>\n            <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)='newSensor()'>New sensor</button>\n            </mat-menu>\n\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<!--\n    <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"toggleSideBar()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <span> APP LOGO </span>\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n            <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>settings</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>help_outline</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\n                        <mat-icon>person_outline</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item>\n                            <mat-icon>exit_to_app</mat-icon>\n                            Sign out\n                        </button>\n                    </mat-menu>\n\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n-->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modules/new-sensor/new-sensor.component */
    "./src/app/modules/new-sensor/new-sensor.component.ts");
    /* harmony import */


    var _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/patient-release/patient-release.component */
    "./src/app/modules/patient-release/patient-release.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/patient-data/patient-data.component */
    "./src/app/modules/patient-data/patient-data.component.ts");
    /* harmony import */


    var _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/new-patient/new-patient.component */
    "./src/app/modules/new-patient/new-patient.component.ts");
    /* harmony import */


    var _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/patients/patients.component */
    "./src/app/modules/patients/patients.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layouts/default/default.component */
    "./src/app/layouts/default/default.component.ts");

    var routes = [{
      path: '',
      component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
      children: [{
        path: '',
        component: _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_5__["PatientsComponent"]
      }, {
        path: 'new-patient',
        component: _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_4__["NewPatientComponent"]
      }, {
        path: 'patient-data',
        component: _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_3__["PatientDataComponent"]
      }, {
        path: 'release-document',
        component: _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_2__["PatientReleaseComponent"]
      }, {
        path: 'new-sensor',
        component: _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_1__["NewSensorComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'covid19UI';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layouts/default/default.module */
    "./src/app/layouts/default/default.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // const config: SocketIoConfig = {url: 'http://localhost:4444', options:{} }


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_1__["DefaultModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/interfaces/PersonData.ts":
  /*!******************************************!*\
    !*** ./src/app/interfaces/PersonData.ts ***!
    \******************************************/

  /*! exports provided: PersonalData, Location, HospitalizationInfo, PersonSettings, AlertData, PersonHistory, PersonHealthData, DEFAULT_HOSPITAL, DEFAULT_PERSON_LOCATION, DEFAULT_PERSON_SETTINGS, DEFAULT_PERSON_HISTORY, HEALTH_DATA, SENSORS */

  /***/
  function srcAppInterfacesPersonDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalData", function () {
      return PersonalData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Location", function () {
      return Location;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalizationInfo", function () {
      return HospitalizationInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonSettings", function () {
      return PersonSettings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertData", function () {
      return AlertData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonHistory", function () {
      return PersonHistory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonHealthData", function () {
      return PersonHealthData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_HOSPITAL", function () {
      return DEFAULT_HOSPITAL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PERSON_LOCATION", function () {
      return DEFAULT_PERSON_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PERSON_SETTINGS", function () {
      return DEFAULT_PERSON_SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PERSON_HISTORY", function () {
      return DEFAULT_PERSON_HISTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HEALTH_DATA", function () {
      return HEALTH_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SENSORS", function () {
      return SENSORS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PersonalData = function PersonalData() {
      _classCallCheck(this, PersonalData);
    };

    var Location = function Location() {
      _classCallCheck(this, Location);
    };

    var HospitalizationInfo = function HospitalizationInfo() {
      _classCallCheck(this, HospitalizationInfo);
    };

    var PersonSettings = function PersonSettings() {
      _classCallCheck(this, PersonSettings);
    };

    var AlertData = function AlertData() {
      _classCallCheck(this, AlertData);
    };

    var PersonHistory = function PersonHistory() {
      _classCallCheck(this, PersonHistory);
    };

    var PersonHealthData = function PersonHealthData() {
      _classCallCheck(this, PersonHealthData);
    };

    var DEFAULT_HOSPITAL = 'Asuta';
    var DEFAULT_PERSON_LOCATION = {
      Hospital: DEFAULT_HOSPITAL,
      Department: 'B',
      RoomNumber: 100,
      BedNumber: 5,
      BedLocation: ''
    };
    var DEFAULT_PERSON_SETTINGS = {
      minHR: 51,
      maxHR: 90,
      minBR: 12,
      maxBR: 20,
      minSpO2: 96,
      maxSpO2: 100,
      sensors: []
    };
    var DEFAULT_PERSON_HISTORY = {
      alerts: [],
      scoring: []
    };
    var HEALTH_DATA = [{
      PatientID: 1,
      personal: {
        Name: 'Ron',
        Age: 15,
        Gender: 'male',
        HighRiskGroup: false
      },
      location: DEFAULT_PERSON_LOCATION,
      hospitalization: null,
      heartRate: 68,
      bloodPresure: '120/80',
      spO2: 99,
      breathingRate: 12,
      extraO2: 'NO',
      fever: 37,
      breathingInfo: '',
      alerts: '',
      progress: '',
      score: 0,
      history: DEFAULT_PERSON_HISTORY,
      settings: DEFAULT_PERSON_SETTINGS
    }, {
      PatientID: 2,
      personal: {
        Name: 'Dor',
        Age: 35,
        Gender: 'male',
        HighRiskGroup: true
      },
      location: DEFAULT_PERSON_LOCATION,
      hospitalization: null,
      heartRate: 68,
      bloodPresure: '120/80',
      spO2: 99,
      breathingRate: 12,
      extraO2: 'YES',
      fever: 37,
      breathingInfo: '',
      alerts: '',
      progress: '',
      score: 7,
      history: {
        alerts: [{
          name: 'no pulse',
          time: new Date()
        }, {
          name: 'no breath',
          time: new Date()
        }],
        scoring: [1, 5, 5, 4, 3, 2, 2, 0]
      },
      settings: DEFAULT_PERSON_SETTINGS
    }];
    var SENSORS = [{
      UnitID: 'None',
      Name: 'None',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '100',
      Name: 'Sensor1',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '101',
      Name: 'Sensor2',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '102',
      Name: 'Sensor3',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '103',
      Name: 'Sensor4',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '104',
      Name: 'Sensor5',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '105',
      Name: 'Sensor6',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '106',
      Name: 'Sensor7',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '107',
      Name: 'Sensor8',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '108',
      Name: 'Sensor9',
      Vendor: 'EarlySense',
      PatientID: -1
    }, {
      UnitID: '109',
      Name: 'Sensor10',
      Vendor: 'EarlySense',
      PatientID: -1
    }];
    /***/
  },

  /***/
  "./src/app/layouts/default/default.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/layouts/default/default.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsDefaultDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer-container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxjb3ZpZDE5VUkvc3JjXFxhcHBcXGxheW91dHNcXGRlZmF1bHRcXGRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layouts/default/default.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layouts/default/default.component.ts ***!
    \******************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppLayoutsDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DefaultComponent = /*#__PURE__*/function () {
      function DefaultComponent() {
        _classCallCheck(this, DefaultComponent);
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefaultComponent;
    }();

    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-default',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./default.component.scss */
      "./src/app/layouts/default/default.component.scss"))["default"]]
    })], DefaultComponent);
    /***/
  },

  /***/
  "./src/app/layouts/default/default.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/layouts/default/default.module.ts ***!
    \***************************************************/

  /*! exports provided: DefaultModule */

  /***/
  function srcAppLayoutsDefaultDefaultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultModule", function () {
      return DefaultModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../modules/new-sensor/new-sensor.component */
    "./src/app/modules/new-sensor/new-sensor.component.ts");
    /* harmony import */


    var _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../modules/patient-release/patient-release.component */
    "./src/app/modules/patient-release/patient-release.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_history_patient_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-history/patient-history.component */
    "./src/app/modules/patient-data/patient-history/patient-history.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_settings_patient_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-settings/patient-settings.component */
    "./src/app/modules/patient-data/patient-settings/patient-settings.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_heart_rate_monitor_heart_rate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_spo2_monitor_spo2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_breathing_rate_monitor_breathing_rate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_temperature_monitor_temperature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_patient_monitor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_personal_data_patient_personal_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-personal-data/patient-personal-data.component */
    "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-data.component */
    "./src/app/modules/patient-data/patient-data.component.ts");
    /* harmony import */


    var _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../modules/new-patient/new-patient.component */
    "./src/app/modules/new-patient/new-patient.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../modules/patients/patients.component */
    "./src/app/modules/patients/patients.component.ts");
    /* harmony import */


    var _default_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./default.component */
    "./src/app/layouts/default/default.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

    var DefaultModule = function DefaultModule() {
      _classCallCheck(this, DefaultModule);
    };

    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["NgModule"])({
      declarations: [_default_component__WEBPACK_IMPORTED_MODULE_15__["DefaultComponent"], _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_14__["PatientsComponent"], _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_12__["NewPatientComponent"], _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_11__["PatientDataComponent"], _modules_patient_data_patient_personal_data_patient_personal_data_component__WEBPACK_IMPORTED_MODULE_10__["PatientPersonalDataComponent"], _modules_patient_data_patient_settings_patient_settings_component__WEBPACK_IMPORTED_MODULE_4__["PatientSettingsComponent"], _modules_patient_data_patient_monitor_patient_monitor_component__WEBPACK_IMPORTED_MODULE_9__["PatientMonitorComponent"], _modules_patient_data_patient_monitor_monitor_heart_rate_monitor_heart_rate_component__WEBPACK_IMPORTED_MODULE_5__["MonitorHeartRateComponent"], _modules_patient_data_patient_monitor_monitor_spo2_monitor_spo2_component__WEBPACK_IMPORTED_MODULE_6__["MonitorSpo2Component"], _modules_patient_data_patient_monitor_monitor_breathing_rate_monitor_breathing_rate_component__WEBPACK_IMPORTED_MODULE_7__["MonitorBreathingRateComponent"], _modules_patient_data_patient_monitor_monitor_temperature_monitor_temperature_component__WEBPACK_IMPORTED_MODULE_8__["MonitorTemperatureComponent"], _modules_patient_data_patient_history_patient_history_component__WEBPACK_IMPORTED_MODULE_3__["PatientHistoryComponent"], _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_2__["PatientReleaseComponent"], _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_1__["NewSensorComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"]]
    })], DefaultModule);
    /***/
  },

  /***/
  "./src/app/modules/new-patient/new-patient.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modules/new-patient/new-patient.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNewPatientNewPatientComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_class {\n  width: 50%;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-form2 {\n  min-width: 150px;\n  max-width: 1000px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n#info_form {\n  display: inline-block;\n  margin-top: 10px;\n  margin-right: 100px;\n  width: 500px;\n}\n\n#remarks_form {\n  display: inline-block;\n  margin-top: 10px;\n  width: 500px;\n}\n\n/*label {\n    width: 100%;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXctcGF0aWVudC9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxuZXctcGF0aWVudFxcbmV3LXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmV3LXBhdGllbnQvbmV3LXBhdGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7QUNESjs7QURHQTtFQUNBLFdBQUE7QUNBQTs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREo7O0FES0E7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25ldy1wYXRpZW50L25ldy1wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdl9jbGFzcyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLy93aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbi5leGFtcGxlLWZvcm0yIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIC8vd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNpbmZvX2Zvcm0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4OyBcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIC8vIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG4jcmVtYXJrc19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbn1cclxuXHJcbi8qbGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0qLyIsIi5kaXZfY2xhc3Mge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZvcm0yIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNpbmZvX2Zvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuI3JlbWFya3NfZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4vKmxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/new-patient/new-patient.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/new-patient/new-patient.component.ts ***!
    \**************************************************************/

  /*! exports provided: NewPatientComponent */

  /***/
  function srcAppModulesNewPatientNewPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPatientComponent", function () {
      return NewPatientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Months = [{
      num: 1,
      name: 'January'
    }, {
      num: 2,
      name: 'February'
    }, {
      num: 3,
      name: 'March'
    }, {
      num: 4,
      name: 'April'
    }, {
      num: 5,
      name: 'May'
    }, {
      num: 6,
      name: 'June'
    }, {
      num: 7,
      name: 'July'
    }, {
      num: 8,
      name: 'August'
    }, {
      num: 9,
      name: 'September'
    }, {
      num: 10,
      name: 'October'
    }, {
      num: 11,
      name: 'November'
    }, {
      num: 12,
      name: 'December'
    }];

    var NewPatientComponent = /*#__PURE__*/function () {
      function NewPatientComponent(router, // private patientListService: PatientsListService,
      currPersonService) {
        var _this = this;

        _classCallCheck(this, NewPatientComponent);

        this.router = router;
        this.currPersonService = currPersonService;
        this.firstName = 'Write fisrt name here...';
        this.lastName = 'Write last name here...';
        this.inRisk = false;
        this.sensor = {
          UnitID: 'None',
          Name: 'None',
          Vendor: 'EarlySense',
          PatientID: -1
        };
        this.displayedColumns = ['UnitID', 'Name', 'Vendor', 'remove'];
        this.sensorsDataSource = [];
        this.sensors = [];
        this.remarks = 'Write remarks here...';
        this.hospital = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HOSPITAL"];
        this.minHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minHR;
        this.maxHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxHR;
        this.minSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minSpO2;
        this.maxSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxSpO2;
        this.minBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minBR;
        this.maxBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxBR;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this.newId = person.PatientID; //console.log(this.newId)     

          _this.daysLst = _this.incRange(1, 31);
          _this.monthsLst = Months;
          _this.yearsLst = _this.decRange(1920, 2020);

          _this.setSensors();
        });
      }

      _createClass(NewPatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "decRange",
        value: function decRange(start, end) {
          return Array.from({
            length: end - start + 1
          }, function (v, k) {
            return end - k;
          });
        }
      }, {
        key: "incRange",
        value: function incRange(start, end) {
          return Array.from({
            length: end - start + 1
          }, function (v, k) {
            return start + k;
          });
        }
      }, {
        key: "AddSensorToPatient",
        value: function AddSensorToPatient() {
          if (this.sensor.UnitID === 'None') {
            return;
          }

          this.sensor.PatientID = this.newId;
          var newPatientSensor = {
            UnitID: this.sensor.UnitID,
            Name: this.sensor.Name,
            Vendor: this.sensor.Vendor,
            PatientID: this.newId
          };
          this.sensorsDataSource.push(newPatientSensor);
          this.table.renderRows(); // console.log(this.sensorsDataSource)

          this.sensor = {
            UnitID: 'None',
            Name: 'None',
            Vendor: 'EarlySense',
            PatientID: -1
          };
          this.setSensors();
        }
      }, {
        key: "removeSensorFromPatient",
        value: function removeSensorFromPatient(element) {
          var i = this.sensorsDataSource.indexOf(element);
          this.sensorsDataSource[i].PatientID = -1;
          this.sensorsDataSource.splice(i, 1);
          this.table.renderRows();
          this.setSensors();
        }
      }, {
        key: "setSensors",
        value: function setSensors() {
          var _this2 = this;

          this.sensors = [];

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["SENSORS"].forEach(function (s) {
            if (s.UnitID !== 'None' && _this2.checkIfSensorInList(s)) {
              s.PatientID = _this2.newId;
            }

            if (s.PatientID === _this2.newId && !_this2.checkIfSensorInList(s)) {
              s.PatientID = -1;
            }

            if (s.PatientID === -1) {
              _this2.sensors.push(s);
            }
          });
        }
      }, {
        key: "checkIfSensorInList",
        value: function checkIfSensorInList(currSensor) {
          for (var i = 0; i < this.sensorsDataSource.length; i++) {
            if (this.sensorsDataSource[i].UnitID === currSensor.UnitID) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "verifyInput",
        value: function verifyInput() {
          return this.firstName === 'Write fisrt name here...' || this.day === undefined || this.month === undefined || this.year === undefined || this.department === undefined || this.roomNumber === undefined || this.bedNumber === undefined ? false : true;
        }
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (!this.verifyInput()) {
            alert('Please check that all of the fields are set properly');
            return;
          }

          if (this.remarks === 'Write remarks here...') {
            this.remarks = '';
          }

          if (this.sensorsDataSource.length === 0) {
            alert('Please choose at least one sensor for the patient');
            return;
          }

          var newPersonSettings = {
            minHR: this.minHR,
            maxHR: this.maxHR,
            minBR: this.minBR,
            maxBR: this.maxBR,
            minSpO2: this.minSpO2,
            maxSpO2: this.maxSpO2,
            sensors: this.sensorsDataSource
          };

          if (this.bedLocation === undefined) {
            this.bedLocation = '';
          }

          var newLocation = {
            Hospital: _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HOSPITAL"],
            Department: this.department,
            RoomNumber: this.roomNumber,
            BedNumber: this.bedNumber,
            BedLocation: this.bedLocation
          };
          var dateOfBirth = new Date(this.year, this.month.num, this.day);
          var timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
          var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

          if (!this.inRisk) {
            if (age >= 65) {
              this.inRisk = true;
            }
          }

          var newPatient = {
            PatientID: this.newId,
            personal: {
              Name: this.firstName,
              Age: age,
              Gender: 'male',
              HighRiskGroup: this.inRisk
            },
            location: newLocation,
            hospitalization: null,
            heartRate: 68,
            bloodPresure: '120/80',
            spO2: 99,
            breathingRate: 12,
            extraO2: 'NO',
            fever: 37,
            breathingInfo: '',
            alerts: '',
            progress: '',
            score: 0,
            history: _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_HISTORY"],
            settings: newPersonSettings
          }; // this.patientListService.newPatient(newPatient);

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].push(newPatient);

          alert('Patient added');
          this.currPersonService.nextMessage(newPatient);
          this.router.navigate(['/patient-data']);
        }
      }]);

      return NewPatientComponent;
    }();

    NewPatientComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('table', null)], NewPatientComponent.prototype, "table", void 0);
    NewPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-new-patient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-patient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-patient/new-patient.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-patient.component.scss */
      "./src/app/modules/new-patient/new-patient.component.scss"))["default"]]
    })], NewPatientComponent);
    /***/
  },

  /***/
  "./src/app/modules/new-sensor/new-sensor.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modules/new-sensor/new-sensor.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNewSensorNewSensorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_class {\n  width: 50%;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-form2 {\n  min-width: 150px;\n  max-width: 1000px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXctc2Vuc29yL0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxjb3ZpZDE5VUkvc3JjXFxhcHBcXG1vZHVsZXNcXG5ldy1zZW5zb3JcXG5ldy1zZW5zb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmV3LXNlbnNvci9uZXctc2Vuc29yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0FDREo7O0FER0E7RUFDSSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25ldy1zZW5zb3IvbmV3LXNlbnNvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfY2xhc3Mge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIC8vd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1mb3JtMiB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAvL3dpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5kaXZfY2xhc3Mge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZvcm0yIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/new-sensor/new-sensor.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/new-sensor/new-sensor.component.ts ***!
    \************************************************************/

  /*! exports provided: NewSensorComponent */

  /***/
  function srcAppModulesNewSensorNewSensorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewSensorComponent", function () {
      return NewSensorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewSensorComponent = /*#__PURE__*/function () {
      function NewSensorComponent(router) {
        _classCallCheck(this, NewSensorComponent);

        this.router = router;
        this.sensorName = '';
        this.sensorVendor = '';
      }

      _createClass(NewSensorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (!this.validate()) {
            alert('Please check that all of the fields are set properly');
            return;
          }

          var sensor = {
            UnitID: this.getNextID(),
            Name: this.sensorName,
            Vendor: this.sensorVendor,
            PatientID: -1
          };

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__["SENSORS"].push(sensor);

          alert('Sensor added to list');
          this.router.navigate(['/']);
        }
      }, {
        key: "validate",
        value: function validate() {
          if (this.sensorID === '' || this.sensorVendor === '') {
            return false;
          }

          return true;
        }
      }, {
        key: "getNextID",
        value: function getNextID() {
          // todo: implement 
          return '110';
        }
      }]);

      return NewSensorComponent;
    }();

    NewSensorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NewSensorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-new-sensor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-sensor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-sensor/new-sensor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-sensor.component.scss */
      "./src/app/modules/new-sensor/new-sensor.component.scss"))["default"]]
    })], NewSensorComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-data.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-data.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#patient_personal_info {\n  display: inline-block;\n  margin-right: 10px;\n  width: 360px;\n  margin-top: 10px;\n}\n\n#monitor {\n  display: inline-block;\n  width: 500px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXGNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1kYXRhXFxwYXRpZW50LWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGF0aWVudF9wZXJzb25hbF9pbmZvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICAvL2hlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbiNtb25pdG9yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vaGVpZ2h0OiAzMDBweDtcclxufSIsIiNwYXRpZW50X3BlcnNvbmFsX2luZm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDM2MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jbW9uaXRvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-data.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-data.component.ts ***!
    \****************************************************************/

  /*! exports provided: PatientDataComponent */

  /***/
  function srcAppModulesPatientDataPatientDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDataComponent", function () {
      return PatientDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientDataComponent = /*#__PURE__*/function () {
      function PatientDataComponent(currPersonService) {
        var _this3 = this;

        _classCallCheck(this, PatientDataComponent);

        this.currPersonService = currPersonService;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          return _this3.name = person.personal.Name;
        });
      }

      _createClass(PatientDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientDataComponent;
    }();

    PatientDataComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    PatientDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-patient-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-data.component.scss */
      "./src/app/modules/patient-data/patient-data.component.scss"))["default"]]
    })], PatientDataComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-history/patient-history.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-history/patient-history.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientHistoryPatientHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#alerts_history {\n  display: inline-block;\n  margin-right: 10px;\n  width: 320px;\n  margin-top: 10px;\n  height: 300px;\n}\n\n#scoring_graph {\n  display: inline-block;\n  width: 500px;\n  margin-top: 10px;\n  height: 300px;\n}\n\n.header {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1oaXN0b3J5L0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxjb3ZpZDE5VUkvc3JjXFxhcHBcXG1vZHVsZXNcXHBhdGllbnQtZGF0YVxccGF0aWVudC1oaXN0b3J5XFxwYXRpZW50LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtaGlzdG9yeS9wYXRpZW50LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1oaXN0b3J5L3BhdGllbnQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbGVydHNfaGlzdG9yeSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuI3Njb3JpbmdfZ3JhcGgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIjYWxlcnRzX2hpc3Rvcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4jc2NvcmluZ19ncmFwaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-history/patient-history.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-history/patient-history.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PatientHistoryComponent */

  /***/
  function srcAppModulesPatientDataPatientHistoryPatientHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientHistoryComponent", function () {
      return PatientHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientHistoryComponent = /*#__PURE__*/function () {
      //
      function PatientHistoryComponent(currPersonService) {
        var _this4 = this;

        _classCallCheck(this, PatientHistoryComponent);

        this.currPersonService = currPersonService;
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)'
        }];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this4.alerts = person.history.alerts;
          _this4.scoring = person.history.scoring;
          _this4.lineChartData = [{
            data: _this4.scoring,
            label: 'Patient Scoring'
          }];
          _this4.lineChartLabels = [];

          for (var i = 0; i < _this4.scoring.length; i++) {
            _this4.lineChartLabels.push('day ' + (i + 1));
          }
        });
      }

      _createClass(PatientHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientHistoryComponent;
    }();

    PatientHistoryComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    PatientHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-patient-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-history/patient-history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-history.component.scss */
      "./src/app/modules/patient-data/patient-history/patient-history.component.scss"))["default"]]
    })], PatientHistoryComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBreathingRateMonitorBreathingRateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: yellow;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: yellow;\n}\n\n.BR {\n  font-size: xx-large;\n  text-align: center;\n  color: yellow;\n  vertical-align: middle;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3ItYnJlYXRoaW5nLXJhdGUvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXGNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1kYXRhXFxwYXRpZW50LW1vbml0b3JcXG1vbml0b3ItYnJlYXRoaW5nLXJhdGVcXG1vbml0b3ItYnJlYXRoaW5nLXJhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWJyZWF0aGluZy1yYXRlL21vbml0b3ItYnJlYXRoaW5nLXJhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxzQkFBQTtFQUVBLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWJyZWF0aGluZy1yYXRlL21vbml0b3ItYnJlYXRoaW5nLXJhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogeWVsbG93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcclxufVxyXG5cclxuLnNxdWFyZXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLkJSe1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vd2lkdGg6IDcwcHg7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8vIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODBweDtcclxufSIsIi50b3Age1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci10b3A6IHNvbGlkO1xuICBib3JkZXItbGVmdDogc29saWQ7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogeWVsbG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLnNxdWFyZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICBib3JkZXItbGVmdDogc29saWQ7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogeWVsbG93O1xufVxuXG4uQlIge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA4MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: MonitorBreathingRateComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBreathingRateMonitorBreathingRateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorBreathingRateComponent", function () {
      return MonitorBreathingRateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorBreathingRateComponent = /*#__PURE__*/function () {
      function MonitorBreathingRateComponent() {
        _classCallCheck(this, MonitorBreathingRateComponent);

        this.currBr = 95;
      }

      _createClass(MonitorBreathingRateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.timer = setInterval(function () {
            _this5.randomBr();
          }, 1000 * 0.5);
        }
      }, {
        key: "randomBr",
        value: function randomBr() {
          this.currBr = Math.floor(Math.random() * 10) + 10;
        }
      }]);

      return MonitorBreathingRateComponent;
    }();

    MonitorBreathingRateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-breathing-rate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-breathing-rate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-breathing-rate.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.scss"))["default"]]
    })], MonitorBreathingRateComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorHeartRateMonitorHeartRateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: cadetblue;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: cadetblue;\n}\n\n.HR {\n  font-size: xx-large;\n  text-align: center;\n  color: cadetblue;\n  vertical-align: middle;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3ItaGVhcnQtcmF0ZS9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxwYXRpZW50LWRhdGFcXHBhdGllbnQtbW9uaXRvclxcbW9uaXRvci1oZWFydC1yYXRlXFxtb25pdG9yLWhlYXJ0LXJhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWhlYXJ0LXJhdGUvbW9uaXRvci1oZWFydC1yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUVBLHNCQUFBO0VBRUEsV0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3ItaGVhcnQtcmF0ZS9tb25pdG9yLWhlYXJ0LXJhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcclxufVxyXG5cclxuLnNxdWFyZXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG5cclxuLkhSe1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vd2lkdGg6IDcwcHg7XHJcbiAgICBjb2xvcjogY2FkZXRibHVlO1xyXG4gICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8vIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODBweDtcclxufSIsIi50b3Age1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci10b3A6IHNvbGlkO1xuICBib3JkZXItbGVmdDogc29saWQ7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogY2FkZXRibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLnNxdWFyZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICBib3JkZXItbGVmdDogc29saWQ7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogY2FkZXRibHVlO1xufVxuXG4uSFIge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA4MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: MonitorHeartRateComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorHeartRateMonitorHeartRateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorHeartRateComponent", function () {
      return MonitorHeartRateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorHeartRateComponent = /*#__PURE__*/function () {
      function MonitorHeartRateComponent() {
        _classCallCheck(this, MonitorHeartRateComponent);

        this.currPic = '../../../../../assets/monitor_pics/heart.jpg';
        this.heartPicPath = '../../../../../assets/monitor_pics/heart.jpg';
        this.blackPicPath = '../../../../../assets/monitor_pics/black.jpg';
        this.hearts = [this.heartPicPath, this.blackPicPath];
        this.currPicIdx = 0;
        this.heartRate = 68;
      }

      _createClass(MonitorHeartRateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.timer = setInterval(function () {
            _this6.randomHr();
          }, 1000 * 0.5);
          this.timer2 = setInterval(function () {
            _this6.heartPic();
          }, 1000 * 1);
        }
      }, {
        key: "randomHr",
        value: function randomHr() {
          this.heartRate = Math.floor(Math.random() * 30) + 51;
        }
      }, {
        key: "heartPic",
        value: function heartPic() {
          this.currPic = this.hearts[this.currPicIdx];
          this.currPicIdx = 1 - this.currPicIdx;
        }
      }]);

      return MonitorHeartRateComponent;
    }();

    MonitorHeartRateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-heart-rate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-heart-rate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-heart-rate.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.scss"))["default"]]
    })], MonitorHeartRateComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorSpo2MonitorSpo2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: cornflowerblue;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: cornflowerblue;\n}\n\n.SPO2 {\n  font-size: xx-large;\n  text-align: center;\n  color: cornflowerblue;\n  vertical-align: middle;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3Itc3BvMi9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxwYXRpZW50LWRhdGFcXHBhdGllbnQtbW9uaXRvclxcbW9uaXRvci1zcG8yXFxtb25pdG9yLXNwbzIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLXNwbzIvbW9uaXRvci1zcG8yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsV0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3Itc3BvMi9tb25pdG9yLXNwbzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAlO1xyXG59XHJcblxyXG4uc3F1YXJle1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbn1cclxuXHJcbi5TUE8ye1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vd2lkdGg6IDcwcHg7XHJcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLy8gZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59IiwiLnRvcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXRvcDogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5zcXVhcmUge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuXG4uU1BPMiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogODBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MonitorSpo2Component */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorSpo2MonitorSpo2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorSpo2Component", function () {
      return MonitorSpo2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorSpo2Component = /*#__PURE__*/function () {
      function MonitorSpo2Component() {
        _classCallCheck(this, MonitorSpo2Component);

        this.SpO2 = 95;
      }

      _createClass(MonitorSpo2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.timer = setInterval(function () {
            _this7.randomSpO2();
          }, 1000 * 0.5);
        }
      }, {
        key: "randomSpO2",
        value: function randomSpO2() {
          this.SpO2 = Math.floor(Math.random() * 10) + 90;
        }
      }]);

      return MonitorSpo2Component;
    }();

    MonitorSpo2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-spo2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-spo2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-spo2.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.scss"))["default"]]
    })], MonitorSpo2Component);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorTemperatureMonitorTemperatureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: aqua;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: aqua;\n}\n\n.TMP {\n  font-size: xx-large;\n  text-align: center;\n  color: aqua;\n  vertical-align: middle;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3ItdGVtcGVyYXR1cmUvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXGNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1kYXRhXFxwYXRpZW50LW1vbml0b3JcXG1vbml0b3ItdGVtcGVyYXR1cmVcXG1vbml0b3ItdGVtcGVyYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLXRlbXBlcmF0dXJlL21vbml0b3ItdGVtcGVyYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFFQSxzQkFBQTtFQUVBLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLXRlbXBlcmF0dXJlL21vbml0b3ItdGVtcGVyYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYXF1YTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XHJcbn1cclxuXHJcbi5zcXVhcmV7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG4uVE1Qe1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vd2lkdGg6IDcwcHg7XHJcbiAgICBjb2xvcjogYXF1YTtcclxuICAgIC8vIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvLyBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn0iLCIudG9wIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItdG9wOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGFxdWE7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1ib3R0b206IDAlO1xufVxuXG4uc3F1YXJlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiBhcXVhO1xufVxuXG4uVE1QIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYXF1YTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDgwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: MonitorTemperatureComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorTemperatureMonitorTemperatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorTemperatureComponent", function () {
      return MonitorTemperatureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorTemperatureComponent = /*#__PURE__*/function () {
      function MonitorTemperatureComponent() {
        _classCallCheck(this, MonitorTemperatureComponent);

        this.currTmp = 36;
      }

      _createClass(MonitorTemperatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.timer = setInterval(function () {
            _this8.randomTmp();
          }, 1000 * 0.5);
        }
      }, {
        key: "randomTmp",
        value: function randomTmp() {
          this.currTmp = Math.floor(Math.random() * 8) + 35;
        }
      }]);

      return MonitorTemperatureComponent;
    }();

    MonitorTemperatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-temperature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-temperature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-temperature.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.scss"))["default"]]
    })], MonitorTemperatureComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/patient-monitor.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorPatientMonitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9wYXRpZW50LW1vbml0b3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PatientMonitorComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorPatientMonitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientMonitorComponent", function () {
      return PatientMonitorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientMonitorComponent = /*#__PURE__*/function () {
      function PatientMonitorComponent() {
        _classCallCheck(this, PatientMonitorComponent);
      }

      _createClass(PatientMonitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientMonitorComponent;
    }();

    PatientMonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-monitor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-monitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/patient-monitor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-monitor.component.scss */
      "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.scss"))["default"]]
    })], PatientMonitorComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientPersonalDataPatientPersonalDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".roundImg {\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1wZXJzb25hbC1kYXRhL0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxjb3ZpZDE5VUkvc3JjXFxhcHBcXG1vZHVsZXNcXHBhdGllbnQtZGF0YVxccGF0aWVudC1wZXJzb25hbC1kYXRhXFxwYXRpZW50LXBlcnNvbmFsLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtcGVyc29uYWwtZGF0YS9wYXRpZW50LXBlcnNvbmFsLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LXBlcnNvbmFsLWRhdGEvcGF0aWVudC1wZXJzb25hbC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kSW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn0iLCIucm91bmRJbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PatientPersonalDataComponent */

  /***/
  function srcAppModulesPatientDataPatientPersonalDataPatientPersonalDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientPersonalDataComponent", function () {
      return PatientPersonalDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientPersonalDataComponent = /*#__PURE__*/function () {
      function PatientPersonalDataComponent(currPersonService) {
        var _this9 = this;

        _classCallCheck(this, PatientPersonalDataComponent);

        this.currPersonService = currPersonService;
        this.disabled = true;
        this.greenStatusPath = './../../../../assets/colors/green.jpg';
        this.yellowStatusPath = './../../../../assets/colors/yellow.jpg';
        this.orangeStatusPath = './../../../../assets/colors/orange.jpg';
        this.redStatusPath = './../../../../assets/colors/red.jpg';
        this.criticalScore = [this.redStatusPath, this.yellowStatusPath];
        this.criticalCurrColor = 0;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this9.selectedPerson = person;
          _this9.patientName = person.personal.Name;
          _this9.location = person.location;
          _this9.inRisk = person.personal.HighRiskGroup;
          _this9.statusPath = _this9.setColor(person.score);
          person.extraO2 === 'NO' ? _this9.extraO2 = false : _this9.extraO2 = true;
        });
      }

      _createClass(PatientPersonalDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.timer = setInterval(function () {
            _this10.randomScore();
          }, 1000 * 0.5);
        }
      }, {
        key: "setColor",
        value: function setColor(score) {
          if (score < 2) {
            return this.greenStatusPath;
          }

          if (score >= 2 && score <= 4) {
            return this.yellowStatusPath;
          }

          if (score >= 5 && score <= 6) {
            return this.orangeStatusPath;
          } else {
            return this.redStatusPath;
          }
        }
      }, {
        key: "randomScore",
        value: function randomScore() {
          if (this.selectedPerson.score >= 7) this.statusPath = this.criticalScore[this.criticalCurrColor];
          this.criticalCurrColor = 1 - this.criticalCurrColor;
        }
      }]);

      return PatientPersonalDataComponent;
    }();

    PatientPersonalDataComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    PatientPersonalDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-patient-personal-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-personal-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-personal-data.component.scss */
      "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.scss"))["default"]]
    })], PatientPersonalDataComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-settings/patient-settings.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-settings/patient-settings.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientSettingsPatientSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1zZXR0aW5ncy9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxwYXRpZW50LWRhdGFcXHBhdGllbnQtc2V0dGluZ3NcXHBhdGllbnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtc2V0dGluZ3MvcGF0aWVudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LXNldHRpbmdzL3BhdGllbnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLy93aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-settings/patient-settings.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-settings/patient-settings.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PatientSettingsComponent */

  /***/
  function srcAppModulesPatientDataPatientSettingsPatientSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSettingsComponent", function () {
      return PatientSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientSettingsComponent = /*#__PURE__*/function () {
      function PatientSettingsComponent(router, // private patientsListService: PatientsListService,
      currPersonService) {
        var _this11 = this;

        _classCallCheck(this, PatientSettingsComponent);

        this.router = router;
        this.currPersonService = currPersonService;
        this.sensor1 = {
          UnitID: 'None',
          Name: 'None',
          Vendor: 'EarlySense',
          PatientID: -1
        };
        this.sensor2 = {
          UnitID: 'None',
          Vendor: 'EarlySense',
          PatientID: -1
        };
        this.sensor3 = {
          UnitID: 'None',
          Vendor: 'EarlySense',
          PatientID: -1
        };
        this.sensor4 = {
          UnitID: 'None',
          Vendor: 'EarlySense',
          PatientID: -1
        };
        this.sensor5 = {
          UnitID: 'None',
          Vendor: 'EarlySense',
          PatientID: -1
        };
        this.displayedColumns = ['UnitID', 'Name', 'Vendor', 'remove'];
        this.sensorsDataSource = [];
        this.sensors = [];
        this.hospital = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HOSPITAL"];
        this.minHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minHR;
        this.maxHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxHR;
        this.minSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minSpO2;
        this.maxSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxSpO2;
        this.minBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minBR;
        this.maxBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxBR;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          //console.log(SENSORS);
          //console.log(person.id);
          //console.log(person.settings.sensors)
          _this11.selectedPerson = person;
          _this11.department = person.location.Department;
          _this11.roomNumber = person.location.RoomNumber;
          _this11.bedNumber = person.location.BedNumber;
          _this11.bedLocation = person.location.BedLocation;
          _this11.sensorsDataSource = person.settings.sensors;

          _this11.setSensors();
        });
      }

      _createClass(PatientSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setSensors",
        value: function setSensors() {
          var _this12 = this;

          this.sensors = [];

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["SENSORS"].forEach(function (s) {
            if (s.UnitID !== 'None' && _this12.checkIfSensorInList(s)) {
              s.PatientID = _this12.selectedPerson.PatientID;
            }

            if (s.PatientID === _this12.selectedPerson.PatientID && !_this12.checkIfSensorInList(s)) {
              s.PatientID = -1;
            }

            if (s.PatientID === -1) {
              _this12.sensors.push(s);
            }
          });
        }
      }, {
        key: "checkIfSensorInList",
        value: function checkIfSensorInList(currSensor) {
          for (var i = 0; i < this.sensorsDataSource.length; i++) {
            if (this.sensorsDataSource[i].UnitID === currSensor.UnitID) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "AddSensorToPatient",
        value: function AddSensorToPatient() {
          if (this.sensor1.UnitID === 'None') {
            return;
          }

          this.sensor1.PatientID = this.selectedPerson.PatientID;
          var newPatientSensor = {
            UnitID: this.sensor1.UnitID,
            Name: this.sensor1.Name,
            Vendor: this.sensor1.Vendor,
            PatientID: this.selectedPerson.PatientID
          };
          this.sensorsDataSource.push(newPatientSensor);
          this.table.renderRows();
          this.sensor1 = {
            UnitID: 'None',
            Name: 'None',
            Vendor: 'EarlySense',
            PatientID: -1
          };
          this.setSensors();
        }
      }, {
        key: "removeSensorFromPatient",
        value: function removeSensorFromPatient(element) {
          var i = this.sensorsDataSource.indexOf(element);
          this.sensorsDataSource[i].PatientID = -1;
          this.sensorsDataSource.splice(i, 1);
          this.table.renderRows();
          this.setSensors();
        }
      }, {
        key: "OnSave",
        value: function OnSave() {
          var newLocation = {
            Hospital: _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HOSPITAL"],
            Department: this.department,
            RoomNumber: this.roomNumber,
            BedNumber: this.bedNumber,
            BedLocation: this.bedLocation
          };

          if (this.sensorsDataSource.length === 0) {
            alert('Please choose at least one sensor for the patient');
            return;
          }

          var newSettings = {
            minHR: this.minHR,
            maxHR: this.maxHR,
            minBR: this.minBR,
            maxBR: this.maxBR,
            minSpO2: this.minSpO2,
            maxSpO2: this.maxSpO2,
            sensors: this.sensorsDataSource
          };
          this.selectedPerson.settings = newSettings;
          this.selectedPerson.location = newLocation; // this.patientsListService.editPatient(this.selectedPerson);

          alert('Patient info updated');
          this.router.navigate(['/']);
        }
      }]);

      return PatientSettingsComponent;
    }();

    PatientSettingsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__["CurrPersonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('table', null)], PatientSettingsComponent.prototype, "table", void 0);
    PatientSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-patient-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-settings/patient-settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-settings.component.scss */
      "./src/app/modules/patient-data/patient-settings/patient-settings.component.scss"))["default"]]
    })], PatientSettingsComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-release/patient-release.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/modules/patient-release/patient-release.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientReleasePatientReleaseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#patient_summary {\n  display: inline-block;\n  margin-right: 10px;\n  width: 320px;\n  height: 110px;\n}\n\n#remarks {\n  display: inline-block;\n  width: 320px;\n  height: 110px;\n}\n\n.input_class {\n  height: 66px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LXJlbGVhc2UvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXGNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1yZWxlYXNlXFxwYXRpZW50LXJlbGVhc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1yZWxlYXNlL3BhdGllbnQtcmVsZWFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1yZWxlYXNlL3BhdGllbnQtcmVsZWFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXRpZW50X3N1bW1hcnkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbn1cclxuXHJcbiNyZW1hcmtzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dF9jbGFzcyB7XHJcbiAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuIiwiI3BhdGllbnRfc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbiNyZW1hcmtzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5pbnB1dF9jbGFzcyB7XG4gIGhlaWdodDogNjZweDtcbiAgd2lkdGg6IDI1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-release/patient-release.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/patient-release/patient-release.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PatientReleaseComponent */

  /***/
  function srcAppModulesPatientReleasePatientReleaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientReleaseComponent", function () {
      return PatientReleaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientReleaseComponent = /*#__PURE__*/function () {
      function PatientReleaseComponent(router, // private patientsListService: PatientsListService,
      currPersonService) {
        var _this13 = this;

        _classCallCheck(this, PatientReleaseComponent);

        this.router = router;
        this.currPersonService = currPersonService;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this13.firstName = person.personal.Name;
          _this13.age = person.personal.Age;
          _this13.selectedPerson = person;
        });
      }

      _createClass(PatientReleaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnFinishClick",
        value: function OnFinishClick() {
          if (confirm('Are you sure you want to discharge the selected patient?')) {
            var index = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].indexOf(this.selectedPerson);

            if (index != -1) _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].splice(index, 1); // this.patientsListService.removePatient(this.selectedPerson);

            alert('Patient dischareged!');
            this.router.navigate(['/']);
          } else {
            alert('Patient remained in list');
            this.router.navigate(['/']);
          }
        }
      }]);

      return PatientReleaseComponent;
    }();

    PatientReleaseComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__["CurrPersonService"]
      }];
    };

    PatientReleaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-patient-release',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-release.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-release/patient-release.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-release.component.scss */
      "./src/app/modules/patient-release/patient-release.component.scss"))["default"]]
    })], PatientReleaseComponent);
    /***/
  },

  /***/
  "./src/app/modules/patients/patients.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modules/patients/patients.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientsPatientsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n  margin-left: unset;\n  margin-right: unset;\n}\n\n.col_class {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50cy9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxwYXRpZW50c1xccGF0aWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF0aWVudHMvcGF0aWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudHMvcGF0aWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbn1cclxuXHJcbi5jb2xfY2xhc3Mge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbn1cblxuLmNvbF9jbGFzcyB7XG4gIHdpZHRoOiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patients/patients.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/patients/patients.component.ts ***!
    \********************************************************/

  /*! exports provided: PatientsComponent */

  /***/
  function srcAppModulesPatientsPatientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientsComponent", function () {
      return PatientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");

    var PatientsComponent = /*#__PURE__*/function () {
      // subscription;
      function PatientsComponent(router, //private patientsListService: PatientsListService,
      currPersonService) {
        _classCallCheck(this, PatientsComponent);

        this.router = router;
        this.currPersonService = currPersonService; // icons

        this.patient_icon = '../../../assets/icons/Patient.JPG';
        this.room_icon = '../../../assets/icons/Room.JPG';
        this.age_icon = '../../../assets/icons/age.JPG';
        this.hr_icon = '../../../assets/icons/HR.JPG';
        this.bp_icon = '../../../assets/icons/BP.jpg';
        this.spo2_icon = '../../../assets/icons/sat.jpg';
        this.br_icon = '../../../assets/icons/BR.JPG';
        this.fever_icon = '../../../assets/icons/Fever.JPG';
        this.alerts_icon = '../../../assets/icons/alert.JPG';
        this.progress_icon = '../../../assets/icons/status.JPG';
        this.removeUser_icon = '../../../assets/icons/remove-user.jpg';
        this.displayedColumns = ['PatientID', 'room', 'age', 'heartRate', 'bloodPresure', 'spO2', 'breathingRate', 'extraO2', 'fever', 'breathingInfo', 'alerts', 'progress', 'score', 'data', 'release'];
        this.dataSource = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["HEALTH_DATA"];
      }

      _createClass(PatientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.subs();
        }
      }, {
        key: "subs",
        value: function subs() {
          /*console.log('******');
          console.log(this.patientsListService);
          this.subscription = this.patientsListService.people.subscribe(lst => {
            console.log(lst)
            console.log(lst.length)
            this.dataSource = lst;
          })*/
        }
      }, {
        key: "newSensor",
        value: function newSensor() {
          this.router.navigate(['/new-sensor']);
        }
      }, {
        key: "newPatient",
        value: function newPatient() {
          var newPerson = new _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["PersonHealthData"]();
          newPerson.PatientID = this.getNextID();
          this.currPersonService.nextMessage(newPerson);
          this.router.navigate(['/new-patient']);
        }
      }, {
        key: "getNextID",
        value: function getNextID() {
          var nextID = -1;

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["HEALTH_DATA"].forEach(function (element) {
            console.log(element.PatientID);
            if (element.PatientID >= nextID) nextID = element.PatientID + 1;
          });

          console.log(nextID);
          return nextID;
        }
      }, {
        key: "patientData",
        value: function patientData(element) {
          this.currPersonService.nextMessage(element);
          this.router.navigate(['/patient-data']);
        }
      }, {
        key: "releasePatient",
        value: function releasePatient(element) {
          this.currPersonService.nextMessage(element);
          this.router.navigate(['/release-document']);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// console.log('---')
          // this.subscription.unsubscribe();
        }
      }]);

      return PatientsComponent;
    }();

    PatientsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    PatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-patients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patients/patients.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patients.component.scss */
      "./src/app/modules/patients/patients.component.scss"))["default"]]
    })], PatientsComponent);
    /***/
  },

  /***/
  "./src/app/services/curr-person.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/curr-person.service.ts ***!
    \*************************************************/

  /*! exports provided: CurrPersonService */

  /***/
  function srcAppServicesCurrPersonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrPersonService", function () {
      return CurrPersonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CurrPersonService = /*#__PURE__*/function () {
      function CurrPersonService() {
        _classCallCheck(this, CurrPersonService);

        this.selectedPersonSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__["PersonHealthData"]());
        this.sharedMessage = this.selectedPersonSubject.asObservable();
      }

      _createClass(CurrPersonService, [{
        key: "nextMessage",
        value: function nextMessage(selectedPerson) {
          this.selectedPersonSubject.next(selectedPerson);
        }
      }]);

      return CurrPersonService;
    }();

    CurrPersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CurrPersonService);
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxjb3ZpZDE5VUkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0iLCJmb290ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnClick",
        value: function OnClick() {
          this.router.navigate(['']);
        }
      }, {
        key: "newSensor",
        value: function newSensor() {
          this.router.navigate(['/new-sensor']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); //import { FlexLayoutModule } from '@angular/flex-layout';


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], //FlexLayoutModule,
      _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"]],
      exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\999920\Desktop\covid19UI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map