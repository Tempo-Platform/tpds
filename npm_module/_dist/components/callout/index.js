"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _CheckIcon = _interopRequireDefault(require("../../assets/svgs/notifications/CheckIcon"));
var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/notifications/WarningIcon"));
var _ErrorIcon = _interopRequireDefault(require("../../assets/svgs/notifications/ErrorIcon"));
var _InfoIcon = _interopRequireDefault(require("../../assets/svgs/notifications/InfoIcon"));
var _TipIcon = _interopRequireDefault(require("../../assets/svgs/notifications/TipIcon"));
var _BugIcon = _interopRequireDefault(require("../../assets/svgs/notifications/BugIcon"));
var _NoteIcon = _interopRequireDefault(require("../../assets/svgs/notifications/NoteIcon"));
var _typography = require("../../elements/typography");
var _excluded = ["variant", "title", "text", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var rootStyles = {
  "default": 'border-grey-light-scale-400 dark:border-grey-dark-scale-200 bg-grey-light-scale-200 dark:bg-grey-light-scale-100/5',
  success: 'border-green/50 bg-green-scale-100/20 dark:bg-green-scale-500/10',
  info: 'border-blue/50 bg-blue-scale-100/20 dark:bg-blue-scale-300/10',
  danger: 'border-red/50 bg-red-scale-100/20 dark:bg-red-scale-300/10',
  warning: 'border-orange/50 bg-orange-scale-100/20 dark:bg-orange-scale-300/10',
  tip: 'border-purple/50 bg-purple-scale-100/20 dark:bg-purple-scale-300/10',
  bug: 'border-orange/50 bg-orange-scale-100/20 dark:bg-orange-scale-300/10',
  note: 'border-grey-light-scale-400 dark:border-grey-dark-scale-200 bg-grey-light-scale-200 dark:bg-grey-light-scale-100/5'
};
var headerBaseStyle = 'flex items-center font-medium text-lg pt-4 px-4';
var headerVariantStyles = {
  "default": '!text-grey-dark-scale-700 dark:!text-grey-light-scale-500',
  success: '!text-green-scale-500 dark:!text-green-scale-400',
  info: '!text-blue-scale-500 dark:!text-blue-scale-300',
  danger: '!text-red-scale-500 dark:!text-red-scale-400',
  warning: '!text-orange-scale-500 dark:!text-orange-scale-400',
  tip: '!text-purple-scale-500 dark:!text-purple-scale-100',
  bug: '!text-orange-scale-500 dark:!text-orange-scale-400',
  note: '!text-grey-dark-scale-700 dark:!text-white'
};
var getIcon = function getIcon(variant) {
  switch (variant) {
    case 'success':
      return /*#__PURE__*/_react["default"].createElement(_CheckIcon["default"], null);
    case 'info':
      return /*#__PURE__*/_react["default"].createElement(_InfoIcon["default"], null);
    case 'danger':
      return /*#__PURE__*/_react["default"].createElement(_ErrorIcon["default"], null);
    case 'warning':
      return /*#__PURE__*/_react["default"].createElement(_WarningIcon["default"], null);
    case 'tip':
      return /*#__PURE__*/_react["default"].createElement(_TipIcon["default"], null);
    case 'bug':
      return /*#__PURE__*/_react["default"].createElement(_BugIcon["default"], null);
    case 'note':
      return /*#__PURE__*/_react["default"].createElement(_NoteIcon["default"], null);
    default:
      return null;
  }
};
var Callout = function Callout(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    title = _ref.title,
    text = _ref.text,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
    className: (0, _clsx["default"])('border rounded-lg', rootStyles[variant])
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(headerBaseStyle)
  }, variant !== 'default' && /*#__PURE__*/_react["default"].createElement("span", {
    className: "mr-2"
  }, getIcon(variant)), title && /*#__PURE__*/_react["default"].createElement(_typography.P, {
    isMedium: true,
    className: (0, _clsx["default"])(headerVariantStyles[variant])
  }, title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 pb-4 pt-2"
  }, text && /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
    isMedium: true
  }, text), children));
};
var _default = Callout;
exports["default"] = _default;