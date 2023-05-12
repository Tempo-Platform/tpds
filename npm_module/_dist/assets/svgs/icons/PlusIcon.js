"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

function PlusIcon(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement(_StyledSvg, Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "44",
    height: "44",
    viewBox: "0 0 44 44"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0H44V44H0z",
    opacity: "0.01"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 21H30V23H14z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M23 14H39V16H23z",
    transform: "rotate(90 23 14)"
  }));
}
var _default = PlusIcon;
exports["default"] = _default;
var _StyledSvg = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "PlusIcon___StyledSvg",
  componentId: "sc-1qz6oqv-0"
})({
  "fill": "currentColor",
  "color": "var(--text-primary)"
});