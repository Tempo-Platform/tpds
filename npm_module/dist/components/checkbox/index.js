'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var clsx = require('clsx');

function Checkbox(_a) {
    var { active, partial = false, disabled = false, onClick } = _a, props = tslib_es6.__rest(_a, ["active", "partial", "disabled", "onClick"]);
    const finalRootClassName = clsx('tpds-checkbox', active ? 'is-active' : 'is-off', 'relative transition duration-150', 'cursor-pointer h-[20px] w-[20px] rounded flex !justify-center !items-center', 'relative border-2 border-body hover:border-black dark:hover:border-white', '!bg-transparent', 'border-grey-light-scale-500 dark:border-grey-dark-scale-100', 'hover:border-2 hover:border-black dark:hover:border-black', 'active:border-black dark:active:border-white', active && ['!border-black dark:!border-white'], disabled && ['pointer-events-none opacity-30']);
    return (/*#__PURE__*/React.createElement("div", Object.assign({ className: finalRootClassName }, props, { onClick: onClick }), "\n      ", active && !partial && /*#__PURE__*/React.createElement(CheckIcon, { className: 'text-primary' }), "\n      ", active && partial && /*#__PURE__*/React.createElement(MinusIcon, { className: 'text-primary' }), "\n    "));
}
function CheckIcon(_a) {
    var props = tslib_es6.__rest(_a, []);
    return (/*#__PURE__*/React.createElement("svg", Object.assign({}, props, { xmlns: 'http://www.w3.org/2000/svg', width: '10', height: '8', fill: 'currentColor', viewBox: '0 0 8 6' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M7.25 1.266c.25-.25.25-.641 0-.891a.632.632 0 00-.875 0L2.812 3.938 1.25 2.375a.632.632 0 00-.875 0c-.25.25-.25.64 0 .89l2 2c.11.126.281.188.438.188a.617.617 0 00.437-.187l4-4z' }), "\n    "));
}
function MinusIcon(_a) {
    var props = tslib_es6.__rest(_a, []);
    return (/*#__PURE__*/React.createElement("svg", Object.assign({}, props, { xmlns: 'http://www.w3.org/2000/svg', width: '10', height: '10', fill: 'none', viewBox: '0 0 10 10' }), "\n      ", /*#__PURE__*/React.createElement("rect", { fill: 'currentColor', y: '4', width: '10', height: '2' }), "\n    "));
}

module.exports = Checkbox;
