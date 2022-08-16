"use strict";
(() => {
var exports = {};
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 7437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    res.setHeader("Set-Cookie", [
        "access=delete;Max-Age=0;path=/",
        "refresh=delete;Max-Age=0;path=/"
    ]);
    return res.status(200).json({
        success: "Succesfully Logged Out"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7437));
module.exports = __webpack_exports__;

})();