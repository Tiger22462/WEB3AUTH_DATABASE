"use strict";
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
exports.id = "pages/user";
exports.ids = ["pages/user"];
exports.modules = {

/***/ "./lib/connectDB.js":
/*!**************************!*\
  !*** ./lib/connectDB.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected.\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {}, (err)=>{\n        if (err) throw err;\n        console.log(\"Connected to mongodb.\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29ubmVjdERCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxTQUFTLEdBQUcsVUFBWTtJQUUxQixJQUFJRCwyRUFBa0MsRUFBRTtRQUNwQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxPQUFPO0tBQ1Y7SUFFREwsdURBQWdCLENBQUNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUNDLEdBQUcsR0FBSztRQUNuRCxJQUFJQSxHQUFHLEVBQUUsTUFBTUEsR0FBRyxDQUFDO1FBQ25CTixPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ3hDLENBQUMsQ0FBQztDQUdOO0FBRUQsaUVBQWVKLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc19tb3JhbGlzX2F1dGgvLi9saWIvY29ubmVjdERCLmpzP2E0MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGNvbm5lY3RlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHt9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIG1vbmdvZGIuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/connectDB.js\n");

/***/ }),

/***/ "./lib/userSchema.js":
/*!***************************!*\
  !*** ./lib/userSchema.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    profileId: {\n        type: String\n    },\n    bio: {\n        type: String,\n        default: \"This is my Bio\"\n    }\n}, {\n    timestamps: true\n});\nlet Users = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlclNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLFNBQVMsRUFBRTtRQUNUQyxJQUFJLEVBQUVDLE1BQU07S0FDYjtJQUNEQyxHQUFHLEVBQUU7UUFDSEYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pFLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7Q0FDRixFQUNEO0lBQUVDLFVBQVUsRUFBRSxJQUFJO0NBQUUsQ0FDckI7QUFFRCxJQUFJQyxLQUFLLEdBQUdULDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLE9BQU8sRUFBRUMsVUFBVSxDQUFDO0FBRXhFLGlFQUFlUSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vbGliL3VzZXJTY2hlbWEuanM/ZmZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBwcm9maWxlSWQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGJpbzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiVGhpcyBpcyBteSBCaW9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxubGV0IFVzZXJzID0gbW9uZ29vc2UubW9kZWxzLnVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlcnNcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInByb2ZpbGVJZCIsInR5cGUiLCJTdHJpbmciLCJiaW8iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXJzIiwibW9kZWxzIiwidXNlcnMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/userSchema.js\n");

/***/ }),

