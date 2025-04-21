/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  box-sizing: border-box;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

.app-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/*------HEADER------*/

header {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.nav-button {
  padding: 10px 15px;
  margin-right: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #eee;
}

.nav-button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.nav-button.active:hover {
  background-color: #007bff;
}

/*------GARAGE-VIEW DIV------*/

.view {
  display: none;
}

.active-view {
  display: block;
}

h2 {
  margin-top: 0;
}

/*------CONTROLS DIV------*/

.controls .form-group,
.race-controls {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type='text'] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type='color'] {
  border-radius: 4px;
  width: 40px;
  height: 32px;
  cursor: pointer;
  vertical-align: middle;
}

button {
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 4px;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

button:hover:not(:disabled) {
  background-color: #ddd;
}

#create-car-btn,
#generate-cars-btn {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}
#create-car-btn:hover:not(:disabled),
#generate-cars-btn:hover:not(:disabled) {
  background-color: #218838;
}

#update-car-btn {
  background-color: #ffc107;
  color: black;
  border-color: #ffc107;
}
#update-car-btn:hover:not(:disabled) {
  background-color: #e0a800;
}

#race-btn {
  background-color: #17a2b8;
  color: white;
  border-color: #17a2b8;
}
#race-btn:hover:not(:disabled) {
  background-color: #138496;
}

#reset-btn {
  background-color: #dc3545;
  color: white;
  border-color: #dc3545;
}
#reset-btn:hover:not(:disabled) {
  background-color: #c82333;
}

/*------CAR-LIST-CONTAINER------*/

.car-list-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.car {
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px dashed black; */
}

.car-road-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px dashed;
  /* border: 1px solid green; */
}

.car-icon {
  display: flex;
  justify-content: left;
  align-items: flex-end;
  width: 15%;
  /* border: 1px solid red; */
}
.flag-icon {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  width: 15%;
  /* border: 1px solid blue; */
}

.car-svg-icon {
  width: 100%;
  transform: scale(-1, 1);
}
.flag-png-icon {
  width: 60%;
}

.car-controls {
  display: flex;
  gap: 10px;
  align-items: center;
}

.car-select-btn,
.car-remove-btn {
  color: #000000;
  background-color: #bbd0f4;
  border-color: #bbd0f4;
}

/*------PAGINATION DIV------*/

