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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_api_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api-connection */ \"./src/modules/api-connection.js\");\n\r\n\r\n$('#search-character').change(function() {\r\n    let string = $('#search-character').val();\r\n    Object(_modules_api_connection__WEBPACK_IMPORTED_MODULE_0__[\"getCharacters\"])(string);\r\n});\r\n\r\n$('#search-comic').change(function() {\r\n    let string = $('#search-comic').val();\r\n    Object(_modules_api_connection__WEBPACK_IMPORTED_MODULE_0__[\"getComics\"])(string);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/interfaces/cards.js":
/*!*********************************!*\
  !*** ./src/interfaces/cards.js ***!
  \*********************************/
/*! exports provided: buildCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildCard\", function() { return buildCard; });\nfunction buildCard(imageUrl, title, description) {\r\n    $('.row').last().append('<div class=\"col-12 col-md-2 d-flex align-items-stretch \"></div>');\r\n    $('.col-12').last().append('<div class=\"card border-dark my-2\"></div>');\r\n    $('.card').last().append('<img class=\"card-img-top\" src=\"' + imageUrl + '\" alt=\"Card image cap\">');\r\n    $('.card').last().append('<div class=\"card-body\"></div>');\r\n    $('.card-body').last().append('<div class=\"card-title\"> ' + title + ' </div>')\r\n\r\n    $('.card-body').last().append('<div class=\"card-text\"> ' + description + ' </div>');\r\n    if(description.length > 30){\r\n        $('.card-body').last().append('<a href=\"#\" class=\"show_hide\" data-content=\"toggle-text\">Mostrar descripción...</a>');\r\n        lessOrMoreText();\r\n    }\r\n}\r\n\r\nfunction lessOrMoreText() {\r\n    $(\".card-text\").last().hide();\r\n\r\n    $(\".show_hide\").last().on(\"click\", function (e) {\r\n        e.preventDefault();\r\n        let txt = \"\";\r\n\r\n        if($(this).prev('.card-text').is(':visible')){\r\n            txt = \"Mostrar descripción...\";\r\n            $(this).prev('.card-text').slideToggle(350);\r\n\r\n        }else{\r\n            txt = \"Ocultar descripción ...\";\r\n\r\n            $(this).prev('.card-text').slideToggle(450);\r\n        }\r\n        $(this).text(txt);\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack:///./src/interfaces/cards.js?");

/***/ }),

/***/ "./src/modules/api-connection.js":
/*!***************************************!*\
  !*** ./src/modules/api-connection.js ***!
  \***************************************/
/*! exports provided: getCharacters, getComics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCharacters\", function() { return getCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getComics\", function() { return getComics; });\n/* harmony import */ var _interfaces_cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../interfaces/cards.js */ \"./src/interfaces/cards.js\");\n\r\nconst key = '02a0a7d4a18f713e6b201a8b083a1c9a';\r\n//searched by character name.\r\nfunction getCharacters(string) {\r\n    $.ajax({\r\n        url: 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + string + '&limit=100&apikey=' + key,\r\n        type: 'GET',\r\n        beforeSend: function(){\r\n            $('body').append('<div id=\"spinner-container\" class=\"d-flex justify-content-center aling-items-center\"></div>');\r\n            $('#spinner-container').append('<div class=\"spinner-grow\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>');\r\n        },\r\n        success: function (response) {\r\n            $('#characters-container').empty();\r\n            $('#characters-container').append('<div class=\"row m-3 \"></div>');\r\n\r\n            for(let x = 0; x < response.data.results.length; x++ ){\r\n                let title = response.data.results[x].name;\r\n                let imgUrl = response.data.results[x].thumbnail.path + '.' + response.data.results[x].thumbnail.extension;\r\n                let description = response.data.results[x].description;\r\n\r\n                if(description == \"\") { description = \"Descripción no proporcionada.\" }\r\n                Object(_interfaces_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"buildCard\"])(imgUrl, title, description);\r\n            }\r\n        },\r\n        complete: function () {\r\n            $('#spinner-container').remove();\r\n        },\r\n        error: function(){ \r\n            $('#characters-container').empty();\r\n            $('#characters-container').append('<div id=\"error-container\" class=\"d-flex justify-content-center mt-5 align-items-center\"></div>');\r\n            $('#error-container').append('<i class=\"fas fa-exclamation-triangle mr-4 display-4 text-warning\"></i>');\r\n            $('#error-container').append('<h5 class=\"\">No se han podido cargar los datos, por favor inténtelo de nuevo.</h3>')  }\r\n    })\r\n}\r\n//searched by comic name.\r\nfunction getComics(string) {\r\n    $.ajax({\r\n        url: 'https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=' + string + '&limit=10&apikey=' + key,\r\n        type: 'GET',\r\n        beforeSend: function(){\r\n            $('body').append('<div id=\"spinner-container\" class=\"d-flex justify-content-center aling-items-center\"></div>');\r\n            $('#spinner-container').append('<div class=\"spinner-grow\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>');\r\n        },\r\n        success: function(response){\r\n            $('#comics-container').empty();\r\n            $('#comics-container').append('<div class=\"row m-3\"></div>');\r\n\r\n            for(let x = 0; x < response.data.results.length; x++ ){\r\n                let title = response.data.results[x].title\r\n                let imgUrl = response.data.results[x].thumbnail.path + '.' + response.data.results[x].thumbnail.extension;\r\n                let description = response.data.results[x].description;\r\n\r\n                if(description == null) { description = \"Descripción no proporcionada.\" }\r\n                Object(_interfaces_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"buildCard\"])(imgUrl, title, description);\r\n            }\r\n        },\r\n        complete: function () {\r\n            $('#spinner-container').remove();\r\n        },\r\n        error: function(){ \r\n            $('#comics-container').empty();\r\n            $('#comics-container').append('<div id=\"error-container\" class=\"d-flex justify-content-center mt-5 align-items-center\"></div>');\r\n            $('#error-container').append('<i class=\"fas fa-exclamation-triangle mr-4 display-4 text-warning\"></i>');\r\n            $('#error-container').append('<h5 class=\"\">No se han podido cargar los datos, por favor inténtelo de nuevo.</h3>')  }\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/api-connection.js?");

/***/ })

/******/ });