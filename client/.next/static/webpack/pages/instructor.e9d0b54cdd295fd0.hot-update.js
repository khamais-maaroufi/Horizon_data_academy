"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/instructor",{

/***/ "./pages/instructor/index.js":
/*!***********************************!*\
  !*** ./pages/instructor/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_routes_instructorRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/routes/instructorRoute */ \"./components/routes/instructorRoute.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar InstructorIndex = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), courses = ref[0], setCourses = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        loadCourses();\n    }, []);\n    var loadCourses = function() {\n        var _ref = _asyncToGenerator(C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_Khemais_Desktop_Horizon_Data_Academy_main_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"api/instructor-courses\");\n                    case 2:\n                        data = _ctx.sent.data;\n                        setCourses(data);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function loadCourses() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_routes_instructorRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center square\",\n                children: \"Instructor Dashboard \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            courses && courses.map(function(course) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"media pt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                size: 80,\n                                src: course.image ? course.image.Location : \"https://media.istockphoto.com/vectors/vector-illustration-online-education-or-elearning-concept-vector-id1212272730?k=20&m=1212272730&s=612x612&w=0&h=LChXtmzoxyOGm1zJtZALofThZuiwJG_arYkTkoIhL4I=\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"media-body pl-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"row\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"col\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            href: '/instructor'\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 33\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Khemais\\\\Desktop\\\\Horizon_Data_Academy-main\\\\client\\\\pages\\\\instructor\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this));\n};\n_s(InstructorIndex, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = InstructorIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstructorIndex);\nvar _c;\n$RefreshReg$(_c, \"InstructorIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnN0cnVjdG9yL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUM0QztBQUM1QjtBQUNkO0FBQ0M7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDTyxlQUFlLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUUzQixHQUFLLENBQXlCTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWxDTSxPQUFPLEdBQWdCTixHQUFZLEtBQTFCTyxVQUFVLEdBQUlQLEdBQVk7SUFFMUNDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYk8sV0FBVztJQUNmLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNBLFdBQVc7eU1BQUcsUUFBUSxXQUFJLENBQUM7Z0JBQ3RCQyxJQUFJOzs7OzsrQkFBVVgsZ0RBQVMsQ0FBQyxDQUF3Qjs7d0JBQWhEVyxJQUFJLGFBQUpBLElBQUk7d0JBQ1hGLFVBQVUsQ0FBQ0UsSUFBSTs7Ozs7O1FBQ25CLENBQUM7d0JBSEtELFdBQVc7Ozs7SUFLakIsTUFBTSw2RUFDRFQsMEVBQWU7O3dGQUNYWSxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBOEI7MEJBQUMsQ0FBcUI7Ozs7OztZQUVqRU4sT0FBTyxJQUFJQSxPQUFPLENBQUNPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU07OEJBQzNCLE1BQ2QsQ0FBQzswR0FBY0MsQ0FBRzt3QkFBQ0gsU0FBUyxFQUFDLENBQVk7O3dHQUN0QlYsd0NBQU07Z0NBQUNjLElBQUksRUFBRSxFQUFFO2dDQUFFQyxHQUFHLEVBQUVILE1BQU0sQ0FBQ0ksS0FBSyxHQUFHSixNQUFNLENBQUNJLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQW9NOzs7Ozs7d0dBQ2pRSixDQUFHO2dDQUFDSCxTQUFTLEVBQUMsQ0FBaUI7c0hBQzNCRyxDQUFHO29DQUFDSCxTQUFTLEVBQUMsQ0FBSzswSEFDZkcsQ0FBRzt3Q0FBQ0gsU0FBUyxFQUFDLENBQUs7OEhBQ2ZULGtEQUFJOzRDQUFDaUIsSUFBSSxFQUFFLENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpELENBQUM7R0FsQ0tmLGVBQWU7S0FBZkEsZUFBZTtBQW9DckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnN0cnVjdG9yL2luZGV4LmpzP2RmZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEluc3RydWN0b3JSb3V0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvaW5zdHJ1Y3RvclJvdXRlXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5zdHJ1Y3RvckluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRDb3Vyc2VzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZENvdXJzZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiYXBpL2luc3RydWN0b3ItY291cnNlc1wiKTtcclxuICAgICAgICBzZXRDb3Vyc2VzKGRhdGEpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyIHNxdWFyZVwiPkluc3RydWN0b3IgRGFzaGJvYXJkIDwvaDE+XHJcbiAgICAgICAgICAgIHsvKjxwcmU+e0pTT04uc3RyaW5naWZ5KGNvdXJzZXMsIG51bGwsIDQpfTwvcHJlPiovfVxyXG4gICAgICAgICAgICB7Y291cnNlcyAmJiBjb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs4MH0gc3JjPXtjb3Vyc2UuaW1hZ2UgPyBjb3Vyc2UuaW1hZ2UuTG9jYXRpb24gOiBcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3ZlY3RvcnMvdmVjdG9yLWlsbHVzdHJhdGlvbi1vbmxpbmUtZWR1Y2F0aW9uLW9yLWVsZWFybmluZy1jb25jZXB0LXZlY3Rvci1pZDEyMTIyNzI3MzA/az0yMCZtPTEyMTIyNzI3MzAmcz02MTJ4NjEyJnc9MCZoPUxDaFh0bXpveHlPR20xekp0WkFMb2ZUaFp1aXdKR19hcllrVGtvSWhMNEk9XCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHkgcGwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2luc3RydWN0b3InfT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0luc3RydWN0b3JSb3V0ZT5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3RvckluZGV4OyJdLCJuYW1lcyI6WyJheGlvcyIsIkluc3RydWN0b3JSb3V0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXZhdGFyIiwiTGluayIsIlJlYWN0IiwiSW5zdHJ1Y3RvckluZGV4IiwiY291cnNlcyIsInNldENvdXJzZXMiLCJsb2FkQ291cnNlcyIsImRhdGEiLCJnZXQiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsImNvdXJzZSIsImRpdiIsInNpemUiLCJzcmMiLCJpbWFnZSIsIkxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/instructor/index.js\n");

/***/ })

});