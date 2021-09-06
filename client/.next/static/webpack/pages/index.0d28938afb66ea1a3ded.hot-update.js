"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var UserIds = ['roy', 'jay'];

var getRandomUserId = function getRandomUserId() {
  return UserIds[Math.round(Math.random())];
}; //msgs 50개 임의로 만들기


var originalMsgs = Array(50).fill(0).map(function (_, i) {
  return {
    id: i + 1,
    userId: getRandomUserId(),
    //*1000 으로 millisecond를 second 단위로 바꾸고 * 60으로 다시 분단위로 
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: "".concat(50 - i, " mock text")
  };
}); // .reverse()
// [
//     {
//         id: 1,
//         userId: getRandomUserId,
//         timestamp: 1234567890123,
//         text: '1 mock text'
//     },
// ]

var MsgList = function MsgList() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1];

  var onCreate = function onCreate(text) {
    var newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: "".concat(msgs.length + 1, " ").concat(text)
    }; // msgs.unshift(newMsg)

    setMsgs(function (msgs) {
      return [newMsg].concat((0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));
    });
  };

  var onUpdate = function onUpdate(text, id) {
    setMsgs(function (msgs) {
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      });
      if (targetIndex < 0) return msgs;

      var newMsgs = (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);

      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text: text
      }));
      return newMsgs;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate,
          startEdit: function startEdit() {
            return setEditingId(x.id);
          },
          isEditing: editingId === x.id
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "01fMYNZrB/VzC7UxNBW1xkTAcyg=");

_c = MsgList;
/* harmony default export */ __webpack_exports__["default"] = (MsgList);

var _c;

$RefreshReg$(_c, "MsgList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQyODkzOGFmYjY2ZWExYTNkZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1HLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWhCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUFNRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWCxDQUFELENBQWI7QUFBQSxDQUF4QixFQUVBOzs7QUFDQSxJQUFNQyxZQUFZLEdBQUdDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixDQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCLFVBQUVDLENBQUYsRUFBTUMsQ0FBTjtBQUFBLFNBQWE7QUFDcERDLElBQUFBLEVBQUUsRUFBRUQsQ0FBQyxHQUFHLENBRDRDO0FBRXBERSxJQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGNkI7QUFJcEQ7QUFDQVksSUFBQUEsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUtILENBQU4sSUFBVyxJQUFYLEdBQWtCLEVBTE87QUFNcERJLElBQUFBLElBQUksWUFBSyxLQUFLSixDQUFWO0FBTmdELEdBQWI7QUFBQSxDQUF0QixDQUFyQixFQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ01sQiwrQ0FBUSxDQUFDUSxZQUFELENBRGQ7QUFBQSxNQUNYVyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFBQSxtQkFFZ0JwQiwrQ0FBUSxDQUFDLElBQUQsQ0FGeEI7QUFBQSxNQUVYcUIsU0FGVztBQUFBLE1BRUFDLFlBRkE7O0FBSWxCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFOLElBQUksRUFBSTtBQUNyQixRQUFNTyxNQUFNLEdBQUc7QUFDWFYsTUFBQUEsRUFBRSxFQUFFSyxJQUFJLENBQUNNLE1BQUwsR0FBYyxDQURQO0FBRVhWLE1BQUFBLE1BQU0sRUFBRVgsZUFBZSxFQUZaO0FBR1hZLE1BQUFBLFNBQVMsRUFBRVUsSUFBSSxDQUFDQyxHQUFMLEVBSEE7QUFJWFYsTUFBQUEsSUFBSSxZQUFLRSxJQUFJLENBQUNNLE1BQUwsR0FBYyxDQUFuQixjQUF3QlIsSUFBeEI7QUFKTyxLQUFmLENBRHFCLENBT3JCOztBQUNBRyxJQUFBQSxPQUFPLENBQUMsVUFBQUQsSUFBSTtBQUFBLGNBQU1LLE1BQU4sNkpBQWlCTCxJQUFqQjtBQUFBLEtBQUwsQ0FBUDtBQUNILEdBVEQ7O0FBV0EsTUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1gsSUFBRCxFQUFPSCxFQUFQLEVBQWM7QUFDM0JNLElBQUFBLE9BQU8sQ0FBQyxVQUFBRCxJQUFJLEVBQUk7QUFDWixVQUFNVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBTCxDQUFlLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNqQixFQUFKLEtBQVdBLEVBQWY7QUFBQSxPQUFsQixDQUFwQjtBQUNBLFVBQUllLFdBQVcsR0FBRyxDQUFsQixFQUFxQixPQUFPVixJQUFQOztBQUNyQixVQUFNYSxPQUFPLEdBQUcsb0pBQUliLElBQVAsQ0FBYjs7QUFDQWEsTUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFdBQWYsRUFBNEIsQ0FBNUIsa0NBQ09WLElBQUksQ0FBQ1UsV0FBRCxDQURYO0FBRUlaLFFBQUFBLElBQUksRUFBSkE7QUFGSjtBQUlBLGFBQU9lLE9BQVA7QUFDSCxLQVRNLENBQVA7QUFVSCxHQVhEOztBQWNBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVUO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDS0osSUFBSSxDQUFDUixHQUFMLENBQVMsVUFBQXVCLENBQUM7QUFBQSw0QkFDUCw4REFBQyw2Q0FBRCxrQ0FBd0JBLENBQXhCO0FBQTJCLGtCQUFRLEVBQUVOLFFBQXJDO0FBQStDLG1CQUFTLEVBQUU7QUFBQSxtQkFBTU4sWUFBWSxDQUFDWSxDQUFDLENBQUNwQixFQUFILENBQWxCO0FBQUEsV0FBMUQ7QUFBb0YsbUJBQVMsRUFBRU8sU0FBUyxLQUFLYSxDQUFDLENBQUNwQjtBQUEvRyxZQUFjb0IsQ0FBQyxDQUFDcEIsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQVVILENBdkNEOztHQUFNSTs7S0FBQUE7QUF5Q04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSdcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXHJcblxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuLy9tc2dzIDUw6rCcIOyehOydmOuhnCDrp4zrk6TquLBcclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKCggXyAsIGkpID0+ICh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgXHJcbiAgICAvLyoxMDAwIOycvOuhnCBtaWxsaXNlY29uZOulvCBzZWNvbmQg64uo7JyE66GcIOuwlOq+uOqzoCAqIDYw7Jy866GcIOuLpOyLnCDrtoTri6jsnITroZwgXHJcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcclxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxyXG59KSlcclxuXHJcbi8vIC5yZXZlcnNlKClcclxuXHJcbi8vIFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCxcclxuLy8gICAgICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsXHJcbi8vICAgICAgICAgdGV4dDogJzEgbW9jayB0ZXh0J1xyXG4vLyAgICAgfSxcclxuLy8gXVxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICAgICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbXNncy51bnNoaWZ0KG5ld01zZylcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgICAgICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9Lz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gb25VcGRhdGU9e29uVXBkYXRlfSBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX0gaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJEYXRlIiwibm93Iiwib25VcGRhdGUiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==