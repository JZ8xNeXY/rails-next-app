/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/CurrentUserFetch.tsx":
/*!*********************************************!*\
  !*** ./src/components/CurrentUserFetch.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\nconst CurrentUserFetch = () => {\n  const [user, setUser] = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__.useUserState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (user.isFetched) {\n      return;\n    }\n    if (localStorage.getItem('access-token')) {\n      const url = \"http://localhost:3000/api/v1\" + '/current/user';\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url, {\n        headers: {\n          'Content-Type': 'application/json',\n          'access-token': localStorage.getItem('access-token'),\n          client: localStorage.getItem('client'),\n          uid: localStorage.getItem('uid')\n        }\n      }).then(res => {\n        setUser(_objectSpread(_objectSpread(_objectSpread({}, user), res.data), {}, {\n          isSignedIn: true,\n          isFetched: true\n        }));\n      }).catch(err => {\n        console.log(err.message);\n        setUser(_objectSpread(_objectSpread({}, user), {}, {\n          isFetched: true\n        }));\n      });\n    } else {\n      setUser(_objectSpread(_objectSpread({}, user), {}, {\n        isFetched: true\n      }));\n    }\n  }, [user, setUser]);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentUserFetch);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlckZldGNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUN2QjtBQUNvQjtBQUFBO0FBQUE7QUFFckQsTUFBTU8sZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTtFQUM3QixNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdQLG1FQUFZLENBQUMsQ0FBQztFQUV0Q0QsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSU8sSUFBSSxDQUFDRSxTQUFTLEVBQUU7TUFDbEI7SUFDRjtJQUVBLElBQUlDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQ3hDLE1BQU1DLEdBQUcsR0FBR0MsOEJBQW9DLEdBQUcsZUFBZTtNQUNsRWQsaURBQ00sQ0FBQ2EsR0FBRyxFQUFFO1FBQ1JLLE9BQU8sRUFBRTtVQUNQLGNBQWMsRUFBRSxrQkFBa0I7VUFDbEMsY0FBYyxFQUFFUCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxjQUFjLENBQUM7VUFDcERPLE1BQU0sRUFBRVIsWUFBWSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQ3RDUSxHQUFHLEVBQUVULFlBQVksQ0FBQ0MsT0FBTyxDQUFDLEtBQUs7UUFDakM7TUFDRixDQUFDLENBQUMsQ0FDRFMsSUFBSSxDQUFFQyxHQUFrQixJQUFLO1FBQzVCYixPQUFPLENBQUFjLGFBQUEsQ0FBQUEsYUFBQSxDQUFBQSxhQUFBLEtBQ0ZmLElBQUksR0FDSmMsR0FBRyxDQUFDRSxJQUFJO1VBQ1hDLFVBQVUsRUFBRSxJQUFJO1VBQ2hCZixTQUFTLEVBQUU7UUFBSSxFQUNoQixDQUFDO01BQ0osQ0FBQyxDQUFDLENBQ0RnQixLQUFLLENBQUVDLEdBQWtDLElBQUs7UUFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQztRQUN4QnJCLE9BQU8sQ0FBQWMsYUFBQSxDQUFBQSxhQUFBLEtBQ0ZmLElBQUk7VUFDUEUsU0FBUyxFQUFFO1FBQUksRUFDaEIsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTTtNQUNMRCxPQUFPLENBQUFjLGFBQUEsQ0FBQUEsYUFBQSxLQUNGZixJQUFJO1FBQ1BFLFNBQVMsRUFBRTtNQUFJLEVBQ2hCLENBQUM7SUFDSjtFQUNGLENBQUMsRUFBRSxDQUFDRixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO0VBRW5CLE9BQU9ILHNFQUFBLENBQUFGLG9FQUFBLG1CQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsaUVBQWVHLGdCQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXJGZXRjaC50c3g/MTM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJ1xuXG5jb25zdCBDdXJyZW50VXNlckZldGNoID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VVc2VyU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIuaXNGZXRjaGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzcy10b2tlbicpKSB7XG4gICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgKyAnL2N1cnJlbnQvdXNlcidcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQodXJsLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzLXRva2VuJyksXG4gICAgICAgICAgICBjbGllbnQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGllbnQnKSxcbiAgICAgICAgICAgIHVpZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VpZCcpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXM6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICAuLi5yZXMuZGF0YSxcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IHRydWUsXG4gICAgICAgICAgICBpc0ZldGNoZWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEF4aW9zRXJyb3I8eyBlcnJvcjogc3RyaW5nIH0+KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgICAgaXNGZXRjaGVkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi51c2VyLFxuICAgICAgICBpc0ZldGNoZWQ6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3VzZXIsIHNldFVzZXJdKVxuXG4gIHJldHVybiA8PjwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50VXNlckZldGNoXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VVc2VyU3RhdGUiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeERFViIsIl9qc3hERVYiLCJDdXJyZW50VXNlckZldGNoIiwidXNlciIsInNldFVzZXIiLCJpc0ZldGNoZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsImdldCIsImhlYWRlcnMiLCJjbGllbnQiLCJ1aWQiLCJ0aGVuIiwicmVzIiwiX29iamVjdFNwcmVhZCIsImRhdGEiLCJpc1NpZ25lZEluIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CurrentUserFetch.tsx\n");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__]);\n([_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/app/src/components/Header.tsx\";\n\n\n\n\n\n\nconst Header = () => {\n  const [user] = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__.useUserState)();\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AppBar, {\n    position: \"static\",\n    sx: {\n      backgroundColor: 'white',\n      color: 'black',\n      boxShadow: 'none',\n      py: '12px'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Container, {\n      maxWidth: \"lg\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n              src: \"/logo.png\",\n              width: 133,\n              height: 40,\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined), user.isFetched && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n          children: [!user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"/sign_in\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {\n                color: \"primary\",\n                variant: \"contained\",\n                sx: {\n                  color: 'white',\n                  textTransform: 'none',\n                  fontSize: 16,\n                  borderRadius: 2,\n                  boxShadow: 'none'\n                },\n                children: \"Sign in\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 21\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 19\n            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {\n              color: \"primary\",\n              variant: \"outlined\",\n              sx: {\n                textTransform: 'none',\n                fontSize: 16,\n                borderRadius: 2,\n                boxShadow: 'none',\n                border: '1.5px solid #3EA8FF',\n                ml: 2\n              },\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 17\n          }, undefined), user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 35\n          }, undefined)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNOLENBQ04sRUFDQXJCLElBQUksQ0FBQ3VCLFVBQVUsSUFBSTNCLHNFQUFBLENBQUNQLDhDQUFHO1lBQUFrQixRQUFBLEVBQUVQLElBQUksQ0FBQzhCO1VBQUk7WUFBQVosUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQU0sQ0FBQztRQUFBLGVBQzFDLENBQ0g7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDRTtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNHO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ04sQ0FBQztBQUViLENBQUM7QUFFRCxpRUFBZXRCLE1BQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3g/YTY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBCYXIsIEJveCwgQnV0dG9uLCBDb250YWluZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyXSA9IHVzZVVzZXJTdGF0ZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQmFyXG4gICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXG4gICAgICBzeD17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgcHk6ICcxMnB4JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcHg6IDIgfX0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9sb2dvLnBuZ1wiIHdpZHRoPXsxMzN9IGhlaWdodD17NDB9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHt1c2VyLmlzRmV0Y2hlZCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7IXVzZXIuaXNTaWduZWRJbiAmJiAoXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbl9pblwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxLjVweCBzb2xpZCAjM0VBOEZGJyxcbiAgICAgICAgICAgICAgICAgICAgICBtbDogMixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt1c2VyLmlzU2lnbmVkSW4gJiYgPEJveD57dXNlci5uYW1lfTwvQm94Pn1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHBCYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiQXBwQmFyIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJMaW5rIiwidXNlVXNlclN0YXRlIiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiSGVhZGVyIiwidXNlciIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInB5IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsInB4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImlzRmV0Y2hlZCIsImlzU2lnbmVkSW4iLCJ2YXJpYW50IiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwibWwiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ }),

/***/ "./src/hooks/useGlobalState.ts":
/*!*************************************!*\
  !*** ./src/hooks/useGlobalState.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUserState: () => (/* binding */ useUserState)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);\nswr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useUserState = () => {\n  const fallbackData = {\n    id: 0,\n    name: '',\n    email: '',\n    isSignedIn: false,\n    isFetched: false\n  };\n  const {\n    data: state,\n    mutate: setState\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('user', null, {\n    fallbackData: fallbackData\n  });\n  return [state, setState];\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR2xvYmFsU3RhdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFFakIsTUFBTUMsWUFBWSxHQUFHQSxDQUFBLEtBQU07RUFTaEMsTUFBTUMsWUFBMkIsR0FBRztJQUNsQ0MsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFFRCxNQUFNO0lBQUVDLElBQUksRUFBRUMsS0FBSztJQUFFQyxNQUFNLEVBQUVDO0VBQVMsQ0FBQyxHQUFHWCwrQ0FBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDN0RFLFlBQVksRUFBRUE7RUFDaEIsQ0FBQyxDQUFDO0VBQ0YsT0FBTyxDQUFDTyxLQUFLLEVBQUVFLFFBQVEsQ0FBQztBQUMxQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaG9va3MvdXNlR2xvYmFsU3RhdGUudHM/NmYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuZXhwb3J0IGNvbnN0IHVzZVVzZXJTdGF0ZSA9ICgpID0+IHtcbiAgdHlwZSB1c2VyU3RhdGVUeXBlID0ge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgaXNTaWduZWRJbjogYm9vbGVhblxuICAgIGlzRmV0Y2hlZDogYm9vbGVhblxuICB9XG5cbiAgY29uc3QgZmFsbGJhY2tEYXRhOiB1c2VyU3RhdGVUeXBlID0ge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICBpc0ZldGNoZWQ6IGZhbHNlLFxuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBzdGF0ZSwgbXV0YXRlOiBzZXRTdGF0ZSB9ID0gdXNlU1dSKCd1c2VyJywgbnVsbCwge1xuICAgIGZhbGxiYWNrRGF0YTogZmFsbGJhY2tEYXRhLFxuICB9KVxuICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV0gYXMgW3VzZXJTdGF0ZVR5cGUsICh2YWx1ZTogdXNlclN0YXRlVHlwZSkgPT4gdm9pZF1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VVc2VyU3RhdGUiLCJmYWxsYmFja0RhdGEiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImlzU2lnbmVkSW4iLCJpc0ZldGNoZWQiLCJkYXRhIiwic3RhdGUiLCJtdXRhdGUiLCJzZXRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useGlobalState.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_destyle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/destyle.css */ \"./src/styles/destyle.css\");\n/* harmony import */ var _styles_destyle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_destyle_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/CurrentUserFetch */ \"./src/components/CurrentUserFetch.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/createEmotionCache */ \"./src/styles/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_6__, _components_Header__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_6__, _components_Header__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/app/src/pages/_app.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\n\n\n\n// Client-side cache, shared for the whole session of the user in the browser.\n\nconst clientSideEmotionCache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\nfunction MyApp(props) {\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {\n    value: emotionCache,\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.wrapper,\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n          css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.component,\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ3pCO0FBQ2dCO0FBQ0M7QUFFdEI7QUFDRDtBQUMrQjtBQUNwQjtBQUNQO0FBRTJCO0FBQzFCOztBQUVsQztBQUFBO0FBQ0EsTUFBTVksc0JBQXNCLEdBQUdKLHNFQUFrQixDQUFDLENBQUM7QUFNcEMsU0FBU0ssS0FBS0EsQ0FBQ0MsS0FBaUIsRUFBZTtFQUM1RCxNQUFNO0lBQUVDLFNBQVM7SUFBRUMsWUFBWSxHQUFHSixzQkFBc0I7SUFBRUs7RUFBVSxDQUFDLEdBQUdILEtBQUs7RUFDN0UsT0FDRUgsdUVBQUEsQ0FBQ1gseURBQWE7SUFBQ2tCLEtBQUssRUFBRUYsWUFBYTtJQUFBRyxRQUFBLEVBQ2pDUix1RUFBQSxDQUFDUiwrREFBYTtNQUFDTSxLQUFLLEVBQUVBLHNEQUFNO01BQUFVLFFBQUEsR0FFMUJSLHVFQUFBLENBQUNULGtFQUFXO1FBQUFrQixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRSxDQUFDLEVBQ2ZaLHVFQUFBLENBQUNOLG9FQUFnQjtRQUFBZSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRSxDQUFDLEVBQ3BCWix1RUFBQSxDQUFDViw4Q0FBRztRQUFDdUIsR0FBRyxFQUFFakIsMkNBQU0sQ0FBQ2tCLE9BQVE7UUFBQU4sUUFBQSxHQUN2QlIsdUVBQUEsQ0FBQ0wsMERBQU07VUFBQWMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQUUsQ0FBQyxFQUNWWix1RUFBQSxDQUFDViw4Q0FBRztVQUFDdUIsR0FBRyxFQUFFakIsMkNBQU0sQ0FBQ21CLFNBQVU7VUFBQVAsUUFBQSxFQUN6QlIsdUVBQUEsQ0FBQ0ksU0FBUyxFQUFBWSxhQUFBLEtBQUtWLFNBQVM7WUFBQUcsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLE9BQUc7UUFBQztVQUFBSCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FDekIsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUNILENBQUMsRUFDTlosdUVBQUEsQ0FBQ0ksU0FBUyxFQUFBWSxhQUFBLEtBQUtWLFNBQVM7UUFBQUcsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQUcsQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNmO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0gsQ0FBQztBQUVwQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FjaGVQcm92aWRlciwgRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJ0Avc3R5bGVzL2Rlc3R5bGUuY3NzJ1xuaW1wb3J0IEN1cnJlbnRVc2VyRmV0Y2ggZnJvbSAnQC9jb21wb25lbnRzL0N1cnJlbnRVc2VyRmV0Y2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICdAL3N0eWxlcydcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICdAL3N0eWxlcy9jcmVhdGVFbW90aW9uQ2FjaGUnXG5pbXBvcnQgdGhlbWUgZnJvbSAnQC9zdHlsZXMvdGhlbWUnXG5cbi8vIENsaWVudC1zaWRlIGNhY2hlLCBzaGFyZWQgZm9yIHRoZSB3aG9sZSBzZXNzaW9uIG9mIHRoZSB1c2VyIGluIHRoZSBicm93c2VyLlxuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpXG5cbmludGVyZmFjZSBNeUFwcFByb3BzIGV4dGVuZHMgQXBwUHJvcHMge1xuICBlbW90aW9uQ2FjaGU/OiBFbW90aW9uQ2FjaGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHM6IE15QXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8Q3VycmVudFVzZXJGZXRjaCAvPlxuICAgICAgICA8Qm94IGNzcz17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8Qm94IGNzcz17c3R5bGVzLmNvbXBvbmVudH0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9DYWNoZVByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FjaGVQcm92aWRlciIsIkJveCIsIkNzc0Jhc2VsaW5lIiwiVGhlbWVQcm92aWRlciIsIlJlYWN0IiwiQ3VycmVudFVzZXJGZXRjaCIsIkhlYWRlciIsInN0eWxlcyIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsInRoZW1lIiwianN4REVWIiwiX2pzeERFViIsImNsaWVudFNpZGVFbW90aW9uQ2FjaGUiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIiwidmFsdWUiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNzcyIsIndyYXBwZXIiLCJjb21wb25lbnQiLCJfb2JqZWN0U3ByZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/createEmotionCache.ts":
/*!******************************************!*\
  !*** ./src/styles/createEmotionCache.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n  return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: 'css'\n  });\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUUzQyxTQUFTQyxrQkFBa0JBLENBQUEsRUFBaUI7RUFDekQsT0FBT0QsMERBQVcsQ0FBQztJQUFFRSxHQUFHLEVBQUU7RUFBTSxDQUFDLENBQUM7QUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzPzBlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlLCB7IEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL2NhY2hlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKTogRW1vdGlvbkNhY2hlIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/createEmotionCache.ts\n");

/***/ }),

