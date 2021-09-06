"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\components\\MsgItem.js",
    _this = undefined;



var MsgItem = function MsgItem(_ref) {
  var id = _ref.id,
      userId = _ref.userId,
      timestamp = _ref.timestamp,
      text = _ref.text,
      onUpdate = _ref.onUpdate,
      isEditing = _ref.isEditing,
      startEdit = _ref.startEdit;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
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
        lineNumber: 16,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
        mutate: onUpdate,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)
    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "messages__buttons",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = MsgItem;
/* harmony default export */ __webpack_exports__["default"] = (MsgItem);

var _c;

$RefreshReg$(_c, "MsgItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTdiMWIyZTk2MTY5NTBkNWM1NzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFFWkMsRUFGWSxRQUVaQSxFQUZZO0FBQUEsTUFHWkMsTUFIWSxRQUdaQSxNQUhZO0FBQUEsTUFJWkMsU0FKWSxRQUlaQSxTQUpZO0FBQUEsTUFLWkMsSUFMWSxRQUtaQSxJQUxZO0FBQUEsTUFNWkMsUUFOWSxRQU1aQSxRQU5ZO0FBQUEsTUFPWkMsU0FQWSxRQU9aQSxTQVBZO0FBQUEsTUFRWkMsU0FSWSxRQVFaQSxTQVJZO0FBQUEsc0JBVVo7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQSw0QkFDSTtBQUFBLGlCQUNLTCxNQURMLEVBQ2EsR0FEYixlQUVJO0FBQUEsa0JBRUssSUFBSU0sSUFBSixDQUFTTCxTQUFULEVBQW9CTSxjQUFwQixDQUFtQyxPQUFuQyxFQUE0QztBQUN6Q0MsVUFBQUEsSUFBSSxFQUFFLFNBRG1DO0FBRXpDQyxVQUFBQSxLQUFLLEVBQUUsU0FGa0M7QUFHekNDLFVBQUFBLEdBQUcsRUFBRSxTQUhvQztBQUl6Q0MsVUFBQUEsSUFBSSxFQUFFLFNBSm1DO0FBS3pDQyxVQUFBQSxNQUFNLEVBQUUsU0FMaUM7QUFNekNDLFVBQUFBLE1BQU0sRUFBRTtBQU5pQyxTQUE1QztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQWVLVCxTQUFTLGdCQUNOO0FBQUEsNkJBQ0ksOERBQUMsOENBQUQ7QUFBVSxjQUFNLEVBQUVELFFBQWxCO0FBQTRCLFVBQUUsRUFBRUo7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQURNLEdBSU5HLElBbkJSLGVBcUJJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBUSxlQUFPLEVBQUVHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FWWTtBQUFBLENBQWhCOztLQUFNUDtBQXFDTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoe1xyXG4gICAgLy/soJXrs7Qg67Cb7JWE7Jik6riwXHJcbiAgICBpZCxcclxuICAgIHVzZXJJZCxcclxuICAgIHRpbWVzdGFtcCxcclxuICAgIHRleHQsXHJcbiAgICBvblVwZGF0ZSxcclxuICAgIGlzRWRpdGluZyxcclxuICAgIHN0YXJ0RWRpdFxyXG59KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgIHt1c2VySWR9eycgJ31cclxuICAgICAgICAgICAgPHN1Yj5cclxuICAgICAgICAgICAgICAgIHsvKiDsi5zqsITsoJXrs7Qg64Sj6riwICovfVxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyMTI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gaWQ9e2lkfS8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiB0ZXh0fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJNc2dJdGVtIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIl0sInNvdXJjZVJvb3QiOiIifQ==