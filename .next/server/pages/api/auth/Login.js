"use strict";
(() => {
var exports = {};
exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 5277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/Login.js


async function Login(req, res) {
    external_axios_default().post("https://polynotes-django-backend.herokuapp.com/auth/v1/Login/", req.body, {
        withCredentials: true
    }).then((response)=>{
        res.setHeader("Set-Cookie", [
            external_cookie_default().serialize("access", response.data.access, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                path: "/"
            }),
            external_cookie_default().serialize("refresh", response.data.refresh, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                path: "/"
            }),
            external_cookie_default().serialize("user_details", JSON.stringify({
                "username": response.data.username,
                "email": response.data.email,
                "last_login_time": response.data.last_login_time,
                "last_login_date": response.data.last_login_date
            }), {
                httpOnly: false,
                secure: true,
                sameSite: "none",
                path: "/"
            }), 
        ]);
        res.status(200).json("Login successful");
    }).catch((e)=>{
        console.log("error in api", e);
        res.status(401).json({
            "error": e
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5277));
module.exports = __webpack_exports__;

})();