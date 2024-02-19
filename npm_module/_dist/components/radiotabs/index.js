"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getClassNamesForBreakpoint = function getClassNamesForBreakpoint(breakpoint) {
  switch (breakpoint) {
    case 'sm':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
    case 'md':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
    case 'lg':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
    case 'xl':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
    case '2xl':
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
    default:
      return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
  }
};
var RadioTabs = function RadioTabs(_ref) {
  var items = _ref.items,
    selectedIndex = _ref.selectedIndex,
    handleIndexSelection = _ref.handleIndexSelection,
    className = _ref.className,
    style = _ref.style,
    stackAtBreakpoint = _ref.stackAtBreakpoint;
  var containerStyles = (0, _clsx["default"])('flex gap-x-[2px] rounded-[4px] p-[2px] h-[36px]', 'bg-transparent border-2 !border-[#ededed] dark:!border-[#384147]',
  // using template strings isn't working so we're using a dumb function
  stackAtBreakpoint && getClassNamesForBreakpoint(stackAtBreakpoint));
  var itemDivStyles = (0, _clsx["default"])('flex-1 overflow-hidden cursor-pointer', '!px-[7px] py-[4px]', 'flex justify-center', 'select-none !outline-none rounded-[3px]');
  var itemLabelStyles = (0, _clsx["default"])('font-semibold', 'text-[13px]', '!outline-none', 'overflow-hidden whitespace-nowrap text-ellipsis', '!m-0 self-center', 'relative top-0');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('w-full', className),
    style: {
      style: style
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: containerStyles
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])(itemDivStyles, index === selectedIndex && 'bg-grey-light-scale-300 dark:bg-grey-dark-scale-300'),
      key: item.value || item.description || item.label || item,
      onClick: function onClick() {
        return handleIndexSelection(index);
      }
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: (0, _clsx["default"])(itemLabelStyles, index === selectedIndex ? 'text-grey-dark-scale-200 dark:text-grey-light-scale-400' : 'text-grey-light-scale-600 dark:text-grey-light-scale-900')
    }, item.value || item.description || item.label || item));
  })));
};
var _default = RadioTabs;
exports["default"] = _default;