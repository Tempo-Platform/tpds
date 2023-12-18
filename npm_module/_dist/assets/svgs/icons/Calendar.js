"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Calendar(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    className: "relative top-[-1px]"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M11.556 0a.889.889 0 01.882.785l.006.104v.889h1.778a1.778 1.778 0 011.774 1.644l.004.134v10.666a1.778 1.778 0 01-1.644 1.774l-.134.004H1.778a1.778 1.778 0 01-1.774-1.644L0 14.222V3.556a1.778 1.778 0 011.644-1.774l.134-.004h1.778v-.89A.889.889 0 015.327.786l.006.104v.889h5.334v-.89A.889.889 0 0111.556 0zm2.666 8H1.778v6.222h12.444V8zm0-4.444H1.778v2.666h12.444V3.556z"
  }));
}
var _default = Calendar;
exports["default"] = _default;