"use strict";
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 8463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);
const ContextProvider = ({ children  })=>{
    const { 0: user , 1: setuser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("user_details") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("user_details")) : null);
    const { 0: authtoken , 1: setauthtoken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // console.log('user',user);
    const { 0: UsersQuery , 1: setUsersQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const Logout = ()=>{
        setuser(null);
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("user_details");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("access");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("refreh");
        localStorage.clear();
        axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/auth/Logout").then((response)=>{
            router.push("/Login");
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Logged Out Succesfully", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_LEFT
            });
        });
    };
    const contextData = {
        user: user,
        setuser: setuser,
        authtoken: authtoken,
        setauthtoken: setauthtoken,
        Logout: Logout,
        UsersQuery: UsersQuery,
        setUsersQuery: setUsersQuery
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context.Provider, {
        value: contextData,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;