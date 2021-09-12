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
/* harmony import */ var C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router.js */ "../node_modules/next/router.js");
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fetcher.js */ "./fetcher.js");
/* harmony import */ var _hooks_useInfiniteScroll_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInfiniteScroll.js */ "./hooks/useInfiniteScroll.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var UserIds = ["roy", "jay"]; // const getRandomUserId = () => UserIds[Math.round(Math.random())];
//msgs 50개 임의로 만들기
// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => ({
//     id: i + 1,
//     userId: getRandomUserId(),
//     //*1000 으로 millisecond를 second 단위로 바꾸고 * 60으로 다시 분단위로
//     timestamp: 1234567890123 + (50 - i) * 1000 * 60,
//     text: `${50 - i} mock text`,
//   }));
// console.log(JSON.stringify(originalMsgs));
// .reverse()
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

  var _useRouter = (0,next_router_js__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),
      query = _useRouter.query;

  var userId = query.userId || query.userid || ""; //window에서 대/소문자를 구분하지 않는 것에 대한 해결책

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      hasNext = _useState3[0],
      setHasNext = _useState3[1];

  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var intersecting = (0,_hooks_useInfiniteScroll_js__WEBPACK_IMPORTED_MODULE_10__.default)(fetchMoreEl); //fetchMoreEl가 화면상에 노출되면 True 아니면 false

  var onCreate = /*#__PURE__*/function () {
    var _ref = (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {
      var newMsg;
      return C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_9__.default)("post", "/messages", {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context.sent;

              if (newMsg) {
                _context.next = 5;
                break;
              }

              throw Error("something wrong");

            case 5:
              //안전장치
              // const newMsg = {
              //   id: msgs.length + 1,
              //   userId: getRandomUserId(),
              //   timestamp: Date.now(),
              //   text: `${msgs.length + 1} ${text}`,
              // };
              // msgs.unshift(newMsg)
              setMsgs(function (msgs) {
                return [newMsg].concat((0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs));
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCreate(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onUpdate = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(text, id) {
      var newMsg;
      return C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_9__.default)("put", "/messages/".concat(id), {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context2.sent;

              if (newMsg) {
                _context2.next = 5;
                break;
              }

              throw Error("something wrong");

            case 5:
              //안전장치
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs); // newMsgs.splice(targetIndex, 1, {
                //   ...msgs[targetIndex],
                //   text,
                // });
                //서버에서 온 온전한 newMsg를 넣어주면 된다.


                newMsgs.splice(targetIndex, 1, newMsg);
                return newMsgs;
              });
              doneEdit();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onUpdate(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var _onDelete = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {
      var receivedId;
      return C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_9__.default)("delete", "/messages/".concat(id), {
                params: {
                  userId: userId
                } //params: {userId}가 `/messages/${id}?userId=${userId}`랑 같습니다.
                //params로 들어가지만 실제로는 server/src/routes/messages.js의 delete부분의 query로 들어갑니다.

              });

            case 2:
              receivedId = _context3.sent;
              setMsgs(function (msgs) {
                // 형변환이 자동으로 되기 때문에 receivedId를 문자열로 바꿔줍니다.
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === receivedId + "";
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1);
                return newMsgs;
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDelete(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };

  var getMessages = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var _msgs;

      var newMsgs;
      return C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_9__.default)("get", "/messages", {
                parmas: {
                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ""
                } //cursor: 맨 마지막에 있는 값의 id값을 넘겨준다.

              });

            case 2:
              newMsgs = _context4.sent;

              if (!(newMsgs.length === 0)) {
                _context4.next = 6;
                break;
              }

              setHasNext(false);
              return _context4.abrupt("return");

            case 6:
              setMsgs(function (msgs) {
                return [].concat((0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs), (0,C_Users_82106_Desktop_Front_end_Study_SNS_service_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(newMsgs));
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getMessages() {
      return _ref4.apply(this, arguments);
    };
  }(); // useEffect(() => {
  // 2번 요청이 있어서 지워줍니다.
  //   getMessages();
  // }, []);


  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate,
          onDelete: function onDelete() {
            return _onDelete(x.id);
          },
          startEdit: function startEdit() {
            return setEditingId(x.id);
          },
          isEditing: editingId === x.id,
          myId: userId
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this), " "]
  }, void 0, true);
};

_s(MsgList, "rhXsinqIO4JJEZ3lbrpJmHFJ5I0=", false, function () {
  return [next_router_js__WEBPACK_IMPORTED_MODULE_6__.useRouter, _hooks_useInfiniteScroll_js__WEBPACK_IMPORTED_MODULE_10__.default];
});

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


/***/ }),

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



var useInfiniteScroll = function useInfiniteScroll(targetEl) {
  _s();

  var observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      intersecting = _useState[0],
      setIntersecting = _useState[1]; //   const observer = new IntersectionObserver((entries) =>
  //     //entires에서 일부가 하나라도 있으면 true 없으면 false
  //      setIntersecting(entries.some((entry) => entry.isIntersecting))
  //   );
  // 새로고침때마다 계속 useInfiniteScroll이 실행 되는 것을 막기 위함


  var getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(function (entries) {
        return (//entires에서 일부가 하나라도 있으면
          setIntersecting(entries.some(function (entry) {
            return entry.isIntersecting;
          }))
        );
      });
    }

    return observerRef.current;
  }, [observerRef.current]); //   useEffect(() => {
  //      감시할 대상 지정
  //     if (targetEl.current) observer.observe(targetEl.current);
  //     return () => {
  //    useInfiniteScroll이 화면상에 존재하지 않을 때
  //       observer.disconnect();
  //     };
  //   }, [targetEl.current]);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (targetEl.current) getObserver().observe(targetEl.current);
    return function () {
      //    useInfiniteScroll이 화면상에 존재하지 않을 때
      getObserver().disconnect();
    };
  }, [targetEl.current]);
  return intersecting;
};

