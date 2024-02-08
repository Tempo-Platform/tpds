"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["onClick", "label", "isUppercase", "addHoverEffect", "showCloseIcon", "noBorder", "variant", "rootClassName", "labelClassName"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tag = function Tag(_ref) {
  var onClick = _ref.onClick,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$isUppercase = _ref.isUppercase,
    isUppercase = _ref$isUppercase === void 0 ? false : _ref$isUppercase,
    _ref$addHoverEffect = _ref.addHoverEffect,
    addHoverEffect = _ref$addHoverEffect === void 0 ? false : _ref$addHoverEffect,
    _ref$showCloseIcon = _ref.showCloseIcon,
    showCloseIcon = _ref$showCloseIcon === void 0 ? false : _ref$showCloseIcon,
    _ref$noBorder = _ref.noBorder,
    noBorder = _ref$noBorder === void 0 ? false : _ref$noBorder,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$rootClassName = _ref.rootClassName,
    rootClassName = _ref$rootClassName === void 0 ? '' : _ref$rootClassName,
    _ref$labelClassName = _ref.labelClassName,
    labelClassName = _ref$labelClassName === void 0 ? '' : _ref$labelClassName,
    props = _objectWithoutProperties(_ref, _excluded);
  var finalRootClass = (0, _clsx["default"])(props.className ? props.className : '', 'border border-2 h-[24px] inline-flex !rounded-[6px] py-0.5 px-1.5', 'select-none justify-center items-center align-center gap-1', 'inline-flex py-0.5 px-1.5 select-none justify-center align-center gap-1', rootVariantStyles[variant], addHoverEffect && 'cursor-pointer', addHoverEffect && rootVariantStylesWithHover[variant], noBorder && '!border-none', rootClassName);
  var finalLabelClass = (0, _clsx["default"])('text-[11px] font-medium whitespace-nowrap !text-inherit m-0', 'relative top-[-1px]', isUppercase && 'uppercase', labelClassName);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalRootClass,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: finalLabelClass,
    style: {
      lineHeight: 'normal'
    }
  }, label), showCloseIcon && /*#__PURE__*/_react["default"].createElement(XIcon, {
    className: finalLabelClass
  }));
};
var _default = Tag;
exports["default"] = _default;
var defaultStyle = ['bg-black text-white dark:bg-white dark:text-black'];
var infoStyle = ['bg-blue text-white dark:text-black'];
var successStyle = ['bg-green text-white dark:text-black'];
var dangerStyle = ['bg-red text-white dark:text-black'];
var warningStyle = ['bg-orange text-white dark:text-black'];
var defaultStyleWithHover = ['hover:bg-grey-dark-scale-400 dark:hover:bg-grey-light-scale-200'];
var infoStyleWithHover = ['hover:bg-blue/80'];
var successStyleWithHover = ['hover:bg-green/80'];
var dangerStyleWithHover = ['hover:bg-red/80'];
var warningStyleWithHover = ['hover:bg-orange/80'];
var rootVariantStyles = {
  "default": defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle
};
var rootVariantStylesWithHover = {
  "default": defaultStyleWithHover,
  info: infoStyleWithHover,
  success: successStyleWithHover,
  danger: dangerStyleWithHover,
  warning: warningStyleWithHover
};
function XIcon(_ref2) {
  var className = _ref2.className;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    className: (0, _clsx["default"])('w-[14px] h-[16px]', className),
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  }));
}