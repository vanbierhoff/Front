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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/canvas.js":
/*!**********************!*\
  !*** ./js/canvas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Canvas {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.context = canvas.getContext(\"2d\");\n        this.button = document.querySelector('.main-button__open-camera');\n        this.context.setTransform(1, 0, 0, 1, 0, 0); // убираем все кастомные трансформации canvas\n        this.video = document.querySelector('.main-video');\n        this.canvas.width = this.WCanvas;\n        this.canvas.height = this.HCanvas;\n    }\n    // геттер на размеры canvas в зависимости от размеров экрана.\n    get WCanvas() {\n\n        return this.canvas.width = this.video.clientWidth;\n    }\n\n    get HCanvas() {\n        return this.canvas.height = this.video.clientHeight;\n    }\n\n    saveScreen() {\n\n        this.context.setTransform(1, 0, 0, 1, 0, 0); // убираем все кастомные трансформации canvas\n        let img = new Image(this.context.drawImage(this.video, 0, 0, this.WCanvas, this.HCanvas));\n        let dataURL = this.canvas.toDataURL('image/png');\n        img.src = dataURL;\n        return img;\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\n\n//# sourceURL=webpack:///./js/canvas.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.js */ \"./js/video.js\");\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas.js */ \"./js/canvas.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/video.js":
/*!*********************!*\
  !*** ./js/video.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./js/canvas.js\");\n\nlet cnv = document.querySelector('.main-canvas-screen-history');\n\nlet app = new Vue({\n\n  el: '.main-container',\n  data: {\n    getVideo: false,\n    constraints: {\n      audio: true,\n      video: true\n\n    },\n    textButton: 'Open Camera',\n    ShowImg: [],\n    clearHistory: 'Clear History',\n    backButton: 'main-button__back',\n    colorButton: 'main-button__grayColor',\n    clear: false,\n    getHistory: false\n\n  },\n\n  methods: {\n    getUrlVideo(constraints) {\n\n      navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {\n\n        let video = document.querySelector('.main-video');\n        video.srcObject = mediaStream;\n        video.onloadedmetadata = async function (e) {\n          app.$data.getVideo = true;\n          await video.play();\n          app.$data.textButton = 'capture';\n          app.$data.clearHistory = 'Back';\n          app.$data.colorButton = 'main-button__whiteColor';\n          app.positionSvg();\n        };\n      }).catch(function (err) {\n        console.log(err + \": \" + err.message);\n      });\n    },\n\n    /**\r\n     * \r\n     * Метод проверяет статус кнопки:\r\n     *  если button.dataset.button === capture - сохраняет снимок экрана\r\n     * если button.dataset.button === Open Camera - вызывает метод getUrlVideo - для запуска камеры\r\n     * \r\n     * @param {class} cnv  -содержит объект canvas, для отрисовки снимков экрана\r\n     * @method saveScreen - метод объекта класса cnv - делает снимок экрана и возвращает его.\r\n     * @param this.ShowImg {array } - хранит всех сохраненных изображений\r\n     */\n    saveScreens(cnv) {\n      let button = document.querySelector('.main-button__open-camera');\n      button.addEventListener('click', () => {\n        if (button.dataset.button === \"capture\") {\n          let dataImg = cnv.saveScreen();\n          this.ShowImg.push(dataImg);\n          this.getHistory = true;\n          this.clear = true;\n        } else if (button.dataset.button === \"Open Camera\") {\n          this.getUrlVideo(this.constraints);\n        }\n      });\n    },\n    clearHistoryScreen() {\n      if (this.clear === true) {\n        this.colorButton = 'main-button__grayColor';\n        this.getHistory = false;\n        this.ShowImg = [];\n      }\n    },\n    positionSvg() {\n      let contour = document.querySelector('.main-green-contour');\n      positionCenter(contour);\n    },\n\n    listenerBackButton() {\n      let button = document.querySelector('.main-button__back');\n      let video = document.querySelector('.main-video');\n      button.addEventListener('click', () => {\n        if (this.clearHistory === 'Back') {\n          this.videoStop(video);\n        } else if (this.clear === true && this.clearHistory === 'Clear History') {\n          this.clearHistoryScreen();\n        }\n      });\n    },\n    videoStop(video) {\n      video.srcObject = null;\n      this.callMethod = 'CheckStatusButton()';\n      this.clearHistory = 'Clear History';\n      this.getVideo = false;\n      this.textButton = 'Open Camera';\n      this.callMethod = 'CheckStatusButton()';\n      if (this.ShowImg[0] != undefined) {\n        this.colorButton = 'main-button__redColor';\n      } else {\n        this.colorButton = 'main-button__grayColor';\n      }\n    }\n\n  },\n\n  mounted: function () {\n    cnv = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cnv);\n    this.saveScreens(cnv);\n    this.listenerBackButton();\n  }\n\n});\n\nfunction positionCenter() {\n  let elem = document.querySelector('.main-green-contour');\n  function setPosition(el) {\n    let parrentEl = document.querySelector('.video-wrapper');\n    el.width.baseVal.value = parrentEl.clientWidth * 0.4;\n    el.height.baseVal.value = parrentEl.clientHeight * 0.7;\n    let widthEl = el.width.baseVal.value / 2;\n    let heightEl = el.height.baseVal.value / 2;\n\n    let parrentWidth = parrentEl.clientWidth / 2;\n    let parrentHeight = parrentEl.clientHeight / 2;\n    el.style.top = `${parrentHeight - heightEl}px`;\n    el.style.left = `${parrentWidth - widthEl}px`;\n  }\n  setPosition(elem);\n  window.addEventListener('resize', () => {\n    setPosition(elem);\n  });\n}\n\n//# sourceURL=webpack:///./js/video.js?");

/***/ })

/******/ });