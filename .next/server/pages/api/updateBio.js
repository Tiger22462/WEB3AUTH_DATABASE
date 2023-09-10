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
exports.id = "pages/api/updateBio";
exports.ids = ["pages/api/updateBio"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/connectDB.js":
/*!**************************!*\
  !*** ./lib/connectDB.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected.\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {}, (err)=>{\n        if (err) throw err;\n        console.log(\"Connected to mongodb.\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29ubmVjdERCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxTQUFTLEdBQUcsVUFBWTtJQUUxQixJQUFJRCwyRUFBa0MsRUFBRTtRQUNwQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxPQUFPO0tBQ1Y7SUFFREwsdURBQWdCLENBQUNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUNDLEdBQUcsR0FBSztRQUNuRCxJQUFJQSxHQUFHLEVBQUUsTUFBTUEsR0FBRyxDQUFDO1FBQ25CTixPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ3hDLENBQUMsQ0FBQztDQUdOO0FBRUQsaUVBQWVKLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc19tb3JhbGlzX2F1dGgvLi9saWIvY29ubmVjdERCLmpzP2E0MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGNvbm5lY3RlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHt9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIG1vbmdvZGIuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/connectDB.js\n");

/***/ }),

/***/ "(api)/./lib/userSchema.js":
/*!***************************!*\
  !*** ./lib/userSchema.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    profileId: {\n        type: String\n    },\n    bio: {\n        type: String,\n        default: \"This is my Bio\"\n    }\n}, {\n    timestamps: true\n});\nlet Users = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdXNlclNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLFNBQVMsRUFBRTtRQUNUQyxJQUFJLEVBQUVDLE1BQU07S0FDYjtJQUNEQyxHQUFHLEVBQUU7UUFDSEYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pFLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7Q0FDRixFQUNEO0lBQUVDLFVBQVUsRUFBRSxJQUFJO0NBQUUsQ0FDckI7QUFFRCxJQUFJQyxLQUFLLEdBQUdULDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLE9BQU8sRUFBRUMsVUFBVSxDQUFDO0FBRXhFLGlFQUFlUSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vbGliL3VzZXJTY2hlbWEuanM/ZmZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBwcm9maWxlSWQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGJpbzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiVGhpcyBpcyBteSBCaW9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxubGV0IFVzZXJzID0gbW9uZ29vc2UubW9kZWxzLnVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlcnNcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInByb2ZpbGVJZCIsInR5cGUiLCJTdHJpbmciLCJiaW8iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXJzIiwibW9kZWxzIiwidXNlcnMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/userSchema.js\n");

/***/ }),

/***/ "(api)/./pages/api/updateBio.js":
/*!********************************!*\
  !*** ./pages/api/updateBio.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/connectDB */ \"(api)/./lib/connectDB.js\");\n/* harmony import */ var _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/userSchema */ \"(api)/./lib/userSchema.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { profileId , bio  } = req.body;\n    await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        await _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n            profileId: profileId\n        }, {\n            bio: bio\n        });\n        res.status(200).json({\n            bio\n        });\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlQmlvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNIO0FBRXpDLGlFQUFlLE9BQU9FLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBRS9CLE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxHQUFHLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBRW5DLE1BQU1OLDBEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJO1FBQ0EsTUFBTUMsd0VBQXNCLENBQUM7WUFBRUcsU0FBUyxFQUFFQSxTQUFTO1NBQUUsRUFBRTtZQUFFQyxHQUFHLEVBQUVBLEdBQUc7U0FBRSxDQUFDLENBQUM7UUFDckVGLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0osR0FBRztTQUFDLENBQUMsQ0FBQztLQUMvQixDQUFDLE9BQU9LLEtBQUssRUFBRTtRQUNaUCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUs7U0FBRSxDQUFDLENBQUM7UUFDaENDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztLQUN4QjtDQUVKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vcGFnZXMvYXBpL3VwZGF0ZUJpby5qcz83MGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uL2xpYi9jb25uZWN0REJcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi8uLi9saWIvdXNlclNjaGVtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiBcclxuICAgIGNvbnN0IHsgcHJvZmlsZUlkLCBiaW8gfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgVXNlcnMuZmluZE9uZUFuZFVwZGF0ZSh7IHByb2ZpbGVJZDogcHJvZmlsZUlkIH0sIHsgYmlvOiBiaW8gfSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2Jpb30pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJzIiwicmVxIiwicmVzIiwicHJvZmlsZUlkIiwiYmlvIiwiYm9keSIsImZpbmRPbmVBbmRVcGRhdGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateBio.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateBio.js"));
module.exports = __webpack_exports__;

})();