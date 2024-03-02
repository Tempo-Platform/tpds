"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _buttons = require("../../elements/buttons");
var _typography = require("../../elements/typography");
var _layout = require("../../elements/layout");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}

// @ts-ignore
var Modal = function Modal(_ref) {
  var _ref$showOpen = _ref.showOpen,
    showOpen = _ref$showOpen === void 0 ? false : _ref$showOpen,
    _ref$clickElement = _ref.clickElement,
    clickElement = _ref$clickElement === void 0 ? null : _ref$clickElement,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Modal title' : _ref$title,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? '500px' : _ref$maxWidth,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '' : _ref$description,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : _ref$content,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$overlayProps = _ref.overlayProps,
    overlayProps = _ref$overlayProps === void 0 ? null : _ref$overlayProps,
    _ref$titleProps = _ref.titleProps,
    titleProps = _ref$titleProps === void 0 ? null : _ref$titleProps,
    _ref$descriptionProps = _ref.descriptionProps,
    descriptionProps = _ref$descriptionProps === void 0 ? null : _ref$descriptionProps,
    dialogOnClose = _ref.dialogOnClose;
  var _useState = (0, _react.useState)(showOpen),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  function closeModal() {
    setIsOpen(false);
    dialogOnClose === null || dialogOnClose === void 0 ? void 0 : dialogOnClose();
  }
  (0, _react.useEffect)(function () {
    setIsOpen(showOpen);
  }, [showOpen]);
  return /*#__PURE__*/_react["default"].createElement("div", null, (showOpen || isOpen) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 z-50 overflow-y-auto",
    onClose: closeModal,
    open: showOpen || isOpen
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full min-h-screen text-center flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "tpds-modal-background-overlay fixed w-full h-full bg-black opacity-50"
  }, overlayProps)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: maxWidth
    },
    className: "mx-2 inline-flex flex-col w-full rounded-lg my-8 overflow-hidden text-left align-middle transition-all transform bg-window dark:border-2 dark:border-window shadow-xl"
  }, /*#__PURE__*/_react["default"].createElement(Content, {
    title: title,
    description: description,
    content: content,
    options: options,
    titleProps: titleProps,
    descriptionProps: descriptionProps,
    closeModal: function closeModal() {
      setIsOpen(false);
      dialogOnClose === null || dialogOnClose === void 0 ? void 0 : dialogOnClose();
    }
  })))), clickElement &&
  /*#__PURE__*/
  /* eslint-disable-next-line */
  _react["default"].createElement("div", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "inline-flex"
  }, clickElement));
};
function Content(_ref2) {
  var title = _ref2.title,
    description = _ref2.description,
    content = _ref2.content,
    options = _ref2.options,
    titleProps = _ref2.titleProps,
    descriptionProps = _ref2.descriptionProps,
    closeModal = _ref2.closeModal;
  if (!options || !options.length || !options[0]) {
    options = [{
      callBack: function callBack() {
        return closeModal();
      },
      label: 'Close',
      variant: 'secondary'
    }];
  }
  var handleOption = function handleOption(callBack) {
    if (callBack) {
      callBack();
    }
    closeModal();
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-sm px-sm"
  }, /*#__PURE__*/_react["default"].createElement(_typography.H6, _extends({
    isBold: true
  }, titleProps), title), description && /*#__PURE__*/_react["default"].createElement(_typography.P, _extends({}, descriptionProps, {
    className: "text-secondary leading-tight mt-1"
  }), description), !isEmpty(content.props) && /*#__PURE__*/_react["default"].createElement(_layout.Separator, {
    className: "my-xs"
  }), !isEmpty(content.props) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-grey-light-scale-500"
  }, content)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-sm py-6 bg-grey-light-scale-200 dark:bg-grey-dark-scale-700 border-t border-grey-light-scale-400 dark:border-grey-dark-scale-300"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-4 justify-end"
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
      className: "min-w-[80px]",
      key: option.label,
      onClick: function onClick() {
        return handleOption(option.callBack);
      },
      variant: option.variant || 'default'
    }, option.label || 'Close');
  }))));
}
var _default = Modal;
exports["default"] = _default;