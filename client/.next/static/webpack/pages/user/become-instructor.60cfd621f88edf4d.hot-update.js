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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar becomeInstructor = function() {\n    _s();\n    //state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.Context), user = ref2.state.user;\n    var becomeInstructor1 = function() {\n        //console.log(\"we will redirect you to a forum\");\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/make-instructor\", {\n            password: password\n        }).then(function(res) {\n            if (res.data === \"y\") {\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Token is wrong retry again');\n                setLoading(false);\n            } else {\n                if (res.data === false) {\n                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"You are already registred as an instructor\");\n                    setLoading(false);\n                    window;\n                    window.location.href = \"/instructor\";\n                } else {\n                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"You are registred as an instructor successfully\");\n                    setLoading(false);\n                    window.location.href = \"/instructor\";\n                }\n            }\n        //window.location.href = res.data;\n        }).catch(function(err) {\n            console.log(err.response.status);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"setting up an instructor account Failed! Try agin.\");\n            setLoading(false);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center square\",\n                children: \"Become Instructor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-6 offset-md-3 text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserSwitchOutlined, {\n                                    className: \"display-1 pb-3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Welcome to Horizon data Academy, you're our partner now.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    className: \"form-control mb-4 p-4\",\n                                    value: password,\n                                    onChange: function(e) {\n                                        return setPassword(e.target.value);\n                                    },\n                                    placeholder: \"Enter the Token\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    className: \"mb-3\",\n                                    type: \"primary\",\n                                    \"block-shape\": \"round\",\n                                    icon: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.LoadingOutlined, {}, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SettingOutlined, {}, void 0, false, void 0, void 0),\n                                    size: \"large\",\n                                    onClick: becomeInstructor1,\n                                    disabled: user && user.role && user.role.includes(\"instructor\") || loading,\n                                    children: loading ? \"Processing...\" : \"Subscribing Setup\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\user\\\\become-instructor.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(becomeInstructor, \"r438V0b91DPk4zIMOGYcQszS8DU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (becomeInstructor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQyxDQUFNO29DQUFDSyxJQUFJLEVBQUMsQ0FBUztvQ0FBQ08sQ0FBVyxjQUFDLENBQU87b0NBQzNEQyxJQUFJLEVBQUVuQyxPQUFPLCtFQUFJTiw4REFBZSxtSEFBTUMsOERBQWU7b0NBQUl5QyxJQUFJLEVBQUMsQ0FBTztvQ0FDckVDLE9BQU8sRUFBRXRDLGlCQUFnQjtvQ0FDekJ1QyxRQUFRLEVBQUVsQyxJQUFJLElBQUlBLElBQUksQ0FBQ21DLElBQUksSUFBSW5DLElBQUksQ0FBQ21DLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQVksZ0JBQUt4QyxPQUFPOzhDQUN6RUEsT0FBTyxHQUFHLENBQWUsaUJBQUcsQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzVFLENBQUM7R0E3REtELGdCQUFnQjtBQStEdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvYmVjb21lLWluc3RydWN0b3IuanM/YThhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtMb2FkaW5nT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCwgVXNlclN3aXRjaE91dGxpbmVkfVxyXG5mcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBVc2VyUm91dGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL1VzZXJSb3V0ZVwiO1xyXG5cclxuY29uc3QgYmVjb21lSW5zdHJ1Y3RvciA9ICgpID0+IHtcclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7c3RhdGU6IHt1c2VyfX0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBiZWNvbWVJbnN0cnVjdG9yID0gKCkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ3ZSB3aWxsIHJlZGlyZWN0IHlvdSB0byBhIGZvcnVtXCIpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvbWFrZS1pbnN0cnVjdG9yXCIsIHtwYXNzd29yZH0pLnRoZW4oKHJlcykgPT57XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YSA9PT0gXCJ5XCIpeyBcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKCdUb2tlbiBpcyB3cm9uZyByZXRyeSBhZ2FpbicpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHtpZiAocmVzLmRhdGEgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiWW91IGFyZSBhbHJlYWR5IHJlZ2lzdHJlZCBhcyBhbiBpbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaW5zdHJ1Y3RvclwiO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiWW91IGFyZSByZWdpc3RyZWQgYXMgYW4gaW5zdHJ1Y3RvciBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaW5zdHJ1Y3RvclwiO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgdG9hc3QoXCJzZXR0aW5nIHVwIGFuIGluc3RydWN0b3IgYWNjb3VudCBGYWlsZWQhIFRyeSBhZ2luLlwiKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBzcXVhcmVcIj5CZWNvbWUgSW5zdHJ1Y3RvcjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlclN3aXRjaE91dGxpbmVkIGNsYXNzTmFtZT1cImRpc3BsYXktMSBwYi0zXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5XZWxjb21lIHRvIEhvcml6b24gZGF0YSBBY2FkZW15LCB5b3UncmUgb3VyIHBhcnRuZXIgbm93LjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9ICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBUb2tlblwiIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWItM1wiIHR5cGU9XCJwcmltYXJ5XCIgYmxvY2stc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtsb2FkaW5nID8gPExvYWRpbmdPdXRsaW5lZC8+IDogPFNldHRpbmdPdXRsaW5lZC8+fSBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YmVjb21lSW5zdHJ1Y3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyICYmIHVzZXIucm9sZSAmJiB1c2VyLnJvbGUuaW5jbHVkZXMoXCJpbnN0cnVjdG9yXCIpIHx8IGxvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIlByb2Nlc3NpbmcuLi5cIiA6IFwiU3Vic2NyaWJpbmcgU2V0dXBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmVjb21lSW5zdHJ1Y3RvcjsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiQnV0dG9uIiwiTG9hZGluZ091dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiVXNlclN3aXRjaE91dGxpbmVkIiwidG9hc3QiLCJVc2VyUm91dGUiLCJiZWNvbWVJbnN0cnVjdG9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlciIsInN0YXRlIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyb3IiLCJzdWNjZXNzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImJyIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJibG9jay1zaGFwZSIsImljb24iLCJzaXplIiwib25DbGljayIsImRpc2FibGVkIiwicm9sZSIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/become-instructor.js\n");

/***/ })

});