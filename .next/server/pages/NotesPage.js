"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 9933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddNote)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1121);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8910);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
react_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function AddNote(props) {
    const initialValues = {
        title: "",
        tag: "",
        desc: ""
    };
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object({
        title: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required").min(5, "Atleast 5 Characters Required"),
        tag: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required").min(5, "Atleast 5 Characters Required"),
        desc: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required").min(10, "Atleast 10 Characters Required")
    });
    const { mutate , isLoading , isFetching  } = useAddNote();
    const onSubmit = (values)=>{
        values["token"] = props.token;
        mutate(values);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border-2 w-fit h-fit lg:mx-auto m-10 bg-gradient-to-tr from-purple-600 to-rose-600 border-red-500 ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "text-gray-200 body-font relative",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container px-5 py-24 mx-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col text-center w-full mb-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "sm:text-3xl text-2xl font-medium title-font mb-4 text-white",
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "lg:w-2/3 mx-auto leading-relaxed text-base",
                                children: "Add Your Notes Under Our Clouds And Keep It Safe Behind Our HideOut."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
                        initialValues: initialValues,
                        validationSchema: validationSchema,
                        onSubmit: onSubmit,
                        children: (formik)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2 md:w-2/3 mx-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap -m-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-2 w-1/2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        label: "Title",
                                                        name: "title",
                                                        id: "title",
                                                        type: "text",
                                                        className: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-2 w-1/2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        type: "text",
                                                        id: "tag",
                                                        name: "tag",
                                                        label: "Tag",
                                                        className: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-2 w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextArea__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                        name: "desc",
                                                        label: "Description",
                                                        type: "text",
                                                        id: "desc",
                                                        className: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-2 w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    disabled: formik.isValidating || !formik.errors,
                                                    type: "submit",
                                                    className: "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                                                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_7__.BeatLoader, {}) : "Add Note"
                                                })
                                            })
                                        ]
                                    })
                                })
                            });
                        }
                    })
                ]
            })
        })
    });
};
const AddUsersNote = async (Noteobject)=>{
    return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://polynotes-django-backend.herokuapp.com/auth/v1/NoteAdd/", Noteobject, {
        headers: {
            Authorization: "Bearer " + String(Noteobject.token)
        }
    });
};
const useAddNote = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)(AddUsersNote, {
        onSuccess: ()=>{
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)("Note Added Succesfully", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_LEFT
            });
        },
        onMutate: async (newData)=>{
            await queryClient.cancelQueries([
                "UsersNotes"
            ]);
            const previousData = queryClient.getQueryData([
                "UsersNotes"
            ]);
            queryClient.setQueryData([
                "UsersNotes"
            ], (oldQueryData)=>{
                return [
                    ...oldQueryData,
                    newData
                ];
            });
            return {
                previousData
            };
        },
        onError: (_error, context)=>{
            queryClient.setQueryData([
                "UsersNotes"
            ], context.previousData);
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Note Couldnt Be Added Due To NetWork Error");
        },
        onSettled: ()=>{
            queryClient.invalidateQueries([
                "UsersNotes"
            ]);
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotesPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8829);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8910);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AddNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9933);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SerachBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6602);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Note__WEBPACK_IMPORTED_MODULE_2__, _components_AddNote__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _components_SerachBar__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Note__WEBPACK_IMPORTED_MODULE_2__, _components_AddNote__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _components_SerachBar__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function NotesPage(props) {
    const UsersNotes = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "UsersNotes"
    ], ()=>{
        return fetchUsersNotes(props.cookies.access);
    });
    if (UsersNotes.isError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SerachBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    token: props.cookies.access
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "my-20 flex justify-center",
                    children: UsersNotes.error.message
                })
            ]
        });
    }
    if (UsersNotes.isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SerachBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    token: props.cookies.access
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "my-20 flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_7__.BeatLoader, {})
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "z-[-1]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SerachBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                token: props.cookies.access
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AddNote__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                token: props.cookies.access
            }),
            UsersNotes.data.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "my-20 flex justify-center",
                children: "You Have No Notes Yet"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "z-[-1]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3",
                    children: UsersNotes?.data.map((note)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                token: props.cookies.access,
                                id: note.id,
                                tag: note.tag,
                                title: note.title,
                                desc: note.desc,
                                datestamp: note.datestamp,
                                timestamp: note.timestamp
                            }, note.id)
                        });
                    })
                })
            })
        ]
    });
};
const fetchUsersNotes = async (token)=>{
    try {
        return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://polynotes-django-backend.herokuapp.com/auth/v1/NoteAdd", {
            headers: {
                Authorization: "Bearer " + String(token)
            }
        }).then((response)=>{
            return response.data;
        });
    } catch (error) {
        return error;
    }
};
const getServerSideProps = async ({ req , res  })=>{
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
    // fetchUsersNotes(req.cookies.access)
    await queryClient.prefetchQuery([
        "UsersNotes"
    ], ()=>{
        return fetchUsersNotes(req.cookies.access);
    });
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.dehydrate)(queryClient))),
            cookies: req.cookies
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [463,121,959], () => (__webpack_exec__(5773)));
module.exports = __webpack_exports__;

})();