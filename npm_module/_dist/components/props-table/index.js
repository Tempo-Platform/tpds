"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var lastPVariants = {
  "default": 'col-span-4',
  skip1Columns: 'col-span-6',
  skip2Columns: 'col-span-8',
  skip3Columns: 'col-span-10'
};
var getLastPVariant = function getLastPVariant(skipColumn2, skipColumn3, skipColumn4) {
  var skipColumnsNum = 0;
  if (skipColumn2) skipColumnsNum++;
  if (skipColumn3) skipColumnsNum++;
  if (skipColumn4) skipColumnsNum++;
  if (skipColumnsNum === 0) return 'default';
  return "skip".concat(skipColumnsNum, "Columns");
};
function PropsTable(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? null : _ref$items,
    _ref$col1Name = _ref.col1Name,
    col1Name = _ref$col1Name === void 0 ? 'Prop Name' : _ref$col1Name,
    _ref$col2Name = _ref.col2Name,
    col2Name = _ref$col2Name === void 0 ? 'Type' : _ref$col2Name,
    _ref$col3Name = _ref.col3Name,
    col3Name = _ref$col3Name === void 0 ? 'Default' : _ref$col3Name,
    _ref$col4Name = _ref.col4Name,
    col4Name = _ref$col4Name === void 0 ? 'Required' : _ref$col4Name,
    _ref$col5Name = _ref.col5Name,
    col5Name = _ref$col5Name === void 0 ? 'Description' : _ref$col5Name,
    _ref$param1Name = _ref.param1Name,
    param1Name = _ref$param1Name === void 0 ? 'propName' : _ref$param1Name,
    _ref$param2Name = _ref.param2Name,
    param2Name = _ref$param2Name === void 0 ? 'type' : _ref$param2Name,
    _ref$param3Name = _ref.param3Name,
    param3Name = _ref$param3Name === void 0 ? 'default' : _ref$param3Name,
    _ref$param4Name = _ref.param4Name,
    param4Name = _ref$param4Name === void 0 ? 'required' : _ref$param4Name,
    _ref$param5Name = _ref.param5Name,
    param5Name = _ref$param5Name === void 0 ? 'description' : _ref$param5Name,
    _ref$skipColumn = _ref.skipColumn2,
    skipColumn2 = _ref$skipColumn === void 0 ? false : _ref$skipColumn,
    _ref$skipColumn2 = _ref.skipColumn3,
    skipColumn3 = _ref$skipColumn2 === void 0 ? false : _ref$skipColumn2,
    _ref$skipColumn3 = _ref.skipColumn4,
    skipColumn4 = _ref$skipColumn3 === void 0 ? false : _ref$skipColumn3;
  var lastPClass = lastPVariants[getLastPVariant(skipColumn2, skipColumn3, skipColumn4)];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "grid grid-cols-12 gap-4 pb-2 mb-8 border-b border-grey-light-scale-500 dark:border-grey-light-scale-900"
  }, /*#__PURE__*/_react["default"].createElement(_typography.P, {
    isBold: true,
    className: "whitespace-nowrap text-ellipsis overflow-hidden col-span-2"
  }, col1Name), !skipColumn2 && /*#__PURE__*/_react["default"].createElement(_typography.P, {
    isBold: true,
    className: "whitespace-nowrap text-ellipsis overflow-hidden col-span-2"
  }, col2Name), !skipColumn3 && /*#__PURE__*/_react["default"].createElement(_typography.P, {
    isBold: true,
    className: "whitespace-nowrap text-ellipsis overflow-hidden col-span-2"
  }, col3Name), !skipColumn4 && /*#__PURE__*/_react["default"].createElement(_typography.P, {
    isBold: true,
    className: "whitespace-nowrap text-ellipsis overflow-hidden col-span-2"
  }, col4Name), /*#__PURE__*/_react["default"].createElement(_typography.P, {
    isBold: true,
    className: lastPClass
  }, col5Name)), items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "grid grid-cols-12 gap-4 mb-4",
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      className: "col-span-2 break-words",
      isBold: true
    }, item[param1Name]), !skipColumn2 && /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      className: "whitespace-nowrap text-ellipsis overflow-hidden col-span-2"
    }, item[param2Name]), !skipColumn3 && /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      className: "whitespace-nowrap text-ellipsis overflow-hidden col-span-2"
    }, item[param3Name]), !skipColumn4 && /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      className: "whitespace-nowrap text-ellipsis overflow-hidden col-span-2"
    }, item[param4Name]), /*#__PURE__*/_react["default"].createElement(_typography.PSmall, {
      className: lastPClass
    }, item[param5Name]));
  }));
}
var _default = PropsTable;
exports["default"] = _default;