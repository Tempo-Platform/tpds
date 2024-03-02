"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _arrows = require("../../assets/svgs/arrows");
var _clsx = _interopRequireDefault(require("clsx"));
var _datePicker = _interopRequireDefault(require("../date-picker"));
var _typography = require("../../elements/typography");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function DateRangePicker(_ref) {
  var _ref$startDate = _ref.startDate,
    startDate = _ref$startDate === void 0 ? new Date() : _ref$startDate,
    _ref$endDate = _ref.endDate,
    endDate = _ref$endDate === void 0 ? new Date() : _ref$endDate,
    _ref$omitYear = _ref.omitYear,
    omitYear = _ref$omitYear === void 0 ? false : _ref$omitYear,
    _ref$omitMonth = _ref.omitMonth,
    omitMonth = _ref$omitMonth === void 0 ? false : _ref$omitMonth,
    _ref$omitDay = _ref.omitDay,
    omitDay = _ref$omitDay === void 0 ? false : _ref$omitDay,
    _ref$allowPast = _ref.allowPast,
    allowPast = _ref$allowPast === void 0 ? true : _ref$allowPast,
    _ref$maxYearsToPast = _ref.maxYearsToPast,
    maxYearsToPast = _ref$maxYearsToPast === void 0 ? 10 : _ref$maxYearsToPast,
    _ref$maxYearsToFuture = _ref.maxYearsToFuture,
    maxYearsToFuture = _ref$maxYearsToFuture === void 0 ? 10 : _ref$maxYearsToFuture,
    _ref$preventWrongTimi = _ref.preventWrongTiming,
    preventWrongTiming = _ref$preventWrongTimi === void 0 ? true : _ref$preventWrongTimi,
    _ref$wrongTimeWarning = _ref.wrongTimeWarning,
    wrongTimeWarning = _ref$wrongTimeWarning === void 0 ? false : _ref$wrongTimeWarning,
    _ref$warnEqualTime = _ref.warnEqualTime,
    warnEqualTime = _ref$warnEqualTime === void 0 ? false : _ref$warnEqualTime,
    _ref$onChangeStartDat = _ref.onChangeStartDate,
    onChangeStartDate = _ref$onChangeStartDat === void 0 ? function () {} : _ref$onChangeStartDat,
    _ref$onChangeEndDate = _ref.onChangeEndDate,
    onChangeEndDate = _ref$onChangeEndDate === void 0 ? function () {} : _ref$onChangeEndDate;
  // checks
  if (!onChangeStartDate) {
    throw new Error('TPDS DateRangePicker: onChangeStartDate is required');
  }
  if (!onChangeEndDate) {
    throw new Error('TPDS DateRangePicker: onChangeEndDate is required');
  }
  if (omitYear && omitMonth && omitDay) {
    throw new Error('TPDS DateRangePicker: Cannot omit all year, month, and day');
  }
  var startTime = startDate.getTime();
  var endTime = endDate.getTime();
  var endDateBeforeStartDate = startTime > endTime;
  var endDateEqualStartDate = startTime === endTime;
  var rootClassName = (0, _clsx["default"])('!h-[40px] rounded', 'gap-x-0.5', '!inline-flex items-center !w-auto', 'inline-flex w-full', 'border-2', 'bg-transparent border-[#ededed] dark:border-[#384147]', wrongTimeWarning && endDateBeforeStartDate && '!border-orange');
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: rootClassName
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_datePicker["default"], {
    year: startDate.getFullYear(),
    month: startDate.getMonth(),
    day: startDate.getDate(),
    onChange: function onChange(date) {
      if (preventWrongTiming) {
        if (date.getTime() > endDate.getTime()) {
          onChangeEndDate(date);
        }
      }
      onChangeStartDate(date);
    },
    maxYearsToPast: maxYearsToPast,
    maxYearsToFuture: 0,
    allowPast: allowPast,
    omitBorders: true,
    omitCalendarIcon: true,
    styleOverrides: {
      height: '30px !important'
    }
  })), /*#__PURE__*/_react["default"].createElement(_arrows.ArrowRightIcon, {
    className: "h-[12px] text-black dark:text-white opacity-30"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative top-[-1px]"
  }, /*#__PURE__*/_react["default"].createElement(_datePicker["default"], {
    year: endDate.getFullYear(),
    month: endDate.getMonth(),
    day: endDate.getDate(),
    onChange: function onChange(date) {
      if (preventWrongTiming) {
        if (date.getTime() < startDate.getTime()) {
          onChangeStartDate(date);
        }
      }
      onChangeEndDate(date);
    },
    maxYearsToPast: endDate.getFullYear() - startDate.getFullYear(),
    maxYearsToFuture: maxYearsToFuture,
    allowPast: allowPast,
    omitBorders: true,
    styleOverrides: {
      height: '30px !important'
    }
  }))), wrongTimeWarning && endDateBeforeStartDate && /*#__PURE__*/_react["default"].createElement(_typography.PNano, {
    isMedium: true,
    className: "mt-1 !text-orange"
  }, "End date is before start date"), warnEqualTime && endDateEqualStartDate && /*#__PURE__*/_react["default"].createElement(_typography.PNano, {
    isMedium: true,
    className: "mt-1 text-tertiary"
  }, "Start and end dates are the same"));
}
var _default = DateRangePicker;
exports["default"] = _default;