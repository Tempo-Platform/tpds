'use strict';

var React = require('react');
var clsx = require('clsx');

var Variants;
(function (Variants) {
    Variants["info"] = "bg-blue dark:bg-blue";
    Variants["success"] = "bg-green dark:bg-green";
    Variants["warning"] = "bg-orange dark:bg-orange";
    Variants["danger"] = "bg-red dark:bg-red";
})(Variants || (Variants = {}));
function Switch({ active, onClick, variant, disabled }) {
    const rootStyles = clsx('h-[22px] w-[40px]', 'transition', 'cursor-pointer', 'items-center rounded-full', 'relative inline-flex', active && variant ? Variants[variant] : `bg-grey-light-scale-500 dark:bg-grey-dark-scale-300`);
    const circleStyles = clsx('transition', 'inline-block h-[16px] w-[16px] transform rounded-full bg-white', active ? `translate-x-[21px]` : `translate-x-[3px]`);
    return (/*#__PURE__*/React.createElement("div", { onClick: onClick, className: rootStyles, style: disabled ? { pointerEvents: 'none', opacity: 0.2 } : undefined }, "\n      ", /*#__PURE__*/React.createElement("span", { className: circleStyles }), "\n    "));
}

module.exports = Switch;
