(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gamelib"] = factory();
	else
		root["gamelib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("﻿\r\n    var player = __webpack_require__(/*! ./player.js */ \"./src/player.js\"); \r\n    var scoreboard = __webpack_require__(/*! ./ScoreBoard.js */ \"./src/ScoreBoard.js\"); \r\n\r\n    console.log(\"Create a game instance\");\r\n\r\n    var factorElement = document.getElementById('factor');\r\n    var problemsPerGame = 3; // set default value\r\n\r\n    var printName = function () {\r\n\r\n        player.Log();\r\n\r\n        SetProblemCount(document.getElementById('problemCount').value);\r\n\r\n        var gameForm = '';\r\n        for (var i = 1; i <= problemsPerGame; i++) {\r\n            gameForm += '<div class=\"form-group\">';\r\n            gameForm += '<label for=\"answer' + i + '\" class=\"col-sm-2 control-label\">';\r\n            gameForm += factorElement.value + ' x ' + i + ' = </label>';\r\n            gameForm += '<div class=\"col-sm-1\"><input type=\"text\" class=\"form-control\" id=\"answer' + i + '\" size=\"5\" /></div>';\r\n            gameForm += '</div>';\r\n        }\r\n\r\n        // add the new game to the page\r\n        var gameElement = document.getElementById('game');\r\n        gameElement.innerHTML = gameForm;\r\n\r\n        // enable the calculate score button\r\n        document.getElementById('calculate').removeAttribute('disabled');\r\n\r\n    };\r\n\r\n    var calculateScore = function () {\r\n\r\n        var problemsInGame = GetProblemCount();\r\n        var score = 0;\r\n\r\n        // loop through the text boxes and calculate the number that are correct\r\n        for (var i = 1; i <= problemsInGame; i++) {\r\n            var answer = document.getElementById('answer' + i).value;\r\n            if (i * factorElement.value === answer) {\r\n                score++;\r\n            }\r\n        }\r\n\r\n        var result = {\r\n            Name: player.Name,\r\n            Score: score,\r\n            Problems: problemsInGame,\r\n            Factor: factorElement.value\r\n        };\r\n\r\n        scoreboard.AddResult(result);\r\n        scoreboard.UpdateScoreBoard();\r\n\r\n        // disable the calculate score button\r\n        document.getElementById('calculate').setAttribute('disabled', 'true');\r\n    };\r\n\r\nvar GetProblemCount = function () { return problemsPerGame;};\r\nvar SetProblemCount = function (newProblemPerGame) { problemsPerGame = newProblemPerGame;}\r\n\r\n\r\n\r\n    exports.Print = printName; \r\n    exports.Calculate = calculateScore;\r\nexports.GetProblemCount = GetProblemCount;\r\nexports.SetProblemCount = SetProblemCount;\r\n\r\n   \n\n//# sourceURL=webpack://gamelib/./src/Game.js?");

/***/ }),

/***/ "./src/ScoreBoard.js":
/*!***************************!*\
  !*** ./src/ScoreBoard.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("﻿\r\n\r\n        console.log(\"Create a scoreboard  instance\");\r\n\r\n        var _boardResult = [];\r\n\r\n        var addResult = function (newResult) {\r\n\r\n            if (newResult)\r\n                _boardResult.push(newResult);\r\n\r\n        };\r\n\r\n        var updateScore = function () {\r\n\r\n            var output = '<h2>Scoreboard</h2>';\r\n\r\n            for (var index = 0; index < _boardResult.length; index++) {\r\n\r\n                var result = _boardResult[index];\r\n                output += '<h4>';\r\n                output += result.Name + ': ' + result.Score + '/' + result.Problems + ' for factor ' + result.Factor;\r\n                output += '</h4>';\r\n            }\r\n\r\n            // add the updated scoreboard to the page\r\n            var scoresElement = document.getElementById('scores');\r\n            scoresElement.innerHTML = output;\r\n        };\r\n\r\n        module.exports = {\r\n\r\n            AddResult : addResult,\r\n            UpdateScoreBoard : updateScore\r\n\r\n        };\r\n\r\n        \r\n\r\n\r\n\n\n//# sourceURL=webpack://gamelib/./src/ScoreBoard.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("﻿    var player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\r\n    var game = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\"); \r\n\r\nconsole.log('Starting MultiMath with RequireJS');\r\n\r\n\r\nfunction main() {\r\n\r\n    player.Log(\"main\");\r\n}\r\n\r\n\r\nexports.Player = player;\r\nexports.Game = game; \r\n\r\n    \r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gamelib/./src/app.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("﻿\r\n\r\n\r\n    console.log(\"Create a player instance\");\r\n\r\n    var _playerName = null;\r\n\r\n    var PlayerLog = function () {\r\n\r\n        if (_playerName)\r\n            console.log(\"player Name is : \" + _playerName);\r\n        else\r\n            console.log(\"No Player registered.\");\r\n    };\r\n\r\n\r\n    var Name = Object.defineProperty(this, \"Name\", {\r\n        get: function () { return _playerName; },\r\n        set: function (name) { _playerName = name; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n\r\n\r\n    exports.Log = PlayerLog;\r\n    exports.Name = Name;\r\n\r\n   \n\n//# sourceURL=webpack://gamelib/./src/player.js?");

/***/ })

/******/ });
});