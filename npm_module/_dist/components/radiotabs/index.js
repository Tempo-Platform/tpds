"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RadioTabs = function RadioTabs(_ref) {
  var items = _ref.items,
    selectedIndex = _ref.selectedIndex,
    handleIndexSelection = _ref.handleIndexSelection,
    outlineStyle = _ref.outlineStyle,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('w-full', className),
    style: {
      style: style
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex gap-x-[2px] rounded-[8px] p-[2px] h-[36px]', outlineStyle ? 'bg-transparent border !border-[#ededed] dark:!border-[#384147]' : 'bg-grey-light-scale-200 dark:bg-grey-dark-scale-500')
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])('flex-1 overflow-hidden', '!px-[7px] py-[4px]', 'flex justify-center', 'select-none !outline-none', index === selectedIndex && 'bg-black dark:text-black rounded-[5px]'),
      key: item.value || item.description || item.label || item,
      onClick: function onClick() {
        return handleIndexSelection(index);
      }
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: (0, _clsx["default"])(index === selectedIndex ? 'text-primary' : 'text-secondary', 'font-medium', 'text-[14px]', '!outline-none', 'overflow-hidden whitespace-nowrap text-ellipsis', index === selectedIndex && 'text-white dark:bg-white')
    }, item.value || item.description || item.label || item));
  })));
};
var _default = RadioTabs;
exports["default"] = _default;