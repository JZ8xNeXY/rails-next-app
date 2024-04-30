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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_icons_material_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material/Article */ \"@mui/icons-material/Article\");\n/* harmony import */ var _mui_icons_material_Article__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Article__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"@mui/icons-material/Logout\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Person */ \"@mui/icons-material/Person\");\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_8__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__]);\n([_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_8__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/app/src/components/Header.tsx\";\n\n\n\n\n\n\n\n\n\n\n\nconst Header = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  const [user] = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_8__.useUserState)();\n  const {\n    0: anchorEl,\n    1: setAnchorEl\n  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n  const open = Boolean(anchorEl);\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {\n    position: \"static\",\n    sx: {\n      backgroundColor: 'white',\n      color: 'black',\n      boxShadow: 'none',\n      py: '12px'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n      maxWidth: \"lg\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              src: \"/logo.png\",\n              width: 133,\n              height: 40,\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, undefined), user.isFetched && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n          children: [!user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n              color: \"primary\",\n              variant: \"contained\",\n              sx: {\n                color: 'white',\n                textTransform: 'none',\n                fontSize: 16,\n                borderRadius: 2,\n                boxShadow: 'none'\n              },\n              onClick: () => {\n                router.push('/sign_in');\n              },\n              children: \"Sign in\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 19\n            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n              color: \"primary\",\n              variant: \"outlined\",\n              sx: {\n                textTransform: 'none',\n                fontSize: 16,\n                lineHeight: '27px',\n                borderRadius: 2,\n                boxShadow: 'none',\n                border: '1.5px solid #3EA8FF',\n                ml: 2\n              },\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 17\n          }, undefined), user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            sx: {\n              display: 'flex'\n            },\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n              onClick: handleClick,\n              sx: {\n                p: 0\n              },\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 100,\n                  columnNumber: 23\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 21\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 19\n            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              sx: {\n                ml: 2\n              },\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                color: \"primary\",\n                variant: \"contained\",\n                sx: {\n                  color: 'white',\n                  textTransform: 'none',\n                  fontSize: 16,\n                  borderRadius: 2,\n                  width: 100,\n                  boxShadow: 'none'\n                },\n                children: \"Add new\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 21\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 19\n            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n              anchorEl: anchorEl,\n              id: \"account-menu\",\n              open: open,\n              onClose: handleClose,\n              onClick: handleClose,\n              children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                  pl: 2,\n                  py: 1\n                },\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                  sx: {\n                    fontWeight: 'bold'\n                  },\n                  children: user.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 23\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 126,\n                columnNumber: 21\n              }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 131,\n                columnNumber: 21\n              }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {\n                  children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((_mui_icons_material_Article__WEBPACK_IMPORTED_MODULE_0___default()), {\n                    fontSize: \"small\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 134,\n                    columnNumber: 25\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 133,\n                  columnNumber: 23\n                }, undefined), \"\\u8A18\\u4E8B\\u306E\\u7BA1\\u7406\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 132,\n                columnNumber: 21\n              }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/sign_out\",\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                  children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemIcon, {\n                    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      fontSize: \"small\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 141,\n                      columnNumber: 27\n                    }, undefined)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 140,\n                    columnNumber: 25\n                  }, undefined), \"\\u30B5\\u30A4\\u30F3\\u30A2\\u30A6\\u30C8\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 139,\n                  columnNumber: 23\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 21\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 17\n          }, undefined)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ047QUFDSTtBQWE3QjtBQUNRO0FBQ0Y7QUFDVztBQUNQO0FBQ3FCO0FBQUE7QUFBQTtBQUVyRCxNQUFNdUIsTUFBTSxHQUFHQSxDQUFBLEtBQU07RUFDbkIsTUFBTUMsTUFBTSxHQUFHUixzREFBUyxDQUFDLENBQUM7RUFDMUIsTUFBTSxDQUFDUyxJQUFJLENBQUMsR0FBR1AsbUVBQVksQ0FBQyxDQUFDO0VBQzdCLE1BQU07SUFBQSxHQUFDUSxRQUFRO0lBQUEsR0FBRUM7RUFBVyxJQUFJViwrQ0FBUSxDQUFxQixJQUFJLENBQUM7RUFDbEUsTUFBTVcsSUFBSSxHQUFHQyxPQUFPLENBQUNILFFBQVEsQ0FBQztFQUU5QixNQUFNSSxXQUFXLEdBQUlDLEtBQTBDLElBQUs7SUFDbEVKLFdBQVcsQ0FBQ0ksS0FBSyxDQUFDQyxhQUFhLENBQUM7RUFDbEMsQ0FBQztFQUNELE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCTixXQUFXLENBQUMsSUFBSSxDQUFDO0VBQ25CLENBQUM7RUFFRCxPQUNFUCxzRUFBQSxDQUFDakIsaURBQU07SUFDTCtCLFFBQVEsRUFBQyxRQUFRO0lBQ2pCQyxFQUFFLEVBQUU7TUFDRkMsZUFBZSxFQUFFLE9BQU87TUFDeEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRSxNQUFNO01BQ2pCQyxFQUFFLEVBQUU7SUFDTixDQUFFO0lBQUFDLFFBQUEsRUFFRnBCLHNFQUFBLENBQUNiLG9EQUFTO01BQUNrQyxRQUFRLEVBQUMsSUFBSTtNQUFDTixFQUFFLEVBQUU7UUFBRU8sRUFBRSxFQUFFO01BQUUsQ0FBRTtNQUFBRixRQUFBLEVBQ3JDcEIsc0VBQUEsQ0FBQ2YsOENBQUc7UUFDRjhCLEVBQUUsRUFBRTtVQUNGUSxPQUFPLEVBQUUsTUFBTTtVQUNmQyxjQUFjLEVBQUUsZUFBZTtVQUMvQkMsVUFBVSxFQUFFO1FBQ2QsQ0FBRTtRQUFBTCxRQUFBLEdBRUZwQixzRUFBQSxDQUFDZiw4Q0FBRztVQUFBbUMsUUFBQSxFQUNGcEIsc0VBQUEsQ0FBQ0wsa0RBQUk7WUFBQytCLElBQUksRUFBQyxHQUFHO1lBQUFOLFFBQUEsRUFDWnBCLHNFQUFBLENBQUNOLG1EQUFLO2NBQUNpQyxHQUFHLEVBQUMsV0FBVztjQUFDQyxLQUFLLEVBQUUsR0FBSTtjQUFDQyxNQUFNLEVBQUUsRUFBRztjQUFDQyxHQUFHLEVBQUM7WUFBTTtjQUFBQyxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFBRTtVQUFDO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUN4RDtRQUFDO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxZQUNKLENBQUMsRUFDTDdCLElBQUksQ0FBQzhCLFNBQVMsSUFDYm5DLHNFQUFBLENBQUFFLG9FQUFBO1VBQUFrQixRQUFBLEdBQ0csQ0FBQ2YsSUFBSSxDQUFDK0IsVUFBVSxJQUNmcEMsc0VBQUEsQ0FBQ2YsOENBQUc7WUFBQW1DLFFBQUEsR0FDRnBCLHNFQUFBLENBQUNkLGlEQUFNO2NBQ0wrQixLQUFLLEVBQUMsU0FBUztjQUNmb0IsT0FBTyxFQUFDLFdBQVc7Y0FDbkJ0QixFQUFFLEVBQUU7Z0JBQ0ZFLEtBQUssRUFBRSxPQUFPO2dCQUNkcUIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsWUFBWSxFQUFFLENBQUM7Z0JBQ2Z0QixTQUFTLEVBQUU7Y0FDYixDQUFFO2NBQ0Z1QixPQUFPLEVBQUVBLENBQUEsS0FBTTtnQkFDYnJDLE1BQU0sQ0FBQ3NDLElBQUksQ0FBQyxVQUFVLENBQUM7Y0FDekIsQ0FBRTtjQUFBdEIsUUFBQSxFQUNIO1lBRUQ7Y0FBQVcsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQVEsQ0FBQyxFQUNUbEMsc0VBQUEsQ0FBQ2QsaURBQU07Y0FDTCtCLEtBQUssRUFBQyxTQUFTO2NBQ2ZvQixPQUFPLEVBQUMsVUFBVTtjQUNsQnRCLEVBQUUsRUFBRTtnQkFDRnVCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pJLFVBQVUsRUFBRSxNQUFNO2dCQUNsQkgsWUFBWSxFQUFFLENBQUM7Z0JBQ2Z0QixTQUFTLEVBQUUsTUFBTTtnQkFDakIwQixNQUFNLEVBQUUscUJBQXFCO2dCQUM3QkMsRUFBRSxFQUFFO2NBQ04sQ0FBRTtjQUFBekIsUUFBQSxFQUNIO1lBRUQ7Y0FBQVcsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQVEsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNOLENBQ04sRUFDQTdCLElBQUksQ0FBQytCLFVBQVUsSUFDZHBDLHNFQUFBLENBQUNmLDhDQUFHO1lBQUM4QixFQUFFLEVBQUU7Y0FBRVEsT0FBTyxFQUFFO1lBQU8sQ0FBRTtZQUFBSCxRQUFBLEdBQzNCcEIsc0VBQUEsQ0FBQ1gscURBQVU7Y0FBQ29ELE9BQU8sRUFBRS9CLFdBQVk7Y0FBQ0ssRUFBRSxFQUFFO2dCQUFFK0IsQ0FBQyxFQUFFO2NBQUUsQ0FBRTtjQUFBMUIsUUFBQSxFQUM3Q3BCLHNFQUFBLENBQUNoQixpREFBTTtnQkFBQW9DLFFBQUEsRUFDTHBCLHNFQUFBLENBQUNsQixtRUFBVTtrQkFBQWlELFFBQUEsRUFBQUMsWUFBQTtrQkFBQUMsVUFBQTtrQkFBQUMsWUFBQTtnQkFBQSxZQUFFO2NBQUM7Z0JBQUFILFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLFlBQ1I7WUFBQztjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFDQyxDQUFDLEVBQ2JsQyxzRUFBQSxDQUFDZiw4Q0FBRztjQUFDOEIsRUFBRSxFQUFFO2dCQUFFOEIsRUFBRSxFQUFFO2NBQUUsQ0FBRTtjQUFBekIsUUFBQSxFQUNqQnBCLHNFQUFBLENBQUNkLGlEQUFNO2dCQUNMK0IsS0FBSyxFQUFDLFNBQVM7Z0JBQ2ZvQixPQUFPLEVBQUMsV0FBVztnQkFDbkJ0QixFQUFFLEVBQUU7a0JBQ0ZFLEtBQUssRUFBRSxPQUFPO2tCQUNkcUIsYUFBYSxFQUFFLE1BQU07a0JBQ3JCQyxRQUFRLEVBQUUsRUFBRTtrQkFDWkMsWUFBWSxFQUFFLENBQUM7a0JBQ2ZaLEtBQUssRUFBRSxHQUFHO2tCQUNWVixTQUFTLEVBQUU7Z0JBQ2IsQ0FBRTtnQkFBQUUsUUFBQSxFQUNIO2NBRUQ7Z0JBQUFXLFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLFlBQVE7WUFBQztjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFDTixDQUFDLEVBQ05sQyxzRUFBQSxDQUFDViwrQ0FBSTtjQUNIZ0IsUUFBUSxFQUFFQSxRQUFTO2NBQ25CeUMsRUFBRSxFQUFDLGNBQWM7Y0FDakJ2QyxJQUFJLEVBQUVBLElBQUs7Y0FDWHdDLE9BQU8sRUFBRW5DLFdBQVk7Y0FDckI0QixPQUFPLEVBQUU1QixXQUFZO2NBQUFPLFFBQUEsR0FFckJwQixzRUFBQSxDQUFDZiw4Q0FBRztnQkFBQzhCLEVBQUUsRUFBRTtrQkFBRWtDLEVBQUUsRUFBRSxDQUFDO2tCQUFFOUIsRUFBRSxFQUFFO2dCQUFFLENBQUU7Z0JBQUFDLFFBQUEsRUFDeEJwQixzRUFBQSxDQUFDUCxxREFBVTtrQkFBQ3NCLEVBQUUsRUFBRTtvQkFBRW1DLFVBQVUsRUFBRTtrQkFBTyxDQUFFO2tCQUFBOUIsUUFBQSxFQUNwQ2YsSUFBSSxDQUFDOEM7Z0JBQUk7a0JBQUFwQixRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsWUFDQTtjQUFDO2dCQUFBSCxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxZQUNWLENBQUMsRUFDTmxDLHNFQUFBLENBQUNaLGtEQUFPO2dCQUFBMkMsUUFBQSxFQUFBQyxZQUFBO2dCQUFBQyxVQUFBO2dCQUFBQyxZQUFBO2NBQUEsWUFBRSxDQUFDLEVBQ1hsQyxzRUFBQSxDQUFDVCxtREFBUTtnQkFBQTZCLFFBQUEsR0FDUHBCLHNFQUFBLENBQUNSLHVEQUFZO2tCQUFBNEIsUUFBQSxFQUNYcEIsc0VBQUEsQ0FBQ3BCLG9FQUFXO29CQUFDMkQsUUFBUSxFQUFDO2tCQUFPO29CQUFBUixRQUFBLEVBQUFDLFlBQUE7b0JBQUFDLFVBQUE7b0JBQUFDLFlBQUE7a0JBQUEsWUFBRTtnQkFBQztrQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLFlBQ3BCLENBQUMsa0NBRWpCO2NBQUE7Z0JBQUFILFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLFlBQVUsQ0FBQyxFQUNYbEMsc0VBQUEsQ0FBQ0wsa0RBQUk7Z0JBQUMrQixJQUFJLEVBQUMsV0FBVztnQkFBQU4sUUFBQSxFQUNwQnBCLHNFQUFBLENBQUNULG1EQUFRO2tCQUFBNkIsUUFBQSxHQUNQcEIsc0VBQUEsQ0FBQ1IsdURBQVk7b0JBQUE0QixRQUFBLEVBQ1hwQixzRUFBQSxDQUFDbkIsbUVBQU07c0JBQUMwRCxRQUFRLEVBQUM7b0JBQU87c0JBQUFSLFFBQUEsRUFBQUMsWUFBQTtzQkFBQUMsVUFBQTtzQkFBQUMsWUFBQTtvQkFBQSxZQUFFO2tCQUFDO29CQUFBSCxRQUFBLEVBQUFDLFlBQUE7b0JBQUFDLFVBQUE7b0JBQUFDLFlBQUE7a0JBQUEsWUFDZixDQUFDLHdDQUVqQjtnQkFBQTtrQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2tCQUFBQyxVQUFBO2tCQUFBQyxZQUFBO2dCQUFBLFlBQVU7Y0FBQztnQkFBQUgsUUFBQSxFQUFBQyxZQUFBO2dCQUFBQyxVQUFBO2dCQUFBQyxZQUFBO2NBQUEsWUFDUCxDQUFDO1lBQUE7Y0FBQUgsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLFlBQ0gsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxZQUNKLENBQ047UUFBQSxlQUNELENBQ0g7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDRTtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNHO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBQ04sQ0FBQztBQUViLENBQUM7QUFFRCxpRUFBZS9CLE1BQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3g/YTY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnRpY2xlJ1xuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCdcbmltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uJ1xuaW1wb3J0IHtcbiAgQXBwQmFyLFxuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEljb25CdXR0b24sXG4gIE1lbnUsXG4gIE1lbnVJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVVzZXJTdGF0ZSB9IGZyb20gJ0AvaG9va3MvdXNlR2xvYmFsU3RhdGUnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3VzZXJdID0gdXNlVXNlclN0YXRlKClcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhclxuICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxuICAgICAgc3g9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIHB5OiAnMTJweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHB4OiAyIH19PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD17MTMzfSBoZWlnaHQ9ezQwfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7dXNlci5pc0ZldGNoZWQgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeyF1c2VyLmlzU2lnbmVkSW4gJiYgKFxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9zaWduX2luJylcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzEuNXB4IHNvbGlkICMzRUE4RkYnLFxuICAgICAgICAgICAgICAgICAgICAgIG1sOiAyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3VzZXIuaXNTaWduZWRJbiAmJiAoXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3g9e3sgcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbWw6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImFjY291bnQtbWVudVwiXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBwbDogMiwgcHk6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICDoqJjkuovjga7nrqHnkIZcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduX291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXQgZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOOCteOCpOODs+OCouOCpuODiFxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHBCYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiQXJ0aWNsZUljb24iLCJMb2dvdXQiLCJQZXJzb25JY29uIiwiQXBwQmFyIiwiQXZhdGFyIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIkljb25CdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJMaXN0SXRlbUljb24iLCJUeXBvZ3JhcGh5IiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VVc2VyU3RhdGUiLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VyIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW4iLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInB5IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsInB4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImlzRmV0Y2hlZCIsImlzU2lnbmVkSW4iLCJ2YXJpYW50IiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwiYm9yZGVyUmFkaXVzIiwib25DbGljayIsInB1c2giLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwibWwiLCJwIiwiaWQiLCJvbkNsb3NlIiwicGwiLCJmb250V2VpZ2h0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

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

/***/ "@mui/icons-material/Article":
/*!**********************************************!*\
  !*** external "@mui/icons-material/Article" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Article");

/***/ }),

/***/ "@mui/icons-material/Logout":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Logout" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ "@mui/icons-material/Person":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Person" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Person");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

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