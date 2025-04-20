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

#car-select-btn,
#car-remove-btn {
  color: #000000;
  background-color: #bbd0f4;
  border-color: #bbd0f4;
}

/*------PAGINATION DIV------*/

.pagination {
  margin-top: 40px;
}
`, "",{"version":3,"sources":["webpack://./public/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA,qBAAqB;;AAErB;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,8BAA8B;;AAE9B;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA,2BAA2B;;AAE3B;;EAEE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;;AAEjC;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,UAAU;EACV,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,UAAU;EACV,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,6BAA6B;;AAE7B;EACE,gBAAgB;AAClB","sourcesContent":["body {\r\n  box-sizing: border-box;\r\n  font-family: sans-serif;\r\n  margin: 0;\r\n  padding: 20px;\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n.app-wrapper {\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/*------HEADER------*/\r\n\r\nheader {\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid #ccc;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.nav-button {\r\n  padding: 10px 15px;\r\n  margin-right: 10px;\r\n  letter-spacing: 1px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  border: 1px solid #ccc;\r\n  background-color: #eee;\r\n}\r\n\r\n.nav-button.active {\r\n  background-color: #007bff;\r\n  color: white;\r\n  border-color: #007bff;\r\n}\r\n\r\n.nav-button.active:hover {\r\n  background-color: #007bff;\r\n}\r\n\r\n/*------GARAGE-VIEW DIV------*/\r\n\r\n.view {\r\n  display: none;\r\n}\r\n\r\n.active-view {\r\n  display: block;\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n}\r\n\r\n/*------CONTROLS DIV------*/\r\n\r\n.controls .form-group,\r\n.race-controls {\r\n  margin-bottom: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\ninput[type='text'] {\r\n  padding: 8px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type='color'] {\r\n  border-radius: 4px;\r\n  width: 40px;\r\n  height: 32px;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\n\r\nbutton {\r\n  padding: 8px 12px;\r\n  cursor: pointer;\r\n  border: 1px solid #ccc;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nbutton:disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.6;\r\n}\r\n\r\nbutton:hover:not(:disabled) {\r\n  background-color: #ddd;\r\n}\r\n\r\n#create-car-btn,\r\n#generate-cars-btn {\r\n  background-color: #28a745;\r\n  color: white;\r\n  border-color: #28a745;\r\n}\r\n#create-car-btn:hover:not(:disabled),\r\n#generate-cars-btn:hover:not(:disabled) {\r\n  background-color: #218838;\r\n}\r\n\r\n#update-car-btn {\r\n  background-color: #ffc107;\r\n  color: black;\r\n  border-color: #ffc107;\r\n}\r\n#update-car-btn:hover:not(:disabled) {\r\n  background-color: #e0a800;\r\n}\r\n\r\n#race-btn {\r\n  background-color: #17a2b8;\r\n  color: white;\r\n  border-color: #17a2b8;\r\n}\r\n#race-btn:hover:not(:disabled) {\r\n  background-color: #138496;\r\n}\r\n\r\n#reset-btn {\r\n  background-color: #dc3545;\r\n  color: white;\r\n  border-color: #dc3545;\r\n}\r\n#reset-btn:hover:not(:disabled) {\r\n  background-color: #c82333;\r\n}\r\n\r\n/*------CAR-LIST-CONTAINER------*/\r\n\r\n.car-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.car {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* border-bottom: 1px dashed black; */\r\n}\r\n\r\n.car-road-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 2px dashed;\r\n  /* border: 1px solid green; */\r\n}\r\n\r\n.car-icon {\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: flex-end;\r\n  width: 15%;\r\n  /* border: 1px solid red; */\r\n}\r\n.flag-icon {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: flex-end;\r\n  width: 15%;\r\n  /* border: 1px solid blue; */\r\n}\r\n\r\n.car-svg-icon {\r\n  width: 100%;\r\n  transform: scale(-1, 1);\r\n}\r\n.flag-png-icon {\r\n  width: 60%;\r\n}\r\n\r\n.car-controls {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n#car-select-btn,\r\n#car-remove-btn {\r\n  color: #000000;\r\n  background-color: #bbd0f4;\r\n  border-color: #bbd0f4;\r\n}\r\n\r\n/*------PAGINATION DIV------*/\r\n\r\n.pagination {\r\n  margin-top: 40px;\r\n}\r\n"],"sourceRoot":""}]);
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
        const flagPngId = `flag-png-icon${uniqueIdSuffix}`;
        const selectBtnId = `car-select-btn${uniqueIdSuffix}`;
        const removeBtnId = `car-remove-btn${uniqueIdSuffix}`;
        const carNameId = `car-name${uniqueIdSuffix}`;
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
            <img id="${flagPngId}" class="flag-png-icon" src="./flag.png" alt="Finish flag for ${this.name}">
          </span>
        </div>
        <div class="car-controls">
          <button id="${selectBtnId}">Select</button>
          <button id="${removeBtnId}">Remove</button>
          <span id="${carNameId}">${this.name}</span>
        </div>
      `;
        this.element = carElement;
        return this.element;
    }
}


