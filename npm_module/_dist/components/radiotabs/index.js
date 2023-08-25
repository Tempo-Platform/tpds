"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Tabs = function Tabs(_ref) {
  var items = _ref.items,
    selectedIndex = _ref.selectedIndex,
    callBack = _ref.callBack;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Tab.Group, {
    defaultIndex: selectedIndex || 0,
    onChange: function onChange(index) {
      if (callBack) callBack(index);
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Tab.List, {
    className: "flex space-x-1 rounded-lg p-1 bg-grey-light-scale-300 dark:bg-grey-dark-scale-500"
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_react2.Tab, {
      as: _react.Fragment,
      key: item.value || item.description || item.label || item
    }, function (_ref2) {
      var selected = _ref2.selected;
      return /*#__PURE__*/_react["default"].createElement("p", {
        className: (0, _clsx["default"])('text-primary m-0 font-medium', 'text-xs xl:text-sm', '!outline-none', "w-full select-none cursor-pointer text-center py-2 rounded-md", selected && "bg-grey-light-scale-100 text-black dark:bg-grey-dark-scale-300")
      }, item.value || item.description || item.label || item);
    });
  }))));
};
var _default = Tabs;
exports["default"] = _default;