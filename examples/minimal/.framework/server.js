module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/.framework/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.framework/entry.server.js");
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
  const _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-view");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_router_view)]);
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

/***/ "../../packages/vue-framework-router/dist/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/Guillermo/Documents/projects/xarples/vue-framework/packages/vue-framework-router/dist/index.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/*! exports used: createRouter */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = void 0;

const vue_router_1 = __webpack_require__(/*! vue-router */ "vue-router");

const isSever = typeof window === 'undefined';

function createRouter(context) {
  const router = vue_router_1.createRouter({
    history: !isSever ? vue_router_1.createWebHistory() : vue_router_1.createMemoryHistory(),
    routes: getRoutes(context)
  });
  return router;
}

exports.createRouter = createRouter;

function getRoutes(requireComponent) {
  // @ts-ignore
  // const requireComponent = require.context(
  //   '../src/pages',
  //   true,
  //   /\.vue$/,
  //   'lazy'
  // )
  const routes = requireComponent.keys();
  return routes.map(route => {
    const regExp = /^\.\/(.*)\.vue+$/;
    const routeName = route.replace(regExp, '$1');
    const routePath = route.replace(regExp, '/$1').replace('/index', '');
    return {
      name: routeName,
      path: routePath,
      component: () => Promise.resolve(requireComponent(route)).then(getDefault)
    };
  });
}

function getDefault(component) {
  return component.default || component;
}

/***/ }),

/***/ "./.framework/entry.server.js":
/*!************************************!*\
  !*** ./.framework/entry.server.js ***!
  \************************************/
/*! exports provided: createApp */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xarples/vue-framework-router */ "../../packages/vue-framework-router/dist/index.js");
/* harmony import */ var _xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_app_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/app.vue */ "./src/app.vue");




const requireComponent = __webpack_require__("./src/pages lazy recursive \\.vue$");

async function createApp(context) {
  const router = Object(_xarples_vue_framework_router__WEBPACK_IMPORTED_MODULE_1__["createRouter"])(requireComponent);
  const app = Object(vue__WEBPACK_IMPORTED_MODULE_0__["createSSRApp"])(_src_app_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
  router.push(context.req.url);
  await router.isReady();
  app.use(router);
  return app;
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

/***/ "./src/pages lazy recursive \\.vue$":
/*!*******************************!*\
  !*** ./src/pages lazy \.vue$ ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.vue": [
		"./src/pages/index.vue",
		0
	],
	"./users/index.vue": [
		"./src/pages/users/index.vue",
		1
	],
	"./users/me.vue": [
		"./src/pages/users/me.vue",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/pages lazy recursive \\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/*! exports used: createBlock, createSSRApp, createTextVNode, createVNode, openBlock, ref, resolveComponent, toDisplayString, withCtx */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map