"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = RadioGroup;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _HeroIcons = _interopRequireDefault(require("../../assets/svgs/icons/HeroIcons"));
var _typography = require("../../elements/typography");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

/**
 * HeadlessUI "Radio Group"
 * Customized for twin.macro
 * https://headlessui.dev/react/radio-group
 */

function RadioGroup(_ref) {
  var screenReaderLabel = _ref.screenReaderLabel,
    items = _ref.items;
  var _useState = (0, _react.useState)(items === null || items === void 0 ? void 0 : items[0]),
    selected = _useState[0],
    setSelected = _useState[1];
  if (items.length === 0) return null;
  return /*#__PURE__*/_react["default"].createElement(_react2.RadioGroup, {
    value: selected,
    onChange: setSelected
  }, /*#__PURE__*/_react["default"].createElement(_react2.RadioGroup.Label, {
    css: {
      "position": "absolute",
      "width": "1px",
      "height": "1px",
      "padding": "0",
      "margin": "-1px",
      "overflow": "hidden",
      "clip": "rect(0, 0, 0, 0)",
      "whiteSpace": "nowrap",
      "borderWidth": "0"
    }
  }, screenReaderLabel), /*#__PURE__*/_react["default"].createElement("div", {
    css: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        "marginTop": "calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))",
        "marginBottom": "calc(0.5rem * var(--tw-space-y-reverse))"
      }
    }
  }, items.map(item)));
}
function item(item) {
  return /*#__PURE__*/_react["default"].createElement(_react2.RadioGroup.Option, {
    key: item.name,
    value: item
  }, function (_ref2) {
    var active = _ref2.active,
      checked = _ref2.checked;
    return /*#__PURE__*/_react["default"].createElement("div", {
      css: [{
        "position": "relative",
        "display": "flex",
        "width": "100%",
        "cursor": "pointer",
        "alignItems": "center",
        "justifyContent": "space-between",
        "borderRadius": "0.5rem",
        "paddingLeft": "1.25rem",
        "paddingRight": "1.25rem",
        "paddingTop": "1rem",
        "paddingBottom": "1rem",
        "--tw-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "--tw-shadow-colored": "0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",
        "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        ":focus": {
          "outline": "2px solid transparent",
          "outlineOffset": "2px"
        }
      }, active && {
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-opacity": "0.6",
        "--tw-ring-color": "rgb(45 185 45 / var(--tw-ring-opacity))",
        "--tw-ring-offset-width": "2px",
        "--tw-ring-offset-color": "#84E184"
      }, checked ? {
        "--tw-bg-opacity": "0.75",
        "backgroundColor": "rgb(15 62 15 / var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgb(255 255 255 / var(--tw-text-opacity))"
      } : {
        "backgroundColor": "var(--bg-window)"
      }]
    }, /*#__PURE__*/_react["default"].createElement("div", {
      css: {
        "display": "flex",
        "alignItems": "center"
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      css: {
        "fontSize": "0.8125rem"
      }
    }, /*#__PURE__*/_react["default"].createElement(_react2.RadioGroup.Label, {
      as: _typography.P,
      css: [{
        "fontWeight": "700"
      }, checked ? {
        "--tw-text-opacity": "1",
        "color": "rgb(255 255 255 / var(--tw-text-opacity))"
      } : {
        "--tw-text-opacity": "1",
        "color": "rgb(117 126 132 / var(--tw-text-opacity))"
      }]
    }, item.name), /*#__PURE__*/_react["default"].createElement(_react2.RadioGroup.Description, {
      as: _typography.PSmall,
      css: [{
        "display": "inline",
        "fontWeight": "500"
      }, checked ? {
        "--tw-text-opacity": "1",
        "color": "rgb(193 240 193 / var(--tw-text-opacity))"
      } : {
        "--tw-text-opacity": "1",
        "color": "rgb(201 205 207 / var(--tw-text-opacity))"
      }]
    }, /*#__PURE__*/_react["default"].createElement("span", null, item.ram, "/", item.cpus), ' ', /*#__PURE__*/_react["default"].createElement("span", {
      "aria-hidden": "true"
    }, "\xB7"), ' ', /*#__PURE__*/_react["default"].createElement("span", null, item.disk)))), checked && /*#__PURE__*/_react["default"].createElement("div", {
      css: {
        "flexShrink": "0",
        "--tw-text-opacity": "1",
        "color": "rgb(255 255 255 / var(--tw-text-opacity))"
      }
    }, /*#__PURE__*/_react["default"].createElement(_HeroIcons["default"].CheckRounded, {
      css: {
        "height": "1.5rem",
        "width": "1.5rem"
      }
    })));
  });
}