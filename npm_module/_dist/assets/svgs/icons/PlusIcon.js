"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function PlusIcon(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "44",
    height: "44",
    viewBox: "0 0 44 44",
    fill: "none"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0H44V44H0z",
    opacity: "0.0001"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M14 21H30V23H14z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M23 14H39V16H23z",
    transform: "rotate(90 23 14)"
  }));
}
var _default = PlusIcon;
exports["default"] = _default;