.pagination {
  margin-top: 40px;
}
`, "",{"version":3,"sources":["webpack://./public/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA,qBAAqB;;AAErB;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,8BAA8B;;AAE9B;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA,2BAA2B;;AAE3B;;EAEE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;;AAEjC;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,UAAU;EACV,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,UAAU;EACV,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,6BAA6B;;AAE7B;EACE,gBAAgB;AAClB","sourcesContent":["body {\r\n  box-sizing: border-box;\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n  padding: 20px;\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n.app-wrapper {\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/*------HEADER------*/\r\n\r\nheader {\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid #ccc;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.nav-button {\r\n  padding: 10px 15px;\r\n  margin-right: 10px;\r\n  letter-spacing: 1px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: 1px solid #ccc;\r\n  background-color: #eee;\r\n}\r\n\r\n.nav-button.active {\r\n  background-color: #007bff;\r\n  color: white;\r\n  border-color: #007bff;\r\n}\r\n\r\n.nav-button.active:hover {\r\n  background-color: #007bff;\r\n}\r\n\r\n/*------GARAGE-VIEW DIV------*/\r\n\r\n.view {\r\n  display: none;\r\n}\r\n\r\n.active-view {\r\n  display: block;\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n}\r\n\r\n/*------CONTROLS DIV------*/\r\n\r\n.controls .form-group,\r\n.race-controls {\r\n  margin-bottom: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\ninput[type='text'] {\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type='color'] {\r\n  border-radius: 4px;\r\n  width: 40px;\r\n  height: 32px;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\n\r\nbutton {\r\n  padding: 8px 12px;\r\n  cursor: pointer;\r\n  border: 1px solid #ccc;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nbutton:disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.6;\r\n}\r\n\r\nbutton:hover:not(:disabled) {\r\n  background-color: #ddd;\r\n}\r\n\r\n#create-car-btn,\r\n#generate-cars-btn {\r\n  background-color: #28a745;\r\n  color: white;\r\n  border-color: #28a745;\r\n}\r\n#create-car-btn:hover:not(:disabled),\r\n#generate-cars-btn:hover:not(:disabled) {\r\n  background-color: #218838;\r\n}\r\n\r\n#update-car-btn {\r\n  background-color: #ffc107;\r\n  color: black;\r\n  border-color: #ffc107;\r\n}\r\n#update-car-btn:hover:not(:disabled) {\r\n  background-color: #e0a800;\r\n}\r\n\r\n#race-btn {\r\n  background-color: #17a2b8;\r\n  color: white;\r\n  border-color: #17a2b8;\r\n}\r\n#race-btn:hover:not(:disabled) {\r\n  background-color: #138496;\r\n}\r\n\r\n#reset-btn {\r\n  background-color: #dc3545;\r\n  color: white;\r\n  border-color: #dc3545;\r\n}\r\n#reset-btn:hover:not(:disabled) {\r\n  background-color: #c82333;\r\n}\r\n\r\n/*------CAR-LIST-CONTAINER------*/\r\n\r\n.car-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.car {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* border-bottom: 1px dashed black; */\r\n}\r\n\r\n.car-road-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 2px dashed;\r\n  /* border: 1px solid green; */\r\n}\r\n\r\n.car-icon {\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: flex-end;\r\n  width: 15%;\r\n  /* border: 1px solid red; */\r\n}\r\n.flag-icon {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: flex-end;\r\n  width: 15%;\r\n  /* border: 1px solid blue; */\r\n}\r\n\r\n.car-svg-icon {\r\n  width: 100%;\r\n  transform: scale(-1, 1);\r\n}\r\n.flag-png-icon {\r\n  width: 60%;\r\n}\r\n\r\n.car-controls {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.car-select-btn,\r\n.car-remove-btn {\r\n  color: #000000;\r\n  background-color: #bbd0f4;\r\n  border-color: #bbd0f4;\r\n}\r\n\r\n/*------PAGINATION DIV------*/\r\n\r\n.pagination {\r\n  margin-top: 40px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./public/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCarOnServer: () => (/* binding */ createCarOnServer),
/* harmony export */   deleteCarOnServer: () => (/* binding */ deleteCarOnServer),
/* harmony export */   getCarsFromServer: () => (/* binding */ getCarsFromServer),
/* harmony export */   updateCarOnServer: () => (/* binding */ updateCarOnServer)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = 'http://127.0.0.1:3000';
function getCarsFromServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = '/garage';
        try {
            const response = yield fetch(`${BASE_URL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
            const cars = yield response.json();
            const totalCount = cars.length;
            return { cars, totalCount };
        }
        catch (error) {
            console.error('Failed to fetch cars from server:', error);
            return { cars: [], totalCount: 0 };
        }
    });
}
function createCarOnServer(carData) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = '/garage';
        try {
            const response = yield fetch(`${BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });
            if (!response.ok || response.status !== 201) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
            const newCar = yield response.json();
            return newCar;
        }
        catch (error) {
            console.error('Failed to create car on server:', error);
            throw error;
        }
    });
}
function deleteCarOnServer(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = `/garage/${id}`;
        try {
            const response = yield fetch(`${BASE_URL}${endpoint}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            console.error('Failed to delete car from server:', error);
            throw error;
        }
    });
}
function updateCarOnServer(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = `/garage/${id}`;
        try {
            const response = yield fetch(`${BASE_URL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
            const updatedCar = yield response.json();
            return updatedCar;
        }
        catch (error) {
            console.error('Failed to update car on server:', error);
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/carBuilder.ts":
/*!***************************!*\
  !*** ./src/carBuilder.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Car: () => (/* binding */ Car)
/* harmony export */ });
class Car {
    constructor(data) {
        this.element = null;
        this.id = data.id;
        this.name = data.name;
        this.color = data.color;
    }
    render() {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.dataset.carId = this.id.toString();
        const uniqueIdSuffix = `-${this.id}`;
        const carSvgId = `car-svg-icon${uniqueIdSuffix}`;
        carElement.innerHTML = `
        <div class="car-road-container">
          <span class="car-icon">
            <svg id="${carSvgId}" class="car-svg-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" fill="${this.color}"
              aria-labelledby="carTitle" role="img">
              <title id="carTitle">Simple Car Icon</title>
              <g class="car-icon">
                <path class="car-body"
                  d="M5 50 L 20 50 L 25 35 L 45 35 L 55 25 L 70 25 L 70 35 L 95 35 L 95 50 Z" />

                <path class="car-window" d="M47 34 L 55 27 L 68 27 L 68 34 Z" fill="white" stroke="currentColor"
                  stroke-width="1" />

                <circle class="car-wheel wheel-left" fill="black" cx="32" cy="50" r="7" />
                <circle class="car-wheel wheel-right" fill="black" cx="80" cy="50" r="7" />
              </g>
            </svg>
          </span>
          <span class="flag-icon">
            <img class="flag-png-icon" src="./flag.png" alt="Finish flag for ${this.name}">
          </span>
        </div>
        <div class="car-controls">
          <button class="car-select-btn" data-id="${this.id}">Select</button>
          <button class="car-remove-btn" data-id="${this.id}">Remove</button>
          <span class="car-name">${this.name}</span>
        </div>
      `;
        this.element = carElement;
        return this.element;
    }
}


/***/ }),

/***/ "./src/createCarHandler.ts":
/*!*********************************!*\
  !*** ./src/createCarHandler.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCreateCar: () => (/* binding */ handleCreateCar)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.ts");
/* harmony import */ var _garageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./garageView */ "./src/garageView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function handleCreateCar(nameInput, colorInput, carsContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = nameInput.value.trim();
        const color = colorInput.value;
        if (!name) {
            alert('Please, insert name for a car!');
            nameInput.focus();
            return;
        }
        try {
            yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.createCarOnServer)({ name, color });
            nameInput.value = '';
            colorInput.value = '#ffffff';
            yield (0,_garageView__WEBPACK_IMPORTED_MODULE_1__.renderGarageCars)(carsContainer);
        }
        catch (error) {
            console.error('Failed to create car via API:', error);
        }
    });
}


/***/ }),

/***/ "./src/deleteCarHandler.ts":
/*!*********************************!*\
  !*** ./src/deleteCarHandler.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleDeleteCar: () => (/* binding */ handleDeleteCar)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.ts");
/* harmony import */ var _garageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./garageView */ "./src/garageView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function handleDeleteCar(carId, carsContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.deleteCarOnServer)(carId);
            yield (0,_garageView__WEBPACK_IMPORTED_MODULE_1__.renderGarageCars)(carsContainer);
        }
        catch (error) {
            console.error(`Failed to delete car with id ${carId}:`, error);
        }
    });
}


/***/ }),

/***/ "./src/garageControlsButton.ts":
/*!*************************************!*\
  !*** ./src/garageControlsButton.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* binding */ Controls)
/* harmony export */ });
class Controls {
    constructor(containerId) {
        this.container = document.getElementById(containerId) || document.body;
    }
    render() {
        const controlsElement = document.createElement('div');
        controlsElement.className = 'controls';
        controlsElement.appendChild(this.createFormGroup());
        controlsElement.appendChild(this.updateFormGroup());
        controlsElement.appendChild(this.raceControls());
        return controlsElement;
    }
    createFormGroup() {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        const nameInput = this.createInput('text', 'create-name', 'New car name');
        const colorInput = this.createInput('color', 'create-color', '', '#ffffff');
        const createButton = this.createButton('create-car-btn', 'Create');
        formGroup.appendChild(nameInput);
        formGroup.appendChild(colorInput);
        formGroup.appendChild(createButton);
        return formGroup;
    }
    updateFormGroup() {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        const nameInput = this.createInput('text', 'update-name', 'Update car name', '', true);
        const colorInput = this.createInput('color', 'update-color', '', '#ffffff', false);
        const updateButton = this.createButton('update-car-btn', 'Update', true);
        formGroup.appendChild(nameInput);
        formGroup.appendChild(colorInput);
        formGroup.appendChild(updateButton);
        return formGroup;
    }
    raceControls() {
        const controlsGroup = document.createElement('div');
        controlsGroup.className = 'race-controls';
        const raceButton = this.createButton('race-btn', 'Race');
        const resetButton = this.createButton('reset-btn', 'Reset');
        const generateCarsButton = this.createButton('generate-cars-btn', 'Generate Cars (100)');
        controlsGroup.appendChild(raceButton);
        controlsGroup.appendChild(resetButton);
        controlsGroup.appendChild(generateCarsButton);
        return controlsGroup;
    }
    createInput(type, id, placeholder, value = '', disabled = false) {
        const input = document.createElement('input');
        input.type = type;
        input.id = id;
        input.placeholder = placeholder;
        if (value)
            input.value = value;
        input.disabled = disabled;
        return input;
    }
    createButton(id, text, disabled = false) {
        const button = document.createElement('button');
        button.id = id;
        button.disabled = disabled;
        button.textContent = text;
        return button;
    }
}


/***/ }),

/***/ "./src/garageView.ts":
/*!***************************!*\
  !*** ./src/garageView.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGarageCars: () => (/* binding */ renderGarageCars)
/* harmony export */ });
/* harmony import */ var _carBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carBuilder */ "./src/carBuilder.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function renderGarageCars(container) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!container) {
            console.error('Container element not provided for rendering cars.');
            return;
        }
        const garageCounterElement = document.getElementById('garage-total-count');
        container.innerHTML = '';
        const { cars, totalCount } = yield (0,_api__WEBPACK_IMPORTED_MODULE_1__.getCarsFromServer)();
        if (garageCounterElement) {
            garageCounterElement.textContent = totalCount.toString();
        }
        if (cars.length === 0) {
            container.innerHTML = '<p>Garage is empty now. Please create your first car!</p>';
            return;
        }
        cars.forEach((carItem) => {
            const carInstance = new _carBuilder__WEBPACK_IMPORTED_MODULE_0__.Car(carItem);
            const carElement = carInstance.render();
            container.appendChild(carElement);
        });
    });
}


/***/ }),

/***/ "./src/pageBuilder.ts":
/*!****************************!*\
  !*** ./src/pageBuilder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Builder: () => (/* binding */ Builder)
/* harmony export */ });
/* harmony import */ var _garageControlsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garageControlsButton */ "./src/garageControlsButton.ts");

class Builder {
    buildHeaderButtons() {
        const headerElement = document.createElement('header');
        const navElement = document.createElement('nav');
        const garageButton = document.createElement('button');
        garageButton.id = 'nav-garage-btn';
        garageButton.classList.add('nav-button', 'active');
        garageButton.textContent = 'Garage';
        const winnersButton = document.createElement('button');
        winnersButton.id = 'nav-winners-btn';
        winnersButton.classList.add('nav-button');
        winnersButton.textContent = 'Winners';
        navElement.appendChild(garageButton);
        navElement.appendChild(winnersButton);
        headerElement.appendChild(navElement);
        return headerElement;
    }
    buildMainTag() {
        const mainElement = document.createElement('main');
        mainElement.id = 'main-content';
        return mainElement;
    }
    buildGarageView() {
        const garageViewDiv = document.createElement('div');
        garageViewDiv.id = 'garage-view';
        garageViewDiv.classList.add('view', 'active-view');
        const title = document.createElement('h2');
        title.innerHTML = 'Garage (<span id="garage-total-count">0</span>)';
        const pageInfo = document.createElement('p');
        pageInfo.innerHTML = 'Page #<span id="garage-current-page">1</span>';
        const controls = new _garageControlsButton__WEBPACK_IMPORTED_MODULE_0__.Controls('app-wrapper');
        const controlsElement = controls.render();
        garageViewDiv.appendChild(title);
        garageViewDiv.appendChild(pageInfo);
        garageViewDiv.appendChild(controlsElement);
        return garageViewDiv;
    }
    buildCarsContainer() {
        const carsContainerDiv = document.createElement('div');
        carsContainerDiv.id = 'car-list-container';
        carsContainerDiv.className = 'car-list-container';
        return carsContainerDiv;
    }
}


/***/ }),

/***/ "./src/updateCarHandler.ts":
/*!*********************************!*\
  !*** ./src/updateCarHandler.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleUpdateCar: () => (/* binding */ handleUpdateCar)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.ts");
/* harmony import */ var _garageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./garageView */ "./src/garageView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function handleUpdateCar(selectedCarId, nameInput, updateButton, colorInput, carsContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!selectedCarId) {
            alert('Please select any car (Select).');
            return;
        }
        const name = nameInput.value.trim();
        const color = colorInput.value;
        if (!name) {
            alert('please enter a new name for the car!');
            nameInput.focus();
            return;
        }
        try {
            yield (0,_api__WEBPACK_IMPORTED_MODULE_0__.updateCarOnServer)(selectedCarId, { name, color });
            selectedCarId = null;
            updateButton.disabled = true;
            nameInput.disabled = true;
            nameInput.value = '';
            colorInput.value = '#ffffff';
            document.querySelectorAll('.car-select-btn').forEach((btn) => {
                btn.style.backgroundColor = '#bbd0f4';
            });
            yield (0,_garageView__WEBPACK_IMPORTED_MODULE_1__.renderGarageCars)(carsContainer);
        }
        catch (error) {
            console.error(`Failed to update car with id ${selectedCarId}:`, error);
        }
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageBuilder */ "./src/pageBuilder.ts");
/* harmony import */ var _garageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./garageView */ "./src/garageView.ts");
/* harmony import */ var _createCarHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCarHandler */ "./src/createCarHandler.ts");
/* harmony import */ var _deleteCarHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteCarHandler */ "./src/deleteCarHandler.ts");
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/style.css */ "./public/style.css");
/* harmony import */ var _updateCarHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateCarHandler */ "./src/updateCarHandler.ts");






function initializeApp() {
    const appWrapper = document.querySelector('.app-wrapper');
    if (!appWrapper) {
        console.error('Fatal Error: App wrapper ".app-wrapper" not found in the DOM.');
        return;
    }
    const pageBuilder = new _pageBuilder__WEBPACK_IMPORTED_MODULE_0__.Builder();
    const headerElement = pageBuilder.buildHeaderButtons();
    const mainElement = pageBuilder.buildMainTag();
    const garageViewElement = pageBuilder.buildGarageView();
    const carsContainerElement = pageBuilder.buildCarsContainer();
    garageViewElement.appendChild(carsContainerElement);
    mainElement.appendChild(garageViewElement);
    appWrapper.innerHTML = '';
    appWrapper.appendChild(headerElement);
    appWrapper.appendChild(mainElement);
    (0,_garageView__WEBPACK_IMPORTED_MODULE_1__.renderGarageCars)(carsContainerElement).catch((error) => {
        console.error('Error rendering garage cars:', error);
        if (carsContainerElement) {
            carsContainerElement.innerHTML =
                '<p>Failed to load cars. Try to refresh the page.</p>';
        }
    });
    // Garage & Winners Buttons in the HEADER
    /* const garageBtn = document.getElementById('nav-garage-btn');
    const winnersBtn = document.getElementById('nav-winners-btn'); */
    //CONTROLS Button
    const createNameInput = document.getElementById('create-name');
    const createColorInput = document.getElementById('create-color');
    const createButton = document.getElementById('create-car-btn');
    const updateNameInput = document.getElementById('update-name');
    const updateColorInput = document.getElementById('update-color');
    const updateButton = document.getElementById('update-car-btn');
    if (!createNameInput ||
        !createColorInput ||
        !createButton ||
        !updateNameInput ||
        !updateColorInput ||
        !updateButton) {
        console.error('Error: One or more elements for car creation form not found. Check IDs: #create-name, #create-color, #create-car-btn');
    }
    else {
        createButton.addEventListener('click', () => (0,_createCarHandler__WEBPACK_IMPORTED_MODULE_2__.handleCreateCar)(createNameInput, createColorInput, carsContainerElement));
        updateButton.addEventListener('click', () => {
            (0,_updateCarHandler__WEBPACK_IMPORTED_MODULE_5__.handleUpdateCar)(selectedCarId, updateNameInput, updateButton, updateColorInput, carsContainerElement);
        });
    }
    let selectedCarId = null;
    carsContainerElement.addEventListener('click', (event) => {
        var _a, _b;
        const target = event.target;
        if (target.classList.contains('car-remove-btn')) {
            const carId = Number(target.dataset.id);
            if (!isNaN(carId)) {
                (0,_deleteCarHandler__WEBPACK_IMPORTED_MODULE_3__.handleDeleteCar)(carId, carsContainerElement);
            }
        }
        if (target.classList.contains('car-select-btn')) {
            const carId = Number(target.dataset.id);
            if (!isNaN(carId)) {
                selectedCarId = carId;
                const carElement = target.closest('.car');
                const carName = ((_a = carElement === null || carElement === void 0 ? void 0 : carElement.querySelector('.car-name')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
                const carColor = ((_b = carElement === null || carElement === void 0 ? void 0 : carElement.querySelector('.car-svg-icon')) === null || _b === void 0 ? void 0 : _b.getAttribute('fill')) ||
                    '#ffffff';
                updateNameInput.value = carName;
                updateColorInput.value = carColor;
                updateNameInput.disabled = false;
                updateButton.disabled = false;
                target.style.backgroundColor = '#bdef6f';
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsa0VBQWU7QUFDcEU7QUFDQSxZQUFZLGtFQUFlO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtFQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9wdWJsaWMvc3R5bGUuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9wdWJsaWMvc3R5bGUuY3NzP2NlYzciLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcGkudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jYXJCdWlsZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY3JlYXRlQ2FySGFuZGxlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2RlbGV0ZUNhckhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nYXJhZ2VDb250cm9sc0J1dHRvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dhcmFnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlQnVpbGRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3VwZGF0ZUNhckhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uYXBwLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4vKi0tLS0tLUhFQURFUi0tLS0tLSovXHJcblxyXG5oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbi5hY3RpdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi8qLS0tLS0tR0FSQUdFLVZJRVcgRElWLS0tLS0tKi9cclxuXHJcbi52aWV3IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlLXZpZXcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLyotLS0tLS1DT05UUk9MUyBESVYtLS0tLS0qL1xyXG5cclxuLmNvbnRyb2xzIC5mb3JtLWdyb3VwLFxyXG4ucmFjZS1jb250cm9scyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nY29sb3InXSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jY3JlYXRlLWNhci1idG4sXHJcbiNnZW5lcmF0ZS1jYXJzLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcbiNjcmVhdGUtY2FyLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSxcclxuI2dlbmVyYXRlLWNhcnMtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4ODM4O1xyXG59XHJcblxyXG4jdXBkYXRlLWNhci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcclxufVxyXG4jdXBkYXRlLWNhci1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGE4MDA7XHJcbn1cclxuXHJcbiNyYWNlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xyXG59XHJcbiNyYWNlLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzODQ5NjtcclxufVxyXG5cclxuI3Jlc2V0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcbiNyZXNldC1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XHJcbn1cclxuXHJcbi8qLS0tLS0tQ0FSLUxJU1QtQ09OVEFJTkVSLS0tLS0tKi9cclxuXHJcbi5jYXItbGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrOyAqL1xyXG59XHJcblxyXG4uY2FyLXJvYWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xyXG59XHJcblxyXG4uY2FyLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTUlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG4uZmxhZy1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTUlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbn1cclxuXHJcbi5jYXItc3ZnLWljb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG59XHJcbi5mbGFnLXBuZy1pY29uIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uY2FyLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyLXNlbGVjdC1idG4sXHJcbi5jYXItcmVtb3ZlLWJ0biB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDBmNDtcclxuICBib3JkZXItY29sb3I6ICNiYmQwZjQ7XHJcbn1cclxuXHJcbi8qLS0tLS0tUEFHSU5BVElPTiBESVYtLS0tLS0qL1xyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDJCQUEyQjs7QUFFM0I7O0VBRUUsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsaUNBQWlDOztBQUVqQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXdyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLUhFQURFUi0tLS0tLSovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbi5hY3RpdmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1HQVJBR0UtVklFVyBESVYtLS0tLS0qL1xcclxcblxcclxcbi52aWV3IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtdmlldyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1DT05UUk9MUyBESVYtLS0tLS0qL1xcclxcblxcclxcbi5jb250cm9scyAuZm9ybS1ncm91cCxcXHJcXG4ucmFjZS1jb250cm9scyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjb2xvciddIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1jYXItYnRuLFxcclxcbiNnZW5lcmF0ZS1jYXJzLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcclxcbn1cXHJcXG4jY3JlYXRlLWNhci1idG46aG92ZXI6bm90KDpkaXNhYmxlZCksXFxyXFxuI2dlbmVyYXRlLWNhcnMtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XFxyXFxufVxcclxcblxcclxcbiN1cGRhdGUtY2FyLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xcclxcbn1cXHJcXG4jdXBkYXRlLWNhci1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYTgwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JhY2UtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XFxyXFxufVxcclxcbiNyYWNlLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4NDk2O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XFxyXFxufVxcclxcbiNyZXNldC1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1DQVItTElTVC1DT05UQUlORVItLS0tLS0qL1xcclxcblxcclxcbi5jYXItbGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAvKiBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXJvYWQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuLmZsYWctaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNhci1zdmctaWNvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4uZmxhZy1wbmctaWNvbiB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWNvbnRyb2xzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXNlbGVjdC1idG4sXFxyXFxuLmNhci1yZW1vdmUtYnRuIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDBmNDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2JiZDBmNDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1QQUdJTkFUSU9OIERJVi0tLS0tLSovXFxyXFxuXFxyXFxuLnBhZ2luYXRpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2Fyc0Zyb21TZXJ2ZXIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSAnL2dhcmFnZSc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfSR7ZW5kcG9pbnR9YCk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBUEkgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYXJzID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgdG90YWxDb3VudCA9IGNhcnMubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHsgY2FycywgdG90YWxDb3VudCB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIGNhcnMgZnJvbSBzZXJ2ZXI6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHsgY2FyczogW10sIHRvdGFsQ291bnQ6IDAgfTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhck9uU2VydmVyKGNhckRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBlbmRwb2ludCA9ICcvZ2FyYWdlJztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9JHtlbmRwb2ludH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyRGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2sgfHwgcmVzcG9uc2Uuc3RhdHVzICE9PSAyMDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBFcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld0NhciA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdDYXI7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGNhciBvbiBzZXJ2ZXI6JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDYXJPblNlcnZlcihpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gYC9nYXJhZ2UvJHtpZH1gO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0ke2VuZHBvaW50fWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBUEkgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGNhciBmcm9tIHNlcnZlcjonLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhck9uU2VydmVyKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgL2dhcmFnZS8ke2lkfWA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfSR7ZW5kcG9pbnR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBFcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXIgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZENhcjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgY2FyIG9uIHNlcnZlcjonLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIENhciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyJyk7XG4gICAgICAgIGNhckVsZW1lbnQuZGF0YXNldC5jYXJJZCA9IHRoaXMuaWQudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgdW5pcXVlSWRTdWZmaXggPSBgLSR7dGhpcy5pZH1gO1xuICAgICAgICBjb25zdCBjYXJTdmdJZCA9IGBjYXItc3ZnLWljb24ke3VuaXF1ZUlkU3VmZml4fWA7XG4gICAgICAgIGNhckVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXItcm9hZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyLWljb25cIj5cclxuICAgICAgICAgICAgPHN2ZyBpZD1cIiR7Y2FyU3ZnSWR9XCIgY2xhc3M9XCJjYXItc3ZnLWljb25cIiB2aWV3Qm94PVwiMCAwIDEwMCA2MFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiJHt0aGlzLmNvbG9yfVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY2FyVGl0bGVcIiByb2xlPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgPHRpdGxlIGlkPVwiY2FyVGl0bGVcIj5TaW1wbGUgQ2FyIEljb248L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxnIGNsYXNzPVwiY2FyLWljb25cIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2FyLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTUgNTAgTCAyMCA1MCBMIDI1IDM1IEwgNDUgMzUgTCA1NSAyNSBMIDcwIDI1IEwgNzAgMzUgTCA5NSAzNSBMIDk1IDUwIFpcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY2FyLXdpbmRvd1wiIGQ9XCJNNDcgMzQgTCA1NSAyNyBMIDY4IDI3IEwgNjggMzQgWlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjFcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJjYXItd2hlZWwgd2hlZWwtbGVmdFwiIGZpbGw9XCJibGFja1wiIGN4PVwiMzJcIiBjeT1cIjUwXCIgcj1cIjdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cImNhci13aGVlbCB3aGVlbC1yaWdodFwiIGZpbGw9XCJibGFja1wiIGN4PVwiODBcIiBjeT1cIjUwXCIgcj1cIjdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsYWctaWNvblwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiZmxhZy1wbmctaWNvblwiIHNyYz1cIi4vZmxhZy5wbmdcIiBhbHQ9XCJGaW5pc2ggZmxhZyBmb3IgJHt0aGlzLm5hbWV9XCI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhci1jb250cm9sc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhci1zZWxlY3QtYnRuXCIgZGF0YS1pZD1cIiR7dGhpcy5pZH1cIj5TZWxlY3Q8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYXItcmVtb3ZlLWJ0blwiIGRhdGEtaWQ9XCIke3RoaXMuaWR9XCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhci1uYW1lXCI+JHt0aGlzLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjYXJFbGVtZW50O1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgY3JlYXRlQ2FyT25TZXJ2ZXIgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyByZW5kZXJHYXJhZ2VDYXJzIH0gZnJvbSAnLi9nYXJhZ2VWaWV3JztcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDcmVhdGVDYXIobmFtZUlucHV0LCBjb2xvcklucHV0LCBjYXJzQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlLCBpbnNlcnQgbmFtZSBmb3IgYSBjYXIhJyk7XG4gICAgICAgICAgICBuYW1lSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlQ2FyT25TZXJ2ZXIoeyBuYW1lLCBjb2xvciB9KTtcbiAgICAgICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY29sb3JJbnB1dC52YWx1ZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHlpZWxkIHJlbmRlckdhcmFnZUNhcnMoY2Fyc0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGNhciB2aWEgQVBJOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZWxldGVDYXJPblNlcnZlciB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IHJlbmRlckdhcmFnZUNhcnMgfSBmcm9tICcuL2dhcmFnZVZpZXcnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNhcihjYXJJZCwgY2Fyc0NvbnRhaW5lcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBkZWxldGVDYXJPblNlcnZlcihjYXJJZCk7XG4gICAgICAgICAgICB5aWVsZCByZW5kZXJHYXJhZ2VDYXJzKGNhcnNDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGRlbGV0ZSBjYXIgd2l0aCBpZCAke2NhcklkfTpgLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDb250cm9scyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVySWQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkgfHwgZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb250cm9sc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNFbGVtZW50LmNsYXNzTmFtZSA9ICdjb250cm9scyc7XG4gICAgICAgIGNvbnRyb2xzRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZvcm1Hcm91cCgpKTtcbiAgICAgICAgY29udHJvbHNFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudXBkYXRlRm9ybUdyb3VwKCkpO1xuICAgICAgICBjb250cm9sc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yYWNlQ29udHJvbHMoKSk7XG4gICAgICAgIHJldHVybiBjb250cm9sc0VsZW1lbnQ7XG4gICAgfVxuICAgIGNyZWF0ZUZvcm1Hcm91cCgpIHtcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc05hbWUgPSAnZm9ybS1ncm91cCc7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXQoJ3RleHQnLCAnY3JlYXRlLW5hbWUnLCAnTmV3IGNhciBuYW1lJyk7XG4gICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0KCdjb2xvcicsICdjcmVhdGUtY29sb3InLCAnJywgJyNmZmZmZmYnKTtcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2NyZWF0ZS1jYXItYnRuJywgJ0NyZWF0ZScpO1xuICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Hcm91cDtcbiAgICB9XG4gICAgdXBkYXRlRm9ybUdyb3VwKCkge1xuICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwJztcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gdGhpcy5jcmVhdGVJbnB1dCgndGV4dCcsICd1cGRhdGUtbmFtZScsICdVcGRhdGUgY2FyIG5hbWUnLCAnJywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0KCdjb2xvcicsICd1cGRhdGUtY29sb3InLCAnJywgJyNmZmZmZmYnLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCd1cGRhdGUtY2FyLWJ0bicsICdVcGRhdGUnLCB0cnVlKTtcbiAgICAgICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICAgICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG4gICAgICAgIHJldHVybiBmb3JtR3JvdXA7XG4gICAgfVxuICAgIHJhY2VDb250cm9scygpIHtcbiAgICAgICAgY29uc3QgY29udHJvbHNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sc0dyb3VwLmNsYXNzTmFtZSA9ICdyYWNlLWNvbnRyb2xzJztcbiAgICAgICAgY29uc3QgcmFjZUJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdyYWNlLWJ0bicsICdSYWNlJyk7XG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ3Jlc2V0LWJ0bicsICdSZXNldCcpO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUNhcnNCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbignZ2VuZXJhdGUtY2Fycy1idG4nLCAnR2VuZXJhdGUgQ2FycyAoMTAwKScpO1xuICAgICAgICBjb250cm9sc0dyb3VwLmFwcGVuZENoaWxkKHJhY2VCdXR0b24pO1xuICAgICAgICBjb250cm9sc0dyb3VwLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICAgICAgY29udHJvbHNHcm91cC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcnNCdXR0b24pO1xuICAgICAgICByZXR1cm4gY29udHJvbHNHcm91cDtcbiAgICB9XG4gICAgY3JlYXRlSW5wdXQodHlwZSwgaWQsIHBsYWNlaG9sZGVyLCB2YWx1ZSA9ICcnLCBkaXNhYmxlZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgY3JlYXRlQnV0dG9uKGlkLCB0ZXh0LCBkaXNhYmxlZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSBpZDtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDYXIgfSBmcm9tICcuL2NhckJ1aWxkZXInO1xuaW1wb3J0IHsgZ2V0Q2Fyc0Zyb21TZXJ2ZXIgfSBmcm9tICcuL2FwaSc7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FyYWdlQ2Fycyhjb250YWluZXIpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ29udGFpbmVyIGVsZW1lbnQgbm90IHByb3ZpZGVkIGZvciByZW5kZXJpbmcgY2Fycy4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnYXJhZ2VDb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXJhZ2UtdG90YWwtY291bnQnKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB7IGNhcnMsIHRvdGFsQ291bnQgfSA9IHlpZWxkIGdldENhcnNGcm9tU2VydmVyKCk7XG4gICAgICAgIGlmIChnYXJhZ2VDb3VudGVyRWxlbWVudCkge1xuICAgICAgICAgICAgZ2FyYWdlQ291bnRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0b3RhbENvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkdhcmFnZSBpcyBlbXB0eSBub3cuIFBsZWFzZSBjcmVhdGUgeW91ciBmaXJzdCBjYXIhPC9wPic7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2Fycy5mb3JFYWNoKChjYXJJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJJbnN0YW5jZSA9IG5ldyBDYXIoY2FySXRlbSk7XG4gICAgICAgICAgICBjb25zdCBjYXJFbGVtZW50ID0gY2FySW5zdGFuY2UucmVuZGVyKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgQ29udHJvbHMgfSBmcm9tICcuL2dhcmFnZUNvbnRyb2xzQnV0dG9uJztcbmV4cG9ydCBjbGFzcyBCdWlsZGVyIHtcbiAgICBidWlsZEhlYWRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBjb25zdCBnYXJhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZ2FyYWdlQnV0dG9uLmlkID0gJ25hdi1nYXJhZ2UtYnRuJztcbiAgICAgICAgZ2FyYWdlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nLCAnYWN0aXZlJyk7XG4gICAgICAgIGdhcmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdHYXJhZ2UnO1xuICAgICAgICBjb25zdCB3aW5uZXJzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHdpbm5lcnNCdXR0b24uaWQgPSAnbmF2LXdpbm5lcnMtYnRuJztcbiAgICAgICAgd2lubmVyc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgICAgIHdpbm5lcnNCdXR0b24udGV4dENvbnRlbnQgPSAnV2lubmVycyc7XG4gICAgICAgIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2FyYWdlQnV0dG9uKTtcbiAgICAgICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZCh3aW5uZXJzQnV0dG9uKTtcbiAgICAgICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG4gICAgfVxuICAgIGJ1aWxkTWFpblRhZygpIHtcbiAgICAgICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIG1haW5FbGVtZW50LmlkID0gJ21haW4tY29udGVudCc7XG4gICAgICAgIHJldHVybiBtYWluRWxlbWVudDtcbiAgICB9XG4gICAgYnVpbGRHYXJhZ2VWaWV3KCkge1xuICAgICAgICBjb25zdCBnYXJhZ2VWaWV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhcmFnZVZpZXdEaXYuaWQgPSAnZ2FyYWdlLXZpZXcnO1xuICAgICAgICBnYXJhZ2VWaWV3RGl2LmNsYXNzTGlzdC5hZGQoJ3ZpZXcnLCAnYWN0aXZlLXZpZXcnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnR2FyYWdlICg8c3BhbiBpZD1cImdhcmFnZS10b3RhbC1jb3VudFwiPjA8L3NwYW4+KSc7XG4gICAgICAgIGNvbnN0IHBhZ2VJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYWdlSW5mby5pbm5lckhUTUwgPSAnUGFnZSAjPHNwYW4gaWQ9XCJnYXJhZ2UtY3VycmVudC1wYWdlXCI+MTwvc3Bhbj4nO1xuICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9scygnYXBwLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgY29udHJvbHNFbGVtZW50ID0gY29udHJvbHMucmVuZGVyKCk7XG4gICAgICAgIGdhcmFnZVZpZXdEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBnYXJhZ2VWaWV3RGl2LmFwcGVuZENoaWxkKHBhZ2VJbmZvKTtcbiAgICAgICAgZ2FyYWdlVmlld0Rpdi5hcHBlbmRDaGlsZChjb250cm9sc0VsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZ2FyYWdlVmlld0RpdjtcbiAgICB9XG4gICAgYnVpbGRDYXJzQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBjYXJzQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcnNDb250YWluZXJEaXYuaWQgPSAnY2FyLWxpc3QtY29udGFpbmVyJztcbiAgICAgICAgY2Fyc0NvbnRhaW5lckRpdi5jbGFzc05hbWUgPSAnY2FyLWxpc3QtY29udGFpbmVyJztcbiAgICAgICAgcmV0dXJuIGNhcnNDb250YWluZXJEaXY7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyB1cGRhdGVDYXJPblNlcnZlciB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IHJlbmRlckdhcmFnZUNhcnMgfSBmcm9tICcuL2dhcmFnZVZpZXcnO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUNhcihzZWxlY3RlZENhcklkLCBuYW1lSW5wdXQsIHVwZGF0ZUJ1dHRvbiwgY29sb3JJbnB1dCwgY2Fyc0NvbnRhaW5lcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRDYXJJZCkge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYW55IGNhciAoU2VsZWN0KS4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcklucHV0LnZhbHVlO1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdwbGVhc2UgZW50ZXIgYSBuZXcgbmFtZSBmb3IgdGhlIGNhciEnKTtcbiAgICAgICAgICAgIG5hbWVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCB1cGRhdGVDYXJPblNlcnZlcihzZWxlY3RlZENhcklkLCB7IG5hbWUsIGNvbG9yIH0pO1xuICAgICAgICAgICAgc2VsZWN0ZWRDYXJJZCA9IG51bGw7XG4gICAgICAgICAgICB1cGRhdGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgbmFtZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY29sb3JJbnB1dC52YWx1ZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc2VsZWN0LWJ0bicpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2JiZDBmNCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlpZWxkIHJlbmRlckdhcmFnZUNhcnMoY2Fyc0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gdXBkYXRlIGNhciB3aXRoIGlkICR7c2VsZWN0ZWRDYXJJZH06YCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9wYWdlQnVpbGRlcic7XG5pbXBvcnQgeyByZW5kZXJHYXJhZ2VDYXJzIH0gZnJvbSAnLi9nYXJhZ2VWaWV3JztcbmltcG9ydCB7IGhhbmRsZUNyZWF0ZUNhciB9IGZyb20gJy4vY3JlYXRlQ2FySGFuZGxlcic7XG5pbXBvcnQgeyBoYW5kbGVEZWxldGVDYXIgfSBmcm9tICcuL2RlbGV0ZUNhckhhbmRsZXInO1xuaW1wb3J0ICcuLi9wdWJsaWMvc3R5bGUuY3NzJztcbmltcG9ydCB7IGhhbmRsZVVwZGF0ZUNhciB9IGZyb20gJy4vdXBkYXRlQ2FySGFuZGxlcic7XG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAgIGNvbnN0IGFwcFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLXdyYXBwZXInKTtcbiAgICBpZiAoIWFwcFdyYXBwZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmF0YWwgRXJyb3I6IEFwcCB3cmFwcGVyIFwiLmFwcC13cmFwcGVyXCIgbm90IGZvdW5kIGluIHRoZSBET00uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFnZUJ1aWxkZXIgPSBuZXcgQnVpbGRlcigpO1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBwYWdlQnVpbGRlci5idWlsZEhlYWRlckJ1dHRvbnMoKTtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IHBhZ2VCdWlsZGVyLmJ1aWxkTWFpblRhZygpO1xuICAgIGNvbnN0IGdhcmFnZVZpZXdFbGVtZW50ID0gcGFnZUJ1aWxkZXIuYnVpbGRHYXJhZ2VWaWV3KCk7XG4gICAgY29uc3QgY2Fyc0NvbnRhaW5lckVsZW1lbnQgPSBwYWdlQnVpbGRlci5idWlsZENhcnNDb250YWluZXIoKTtcbiAgICBnYXJhZ2VWaWV3RWxlbWVudC5hcHBlbmRDaGlsZChjYXJzQ29udGFpbmVyRWxlbWVudCk7XG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2FyYWdlVmlld0VsZW1lbnQpO1xuICAgIGFwcFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgYXBwV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KTtcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcbiAgICByZW5kZXJHYXJhZ2VDYXJzKGNhcnNDb250YWluZXJFbGVtZW50KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVuZGVyaW5nIGdhcmFnZSBjYXJzOicsIGVycm9yKTtcbiAgICAgICAgaWYgKGNhcnNDb250YWluZXJFbGVtZW50KSB7XG4gICAgICAgICAgICBjYXJzQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICc8cD5GYWlsZWQgdG8gbG9hZCBjYXJzLiBUcnkgdG8gcmVmcmVzaCB0aGUgcGFnZS48L3A+JztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEdhcmFnZSAmIFdpbm5lcnMgQnV0dG9ucyBpbiB0aGUgSEVBREVSXG4gICAgLyogY29uc3QgZ2FyYWdlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1nYXJhZ2UtYnRuJyk7XG4gICAgY29uc3Qgd2lubmVyc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtd2lubmVycy1idG4nKTsgKi9cbiAgICAvL0NPTlRST0xTIEJ1dHRvblxuICAgIGNvbnN0IGNyZWF0ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbmFtZScpO1xuICAgIGNvbnN0IGNyZWF0ZUNvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNvbG9yJyk7XG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jYXItYnRuJyk7XG4gICAgY29uc3QgdXBkYXRlTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1uYW1lJyk7XG4gICAgY29uc3QgdXBkYXRlQ29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtY29sb3InKTtcbiAgICBjb25zdCB1cGRhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWNhci1idG4nKTtcbiAgICBpZiAoIWNyZWF0ZU5hbWVJbnB1dCB8fFxuICAgICAgICAhY3JlYXRlQ29sb3JJbnB1dCB8fFxuICAgICAgICAhY3JlYXRlQnV0dG9uIHx8XG4gICAgICAgICF1cGRhdGVOYW1lSW5wdXQgfHxcbiAgICAgICAgIXVwZGF0ZUNvbG9ySW5wdXQgfHxcbiAgICAgICAgIXVwZGF0ZUJ1dHRvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogT25lIG9yIG1vcmUgZWxlbWVudHMgZm9yIGNhciBjcmVhdGlvbiBmb3JtIG5vdCBmb3VuZC4gQ2hlY2sgSURzOiAjY3JlYXRlLW5hbWUsICNjcmVhdGUtY29sb3IsICNjcmVhdGUtY2FyLWJ0bicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQ3JlYXRlQ2FyKGNyZWF0ZU5hbWVJbnB1dCwgY3JlYXRlQ29sb3JJbnB1dCwgY2Fyc0NvbnRhaW5lckVsZW1lbnQpKTtcbiAgICAgICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlVXBkYXRlQ2FyKHNlbGVjdGVkQ2FySWQsIHVwZGF0ZU5hbWVJbnB1dCwgdXBkYXRlQnV0dG9uLCB1cGRhdGVDb2xvcklucHV0LCBjYXJzQ29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRDYXJJZCA9IG51bGw7XG4gICAgY2Fyc0NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyLXJlbW92ZS1idG4nKSkge1xuICAgICAgICAgICAgY29uc3QgY2FySWQgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihjYXJJZCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVDYXIoY2FySWQsIGNhcnNDb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyLXNlbGVjdC1idG4nKSkge1xuICAgICAgICAgICAgY29uc3QgY2FySWQgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihjYXJJZCkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhcklkID0gY2FySWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyRWxlbWVudCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyTmFtZSA9ICgoX2EgPSBjYXJFbGVtZW50ID09PSBudWxsIHx8IGNhckVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhckVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhci1uYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0Q29udGVudCkgfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyQ29sb3IgPSAoKF9iID0gY2FyRWxlbWVudCA9PT0gbnVsbCB8fCBjYXJFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXItc3ZnLWljb24nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEF0dHJpYnV0ZSgnZmlsbCcpKSB8fFxuICAgICAgICAgICAgICAgICAgICAnI2ZmZmZmZic7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmFtZUlucHV0LnZhbHVlID0gY2FyTmFtZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb2xvcklucHV0LnZhbHVlID0gY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmFtZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdXBkYXRlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYmRlZjZmJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBpbml0aWFsaXplQXBwKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==