/***/ "./pages/user.jsx":
/*!************************!*\
  !*** ./pages/user.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_userSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/userSchema */ \"./lib/userSchema.js\");\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/connectDB */ \"./lib/connectDB.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction User({ user , bio  }) {\n    const { 0: value , 1: changeValue  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"New Bio\");\n    async function updateBio() {\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"/api/updateBio\", {\n            profileId: user.profileId,\n            bio: value\n        }, {\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        console.log(\"Bio Updated to: \" + data.bio);\n        location.reload();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"User session:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Address: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Bio: \",\n                    bio\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>changeValue(e.target.value),\n                value: value\n            }, void 0, false, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>updateBio(),\n                children: \"Update Bio\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)({\n                        redirect: \"/signin\"\n                    }),\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Real Work\\\\EGCO\\\\Pre_Capstone\\\\Moralis_Authen_Demo\\\\web3auth_database\\\\pages\\\\user.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/signin\",\n                permanent: false\n            }\n        };\n    }\n    await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const userM = await _lib_userSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n        profileId: session?.user.profileId\n    }).lean();\n    if (userM !== null) {\n        userM.bio = userM.bio.toString();\n    }\n    return {\n        props: {\n            user: session.user,\n            bio: userM.bio\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNoQjtBQUNHO0FBQ1I7QUFDUDtBQUUxQixTQUFTTSxJQUFJLENBQUMsRUFBRUMsSUFBSSxHQUFFQyxHQUFHLEdBQUUsRUFBRTtJQUd6QixNQUFNLEtBQUNDLEtBQUssTUFBRUMsV0FBVyxNQUFJTiwrQ0FBUSxDQUFDLFNBQVMsQ0FBQztJQUVoRCxlQUFlTyxTQUFTLEdBQUU7UUFDdEIsTUFBTSxFQUFDQyxJQUFJLEdBQUMsR0FBRyxNQUFNUCxpREFBVSxDQUMzQixnQkFBZ0IsRUFDaEI7WUFBRVMsU0FBUyxFQUFFUCxJQUFJLENBQUNPLFNBQVM7WUFBRU4sR0FBRyxFQUFFQyxLQUFLO1NBQUUsRUFDekM7WUFDRU0sT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7U0FDRixDQUNGO1FBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixHQUFHTCxJQUFJLENBQUNKLEdBQUcsQ0FBQztRQUUxQ1UsUUFBUSxDQUFDQyxNQUFNLEVBQUU7S0FDdEI7SUFFRCxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsZUFBYTs7Ozs7b0JBQUs7MEJBQ3RCLDhEQUFDRCxLQUFHOztvQkFBQyxXQUFTO29CQUFDYixJQUFJLENBQUNlLE9BQU87Ozs7OztvQkFBTzswQkFDbEMsOERBQUNGLEtBQUc7O29CQUFDLE9BQUs7b0JBQUNaLEdBQUc7Ozs7OztvQkFBTzswQkFDckIsOERBQUNlLElBQUU7Ozs7b0JBQUU7MEJBQ0wsOERBQUNDLE9BQUs7Z0JBQ0ZDLFFBQVEsRUFBRSxDQUFDQyxDQUFDLEdBQUtoQixXQUFXLENBQUNnQixDQUFDLENBQUNDLE1BQU0sQ0FBQ2xCLEtBQUssQ0FBQztnQkFDNUNBLEtBQUssRUFBRUEsS0FBSzs7Ozs7b0JBQ1A7MEJBQ1QsOERBQUNtQixRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTWxCLFNBQVMsRUFBRTswQkFBRSxZQUFVOzs7OztvQkFBUzswQkFDdkQsOERBQUNZLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNBLElBQUU7Ozs7b0JBQUU7MEJBQ0wsOERBQUNLLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNNUIsd0RBQU8sQ0FBQzt3QkFBRTZCLFFBQVEsRUFBRSxTQUFTO3FCQUFFLENBQUM7MEJBQUUsVUFBUTs7Ozs7b0JBQVM7Ozs7OztZQUN4RSxDQUNSO0NBQ0w7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBQzlDLE1BQU1DLE9BQU8sR0FBRyxNQUFNakMsMkRBQVUsQ0FBQ2dDLE9BQU8sQ0FBQztJQUV6QyxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUNWLE9BQU87WUFDSEgsUUFBUSxFQUFFO2dCQUNOSSxXQUFXLEVBQUUsU0FBUztnQkFDdEJDLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1NBQ0osQ0FBQztLQUNMO0lBRUQsTUFBTWhDLDBEQUFTLEVBQUUsQ0FBQztJQUVsQixNQUFNaUMsS0FBSyxHQUFHLE1BQU1sQywrREFBYSxDQUFDO1FBQUVZLFNBQVMsRUFBRW1CLE9BQU8sRUFBRTFCLElBQUksQ0FBQ08sU0FBUztLQUFFLENBQUMsQ0FBQ3dCLElBQUksRUFBRTtJQUVoRixJQUFJRixLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2hCQSxLQUFLLENBQUM1QixHQUFHLEdBQUc0QixLQUFLLENBQUM1QixHQUFHLENBQUMrQixRQUFRLEVBQUUsQ0FBQztLQUNsQztJQUVILE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQUVqQyxJQUFJLEVBQUUwQixPQUFPLENBQUMxQixJQUFJO1lBQUVDLEdBQUcsRUFBRTRCLEtBQUssQ0FBQzVCLEdBQUc7U0FBRTtLQUNoRCxDQUFDO0NBQ0w7QUFFRCxpRUFBZUYsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL3BhZ2VzL3VzZXIuanN4PzIyNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi4vbGliL3VzZXJTY2hlbWFcIjtcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vbGliL2Nvbm5lY3REQlwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyKHsgdXNlciwgYmlvIH0pIHtcclxuXHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBjaGFuZ2VWYWx1ZV0gPSB1c2VTdGF0ZShcIk5ldyBCaW9cIik7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmlvKCl7XHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgXCIvYXBpL3VwZGF0ZUJpb1wiLFxyXG4gICAgICAgICAgICB7IHByb2ZpbGVJZDogdXNlci5wcm9maWxlSWQsIGJpbzogdmFsdWUgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJCaW8gVXBkYXRlZCB0bzogXCIgKyBkYXRhLmJpbylcclxuXHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PlVzZXIgc2Vzc2lvbjo8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2PkFkZHJlc3M6IHt1c2VyLmFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+QmlvOiB7YmlvfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVCaW8oKX0+VXBkYXRlIEJpbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KHsgcmVkaXJlY3Q6ICcvc2lnbmluJyB9KX0+U2lnbiBvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL3NpZ25pbicsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgY29uc3QgdXNlck0gPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgcHJvZmlsZUlkOiBzZXNzaW9uPy51c2VyLnByb2ZpbGVJZCB9KS5sZWFuKCk7XHJcblxyXG4gICAgaWYgKHVzZXJNICE9PSBudWxsKSB7XHJcbiAgICAgICAgdXNlck0uYmlvID0gdXNlck0uYmlvLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciwgYmlvOiB1c2VyTS5iaW8gfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwic2lnbk91dCIsIlVzZXJzIiwiY29ubmVjdERCIiwidXNlU3RhdGUiLCJheGlvcyIsIlVzZXIiLCJ1c2VyIiwiYmlvIiwidmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInVwZGF0ZUJpbyIsImRhdGEiLCJwb3N0IiwicHJvZmlsZUlkIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImg0IiwiYWRkcmVzcyIsImJyIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicmVkaXJlY3QiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwidXNlck0iLCJmaW5kT25lIiwibGVhbiIsInRvU3RyaW5nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user.jsx"));
module.exports = __webpack_exports__;

})();