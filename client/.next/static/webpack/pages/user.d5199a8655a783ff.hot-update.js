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

/***/ "./components/nav/UserNav.js":
/*!***********************************!*\
  !*** ./components/nav/UserNav.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), current = ref[0], setCurrent = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCurrent( true && window.location.pathname);\n    // if (process.browser){ setCurrent(window.location.pathname)};\n    //console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav flex-column nav-pills mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/user\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"nav-link \".concat(current === \"/instructor\" && \"active\"),\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\nav\\\\UserNav.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\nav\\\\UserNav.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\nav\\\\UserNav.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_s(UserNav, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = UserNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserNav);\nvar _c;\n$RefreshReg$(_c, \"UserNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9Vc2VyTmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRCO0FBQ2E7QUFDaEI7OztBQUV6QixHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFFbkIsR0FBSyxDQUF5QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBbENHLE9BQU8sR0FBZ0JILEdBQVksS0FBMUJJLFVBQVUsR0FBSUosR0FBWTtJQUUxQ0QsZ0RBQVMsQ0FBRSxRQUFRLEdBQUYsQ0FBQztRQUNkSyxVQUFVLENBQUNDLEtBQWUsSUFBSUUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLFFBQVE7SUFDdkQsRUFBK0Q7SUFDOUQsRUFBd0M7SUFDNUMsQ0FBQyxFQUFFLENBQUNKO1FBQUFBLEtBQWUsSUFBSUUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLFFBQVE7SUFBQSxDQUFDO0lBRWhELE1BQU0sNkVBQ0xDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWdDOzhGQUMxQ2Isa0RBQUk7WUFBQ2MsSUFBSSxFQUFDLENBQU87a0dBQ2JDLENBQUM7Z0JBQUNGLFNBQVMsRUFBRyxDQUFTLFdBQXdDLE9BQXRDUixPQUFPLEtBQUssQ0FBYSxnQkFBSSxDQUFROzBCQUFJLENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEYsQ0FBQztHQWpCS0QsT0FBTztLQUFQQSxPQUFPO0FBa0JiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvVXNlck5hdi5qcz9iNjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFVzZXJOYXYgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudChwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgIC8vIGlmIChwcm9jZXNzLmJyb3dzZXIpeyBzZXRDdXJyZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSl9O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2IGZsZXgtY29sdW1uIG5hdi1waWxscyBtdC0yXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdi1saW5rICR7Y3VycmVudCA9PT0gXCIvaW5zdHJ1Y3RvclwiICYmIFwiYWN0aXZlXCJ9YH0+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlck5hdjsiXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJVc2VyTmF2IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav/UserNav.js\n");

/***/ })

});