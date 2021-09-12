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
  isEditing,
  myId
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
    children: [userId, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
      children: new Date(timestamp).toLocaleString("ko-KR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onUpdate,
      text: text,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined)
  }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 3
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
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router.js */ "next/router.js");
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher.js */ "./fetcher.js");
/* harmony import */ var _hooks_useInfiniteScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll.js */ "./hooks/useInfiniteScroll.js");


var _jsxFileName = "C:\\Users\\82106\\Desktop\\Front_end_Study\\SNS_service\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const UserIds = ["roy", "jay"]; // const getRandomUserId = () => UserIds[Math.round(Math.random())];
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

const MsgList = () => {
  const {
    query
  } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const userId = query.userId || query.userid || ""; //window에서 대/소문자를 구분하지 않는 것에 대한 해결책

  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: hasNext,
    1: setHasNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const intersecting = (0,_hooks_useInfiniteScroll_js__WEBPACK_IMPORTED_MODULE_6__.default)(fetchMoreEl); //fetchMoreEl가 화면상에 노출되면 True 아니면 false

  const onCreate = async text => {
    const newMsg = await (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_5__.default)("post", "/messages", {
      text,
      userId
    });
    if (!newMsg) throw Error("something wrong"); //안전장치
    // const newMsg = {
    //   id: msgs.length + 1,
    //   userId: getRandomUserId(),
    //   timestamp: Date.now(),
    //   text: `${msgs.length + 1} ${text}`,
    // };
    // msgs.unshift(newMsg)

    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_5__.default)("put", `/messages/${id}`, {
      text,
      userId
    });
    if (!newMsg) throw Error("something wrong"); //안전장치

    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs]; // newMsgs.splice(targetIndex, 1, {
      //   ...msgs[targetIndex],
      //   text,
      // });
      //서버에서 온 온전한 newMsg를 넣어주면 된다.

      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async id => {
    const receivedId = await (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_5__.default)("delete", `/messages/${id}`, {
      params: {
        userId
      } //params: {userId}가 `/messages/${id}?userId=${userId}`랑 같습니다.
      //params로 들어가지만 실제로는 server/src/routes/messages.js의 delete부분의 query로 들어갑니다.

    });
    setMsgs(msgs => {
      // 형변환이 자동으로 되기 때문에 receivedId를 문자열로 바꿔줍니다.
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + "");
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    var _msgs;

    const newMsgs = await (0,_fetcher_js__WEBPACK_IMPORTED_MODULE_5__.default)("get", "/messages", {
      parmas: {
        cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ""
      } //cursor: 맨 마지막에 있는 값의 id값을 넘겨준다.

    });

    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }

    setMsgs(msgs => [...msgs, ...newMsgs]);
  }; // useEffect(() => {
  // 2번 요청이 있어서 지워줍니다.
  //   getMessages();
  // }, []);


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 18
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        myId: userId
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined), " "]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = "http://localhost:8000"; //axios를 좀 더 편하게 쓰기 위해 만드는 것

const fetcher = async (method, url, ...rest) => {
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest);
  return res.data;
};
/*
...rest를 사용하는 이유
.get, .delete는 url뒤에 option이 오는데
.post, .put은 url뒤에 변경한 data가 오기는 것을 다 받아주기 위함

get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config])
put: axios.put(url, data[, config])
*/


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

/***/ }),

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfiniteScroll = targetEl => {
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: intersecting,
    1: setIntersecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //   const observer = new IntersectionObserver((entries) =>
  //     //entires에서 일부가 하나라도 있으면 true 없으면 false
  //      setIntersecting(entries.some((entry) => entry.isIntersecting))
  //   );
  // 새로고침때마다 계속 useInfiniteScroll이 실행 되는 것을 막기 위함

  const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => //entires에서 일부가 하나라도 있으면
      setIntersecting(entries.some(entry => entry.isIntersecting)));
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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);
    return () => {
      //    useInfiniteScroll이 화면상에 존재하지 않을 때
      getObserver().disconnect();
    };
  }, [targetEl.current]);
  return intersecting;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router.js":
