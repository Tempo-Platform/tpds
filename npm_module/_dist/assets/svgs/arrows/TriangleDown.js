"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function TriangleDown(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    className: "chevron-down"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.937 1.61c.235-.211.235-.563.024-.797C8.75.578 8.398.578 8.164.789l-3.187 3-3.165-3c-.234-.21-.585-.21-.796.024-.211.234-.211.586.023.796l3.563 3.375c.117.094.257.141.375.141.14 0 .28-.047.398-.14l3.562-3.376z"
  }));
}
var _default = TriangleDown;
exports["default"] = _default;