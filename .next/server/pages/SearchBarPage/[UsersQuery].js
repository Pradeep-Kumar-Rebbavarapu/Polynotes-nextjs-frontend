"use strict";
(() => {
var exports = {};
exports.id = 592;
exports.ids = [592];
exports.modules = {

/***/ 4184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBarPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8910);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8829);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8463);
/* harmony import */ var _components_SerachBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6602);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Note__WEBPACK_IMPORTED_MODULE_5__, _context_Context__WEBPACK_IMPORTED_MODULE_6__, _components_SerachBar__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Note__WEBPACK_IMPORTED_MODULE_5__, _context_Context__WEBPACK_IMPORTED_MODULE_6__, _components_SerachBar__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function SearchBarPage(props) {
    const SearchedNotes = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        "UsersSearchedNotes"
    ], ()=>{
        return fetchUsersSearchedNotes(props.cookies.access, props.params.UsersQuery);
    });
    if (SearchedNotes.isError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SerachBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    token: props.cookies.access
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "my-20 flex justify-center",
                    children: SearchedNotes.error.message
                })
            ]
        });
    }
    if (SearchedNotes.isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SerachBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    token: props.cookies.access
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "my-20 flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_2__.BeatLoader, {})
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SerachBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                token: props.cookies.access
            }),
            SearchedNotes.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto my-20 text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    children: [
                        "We Have Found No Notes On Your Search ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                            children: [
                                props.params.UsersQuery,
                                "  "
                            ]
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3",
                children: SearchedNotes?.data.map((note)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Note__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        token: props.cookies.access,
                        id: note.id,
                        tag: note.tag,
                        title: note.title,
                        desc: note.desc,
                        datestamp: note.datestamp,
                        timestamp: note.timestamp
                    }, note.id);
                })
            })
        ]
    });
};
const fetchUsersSearchedNotes = (token, query)=>{
    return axios__WEBPACK_IMPORTED_MODULE_3___default().get(`https://polynotes-django-backend.herokuapp.com/auth/v1/SearchedNotes/?search=${query}`, {
        headers: {
            Authorization: "Bearer " + token
        }
    }).then((response)=>{
        return response.data;
    });
};
const getServerSideProps = async ({ req , res , params  })=>{
    console.log(params);
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
    await queryClient.prefetchQuery([
        "UsersSearchedNotes"
    ], ()=>{
        return fetchUsersSearchedNotes(req.cookies.access, params.UsersQuery);
    });
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.dehydrate)(queryClient))),
            cookies: req.cookies,
            params: params
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 4787:
/***/ ((module) => {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 8176:
/***/ ((module) => {

module.exports = require("react-spinners");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [463,121,959], () => (__webpack_exec__(4184)));
module.exports = __webpack_exports__;

})();