/***/ }),

/***/ "./src/controls.ts":
/*!*************************!*\
  !*** ./src/controls.ts ***!
  \*************************/
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
        const colorInput = this.createInput('color', 'update-color', '', '#ffffff', true);
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

/***/ "./src/localStorage.ts":
/*!*****************************!*\
  !*** ./src/localStorage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCarToStorage: () => (/* binding */ addCarToStorage),
/* harmony export */   loadAndRenderCarsFromStorage: () => (/* binding */ loadAndRenderCarsFromStorage),
/* harmony export */   renderCar: () => (/* binding */ renderCar),
/* harmony export */   updateGarageCounter: () => (/* binding */ updateGarageCounter)
/* harmony export */ });
/* harmony import */ var _carBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carBuilder */ "./src/carBuilder.ts");

const STORAGE_KEY = 'garageCars';
function getCarsFromStorage() {
    const storedCars = localStorage.getItem(STORAGE_KEY);
    if (storedCars) {
        try {
            const carDataArray = JSON.parse(storedCars);
            if (Array.isArray(carDataArray)) {
                return carDataArray;
            }
        }
        catch (error) {
            console.error('Error parsing cars from localStorage:', error);
            localStorage.removeItem(STORAGE_KEY);
        }
    }
    return [];
}
function saveCarsToStorage(cars) {
    try {
        const jsonString = JSON.stringify(cars);
        localStorage.setItem(STORAGE_KEY, jsonString);
    }
    catch (error) {
        console.error('Error saving cars to localStorage:', error);
    }
}
function addCarToStorage(newCarData) {
    const currentCars = getCarsFromStorage();
    currentCars.push(newCarData);
    saveCarsToStorage(currentCars);
}
function renderCar(carData, carsContainer) {
    if (!carsContainer) {
        console.error('Cannot render car: carsContainer not found.');
        return;
    }
    const carInstance = new _carBuilder__WEBPACK_IMPORTED_MODULE_0__.Car(carData);
    const carElement = carInstance.render();
    carsContainer.appendChild(carElement);
}
function loadAndRenderCarsFromStorage(carsContainer) {
    const storedCars = getCarsFromStorage();
    if (carsContainer) {
        carsContainer.innerHTML = '';
    }
    else {
        console.error('Cannot load cars: carsContainer not found.');
        return;
    }
    if (storedCars.length > 0) {
        storedCars.forEach((carData) => {
            renderCar(carData, carsContainer);
        });
    }
    else {
        console.log('No cars found in localStorage.');
    }
}
function updateGarageCounter(garageCounter) {
    const storedCars = getCarsFromStorage();
    garageCounter.innerText = String(storedCars.length);
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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/controls.ts");

class Builder {
    header() {
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
    main() {
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
        const controls = new _controls__WEBPACK_IMPORTED_MODULE_0__.Controls('app-wrapper');
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

/***/ "./src/servFunctions.ts":
/*!******************************!*\
  !*** ./src/servFunctions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCarOnServerAndRender: () => (/* binding */ createCarOnServerAndRender),
/* harmony export */   getCarsInGarage: () => (/* binding */ getCarsInGarage)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const SERVER_URL = 'http://127.0.0.1:3000';
function createCarOnServerAndRender(name, color, carsContainer, carNameInput, carColorInput, garageCounter) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${SERVER_URL}/garage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    color: color,
                }),
            });
            if (response.status !== 201) {
                const errorText = yield response.text();
                throw new Error(`Server responded with status ${response.status}: ${errorText}`);
            }
            const responseData = yield response.json();
            console.log('Server Response (Success):', responseData);
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.addCarToStorage)(responseData);
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.renderCar)(responseData, carsContainer);
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.updateGarageCounter)(garageCounter);
            if (carNameInput && carColorInput) {
                carNameInput.value = '';
                carColorInput.value = '#ffffff';
            }
        }
        catch (error) {
            console.error('Failed to create car:', error);
        }
    });
}
function getCarsInGarage(page, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = 'http://127.0.0.1:3000/garage';
        const params = [];
        if (page !== undefined)
            params.push(`_page=${page}`);
        if (limit !== undefined)
            params.push(`_limit=${limit}`);
        if (params.length > 0)
            url += '?' + params.join('&');
        const response = yield fetch(url);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const cars = yield response.json();
        const totalCount = response.headers.get('X-Total-Count');
        return { cars, totalCount };
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
/* harmony import */ var _servFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servFunctions */ "./src/servFunctions.ts");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.ts");
/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/style.css */ "./public/style.css");

