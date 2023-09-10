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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

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

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/connectDB */ \"(api)/./lib/connectDB.js\");\n/* harmony import */ var _lib_userSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/userSchema */ \"(api)/./lib/userSchema.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    const { message , signature  } = credentials;\n                    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n                        apiKey: process.env.MORALIS_API_KEY\n                    });\n                    const { address , profileId , expirationTime  } = (await moralis__WEBPACK_IMPORTED_MODULE_2___default().Auth.verify({\n                        message,\n                        signature,\n                        network: \"evm\"\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        expirationTime,\n                        signature\n                    };\n                    await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                    const MongoUser = await _lib_userSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                        profileId: profileId\n                    });\n                    if (!MongoUser) {\n                        const newUser = new _lib_userSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                            profileId: profileId\n                        });\n                        await newUser.save();\n                    }\n                    return user;\n                } catch (e) {\n                    // eslint-disable-next-line no-console\n                    console.error(e);\n                    return null;\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.expires = token.user.expirationTime;\n            session.user = token.user;\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNqQztBQUNIO0FBQ2lCO0FBQ0g7QUFFNUMsaUVBQWVDLGdEQUFRLENBQUM7SUFDcEJJLFNBQVMsRUFBRTtRQUNQTCxzRUFBbUIsQ0FBQztZQUNoQk0sSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFdBQVcsRUFBRTtnQkFDVEMsT0FBTyxFQUFFO29CQUNMQyxLQUFLLEVBQUUsU0FBUztvQkFDaEJDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsS0FBSztpQkFDckI7Z0JBQ0RDLFNBQVMsRUFBRTtvQkFDUEgsS0FBSyxFQUFFLFdBQVc7b0JBQ2xCQyxJQUFJLEVBQUUsTUFBTTtvQkFDWkMsV0FBVyxFQUFFLEtBQUs7aUJBQ3JCO2FBQ0o7WUFDRCxNQUFNRSxTQUFTLEVBQUNOLFdBQVcsRUFBRTtnQkFDekIsSUFBSTtvQkFDQSxNQUFNLEVBQUVDLE9BQU8sR0FBRUksU0FBUyxHQUFFLEdBQUdMLFdBQVc7b0JBRTFDLE1BQU1MLG9EQUFhLENBQUM7d0JBQUVhLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7cUJBQUUsQ0FBQyxDQUFDO29CQUU3RCxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFQyxjQUFjLEdBQUUsR0FBRyxDQUFDLE1BQU1uQiwwREFBbUIsQ0FBQzt3QkFBRU0sT0FBTzt3QkFBRUksU0FBUzt3QkFBRVksT0FBTyxFQUFFLEtBQUs7cUJBQUUsQ0FBQyxDQUFDLENBQUNDLEdBQUc7b0JBRXRILE1BQU1DLElBQUksR0FBRzt3QkFBRVAsT0FBTzt3QkFBRUMsU0FBUzt3QkFBRUMsY0FBYzt3QkFBRVQsU0FBUztxQkFBRTtvQkFFOUQsTUFBTVQsMERBQVMsRUFBRSxDQUFDO29CQUNsQixNQUFNd0IsU0FBUyxHQUFHLE1BQU12QiwrREFBYSxDQUFDO3dCQUFDZ0IsU0FBUyxFQUFFQSxTQUFTO3FCQUFDLENBQUM7b0JBRTdELElBQUcsQ0FBQ08sU0FBUyxFQUFDO3dCQUVaLE1BQU1FLE9BQU8sR0FBRyxJQUFJekIsdURBQUssQ0FBQzs0QkFDeEJnQixTQUFTLEVBQUVBLFNBQVM7eUJBQ3JCLENBQUM7d0JBQ0YsTUFBTVMsT0FBTyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztxQkFFdEI7b0JBR0QsT0FBT0osSUFBSSxDQUFDO2lCQUNmLENBQUMsT0FBT0ssQ0FBQyxFQUFFO29CQUNSLHNDQUFzQztvQkFDdENDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUMsQ0FBQztvQkFDakIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtTQUNKLENBQUM7S0FDTDtJQUNERyxTQUFTLEVBQUU7UUFDUCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFVixJQUFJLEdBQUUsRUFBRTtZQUN2QkEsSUFBSSxJQUFJLENBQUNVLEtBQUssQ0FBQ1YsSUFBSSxHQUFHQSxJQUFJLENBQUMsQ0FBQztZQUM1QixPQUFPVSxLQUFLLENBQUM7U0FDaEI7UUFDRCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFRCxLQUFLLEdBQUUsRUFBRTtZQUM5QkMsT0FBTyxDQUFDQyxPQUFPLEdBQUdGLEtBQUssQ0FBQ1YsSUFBSSxDQUFDTCxjQUFjLENBQUM7WUFDNUNnQixPQUFPLENBQUNYLElBQUksR0FBR1UsS0FBSyxDQUFDVixJQUFJLENBQUM7WUFDMUIsT0FBT1csT0FBTyxDQUFDO1NBQ2xCO0tBQ0o7SUFDREEsT0FBTyxFQUFFO1FBQ0xFLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0NBQ0osQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL2xpYi9jb25uZWN0REInO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vLi4vbGliL3VzZXJTY2hlbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNb3JhbGlzQXV0aCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcweDAnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2lnbmF0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcweDAnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgc2lnbmF0dXJlIH0gPSBjcmVkZW50aWFscztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHByb2ZpbGVJZCwgZXhwaXJhdGlvblRpbWUgfSA9IChhd2FpdCBNb3JhbGlzLkF1dGgudmVyaWZ5KHsgbWVzc2FnZSwgc2lnbmF0dXJlLCBuZXR3b3JrOiAnZXZtJyB9KSkucmF3O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0geyBhZGRyZXNzLCBwcm9maWxlSWQsIGV4cGlyYXRpb25UaW1lLCBzaWduYXR1cmUgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgTW9uZ29Vc2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7cHJvZmlsZUlkOiBwcm9maWxlSWR9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighTW9uZ29Vc2VyKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlSWQ6IHByb2ZpbGVJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgICAgICAgIHVzZXIgJiYgKHRva2VuLnVzZXIgPSB1c2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgICAgICAgc2Vzc2lvbi5leHBpcmVzID0gdG9rZW4udXNlci5leHBpcmF0aW9uVGltZTtcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gICAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiTmV4dEF1dGgiLCJNb3JhbGlzIiwiY29ubmVjdERCIiwiVXNlcnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJtZXNzYWdlIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzaWduYXR1cmUiLCJhdXRob3JpemUiLCJzdGFydCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNT1JBTElTX0FQSV9LRVkiLCJhZGRyZXNzIiwicHJvZmlsZUlkIiwiZXhwaXJhdGlvblRpbWUiLCJBdXRoIiwidmVyaWZ5IiwibmV0d29yayIsInJhdyIsInVzZXIiLCJNb25nb1VzZXIiLCJmaW5kT25lIiwibmV3VXNlciIsInNhdmUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwiZXhwaXJlcyIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();