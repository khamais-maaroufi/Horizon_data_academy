"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/become-instructor",{

/***/ "./pages/user/become-instructor.js":
/*!*****************************************!*\
  !*** ./pages/user/become-instructor.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar becomeInstructor = function() {\n    _s();\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.Context), user = ref1.state.user;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center square\",\n                children: \"Become Instructor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-6 offset-md-3 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserSwitchOutlined, {\n                                    className: \"display-1 pb-3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Welcome to Horizon data Academy, you're our partner now.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    className: \"mb-3\",\n                                    type: \"primary\",\n                                    \"block-shape\": \"round\",\n                                    icon: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.LoadingOutlined, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SettingOutlined, {}, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(becomeInstructor, \"K5sapT8SJpWsnwobJZZnB8W0WCA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (becomeInstructor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2JlY29tZS1pbnN0cnVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDaUI7QUFDTDtBQUNSO0FBRUw7QUFDYztBQUNtQjs7O0FBR3pELEdBQUssQ0FBQ1UsZ0JBQWdCLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQzVCLEVBQU87SUFDUCxHQUFLLENBQXlCVCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyQ1UsT0FBTyxHQUFnQlYsR0FBZSxLQUE3QlcsVUFBVSxHQUFJWCxHQUFlO0lBQzdDLEdBQUssQ0FBbUJDLElBQW1CLEdBQW5CQSxpREFBVSxDQUFDQyw2Q0FBTyxHQUEzQlUsSUFBSSxHQUFLWCxJQUFtQixDQUFwQ1ksS0FBSyxDQUFHRCxJQUFJO0lBS25CLE1BQU07O3dGQUVHRSxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBOEI7MEJBQUMsQ0FBaUI7Ozs7Ozt3RkFDN0RDLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUFXO3NHQUNyQkMsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQUs7MEdBQ2ZDLENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUFrQzs4R0FDNUNDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUFNOzs0R0FDaEJULGlFQUFrQjtvQ0FBQ1MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7NEdBQzdDRSxDQUFFOzs7Ozs0R0FDRkMsQ0FBRTs4Q0FBQyxDQUF3RDs7Ozs7OzRHQUMzREQsQ0FBRTs7Ozs7NEdBQ0ZkLHdDQUFNO29DQUFDWSxTQUFTLEVBQUMsQ0FBTTtvQ0FBQ0ksSUFBSSxFQUFDLENBQVM7b0NBQUNDLENBQVcsY0FBQyxDQUFPO29DQUMzREMsSUFBSSxFQUFFWCxPQUFPLCtFQUFJTiw4REFBZSxtSEFBTUMsOERBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpGLENBQUM7R0E1QktJLGdCQUFnQjtBQThCdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvYmVjb21lLWluc3RydWN0b3IuanM/YThhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtMb2FkaW5nT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCwgVXNlclN3aXRjaE91dGxpbmVkfVxyXG5mcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBVc2VyUm91dGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL1VzZXJSb3V0ZVwiO1xyXG5cclxuXHJcbmNvbnN0IGJlY29tZUluc3RydWN0b3IgPSAoKSA9PiB7XHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7c3RhdGU6IHt1c2VyfX0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBzcXVhcmVcIj5CZWNvbWUgSW5zdHJ1Y3RvcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlclN3aXRjaE91dGxpbmVkIGNsYXNzTmFtZT1cImRpc3BsYXktMSBwYi0zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5XZWxjb21lIHRvIEhvcml6b24gZGF0YSBBY2FkZW15LCB5b3UncmUgb3VyIHBhcnRuZXIgbm93LjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtYi0zXCIgdHlwZT1cInByaW1hcnlcIiBibG9jay1zaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2xvYWRpbmcgPyA8TG9hZGluZ091dGxpbmVkLz4gOiA8U2V0dGluZ091dGxpbmVkLz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmVjb21lSW5zdHJ1Y3RvcjsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiQnV0dG9uIiwiTG9hZGluZ091dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiVXNlclN3aXRjaE91dGxpbmVkIiwidG9hc3QiLCJVc2VyUm91dGUiLCJiZWNvbWVJbnN0cnVjdG9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VyIiwic3RhdGUiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImJyIiwiaDIiLCJ0eXBlIiwiYmxvY2stc2hhcGUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/become-instructor.js\n");

/***/ })

});