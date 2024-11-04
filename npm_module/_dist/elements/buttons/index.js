"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["children", "variant", "isSmall", "isTiny", "isLarge", "isExtraLarge", "forceLightMode", "isDisabled", "isUppercase", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Button = function Button(_ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    isSmall = _ref.isSmall,
    isTiny = _ref.isTiny,
    isLarge = _ref.isLarge,
    isExtraLarge = _ref.isExtraLarge,
    forceLightMode = _ref.forceLightMode,
    isDisabled = _ref.isDisabled,
    isUppercase = _ref.isUppercase,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  if (variant === 'secondary') {
    console.log("The 'secondary' variant is deprecated. You can still use it, but it will be removed in the future.");
  }
  var finalClass = (0, _tailwindMerge.twMerge)((0, _clsx["default"])('flex justify-center items-center gap-x-2', 'px-3', 'h-[36px]', '!font-[600] text-[14px] leading-[100%] whitespace-nowrap', 'rounded-[4px] focus:outline-none',
  // 'border-2',
  'transition duration-400', 'select-none cursor-pointer', forceLightMode ? buttonVariantStylesLightOnly[variant] : buttonVariantStyles[variant], className, isSmall && '!text-sm', isUppercase && '!uppercase', isUppercase && '!uppercase', isTiny && 'h-[30px] px-2 py-0 text-[11px]', isSmall && 'h-[34px] px-3 py-0 text-[13px]', isLarge && 'h-[44px] px-6 py-0 text-[16px]', isExtraLarge && 'h-[52px] px-10 py-0 text-[18px]', isDisabled && 'pointer-events-none opacity-30'));
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: finalClass
  }, props), children);
};
exports.Button = Button;
var defaultStyles = [
// text
'text-grey-dark-scale-600 dark:text-grey-light-scale-300', 'hover:text-grey-dark-scale-800 hover:dark:text-white', 'active:text-grey-dark-scale-900 active:dark:text-grey-light-scale-100',
// bg
'bg-grey-light-scale-300 dark:bg-grey-dark-scale-400', 'hover:bg-grey-light-scale-400 hover:dark:bg-grey-dark-scale-500', 'active:bg-grey-light-scale-500 active:dark:bg-grey-dark-scale-600'
// border
// 'border-grey-light-scale-400 dark:border-grey-dark-scale-400',
// 'hover:border-grey-light-scale-800 dark:hover:border-grey-light-scale-800',
// 'active:border-grey-dark-scale-800 active:dark:border-grey-light-scale-50',
];

var successStyles = [
// text
'text-white dark:text-white', 'active:text-white active:dark:text-white',
// bg
'bg-green-scale-500 dark:bg-green-scale-600', 'hover:bg-green-scale-600 hover:dark:bg-green-scale-500', 'active:bg-green-scale-700 active:dark:bg-green-scale-700'
// border
// 'border-green dark:border-green-scale-400',
// 'hover:border-green-scale-200 dark:border-green-scale-400',
// 'active:border-green-scale-300 dark:active:border-green-scale-300',
];

var infoStyles = [
// text
'text-white dark:text-white', 'active:text-white active:dark:text-white',
// bg
'bg-blue-scale-500 dark:bg-blue-scale-600', 'hover:bg-blue-scale-600 hover:dark:bg-blue-scale-500', 'active:bg-blue-scale-700 active:dark:bg-blue-scale-700'
// border
// 'border-blue dark:border-blue-scale-400',
// 'hover:border-blue-scale-200 dark:border-blue-scale-400',
// 'active:border-blue-scale-300 dark:active:border-blue-scale-300',
];

var warningStyles = [
// text
'text-white dark:text-white', 'active:text-white active:dark:text-white',
// bg
'bg-orange-scale-500 dark:bg-orange-scale-600', 'hover:bg-orange-scale-600 hover:dark:bg-orange-scale-500', 'active:bg-orange-scale-700 active:dark:bg-orange-scale-700'
// border
// 'border-orange dark:border-orange-scale-400',
// 'hover:border-orange-scale-200 dark:border-orange-scale-400',
// 'active:border-orange-scale-300 dark:active:border-orange-scale-300',
];

var dangerStyles = [
// text
'text-white dark:text-white', 'active:text-white active:dark:text-white',
// bg
'bg-red-scale-500 dark:bg-red-scale-600', 'hover:bg-red-scale-600 hover:dark:bg-red-scale-500', 'active:bg-red-scale-700 active:dark:bg-red-scale-700'
// border
// 'border-red dark:border-red-scale-400',
// 'hover:border-red-scale-200 dark:border-red-scale-400',
// 'active:border-red-scale-300 dark:active:border-red-scale-300',
];

// special styles using purple

var specialStyles = [
// text
'text-white dark:text-white', 'active:text-white active:dark:text-white',
// bg
'bg-purple-scale-500 dark:bg-purple-scale-600', 'hover:bg-purple-scale-600 hover:dark:bg-purple-scale-500', 'active:bg-purple-scale-700 active:dark:bg-purple-scale-700'
// border
// 'border-purple dark:border-purple-scale-400',
// 'hover:border-purple-scale-200 dark:border-purple-scale-400',
// 'active:border-purple-scale-300 dark:active:border-purple-scale-300',
];

