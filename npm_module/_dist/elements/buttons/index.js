"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["children", "variant", "isSmall", "isTiny", "isLarge", "isDisabled", "isUppercase"];
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
    isDisabled = _ref.isDisabled,
    isUppercase = _ref.isUppercase,
    props = _objectWithoutProperties(_ref, _excluded);
  var finalClass = (0, _clsx["default"])('flex transition duration-100', '!font-medium text-[14px] whitespace-nowrap', 'px-3 gap-x-2 pt-[5px] pb-[5px] border rounded-sm focus:outline-none', 'items-center justify-center', 'select-none cursor-pointer', buttonVariantStyles[variant], isSmall && '!text-sm', isUppercase && '!uppercase', isUppercase && '!uppercase', isSmall && 'px-2 pt-[2px] pb-[1.5px] text-[13px]', isTiny && 'px-1 pt-0 pb-0 text-[11px]', isLarge && 'px-4 py-1.5 text-[16px]', isDisabled && 'pointer-events-none opacity-30');
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: finalClass
  }, props), children);
};
exports.Button = Button;
var buttonVariantStyles = {
  "default": ['text-grey-dark-scale-200 dark:text-grey-light-scale-300', 'bg-grey-light-scale-400 border-grey-light-scale-400 dark:bg-grey-dark-scale-500 dark:border-grey-dark-scale-500', 'hover:bg-grey-light-scale-500 hover:border-grey-light-scale-500 dark:hover:bg-grey-dark-scale-400 dark:hover:border-grey-dark-scale-400', 'active:bg-grey-light-scale-300 active:border-grey-light-scale-300 dark:active:bg-grey-dark-scale-600 dark:active:border-grey-dark-scale-600'],
  secondary: ['text-grey-dark-scale-200 dark:text-grey-light-scale-300', 'bg-white border-grey-light-scale-400 dark:bg-grey-dark-scale-500 dark:border-grey-dark-scale-200', 'hover:bg-white hover:border-grey-light-scale-500 dark:hover:bg-grey-dark-scale-500 dark:hover:border-grey-dark-scale-100', 'active:bg-white active:border-grey-light-scale-700 dark:active:bg-grey-dark-scale-500 dark:active:border-grey-light-scale-600'],
  success: ['text-white dark:text-black', 'bg-green border-green dark:bg-green-scale-400 dark:border-green-scale-400', 'hover:bg-green-scale-400 hover:border-green-scale-400', 'active:bg-green-scale-600 active:border-green-scale-600'],
  info: ['text-white dark:text-black', 'bg-blue border-blue', 'hover:bg-blue-scale-400 hover:border-blue-scale-400', 'active:bg-blue-scale-600 active:border-blue-scale-600'],
  warning: ['text-white dark:text-black', 'bg-orange border-orange', 'hover:bg-orange-scale-400 hover:border-orange-scale-400', 'active:bg-orange-scale-600 active:border-orange-scale-600'],
  danger: ['text-white dark:text-black', 'bg-red border-red', 'hover:bg-red-scale-400 hover:border-red-scale-400', 'active:bg-red-scale-600 active:border-red-scale-600']
};

// export const Butdton = styled.button(
//   ({ label, isSmall, isTiny, isLarge, isDisabled, isUppercase, iconColor }) => [
//     css`
//       font-family: 'Inter';
//       .icon-before {
//         position: relative;
//       }
//       .icon-after {
//         position: relative;
//       }
//       .icon-before * {
//         fill: ${iconColor ? iconColor : 'auto'};
//       }
//       .icon-after * {
//         fill: ${iconColor ? iconColor : 'auto'};
//       }
//     `,
//   ],
// )