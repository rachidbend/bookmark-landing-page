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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n\r\n\r\nconst questionLabel = () => {\r\n\r\n// get a certen question\r\n    document.querySelector('.questions__container').addEventListener('click', event => {\r\n        let item = event.target.closest('.question');\r\n\r\n        // -----------------------------------\r\n        if (item) {\r\n            if (item.matches('.question')) {\r\n                if (item.lastElementChild.style.display === 'none') {\r\n                    item.lastElementChild.style.display = 'block';\r\n                    item.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';\r\n                    setTimeout(()=> {\r\n                        item.lastElementChild.classList.toggle('answer--active');\r\n                    }, 1)\r\n                    \r\n                } \r\n                else if (item.lastElementChild.style.display === 'block') {\r\n                    item.lastElementChild.style.display = 'none';\r\n                    item.firstElementChild.lastElementChild.style.transform = 'rotate(0deg)';\r\n                    setTimeout(()=> {\r\n                        item.lastElementChild.classList.toggle('answer--active');\r\n                    }, 1)\r\n                } \r\n                else if (!item.lastElementChild.style.display) {\r\n                    item.lastElementChild.style.display = 'block';\r\n                    item.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';\r\n                    setTimeout(()=> {\r\n                        item.lastElementChild.classList.toggle('answer--active');\r\n                    }, 1)\r\n                }\r\n            }\r\n        } \r\n        // -----------------------------------\r\n    });\r\n\r\n\r\n}\r\n\r\nconst slides = () => {\r\n\r\n    document.querySelector('.slides').addEventListener('click', event => {\r\n        let ctrl = event.target.closest('.slide__ctrl');\r\n        if (ctrl) {\r\n            let id = parseInt(ctrl.id.split('-')[1]) ;\r\n            let slides = document.querySelectorAll('.slide-item');\r\n            let pos = id - 1;\r\n   \r\n            // get the slide with the same id Number\r\n            if (id === 1) {\r\n                document.querySelector('#slide-1').style.left = '0%';\r\n                document.querySelector('#slide-2').style.left = '100%';\r\n                document.querySelector('#slide-3').style.left = '200%';\r\n                \r\n                document.querySelector('#ctrl-1').classList.remove('active');\r\n                document.querySelector('#ctrl-1').classList.add('active');\r\n                document.querySelector('#ctrl-2').classList.remove('active');\r\n                document.querySelector('#ctrl-3').classList.remove('active');\r\n            }\r\n            else if (id === 2) {\r\n                document.querySelector('#slide-1').style.left = '-200%';\r\n                document.querySelector('#slide-2').style.left = '0%';\r\n                document.querySelector('#slide-3').style.left = '100%';\r\n                \r\n                document.querySelector('#ctrl-1').classList.remove('active');\r\n                document.querySelector('#ctrl-1').classList.remove('active');\r\n                document.querySelector('#ctrl-2').classList.add('active');\r\n                document.querySelector('#ctrl-3').classList.remove('active');\r\n            }\r\n            else if (id === 3) {\r\n                document.querySelector('#slide-1').style.left = '-200%';\r\n                document.querySelector('#slide-2').style.left = '-100%';\r\n                document.querySelector('#slide-3').style.left = '0%';\r\n                \r\n                document.querySelector('#ctrl-1').classList.remove('active');\r\n                document.querySelector('#ctrl-1').classList.remove('active');\r\n                document.querySelector('#ctrl-2').classList.remove('active');\r\n                document.querySelector('#ctrl-3').classList.add('active');\r\n            }\r\n            else {\r\n                console.log('there has been an error in the slides');\r\n            }\r\n        }        \r\n    });\r\n}\r\n\r\nquestionLabel();\r\nslides();\r\n\r\n\r\nfunction emailErrorAdd ()  {\r\n    document.querySelector('.form__email').classList.add('email--error');\r\n    document.querySelector('.email__label').classList.add('label--error');\r\n    document.querySelector('.email__error').classList.add('error--error');\r\n}\r\n\r\nfunction emailErrorRemove ()  {\r\n    document.querySelector('.form__email').classList.remove('email--error');\r\n    document.querySelector('.email__label').classList.remove('label--error');\r\n    document.querySelector('.email__error').classList.remove('error--error');\r\n}\r\n\r\n\r\nconst form = document.querySelector('.contact__form');\r\nconst email = document.querySelector('.form__email');\r\nconst errorMessage = document.querySelector('.email__label');\r\n\r\n\r\n\r\nform.addEventListener('submit', e => {\r\n    let messages = [];\r\n    emailErrorRemove();\r\n    if (email.value === '' || email.value === null) {\r\n        messages.push('Email is required');\r\n    }\r\n    if (!email.value.includes('@')) {\r\n        messages.push('you have to include @');\r\n    }\r\n    if (!(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(email.value))) {\r\n        messages.push('the email is formatted incorectly');\r\n    }\r\n    if (messages.length > 0) {\r\n        emailErrorAdd();\r\n        e.preventDefault();\r\n        errorMessage.innerText = messages.join(', ');\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n\r\nconst mobile = () => {\r\n\r\n    const mobileToggleAdd = () => {\r\n        document.querySelector('.mobile').classList.add('mobile-active');\r\n        document.querySelector('.mobile__add').parentNode.style.display = 'none';\r\n    }\r\n\r\n    const mobileToggleRemove = () => {\r\n        document.querySelector('.mobile__add').parentNode.style.display = 'block';\r\n        document.querySelector('.mobile').classList.remove('mobile-active');\r\n\r\n    }\r\n\r\n\r\n\r\n    // when Hamburger is clicked show the mobile menu\r\n    document.querySelector('.mobile__add').addEventListener('click', event => {\r\n        const mobileAdd = event.target.closest('.mobile__add');\r\n        if (mobileAdd) {\r\n            mobileToggleAdd();\r\n        }  \r\n    })\r\n\r\n    // when the Close is clicked remove the nav toggle\r\n    document.querySelector('.mobile__close').addEventListener('click', event => {\r\n        const mobileClose = event.target.closest('.mobile__close');\r\n        if (mobileClose) {\r\n            mobileToggleRemove();\r\n        }\r\n    })\r\n\r\n\r\n    // when one of the items is clicked (nav, social) remove the mobile nav\r\n\r\n    document.querySelector('.mobile').addEventListener('click', event => {\r\n        const mobileLink = event.target.closest('a');\r\n        if (mobileLink) {\r\n            mobileToggleRemove();\r\n        }\r\n    })\r\n\r\n\r\n}\r\n\r\nmobile();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });