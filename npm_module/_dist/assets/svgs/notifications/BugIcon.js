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
function BugIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: colorPalettes.orange['500'],
    d: "M5.111 3h5.778c.061 0 .111-.05.111-.111 0-.556-.122-1.065-.36-1.501A2.56 2.56 0 009.613.36 3.116 3.116 0 008.11 0H7.89c-.556 0-1.065.122-1.502.36A2.56 2.56 0 005.36 1.388c-.238.436-.36.945-.36 1.5 0 .062.05.112.111.112z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: colorPalettes.orange['500'],
    d: "M15.853 7.645h-2.715v-1.88c1.409 0 2.55-1.17 2.55-2.615a.15.15 0 00-.147-.15h-1.1a.15.15 0 00-.147.15c0 .655-.518 1.185-1.156 1.185H2.862c-.638 0-1.156-.53-1.156-1.185A.15.15 0 001.56 3H.459a.15.15 0 00-.147.15c0 1.445 1.141 2.614 2.55 2.614v1.88H.147A.15.15 0 000 7.796v1.053c0 .083.066.15.147.15h2.715v1.806c0 .122.004.245.013.363A3.616 3.616 0 00.734 14.49c0 .083.066.15.147.15h1.027a.15.15 0 00.147-.15c0-.831.439-1.559 1.094-1.95.11.323.25.632.416.921a5.229 5.229 0 001.844 1.89c.53.318 1.12.542 1.749.649a.15.15 0 00.147-.15V7.118a.15.15 0 01.146-.15h1.101a.15.15 0 01.147.15v8.73c0 .082.066.15.147.15a5.043 5.043 0 001.748-.649 5.228 5.228 0 001.845-1.89c.166-.291.306-.6.416-.921a2.275 2.275 0 011.09 1.952c0 .083.066.15.147.15h1.027a.15.15 0 00.147-.15 3.616 3.616 0 00-2.141-3.323c.007-.12.013-.24.013-.363V9h2.715a.15.15 0 00.147-.15V7.794a.15.15 0 00-.147-.15z"
  }));
}
var _default = BugIcon;
exports["default"] = _default;