//import { Car } from './carBuilder';



const pageBuilder = new _pageBuilder__WEBPACK_IMPORTED_MODULE_0__.Builder();
const appWrapper = document.querySelector('.app-wrapper');
if (!appWrapper) {
    console.error('app-wrapper DIV element not found!');
}
else {
    const appHeader = pageBuilder.header();
    const appMain = pageBuilder.main();
    const garageViewContent = pageBuilder.buildGarageView();
    const carsContainer = pageBuilder.buildCarsContainer();
    appWrapper.appendChild(appHeader);
    appWrapper.appendChild(appMain);
    appMain.appendChild(garageViewContent);
    garageViewContent.appendChild(carsContainer);
    const createCarBtn = document.getElementById('create-car-btn');
    const carNameInput = document.getElementById('create-name');
    const carColorInput = document.getElementById('create-color');
    const garageCounter = document.getElementById('garage-total-count');
    document.addEventListener('DOMContentLoaded', function () {
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.loadAndRenderCarsFromStorage)(carsContainer);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateGarageCounter)(garageCounter);
        const carControlsContainer = document.querySelectorAll('.car-controls');
        console.log(carControlsContainer);
    });
    if (createCarBtn && carNameInput && carColorInput && carsContainer) {
        createCarBtn.addEventListener('click', () => {
            const name = carNameInput.value.trim();
            const color = carColorInput.value;
            if (!name) {
                alert('Please enter a car name.');
                carNameInput.focus();
                return;
            }
            (0,_servFunctions__WEBPACK_IMPORTED_MODULE_1__.createCarOnServerAndRender)(name, color, carsContainer, carNameInput, carColorInput, garageCounter);
        });
    }
    else {
        console.error('One or more required elements (button, inputs, container) not found in the DOM.');
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTDs7Ozs7OztVQzFEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ3hDLFdBQVcsTUFBTTtBQUM0QztBQUN1QjtBQUN2RDtBQUM3Qix3QkFBd0IsaURBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyRUFBNEI7QUFDcEMsUUFBUSxrRUFBbUI7QUFDM0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBFQUEwQjtBQUN0QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9wdWJsaWMvc3R5bGUuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9wdWJsaWMvc3R5bGUuY3NzP2NlYzciLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jYXJCdWlsZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9sb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlQnVpbGRlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3NlcnZGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uYXBwLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4vKi0tLS0tLUhFQURFUi0tLS0tLSovXHJcblxyXG5oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbi5hY3RpdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi8qLS0tLS0tR0FSQUdFLVZJRVcgRElWLS0tLS0tKi9cclxuXHJcbi52aWV3IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlLXZpZXcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLyotLS0tLS1DT05UUk9MUyBESVYtLS0tLS0qL1xyXG5cclxuLmNvbnRyb2xzIC5mb3JtLWdyb3VwLFxyXG4ucmFjZS1jb250cm9scyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nY29sb3InXSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jY3JlYXRlLWNhci1idG4sXHJcbiNnZW5lcmF0ZS1jYXJzLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcbiNjcmVhdGUtY2FyLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSxcclxuI2dlbmVyYXRlLWNhcnMtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4ODM4O1xyXG59XHJcblxyXG4jdXBkYXRlLWNhci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcclxufVxyXG4jdXBkYXRlLWNhci1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGE4MDA7XHJcbn1cclxuXHJcbiNyYWNlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xyXG59XHJcbiNyYWNlLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzODQ5NjtcclxufVxyXG5cclxuI3Jlc2V0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcbiNyZXNldC1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XHJcbn1cclxuXHJcbi8qLS0tLS0tQ0FSLUxJU1QtQ09OVEFJTkVSLS0tLS0tKi9cclxuXHJcbi5jYXItbGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrOyAqL1xyXG59XHJcblxyXG4uY2FyLXJvYWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xyXG59XHJcblxyXG4uY2FyLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTUlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG4uZmxhZy1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTUlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbn1cclxuXHJcbi5jYXItc3ZnLWljb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG59XHJcbi5mbGFnLXBuZy1pY29uIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uY2FyLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY2FyLXNlbGVjdC1idG4sXHJcbiNjYXItcmVtb3ZlLWJ0biB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDBmNDtcclxuICBib3JkZXItY29sb3I6ICNiYmQwZjQ7XHJcbn1cclxuXHJcbi8qLS0tLS0tUEFHSU5BVElPTiBESVYtLS0tLS0qL1xyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wdWJsaWMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDJCQUEyQjs7QUFFM0I7O0VBRUUsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsaUNBQWlDOztBQUVqQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXdyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLUhFQURFUi0tLS0tLSovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1dHRvbi5hY3RpdmU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1HQVJBR0UtVklFVyBESVYtLS0tLS0qL1xcclxcblxcclxcbi52aWV3IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtdmlldyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1DT05UUk9MUyBESVYtLS0tLS0qL1xcclxcblxcclxcbi5jb250cm9scyAuZm9ybS1ncm91cCxcXHJcXG4ucmFjZS1jb250cm9scyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjb2xvciddIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1jYXItYnRuLFxcclxcbiNnZW5lcmF0ZS1jYXJzLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcclxcbn1cXHJcXG4jY3JlYXRlLWNhci1idG46aG92ZXI6bm90KDpkaXNhYmxlZCksXFxyXFxuI2dlbmVyYXRlLWNhcnMtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XFxyXFxufVxcclxcblxcclxcbiN1cGRhdGUtY2FyLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xcclxcbn1cXHJcXG4jdXBkYXRlLWNhci1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYTgwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JhY2UtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XFxyXFxufVxcclxcbiNyYWNlLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4NDk2O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XFxyXFxufVxcclxcbiNyZXNldC1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1DQVItTElTVC1DT05UQUlORVItLS0tLS0qL1xcclxcblxcclxcbi5jYXItbGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAvKiBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXJvYWQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG59XFxyXFxuLmZsYWctaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNhci1zdmctaWNvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4uZmxhZy1wbmctaWNvbiB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWNvbnRyb2xzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyLXNlbGVjdC1idG4sXFxyXFxuI2Nhci1yZW1vdmUtYnRuIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDBmNDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2JiZDBmNDtcXHJcXG59XFxyXFxuXFxyXFxuLyotLS0tLS1QQUdJTkFUSU9OIERJVi0tLS0tLSovXFxyXFxuXFxyXFxuLnBhZ2luYXRpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgY2xhc3MgQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBkYXRhLmNvbG9yO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXInKTtcbiAgICAgICAgY2FyRWxlbWVudC5kYXRhc2V0LmNhcklkID0gdGhpcy5pZC50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB1bmlxdWVJZFN1ZmZpeCA9IGAtJHt0aGlzLmlkfWA7XG4gICAgICAgIGNvbnN0IGNhclN2Z0lkID0gYGNhci1zdmctaWNvbiR7dW5pcXVlSWRTdWZmaXh9YDtcbiAgICAgICAgY29uc3QgZmxhZ1BuZ0lkID0gYGZsYWctcG5nLWljb24ke3VuaXF1ZUlkU3VmZml4fWA7XG4gICAgICAgIGNvbnN0IHNlbGVjdEJ0bklkID0gYGNhci1zZWxlY3QtYnRuJHt1bmlxdWVJZFN1ZmZpeH1gO1xuICAgICAgICBjb25zdCByZW1vdmVCdG5JZCA9IGBjYXItcmVtb3ZlLWJ0biR7dW5pcXVlSWRTdWZmaXh9YDtcbiAgICAgICAgY29uc3QgY2FyTmFtZUlkID0gYGNhci1uYW1lJHt1bmlxdWVJZFN1ZmZpeH1gO1xuICAgICAgICBjYXJFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyLXJvYWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhci1pY29uXCI+XHJcbiAgICAgICAgICAgIDxzdmcgaWQ9XCIke2NhclN2Z0lkfVwiIGNsYXNzPVwiY2FyLXN2Zy1pY29uXCIgdmlld0JveD1cIjAgMCAxMDAgNjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIiR7dGhpcy5jb2xvcn1cIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNhclRpdGxlXCIgcm9sZT1cImltZ1wiPlxyXG4gICAgICAgICAgICAgIDx0aXRsZSBpZD1cImNhclRpdGxlXCI+U2ltcGxlIENhciBJY29uPC90aXRsZT5cclxuICAgICAgICAgICAgICA8ZyBjbGFzcz1cImNhci1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNhci1ib2R5XCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk01IDUwIEwgMjAgNTAgTCAyNSAzNSBMIDQ1IDM1IEwgNTUgMjUgTCA3MCAyNSBMIDcwIDM1IEwgOTUgMzUgTCA5NSA1MCBaXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImNhci13aW5kb3dcIiBkPVwiTTQ3IDM0IEwgNTUgMjcgTCA2OCAyNyBMIDY4IDM0IFpcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwiY2FyLXdoZWVsIHdoZWVsLWxlZnRcIiBmaWxsPVwiYmxhY2tcIiBjeD1cIjMyXCIgY3k9XCI1MFwiIHI9XCI3XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJjYXItd2hlZWwgd2hlZWwtcmlnaHRcIiBmaWxsPVwiYmxhY2tcIiBjeD1cIjgwXCIgY3k9XCI1MFwiIHI9XCI3XCIgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGFnLWljb25cIj5cclxuICAgICAgICAgICAgPGltZyBpZD1cIiR7ZmxhZ1BuZ0lkfVwiIGNsYXNzPVwiZmxhZy1wbmctaWNvblwiIHNyYz1cIi4vZmxhZy5wbmdcIiBhbHQ9XCJGaW5pc2ggZmxhZyBmb3IgJHt0aGlzLm5hbWV9XCI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhci1jb250cm9sc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7c2VsZWN0QnRuSWR9XCI+U2VsZWN0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtyZW1vdmVCdG5JZH1cIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgIDxzcGFuIGlkPVwiJHtjYXJOYW1lSWR9XCI+JHt0aGlzLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjYXJFbGVtZW50O1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDb250cm9scyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVySWQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkgfHwgZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb250cm9sc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNFbGVtZW50LmNsYXNzTmFtZSA9ICdjb250cm9scyc7XG4gICAgICAgIGNvbnRyb2xzRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZvcm1Hcm91cCgpKTtcbiAgICAgICAgY29udHJvbHNFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudXBkYXRlRm9ybUdyb3VwKCkpO1xuICAgICAgICBjb250cm9sc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yYWNlQ29udHJvbHMoKSk7XG4gICAgICAgIHJldHVybiBjb250cm9sc0VsZW1lbnQ7XG4gICAgfVxuICAgIGNyZWF0ZUZvcm1Hcm91cCgpIHtcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc05hbWUgPSAnZm9ybS1ncm91cCc7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXQoJ3RleHQnLCAnY3JlYXRlLW5hbWUnLCAnTmV3IGNhciBuYW1lJyk7XG4gICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0KCdjb2xvcicsICdjcmVhdGUtY29sb3InLCAnJywgJyNmZmZmZmYnKTtcbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ2NyZWF0ZS1jYXItYnRuJywgJ0NyZWF0ZScpO1xuICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Hcm91cDtcbiAgICB9XG4gICAgdXBkYXRlRm9ybUdyb3VwKCkge1xuICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwJztcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gdGhpcy5jcmVhdGVJbnB1dCgndGV4dCcsICd1cGRhdGUtbmFtZScsICdVcGRhdGUgY2FyIG5hbWUnLCAnJywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGNvbG9ySW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0KCdjb2xvcicsICd1cGRhdGUtY29sb3InLCAnJywgJyNmZmZmZmYnLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdXBkYXRlQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ3VwZGF0ZS1jYXItYnRuJywgJ1VwZGF0ZScsIHRydWUpO1xuICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGNvbG9ySW5wdXQpO1xuICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGZvcm1Hcm91cDtcbiAgICB9XG4gICAgcmFjZUNvbnRyb2xzKCkge1xuICAgICAgICBjb25zdCBjb250cm9sc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xzR3JvdXAuY2xhc3NOYW1lID0gJ3JhY2UtY29udHJvbHMnO1xuICAgICAgICBjb25zdCByYWNlQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oJ3JhY2UtYnRuJywgJ1JhY2UnKTtcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbigncmVzZXQtYnRuJywgJ1Jlc2V0Jyk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlQ2Fyc0J1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCdnZW5lcmF0ZS1jYXJzLWJ0bicsICdHZW5lcmF0ZSBDYXJzICgxMDApJyk7XG4gICAgICAgIGNvbnRyb2xzR3JvdXAuYXBwZW5kQ2hpbGQocmFjZUJ1dHRvbik7XG4gICAgICAgIGNvbnRyb2xzR3JvdXAuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgICAgICBjb250cm9sc0dyb3VwLmFwcGVuZENoaWxkKGdlbmVyYXRlQ2Fyc0J1dHRvbik7XG4gICAgICAgIHJldHVybiBjb250cm9sc0dyb3VwO1xuICAgIH1cbiAgICBjcmVhdGVJbnB1dCh0eXBlLCBpZCwgcGxhY2Vob2xkZXIsIHZhbHVlID0gJycsIGRpc2FibGVkID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICAgICAgaW5wdXQuaWQgPSBpZDtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBjcmVhdGVCdXR0b24oaWQsIHRleHQsIGRpc2FibGVkID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5pZCA9IGlkO1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDYXIgfSBmcm9tICcuL2NhckJ1aWxkZXInO1xuY29uc3QgU1RPUkFHRV9LRVkgPSAnZ2FyYWdlQ2Fycyc7XG5mdW5jdGlvbiBnZXRDYXJzRnJvbVN0b3JhZ2UoKSB7XG4gICAgY29uc3Qgc3RvcmVkQ2FycyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcbiAgICBpZiAoc3RvcmVkQ2Fycykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY2FyRGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWRDYXJzKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNhckRhdGFBcnJheSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyRGF0YUFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBjYXJzIGZyb20gbG9jYWxTdG9yYWdlOicsIGVycm9yKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFNUT1JBR0VfS0VZKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBzYXZlQ2Fyc1RvU3RvcmFnZShjYXJzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNhcnMpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwganNvblN0cmluZyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgY2FycyB0byBsb2NhbFN0b3JhZ2U6JywgZXJyb3IpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJUb1N0b3JhZ2UobmV3Q2FyRGF0YSkge1xuICAgIGNvbnN0IGN1cnJlbnRDYXJzID0gZ2V0Q2Fyc0Zyb21TdG9yYWdlKCk7XG4gICAgY3VycmVudENhcnMucHVzaChuZXdDYXJEYXRhKTtcbiAgICBzYXZlQ2Fyc1RvU3RvcmFnZShjdXJyZW50Q2Fycyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FyKGNhckRhdGEsIGNhcnNDb250YWluZXIpIHtcbiAgICBpZiAoIWNhcnNDb250YWluZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IHJlbmRlciBjYXI6IGNhcnNDb250YWluZXIgbm90IGZvdW5kLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNhckluc3RhbmNlID0gbmV3IENhcihjYXJEYXRhKTtcbiAgICBjb25zdCBjYXJFbGVtZW50ID0gY2FySW5zdGFuY2UucmVuZGVyKCk7XG4gICAgY2Fyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJFbGVtZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQW5kUmVuZGVyQ2Fyc0Zyb21TdG9yYWdlKGNhcnNDb250YWluZXIpIHtcbiAgICBjb25zdCBzdG9yZWRDYXJzID0gZ2V0Q2Fyc0Zyb21TdG9yYWdlKCk7XG4gICAgaWYgKGNhcnNDb250YWluZXIpIHtcbiAgICAgICAgY2Fyc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBsb2FkIGNhcnM6IGNhcnNDb250YWluZXIgbm90IGZvdW5kLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzdG9yZWRDYXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc3RvcmVkQ2Fycy5mb3JFYWNoKChjYXJEYXRhKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJDYXIoY2FyRGF0YSwgY2Fyc0NvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIGNhcnMgZm91bmQgaW4gbG9jYWxTdG9yYWdlLicpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHYXJhZ2VDb3VudGVyKGdhcmFnZUNvdW50ZXIpIHtcbiAgICBjb25zdCBzdG9yZWRDYXJzID0gZ2V0Q2Fyc0Zyb21TdG9yYWdlKCk7XG4gICAgZ2FyYWdlQ291bnRlci5pbm5lclRleHQgPSBTdHJpbmcoc3RvcmVkQ2Fycy5sZW5ndGgpO1xufVxuIiwiaW1wb3J0IHsgQ29udHJvbHMgfSBmcm9tICcuL2NvbnRyb2xzJztcbmV4cG9ydCBjbGFzcyBCdWlsZGVyIHtcbiAgICBoZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBjb25zdCBnYXJhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZ2FyYWdlQnV0dG9uLmlkID0gJ25hdi1nYXJhZ2UtYnRuJztcbiAgICAgICAgZ2FyYWdlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nLCAnYWN0aXZlJyk7XG4gICAgICAgIGdhcmFnZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdHYXJhZ2UnO1xuICAgICAgICBjb25zdCB3aW5uZXJzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHdpbm5lcnNCdXR0b24uaWQgPSAnbmF2LXdpbm5lcnMtYnRuJztcbiAgICAgICAgd2lubmVyc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgICAgIHdpbm5lcnNCdXR0b24udGV4dENvbnRlbnQgPSAnV2lubmVycyc7XG4gICAgICAgIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2FyYWdlQnV0dG9uKTtcbiAgICAgICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZCh3aW5uZXJzQnV0dG9uKTtcbiAgICAgICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG4gICAgfVxuICAgIG1haW4oKSB7XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluRWxlbWVudC5pZCA9ICdtYWluLWNvbnRlbnQnO1xuICAgICAgICByZXR1cm4gbWFpbkVsZW1lbnQ7XG4gICAgfVxuICAgIGJ1aWxkR2FyYWdlVmlldygpIHtcbiAgICAgICAgY29uc3QgZ2FyYWdlVmlld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYXJhZ2VWaWV3RGl2LmlkID0gJ2dhcmFnZS12aWV3JztcbiAgICAgICAgZ2FyYWdlVmlld0Rpdi5jbGFzc0xpc3QuYWRkKCd2aWV3JywgJ2FjdGl2ZS12aWV3Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJ0dhcmFnZSAoPHNwYW4gaWQ9XCJnYXJhZ2UtdG90YWwtY291bnRcIj4wPC9zcGFuPiknO1xuICAgICAgICBjb25zdCBwYWdlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFnZUluZm8uaW5uZXJIVE1MID0gJ1BhZ2UgIzxzcGFuIGlkPVwiZ2FyYWdlLWN1cnJlbnQtcGFnZVwiPjE8L3NwYW4+JztcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgQ29udHJvbHMoJ2FwcC13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRWxlbWVudCA9IGNvbnRyb2xzLnJlbmRlcigpO1xuICAgICAgICBnYXJhZ2VWaWV3RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZ2FyYWdlVmlld0Rpdi5hcHBlbmRDaGlsZChwYWdlSW5mbyk7XG4gICAgICAgIGdhcmFnZVZpZXdEaXYuYXBwZW5kQ2hpbGQoY29udHJvbHNFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGdhcmFnZVZpZXdEaXY7XG4gICAgfVxuICAgIGJ1aWxkQ2Fyc0NvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgY2Fyc0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJzQ29udGFpbmVyRGl2LmlkID0gJ2Nhci1saXN0LWNvbnRhaW5lcic7XG4gICAgICAgIGNhcnNDb250YWluZXJEaXYuY2xhc3NOYW1lID0gJ2Nhci1saXN0LWNvbnRhaW5lcic7XG4gICAgICAgIHJldHVybiBjYXJzQ29udGFpbmVyRGl2O1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYWRkQ2FyVG9TdG9yYWdlLCByZW5kZXJDYXIsIHVwZGF0ZUdhcmFnZUNvdW50ZXIsIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuY29uc3QgU0VSVkVSX1VSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhck9uU2VydmVyQW5kUmVuZGVyKG5hbWUsIGNvbG9yLCBjYXJzQ29udGFpbmVyLCBjYXJOYW1lSW5wdXQsIGNhckNvbG9ySW5wdXQsIGdhcmFnZUNvdW50ZXIpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtTRVJWRVJfVVJMfS9nYXJhZ2VgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IHlpZWxkIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciByZXNwb25kZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9OiAke2Vycm9yVGV4dH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXIgUmVzcG9uc2UgKFN1Y2Nlc3MpOicsIHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICBhZGRDYXJUb1N0b3JhZ2UocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgIHJlbmRlckNhcihyZXNwb25zZURhdGEsIGNhcnNDb250YWluZXIpO1xuICAgICAgICAgICAgdXBkYXRlR2FyYWdlQ291bnRlcihnYXJhZ2VDb3VudGVyKTtcbiAgICAgICAgICAgIGlmIChjYXJOYW1lSW5wdXQgJiYgY2FyQ29sb3JJbnB1dCkge1xuICAgICAgICAgICAgICAgIGNhck5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGNhckNvbG9ySW5wdXQudmFsdWUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGNhcjonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJzSW5HYXJhZ2UocGFnZSwgbGltaXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9nYXJhZ2UnO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBbXTtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKGBfcGFnZT0ke3BhZ2V9YCk7XG4gICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcGFyYW1zLnB1c2goYF9saW1pdD0ke2xpbWl0fWApO1xuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICBjb25zdCBjYXJzID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCB0b3RhbENvdW50ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgcmV0dXJuIHsgY2FycywgdG90YWxDb3VudCB9O1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vcGFnZUJ1aWxkZXInO1xuLy9pbXBvcnQgeyBDYXIgfSBmcm9tICcuL2NhckJ1aWxkZXInO1xuaW1wb3J0IHsgY3JlYXRlQ2FyT25TZXJ2ZXJBbmRSZW5kZXIgfSBmcm9tICcuL3NlcnZGdW5jdGlvbnMnO1xuaW1wb3J0IHsgbG9hZEFuZFJlbmRlckNhcnNGcm9tU3RvcmFnZSwgdXBkYXRlR2FyYWdlQ291bnRlciwgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZS5jc3MnO1xuY29uc3QgcGFnZUJ1aWxkZXIgPSBuZXcgQnVpbGRlcigpO1xuY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtd3JhcHBlcicpO1xuaWYgKCFhcHBXcmFwcGVyKSB7XG4gICAgY29uc29sZS5lcnJvcignYXBwLXdyYXBwZXIgRElWIGVsZW1lbnQgbm90IGZvdW5kIScpO1xufVxuZWxzZSB7XG4gICAgY29uc3QgYXBwSGVhZGVyID0gcGFnZUJ1aWxkZXIuaGVhZGVyKCk7XG4gICAgY29uc3QgYXBwTWFpbiA9IHBhZ2VCdWlsZGVyLm1haW4oKTtcbiAgICBjb25zdCBnYXJhZ2VWaWV3Q29udGVudCA9IHBhZ2VCdWlsZGVyLmJ1aWxkR2FyYWdlVmlldygpO1xuICAgIGNvbnN0IGNhcnNDb250YWluZXIgPSBwYWdlQnVpbGRlci5idWlsZENhcnNDb250YWluZXIoKTtcbiAgICBhcHBXcmFwcGVyLmFwcGVuZENoaWxkKGFwcEhlYWRlcik7XG4gICAgYXBwV3JhcHBlci5hcHBlbmRDaGlsZChhcHBNYWluKTtcbiAgICBhcHBNYWluLmFwcGVuZENoaWxkKGdhcmFnZVZpZXdDb250ZW50KTtcbiAgICBnYXJhZ2VWaWV3Q29udGVudC5hcHBlbmRDaGlsZChjYXJzQ29udGFpbmVyKTtcbiAgICBjb25zdCBjcmVhdGVDYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNhci1idG4nKTtcbiAgICBjb25zdCBjYXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLW5hbWUnKTtcbiAgICBjb25zdCBjYXJDb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jb2xvcicpO1xuICAgIGNvbnN0IGdhcmFnZUNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FyYWdlLXRvdGFsLWNvdW50Jyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZEFuZFJlbmRlckNhcnNGcm9tU3RvcmFnZShjYXJzQ29udGFpbmVyKTtcbiAgICAgICAgdXBkYXRlR2FyYWdlQ291bnRlcihnYXJhZ2VDb3VudGVyKTtcbiAgICAgICAgY29uc3QgY2FyQ29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLWNvbnRyb2xzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhckNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBpZiAoY3JlYXRlQ2FyQnRuICYmIGNhck5hbWVJbnB1dCAmJiBjYXJDb2xvcklucHV0ICYmIGNhcnNDb250YWluZXIpIHtcbiAgICAgICAgY3JlYXRlQ2FyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNhck5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNhckNvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgY2FyIG5hbWUuJyk7XG4gICAgICAgICAgICAgICAgY2FyTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3JlYXRlQ2FyT25TZXJ2ZXJBbmRSZW5kZXIobmFtZSwgY29sb3IsIGNhcnNDb250YWluZXIsIGNhck5hbWVJbnB1dCwgY2FyQ29sb3JJbnB1dCwgZ2FyYWdlQ291bnRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignT25lIG9yIG1vcmUgcmVxdWlyZWQgZWxlbWVudHMgKGJ1dHRvbiwgaW5wdXRzLCBjb250YWluZXIpIG5vdCBmb3VuZCBpbiB0aGUgRE9NLicpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==