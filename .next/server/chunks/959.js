exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 8829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8910);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
/* harmony import */ var _UpdateNote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4147);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_9__, _UpdateNote__WEBPACK_IMPORTED_MODULE_10__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_9__, _UpdateNote__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Note(props) {
    let test = useDeleteNote();
    const handleDeleteNote = (noteid)=>{
        const DeleteObjects = {
            noteid: noteid,
            token: props.token
        };
        test.mutate(DeleteObjects);
    };
    const customStyles = {
        content: {
            height: "553px"
        },
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)"
        }
    };
    const { 0: IsOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        scroll: false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "lg:p-10 p-8 bg z-[-1]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative bg-gradient-to-br from-orange-500 to-yellow-500",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_6___default()), {
                                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Delete"
                                }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        return handleDeleteNote(props.id);
                                    },
                                    className: "border-2 w-fit border-blue-500 h-fit p-1 rounded-md bg-white",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdDelete, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_6___default()), {
                                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Update"
                                }),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "border-2 w-fit border-blue-500 h-fit p-1 rounded-md bg-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_3__.GrDocumentUpdate, {
                                            onClick: ()=>{
                                                setIsOpen(true);
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            isOpen: IsOpen,
                                            onRequestClose: ()=>{
                                                setIsOpen(false);
                                            },
                                            contentLabel: "My dialog",
                                            className: "mymodal",
                                            overlayClassName: "myoverlay",
                                            closeTimeoutMS: 500,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UpdateNote__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                token: props.token,
                                                noteid: props.id,
                                                setIsOpen: setIsOpen
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "tracking-widest text-xs title-font font-medium text-white mb-1",
                        children: props.tag
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "title-font sm:text-2xl text-xl text-gray-900 mb-3 font-bold",
                        children: props.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "leading-relaxed mb-3 font-medium break-all",
                        children: props.desc
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-900 font-black",
                                children: props.datestamp
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-white font-black inline-flex items-center leading-none text-sm ",
                                children: props.timestamp
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const DeleteUserNote = (x)=>{
    axios__WEBPACK_IMPORTED_MODULE_8___default()["delete"](`https://polynotes-django-backend.herokuapp.com/auth/v1/RUDnote/${x.noteid}/`, {
        headers: {
            Authorization: "Bearer " + x.token
        }
    }).then((response)=>{
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Note Succesfully Deleted", {
            position: react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.POSITION.TOP_LEFT
        });
        return response.data;
    }).catch((error)=>{
        react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error("Couldnt Delete Note Try Again After Some time");
    });
};
const useDeleteNote = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(DeleteUserNote, {
        onSuccess: ()=>{
            queryClient.invalidateQueries([
                "UsersNotes"
            ]);
            router.push("/NotesPage");
        },
        onError: (context)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error("Couldnt Delete Note Try Again After Some time");
            queryClient.setQueryData([
                "UsersNotes"
            ], context.previousData);
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SerachBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Context__WEBPACK_IMPORTED_MODULE_5__]);
_context_Context__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function SerachBar(props) {
    const { setUsersQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/SearchBarPage/${e.target.search.value}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " justify-center text-center flex bg-black rounded-b-full py-2",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            className: "flex justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "search",
                        id: "search",
                        type: "text",
                        className: "lg:w-[500px] hover:invert md:w-full bg-white bg-opacity-100 rounded border-2 border-black focus:border-orange-500 ring-0 focus:bg-black focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 focus:text-white py-1 px-3 leading-8 transition-all duration-200 ease-in-out",
                        placeholder: "Search Your Notes Here"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "focus:ring-4 focus:ring-orange-500 hover:invert transition-all fade-in-out border-2 border-black p-3 bg-white text-black pt-[px] rounded-md mx-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSearch, {})
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);



function TextArea(props) {
    const { name , className , ringcolor , label , ...rest } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: props.name,
                    className: `leading-7 text-sm text-gray-100 ${props.labelclassName}`,
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                className: `focus:ring-4 focus:ring-opacity-50 focus:${ringcolor} focus:transition-all outline-none focus:fade-in-out ${className}`,
                as: "textarea",
                id: name,
                name: name,
                ...rest
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "error",
                className: "text-red-500",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-2 text-red-500",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {
                        className: "",
                        name: name,
                        children: (msg)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "p-1 text-center text-red-500 bg-white ",
                                    children: msg
                                })
                            });
                        }
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 4147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpdateNote)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1121);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3215);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8910);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_8__]);
react_toastify__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function UpdateNote(props) {
    const initialValues = {
        title: "",
        tag: "",
        desc: ""
    };
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object({
        title: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Atleast Any 1 Field Is Required").min(5, "Atleast 5 Characters Required"),
        tag: yup__WEBPACK_IMPORTED_MODULE_4__.string().min(5, "Atleast 5 Characters Required"),
        desc: yup__WEBPACK_IMPORTED_MODULE_4__.string().min(10, "Atleast 10 Characters Required")
    });
    const { mutate , isLoading  } = useUpdateNote();
    const onSubmit = (values)=>{
        values["token"] = props.token;
        values["noteid"] = props.noteid;
        mutate(values);
        props.setIsOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-2 border-black p-5 w-fit h-fit mx-auto my-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>{
                    props.setIsOpen(false);
                },
                className: "border-2 border-black w-fit p-1 rounded-md",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_10__.GrClose, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "z-[100] text-black w-fit h-fit mx-auto lg:mx-auto my-auto ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "sm:!text-3xl !text-2xl font-medium title-font my-4 text-black",
                    children: "Update Your Note"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {
                initialValues: initialValues,
                validationSchema: validationSchema,
                onSubmit: onSubmit,
                children: (formik)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:w-1/2 md:w-2/3 mx-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap -m-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-2 md:w-1/2 w-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "title",
                                                    className: `leading-7 text-sm text-gray-900 `,
                                                    children: "Title"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    labelclassName: " hidden",
                                                    label: "Title",
                                                    name: "title",
                                                    id: "title",
                                                    type: "text",
                                                    className: "w-full bg-gray-400 bg-opacity-50 rounded border border-black focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-2 md:w-1/2 w-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "tag",
                                                    className: `leading-7 text-sm text-gray-900 `,
                                                    children: "Tag"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    labelclassName: " hidden",
                                                    type: "text",
                                                    id: "tag",
                                                    name: "tag",
                                                    label: "Tag",
                                                    className: "w-full bg-gray-400 bg-opacity-50 rounded border border-black focus:border-indigo-500 ring-0 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-2 w-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "desc",
                                                    className: `leading-7 text-sm text-gray-900 `,
                                                    children: "Description"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextArea__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    labelclassName: "hidden",
                                                    name: "desc",
                                                    label: "Description",
                                                    type: "text",
                                                    id: "desc",
                                                    className: "w-full bg-gray-400 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-2 w-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            disabled: formik.isValidating || !formik.errors,
                                            type: "submit",
                                            className: "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                                            children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_9__.BeatLoader, {}) : "Update Note"
                                        })
                                    })
                                ]
                            })
                        })
                    });
                }
            })
        ]
    });
};
const UpdateUsersNote = (notevalues)=>{
    axios__WEBPACK_IMPORTED_MODULE_6___default().put(`https://polynotes-django-backend.herokuapp.com/auth/v1/RUDnote/${notevalues.noteid}/`, notevalues, {
        headers: {
            Authorization: "Bearer " + notevalues.token
        }
    }).then((response)=>{
        response.data;
    }).catch((response)=>{
        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Couldnt Update Note Try Again After Some time");
    });
};
const useUpdateNote = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useQueryClient)();
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(UpdateUsersNote, {
        onSuccess: ()=>{
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)("Note Succesfully Updated", {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.POSITION.TOP_LEFT
            });
            queryClient.invalidateQueries([
                "UsersNotes"
            ]);
            router.push("/NotesPage");
        },
        onError: (context)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Couldnt Update Note Try Again After Some time");
            queryClient.setQueryData([
                "UsersNotes"
            ], context.previousData);
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8933:
/***/ (() => {



/***/ })

};
;