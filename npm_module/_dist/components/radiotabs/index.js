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
    outlineStyle = _ref.outlineStyle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex space-x-1 rounded-[8px] p-1', outlineStyle ? 'bg-transparent border !border-[#ededed] dark:!border-[#384147]' : 'bg-grey-light-scale-200 dark:bg-grey-dark-scale-500')
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex-1",
      key: item.value || item.description || item.label || item,
      onClick: function onClick() {
        return handleIndexSelection(index);
      }
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: (0, _clsx["default"])(index === selectedIndex ? 'text-primary' : 'text-secondary', 'm-0 font-medium', 'text-xs xl:text-sm', '!outline-none', "w-full select-none cursor-pointer text-center py-2 rounded-[5px]", index === selectedIndex && 'bg-grey-dark-scale-500 text-white dark:bg-white dark:text-black')
    }, item.value || item.description || item.label || item));
  })));
};
var _default = RadioTabs;
exports["default"] = _default;