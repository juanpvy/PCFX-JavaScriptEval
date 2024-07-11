/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./JavascriptEVAL/index.ts":
/*!*********************************!*\
  !*** ./JavascriptEVAL/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.JavascriptEVAL = void 0;\nvar JavascriptEVAL = /** @class */function () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function JavascriptEVAL() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  JavascriptEVAL.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // Add control initialization code\n    this._container = container;\n    this._controlViewRender = false;\n    this._notifyOutputChanged = notifyOutputChanged;\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  JavascriptEVAL.prototype.updateView = function (context) {\n    // Add code to update control view\n    if (!this._controlViewRender) {\n      this._controlViewRender = true;\n      this._inputElement = document.createElement('input');\n      this._inputElement.type = \"text\";\n      this._container.appendChild(this._inputElement);\n    }\n    this._inputElement.style.cssText = context.parameters.FormulaStyle.raw || \"\";\n    var _resultEval = 0;\n    try {\n      _resultEval = eval(context.parameters.FormulaProperty.raw || \"\");\n    } catch (ex) {\n      _resultEval = -1;\n      console.log(\"PCFX.JavascriptEVAL:Error in formula=>\" + (context.parameters.FormulaProperty.raw || \"\"));\n    }\n    var _decimalPlaces = 0;\n    try {\n      _decimalPlaces = parseInt(context.parameters.DecimalPlaces.raw || \"2\");\n      if (_decimalPlaces >= 1) {\n        _decimalPlaces++;\n      }\n    } catch (ex) {\n      console.log(\"PCFX.JavascriptEVAL:Error in decimal places=>\" + (context.parameters.DecimalPlaces.raw || \"\"));\n    }\n    var formulaResultText = _resultEval.toString();\n    var intPart = Math.trunc(_resultEval).toString();\n    var numText = formulaResultText.substring(0, intPart.length + _decimalPlaces);\n    this._inputElement.value = numText;\n    if (this._previusValue != this._inputElement.value) {\n      this._previusValue = this._inputElement.value;\n      this._notifyOutputChanged();\n    }\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  JavascriptEVAL.prototype.getOutputs = function () {\n    console.log(\"PCFX.JavascriptEVAL.getOutputs=\", this._inputElement.value);\n    return {\n      FormulaResult: this._inputElement.value\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  JavascriptEVAL.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return JavascriptEVAL;\n}();\nexports.JavascriptEVAL = JavascriptEVAL;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./JavascriptEVAL/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./JavascriptEVAL/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('JavascriptFunctions.JavascriptEVAL', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.JavascriptEVAL);
} else {
	var JavascriptFunctions = JavascriptFunctions || {};
	JavascriptFunctions.JavascriptEVAL = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.JavascriptEVAL;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}