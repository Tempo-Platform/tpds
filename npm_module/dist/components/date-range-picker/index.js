'use strict';

var React = require('react');
var assets_svgs_arrows_index = require('../../assets/svgs/arrows/index.js');
var clsx = require('clsx');
var components_datePicker_index = require('../date-picker/index.js');
var elements_typography_index = require('../../elements/typography/index.js');
require('../../tslib.es6-VGxyZ2Ib.js');
require('../../assets/svgs/icons/index.js');
require('../../elements/input/index.js');
require('tailwind-merge');

function DateRangePicker({ startDate = new Date(), endDate = new Date(), omitYear = false, omitMonth = false, omitDay = false, allowPast = true, maxYearsToPast = 10, maxYearsToFuture = 10, preventWrongTiming = true, wrongTimeWarning = false, warnEqualTime = false, onChangeStartDate = () => { }, onChangeEndDate = () => { }, }) {
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
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const endDateBeforeStartDate = startTime > endTime;
    const endDateEqualStartDate = startTime === endTime;
    const rootClassName = clsx('!h-[40px] rounded', 'gap-x-0.5', '!inline-flex items-center !w-auto', 'inline-flex w-full', 'border-2', 'bg-transparent border-[#ededed] dark:border-[#384147]', wrongTimeWarning && endDateBeforeStartDate && '!border-orange');
    return (/*#__PURE__*/React.createElement("div", null, "\n      ", /*#__PURE__*/React.createElement("div", { className: rootClassName }, "\n        ", /*#__PURE__*/React.createElement("div", null, "\n          ", /*#__PURE__*/React.createElement(components_datePicker_index, { year: startDate.getFullYear(), month: startDate.getMonth(), day: startDate.getDate(), onChange: date => {
            if (preventWrongTiming) {
                if (date.getTime() > endDate.getTime()) {
                    onChangeEndDate(date);
                }
            }
            onChangeStartDate(date);
        }, maxYearsToPast: maxYearsToPast, maxYearsToFuture: 0, allowPast: allowPast, omitBorders: true, omitCalendarIcon: true, styleOverrides: { background: 'transparent' } }), "\n        "), "\n        ", /*#__PURE__*/React.createElement(assets_svgs_arrows_index.ArrowRightIcon, { className: "h-[12px] text-black dark:text-white opacity-30" }), "\n        ", /*#__PURE__*/React.createElement("div", { className: "relative top-[-1px]" }, "\n          ", /*#__PURE__*/React.createElement(components_datePicker_index, { year: endDate.getFullYear(), month: endDate.getMonth(), day: endDate.getDate(), onChange: date => {
            if (preventWrongTiming) {
                if (date.getTime() < startDate.getTime()) {
                    onChangeStartDate(date);
                }
            }
            onChangeEndDate(date);
        }, maxYearsToPast: endDate.getFullYear() - startDate.getFullYear(), maxYearsToFuture: maxYearsToFuture, allowPast: allowPast, omitBorders: true, styleOverrides: { background: 'transparent' } }), "\n        "), "\n      "), "\n      ", wrongTimeWarning && endDateBeforeStartDate && (/*#__PURE__*/React.createElement(elements_typography_index.PNano, { isMedium: true, className: "mt-1 !text-orange" }, "\n          End date is before start date\n        ")), "\n      ", warnEqualTime && endDateEqualStartDate && (/*#__PURE__*/React.createElement(elements_typography_index.PNano, { isMedium: true, className: "mt-1 text-tertiary" }, "\n          Start and end dates are the same\n        ")), "\n    "));
}

module.exports = DateRangePicker;
