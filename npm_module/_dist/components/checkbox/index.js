"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["active", "partial", "disabled"];
function Checkbox(_ref) {
  var active = _ref.active,
    _ref$partial = _ref.partial,
    partial = _ref$partial === void 0 ? false : _ref$partial,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(CheckboxRoot, Object.assign({
    active: active,
    disabled: disabled,
    className: active ? 'is-active' : 'is-off'
  }, props), active && !partial && /*#__PURE__*/_react["default"].createElement(CheckIcon, {
    style: {
      color: 'white'
    }
  }), active && partial && /*#__PURE__*/_react["default"].createElement(MinusIcon, {
    style: {
      color: 'white'
    }
  }));
}
var CheckboxRoot = _styled2["default"].div(function (_ref2) {
  var active = _ref2.active,
    disabled = _ref2.disabled;
  return [{
    "position": "relative",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
  }, {
    "display": "flex",
    "height": "18px",
    "width": "18px",
    "cursor": "pointer",
    "alignItems": "center !important",
    "justifyContent": "center !important",
    "borderRadius": "0.25rem"
  }, {
    "position": "relative",
    "borderWidth": "2px",
    "borderColor": "var(--border-body)",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))",
    ":is(.dark &)": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(201 205 207 / var(--tw-border-opacity))",
    ":is(.dark &)": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(40 44 47 / var(--tw-border-opacity))"
    }
  }, {
    ":hover": {
      "borderWidth": "2px",
      "--tw-border-opacity": "1",
      "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(25 114 245 / 0.05)"
    }
  }, {
    ":active": {
      "borderWidth": "2px",
      "borderColor": "rgb(25 114 245 / 0.5)",
      "backgroundColor": "rgb(25 114 245 / 0.1)"
    }
  }, active && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(25 114 245 / var(--tw-bg-opacity))"
  }, {
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(21 97 208 / var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(21 97 208 / var(--tw-bg-opacity))"
    }
  }, {
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(18 80 171 / var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(18 80 171 / var(--tw-bg-opacity))"
    }
  }], disabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});
function CheckIcon(_ref3) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref3), _ref3));
  return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "8",
    fill: "transparent",
    viewBox: "0 0 8 6"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M7.25 1.266c.25-.25.25-.641 0-.891a.632.632 0 00-.875 0L2.812 3.938 1.25 2.375a.632.632 0 00-.875 0c-.25.25-.25.64 0 .89l2 2c.11.126.281.188.438.188a.617.617 0 00.437-.187l4-4z"
  }));
}
function MinusIcon(_ref4) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref4), _ref4));
  return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "red",
    viewBox: "0 0 10 10"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fill: "white",
    y: "4",
    width: "10",
    height: "2"
  }));
}
var _default = Checkbox;
exports["default"] = _default;