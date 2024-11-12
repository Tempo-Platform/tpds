"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _Check = _interopRequireDefault(require("../../assets/svgs/icons/Check"));
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["steps", "currentStepIndex"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var insertLines = function insertLines(array) {
  var newArray = [];
  array.forEach(function (item, index) {
    newArray.push(item);
    if (index % 1 === 0) {
      newArray.push( /*#__PURE__*/_react["default"].createElement("div", {
        className: "w-full h-[2px] bg-grey-light-scale-300 dark:bg-grey-dark-scale-300 shrink @[400px]:mx-2",
        key: "{tpds-steps-line-".concat(index, "}")
      }));
    }
  });
  return newArray;
};
function calculateStepCircleState(index, currentStepIndex) {
  if (index === currentStepIndex) {
    return 'bg-black border-black dark:bg-white dark:border-white';
  }
  if (index < currentStepIndex) {
    return 'bg-blue border-blue dark:bg-blue dark:border-blue';
  }
  return 'bg-window border-grey-light-scale-500 dark:bg-window dark:border-grey-light-scale-800';
}
function calculateLabelState(index, currentStepIndex) {
  if (index === currentStepIndex) {
    return 'leading-none text-white dark:text-black';
  }
  if (index < currentStepIndex) {
    return 'leading-none text-white dark:text-black';
  }
  return 'leading-none text-primary dark:text-primary';
}
function StepsComponent(_ref) {
  var steps = _ref.steps,
    _ref$currentStepIndex = _ref.currentStepIndex,
    currentStepIndex = _ref$currentStepIndex === void 0 ? 0 : _ref$currentStepIndex,
    props = _objectWithoutProperties(_ref, _excluded);
  var classPLabel = (0, _clsx["default"])("!text-[13px] relative top-[-1px]", "tracking-tight leading-none relative top-[-1px] whitespace-nowrap!");
  var items = steps.map(function (step, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "shrink-0 flex gap-x-2 items-center",
      key: step.title
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])(calculateStepCircleState(index, currentStepIndex), 'shrink-0 rounded-[50%] !w-[24px] !h-[24px] flex justify-center items-center border-2')
    }, currentStepIndex > index ? /*#__PURE__*/_react["default"].createElement(_Check["default"], {
      className: "text-white"
    }) : /*#__PURE__*/_react["default"].createElement(_typography.PTiny, {
      isMedium: true,
      className: calculateLabelState(index, currentStepIndex)
    }, index + 1)), /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      isMedium: true,
      className: (0, _clsx["default"])(classPLabel)
    }, step.title));
  });
  var itemsWithLines = insertLines(items);
  itemsWithLines.pop();
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "w-full flex justify-between items-center gap-x-[4px]  @container"
  }, props), itemsWithLines);
}
var _default = StepsComponent;
exports["default"] = _default;