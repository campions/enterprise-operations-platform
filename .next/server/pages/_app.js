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

/***/ "__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/index.js":
/*!***************************************************************************************************!*\
  !*** __barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ _Users_capmarius_Projects_enterprise_operations_platform_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline */ \"./node_modules/@mui/material/node/CssBaseline/index.js\");\n/* harmony import */ var _Users_capmarius_Projects_enterprise_operations_platform_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Dc3NCYXNlbGluZSxUaGVtZVByb3ZpZGVyIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNzRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VudGVycHJpc2Utb3BzLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzPzc3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENzc0Jhc2VsaW5lIH0gZnJvbSBcIi4vQ3NzQmFzZWxpbmVcIlxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCIvVXNlcnMvY2FwbWFyaXVzL1Byb2plY3RzL2VudGVycHJpc2Utb3BlcmF0aW9ucy1wbGF0Zm9ybS9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvaW5kZXguanNcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CssBaseline,ThemeProvider!=!@mui/material */ \"__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/theme */ \"./src/theme.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>{\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n            theme: _theme__WEBPACK_IMPORTED_MODULE_4__.appTheme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}, void 0, false, {\n                    fileName: \"/Users/capmarius/Projects/enterprise-operations-platform/src/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/capmarius/Projects/enterprise-operations-platform/src/pages/_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/capmarius/Projects/enterprise-operations-platform/src/pages/_app.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/capmarius/Projects/enterprise-operations-platform/src/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDYztBQUN4QztBQUNIO0FBQ0s7QUFFbkMsTUFBTU0sTUFBTSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzdDLE1BQU0sQ0FBQ0MsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFNLElBQUlGLDhEQUFXQTtJQUVwRCxxQkFDRSw4REFBQ0Msc0VBQW1CQTtRQUFDTyxRQUFRRDtrQkFDM0IsNEVBQUNULHdHQUFhQTtZQUFDVyxPQUFPTiw0Q0FBUUE7OzhCQUM1Qiw4REFBQ0osc0dBQVdBOzs7Ozs4QkFDWiw4REFBQ007b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VudGVycHJpc2Utb3BzLWRhc2hib2FyZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDc3NCYXNlbGluZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IGFwcFRoZW1lIH0gZnJvbSAnQC90aGVtZSc7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IFtxdWVyeUNsaWVudF0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgUXVlcnlDbGllbnQoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXthcHBUaGVtZX0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVN0YXRlIiwiYXBwVGhlbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appTheme: () => (/* binding */ appTheme)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst focusRingStyles = {\n    outline: \"3px solid rgba(25, 118, 210, 0.5)\",\n    outlineOffset: \"2px\"\n};\nconst appTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    spacing: 8,\n    typography: {\n        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif',\n        h1: {\n            fontSize: \"2rem\",\n            fontWeight: 600,\n            letterSpacing: \"-0.5px\"\n        },\n        h2: {\n            fontSize: \"1.75rem\",\n            fontWeight: 600,\n            letterSpacing: \"-0.25px\"\n        },\n        h3: {\n            fontSize: \"1.5rem\",\n            fontWeight: 600\n        },\n        h4: {\n            fontSize: \"1.25rem\",\n            fontWeight: 600\n        },\n        h5: {\n            fontSize: \"1.1rem\",\n            fontWeight: 600\n        },\n        h6: {\n            fontSize: \"1rem\",\n            fontWeight: 600\n        },\n        subtitle1: {\n            fontSize: \"1rem\",\n            fontWeight: 500\n        },\n        body1: {\n            fontSize: \"1rem\",\n            lineHeight: 1.5\n        },\n        body2: {\n            fontSize: \"0.9rem\",\n            lineHeight: 1.6\n        }\n    },\n    components: {\n        MuiButtonBase: {\n            styleOverrides: {\n                root: {\n                    \"&:focus-visible\": focusRingStyles\n                }\n            }\n        },\n        MuiTableSortLabel: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 4,\n                    \"&.Mui-focusVisible\": focusRingStyles\n                }\n            }\n        },\n        MuiLink: {\n            styleOverrides: {\n                root: {\n                    \"&:focus-visible\": focusRingStyles\n                }\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1DLGtCQUFrQjtJQUN0QkMsU0FBUztJQUNUQyxlQUFlO0FBQ2pCO0FBRU8sTUFBTUMsV0FBV0osaUVBQVdBLENBQUM7SUFDbENLLFNBQVM7SUFDVEMsWUFBWTtRQUNWQyxZQUFZO1FBQ1pDLElBQUk7WUFBRUMsVUFBVTtZQUFRQyxZQUFZO1lBQUtDLGVBQWU7UUFBUztRQUNqRUMsSUFBSTtZQUFFSCxVQUFVO1lBQVdDLFlBQVk7WUFBS0MsZUFBZTtRQUFVO1FBQ3JFRSxJQUFJO1lBQUVKLFVBQVU7WUFBVUMsWUFBWTtRQUFJO1FBQzFDSSxJQUFJO1lBQUVMLFVBQVU7WUFBV0MsWUFBWTtRQUFJO1FBQzNDSyxJQUFJO1lBQUVOLFVBQVU7WUFBVUMsWUFBWTtRQUFJO1FBQzFDTSxJQUFJO1lBQUVQLFVBQVU7WUFBUUMsWUFBWTtRQUFJO1FBQ3hDTyxXQUFXO1lBQUVSLFVBQVU7WUFBUUMsWUFBWTtRQUFJO1FBQy9DUSxPQUFPO1lBQUVULFVBQVU7WUFBUVUsWUFBWTtRQUFJO1FBQzNDQyxPQUFPO1lBQUVYLFVBQVU7WUFBVVUsWUFBWTtRQUFJO0lBQy9DO0lBQ0FFLFlBQVk7UUFDVkMsZUFBZTtZQUNiQyxnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0osbUJBQW1CdkI7Z0JBQ3JCO1lBQ0Y7UUFDRjtRQUNBd0IsbUJBQW1CO1lBQ2pCRixnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0pFLGNBQWM7b0JBQ2Qsc0JBQXNCekI7Z0JBQ3hCO1lBQ0Y7UUFDRjtRQUNBMEIsU0FBUztZQUNQSixnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0osbUJBQW1CdkI7Z0JBQ3JCO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2VudGVycHJpc2Utb3BzLWRhc2hib2FyZC8uL3NyYy90aGVtZS50cz9kYzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG5jb25zdCBmb2N1c1JpbmdTdHlsZXMgPSB7XG4gIG91dGxpbmU6ICczcHggc29saWQgcmdiYSgyNSwgMTE4LCAyMTAsIDAuNSknLFxuICBvdXRsaW5lT2Zmc2V0OiAnMnB4J1xufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGFwcFRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBzcGFjaW5nOiA4LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogJ0ludGVyLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoMTogeyBmb250U2l6ZTogJzJyZW0nLCBmb250V2VpZ2h0OiA2MDAsIGxldHRlclNwYWNpbmc6ICctMC41cHgnIH0sXG4gICAgaDI6IHsgZm9udFNpemU6ICcxLjc1cmVtJywgZm9udFdlaWdodDogNjAwLCBsZXR0ZXJTcGFjaW5nOiAnLTAuMjVweCcgfSxcbiAgICBoMzogeyBmb250U2l6ZTogJzEuNXJlbScsIGZvbnRXZWlnaHQ6IDYwMCB9LFxuICAgIGg0OiB7IGZvbnRTaXplOiAnMS4yNXJlbScsIGZvbnRXZWlnaHQ6IDYwMCB9LFxuICAgIGg1OiB7IGZvbnRTaXplOiAnMS4xcmVtJywgZm9udFdlaWdodDogNjAwIH0sXG4gICAgaDY6IHsgZm9udFNpemU6ICcxcmVtJywgZm9udFdlaWdodDogNjAwIH0sXG4gICAgc3VidGl0bGUxOiB7IGZvbnRTaXplOiAnMXJlbScsIGZvbnRXZWlnaHQ6IDUwMCB9LFxuICAgIGJvZHkxOiB7IGZvbnRTaXplOiAnMXJlbScsIGxpbmVIZWlnaHQ6IDEuNSB9LFxuICAgIGJvZHkyOiB7IGZvbnRTaXplOiAnMC45cmVtJywgbGluZUhlaWdodDogMS42IH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAnJjpmb2N1cy12aXNpYmxlJzogZm9jdXNSaW5nU3R5bGVzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVRhYmxlU29ydExhYmVsOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgICcmLk11aS1mb2N1c1Zpc2libGUnOiBmb2N1c1JpbmdTdHlsZXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpTGluazoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgICcmOmZvY3VzLXZpc2libGUnOiBmb2N1c1JpbmdTdHlsZXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJmb2N1c1JpbmdTdHlsZXMiLCJvdXRsaW5lIiwib3V0bGluZU9mZnNldCIsImFwcFRoZW1lIiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInN1YnRpdGxlMSIsImJvZHkxIiwibGluZUhlaWdodCIsImJvZHkyIiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbkJhc2UiLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJNdWlUYWJsZVNvcnRMYWJlbCIsImJvcmRlclJhZGl1cyIsIk11aUxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();