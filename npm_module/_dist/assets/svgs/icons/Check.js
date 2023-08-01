"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function CheckIcon(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "9",
    viewBox: "0 0 11 9",
    fill: "none"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M9.563.088c.117-.117.304-.117.398 0l.68.656c.093.117.093.305 0 .399l-7.032 7.03a.27.27 0 01-.398 0L.07 5.058c-.094-.118-.094-.305 0-.399l.679-.68c.094-.093.281-.093.398 0l2.25 2.274L9.563.088z"
  }));
}
var _default = CheckIcon;
exports["default"] = _default;