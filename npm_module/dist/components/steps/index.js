'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var elements_typography_index = require('../../elements/typography/index.js');
var assets_svgs_icons_index = require('../../assets/svgs/icons/index.js');
var clsx = require('clsx');
require('tailwind-merge');

const insertLines = (array) => {
    const newArray = [];
    array.forEach((item, index) => {
        newArray.push(item);
        if (index % 1 === 0) {
            newArray.push(/*#__PURE__*/React.createElement("div", { className: 'w-full h-[2px] bg-grey-light-scale-300 dark:bg-grey-dark-scale-300 shrink @[400px]:mx-2', key: `{tpds-steps-line-${index}}` }));
        }
    });
    return newArray;
};
function calculateStepCircleState(index, currentStepIndex) {
    if (index === currentStepIndex) {
        return 'bg-black border-black dark:bg-white dark:border-white';
    }
    if (index < currentStepIndex) {
        return 'bg-blue border-blue dark:bg-blue dark:border-blue';
    }
    return 'bg-window border-grey-light-scale-500 dark:bg-window dark:border-grey-light-scale-800';
}
function calculateLabelState(index, currentStepIndex) {
    if (index === currentStepIndex) {
        return 'leading-none text-white dark:text-black';
    }
    if (index < currentStepIndex) {
        return 'leading-none text-white dark:text-black';
    }
    return 'leading-none text-primary dark:text-primary';
}
function StepsComponent(_a) {
    var { steps, currentStepIndex = 0, style } = _a, props = tslib_es6.__rest(_a, ["steps", "currentStepIndex", "style"]);
    const classPLabel = clsx(`!text-[13px] relative top-[-1px]`, `tracking-tight leading-none relative top-[-1px] whitespace-nowrap!`);
    const items = steps.map((step, index) => (/*#__PURE__*/React.createElement("div", { className: 'shrink-0 flex gap-x-2 items-center', key: step.title }, "\n      ", /*#__PURE__*/React.createElement("div", { className: clsx(calculateStepCircleState(index, currentStepIndex), 'shrink-0 rounded-[50%] !w-[24px] !h-[24px] flex justify-center items-center border-2') }, "\n        ", currentStepIndex > index ? (/*#__PURE__*/React.createElement(assets_svgs_icons_index.CheckIcon, { className: 'text-white' })) : (/*#__PURE__*/React.createElement(elements_typography_index.PTiny, { isMedium: true, className: calculateLabelState(index, currentStepIndex) }, "\n            ", index + 1, "\n          ")), "\n      "), "\n      ", /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { isMedium: true, className: clsx(classPLabel) }, "\n        ", step.title, "\n      "), "\n    ")));
    const itemsWithLines = insertLines(items);
    itemsWithLines.pop();
    return (/*#__PURE__*/React.createElement("div", Object.assign({ className: 'w-full flex justify-between items-center gap-x-[4px] @container', style: style }, props), "\n      ", itemsWithLines, "\n    "));
}

module.exports = StepsComponent;
