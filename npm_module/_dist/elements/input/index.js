"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.TextInput = void 0;
var _styled2 = _interopRequireDefault(require("@emotion/styled"));
var TextInput = _styled2["default"].input(function (_ref) {
  var isValid = _ref.isValid,
    isInvalid = _ref.isInvalid,
    isWarning = _ref.isWarning;
  return [{
    "display": "flex",
    "width": "100%"
  }, {
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, {
    "borderRadius": "0.25rem",
    "paddingLeft": "0.625rem",
    "paddingRight": "0.625rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, {
    "fontWeight": "400"
  }, {
    "borderColor": "transparent",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(250 250 250 / var(--tw-bg-opacity))",
    "color": "var(--text-primary)",
    ":is(.dark &)": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(72 77 81 / var(--tw-bg-opacity))"
    }
  }, {
    "borderWidth": "2px",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(25 114 245 / var(--tw-border-opacity))"
    }
  }, isValid && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(45 185 45 / var(--tw-border-opacity))",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(45 185 45 / var(--tw-border-opacity))"
    }
  }], isInvalid && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))"
    }
  }], isWarning && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))"
    }
  }]];
});
exports.TextInput = TextInput;