'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

const baseInputStyles = [
    'flex w-full',
    'transition duration-400',
    'px-2.5 rounded-[6px] !outline-none',
    '!h-[40px] text-[13px]',
    'border-2',
    'font-medium text-primary',
    'placeholder:text-blue leading-none',
    'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900',
    'border-grey-light-scale-400 dark:border-grey-dark-scale-400',
    'focus:border-blue dark:focus:border-blue',
];
const colorInputStyles = [
    'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900',
    'border-grey-light-scale-400 dark:border-grey-dark-scale-400',
];
const lightInputStyles = ['!bg-grey-light-scale-50', '!border-grey-light-scale-400'];
const TextInput = (_a) => {
    var { value, defaultValue, isValid, isInvalid, isWarning, outlineStyle, className, forceLightMode, onChange, onInput, onBlur, onKeyDown, onFocus, placeholder, type } = _a, props = tslib_es6.__rest(_a, ["value", "defaultValue", "isValid", "isInvalid", "isWarning", "outlineStyle", "className", "forceLightMode", "onChange", "onInput", "onBlur", "onKeyDown", "onFocus", "placeholder", "type"]);
    const colorStylesToUse = forceLightMode ? lightInputStyles : colorInputStyles;
    const finalClass = tailwindMerge.twMerge(clsx(...baseInputStyles, ...colorStylesToUse, 
    //outlineStyle && outlineStyles,
    className, forceLightMode && '!text-black', isValid && '!border-green focus:!border-green dark:!border-green dark:focus:!border-green', isInvalid && '!border-red focus:!border-red dark:!border-red dark:focus:!border-red', isWarning && '!border-orange focus:!border-orange dark:!border-orange dark:focus:!border-orange'));
    return (/*#__PURE__*/React.createElement("input", Object.assign({ type: type || 'text', className: finalClass, placeholder: placeholder, value: value, defaultValue: defaultValue, onChange: onChange, onInput: onInput, onBlur: onBlur, onKeyDown: onKeyDown, onFocus: onFocus }, props)));
};

exports.TextInput = TextInput;
exports.baseInputStyles = baseInputStyles;
exports.colorInputStyles = colorInputStyles;
exports.lightInputStyles = lightInputStyles;
