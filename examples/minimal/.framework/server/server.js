module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.framework/server/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/app.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Counter */ "./src/components/Counter.vue");

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Counter: _components_Counter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/components/Counter.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  setup() {
    const count = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);

    const increment = () => count.value++;

    return {
      count,
      increment
    };
  }

});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=template&id=5ef48958":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist/templateLoader.js??ref--6!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/app.vue?vue&type=template&id=5ef48958 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache) {
  const _component_counter = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("counter");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_counter)]);
}

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=template&id=274929fc":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/babel-loader/lib!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist/templateLoader.js??ref--6!/Users/Guillermo/Documents/projects/xarples/vue-framework/node_modules/vue-loader/dist??ref--0!./src/components/Counter.vue?vue&type=template&id=274929fc ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", null, "Count " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.count), 1
  /* TEXT */
  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment(...args))
  }, "increment")]);
}

/***/ }),

/***/ "./.framework/server/entry.js":
/*!************************************!*\
  !*** ./.framework/server/entry.js ***!
  \************************************/
/*! exports provided: createApp */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/app.vue */ "./src/app.vue");


function createApp() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["createSSRApp"])(_src_app_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
}

/***/ }),

/***/ "./src/app.vue":
/*!*********************!*\
  !*** ./src/app.vue ***!
  \*********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=5ef48958 */ "./src/app.vue?vue&type=template&id=5ef48958");
/* harmony import */ var _app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js */ "./src/app.vue?vue&type=script&lang=js");



_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/app.vue"

/* harmony default export */ __webpack_exports__["a"] = (_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./src/app.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/app.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--0!./app.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/app.vue?vue&type=template&id=5ef48958":
/*!***************************************************!*\
  !*** ./src/app.vue?vue&type=template&id=5ef48958 ***!
  \***************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--0!./app.vue?vue&type=template&id=5ef48958 */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/app.vue?vue&type=template&id=5ef48958");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_app_vue_vue_type_template_id_5ef48958__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./src/components/Counter.vue":
/*!************************************!*\
  !*** ./src/components/Counter.vue ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter.vue?vue&type=template&id=274929fc */ "./src/components/Counter.vue?vue&type=template&id=274929fc");
/* harmony import */ var _Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter.vue?vue&type=script&lang=js */ "./src/components/Counter.vue?vue&type=script&lang=js");



_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/components/Counter.vue"

/* harmony default export */ __webpack_exports__["a"] = (_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./src/components/Counter.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Counter.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/dist??ref--0!./Counter.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/components/Counter.vue?vue&type=template&id=274929fc":
/*!******************************************************************!*\
  !*** ./src/components/Counter.vue?vue&type=template&id=274929fc ***!
  \******************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../../node_modules/vue-loader/dist??ref--0!./Counter.vue?vue&type=template&id=274929fc */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js?!../../node_modules/vue-loader/dist/index.js?!./src/components/Counter.vue?vue&type=template&id=274929fc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_Counter_vue_vue_type_template_id_274929fc__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/*! exports used: createBlock, createSSRApp, createVNode, openBlock, ref, resolveComponent, toDisplayString */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map