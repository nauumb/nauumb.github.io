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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/interface.js */ \"./src/modules/interface.js\");\n/* harmony import */ var _modules_random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/random.js */ \"./src/modules/random.js\");\n\r\n\r\n\r\nlet root = $('#root-container');\r\nlet islands = Object(_modules_random_js__WEBPACK_IMPORTED_MODULE_1__[\"getRandomIslands\"])();\r\nlet images = [];\r\n\r\n$(\"[name=mode]\").change(function () {\r\n    let images = $('.image-container');\r\n    if (images.length > 0) {\r\n        for (let x = 0; x < images.length; x++) {\r\n            images[x].remove();\r\n        }\r\n    }\r\n    images = Object(_modules_random_js__WEBPACK_IMPORTED_MODULE_1__[\"getRandomImages\"])($(this).val(), islands);\r\n    for (let x = 0; x < images.length; x++) {\r\n        Object(_modules_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"createImage\"])(root, images[x]);\r\n    }\r\n})\r\nfor (let x = 0; x < islands.length; x++) {\r\n    Object(_modules_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"createIsland\"])(root, islands[x]);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/*! exports provided: createIsland, createImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createIsland\", function() { return createIsland; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImage\", function() { return createImage; });\n\r\nfunction createIsland(rootNode, island) {\r\n    let container = '<div id=\"' + island + '\" class=\"island-container ' + island + '\"' + '></div>';\r\n    let content = '<div class=\"content\">' + island + '</div>'\r\n\r\n    rootNode.append(container);\r\n    $('.island-container').last().append(content);\r\n}\r\n\r\nfunction createImage(rootNode, route) {\r\n\r\n    let cutPoint = route.lastIndexOf('-');\r\n    let id = route.substring(0, cutPoint)\r\n\r\n    let Imagecontainer = '<div id=\"' + id + '\" class=\"image-container\"></div>';\r\n    let image = '<img class=\"image\" src=\"../src/media/' + route + '.png\">' + '</img>'\r\n\r\n    rootNode.append(Imagecontainer);\r\n    $('.image-container').last().append(image);\r\n\r\n\r\n    $(\".image-container\").draggable({\r\n        containment: \"#root-container\"\r\n    });\r\n\r\n    $(\".island-container\").droppable({\r\n        accept: \".image-container\",\r\n        addClass: \"ui-state-highlight\",\r\n\r\n        drop: function (event, ui) {\r\n\r\n            (ui.draggable).draggable({\r\n                disabled: true\r\n            });\r\n            \r\n            toastr.options.closeMethod = 'fadeOut';\r\n            toastr.options.closeDuration = 300;\r\n            toastr.options.closeEasing = 'swing';\r\n            toastr.options.closeButton = true;\r\n\r\n            if ((ui.draggable).attr(\"id\") == $(this).attr(\"id\")) {\r\n                $(this).css(\"border\", \"3px solid green\")\r\n                toastr.success('Éxito');\r\n\r\n            } else {\r\n                $(this).css(\"border\", \"3px solid red\")\r\n                toastr.error('Fallo');\r\n            }\r\n            let mode = $('[name=mode]:checked').val()\r\n\r\n          \r\n        }\r\n    });\r\n}\r\n\r\nfunction createDialog() {\r\n    $(\"#dialog\").dialog({\r\n        autoOpen: false,\r\n        show: {\r\n            effect: \"blind\",\r\n            duration: 1000\r\n        },\r\n        hide: {\r\n            effect: \"explode\",\r\n            duration: 1000\r\n        }\r\n    });\r\n\r\n    $(\"#opener\").on(\"click\", function () {\r\n        $(\"#dialog\").dialog(\"open\");\r\n    });\r\n}\r\n\r\n//buttons with jquery-ui\r\n$(\"input\").checkboxradio();\n\n//# sourceURL=webpack:///./src/modules/interface.js?");

/***/ }),

/***/ "./src/modules/random.js":
/*!*******************************!*\
  !*** ./src/modules/random.js ***!
  \*******************************/
/*! exports provided: getRandomImages, getRandomIslands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomImages\", function() { return getRandomImages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomIslands\", function() { return getRandomIslands; });\nconst islands = ['Tenerife', 'La-Gomera', 'El-Hierro', 'La-Palma', 'Gran-Canaria', 'Lanzarote', 'Fuerteventura'];\r\nconst images = ['El-Hierro-hombre',\r\n    'El-Hierro-mujer',\r\n    'Fuerteventura-mujer',\r\n    'Fuerteventura-hombre',\r\n    'La-Gomera-hombre',\r\n    'La-Gomera-mujer',\r\n    'La-Palma-mujer',\r\n    'La-Palma-hombre',\r\n    'Lanzarote-hombre',\r\n    'Lanzarote-mujer',\r\n    'Gran-Canaria-mujer',\r\n    'Gran-Canaria-hombre',\r\n    'Tenerife-hombre',\r\n    'Tenerife-mujer',\r\n];\r\n\r\nfunction shuffle(arr) {\r\n    for (let i = arr.length - 1; i > 0; i--) {\r\n        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i\r\n\r\n        // swap elements array[i] and array[j]\r\n\r\n        //   used \"destructuring assignment\" syntax to achieve that\r\n        //   same can be written as:\r\n        //   let t = array[i]; array[i] = array[j]; array[j] = t\r\n        [arr[i], arr[j]] = [arr[j], arr[i]];\r\n    }\r\n    return arr;\r\n}\r\n\r\nfunction randomNumber(start, end) {\r\n    return (Math.floor(Math.random() * end) + start);\r\n}\r\n\r\nfunction randomItem(minValue, maxValue, array) {\r\n    let randomValue = Math.floor(Math.random() * (maxValue - minValue) + minValue);\r\n    return (array[randomValue]);\r\n}\r\n\r\nfunction getRandomImages(mode, islands) {\r\n    let randomImages = [];\r\n    let selectedImages = []\r\n  \r\n    for (let x = 0; x < islands.length; x++) {\r\n        for (let y = 0; y < images.length; y++) {     \r\n            if(images[y].includes(islands[x])){\r\n                selectedImages.push(images[y]);\r\n            }\r\n        }        \r\n    }\r\n    shuffle(selectedImages);\r\n    randomImages = selectedImages.splice(0, mode)\r\n\r\n    return randomImages\r\n}\r\n\r\nfunction getRandomIslands() {\r\n    let numberOfIslands = randomNumber(3, 5);\r\n    let randomIslands = [];\r\n    let randomIsland;\r\n    let count = 0;\r\n\r\n    while (count < numberOfIslands) {\r\n        randomIsland = randomItem(0, islands.length, islands);\r\n        if (!randomIslands.includes(randomIsland)) {\r\n            randomIslands.push(randomIsland);\r\n            count++;\r\n        }\r\n    }\r\n    return (randomIslands);\r\n}\n\n//# sourceURL=webpack:///./src/modules/random.js?");

/***/ })

/******/ });