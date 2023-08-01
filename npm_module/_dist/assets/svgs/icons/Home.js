"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Home(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    className: "home-icon",
    fill: "currentColor"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.492 5.938l-1.265-1.079V1.625a.385.385 0 00-.375-.375h-1.477a.385.385 0 00-.375.375v1.266L7.492.687A.806.806 0 007 .5a.781.781 0 00-.516.188l-6 5.25A.752.752 0 001 7.25h.75V11c0 .844.656 1.5 1.5 1.5h7.477c.843 0 1.5-.656 1.5-1.5V7.25H13c.398 0 .75-.328.75-.75 0-.21-.094-.398-.258-.563zM8.5 7.508A.5.5 0 017.984 8H5.992a.48.48 0 01-.492-.492V5.516A.5.5 0 015.992 5h1.992a.52.52 0 01.516.516v1.992z"
  }));
}
var _default = Home;
exports["default"] = _default;