/*!*********************************!*\
  !*** external "next/router.js" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next/router.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLElBQUksR0FBRyxFQUFqQjtBQUFxQkMsRUFBQUEsRUFBRSxHQUFHQztBQUExQixDQUFELEtBQTJDO0FBQ3hELFFBQU1DLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQXRCOztBQUVBLFFBQU1PLFFBQVEsR0FBR0MsQ0FBQyxJQUFJO0FBQ2xCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxlQUFGO0FBQ0EsVUFBTVAsSUFBSSxHQUFHRyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLEtBQTdCO0FBQ0FOLElBQUFBLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsS0FBaEIsR0FBd0IsRUFBeEI7QUFDQVYsSUFBQUEsTUFBTSxDQUFDQyxJQUFELEVBQU9DLEVBQVAsQ0FBTjtBQUNILEdBTkQ7O0FBUUEsc0JBQ0k7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRUcsUUFBNUM7QUFBQSw0QkFDSTtBQUNJLFNBQUcsRUFBRUQsT0FEVDtBQUVJLGtCQUFZLEVBQUVILElBRmxCO0FBR0ksaUJBQVcsRUFBQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTVE7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVVILENBckJEOztBQXdCQSxpRUFBZUYsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7O0FBRUEsTUFBTVksT0FBTyxHQUFHLENBQUM7QUFDZjtBQUNBVCxFQUFBQSxFQUZlO0FBR2ZVLEVBQUFBLE1BSGU7QUFJZkMsRUFBQUEsU0FKZTtBQUtmWixFQUFBQSxJQUxlO0FBTWZhLEVBQUFBLFFBTmU7QUFPZkMsRUFBQUEsUUFQZTtBQVFmQyxFQUFBQSxTQVJlO0FBU2ZDLEVBQUFBLFNBVGU7QUFVZkMsRUFBQUE7QUFWZSxDQUFELGtCQVlkO0FBQUksV0FBUyxFQUFDLGdCQUFkO0FBQUEsMEJBQ0U7QUFBQSxlQUNHTixNQURILEVBQ1csR0FEWCxlQUVFO0FBQUEsZ0JBRUcsSUFBSU8sSUFBSixDQUFTTixTQUFULEVBQW9CTyxjQUFwQixDQUFtQyxPQUFuQyxFQUE0QztBQUMzQ0MsUUFBQUEsSUFBSSxFQUFFLFNBRHFDO0FBRTNDQyxRQUFBQSxLQUFLLEVBQUUsU0FGb0M7QUFHM0NDLFFBQUFBLEdBQUcsRUFBRSxTQUhzQztBQUkzQ0MsUUFBQUEsSUFBSSxFQUFFLFNBSnFDO0FBSzNDQyxRQUFBQSxNQUFNLEVBQUUsU0FMbUM7QUFNM0NDLFFBQUFBLE1BQU0sRUFBRTtBQU5tQyxPQUE1QztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFlR1QsU0FBUyxnQkFDUjtBQUFBLDJCQUNFLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFSCxRQUFsQjtBQUE0QixVQUFJLEVBQUViLElBQWxDO0FBQXdDLFFBQUUsRUFBRUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURRLEdBS1JELElBcEJKLEVBdUJHaUIsSUFBSSxLQUFLTixNQUFULGlCQUNDO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVJLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVELFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjs7QUE0Q0EsaUVBQWVKLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTXFCLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWhCLEVBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFZTCx5REFBUyxFQUEzQjtBQUNBLFFBQU1qQixNQUFNLEdBQUdzQixLQUFLLENBQUN0QixNQUFOLElBQWdCc0IsS0FBSyxDQUFDQyxNQUF0QixJQUFnQyxFQUEvQyxDQUZvQixDQUUrQjs7QUFFbkQsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1csU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJaLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDYSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmQsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTWUsV0FBVyxHQUFHNUMsNkNBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsUUFBTTZDLFlBQVksR0FBR1osb0VBQWlCLENBQUNXLFdBQUQsQ0FBdEMsQ0FSb0IsQ0FRaUM7O0FBRXJELFFBQU1FLFFBQVEsR0FBRyxNQUFPM0MsSUFBUCxJQUFnQjtBQUMvQixVQUFNNEMsTUFBTSxHQUFHLE1BQU1mLG9EQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRTdCLE1BQUFBLElBQUY7QUFBUVcsTUFBQUE7QUFBUixLQUF0QixDQUE1QjtBQUNBLFFBQUksQ0FBQ2lDLE1BQUwsRUFBYSxNQUFNQyxLQUFLLENBQUMsaUJBQUQsQ0FBWCxDQUZrQixDQUVjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBVCxJQUFBQSxPQUFPLENBQUVELElBQUQsSUFBVSxDQUFDUyxNQUFELEVBQVMsR0FBR1QsSUFBWixDQUFYLENBQVA7QUFDRCxHQVhEOztBQWFBLFFBQU10QixRQUFRLEdBQUcsT0FBT2IsSUFBUCxFQUFhQyxFQUFiLEtBQW9CO0FBQ25DLFVBQU0yQyxNQUFNLEdBQUcsTUFBTWYsb0RBQU8sQ0FBQyxLQUFELEVBQVMsYUFBWTVCLEVBQUcsRUFBeEIsRUFBMkI7QUFBRUQsTUFBQUEsSUFBRjtBQUFRVyxNQUFBQTtBQUFSLEtBQTNCLENBQTVCO0FBQ0EsUUFBSSxDQUFDaUMsTUFBTCxFQUFhLE1BQU1DLEtBQUssQ0FBQyxpQkFBRCxDQUFYLENBRnNCLENBRVU7O0FBQzdDVCxJQUFBQSxPQUFPLENBQUVELElBQUQsSUFBVTtBQUNoQixZQUFNVyxXQUFXLEdBQUdYLElBQUksQ0FBQ1ksU0FBTCxDQUFnQkMsR0FBRCxJQUFTQSxHQUFHLENBQUMvQyxFQUFKLEtBQVdBLEVBQW5DLENBQXBCO0FBQ0EsVUFBSTZDLFdBQVcsR0FBRyxDQUFsQixFQUFxQixPQUFPWCxJQUFQO0FBQ3JCLFlBQU1jLE9BQU8sR0FBRyxDQUFDLEdBQUdkLElBQUosQ0FBaEIsQ0FIZ0IsQ0FJaEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQWMsTUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFdBQWYsRUFBNEIsQ0FBNUIsRUFBK0JGLE1BQS9CO0FBQ0EsYUFBT0ssT0FBUDtBQUNELEtBWk0sQ0FBUDtBQWFBRSxJQUFBQSxRQUFRO0FBQ1QsR0FqQkQ7O0FBbUJBLFFBQU1yQyxRQUFRLEdBQUcsTUFBT2IsRUFBUCxJQUFjO0FBQzdCLFVBQU1tRCxVQUFVLEdBQUcsTUFBTXZCLG9EQUFPLENBQUMsUUFBRCxFQUFZLGFBQVk1QixFQUFHLEVBQTNCLEVBQThCO0FBQzVEb0QsTUFBQUEsTUFBTSxFQUFFO0FBQUUxQyxRQUFBQTtBQUFGLE9BRG9ELENBRTVEO0FBQ0E7O0FBSDRELEtBQTlCLENBQWhDO0FBS0F5QixJQUFBQSxPQUFPLENBQUVELElBQUQsSUFBVTtBQUNoQjtBQUNBLFlBQU1XLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFMLENBQWdCQyxHQUFELElBQVNBLEdBQUcsQ0FBQy9DLEVBQUosS0FBV21ELFVBQVUsR0FBRyxFQUFoRCxDQUFwQjtBQUNBLFVBQUlOLFdBQVcsR0FBRyxDQUFsQixFQUFxQixPQUFPWCxJQUFQO0FBQ3JCLFlBQU1jLE9BQU8sR0FBRyxDQUFDLEdBQUdkLElBQUosQ0FBaEI7QUFDQWMsTUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFdBQWYsRUFBNEIsQ0FBNUI7QUFDQSxhQUFPRyxPQUFQO0FBQ0QsS0FQTSxDQUFQO0FBUUQsR0FkRDs7QUFlQSxRQUFNRSxRQUFRLEdBQUcsTUFBTWIsWUFBWSxDQUFDLElBQUQsQ0FBbkM7O0FBRUEsUUFBTWdCLFdBQVcsR0FBRyxZQUFZO0FBQUE7O0FBQzlCLFVBQU1MLE9BQU8sR0FBRyxNQUFNcEIsb0RBQU8sQ0FBQyxLQUFELEVBQVEsV0FBUixFQUFxQjtBQUNoRDBCLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxNQUFNLEVBQUUsVUFBQXJCLElBQUksQ0FBQ0EsSUFBSSxDQUFDc0IsTUFBTCxHQUFjLENBQWYsQ0FBSixnREFBdUJ4RCxFQUF2QixLQUE2QjtBQUF2QyxPQUR3QyxDQUNLOztBQURMLEtBQXJCLENBQTdCOztBQUdBLFFBQUlnRCxPQUFPLENBQUNRLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJqQixNQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0E7QUFDRDs7QUFDREosSUFBQUEsT0FBTyxDQUFFRCxJQUFELElBQVUsQ0FBQyxHQUFHQSxJQUFKLEVBQVUsR0FBR2MsT0FBYixDQUFYLENBQVA7QUFDRCxHQVRELENBM0RvQixDQXNFcEI7QUFDQTtBQUNBO0FBQ0E7OztBQUVBdEIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSWUsWUFBWSxJQUFJSCxPQUFwQixFQUE2QmUsV0FBVztBQUN6QyxHQUZRLEVBRU4sQ0FBQ1osWUFBRCxDQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLGVBQ0cvQixNQUFNLGlCQUFJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFZ0M7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR1IsSUFBSSxDQUFDdUIsR0FBTCxDQUFVQyxDQUFELGlCQUNSLDhEQUFDLDZDQUFELGtDQUVNQSxDQUZOO0FBR0UsZ0JBQVEsRUFBRTlDLFFBSFo7QUFJRSxnQkFBUSxFQUFFLE1BQU1DLFFBQVEsQ0FBQzZDLENBQUMsQ0FBQzFELEVBQUgsQ0FKMUI7QUFLRSxpQkFBUyxFQUFFLE1BQU1xQyxZQUFZLENBQUNxQixDQUFDLENBQUMxRCxFQUFILENBTC9CO0FBTUUsaUJBQVMsRUFBRW9DLFNBQVMsS0FBS3NCLENBQUMsQ0FBQzFELEVBTjdCO0FBT0UsWUFBSSxFQUFFVTtBQVBSLFVBQ09nRCxDQUFDLENBQUMxRCxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBZUU7QUFBSyxTQUFHLEVBQUV3QztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsRUFlNEIsR0FmNUI7QUFBQSxrQkFERjtBQW9CRCxDQW5HRDs7QUFxR0EsaUVBQWVULE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFFQTRCLCtEQUFBLEdBQXlCLHVCQUF6QixFQUVBOztBQUNBLE1BQU0vQixPQUFPLEdBQUcsT0FBT2tDLE1BQVAsRUFBZUMsR0FBZixFQUFvQixHQUFHQyxJQUF2QixLQUFnQztBQUM5QyxRQUFNQyxHQUFHLEdBQUcsTUFBTU4sOENBQUssQ0FBQ0csTUFBRCxDQUFMLENBQWNDLEdBQWQsRUFBbUIsR0FBR0MsSUFBdEIsQ0FBbEI7QUFDQSxTQUFPQyxHQUFHLENBQUNDLElBQVg7QUFDRCxDQUhEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLGlFQUFldEMsT0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBSXVDLFFBQUQsSUFBYztBQUN0QyxRQUFNQyxXQUFXLEdBQUd6RSw2Q0FBTSxDQUFDLElBQUQsQ0FBMUI7QUFDQSxRQUFNO0FBQUEsT0FBQzZDLFlBQUQ7QUFBQSxPQUFlNkI7QUFBZixNQUFrQzdDLCtDQUFRLENBQUMsS0FBRCxDQUFoRCxDQUZzQyxDQUl0QztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFFBQU04QyxXQUFXLEdBQUdKLGtEQUFXLENBQUMsTUFBTTtBQUNwQyxRQUFJLENBQUNFLFdBQVcsQ0FBQzlELE9BQWpCLEVBQTBCO0FBQ3hCOEQsTUFBQUEsV0FBVyxDQUFDOUQsT0FBWixHQUFzQixJQUFJaUUsb0JBQUosQ0FBMEJDLE9BQUQsSUFDN0M7QUFDQUgsTUFBQUEsZUFBZSxDQUFDRyxPQUFPLENBQUNDLElBQVIsQ0FBY0MsS0FBRCxJQUFXQSxLQUFLLENBQUNDLGNBQTlCLENBQUQsQ0FGSyxDQUF0QjtBQUlEOztBQUNELFdBQU9QLFdBQVcsQ0FBQzlELE9BQW5CO0FBQ0QsR0FSOEIsRUFRNUIsQ0FBQzhELFdBQVcsQ0FBQzlELE9BQWIsQ0FSNEIsQ0FBL0IsQ0FWc0MsQ0FvQnRDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFtQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJMEMsUUFBUSxDQUFDN0QsT0FBYixFQUFzQmdFLFdBQVcsR0FBR00sT0FBZCxDQUFzQlQsUUFBUSxDQUFDN0QsT0FBL0I7QUFFdEIsV0FBTyxNQUFNO0FBQ1g7QUFDQWdFLE1BQUFBLFdBQVcsR0FBR08sVUFBZDtBQUNELEtBSEQ7QUFJRCxHQVBRLEVBT04sQ0FBQ1YsUUFBUSxDQUFDN0QsT0FBVixDQVBNLENBQVQ7QUFTQSxTQUFPa0MsWUFBUDtBQUNELENBeENEOztBQTBDQSxpRUFBZVosaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBOztBQUVBLE1BQU1rRCxJQUFJLEdBQUcsbUJBQ1Q7QUFBQSwwQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUEsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUEsZ0JBREo7O0FBU0EsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7QUNYQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9mZXRjaGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXIuanNcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgICAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xyXG4gICAgICAgIG11dGF0ZSh0ZXh0LCBpZClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVmPXt0ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQiLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoe1xyXG4gIC8v7KCV67O0IOuwm+yVhOyYpOq4sFxyXG4gIGlkLFxyXG4gIHVzZXJJZCxcclxuICB0aW1lc3RhbXAsXHJcbiAgdGV4dCxcclxuICBvblVwZGF0ZSxcclxuICBvbkRlbGV0ZSxcclxuICBzdGFydEVkaXQsXHJcbiAgaXNFZGl0aW5nLFxyXG4gIG15SWQsXHJcbn0pID0+IChcclxuICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cclxuICAgIDxoMz5cclxuICAgICAge3VzZXJJZH17XCIgXCJ9XHJcbiAgICAgIDxzdWI+XHJcbiAgICAgICAgey8qIOyLnOqwhOygleuztCDrhKPquLAgKi99XHJcbiAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoXCJrby1LUlwiLCB7XHJcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvc3ViPlxyXG4gICAgPC9oMz5cclxuICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICB0ZXh0XHJcbiAgICApfVxyXG5cclxuICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXIuanNcIjtcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXIuanNcIjtcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gXCIuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qc1wiO1xyXG5cclxuY29uc3QgVXNlcklkcyA9IFtcInJveVwiLCBcImpheVwiXTtcclxuLy8gY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcclxuXHJcbi8vbXNncyA1MOqwnCDsnoTsnZjroZwg66eM65Ok6riwXHJcbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4vLyAgIC5maWxsKDApXHJcbi8vICAgLm1hcCgoXywgaSkgPT4gKHtcclxuLy8gICAgIGlkOiBpICsgMSxcclxuLy8gICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcblxyXG4vLyAgICAgLy8qMTAwMCDsnLzroZwgbWlsbGlzZWNvbmTrpbwgc2Vjb25kIOuLqOychOuhnCDrsJTqvrjqs6AgKiA2MOycvOuhnCDri6Tsi5wg67aE64uo7JyE66GcXHJcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcclxuLy8gICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcclxuLy8gICB9KSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTtcclxuLy8gLnJldmVyc2UoKVxyXG5cclxuLy8gW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkLFxyXG4vLyAgICAgICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyxcclxuLy8gICAgICAgICB0ZXh0OiAnMSBtb2NrIHRleHQnXHJcbi8vICAgICB9LFxyXG4vLyBdXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgXCJcIjsgLy93aW5kb3fsl5DshJwg64yAL+yGjOusuOyekOulvCDqtazrtoTtlZjsp4Ag7JWK64qUIOqyg+yXkCDrjIDtlZwg7ZW06rKw7LGFXHJcblxyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpOyAvL2ZldGNoTW9yZUVs6rCAIO2ZlOuptOyDgeyXkCDrhbjstpzrkJjrqbQgVHJ1ZSDslYTri4jrqbQgZmFsc2VcclxuXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInBvc3RcIiwgXCIvbWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7IC8v7JWI7KCE7J6l7LmYXHJcbiAgICAvLyBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAvLyAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAvLyAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAvLyAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgIC8vICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIC8vIH07XHJcbiAgICAvLyBtc2dzLnVuc2hpZnQobmV3TXNnKVxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicHV0XCIsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcihcInNvbWV0aGluZyB3cm9uZ1wiKTsgLy/slYjsoITsnqXsuZhcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIC8vIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XHJcbiAgICAgIC8vICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgIC8vICAgdGV4dCxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvL+yEnOuyhOyXkOyEnCDsmKgg7Jio7KCE7ZWcIG5ld01zZ+ulvCDrhKPslrTso7zrqbQg65Cc64ukLlxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKFwiZGVsZXRlXCIsIGAvbWVzc2FnZXMvJHtpZH1gLCB7XHJcbiAgICAgIHBhcmFtczogeyB1c2VySWQgfSxcclxuICAgICAgLy9wYXJhbXM6IHt1c2VySWR96rCAIGAvbWVzc2FnZXMvJHtpZH0/dXNlcklkPSR7dXNlcklkfWDrnpEg6rCZ7Iq164uI64ukLlxyXG4gICAgICAvL3BhcmFtc+uhnCDrk6TslrTqsIDsp4Drp4wg7Iuk7KCc66Gc64qUIHNlcnZlci9zcmMvcm91dGVzL21lc3NhZ2VzLmpz7J2YIGRlbGV0Zeu2gOu2hOydmCBxdWVyeeuhnCDrk6TslrTqsJHri4jri6QuXHJcbiAgICB9KTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8g7ZiV67OA7ZmY7J20IOyekOuPmeycvOuhnCDrkJjquLAg65WM66y47JeQIHJlY2VpdmVkSWTrpbwg66y47J6Q7Je066GcIOuwlOq/lOykjeuLiOuLpC5cclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyBcIlwiKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKFwiZ2V0XCIsIFwiL21lc3NhZ2VzXCIsIHtcclxuICAgICAgcGFybWFzOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCBcIlwiIH0sIC8vY3Vyc29yOiDrp6gg66eI7KeA66eJ7JeQIOyeiOuKlCDqsJLsnZggaWTqsJLsnYQg64SY6rKo7KSA64ukLlxyXG4gICAgfSk7XHJcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0SGFzTmV4dChmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAy67KIIOyalOyyreydtCDsnojslrTshJwg7KeA7JuM7KSN64uI64ukLlxyXG4gIC8vICAgZ2V0TWVzc2FnZXMoKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHQpIGdldE1lc3NhZ2VzKCk7XHJcbiAgfSwgW2ludGVyc2VjdGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPntcIiBcIn1cclxuICAgICAgey8qIO2VtOuLuSDrtoDrtoTsnbQg7ZmU66m07IOB7JeQIOuCmO2DgOuCrOydhCDrlYwg64uk7J2MIGRhdGHrpbwg67aI65+s7JmA6528ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiO1xyXG5cclxuLy9heGlvc+ulvCDsooAg642UIO2OuO2VmOqyjCDsk7DquLAg7JyE7ZW0IOunjOuTnOuKlCDqsoNcclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChtZXRob2QsIHVybCwgLi4ucmVzdCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCAuLi5yZXN0KTtcclxuICByZXR1cm4gcmVzLmRhdGE7XHJcbn07XHJcbi8qXHJcbi4uLnJlc3Trpbwg7IKs7Jqp7ZWY64qUIOydtOycoFxyXG4uZ2V0LCAuZGVsZXRl64qUIHVybOuSpOyXkCBvcHRpb27snbQg7Jik64qU642wXHJcbi5wb3N0LCAucHV07J2AIHVybOuSpOyXkCDrs4Dqsr3tlZwgZGF0YeqwgCDsmKTquLDripQg6rKD7J2EIOuLpCDrsJvslYTso7zquLAg7JyE7ZWoXHJcblxyXG5nZXQ6IGF4aW9zLmdldCh1cmxbLCBjb25maWddKVxyXG5kZWxldGU6IGF4aW9zLmRlbGV0ZSh1cmxbLCBjb25maWddKVxyXG5wb3N0OiBheGlvcy5wb3N0KHVybCwgZGF0YVssIGNvbmZpZ10pXHJcbnB1dDogYXhpb3MucHV0KHVybCwgZGF0YVssIGNvbmZpZ10pXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xyXG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VJbmZpbml0ZVNjcm9sbCA9ICh0YXJnZXRFbCkgPT4ge1xyXG4gIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtpbnRlcnNlY3RpbmcsIHNldEludGVyc2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+XHJcbiAgLy8gICAgIC8vZW50aXJlc+yXkOyEnCDsnbzrtoDqsIAg7ZWY64KY652864+EIOyeiOycvOuptCB0cnVlIOyXhuycvOuptCBmYWxzZVxyXG4gIC8vICAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSlcclxuICAvLyAgICk7XHJcblxyXG4gIC8vIOyDiOuhnOqzoOy5qOuVjOuniOuLpCDqs4Tsho0gdXNlSW5maW5pdGVTY3JvbGzsnbQg7Iuk7ZaJIOuQmOuKlCDqsoPsnYQg66eJ6riwIOychO2VqFxyXG4gIGNvbnN0IGdldE9ic2VydmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+XHJcbiAgICAgICAgLy9lbnRpcmVz7JeQ7IScIOydvOu2gOqwgCDtlZjrgpjrnbzrj4Qg7J6I7Jy866m0XHJcbiAgICAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYnNlcnZlclJlZi5jdXJyZW50O1xyXG4gIH0sIFtvYnNlcnZlclJlZi5jdXJyZW50XSk7XHJcblxyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgIOqwkOyLnO2VoCDrjIDsg4Eg7KeA7KCVXHJcbiAgLy8gICAgIGlmICh0YXJnZXRFbC5jdXJyZW50KSBvYnNlcnZlci5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpO1xyXG5cclxuICAvLyAgICAgcmV0dXJuICgpID0+IHtcclxuICAvLyAgICB1c2VJbmZpbml0ZVNjcm9sbOydtCDtmZTrqbTsg4Hsl5Ag7KG07J6s7ZWY7KeAIOyViuydhCDrlYxcclxuICAvLyAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgLy8gICAgIH07XHJcbiAgLy8gICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRhcmdldEVsLmN1cnJlbnQpIGdldE9ic2VydmVyKCkub2JzZXJ2ZSh0YXJnZXRFbC5jdXJyZW50KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyAgICB1c2VJbmZpbml0ZVNjcm9sbOydtCDtmZTrqbTsg4Hsl5Ag7KG07J6s7ZWY7KeAIOyViuydhCDrlYxcclxuICAgICAgZ2V0T2JzZXJ2ZXIoKS5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFt0YXJnZXRFbC5jdXJyZW50XSk7XHJcblxyXG4gIHJldHVybiBpbnRlcnNlY3Rpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbmZpbml0ZVNjcm9sbDtcclxuIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0J1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICA8aDE+U0lNUExFIFNOUzwvaDE+XHJcbiAgICA8TXNnTGlzdCAvPlxyXG4gICAgPC8+XHJcbilcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJvbkRlbGV0ZSIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJVc2VySWRzIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcmlkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwib25DcmVhdGUiLCJuZXdNc2ciLCJFcnJvciIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwicGFybWFzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJ1c2VDYWxsYmFjayIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJzZXRJbnRlcnNlY3RpbmciLCJnZXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==