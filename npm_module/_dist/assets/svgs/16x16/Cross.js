"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function CrossIcon(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#D9D9D9",
    d: "M0 0H16V16H0z",
    opacity: "0.01"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M9.258 7.981l4.658 4.658c.112.112.112.3 0 .45l-.827.826c-.15.113-.338.113-.45 0l-.79-.788-3.83-3.869-4.658 4.658c-.112.112-.3.112-.45 0l-.826-.827c-.113-.15-.113-.338 0-.45L6.742 7.98l-4.657-4.62c-.113-.112-.113-.3 0-.45l.826-.826c.15-.113.338-.113.45 0L8.02 6.742l4.62-4.657c.112-.113.3-.113.45 0l.826.826c.113.15.113.338 0 .45l-.788.79-3.869 3.83z"
  }));
}
var _default = CrossIcon;
exports["default"] = _default;