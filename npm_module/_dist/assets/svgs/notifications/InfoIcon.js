"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../tokens/index.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var colorTokens = _index["default"].colors;
var colorPalettes = colorTokens.color_palettes;
function InfoIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: colorPalettes.blue['500'],
    d: "M8 16A8 8 0 108 0a8 8 0 000 16z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "M8 3c-.833 0-1.5.709-1.5 1.547 0 .86.667 1.547 1.5 1.547.813 0 1.5-.688 1.5-1.547C9.5 3.709 8.812 3 8 3zM6 11.744c0-.207.167-.375.417-.375h.416V8.65h-.416c-.25 0-.417-.169-.417-.375v-.9C6 7.169 6.167 7 6.417 7H8.75c.23 0 .417.169.417.375v3.994h.416c.23 0 .417.168.417.375v.881c0 .225-.188.375-.417.375H6.417c-.25 0-.417-.15-.417-.375v-.881z"
  }));
}
var _default = InfoIcon;
exports["default"] = _default;