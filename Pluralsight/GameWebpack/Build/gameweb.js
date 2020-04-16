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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: Print, Calculate, GetProblemCount, SetProblemCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Print\", function() { return Print; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calculate\", function() { return Calculate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetProblemCount\", function() { return GetProblemCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetProblemCount\", function() { return SetProblemCount; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ScoreBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreBoard */ \"./src/ScoreBoard.js\");\n﻿\r\n\r\n \r\n\r\n    console.log(\"Create a game instance\");\r\n\r\n    var factorElement = document.getElementById('factor');\r\n    var problemsPerGame = 3; // set default value\r\n\r\nconst Print =  ()=>  {\r\n\r\n        Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"Log\"])();\r\n\r\n        SetProblemCount(document.getElementById('problemCount').value);\r\n\r\n        var gameForm = '';\r\n        for (var i = 1; i <= problemsPerGame; i++) {\r\n            gameForm += '<div class=\"form-group\">';\r\n            gameForm += '<label for=\"answer' + i + '\" class=\"col-sm-2 control-label\">';\r\n            gameForm += factorElement.value + ' x ' + i + ' = </label>';\r\n            gameForm += '<div class=\"col-sm-1\"><input type=\"text\" class=\"form-control\" id=\"answer' + i + '\" size=\"5\" /></div>';\r\n            gameForm += '</div>';\r\n        }\r\n\r\n        // add the new game to the page\r\n        var gameElement = document.getElementById('game');\r\n        gameElement.innerHTML = gameForm;\r\n\r\n        // enable the calculate score button\r\n        document.getElementById('calculate').removeAttribute('disabled');\r\n\r\n    };\r\n\r\n    const Calculate=  () =>  {\r\n\r\n        var problemsInGame = GetProblemCount();\r\n        var score = 0;\r\n\r\n        // loop through the text boxes and calculate the number that are correct\r\n        for (var i = 1; i <= problemsInGame; i++) {\r\n            var answer = document.getElementById('answer' + i).value;\r\n            if (i * factorElement.value === answer) {\r\n                score++;\r\n            }\r\n        }\r\n\r\n        var result = {\r\n            Name: Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"GetName\"])(),\r\n            Score: score,\r\n            Problems: problemsInGame,\r\n            Factor: factorElement.value\r\n        };\r\n\r\n        Object(_ScoreBoard__WEBPACK_IMPORTED_MODULE_1__[\"AddResult\"])(result);\r\n        Object(_ScoreBoard__WEBPACK_IMPORTED_MODULE_1__[\"UpdateScoreBoard\"])();\r\n\r\n        // disable the calculate score button\r\n        document.getElementById('calculate').setAttribute('disabled', 'true');\r\n    };\r\n\r\nconst  GetProblemCount= ()=>  { return problemsPerGame;};\r\nconst  SetProblemCount= (newProblemPerGame)=>  { problemsPerGame = newProblemPerGame;}\r\n\r\n\r\n\r\n\r\n   \n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/ScoreBoard.js":
/*!***************************!*\
  !*** ./src/ScoreBoard.js ***!
  \***************************/
/*! exports provided: AddResult, UpdateScoreBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddResult\", function() { return AddResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpdateScoreBoard\", function() { return UpdateScoreBoard; });\n﻿\r\n\r\n        console.log(\"Create a scoreboard  instance\");\r\n\r\n        var _boardResult = [];\r\n\r\n        const AddResult = (newResult) => {\r\n\r\n            if (newResult)\r\n                _boardResult.push(newResult);\r\n\r\n        };\r\n\r\n        const UpdateScoreBoard = () => {\r\n\r\n            var output = '<h2>Scoreboard</h2>';\r\n\r\n            for (var index = 0; index < _boardResult.length; index++) {\r\n\r\n                var result = _boardResult[index];\r\n                output += '<h4>';\r\n                output += result.Name + ': ' + result.Score + '/' + result.Problems + ' for factor ' + result.Factor;\r\n                output += '</h4>';\r\n            }\r\n\r\n            // add the updated scoreboard to the page\r\n            var scoresElement = document.getElementById('scores');\r\n            scoresElement.innerHTML = output;\r\n        };\r\n\r\n        \r\n        \r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/ScoreBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n﻿\r\n\r\n\r\n\r\n    console.log('Starting MultiMath with Webpack');\r\n\r\n    // add click handler to the start game button\r\n    document.getElementById('startGame').addEventListener('click', function () {\r\n\r\n        Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"SetName\"])(document.getElementById('playername').value);\r\n\r\n        if (game)\r\n            Object(_Game__WEBPACK_IMPORTED_MODULE_1__[\"Print\"])();\r\n        else\r\n            console.log(\"game is an object not set reference - check reference script game.js\");\r\n\r\n    });\r\n\r\n    // add click handler to the calculate score button\r\n    document.getElementById('calculate').addEventListener('click', function () {\r\n\r\n        if (game)\r\n            Object(_Game__WEBPACK_IMPORTED_MODULE_1__[\"Calculate\"])();\r\n        else\r\n            console.log(\"game is an object not set reference - check reference script game.js\");\r\n\r\n\r\n    });\r\n\r\n    if (game && game.GetProblemCount)\r\n        document.getElementById('problemCount').value = Object(_Game__WEBPACK_IMPORTED_MODULE_1__[\"GetProblemCount\"])();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Log, GetName, SetName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Log\", function() { return Log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetName\", function() { return GetName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetName\", function() { return SetName; });\n﻿\r\n\r\n\r\n    console.log(\"Create a player instance\");\r\n\r\n    var _playerName = null;\r\n\r\n    const Log= ()=>  {\r\n\r\n        if (_playerName)\r\n            console.log(\"player Name is : \" + _playerName);\r\n        else\r\n            console.log(\"No Player registered.\");\r\n    };\r\n\r\nconst GetName = () => { return _playerName; };\r\nconst SetName = (name) => { _playerName = name; };\r\n\r\n\r\n\r\n\r\n\r\n     \n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });