"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\components\\MsgInput.js";


const MsgInput = ({
  mutate,
  text = '',
  id = undefined
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
      ref: textRef,
      defaultValue: text,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");


var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\components\\MsgItem.js";


const MsgItem = ({
  //정보 받아오기
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  onDelete,
  startEdit,
  isEditing
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
    children: [userId, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
      children: new Date(timestamp).toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onUpdate,
      text: text,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, undefined)
  }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");


var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const UserIds = ['roy', 'jay'];

const getRandomUserId = () => UserIds[Math.round(Math.random())]; //msgs 50개 임의로 만들기


const originalMsgs = Array(50).fill(0).map((_, i) => ({
  id: i + 1,
  userId: getRandomUserId(),
  //*1000 으로 millisecond를 second 단위로 바꾸고 * 60으로 다시 분단위로 
  timestamp: 1234567890123 + (50 - i) * 1000 * 60,
  text: `${50 - i} mock text`
})); // .reverse()
// [
//     {
//         id: 1,
//         userId: getRandomUserId,
//         timestamp: 1234567890123,
//         text: '1 mock text'
//     },
// ]

const MsgList = () => {
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const onCreate = text => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`
    }; // msgs.unshift(newMsg)

    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const onUpdate = (text, id) => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text
      }));
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");


var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\pages\\index.js";


const Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxNQUFNVixZQUFZLENBQUMsSUFBRCxDQUFuQzs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLGdCQUNLSixJQUFJLENBQUNKLEdBQUwsQ0FBU2tCLENBQUMsaUJBQ1AsOERBQUMsNkNBQUQsa0NBRVFBLENBRlI7QUFHSSxnQkFBUSxFQUFFdkMsUUFIZDtBQUlJLGdCQUFRLEVBQUUsTUFBTUMsUUFBUSxDQUFDc0MsQ0FBQyxDQUFDbkQsRUFBSCxDQUo1QjtBQUtJLGlCQUFTLEVBQUUsTUFBTXdDLFlBQVksQ0FBQ1csQ0FBQyxDQUFDbkQsRUFBSCxDQUxqQztBQU1JLGlCQUFTLEVBQUV1QyxTQUFTLEtBQUtZLENBQUMsQ0FBQ25EO0FBTi9CLFVBQ1NtRCxDQUFDLENBQUNuRCxFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREo7QUFnQkgsQ0F4REQ7O0FBMERBLGlFQUFlb0MsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7O0FBRUEsTUFBTWdCLElBQUksR0FBRyxtQkFDVDtBQUFBLDBCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQSxnQkFESjs7QUFTQSxpRUFBZUEsSUFBZjs7Ozs7Ozs7OztBQ1hBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCB0ZXh0ID0gJycsIGlkID0gdW5kZWZpbmVkIH0pID0+IHtcclxuICAgIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJydcclxuICAgICAgICBtdXRhdGUodGV4dCwgaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlZj17dGV4dFJlZn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQiLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIlxyXG5cclxuY29uc3QgTXNnSXRlbSA9ICh7XHJcbiAgICAvL+ygleuztCDrsJvslYTsmKTquLBcclxuICAgIGlkLFxyXG4gICAgdXNlcklkLFxyXG4gICAgdGltZXN0YW1wLFxyXG4gICAgdGV4dCxcclxuICAgIG9uVXBkYXRlLFxyXG4gICAgb25EZWxldGUsXHJcbiAgICBzdGFydEVkaXQsXHJcbiAgICBpc0VkaXRpbmdcclxufSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgICAgICAgIDxzdWI+XHJcbiAgICAgICAgICAgICAgICB7Lyog7Iuc6rCE7KCV67O0IOuEo+q4sCAqL31cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cjEyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zdWI+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogdGV4dH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSdcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXHJcblxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuLy9tc2dzIDUw6rCcIOyehOydmOuhnCDrp4zrk6TquLBcclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKCggXyAsIGkpID0+ICh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgXHJcbiAgICAvLyoxMDAwIOycvOuhnCBtaWxsaXNlY29uZOulvCBzZWNvbmQg64uo7JyE66GcIOuwlOq+uOqzoCAqIDYw7Jy866GcIOuLpOyLnCDrtoTri6jsnITroZwgXHJcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcclxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxyXG59KSlcclxuXHJcbi8vIC5yZXZlcnNlKClcclxuXHJcbi8vIFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCxcclxuLy8gICAgICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsXHJcbi8vICAgICAgICAgdGV4dDogJzEgbW9jayB0ZXh0J1xyXG4vLyAgICAgfSxcclxuLy8gXVxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICAgICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbXNncy51bnNoaWZ0KG5ld01zZylcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgICAgICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9uZUVkaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfS8+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNc2dJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3guaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ueH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH0vPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cclxuICAgIDxNc2dMaXN0IC8+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsInVzZVN0YXRlIiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJub3ciLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIngiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==