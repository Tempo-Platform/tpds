"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _Calendar = _interopRequireDefault(require("../../assets/svgs/icons/Calendar"));
var _input = require("../../elements/input");
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function DatePicker(_ref) {
  var _ref$year = _ref.year,
    year = _ref$year === void 0 ? new Date().getFullYear() : _ref$year,
    _ref$month = _ref.month,
    month = _ref$month === void 0 ? new Date().getMonth() : _ref$month,
    _ref$day = _ref.day,
    day = _ref$day === void 0 ? new Date().getDate() : _ref$day,
    _ref$omitYear = _ref.omitYear,
    omitYear = _ref$omitYear === void 0 ? false : _ref$omitYear,
    _ref$omitMonth = _ref.omitMonth,
    omitMonth = _ref$omitMonth === void 0 ? false : _ref$omitMonth,
    _ref$omitDay = _ref.omitDay,
    omitDay = _ref$omitDay === void 0 ? false : _ref$omitDay,
    _ref$allowPast = _ref.allowPast,
    allowPast = _ref$allowPast === void 0 ? true : _ref$allowPast,
    _ref$omitBorders = _ref.omitBorders,
    omitBorders = _ref$omitBorders === void 0 ? false : _ref$omitBorders,
    _ref$omitCalendarIcon = _ref.omitCalendarIcon,
    omitCalendarIcon = _ref$omitCalendarIcon === void 0 ? false : _ref$omitCalendarIcon,
    _ref$maxYearsToPast = _ref.maxYearsToPast,
    maxYearsToPast = _ref$maxYearsToPast === void 0 ? 10 : _ref$maxYearsToPast,
    _ref$maxYearsToFuture = _ref.maxYearsToFuture,
    maxYearsToFuture = _ref$maxYearsToFuture === void 0 ? 10 : _ref$maxYearsToFuture,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  if (!_onChange) {
    throw new Error('TPDS DatePicker: onChange is required');
  }
  if (omitYear && omitMonth && omitDay) {
    throw new Error('TPDS DatePicker: Cannot omit all year, month, and day');
  }
  var rootClassName = _clsx["default"].apply(void 0, _toConsumableArray(_input.baseInputStyles).concat(_toConsumableArray(_input.outlineStyles), ['!h-[38px] border !inline-flex items-center !w-auto gap-x-[3px] relative', omitBorders && '!border-0']));
  var cellStyle = (0, _clsx["default"])('cursor-pointer relative');
  var yearCellStyle = (0, _clsx["default"])(cellStyle, '');
  var dayMonthCellStyle = (0, _clsx["default"])(cellStyle, '');
  var selectLayer = (0, _clsx["default"])('absolute w-full opacity-0');
  var displayLayer = (0, _clsx["default"])('relative pointer-events-none top-[2px]', 'text-[15px] text-ellipsis font-medium !text-primary', 'flex items-center w-full');
  var displayLayerLeft = (0, _clsx["default"])(displayLayer, 'justify-start');
  var displayLayerCenter = (0, _clsx["default"])(displayLayer, 'justify-center');
  var numDaysInMonth = new Date(year, month + 1, 0).getDate();
  var furtherstPastYear = allowPast ? year - maxYearsToPast : year;
  var furtherstFutureYear = year + maxYearsToFuture;
  var yearOptions = _toConsumableArray(Array(furtherstFutureYear - furtherstPastYear + 1).keys()).map(function (i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: furtherstPastYear + i
    }, furtherstPastYear + i);
  });
  var monthOptions = _toConsumableArray(Array(12).keys()).map(function (i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: i
    }, i + 1);
  });
  var dayOptions = _toConsumableArray(Array(numDaysInMonth).keys()).map(function (i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: i
    }, i + 1);
  });
  var pickers = [];
  if (!omitYear) {
    pickers.push( /*#__PURE__*/_react["default"].createElement("div", {
      className: yearCellStyle,
      key: "year-picker"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: selectLayer
    }, /*#__PURE__*/_react["default"].createElement("select", {
      onChange: function onChange(e) {
        var testForNextMonthNumDays = new Date(parseInt(e.target.value), month + 1, 0);
        var numDaysInNextMonth = testForNextMonthNumDays.getDate();
        var nextDay = day > numDaysInNextMonth ? numDaysInNextMonth : day;
        var newDate = new Date("".concat(e.target.value, "-").concat(month + 1, "-").concat(nextDay));
        _onChange(newDate);
      },
      value: year
    }, yearOptions)), /*#__PURE__*/_react["default"].createElement("div", {
      className: displayLayerLeft
    }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, year))));
  }
  if (!omitMonth) {
    pickers.push( /*#__PURE__*/_react["default"].createElement("div", {
      className: dayMonthCellStyle,
      key: "month-picker"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: selectLayer
    }, /*#__PURE__*/_react["default"].createElement("select", {
      onChange: function onChange(e) {
        var testForNextMonthNumDays = new Date(year, parseInt(e.target.value) + 1, 0);
        var numDaysInNextMonth = testForNextMonthNumDays.getDate();
        var nextDay = day > numDaysInNextMonth ? numDaysInNextMonth : day;
        var newDate = new Date("".concat(year, "-").concat(parseInt(e.target.value) + 1, "-").concat(nextDay));
        _onChange(newDate);
      },
      value: month
    }, monthOptions)), /*#__PURE__*/_react["default"].createElement("div", {
      className: displayLayerCenter
    }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, parseInt(month) + 1))));
  }
  if (!omitDay) {
    pickers.push( /*#__PURE__*/_react["default"].createElement("div", {
      className: dayMonthCellStyle,
      key: "day-picker"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: selectLayer
    }, /*#__PURE__*/_react["default"].createElement("select", {
      onChange: function onChange(e) {
        var newDate = new Date("".concat(year, "-").concat(month + 1, "-").concat(parseInt(e.target.value) + 1));
        _onChange(newDate);
      },
      value: day - 1
    }, dayOptions)), /*#__PURE__*/_react["default"].createElement("div", {
      className: displayLayerCenter
    }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, day))));
  }
  var renderItems = [];
  for (var i = 0; i < pickers.length; i++) {
    renderItems.push(pickers[i]);
    if (i !== pickers.length - 1) {
      renderItems.push( /*#__PURE__*/_react["default"].createElement("div", {
        key: 'division' + i,
        className: "w-[4px] h-[2px] bg-black dark:bg-white relative opacity-30 top-[1px]"
      }));
    }
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: rootClassName
  }, renderItems, !omitCalendarIcon && /*#__PURE__*/_react["default"].createElement(_Calendar["default"], {
    className: "text-tertiary opacity-70 ml-2"
  })));
}
var _default = DatePicker;
exports["default"] = _default;