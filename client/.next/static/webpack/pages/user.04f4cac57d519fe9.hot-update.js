"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./pages/user/index.js":
/*!*****************************!*\
  !*** ./pages/user/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIndex = function() {\n    _s();\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hidden = ref[0], setHidden = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context), user = ref1.state.user;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !hidden && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"jumbotron text-center square\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false));\n};\n_s(UserIndex, \"xUNlCcYFbY1oDu9GfDElBoyZKQY=\");\n_c = UserIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserIndex);\nvar _c;\n$RefreshReg$(_c, \"UserIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxRDtBQUNoQjtBQUNaOzs7QUFFekIsR0FBSyxDQUFDSyxTQUFTLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ3JCLEVBQU87SUFDUCxHQUFLLENBQXVCTCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFsQ00sTUFBTSxHQUFlTixHQUFjLEtBQTNCTyxTQUFTLEdBQUlQLEdBQWM7SUFDMUMsR0FBSyxDQUFtQkMsSUFBbUIsR0FBbkJBLGlEQUFVLENBQUNFLDZDQUFPLEdBQTNCSyxJQUFJLEdBQUtQLElBQW1CLENBQXBDUSxLQUFLLENBQUdELElBQUk7SUFDbkIsTUFBTTttQkFFSkYsTUFBTSxnRkFDUEksQ0FBRTtZQUFDQyxTQUFTLEVBQUMsQ0FBOEI7a0dBQ3ZDQyxDQUFHOzBCQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sSUFBSTs7Ozs7Ozs7Ozs7O0FBS2pDLENBQUM7R0FiS0gsU0FBUztLQUFUQSxTQUFTO0FBY2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2luZGV4LmpzP2FlOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBVc2VySW5kZXggPSAoKSA9PiB7XHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IHtzdGF0ZToge3VzZXJ9fSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHshaGlkZGVuICYmIChcclxuICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgc3F1YXJlXCI+XHJcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodXNlcil9PC9wcmU+XHJcbiAgICA8L2gxPlxyXG4gICAgKX1cclxuICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlckluZGV4OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDb250ZXh0IiwiYXhpb3MiLCJVc2VySW5kZXgiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJ1c2VyIiwic3RhdGUiLCJoMSIsImNsYXNzTmFtZSIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/index.js\n");

/***/ })

});