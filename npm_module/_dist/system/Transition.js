"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Transition;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@headlessui/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Transition(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Transition, getProps(props));
}
Transition.Child = function TransitionChild(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Transition.Child, getProps(props));
};
function getProps(props) {
  return _objectSpread(_objectSpread({}, props), {}, {
    enter: 'enter',
    enterFrom: 'enter-from',
    enterTo: 'enter-to',
    entered: 'entered',
    leave: 'leave',
    leaveFrom: 'leave-from',
    leaveTo: 'leave-to',
    css: {
      '&.enter': props.enter,
      '&.enter-from': props.enterFrom,
      '&.enter-to': props.enterTo,
      '&.entered': props.entered,
      '&.leave': props.leave,
      '&.leave-from': props.leaveFrom,
      '&.leave-to': props.leaveTo
    },
    beforeEnter: function beforeEnter() {
      var _props$beforeEnter;
      return (_props$beforeEnter = props.beforeEnter) === null || _props$beforeEnter === void 0 ? void 0 : _props$beforeEnter.call(props);
    },
    afterEnter: function afterEnter() {
      var _props$afterEnter;
      return (_props$afterEnter = props.afterEnter) === null || _props$afterEnter === void 0 ? void 0 : _props$afterEnter.call(props);
    },
    beforeLeave: function beforeLeave() {
      var _props$beforeLeave;
      return (_props$beforeLeave = props.beforeLeave) === null || _props$beforeLeave === void 0 ? void 0 : _props$beforeLeave.call(props);
    },
    afterLeave: function afterLeave() {
      var _props$afterLeave;
      return (_props$afterLeave = props.afterLeave) === null || _props$afterLeave === void 0 ? void 0 : _props$afterLeave.call(props);
    }
  });
}