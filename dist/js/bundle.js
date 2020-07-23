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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n  overflow-x: hidden;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-size: 1.8rem;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n}\\n\\n.heading {\\n  color: #252b46;\\n  font-size: 5rem;\\n  text-transform: capitalize;\\n  font-weight: 500;\\n  margin-bottom: 2.5rem;\\n}\\n.heading--secondary {\\n  font-size: 3.2rem;\\n}\\n.heading--tertiary {\\n  font-size: 2rem;\\n}\\n\\n.text {\\n  color: #9194a1;\\n  line-height: 1.6;\\n}\\n\\nsvg {\\n  fill: currentColor;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-top: 50px;\\n}\\n.header .logo {\\n  justify-self: flex-start;\\n}\\n\\n.hero {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-top: 10rem;\\n  position: relative;\\n  margin-bottom: 15rem;\\n}\\n.hero__content {\\n  max-width: 50rem;\\n}\\n.hero__content .btn__container {\\n  margin-top: 2.5rem;\\n}\\n.hero__content .btn__container .btn--blue {\\n  margin-right: 2rem;\\n}\\n.hero__illustration {\\n  transform: translateX(10rem);\\n}\\n.hero .hero__background {\\n  height: 600px;\\n  width: auto;\\n  position: absolute;\\n  z-index: -1;\\n  right: -50rem;\\n  bottom: -20rem;\\n}\\n\\n.features {\\n  margin-bottom: 10rem;\\n}\\n.features .features__desc {\\n  width: 42%;\\n  margin: 0 auto;\\n  text-align: center;\\n  margin-bottom: 8rem;\\n}\\n\\n.extentions {\\n  text-align: center;\\n  margin-bottom: 20rem;\\n}\\n.extentions .extentions__text {\\n  width: 40%;\\n  margin: 0 auto;\\n}\\n.extentions .extentions__container {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: center;\\n  margin-top: 10rem;\\n}\\n.extentions .card-1 {\\n  transform: translateY(-3.5rem);\\n}\\n.extentions .card-3 {\\n  transform: translateY(3.5rem);\\n}\\n\\n.questions {\\n  text-align: center;\\n  margin-bottom: 15rem;\\n}\\n.questions__text {\\n  width: 40%;\\n  margin: 0 auto;\\n  margin-bottom: 5rem;\\n}\\n.questions__container {\\n  margin: 0 auto;\\n  margin-bottom: 5rem;\\n}\\n\\n.contact {\\n  background-color: #5368df;\\n  padding: 7rem 0;\\n  text-align: center;\\n  margin: 0 -30rem;\\n  color: white;\\n}\\n.contact__text {\\n  font-weight: 400;\\n  font-size: 1.3rem;\\n  margin-bottom: 3.5rem;\\n  text-transform: uppercase;\\n  letter-spacing: 0.5rem;\\n}\\n.contact__heading {\\n  color: white;\\n  margin: 0 auto;\\n  text-transform: unset;\\n  font-size: 3.2rem;\\n  font-weight: 500;\\n  margin-bottom: 3.6rem;\\n}\\n.contact__form .form__email {\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  height: 2rem;\\n  width: 30rem;\\n  font-size: 1.6rem;\\n  padding: 2.3rem;\\n  border: none;\\n  border-radius: 0.5rem;\\n  margin-right: 1.4rem;\\n}\\n.contact__form .form__email::placeholder {\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  color: rgba(145, 148, 161, 0.4);\\n}\\n.contact__form .form__email:focus, .contact__form .form__email:active {\\n  outline: none;\\n}\\n\\n.footer {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 2rem;\\n  background-color: #252b46;\\n}\\n.footer__content {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: center;\\n}\\n.footer .icon {\\n  display: inline-block;\\n  width: 1em;\\n  height: 1em;\\n  stroke-width: 0;\\n  stroke: currentColor;\\n  fill: currentColor;\\n}\\n.footer .logo {\\n  margin-right: 5rem;\\n}\\n.footer__nav .nav__link {\\n  color: white;\\n  font-size: 1.3rem;\\n  font-weight: 400;\\n}\\n.footer .social__link {\\n  display: inline-block;\\n  margin-right: 4rem;\\n  color: white;\\n  transition: all 0.2s;\\n}\\n.footer .social__link:hover {\\n  color: #fa5757;\\n}\\n\\n.nav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-size: 1.4rem;\\n}\\n.nav ul {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-evenly;\\n  margin-right: 5rem;\\n}\\n.nav ul li {\\n  list-style: none;\\n  padding: 2rem;\\n}\\n.nav ul li a {\\n  color: #252b46;\\n  text-decoration: none;\\n  text-transform: uppercase;\\n  letter-spacing: 2px;\\n  transition: all 0.2s;\\n  padding: 0.5rem;\\n}\\n.nav ul li a:hover {\\n  color: #fa5757;\\n}\\n\\n.btn {\\n  display: inline-block;\\n  text-decoration: none;\\n  font-weight: 500;\\n  color: white;\\n  font-size: 1.6rem;\\n  padding: 1.3rem 3.1rem;\\n  border: none;\\n  border-radius: 0.5rem;\\n  box-shadow: 0 0.5rem 1rem rgba(145, 148, 161, 0.4);\\n  transition: all 0.2s;\\n  backface-visibility: hidden;\\n}\\n.btn:hover {\\n  background-color: white;\\n}\\n.btn:active {\\n  transform: translateY(2px);\\n}\\n.btn__login {\\n  text-transform: uppercase;\\n  letter-spacing: 2px;\\n  background-color: #fa5757;\\n  font-size: 1.4rem;\\n  border: 2px solid #fa5757;\\n  font-weight: 500;\\n  color: white;\\n}\\n.btn__login:hover {\\n  color: #fa5757;\\n}\\n.btn--blue {\\n  background-color: #5368df;\\n  transition: all 0.2s;\\n  border: 2px solid #5368df;\\n  font-size: 1.4rem;\\n  font-weight: 400;\\n}\\n.btn--blue:hover {\\n  border: 2px solid #5368df;\\n  background-color: white;\\n  color: #5368df;\\n}\\n.btn--gray {\\n  background-color: rgba(145, 148, 161, 0.1);\\n  color: #9194a1;\\n  border: 2px solid rgba(145, 148, 161, 0.01);\\n}\\n.btn--gray:hover {\\n  background-color: white;\\n  border: 2px solid #9194a1;\\n}\\n.btn--contact {\\n  background-color: #fa5757;\\n  color: white;\\n  border: 2px solid #fa5757;\\n  transition: all 0.2s;\\n  font-size: 1.4rem;\\n  font-family: \\\"Rubik\\\", sans-serif;\\n  padding: 1.4rem 2rem;\\n}\\n.btn--contact:hover {\\n  color: #fa5757;\\n  background-color: white;\\n}\\n.btn--info {\\n  padding: 1.3rem 2rem;\\n}\\n\\n.slides {\\n  position: relative;\\n}\\n.slides .slide__control {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: center;\\n  margin-bottom: 6rem;\\n}\\n.slides .slide__ctrl {\\n  border: none;\\n  background-color: white;\\n  color: rgba(0, 0, 0, 0.7);\\n  padding: 3rem 5rem;\\n  font-size: 1.8rem;\\n  border-bottom: 1px solid rgba(145, 148, 161, 0.6);\\n  font-weight: 500;\\n  letter-spacing: 1px;\\n}\\n.slides .slide__ctrl:hover {\\n  color: #fa5757;\\n  outline: none;\\n}\\n.slides .slide__ctrl:active, .slides .slide__ctrl:focus {\\n  border: none;\\n  outline: none;\\n  border-bottom: 4px solid #fa5757;\\n}\\n.slides__container {\\n  height: 45rem;\\n}\\n.slides__container .slide {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: absolute;\\n}\\n.slides__container .slide__content {\\n  width: 40%;\\n}\\n.slides__container .slide__content__text {\\n  margin-bottom: 3rem;\\n}\\n.slides__container #slide-1 {\\n  left: 0;\\n}\\n.slides__container #slide-2 {\\n  left: 100%;\\n}\\n.slides__container #slide-3 {\\n  left: 200%;\\n}\\n.slides .features__background {\\n  position: absolute;\\n  z-index: -1;\\n  transform: rotate(180deg);\\n  height: 500px;\\n  width: auto;\\n  left: -30rem;\\n  bottom: 0rem;\\n}\\n\\n.card {\\n  box-shadow: 0 1.5rem 1.2rem rgba(83, 104, 223, 0.1);\\n  display: inline-block;\\n  width: 28rem;\\n  height: auto;\\n  padding: 2.5rem 1.5rem;\\n  padding-top: 3.5rem;\\n  border-radius: 2rem;\\n  margin: 1.8rem;\\n  overflow: hidden;\\n  text-align: center;\\n}\\n.card .card__icon {\\n  margin-bottom: 2.5rem;\\n}\\n.card .card__text {\\n  font-size: 1.5rem;\\n  margin-bottom: 3rem;\\n}\\n.card .card__dots {\\n  margin-bottom: 1.8rem;\\n  margin-left: -1.5rem;\\n}\\n.card .heading--tertiary {\\n  margin-bottom: 1rem;\\n}\\n\\n.question {\\n  margin: 0 auto;\\n  max-width: 55rem;\\n  padding: 2.5rem 0;\\n  border-bottom: 1px solid rgba(145, 148, 161, 0.4);\\n  overflow: hidden;\\n}\\n.question:first-child {\\n  border-top: 1px solid rgba(145, 148, 161, 0.4);\\n}\\n.question__container {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.question__text {\\n  font-weight: 500;\\n  transition: all 0.2s;\\n}\\n.question__arrow {\\n  margin-right: 2rem;\\n}\\n.question .answer {\\n  display: none;\\n  text-align: left;\\n  margin-top: 3rem;\\n  color: #9194a1;\\n  line-height: 2;\\n  font-size: 1.6rem;\\n  position: relative;\\n  top: -5rem;\\n  transition: all 0.2s;\\n}\\n.question:hover .question__text {\\n  color: #fa5757;\\n}\\n.question .answer--active {\\n  top: 0;\\n}\\n\\nbody {\\n  overflow-x: hidden;\\n}\\nbody .body__container {\\n  max-width: 140rem;\\n  margin: 0 auto;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet questionLabel = () => {\r\n\r\n// get a certen question\r\n    document.querySelector('.questions__container').addEventListener('click', event => {\r\n        let item = event.target.closest('.question');\r\n\r\n        // -----------------------------------\r\n        if (item) {\r\n            if (item.matches('.question')) {\r\n                if (item.lastElementChild.style.display === 'none') {\r\n                    item.lastElementChild.style.display = 'block';\r\n                    item.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';\r\n                    setTimeout(()=> {\r\n                        item.lastElementChild.classList.toggle('answer--active');\r\n                    }, 1)\r\n                    \r\n                } \r\n                else if (item.lastElementChild.style.display === 'block') {\r\n                    item.lastElementChild.style.display = 'none';\r\n                    item.firstElementChild.lastElementChild.style.transform = 'rotate(0deg)';\r\n                    setTimeout(()=> {\r\n                        item.lastElementChild.classList.toggle('answer--active');\r\n                    }, 1)\r\n                } \r\n                else if (!item.lastElementChild.style.display) {\r\n                    item.lastElementChild.style.display = 'block';\r\n                    item.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';\r\n                    setTimeout(()=> {\r\n                        item.lastElementChild.classList.toggle('answer--active');\r\n                    }, 1)\r\n                }\r\n            }\r\n        } \r\n        // -----------------------------------\r\n\r\n\r\n\r\n\r\n    });\r\n\r\n   \r\n\r\n    \r\n// animate the answer of that question\r\n\r\n\r\n\r\n}\r\n\r\nquestionLabel();\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });