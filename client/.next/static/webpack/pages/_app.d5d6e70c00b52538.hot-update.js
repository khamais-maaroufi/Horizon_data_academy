"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\n//import { Router } from 'express';\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Item = antd__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, SubMenu = antd__WEBPACK_IMPORTED_MODULE_9__.Menu.SubMenu, ItemGroup = antd__WEBPACK_IMPORTED_MODULE_9__.Menu.ItemGroup;\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), current = ref[0], setCurrent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context), state = ref1.state, dispatch = ref1.dispatch;\n    var user = state.user;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setCurrent( true && window.location.pathname);\n        // if (process.browser){ setCurrent(window.location.pathname)};\n        console.log(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    var logout = function() {\n        var _ref = _asyncToGenerator(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        dispatch({\n                            type: \"LOGOUT\"\n                        });\n                        window.localStorage.removeItem(\"user\");\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/api/logout\");\n                    case 4:\n                        data = _ctx.sent.data;\n                        (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(data.message);\n                        router.push('/login');\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                onClick: function(e) {\n                    return setCurrent(e.key);\n                },\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        children: \"Suggestions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 40,\n                        columnNumber: 24\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, \"/\", false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this),\n            user === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                        onClick: function(e) {\n                            return setCurrent(e.key);\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 49,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, _this)\n                    }, \"/login\", false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                        onClick: function(e) {\n                            return setCurrent(e.key);\n                        },\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/register\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 54,\n                                columnNumber: 40\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, _this)\n                    }, \"/register\", false, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true),\n            user !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SubMenu, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.CoffeeOutlined, {}, void 0, false, void 0, void 0),\n                title: user && user.name,\n                className: \"float-right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ItemGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/user\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, _this)\n                        }, \"/user\", false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {\n                            onClick: logout,\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.LogoutOutlined, {}, void 0, false, void 0, void 0),\n                            className: \"float-right\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this));\n};\n_s(TopNav, \"bp+2bVN8wLZqmKZUSZ90tmfaZqo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxrREFBSTs0QkFBQzZDLElBQUksRUFBQyxDQUFXO2tIQUFFQyxDQUFDOzBDQUFDLENBQVE7Ozs7Ozs7Ozs7O3VCQUR4QixDQUFXOzs7Ozs7O1lBTzNCeEIsSUFBSSxLQUFLLElBQUksZ0ZBQ1ZQLE9BQU87Z0JBQUM2QixJQUFJLDhFQUFHdkMsOERBQWM7Z0JBQUkwQyxLQUFLLEVBQUV6QixJQUFJLElBQUlBLElBQUksQ0FBQzBCLElBQUk7Z0JBQUVDLFNBQVMsRUFBQyxDQUFhO3NHQUM5RWpDLFNBQVM7O29HQUNMRixJQUFJO2tIQUNKZCxrREFBSTtnQ0FBQzZDLElBQUksRUFBQyxDQUFPO3NIQUNiQyxDQUFDOzhDQUFDLENBQVM7Ozs7Ozs7Ozs7OzJCQUZOLENBQU87Ozs7O29HQUtwQmhDLElBQUk7NEJBQUMyQixPQUFPLEVBQUVWLE1BQU07NEJBQUVhLElBQUksOEVBQUd4Qyw4REFBYzs0QkFBSTZDLFNBQVMsRUFBQyxDQUFhO3NDQUFDLENBRXhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQixDQUFDO0dBNURLaEMsTUFBTTs7UUFLT0osa0RBQVM7OztLQUx0QkksTUFBTTtBQThEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7QXBwc3RvcmVPdXRsaW5lZCwgTG9naW5PdXRsaW5lZCwgVXNlckFkZE91dGxpbmVkLCBMb2dvdXRPdXRsaW5lZCwgQ29mZmVlT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcmVhY3REb20gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHt0b2FzdH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuLy9pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuY29uc3Qge0l0ZW0sIFN1Yk1lbnUsIEl0ZW1Hcm91cH0gPSBNZW51O1xuXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50KHByb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgIC8vIGlmIChwcm9jZXNzLmJyb3dzZXIpeyBzZXRDdXJyZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSl9O1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XG5cbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYygpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiTE9HT1VUXCJ9KTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9sb2dvdXRcIik7XG4gICAgICAgIHRvYXN0KGRhdGEubWVzc2FnZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfT5cbiAgICAgICAgPEl0ZW0ga2V5PVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX0gaWNvbj17PEFwcHN0b3JlT3V0bGluZWQvPn0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+U3VnZ2VzdGlvbnM8L2E+PC9MaW5rPlxuXG4gICAgICAgIDwvSXRlbT5cblxuICAgICAgICBcblxuICAgICAgICB7dXNlciA9PT0gbnVsbCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxJdGVtIGtleT1cIi9sb2dpblwiIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX0gaWNvbj17PExvZ2luT3V0bGluZWQvPn0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPkxvZ2luPC9hPjwvTGluaz5cblxuICAgICAgICAgICAgICAgIDwvSXRlbT5cblxuICAgICAgICAgICAgICAgIDxJdGVtIGtleT1cIi9yZWdpc3RlclwiIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX0gaWNvbj17PFVzZXJBZGRPdXRsaW5lZC8+fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+cmVnaXN0ZXI8L2E+PC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyB1c2VyICE9PSBudWxsICYmIChcbiAgICAgICAgICAgIDxTdWJNZW51IGljb249ezxDb2ZmZWVPdXRsaW5lZC8+fSB0aXRsZT17dXNlciAmJiB1c2VyLm5hbWV9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPEl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgIDxJdGVtIG9uQ2xpY2s9e2xvZ291dH0gaWNvbj17PExvZ291dE91dGxpbmVkLz59IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgIDwvSXRlbUdyb3VwPlxuICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICApfSAgICBcbiAgICA8L01lbnU+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2OyJdLCJuYW1lcyI6WyJNZW51IiwiTGluayIsIkFwcHN0b3JlT3V0bGluZWQiLCJMb2dpbk91dGxpbmVkIiwiVXNlckFkZE91dGxpbmVkIiwiTG9nb3V0T3V0bGluZWQiLCJDb2ZmZWVPdXRsaW5lZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInJlYWN0RG9tIiwiQ29udGV4dCIsImF4aW9zIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJJdGVtIiwiU3ViTWVudSIsIkl0ZW1Hcm91cCIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJyb3V0ZXIiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwiZGF0YSIsInR5cGUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZ2V0IiwibWVzc2FnZSIsInB1c2giLCJtb2RlIiwic2VsZWN0ZWRLZXlzIiwib25DbGljayIsImUiLCJrZXkiLCJpY29uIiwiaHJlZiIsImEiLCJ0aXRsZSIsIm5hbWUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ })

});