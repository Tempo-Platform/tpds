"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _layout = require("../../elements/layout");
var _excluded = ["children", "containerVariant"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var HeroBlock = function HeroBlock(_ref) {
  var children = _ref.children,
    _ref$containerVariant = _ref.containerVariant,
    containerVariant = _ref$containerVariant === void 0 ? 'large' : _ref$containerVariant,
    props = _objectWithoutProperties(_ref, _excluded);
  var finalClass = (0, _clsx["default"])('h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]', props.className);
  return /*#__PURE__*/_react["default"].createElement(_layout.Section, _extends({}, props, {
    className: finalClass
  }), /*#__PURE__*/_react["default"].createElement(_layout.Container, {
    variant: containerVariant,
    className: "Container flex h-full flex-col justify-center"
  }, children));
};
var _default = HeroBlock;
exports["default"] = _default;