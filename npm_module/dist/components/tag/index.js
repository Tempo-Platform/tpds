'use strict';

var React = require('react');
var clsx = require('clsx');

const Tag = ({ onClick, label = '', isUppercase = false, addHoverEffect = false, showCloseIcon = false, noBorder = false, variant = 'default', rootClassName = '', labelClassName = '', className = '', onMouseEnter, onMouseLeave, children, }) => {
    const finalRootClass = clsx(className, 'h-[26px] inline-flex rounded-[6px] py-1 px-2', 'select-none justify-center items-center align-center gap-1', 'inline-flex py-0.5 px-1.5 select-none justify-center align-center gap-1', rootVariantStyles[variant], addHoverEffect && 'cursor-pointer', addHoverEffect && rootVariantStylesWithHover[variant], noBorder && '!border-none', rootClassName);
    const finalLabelClass = clsx('text-[12px] font-[600] whitespace-nowrap !text-inherit m-0 !leading-none', isUppercase && 'uppercase', labelClassName);
    return (/*#__PURE__*/React.createElement("div", { className: finalRootClass, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, "\n      ", children || (/*#__PURE__*/React.createElement("p", { className: finalLabelClass, style: { lineHeight: 'normal' } }, "\n          ", label, "\n        ")), "\n      ", showCloseIcon && /*#__PURE__*/React.createElement(XIcon, { className: finalLabelClass }), "\n    "));
};
const defaultStyle = ['transition duration-400', 'bg-black/10 text-black', 'dark:bg-white/10 dark:text-white'];
const infoStyle = ['bg-blue/20 dark:bg-blue/30 text-blue-scale-500 dark:text-blue-scale-300'];
const successStyle = ['bg-green/20 dark:bg-green/30 text-green-scale-500 dark:text-green-scale-300'];
const dangerStyle = ['bg-red/20 dark:bg-red/30 text-red-scale-500 dark:text-red-scale-300'];
const warningStyle = ['bg-orange/20 dark:bg-orange/30 text-orange-scale-500 dark:text-orange-scale-300'];
const defaultStyleWithHover = [
    'hover:bg-grey-dark-scale-400 hover:!text-white dark:hover:bg-grey-light-scale-200 hover:dark:!text-black',
];
const infoStyleWithHover = ['hover:bg-blue/80'];
const successStyleWithHover = ['hover:bg-green/80'];
const dangerStyleWithHover = ['hover:bg-red/80'];
const warningStyleWithHover = ['hover:bg-orange/80'];
const rootVariantStyles = {
    default: defaultStyle,
    info: infoStyle,
    success: successStyle,
    danger: dangerStyle,
    warning: warningStyle,
};
const rootVariantStylesWithHover = {
    default: defaultStyleWithHover,
    info: infoStyleWithHover,
    success: successStyleWithHover,
    danger: dangerStyleWithHover,
    warning: warningStyleWithHover,
};
function XIcon({ className }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', className: clsx('w-[14px] h-[16px]', className), viewBox: '0 0 20 20' }, "\n      ", /*#__PURE__*/React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' }), "\n    "));
}

module.exports = Tag;
