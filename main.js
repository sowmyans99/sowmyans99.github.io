(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/user/user.module": [
		"./src/app/components/user/user.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: '', loadChildren: './components/user/user.module#UserModule' }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: false });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.module */ "./src/app/components/user/user.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"], _components_user_user_module__WEBPACK_IMPORTED_MODULE_3__["UserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .form-control {\n     margin-bottom: 15px;\n }\n a {\n    color:#000000 !important;\n}\n .nav-tabs .nav-item {\n    width: 155px;\n }\n input[type=\"date\"] {\n    position: relative;\n    padding: 10px;\n  }\n input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    color: transparent;\n    background: none;\n    z-index: 1;\n  }\n input[type=\"date\"]:before {\n    color: transparent;\n    background: none;\n    display: block;\n    font-family: 'FontAwesome';\n    content: '\\f073';\n    /* This is the calendar icon in FontAwesome */\n    width: 15px;\n    height: 20px;\n    position: absolute;\n    top: 12px;\n    right: 6px;\n    color: #999;\n  }\n .fa-calendar:before {\n    position: relative;\n    top: -43px;\n    left: 271px;\n    color: #999;\n    font-size: 20px;\n  }\n .nav-link {\n     text-align: center;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-bar {\n     background: #ffe4d1;\n     height: 2px;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-selection {\n     background: orange;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer {\n     width: 8px;\n     height: 16px;\n     top: auto;\n     /* to remove the default positioning */\n     bottom: 0;\n     background-color: #333;\n     border-top-left-radius: 3px;\n     border-top-right-radius: 3px;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:after {\n     display: none;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-bubble {\n     bottom: 14px;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-limit {\n     font-weight: bold;\n     color: orange;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-tick {\n     width: 1px;\n     height: 10px;\n     margin-left: 4px;\n     border-radius: 0;\n     background: #ffe4d1;\n     top: -1px;\n }\n ::ng-deep .custom-slider .ng5-slider .ng5-slider-tick.ng5-slider-selected {\n     background: orange;\n }"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"form\">\n    <!-- <h3>Group Filter</h3> -->\n\n    <div style=\"padding: 10px;\n    border: 1px solid;\">\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                    aria-selected=\"true\">One way</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                    aria-controls=\"profile\" aria-selected=\"false\">Return</a>\n            </li>\n\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                <div style=\"border:1px solid;padding: 8px 0px;\">\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" formControlName=\"originName\" class=\"form-control\"\n                            placeholder=\"Enter Origin City\" />\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" formControlName=\"desName\" class=\"form-control\"\n                            placeholder=\"Enter Destination City\" />\n\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" formControlName=\"oriArrive\" onfocus=\"(this.type='date')\" class=\"form-control\"\n                            placeholder=\"Departure Date\" />\n                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" onfocus=\"(this.type='date')\" class=\"form-control\"\n                            placeholder=\"Return Date\" />\n                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                    </div>\n\n                    <div class=\"col-md-12 col-sm-12\">\n                        <select ngDefaultControl class=\"form-control form-control-lg\" formControlName=\"seat\">\n                            <option value=\"\"> Seat</option>\n                            <option [ngValue]=\"seat\" *ngFor=\"let seat of seats\">{{seat}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"col-md-12 col-sm-12 text-right\">\n                        <button class=\"btn btn-primary\" (click)=\"search(form.value)\">Search</button>\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-12 col-sm-12\" style=\"border:1px solid;padding:1rem; margin-top:1rem;\">\n                    <h5>Refine flight search</h5>\n                    <div class=\"custom-slider\">\n                        <ng5-slider formControlName=\"price\" [(value)]=\"value\" [(highValue)]=\"highValue\"\n                            [options]=\"options\">\n                        </ng5-slider>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                <div style=\"border:1px solid;padding: 8px 0px;\">\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" formControlName=\"originName\" class=\"form-control\"\n                            placeholder=\"Enter Origin City\" />\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" formControlName=\"desName\" class=\"form-control\"\n                            placeholder=\"Enter Destination City\" />\n\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" onfocus=\"(this.type='date')\" class=\"form-control\"\n                            placeholder=\"Departure Date\" />\n                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <input type=\"text\" onfocus=\"(this.type='date')\" class=\"form-control\" placeholder=\"Return Date\" />\n                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                    </div>\n\n                    <div class=\"col-md-12 col-sm-12\">\n                        <select ngDefaultControl class=\"form-control form-control-lg\" formControlName=\"seat\">\n                            <option value=\"\"> Seat</option>\n                            <option [ngValue]=\"seat\" *ngFor=\"let seat of seats\">{{seat}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"col-md-12 col-sm-12 text-right\">\n                        <button class=\"btn btn-primary\" (click)=\"search(form.value)\">Search</button>\n                    </div>\n                </div>\n                <div class=\"col-md-12 col-sm-12\" style=\"border:1px solid;padding:1rem; margin-top:1rem;\">\n                    <h5>Refine flight search</h5>\n                    <div class=\"custom-slider\">\n                        <ng5-slider formControlName=\"price\" [(value)]=\"value\" [(highValue)]=\"highValue\"\n                            [options]=\"options\">\n                        </ng5-slider>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <!-- <div class=\"col-md-12\">\n            <input type=\"text\" formControlName=\"originName\" class=\"form-control\" placeholder=\"Enter Origin City\" />\n        </div>\n        <div class=\"col-md-12\">\n            <input type=\"text\" formControlName=\"desName\" class=\"form-control\" placeholder=\"Enter Destination City\" />\n        </div>\n        <div class=\"col-md-12\">\n                <input type=\"date\"  class=\"form-control\" placeholder=\"Departure Date\" />\n               \n        </div>\n        <div class=\"col-md-12\">\n                <input type=\"date\" class=\"form-control\" placeholder=\"Departure Date\" />\n               \n        </div>\n        <div class=\"col-md-12 col-sm-12\">\n            <select ngDefaultControl class=\"form-control form-control-lg\" formControlName=\"seat\">\n                <option value=\"\"> Seat</option>\n                <option [ngValue]=\"seat\" *ngFor=\"let seat of seats\">{{seat}}</option>\n            </select>\n        </div>\n\n        <div class=\"col-md-12 col-sm-12\">\n            <button class=\"btn btn-primary float-right\" (click)=\"search(form.value)\">Search</button>\n        </div>\n        <div class=\"col-md-12 col-sm-12\" style=\"border:1px solid;padding:1rem;\">\n            <h5>Refine flight search</h5>\n            <div class=\"custom-slider\">\n                <ng5-slider formControlName=\"price\" [(value)]=\"value\" [(highValue)]=\"highValue\" [options]=\"options\">\n                </ng5-slider>\n            </div>\n        </div> -->\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.seats = [
            "1",
            "2",
            "3"
        ];
        this.value = 1000;
        this.highValue = 10000;
        this.options = {
            floor: 0,
            ceil: 10000,
            step: 1000,
            showTicks: true
        };
        this.groupFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchText = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SearchComponent.prototype.buildForm = function () {
        this.form = this.fb.group({
            originName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            desName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            oriArrive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            seat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            agefrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            ageto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    SearchComponent.prototype.search = function (filters) {
        Object.keys(filters).forEach(function (key) { return filters[key] === '' ? delete filters[key] : key; });
        this.groupFilters.emit(filters);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "receivedParentMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "groupFilters", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-list/user-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-list/user-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    ul {\n        list-style: none;\n        background: #ffffff;\n    }\n    \n</style>\n<div class=\"container\" style=\"border: 1px solid;\">\n    <div class=\"row\" style=\"border-bottom: 1px solid;\">\n        <div class=\"col-md-6\">\n            <div style=\"padding: 15px;\">\n                <h5>Pune > Delhi > Pune</h5>\n    </div>\n</div>\n<div class=\"col-md-6\">\n    <div>\n            <h5>Departure Date: {{dateMode| date}}</h5>\n            <h5> Return Date: {{dateMode| date}}</h5>\n    </div>\n</div>\n    </div>\n    <div class=\"fil-color\" *ngFor=\"let user of filteredUsers | filter: searchByKeyword: 'name'\">\n        <div class=\"row\" style=\"padding: 1rem;\">\n            <div class=\"col-md-12\">\n            </div>\n            <div class=\"col-md-4\" style=\"background: #ffffff; margin-top:1rem; border:1px 1px 1px solid;\">\n                <ul>\n                    <li>Rs. {{user.price}}</li>\n                    <li> {{user.aiNumber}}</li>\n                    <li> {{ user.oriName}}</li>\n                    <li> Depart: {{ user.oriDepart}}</li>\n                    <li> Arrive: {{ user.oriArrive}}</li>\n                    <li> {{ user.seat}}</li>\n                </ul>\n\n            </div>\n            <div class=\"col-md-4\" style=\"background: #ffffff; margin-top:1rem; padding-top:1.8rem;\">\n                <ul>\n                    <li> {{user.airetNumber}}</li>\n                    <li> {{ user.retName}}</li>\n                    <li> Depart: {{ user.retDepart}}</li>\n                    <li> Arrive: {{ user.retArrive}}</li>\n                    <li> {{ user.seat}}</li>\n                </ul>\n            </div>\n            <div class=\"col-md-4\" style=\"background: #ffffff; margin-top:1rem; padding-top:1.8rem;\">\n                <ul>\n                    <li>\n                        <img src=\"https://img.icons8.com/dusk/64/000000/airport.png\">\n                    </li>\n                    <li>\n                        <button name=\"bookTickets\" type=\"button\" aria-readonly=\"\">Book this flight</button>\n                    </li>\n                </ul>\n\n            </div>\n\n\n        </div>\n\n    </div>\n    <!-- <ul *ngFor=\"let user of filteredUsers | filter: searchByKeyword: 'name'\">\n        <li>{{user.price}}</li>\n        <li>{{user.aiNumber}}</li>\n        <li>{{ user.oriName}}</li>\n        <li>Depart: {{ user.oriDepart}}</li>\n        <li>Arrive: {{ user.oriArrive}}</li>\n        <li>{{ user.level}}</li>\n        \n        <li>{{ user.age}}</li>\n    </ul> -->\n\n</div>"

/***/ }),

/***/ "./src/app/components/user/user-list/user-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/user-list/user-list.component.ts ***!
  \******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, ref) {
        this.userService = userService;
        this.ref = ref;
        this.dateMode = new Date();
        this.users = [];
        this.filteredUsers = [];
        this.someProperty = new Date();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        console.log(this.dateMode);
    };
    UserListComponent.prototype.ngOnChanges = function () {
        if (this.groupFilters)
            this.filterUserList(this.groupFilters, this.users);
    };
    UserListComponent.prototype.filterUserList = function (filters, users) {
        this.filteredUsers = users; //Reset User List
        var keys = Object.keys(filters);
        var filterUser = function (user) {
            var result = keys.map(function (key) {
                if (!~key.indexOf('age') && !~key.indexOf('price')) {
                    if (user[key]) {
                        return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase());
                    }
                    else {
                        return false;
                    }
                }
                else if (key.indexOf('price') >= 0) {
                    if (user[key]) {
                        if (parseFloat(user[key].replace(/,/g, '')) >= parseFloat(filters[key][0]) &&
                            parseFloat(user[key].replace(/,/g, '')) <= parseFloat(filters[key][1])) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
            });
            // To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
            result = result.filter(function (it) { return it !== undefined; });
            // Filter the Age out from the other filters
            if (filters['ageto'] && filters['agefrom']) {
                if (user['age']) {
                    if (+user['age'] >= +filters['agefrom'] && +user['age'] <= +filters['ageto']) {
                        result.push(true);
                    }
                    else {
                        result.push(false);
                    }
                }
                else {
                    result.push(false);
                }
            }
            return result.reduce(function (acc, cur) { return acc & cur; }, 1);
        };
        this.filteredUsers = this.users.filter(filterUser);
    };
    UserListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.fetchUsers()
            .subscribe(function (users) { return _this.users = users; });
        console.log(this.users);
        this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "groupFilters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserListComponent.prototype, "searchByKeyword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], UserListComponent.prototype, "dateMode", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user/user-list/user-list.component.html")
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user-routing.module.ts ***!
  \********************************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");


var routes = [
    { path: '', component: _user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"] },
];
var UserRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .container-fluid {\n    background-image: url(https://freedesignfile.com/upload/2016/10/Take-the-flight-attendant-with-the-trunk-behind-the-blue-sky-background.jpg);\n    width: 100%;\n    background-size: cover;\n  }\n\n  .container {\n    background: #bdcbf56e;\n  }\n</style>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n    <br />\n    <h1>Flight Search Engine</h1>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <app-search (groupFilters)=\"filters = $event\"></app-search>\n      </div>\n      <div class=\"col-md-8\">\n                      \n        <app-user-list [groupFilters]=\"filters\" [searchByKeyword]=\"searchText\" [dateMode]=\"dateMode\" (amountChange)=\"this.dateMode= $event\"></app-user-list>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.dateMode = new Date();
    }
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/components/user/user-list/user-list.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipe/filter.pipe */ "./src/app/pipe/filter.pipe.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/components/user/user-routing.module.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_8__["UserRoutes"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_9__["Ng5SliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"]],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/data/user.data.ts":
/*!***********************************!*\
  !*** ./src/app/data/user.data.ts ***!
  \***********************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var USERS = [
    {
        firstName: 'Sara',
        lastName: 'Barnett',
        level: 'Beginner',
        jobTitle: 'UI Designer',
        age: '18',
        price: '9,000.00',
        aiNumber: 'AI-202',
        oriName: 'PNQ > DEL',
        originName: 'pune',
        desName: 'Delhi',
        DepartureDate: '',
        seat: '2',
        oriDepart: '10.00 AM',
        oriArrive: '12.00 PM',
        airetNumber: 'AI-203',
        retName: 'DEL > PNQ',
        retDepart: '08.00 PM',
        retArrive: '11.00 PM'
    },
    {
        firstName: 'Gabriel',
        lastName: 'Green',
        level: 'Expert',
        jobTitle: 'JS Developer',
        age: '25',
        price: '5,000.00',
        aiNumber: 'AI-204',
        oriName: 'PNQ > DEL',
        originName: 'pune',
        desName: 'delhi',
        DepartureDate: '',
        seat: '2',
        oriDepart: '10.00 AM',
        oriArrive: '11.00 PM',
        airetNumber: 'AI-205',
        retName: 'DEL > PNQ',
        retDepart: '08.00 PM',
        retArrive: '11.00 PM'
    },
    {
        firstName: 'Janet',
        lastName: 'Cox',
        level: 'Beginner',
        jobTitle: 'Front-end Developer',
        age: '45',
        price: '10,000.00',
        aiNumber: 'AI-206',
        oriName: 'PNQ > DEL',
        originName: 'pune',
        desName: 'singapore',
        DepartureDate: '',
        seat: '2',
        oriDepart: '10.00 AM',
        oriArrive: '11.00 PM',
        airetNumber: 'AI-207',
        retName: 'DEL > PNQ',
        retDepart: '08.00 PM',
        retArrive: '11.00 PM'
    }
];


/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, value, prop) {
        if (!items)
            return [];
        if (!value)
            return items;
        return items.filter(function (singleItem) {
            return singleItem[prop].toLowerCase().startsWith(value.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_user_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/user.data */ "./src/app/data/user.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService() {
        this.setGroupFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getGroupFilter = this.setGroupFilter$.asObservable();
    }
    UserService.prototype.fetchUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_data_user_data__WEBPACK_IMPORTED_MODULE_2__["USERS"]);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sowmya.ns-ne\Downloads\angular-data-filters-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map