/***/ "./src/styles/index.ts":
/*!*****************************!*\
  !*** ./src/styles/index.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: () => (/* binding */ styles)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\nconst styles = {\n  pageMinHeight:  false ? 0 : {\n    name: \"181221j-pageMinHeight\",\n    styles: \"min-height:calc(100vh - 64px);label:pageMinHeight;\",\n    map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL3N0eWxlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHaUIiLCJmaWxlIjoiL2FwcC9zcmMvc3R5bGVzL2luZGV4LnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIHBhZ2VNaW5IZWlnaHQ6IGNzcyh7XG4gICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDY0cHgpJyxcbiAgfSksXG59XG4iXX0= */\",\n    toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n  }\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvQztBQUU3QixNQUFNQyxNQUFNLEdBQUc7RUFDcEJDLGFBQWEsRUFBRSxVQUFGO0lBQUFDLElBQUE7SUFBQUYsTUFBQTtJQUFBRyxHQUFBO0lBQUFDLFFBQUEsRUFBQUM7RUFBQTtBQUdmLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9zdHlsZXMvaW5kZXgudHM/MjRmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgcGFnZU1pbkhlaWdodDogY3NzKHtcbiAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNjRweCknLFxuICB9KSxcbn1cbiJdLCJuYW1lcyI6WyJjc3MiLCJzdHlsZXMiLCJwYWdlTWluSGVpZ2h0IiwibmFtZSIsIm1hcCIsInRvU3RyaW5nIiwiX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/index.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n  palette: {\n    primary: {\n      main: '#3EA8FF'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.red.A400\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ1E7O0FBRWxEO0FBQ0EsTUFBTUUsS0FBSyxHQUFHRCxpRUFBVyxDQUFDO0VBQ3hCRSxPQUFPLEVBQUU7SUFDUEMsT0FBTyxFQUFFO01BQ1BDLElBQUksRUFBRTtJQUNSLENBQUM7SUFDREMsU0FBUyxFQUFFO01BQ1RELElBQUksRUFBRTtJQUNSLENBQUM7SUFDREUsS0FBSyxFQUFFO01BQ0xGLElBQUksRUFBRUwscURBQUcsQ0FBQ1E7SUFDWjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsaUVBQWVOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyMzRUE4RkYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzE5ODU3YicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iXSwibmFtZXMiOlsicmVkIiwiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./src/styles/destyle.css":
/*!********************************!*\
  !*** ./src/styles/destyle.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();