(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/app.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Counter */ \"./src/components/Counter.vue\");\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  components: {\n    Counter: _components_Counter__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/app.vue?/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0");

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/components/Counter.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  setup() {\n    const count = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* ref */ \"n\"])(0);\n\n    const increment = () => count.value++;\n\n    return {\n      count,\n      increment\n    };\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/Counter.vue?/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0");

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=template&id=5ef48958":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist/templateLoader.js??ref--6!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/app.vue?vue&type=template&id=5ef48958 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache) {\n  const _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ \"o\"])(\"router-view\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ \"k\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ \"b\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ \"e\"])(_component_router_view)]);\n}\n\n//# sourceURL=webpack:///./src/app.vue?/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist/templateLoader.js??ref--6!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0");

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=template&id=274929fc":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist/templateLoader.js??ref--6!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/components/Counter.vue?vue&type=template&id=274929fc ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ \"k\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ \"b\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ \"e\"])(\"div\", null, \"Count \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* toDisplayString */ \"q\"])(_ctx.count), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ \"e\"])(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment(...args))\n  }, \"increment\")]);\n}\n\n//# sourceURL=webpack:///./src/components/Counter.vue?/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist/templateLoader.js??ref--6!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0");

/***/ }),

/***/ "../../packages/vue-framework-router/dist/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/packages/vue-framework-router/dist/index.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/*! exports used: createRouter */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createRouter = void 0;\n\nconst vue_router_1 = __webpack_require__(/*! vue-router */ \"../../node_modules/vue-router/dist/vue-router.esm.js\");\n\nconst isSever = typeof window === 'undefined';\n\nfunction createRouter(context) {\n  const router = vue_router_1.createRouter({\n    history: !isSever ? vue_router_1.createWebHistory() : vue_router_1.createMemoryHistory(),\n    routes: getRoutes(context)\n  });\n  return router;\n}\n\nexports.createRouter = createRouter;\n\nfunction getRoutes(requireComponent) {\n  // @ts-ignore\n  // const requireComponent = require.context(\n  //   '../src/pages',\n  //   true,\n  //   /\\.vue$/,\n  //   'lazy'\n  // )\n  const routes = requireComponent.keys();\n  return routes.map(route => {\n    const regExp = /^\\.\\/(.*)\\.vue+$/;\n    const routeName = route.replace(regExp, '$1');\n    const routePath = route.replace(regExp, '/$1').replace('/index', '');\n    return {\n      name: routeName,\n      path: routePath,\n      component: () => Promise.resolve(requireComponent(route)).then(getDefault)\n    };\n  });\n}\n\nfunction getDefault(component) {\n  return component.default || component;\n}\n\n//# sourceURL=webpack:////Users/Guillermo/Documents/projects/xarples/vue-framework/packages/vue-framework-router/dist/index.js?");

/***/ }),

/***/ "./.framework/entry.client.js":
/*!************************************!*\
  !*** ./.framework/entry.client.js ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xarples/vue-framework-router */ \"../../packages/vue-framework-router/dist/index.js\");\n/* harmony import */ var _xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_app_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/app.vue */ \"./src/app.vue\");\n\n\n\n\nconst requireComponent = __webpack_require__(\"./src/pages lazy recursive \\\\.vue$\");\n\nconst router = Object(_xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1__[\"createRouter\"])(requireComponent);\nconst app = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createSSRApp */ \"c\"])(_src_app_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"]);\napp.use(router);\nrouter.isReady().then(() => {\n  app.mount('#vue-framework-root');\n});\n\n//# sourceURL=webpack:///./.framework/entry.client.js?");

/***/ }),

/***/ "./src/app.vue":
/*!*********************!*\
  !*** ./src/app.vue ***!
  \*********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=5ef48958 */ \"./src/app.vue?vue&type=template&id=5ef48958\");\n/* harmony import */ var _app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js */ \"./src/app.vue?vue&type=script&lang=js\");\n\n\n\n_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"].render = _app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__[/* render */ \"a\"]\n/* hot reload */\nif (false) {}\n\n_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"].__file = \"src/app.vue\"\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"]);\n\n//# sourceURL=webpack:///./src/app.vue?");

/***/ }),

/***/ "./src/app.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/app.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--0!./app.vue?vue&type=script&lang=js */ \"../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n \n\n//# sourceURL=webpack:///./src/app.vue?");

/***/ }),

/***/ "./src/app.vue?vue&type=template&id=5ef48958":
/*!***************************************************!*\
  !*** ./src/app.vue?vue&type=template&id=5ef48958 ***!
  \***************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--0!./app.vue?vue&type=template&id=5ef48958 */ \"../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=template&id=5ef48958\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n\n\n//# sourceURL=webpack:///./src/app.vue?");

/***/ }),

/***/ "./src/components/Counter.vue":
/*!************************************!*\
  !*** ./src/components/Counter.vue ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter.vue?vue&type=template&id=274929fc */ \"./src/components/Counter.vue?vue&type=template&id=274929fc\");\n/* harmony import */ var _Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter.vue?vue&type=script&lang=js */ \"./src/components/Counter.vue?vue&type=script&lang=js\");\n\n\n\n_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"].render = _Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__[/* render */ \"a\"]\n/* hot reload */\nif (false) {}\n\n_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"].__file = \"src/components/Counter.vue\"\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"]);\n\n//# sourceURL=webpack:///./src/components/Counter.vue?");

/***/ }),

/***/ "./src/components/Counter.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Counter.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/dist??ref--0!./Counter.vue?vue&type=script&lang=js */ \"../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n \n\n//# sourceURL=webpack:///./src/components/Counter.vue?");

/***/ }),

/***/ "./src/components/Counter.vue?vue&type=template&id=274929fc":
/*!******************************************************************!*\
  !*** ./src/components/Counter.vue?vue&type=template&id=274929fc ***!
  \******************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../../node_modules/vue-loader/dist??ref--0!./Counter.vue?vue&type=template&id=274929fc */ \"../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=template&id=274929fc\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__[\"a\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Counter.vue?");

/***/ }),

/***/ "./src/pages lazy recursive \\.vue$":
/*!*******************************!*\
  !*** ./src/pages lazy \.vue$ ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.vue\": [\n\t\t\"./src/pages/index.vue\",\n\t\t0\n\t],\n\t\"./users/index.vue\": [\n\t\t\"./src/pages/users/index.vue\",\n\t\t1\n\t],\n\t\"./users/me.vue\": [\n\t\t\"./src/pages/users/me.vue\",\n\t\t2\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./src/pages lazy recursive \\\\.vue$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./src/pages_lazy_\\.vue$?");

/***/ })

},[["./.framework/entry.client.js","runtime","vendors"]]]);