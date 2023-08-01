"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["label", "isUppercase", "addHoverEffect", "variant"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tag = function Tag(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$isUppercase = _ref.isUppercase,
    isUppercase = _ref$isUppercase === void 0 ? false : _ref$isUppercase,
    _ref$addHoverEffect = _ref.addHoverEffect,
    addHoverEffect = _ref$addHoverEffect === void 0 ? false : _ref$addHoverEffect,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    props = _objectWithoutProperties(_ref, _excluded);
  console.log('props.className', props.className);
  var finalRootClass = (0, _clsx["default"])(props.className ? props.className : '', 'border inline-flex rounded py-0.5 px-1.5 select-none flex justify-center', addHoverEffect && 'cursor-pointer', addHoverEffect ? tagVariantsWithHover[variant] : tagRootVariantStyles[variant]);
  var finalLabelClass = (0, _clsx["default"])('text-[11px] font-bold', isUppercase && 'uppercase', addHoverEffect ? tagLabelVariantsWithHover[variant] : tagLabelVariantStyles[variant]);
  console.log('finalRootClass', finalRootClass);
  console.log('finalLabelClass', finalLabelClass);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: finalRootClass
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: finalLabelClass
  }, label));
};
var _default = Tag;
exports["default"] = _default;
var defaultStyle = ['border-grey-light-scale-600'];
var infoStyle = ['border-blue'];
var successStyle = ['border-green'];
var dangerStyle = ['border-red'];
var warningStyle = ['border-orange'];
var defaultStyleWithHover = ["border-grey-light-scale-600 hover:bg-grey-light-scale-600"];
var infoStyleWithHover = ["border-blue hover:bg-blue"];
var successStyleWithHover = ["border-green hover:bg-green"];
var dangerStyleWithHover = ["border-red hover:bg"];
var warningStyleWithHover = ["border-orange hover:bg-orange"];
var defaultLabelStyle = ["text-grey-light-scale-600"];
var infoLabelStyle = ["text-blue"];
var successLabelStyle = ["text-green"];
var dangerLabelStyle = ["text-red"];
var warningLabelStyle = ["text-orange"];
var defaultLabelStyleWithHover = ["text-grey-light-scale-600 hover:text-white hover:dark:text-black"];
var infoLabelStyleWithHover = ["text-blue hover:text-white hover:dark:text-black"];
var successLabelStyleWithHover = ["text-green hover:text-white hover:dark:text-black"];
var dangerLabelStyleWithHover = ["text-red hover:text-white hover:dark:text-black"];
var warningLabelStyleWithHover = ["text-orange hover:text-white hover:dark:text-black"];
var tagRootVariantStyles = {
  "default": defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle
};
var tagLabelVariantStyles = {
  "default": defaultLabelStyle,
  info: infoLabelStyle,
  success: successLabelStyle,
  danger: dangerLabelStyle,
  warning: warningLabelStyle
};
var tagVariantsWithHover = {
  "default": defaultStyleWithHover,
  info: infoStyleWithHover,
  success: successStyleWithHover,
  danger: dangerStyleWithHover,
  warning: warningStyleWithHover
};
var tagLabelVariantsWithHover = {
  "default": defaultLabelStyleWithHover,
  info: infoLabelStyleWithHover,
  success: successLabelStyleWithHover,
  danger: dangerLabelStyleWithHover,
  warning: warningLabelStyleWithHover
};