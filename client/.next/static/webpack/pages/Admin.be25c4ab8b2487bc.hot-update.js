"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Admin",{

/***/ "./components/nav/AdminNav.js":
/*!************************************!*\
  !*** ./components/nav/AdminNav.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AdminNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), current = ref[0], setCurrent = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCurrent( true && window.location.pathname);\n    // if (process.browser){ setCurrent(window.location.pathname)};\n    //console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav flex-column nav-pills \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/Admin\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav-link \".concat(current === \"/Admin\" && \"active\"),\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\nav\\\\AdminNav.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav-link \".concat(current === \"/Evalidation\" && \"active\"),\n                    children: \"Enrollemennt \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\nav\\\\AdminNav.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\nav\\\\AdminNav.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\nav\\\\AdminNav.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_s(AdminNav, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = AdminNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminNav);\nvar _c;\n$RefreshReg$(_c, \"AdminNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9BZG1pbk5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNhO0FBQ2hCOzs7QUFFekIsR0FBSyxDQUFDSSxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBRXBCLEdBQUssQ0FBeUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQWxDRyxPQUFPLEdBQWdCSCxHQUFZLEtBQTFCSSxVQUFVLEdBQUlKLEdBQVk7SUFFMUNELGdEQUFTLENBQUUsUUFBUSxHQUFGLENBQUM7UUFDZEssVUFBVSxDQUFDQyxLQUFlLElBQUlFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO0lBQ3ZELEVBQStEO0lBQzlELEVBQXdDO0lBQzVDLENBQUMsRUFBRSxDQUFDSjtRQUFBQSxLQUFlLElBQUlFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO0lBQUEsQ0FBQztJQUVoRCxNQUFNLDZFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE0Qjs4RkFDdENiLGtEQUFJO1lBQUNjLElBQUksRUFBQyxDQUFROzs0RkFDZEMsQ0FBQztvQkFBQ0YsU0FBUyxFQUFHLENBQVMsV0FBbUMsT0FBakNSLE9BQU8sS0FBSyxDQUFRLFdBQUksQ0FBUTs4QkFBSSxDQUFTOzs7Ozs7NEZBQ3RFVSxDQUFDO29CQUFDRixTQUFTLEVBQUcsQ0FBUyxXQUF5QyxPQUF2Q1IsT0FBTyxLQUFLLENBQWMsaUJBQUksQ0FBUTs4QkFBSSxDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RixDQUFDO0dBbEJLRCxRQUFRO0tBQVJBLFFBQVE7QUFtQmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdi9BZG1pbk5hdi5qcz81NjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFkbWluTmF2ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnQocHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAvLyBpZiAocHJvY2Vzcy5icm93c2VyKXsgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpfTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHMgXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9BZG1pblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXYtbGluayAke2N1cnJlbnQgPT09IFwiL0FkbWluXCIgJiYgXCJhY3RpdmVcIn1gfT5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdi1saW5rICR7Y3VycmVudCA9PT0gXCIvRXZhbGlkYXRpb25cIiAmJiBcImFjdGl2ZVwifWB9PkVucm9sbGVtZW5udCA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbk5hdjsiXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJBZG1pbk5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/AdminNav.js\n");

/***/ })

});