_s(useInfiniteScroll, "wgJwkE67wQsXc1eiCmrL0CTwPqc=");

/* harmony default export */ __webpack_exports__["default"] = (useInfiniteScroll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzQ0MGFhNjMzM2NjNjBhNjJjOTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1RLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWhCLEVBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxtQkFDRk4seURBQVMsRUFEUDtBQUFBLE1BQ1pPLEtBRFksY0FDWkEsS0FEWTs7QUFFcEIsTUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQU4sSUFBZ0JELEtBQUssQ0FBQ0UsTUFBdEIsSUFBZ0MsRUFBL0MsQ0FGb0IsQ0FFK0I7O0FBRi9CLGtCQUlJWiwrQ0FBUSxDQUFDLEVBQUQsQ0FKWjtBQUFBLE1BSWJhLElBSmE7QUFBQSxNQUlQQyxPQUpPOztBQUFBLG1CQUtjZCwrQ0FBUSxDQUFDLElBQUQsQ0FMdEI7QUFBQSxNQUtiZSxTQUxhO0FBQUEsTUFLRkMsWUFMRTs7QUFBQSxtQkFNVWhCLCtDQUFRLENBQUMsSUFBRCxDQU5sQjtBQUFBLE1BTWJpQixPQU5hO0FBQUEsTUFNSkMsVUFOSTs7QUFPcEIsTUFBTUMsV0FBVyxHQUFHakIsNkNBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsTUFBTWtCLFlBQVksR0FBR2IscUVBQWlCLENBQUNZLFdBQUQsQ0FBdEMsQ0FSb0IsQ0FRaUM7O0FBRXJELE1BQU1FLFFBQVE7QUFBQSxxVEFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNaEIsb0RBQU8s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QUEwQjtBQUN4QkgsTUFBQUEsV0FBVyxDQUFDRyxPQUFaLEdBQXNCLElBQUlDLG9CQUFKLENBQXlCLFVBQUNDLE9BQUQ7QUFBQSxlQUM3QztBQUNBSixVQUFBQSxlQUFlLENBQUNJLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV0EsS0FBSyxDQUFDQyxjQUFqQjtBQUFBLFdBQWIsQ0FBRDtBQUY4QjtBQUFBLE9BQXpCLENBQXRCO0FBSUQ7O0FBQ0QsV0FBT1IsV0FBVyxDQUFDRyxPQUFuQjtBQUNELEdBUjhCLEVBUTVCLENBQUNILFdBQVcsQ0FBQ0csT0FBYixDQVI0QixDQUEvQixDQVZzQyxDQW9CdEM7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTlDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUkwQyxRQUFRLENBQUNJLE9BQWIsRUFBc0JELFdBQVcsR0FBR08sT0FBZCxDQUFzQlYsUUFBUSxDQUFDSSxPQUEvQjtBQUV0QixXQUFPLFlBQU07QUFDWDtBQUNBRCxNQUFBQSxXQUFXLEdBQUdRLFVBQWQ7QUFDRCxLQUhEO0FBSUQsR0FQUSxFQU9OLENBQUNYLFFBQVEsQ0FBQ0ksT0FBVixDQVBNLENBQVQ7QUFTQSxTQUFPM0IsWUFBUDtBQUNELENBeENEOztHQUFNYjs7QUEwQ04sK0RBQWVBLGlCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlci5qc1wiO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vZmV0Y2hlci5qc1wiO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsLmpzXCI7XHJcblxyXG5jb25zdCBVc2VySWRzID0gW1wicm95XCIsIFwiamF5XCJdO1xyXG4vLyBjb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG5cclxuLy9tc2dzIDUw6rCcIOyehOydmOuhnCDrp4zrk6TquLBcclxuLy8gY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbi8vICAgLmZpbGwoMClcclxuLy8gICAubWFwKChfLCBpKSA9PiAoe1xyXG4vLyAgICAgaWQ6IGkgKyAxLFxyXG4vLyAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuXHJcbi8vICAgICAvLyoxMDAwIOycvOuhnCBtaWxsaXNlY29uZOulvCBzZWNvbmQg64uo7JyE66GcIOuwlOq+uOqzoCAqIDYw7Jy866GcIOuLpOyLnCDrtoTri6jsnITroZxcclxuLy8gICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxyXG4vLyAgICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgLFxyXG4vLyAgIH0pKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpO1xyXG4vLyAucmV2ZXJzZSgpXHJcblxyXG4vLyBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQsXHJcbi8vICAgICAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzLFxyXG4vLyAgICAgICAgIHRleHQ6ICcxIG1vY2sgdGV4dCdcclxuLy8gICAgIH0sXHJcbi8vIF1cclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCBcIlwiOyAvL3dpbmRvd+yXkOyEnCDrjIAv7IaM66y47J6Q66W8IOq1rOu2hO2VmOyngCDslYrripQg6rKD7JeQIOuMgO2VnCDtlbTqsrDssYVcclxuXHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7IC8vZmV0Y2hNb3JlRWzqsIAg7ZmU66m07IOB7JeQIOuFuOy2nOuQmOuptCBUcnVlIOyVhOuLiOuptCBmYWxzZVxyXG5cclxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicG9zdFwiLCBcIi9tZXNzYWdlc1wiLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcihcInNvbWV0aGluZyB3cm9uZ1wiKTsgLy/slYjsoITsnqXsuZhcclxuICAgIC8vIGNvbnN0IG5ld01zZyA9IHtcclxuICAgIC8vICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgIC8vICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgIC8vICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgLy8gICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgLy8gfTtcclxuICAgIC8vIG1zZ3MudW5zaGlmdChuZXdNc2cpXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwdXRcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpOyAvL+yViOyghOyepey5mFxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgLy8gbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgLy8gICAuLi5tc2dzW3RhcmdldEluZGV4XSxcclxuICAgICAgLy8gICB0ZXh0LFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIC8v7ISc67KE7JeQ7IScIOyYqCDsmKjsoITtlZwgbmV3TXNn66W8IOuEo+yWtOyjvOuptCDrkJzri6QuXHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoXCJkZWxldGVcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcclxuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxyXG4gICAgICAvL3BhcmFtczoge3VzZXJJZH3qsIAgYC9tZXNzYWdlcy8ke2lkfT91c2VySWQ9JHt1c2VySWR9YOuekSDqsJnsirXri4jri6QuXHJcbiAgICAgIC8vcGFyYW1z66GcIOuTpOyWtOqwgOyngOunjCDsi6TsoJzroZzripQgc2VydmVyL3NyYy9yb3V0ZXMvbWVzc2FnZXMuanPsnZggZGVsZXRl67aA67aE7J2YIHF1ZXJ566GcIOuTpOyWtOqwkeuLiOuLpC5cclxuICAgIH0pO1xyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyDtmJXrs4DtmZjsnbQg7J6Q64+Z7Jy866GcIOuQmOq4sCDrlYzrrLjsl5AgcmVjZWl2ZWRJZOulvCDrrLjsnpDsl7TroZwg67CU6r+U7KSN64uI64ukLlxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArIFwiXCIpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIiwge1xyXG4gICAgICBwYXJtYXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8IFwiXCIgfSwgLy9jdXJzb3I6IOunqCDrp4jsp4Drp4nsl5Ag7J6I64qUIOqwkuydmCBpZOqwkuydhCDrhJjqsqjspIDri6QuXHJcbiAgICB9KTtcclxuICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRIYXNOZXh0KGZhbHNlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0TXNncygobXNncykgPT4gWy4uLm1zZ3MsIC4uLm5ld01zZ3NdKTtcclxuICB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vIDLrsogg7JqU7LKt7J20IOyeiOyWtOyEnCDsp4Dsm4zspI3ri4jri6QuXHJcbiAgLy8gICBnZXRNZXNzYWdlcygpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbaW50ZXJzZWN0aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+e1wiIFwifVxyXG4gICAgICB7Lyog7ZW064u5IOu2gOu2hOydtCDtmZTrqbTsg4Hsl5Ag64KY7YOA64Ks7J2EIOuVjCDri6TsnYwgZGF0YeulvCDrtojrn6zsmYDrnbwgKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlSW5maW5pdGVTY3JvbGwgPSAodGFyZ2V0RWwpID0+IHtcclxuICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaW50ZXJzZWN0aW5nLCBzZXRJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PlxyXG4gIC8vICAgICAvL2VudGlyZXPsl5DshJwg7J2867aA6rCAIO2VmOuCmOudvOuPhCDsnojsnLzrqbQgdHJ1ZSDsl4bsnLzrqbQgZmFsc2VcclxuICAvLyAgICAgIHNldEludGVyc2VjdGluZyhlbnRyaWVzLnNvbWUoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZykpXHJcbiAgLy8gICApO1xyXG5cclxuICAvLyDsg4jroZzqs6DsuajrlYzrp4jri6Qg6rOE7IaNIHVzZUluZmluaXRlU2Nyb2xs7J20IOyLpO2WiSDrkJjripQg6rKD7J2EIOunieq4sCDsnITtlahcclxuICBjb25zdCBnZXRPYnNlcnZlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghb2JzZXJ2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PlxyXG4gICAgICAgIC8vZW50aXJlc+yXkOyEnCDsnbzrtoDqsIAg7ZWY64KY652864+EIOyeiOycvOuptFxyXG4gICAgICAgIHNldEludGVyc2VjdGluZyhlbnRyaWVzLnNvbWUoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZykpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JzZXJ2ZXJSZWYuY3VycmVudDtcclxuICB9LCBbb2JzZXJ2ZXJSZWYuY3VycmVudF0pO1xyXG5cclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgICDqsJDsi5ztlaAg64yA7IOBIOyngOyglVxyXG4gIC8vICAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRFbC5jdXJyZW50KTtcclxuXHJcbiAgLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAgdXNlSW5maW5pdGVTY3JvbGzsnbQg7ZmU66m07IOB7JeQIOyhtOyerO2VmOyngCDslYrsnYQg65WMXHJcbiAgLy8gICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgfSwgW3RhcmdldEVsLmN1cnJlbnRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0YXJnZXRFbC5jdXJyZW50KSBnZXRPYnNlcnZlcigpLm9ic2VydmUodGFyZ2V0RWwuY3VycmVudCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gICAgdXNlSW5maW5pdGVTY3JvbGzsnbQg7ZmU66m07IOB7JeQIOyhtOyerO2VmOyngCDslYrsnYQg65WMXHJcbiAgICAgIGdldE9ic2VydmVyKCkuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pO1xyXG5cclxuICByZXR1cm4gaW50ZXJzZWN0aW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVJvdXRlciIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsImZldGNoZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIlVzZXJJZHMiLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicGFyYW1zIiwicmVjZWl2ZWRJZCIsImdldE1lc3NhZ2VzIiwicGFybWFzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCIsInVzZUNhbGxiYWNrIiwidGFyZ2V0RWwiLCJvYnNlcnZlclJlZiIsInNldEludGVyc2VjdGluZyIsImdldE9ic2VydmVyIiwiY3VycmVudCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9