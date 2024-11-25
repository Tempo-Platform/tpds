'use strict';

var React = require('react');
var index = require('../../index-CmBItoar.js');
var elements_input_index = require('../../elements/input/index.js');
var clsx = require('clsx');
require('../../tslib.es6-VGxyZ2Ib.js');
require('tailwind-merge');

function DatePicker({ year = new Date().getFullYear(), month = new Date().getMonth(), day = new Date().getDate(), omitYear = false, omitMonth = false, omitDay = false, allowPast = true, omitBorders = false, omitCalendarIcon = false, maxYearsToPast = 10, maxYearsToFuture = 10, className = '', styleOverrides = {}, onChange = () => { }, }) {
    if (!onChange) {
        throw new Error('TPDS DatePicker: onChange is required');
    }
    if (omitYear && omitMonth && omitDay) {
        throw new Error('TPDS DatePicker: Cannot omit all year, month, and day');
    }
    const rootClassName = clsx(...elements_input_index.baseInputStyles, 'border !inline-flex items-center !w-auto gap-x-[5px] relative', omitBorders && '!border-0', className);
    const cellStyle = clsx('cursor-pointer relative');
    const yearCellStyle = clsx(cellStyle, '');
    const dayMonthCellStyle = clsx(cellStyle, '');
    const selectLayer = clsx('absolute w-full opacity-0');
    const displayLayer = clsx('relative pointer-events-none top-[0px]', 'text-[15px] text-ellipsis font-medium !text-primary', 'flex items-center w-full');
    const displayLayerLeft = clsx(displayLayer, 'justify-start');
    const displayLayerCenter = clsx(displayLayer, 'justify-center');
    const numDaysInMonth = new Date(year, month + 1, 0).getDate();
    const furtherstPastYear = allowPast ? year - maxYearsToPast : year;
    const furtherstFutureYear = year + maxYearsToFuture;
    const yearOptions = [...Array(furtherstFutureYear - furtherstPastYear + 1).keys()].map(i => (/*#__PURE__*/React.createElement("option", { key: i, value: furtherstPastYear + i }, "\n      ", furtherstPastYear + i, "\n    ")));
    const monthOptions = [...Array(12).keys()].map(i => (/*#__PURE__*/React.createElement("option", { key: i, value: i }, "\n      ", i + 1, "\n    ")));
    const dayOptions = [...Array(numDaysInMonth).keys()].map(i => (/*#__PURE__*/React.createElement("option", { key: i, value: i }, "\n      ", i + 1, "\n    ")));
    let pickers = [];
    if (!omitYear) {
        pickers.push(/*#__PURE__*/React.createElement("div", { className: yearCellStyle, key: 'year-picker' }, "\n        ", /*#__PURE__*/React.createElement("div", { className: selectLayer }, "\n          ", /*#__PURE__*/React.createElement("select", { onChange: e => {
                const testForNextMonthNumDays = new Date(parseInt(e.target.value), month + 1, 0);
                const numDaysInNextMonth = testForNextMonthNumDays.getDate();
                const nextDay = day > numDaysInNextMonth ? numDaysInNextMonth : day;
                const newDate = new Date(`${e.target.value}-${month + 1}-${nextDay}`);
                onChange(newDate);
            }, value: year }, "\n            ", yearOptions, "\n          "), "\n        "), "\n        ", /*#__PURE__*/React.createElement("div", { className: displayLayerLeft }, "\n          ", /*#__PURE__*/React.createElement(React.Fragment, null, year), "\n        "), "\n      "));
    }
    if (!omitMonth) {
        pickers.push(/*#__PURE__*/React.createElement("div", { className: dayMonthCellStyle, key: 'month-picker' }, "\n        ", /*#__PURE__*/React.createElement("div", { className: selectLayer }, "\n          ", /*#__PURE__*/React.createElement("select", { onChange: e => {
                const testForNextMonthNumDays = new Date(year, parseInt(e.target.value) + 1, 0);
                const numDaysInNextMonth = testForNextMonthNumDays.getDate();
                const nextDay = day > numDaysInNextMonth ? numDaysInNextMonth : day;
                const newDate = new Date(`${year}-${parseInt(e.target.value) + 1}-${nextDay}`);
                onChange(newDate);
            }, value: month }, "\n            ", monthOptions, "\n          "), "\n        "), "\n        ", /*#__PURE__*/React.createElement("div", { className: displayLayerCenter }, "\n          ", /*#__PURE__*/React.createElement(React.Fragment, null, month + 1), "\n        "), "\n      "));
    }
    if (!omitDay) {
        pickers.push(/*#__PURE__*/React.createElement("div", { className: dayMonthCellStyle, key: 'day-picker' }, "\n        ", /*#__PURE__*/React.createElement("div", { className: selectLayer }, "\n          ", /*#__PURE__*/React.createElement("select", { onChange: e => {
                const newDate = new Date(`${year}-${month + 1}-${parseInt(e.target.value) + 1}`);
                onChange(newDate);
            }, value: day - 1 }, "\n            ", dayOptions, "\n          "), "\n        "), "\n        ", /*#__PURE__*/React.createElement("div", { className: displayLayerCenter }, "\n          ", /*#__PURE__*/React.createElement(React.Fragment, null, day), "\n        "), "\n      "));
    }
    const renderItems = [];
    for (let i = 0; i < pickers.length; i++) {
        renderItems.push(pickers[i]);
        if (i !== pickers.length - 1) {
            renderItems.push(/*#__PURE__*/React.createElement("div", { key: 'division' + i, className: 'w-[4px] h-[2px] bg-black dark:bg-white relative opacity-30 top-[1px]' }));
        }
    }
    return (/*#__PURE__*/React.createElement("div", { className: rootClassName, style: styleOverrides }, "\n      ", renderItems, "\n      ", !omitCalendarIcon && /*#__PURE__*/React.createElement(index.Calendar, { className: 'text-tertiary opacity-70 ml-2' }), "\n    "));
}

module.exports = DatePicker;
