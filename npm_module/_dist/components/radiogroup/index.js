"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _Check = _interopRequireDefault(require("../../assets/svgs/icons/Check"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RadioGroup = function RadioGroup(_ref) {
  var options = _ref.options,
    handleIndexSelection = _ref.handleIndexSelection,
    selectedIndex = _ref.selectedIndex;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-y-1 w-full"
  }, options.map(function (option, index) {
    var isActive = selectedIndex === index;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: (0, _clsx["default"])("flex w-full items-center justify-between cursor-pointer", "py-2.5 px-4 rounded-lg overflow-hidden", "border-2 border-window", "transition-all duration-300", isActive ? "bg-grey-light-scale-200 dark:bg-grey-dark-scale-300" : "bg-window"),
      onClick: handleIndexSelection ? function () {
        return handleIndexSelection(index);
      } : null
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col gap-y-2 w-[calc(100%-40px)]!"
    }, /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      isMedium: true,
      className: "capitalize leading-none"
    }, option.title), /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      className: "text-tertiary leading-tight"
    }, option.description)), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])("!w-[26px] !h-[26px] rounded-[50%] border-2 flex justify-center items-center", "transition-all duration-300", isActive ? "border-transparent bg-black dark:bg-white" : "bg-transparent border-grey-light-scale-300 dark:border-grey-dark-scale-300")
    }, isActive && /*#__PURE__*/_react["default"].createElement(_Check["default"], {
      className: "text-white dark:text-black relative top-0"
    })));
  }));
};
var _default = RadioGroup;
exports["default"] = _default;