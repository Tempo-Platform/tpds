"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@headlessui/react");
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

var stylesA = {};
stylesA[true] = {
  "position": "relative",
  "display": "inline-flex",
  "height": "1.5rem",
  "width": "2.75rem",
  "alignItems": "center",
  "borderRadius": "9999px",
  "--tw-bg-opacity": "1 !important",
  "backgroundColor": "rgb(45 185 45 / var(--tw-bg-opacity)) !important"
};
stylesA[false] = {
  "position": "relative",
  "display": "inline-flex",
  "height": "1.5rem",
  "width": "2.75rem",
  "alignItems": "center",
  "borderRadius": "9999px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(201 205 207 / var(--tw-bg-opacity))",
  ":is(.dark &)": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(62 67 71 / var(--tw-bg-opacity))"
  }
};
var stylesB = {};
stylesB[true] = {
  "display": "inline-block",
  "height": "1rem",
  "width": "1rem",
  "--tw-translate-x": "1.5rem",
  "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "borderRadius": "9999px",
  "backgroundColor": "var(--bg-body)"
};
stylesB[false] = {
  "display": "inline-block",
  "height": "1rem",
  "width": "1rem",
  "--tw-translate-x": "0.25rem",
  "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "borderRadius": "9999px",
  "backgroundColor": "var(--bg-body)"
};
function SwitchElement(_ref) {
  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? null : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/_react["default"].createElement(_react2.Switch, {
    checked: active,
    onChange: onChange,
    css: [{
      "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transitionDuration": "150ms"
    }, stylesA[active]],
    style: disabled ? {
      pointerEvents: 'none',
      opacity: 0.5
    } : null
  }, /*#__PURE__*/_react["default"].createElement("span", {
    css: stylesB[active]
  }));
}
var _default = SwitchElement;
exports["default"] = _default;