'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var clsx = require('clsx');

const Button = (_a) => {
    var { onClick, children, variant = 'default', isSmall, isTiny, isLarge, isExtraLarge, forceLightMode, isDisabled, isUppercase, className, style } = _a, props = tslib_es6.__rest(_a, ["onClick", "children", "variant", "isSmall", "isTiny", "isLarge", "isExtraLarge", "forceLightMode", "isDisabled", "isUppercase", "className", "style"]);
    if (variant === 'secondary') {
        console.log("The 'secondary' variant is deprecated. You can still use it, but it will be removed in the future.");
    }
    const finalClass = tailwindMerge.twMerge(clsx('flex justify-center items-center gap-x-2', 'px-3', 'h-[36px]', '!font-[600] text-[14px] leading-[100%] whitespace-nowrap', 'rounded-[4px] focus:outline-none', 'transition duration-400', 'select-none cursor-pointer', forceLightMode
        ? buttonVariantStylesLightOnly[variant]
        : buttonVariantStyles[variant], className, isSmall && '!text-sm', isUppercase && '!uppercase', isUppercase && '!uppercase', isTiny && 'h-[30px] px-2 py-0 text-[11px]', isSmall && 'h-[34px] px-3 py-0 text-[13px]', isLarge && 'h-[44px] px-6 py-0 text-[16px]', isExtraLarge && 'h-[52px] px-10 py-0 text-[18px]', isDisabled && 'pointer-events-none opacity-30'));
    return (/*#__PURE__*/React.createElement("button", Object.assign({ className: finalClass, onClick: onClick, style: style }, props), "\n      ", children, "\n    "));
};
const defaultStyles = [
    // text
    'text-grey-dark-scale-600 dark:text-grey-light-scale-300',
    'hover:text-grey-dark-scale-800 hover:dark:text-white',
    'active:text-grey-dark-scale-900 active:dark:text-grey-light-scale-100',
    // bg
    'bg-grey-light-scale-300 dark:bg-grey-dark-scale-600',
    'hover:bg-grey-light-scale-400 hover:dark:bg-grey-dark-scale-500',
    'active:bg-grey-light-scale-500 active:dark:bg-grey-dark-scale-600',
    // border
    // 'border-grey-light-scale-400 dark:border-grey-dark-scale-400',
    // 'hover:border-grey-light-scale-800 dark:hover:border-grey-light-scale-800',
    // 'active:border-grey-dark-scale-800 active:dark:border-grey-light-scale-50',
];
const successStyles = [
    // text
    'text-white dark:text-white',
    'active:text-white active:dark:text-white',
    // bg
    'bg-green-scale-500 dark:bg-green-scale-600',
    'hover:bg-green-scale-600 hover:dark:bg-green-scale-500',
    'active:bg-green-scale-700 active:dark:bg-green-scale-700',
    // border
    // 'border-green dark:border-green-scale-400',
    // 'hover:border-green-scale-200 dark:border-green-scale-400',
    // 'active:border-green-scale-300 dark:active:border-green-scale-300',
];
const infoStyles = [
    // text
    'text-white dark:text-white',
    'active:text-white active:dark:text-white',
    // bg
    'bg-blue-scale-500 dark:bg-blue-scale-600',
    'hover:bg-blue-scale-600 hover:dark:bg-blue-scale-500',
    'active:bg-blue-scale-700 active:dark:bg-blue-scale-700',
    // border
    // 'border-blue dark:border-blue-scale-400',
    // 'hover:border-blue-scale-200 dark:border-blue-scale-400',
    // 'active:border-blue-scale-300 dark:active:border-blue-scale-300',
];
const warningStyles = [
    // text
    'text-white dark:text-white',
    'active:text-white active:dark:text-white',
    // bg
    'bg-orange-scale-500 dark:bg-orange-scale-600',
    'hover:bg-orange-scale-600 hover:dark:bg-orange-scale-500',
    'active:bg-orange-scale-700 active:dark:bg-orange-scale-700',
    // border
    // 'border-orange dark:border-orange-scale-400',
    // 'hover:border-orange-scale-200 dark:border-orange-scale-400',
    // 'active:border-orange-scale-300 dark:active:border-orange-scale-300',
];
const dangerStyles = [
    // text
    'text-white dark:text-white',
    'active:text-white active:dark:text-white',
    // bg
    'bg-red-scale-500 dark:bg-red-scale-600',
    'hover:bg-red-scale-600 hover:dark:bg-red-scale-500',
    'active:bg-red-scale-700 active:dark:bg-red-scale-700',
    // border
    // 'border-red dark:border-red-scale-400',
    // 'hover:border-red-scale-200 dark:border-red-scale-400',
    // 'active:border-red-scale-300 dark:active:border-red-scale-300',
];
// special styles using purple
const specialStyles = [
    // text
    'text-white dark:text-white',
    'active:text-white active:dark:text-white',
    // bg
    'bg-purple-scale-500 dark:bg-purple-scale-600',
    'hover:bg-purple-scale-600 hover:dark:bg-purple-scale-500',
    'active:bg-purple-scale-700 active:dark:bg-purple-scale-700',
    // border
    // 'border-purple dark:border-purple-scale-400',
    // 'hover:border-purple-scale-200 dark:border-purple-scale-400',
    // 'active:border-purple-scale-300 dark:active:border-purple-scale-300',
];
const contrastStyles = [
    // text
    'text-grey-light-scale-50 dark:text-grey-dark-scale-800',
    'hover:text-grey-light-scale-50 hover:dark:text-grey-dark-scale-900',
    'active:text-grey-light-scale-500 active:dark:text-grey-dark-scale-100',
    // bg
    'bg-grey-dark-scale-600 dark:bg-grey-light-scale-300',
    'hover:bg-grey-dark-scale-900 hover:dark:bg-grey-light-scale-200',
    'active:bg-grey-dark-scale-700 active:dark:bg-white',
    // border
    // 'border-grey-dark-scale-500 dark:border-grey-light-scale-300',
    // 'hover:border-grey-dark-scale-400 hover:dark:border-grey-light-scale-200',
    // 'active:border-grey-light-scale-400 active:dark:border-grey-light-scale-900',
];
const contrastghostStyles = [
    // text
    'text-grey-dark-scale-600 dark:text-grey-light-scale-50',
    'hover:text-grey-light-scale-50 hover:dark:text-grey-dark-scale-600',
    'active:text-grey-dark-scale-200 active:dark:text-grey-light-scale-600',
    // bg
    'bg-transparent dark:bg-transparent',
    'hover:bg-grey-dark-scale-500 hover:dark:bg-grey-light-scale-300',
    'active:bg-grey-light-scale-50 active:dark:bg-grey-dark-scale-800',
    // border
    'border-2 border-grey-dark-scale-500 dark:border-grey-light-scale-300',
    'hover:border-grey-dark-scale-400 hover:dark:border-grey-light-scale-200',
    'active:border-grey-light-scale-500 active:dark:border-grey-light-scale-900',
];
const buttonVariantStyles = {
    default: defaultStyles,
    secondary: defaultStyles,
    success: successStyles,
    info: infoStyles,
    warning: warningStyles,
    danger: dangerStyles,
    special: specialStyles,
    contrastghost: contrastghostStyles,
    contrast: contrastStyles,
};
const defaultStylesLightOnly = [
    // text
    'text-grey-dark-scale-600',
    'hover:text-black hover',
    'active:text-grey-light-scale-50',
    // bg
    'bg-white',
    'active:bg-grey-dark-scale-800',
    // border
    'border-grey-light-scale-400',
    'hover:border-grey-light-scale-800',
    'active:border-grey-dark-scale-800',
];
const successStylesLightOnly = [
    // text
    'text-white',
    'active:text-green-scale-500',
    // bg
    'bg-green-scale-500',
    'hover:bg-green-scale-600',
    'active:bg-green-scale-100',
    // border
    'border-green',
    'hover:border-green-scale-200',
    'active:border-green-scale-300',
];
const infoStylesLightOnly = [
    // text
    'text-white',
    'active:text-blue-scale-500',
    // bg
    'bg-blue-scale-500',
    'hover:bg-blue-scale-600',
    'active:bg-blue-scale-100',
    // border
    'border-blue',
    'hover:border-blue-scale-200',
    'active:border-blue-scale-300',
];
const warningStylesLightOnly = [
    // text
    'text-white',
    'active:text-orange-scale-500',
    // bg
    'bg-orange-scale-500',
    'hover:bg-orange-scale-600',
    'active:bg-orange-scale-100',
    // border
    'border-orange',
    'hover:border-orange-scale-200',
    'active:border-orange-scale-300',
];
const dangerStylesLightOnly = [
    // text
    'text-white',
    'active:text-red-scale-500',
    // bg
    'bg-red-scale-500',
    'hover:bg-red-scale-600',
    'active:bg-red-scale-100',
    // border
    'border-red',
    'hover:border-red-scale-200',
    'active:border-red-scale-300',
];
// special styles using purple
const specialStylesLightOnly = [
    // text
    'text-white',
    'active:text-purple-scale-500',
    // bg
    'bg-purple-scale-500',
    'hover:bg-purple-scale-600',
    'active:bg-purple-scale-100',
    // border
    'border-purple',
    'hover:border-purple-scale-200',
    'active:border-purple-scale-300',
];
const contrastStylesLightOnly = [
    // text
    'text-grey-light-scale-50',
    'hover:text-grey-dark-scale-800',
    'active:text-grey-dark-scale-200',
    // bg
    'bg-grey-dark-scale-500',
    'hover:bg-grey-light-scale-50',
    'active:bg-grey-light-scale-200',
    // border
    'border-grey-dark-scale-500',
    'hover:border-grey-dark-scale-400',
    'active:border-grey-light-scale-400',
];
const contrastghostStylesLightOnly = [
    // text
    'text-grey-dark-scale-600',
    'hover:text-grey-light-scale-50',
    'active:text-grey-dark-scale-200',
    // bg
    'bg-transparent',
    'hover:bg-grey-dark-scale-500',
    'active:bg-grey-light-scale-50',
    // border
    'border-grey-dark-scale-500',
    'hover:border-grey-dark-scale-400',
    'active:border-grey-light-scale-500',
];
const buttonVariantStylesLightOnly = {
    default: defaultStylesLightOnly,
    secondary: defaultStylesLightOnly,
    success: successStylesLightOnly,
    info: infoStylesLightOnly,
    warning: warningStylesLightOnly,
    danger: dangerStylesLightOnly,
    special: specialStylesLightOnly,
    contrastghost: contrastghostStylesLightOnly,
    contrast: contrastStylesLightOnly,
};

exports.Button = Button;