var contrastStyles = [
// text
'text-grey-light-scale-50 dark:text-grey-dark-scale-800', 'hover:text-grey-light-scale-50 hover:dark:text-grey-dark-scale-900', 'active:text-grey-light-scale-500 active:dark:text-grey-dark-scale-100',
// bg
'bg-grey-dark-scale-600 dark:bg-grey-light-scale-300', 'hover:bg-grey-dark-scale-900 hover:dark:bg-grey-light-scale-200', 'active:bg-grey-dark-scale-700 active:dark:bg-white'
// border
// 'border-grey-dark-scale-500 dark:border-grey-light-scale-300',
// 'hover:border-grey-dark-scale-400 hover:dark:border-grey-light-scale-200',
// 'active:border-grey-light-scale-400 active:dark:border-grey-light-scale-900',
];

var contrastghostStyles = [
// text
'text-grey-dark-scale-600 dark:text-grey-light-scale-50', 'hover:text-grey-light-scale-50 hover:dark:text-grey-dark-scale-600', 'active:text-grey-dark-scale-200 active:dark:text-grey-light-scale-600',
// bg
'bg-transparent dark:bg-transparent', 'hover:bg-grey-dark-scale-500 hover:dark:bg-grey-light-scale-300', 'active:bg-grey-light-scale-50 active:dark:bg-grey-dark-scale-800',
// border
'border-2 border-grey-dark-scale-500 dark:border-grey-light-scale-300', 'hover:border-grey-dark-scale-400 hover:dark:border-grey-light-scale-200', 'active:border-grey-light-scale-500 active:dark:border-grey-light-scale-900'];
var buttonVariantStyles = {
  "default": defaultStyles,
  secondary: defaultStyles,
  success: successStyles,
  info: infoStyles,
  warning: warningStyles,
  danger: dangerStyles,
  special: specialStyles,
  contrastghost: contrastghostStyles,
  contrast: contrastStyles
};
var defaultStylesLightOnly = [
// text
'text-grey-dark-scale-600', 'hover:text-black hover', 'active:text-grey-light-scale-50',
// bg
'bg-white', 'active:bg-grey-dark-scale-800',
// border
'border-grey-light-scale-400', 'hover:border-grey-light-scale-800', 'active:border-grey-dark-scale-800'];
var successStylesLightOnly = [
// text
'text-white', 'active:text-green-scale-500',
// bg
'bg-green-scale-500', 'hover:bg-green-scale-600', 'active:bg-green-scale-100',
// border
'border-green', 'hover:border-green-scale-200', 'active:border-green-scale-300'];
var infoStylesLightOnly = [
// text
'text-white', 'active:text-blue-scale-500',
// bg
'bg-blue-scale-500', 'hover:bg-blue-scale-600', 'active:bg-blue-scale-100',
// border
'border-blue', 'hover:border-blue-scale-200', 'active:border-blue-scale-300'];
var warningStylesLightOnly = [
// text
'text-white', 'active:text-orange-scale-500',
// bg
'bg-orange-scale-500', 'hover:bg-orange-scale-600', 'active:bg-orange-scale-100',
// border
'border-orange', 'hover:border-orange-scale-200', 'active:border-orange-scale-300'];
var dangerStylesLightOnly = [
// text
'text-white', 'active:text-red-scale-500',
// bg
'bg-red-scale-500', 'hover:bg-red-scale-600', 'active:bg-red-scale-100',
// border
'border-red', 'hover:border-red-scale-200', 'active:border-red-scale-300'];

// special styles using purple

var specialStylesLightOnly = [
// text
'text-white', 'active:text-purple-scale-500',
// bg
'bg-purple-scale-500', 'hover:bg-purple-scale-600', 'active:bg-purple-scale-100',
// border
'border-purple', 'hover:border-purple-scale-200', 'active:border-purple-scale-300'];
var contrastStylesLightOnly = [
// text
'text-grey-light-scale-50', 'hover:text-grey-dark-scale-800', 'active:text-grey-dark-scale-200',
// bg
'bg-grey-dark-scale-500', 'hover:bg-grey-light-scale-50', 'active:bg-grey-light-scale-200',
// border
'border-grey-dark-scale-500', 'hover:border-grey-dark-scale-400', 'active:border-grey-light-scale-400'];
var contrastghostStylesLightOnly = [
// text
'text-grey-dark-scale-600', 'hover:text-grey-light-scale-50', 'active:text-grey-dark-scale-200',
// bg
'bg-transparent', 'hover:bg-grey-dark-scale-500', 'active:bg-grey-light-scale-50',
// border
'border-grey-dark-scale-500', 'hover:border-grey-dark-scale-400', 'active:border-grey-light-scale-500'];
var buttonVariantStylesLightOnly = {
  "default": defaultStylesLightOnly,
  secondary: defaultStylesLightOnly,
  success: successStylesLightOnly,
  info: infoStylesLightOnly,
  warning: warningStylesLightOnly,
  danger: dangerStylesLightOnly,
  special: specialStylesLightOnly,
  contrastghost: contrastghostStylesLightOnly,
  contrast: contrastStylesLightOnly
};