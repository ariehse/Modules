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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Client/App1/app1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Client/App1/app1.js":
/*!*****************************!*\
  !*** ./Client/App1/app1.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Messages_1 = __webpack_require__(/*! Messages */ \"./Digital/Modules/Messages/lib/message.js\");\r\nvar Validations_1 = __webpack_require__(/*! Validations */ \"./Digital/Modules/Validations/lib/validations.js\");\r\nMessages_1[\"default\"].Message.sendMessage({ messageContent: \"Message from Interface\" });\r\nValidations_1[\"default\"].Validator.validate('APP1');\r\n\n\n//# sourceURL=webpack:///./Client/App1/app1.js?");

/***/ }),

/***/ "./Digital/Modules/Messages/lib/message.js":
/*!*************************************************!*\
  !*** ./Digital/Modules/Messages/lib/message.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Messages;\r\n(function (Messages) {\r\n    var Message = /** @class */ (function () {\r\n        function Message() {\r\n        }\r\n        Message.sendMessage = function (m) {\r\n            console.log(\"MESSAGE:\", m.messageContent);\r\n        };\r\n        return Message;\r\n    }());\r\n    Messages.Message = Message;\r\n})(Messages = exports.Messages || (exports.Messages = {}));\r\nexports.default = (Messages);\r\n\n\n//# sourceURL=webpack:///./Digital/Modules/Messages/lib/message.js?");

/***/ }),

/***/ "./Digital/Modules/Validations/lib/validations.js":
/*!********************************************************!*\
  !*** ./Digital/Modules/Validations/lib/validations.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Validations;\r\n(function (Validations) {\r\n    var Validator = /** @class */ (function () {\r\n        function Validator() {\r\n        }\r\n        Validator.validate = function (source) {\r\n            console.log(\"Validated!!\", source);\r\n        };\r\n        return Validator;\r\n    }());\r\n    Validations.Validator = Validator;\r\n})(Validations = exports.Validations || (exports.Validations = {}));\r\nexports[\"default\"] = (Validations);\r\n\n\n//# sourceURL=webpack:///./Digital/Modules/Validations/lib/validations.js?");

/***/ })

/******/ });