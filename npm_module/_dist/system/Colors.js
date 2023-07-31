"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../tokens/index.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var colors = _index["default"].colors;
var colorsDarkTheme = colors.dark;
var colorPalettes = colors.color_palettes;
var colorsLightTheme = colors.light;
var TPDSColors = function TPDSColors() {
  return /*#__PURE__*/_react["default"].createElement("style", {
    global: true,
    jsx: true
  }, "\n      .light {\n        color-scheme: light;\n        --bg-body: ".concat(colorsLightTheme.body_bg, ";\n        --border-body: ").concat(colorsLightTheme.body_border, ";\n        --bg-window: ").concat(colorsLightTheme.window_bg, ";\n        --border-window: ").concat(colorsLightTheme.window_border, ";\n\n        --text-primary: ").concat(colorsLightTheme.text_primary, ";\n        --text-secondary: ").concat(colorsLightTheme.text_secondary, ";\n        --text-tertiary: ").concat(colorsLightTheme.text_tertiary, ";\n\n        --bg-button: ").concat(colorsLightTheme.buttons["default"].bg.enabled, ";\n        --bg-button-hover: ").concat(colorsLightTheme.buttons["default"].bg.hover, ";\n        --bg-button-active: ").concat(colorsLightTheme.buttons["default"].bg.active, ";\n\n        --bg-button-secondary: ").concat(colorsLightTheme.buttons.secondary.bg.enabled, ";\n        --bg-button-secondary-hover: ").concat(colorsLightTheme.buttons.secondary.bg.hover, ";\n        --bg-button-secondary-active: ").concat(colorsLightTheme.buttons.secondary.bg.active, ";\n\n        --bg-success-hover: ").concat(colorsLightTheme.buttons.success.bg.hover, ";\n        --bg-success-active: ").concat(colorsLightTheme.buttons.success.bg.active, ";\n        --bg-info-hover: ").concat(colorsLightTheme.buttons.info.bg.hover, ";\n        --bg-info-active: ").concat(colorsLightTheme.buttons.info.bg.active, ";\n        --bg-warning-hover: ").concat(colorsLightTheme.buttons.warning.bg.hover, ";\n        --bg-warning-active: ").concat(colorsLightTheme.buttons.warning.bg.active, ";\n        --bg-danger-hover: ").concat(colorsLightTheme.buttons.danger.bg.hover, ";\n        --bg-danger-active: ").concat(colorsLightTheme.buttons.danger.bg.active, ";\n\n        --text-button: ").concat(colorsLightTheme.buttons["default"].text.enabled, ";\n        --text-button-hover: ").concat(colorsLightTheme.buttons["default"].text.hover, ";\n        --text-button-active: ").concat(colorsLightTheme.buttons["default"].text.active, ";\n        --text-button-secondary: ").concat(colorsLightTheme.buttons.secondary.text.enabled, ";\n        --text-button-secondary-hover: ").concat(colorsLightTheme.buttons.secondary.text.hover, ";\n        --text-button-secondary-active: ").concat(colorsLightTheme.buttons.secondary.text.active, ";\n        --text-button-success: ").concat(colorsLightTheme.buttons.success.text.enabled, ";\n        --text-button-success-hover: ").concat(colorsLightTheme.buttons.success.text.hover, ";\n        --text-button-success-active: ").concat(colorsLightTheme.buttons.success.text.active, ";\n        --text-button-info: ").concat(colorsLightTheme.buttons.info.text.enabled, ";\n        --text-button-info-hover: ").concat(colorsLightTheme.buttons.info.text.hover, ";\n        --text-button-info-active: ").concat(colorsLightTheme.buttons.info.text.active, ";\n        --text-button-warning: ").concat(colorsLightTheme.buttons.warning.text.enabled, ";\n        --text-button-warning-hover: ").concat(colorsLightTheme.buttons.warning.text.hover, ";\n        --text-button-warning-active: ").concat(colorsLightTheme.buttons.warning.text.active, ";\n        --text-button-danger: ").concat(colorsLightTheme.buttons.danger.text.enabled, ";\n        --text-button-danger-hover: ").concat(colorsLightTheme.buttons.danger.text.hover, ";\n        --text-button-danger-active: ").concat(colorsLightTheme.buttons.danger.text.active, ";\n\n        --border-button: ").concat(colorsLightTheme.buttons["default"].border.enabled, ";\n        --border-button-hover: ").concat(colorsLightTheme.buttons["default"].border.hover, ";\n        --border-button-active: ").concat(colorsLightTheme.buttons["default"].border.active, ";\n        --border-button-secondary: ").concat(colorsLightTheme.buttons.secondary.border.enabled, ";\n        --border-button-secondary-hover: ").concat(colorsLightTheme.buttons.secondary.border.hover, ";\n        --border-button-secondary-active: ").concat(colorsLightTheme.buttons.secondary.border.active, ";\n        --border-button-success: ").concat(colorsLightTheme.buttons.success.border.enabled, ";\n        --border-button-success-hover: ").concat(colorsLightTheme.buttons.success.border.hover, ";\n        --border-button-success-active: ").concat(colorsLightTheme.buttons.success.border.active, ";\n        --border-button-info: ").concat(colorsLightTheme.buttons.info.border.enabled, ";\n        --border-button-info-hover: ").concat(colorsLightTheme.buttons.info.border.hover, ";\n        --border-button-info-active: ").concat(colorsLightTheme.buttons.info.border.active, ";\n        --border-button-warning: ").concat(colorsLightTheme.buttons.warning.border.enabled, ";\n        --border-button-warning-hover: ").concat(colorsLightTheme.buttons.warning.border.hover, ";\n        --border-button-warning-active: ").concat(colorsLightTheme.buttons.warning.border.active, ";\n        --border-button-danger: ").concat(colorsLightTheme.buttons.danger.border.enabled, ";\n        --border-button-danger-hover: ").concat(colorsLightTheme.buttons.danger.border.hover, ";\n        --border-button-danger-active: ").concat(colorsLightTheme.buttons.danger.border.active, ";\n\n        --bg-input: ").concat(colorsLightTheme.input.bg.enabled, ";\n        --bg-input-focus: ").concat(colorsLightTheme.input.bg.enabled, ";\n        --bg-input-hover: ").concat(colorsLightTheme.input.bg.hover, ";\n\n        --text-input: ").concat(colorsLightTheme.input.text.enabled, ";\n        --text-input-focus: ").concat(colorsLightTheme.input.text.focus, ";\n        --text-input-hover: ").concat(colorsLightTheme.input.text.hover, ";\n        --text-input-prefix: ").concat(colorsLightTheme.input.text.prefix, ";\n        --text-input-field_label: ").concat(colorsLightTheme.input.text.field_label, ";\n\n        --border-input: ").concat(colorsLightTheme.input.border["default"], ";\n        --border-input-focus: ").concat(colorsLightTheme.input.border.focus, ";\n\n        --bg-checkbox-selected-enabled: ").concat(colorsLightTheme.checkbox.selected.bg.enabled, ";\n        --bg-checkbox-selected-hover: ").concat(colorsLightTheme.checkbox.selected.bg.hover, ";\n        --bg-checkbox-selected-active: ").concat(colorsLightTheme.checkbox.selected.bg.active, ";\n        --bg-checkbox-unselected-enabled: ").concat(colorsLightTheme.checkbox.unselected.bg.enabled, ";\n        --bg-checkbox-unselected-hover: ").concat(colorsLightTheme.checkbox.unselected.bg.hover, ";\n        --bg-checkbox-unselected-active: ").concat(colorsLightTheme.checkbox.unselected.bg.active, ";\n\n        --text-checkbox-selected-enabled: ").concat(colorsLightTheme.checkbox.selected.text.enabled, ";\n        --text-checkbox-selected-hover: ").concat(colorsLightTheme.checkbox.selected.text.hover, ";\n        --text-checkbox-selected-active: ").concat(colorsLightTheme.checkbox.selected.text.active, ";\n        --text-checkbox-unselected-enabled: ").concat(colorsLightTheme.checkbox.unselected.text.enabled, ";\n        --text-checkbox-unselected-hover: ").concat(colorsLightTheme.checkbox.unselected.text.hover, ";\n        --text-checkbox-unselected-active: ").concat(colorsLightTheme.checkbox.unselected.text.active, ";\n\n        --border-checkbox-selected-enabled: ").concat(colorsLightTheme.checkbox.selected.border.enabled, ";\n        --border-checkbox-selected-hover: ").concat(colorsLightTheme.checkbox.selected.border.hover, ";\n        --border-checkbox-selected-active: ").concat(colorsLightTheme.checkbox.selected.border.active, ";\n        --border-checkbox-unselected-enabled: ").concat(colorsLightTheme.checkbox.unselected.border.enabled, ";\n        --border-checkbox-unselected-hover: ").concat(colorsLightTheme.checkbox.unselected.border.hover, ";\n        --border-checkbox-unselected-active: ").concat(colorsLightTheme.checkbox.unselected.border.active, ";\n      }\n      .dark {\n        color-scheme: dark;\n        --bg-body: ").concat(colorsDarkTheme.body_bg, ";\n        --border-body: ").concat(colorsDarkTheme.body_border, ";\n        --bg-window: ").concat(colorsDarkTheme.window_bg, ";\n        --border-window: ").concat(colorsDarkTheme.window_border, ";\n\n        --text-primary: ").concat(colorsDarkTheme.text_primary, ";\n        --text-secondary: ").concat(colorsDarkTheme.text_secondary, ";\n        --text-tertiary: ").concat(colorsDarkTheme.text_tertiary, ";\n\n        --bg-button: ").concat(colorsDarkTheme.buttons["default"].bg.enabled, ";\n        --bg-button-hover: ").concat(colorsDarkTheme.buttons["default"].bg.hover, ";\n        --bg-button-active: ").concat(colorsDarkTheme.buttons["default"].bg.active, ";\n\n        --bg-button-secondary: ").concat(colorsDarkTheme.buttons.secondary.bg.enabled, ";\n        --bg-button-secondary-hover: ").concat(colorsDarkTheme.buttons.secondary.bg.hover, ";\n        --bg-button-secondary-active: ").concat(colorsDarkTheme.buttons.secondary.bg.active, ";\n\n        --bg-success-hover: ").concat(colorsDarkTheme.buttons.success.bg.hover, ";\n        --bg-success-active: ").concat(colorsDarkTheme.buttons.success.bg.active, ";\n        --bg-info-hover: ").concat(colorsDarkTheme.buttons.info.bg.hover, ";\n        --bg-info-active: ").concat(colorsDarkTheme.buttons.info.bg.active, ";\n        --bg-warning-hover: ").concat(colorsDarkTheme.buttons.warning.bg.hover, ";\n        --bg-warning-active: ").concat(colorsDarkTheme.buttons.warning.bg.active, ";\n        --bg-danger-hover: ").concat(colorsDarkTheme.buttons.danger.bg.hover, ";\n        --bg-danger-active: ").concat(colorsDarkTheme.buttons.danger.bg.active, ";\n\n        --text-button: ").concat(colorsDarkTheme.buttons["default"].text.enabled, ";\n        --text-button-hover: ").concat(colorsDarkTheme.buttons["default"].text.hover, ";\n        --text-button-active: ").concat(colorsDarkTheme.buttons["default"].text.active, ";\n        --text-button-secondary: ").concat(colorsDarkTheme.buttons.secondary.text.enabled, ";\n        --text-button-secondary-hover: ").concat(colorsDarkTheme.buttons.secondary.text.hover, ";\n        --text-button-secondary-active: ").concat(colorsDarkTheme.buttons.secondary.text.active, ";\n        --text-button-success: ").concat(colorsDarkTheme.buttons.success.text.enabled, ";\n        --text-button-success-hover: ").concat(colorsDarkTheme.buttons.success.text.hover, ";\n        --text-button-success-active: ").concat(colorsDarkTheme.buttons.success.text.active, ";\n        --text-button-info: ").concat(colorsDarkTheme.buttons.info.text.enabled, ";\n        --text-button-info-hover: ").concat(colorsDarkTheme.buttons.info.text.hover, ";\n        --text-button-info-active: ").concat(colorsDarkTheme.buttons.info.text.active, ";\n        --text-button-warning: ").concat(colorsDarkTheme.buttons.warning.text.enabled, ";\n        --text-button-warning-hover: ").concat(colorsDarkTheme.buttons.warning.text.hover, ";\n        --text-button-warning-active: ").concat(colorsDarkTheme.buttons.warning.text.active, ";\n        --text-button-danger: ").concat(colorsDarkTheme.buttons.danger.text.enabled, ";\n        --text-button-danger-hover: ").concat(colorsDarkTheme.buttons.danger.text.hover, ";\n        --text-button-danger-active: ").concat(colorsDarkTheme.buttons.danger.text.active, ";\n\n        --border-button: ").concat(colorsDarkTheme.buttons["default"].border.enabled, ";\n        --border-button-hover: ").concat(colorsDarkTheme.buttons["default"].border.hover, ";\n        --border-button-active: ").concat(colorsDarkTheme.buttons["default"].border.active, ";\n        --border-button-secondary: ").concat(colorsDarkTheme.buttons.secondary.border.enabled, ";\n        --border-button-secondary-hover: ").concat(colorsDarkTheme.buttons.secondary.border.hover, ";\n        --border-button-secondary-active: ").concat(colorsDarkTheme.buttons.secondary.border.active, ";\n        --border-button-success: ").concat(colorsDarkTheme.buttons.success.border.enabled, ";\n        --border-button-success-hover: ").concat(colorsDarkTheme.buttons.success.border.hover, ";\n        --border-button-success-active: ").concat(colorsDarkTheme.buttons.success.border.active, ";\n        --border-button-info: ").concat(colorsDarkTheme.buttons.info.border.enabled, ";\n        --border-button-info-hover: ").concat(colorsDarkTheme.buttons.info.border.hover, ";\n        --border-button-info-active: ").concat(colorsDarkTheme.buttons.info.border.active, ";\n        --border-button-warning: ").concat(colorsDarkTheme.buttons.warning.border.enabled, ";\n        --border-button-warning-hover: ").concat(colorsDarkTheme.buttons.warning.border.hover, ";\n        --border-button-warning-active: ").concat(colorsDarkTheme.buttons.warning.border.active, ";\n        --border-button-danger: ").concat(colorsDarkTheme.buttons.danger.border.enabled, ";\n        --border-button-danger-hover: ").concat(colorsDarkTheme.buttons.danger.border.hover, ";\n        --border-button-danger-active: ").concat(colorsDarkTheme.buttons.danger.border.active, ";\n\n        --bg-input: ").concat(colorsDarkTheme.input.bg.enabled, ";\n        --bg-input-focus: ").concat(colorsDarkTheme.input.bg.enabled, ";\n        --bg-input-hover: ").concat(colorsDarkTheme.input.bg.hover, ";\n\n        --text-input: ").concat(colorsDarkTheme.input.text.enabled, ";\n        --text-input-focus: ").concat(colorsDarkTheme.input.text.focus, ";\n        --text-input-hover: ").concat(colorsDarkTheme.input.text.hover, ";\n        --text-input-prefix: ").concat(colorsDarkTheme.input.text.prefix, ";\n        --text-input-field_label: ").concat(colorsDarkTheme.input.text.field_label, ";\n\n        --border-input: ").concat(colorsDarkTheme.input.border["default"], ";\n        --border-input-focus: ").concat(colorsDarkTheme.input.border.focus, ";\n\n        --bg-checkbox-selected-enabled: ").concat(colorsDarkTheme.checkbox.selected.bg.enabled, ";\n        --bg-checkbox-selected-hover: ").concat(colorsDarkTheme.checkbox.selected.bg.hover, ";\n        --bg-checkbox-selected-active: ").concat(colorsDarkTheme.checkbox.selected.bg.active, ";\n        --bg-checkbox-unselected-enabled: ").concat(colorsDarkTheme.checkbox.unselected.bg.enabled, ";\n        --bg-checkbox-unselected-hover: ").concat(colorsDarkTheme.checkbox.unselected.bg.hover, ";\n        --bg-checkbox-unselected-active: ").concat(colorsDarkTheme.checkbox.unselected.bg.active, ";\n\n        --text-checkbox-selected-enabled: ").concat(colorsDarkTheme.checkbox.selected.text.enabled, ";\n        --text-checkbox-selected-hover: ").concat(colorsDarkTheme.checkbox.selected.text.hover, ";\n        --text-checkbox-selected-active: ").concat(colorsDarkTheme.checkbox.selected.text.active, ";\n        --text-checkbox-unselected-enabled: ").concat(colorsDarkTheme.checkbox.unselected.text.enabled, ";\n        --text-checkbox-unselected-hover: ").concat(colorsDarkTheme.checkbox.unselected.text.hover, ";\n        --text-checkbox-unselected-active: ").concat(colorsDarkTheme.checkbox.unselected.text.active, ";\n\n        --border-checkbox-selected-enabled: ").concat(colorsDarkTheme.checkbox.selected.border.enabled, ";\n        --border-checkbox-selected-hover: ").concat(colorsDarkTheme.checkbox.selected.border.hover, ";\n        --border-checkbox-selected-active: ").concat(colorsDarkTheme.checkbox.selected.border.active, ";\n        --border-checkbox-unselected-enabled: ").concat(colorsDarkTheme.checkbox.unselected.border.enabled, ";\n        --border-checkbox-unselected-hover: ").concat(colorsDarkTheme.checkbox.unselected.border.hover, ";\n        --border-checkbox-unselected-active: ").concat(colorsDarkTheme.checkbox.unselected.border.active, ";\n      }\n      body {\n        -webkit-tap-highlight-color: ").concat(colorPalettes.yellow['500'], ";\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n      p a {\n        text-decoration: underline;\n      }\n    "));
};
var _default = TPDSColors;
exports["default"] = _default;