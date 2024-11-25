'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var clsx = require('clsx');

const Section = (_a) => {
    var { className, style, children } = _a; tslib_es6.__rest(_a, ["className", "style", "children"]);
    const defaultClass = 'flex flex-col w-full';
    const finalClass = clsx(defaultClass, className);
    return (/*#__PURE__*/React.createElement("div", { className: finalClass, style: style }, "\n      ", children, "\n    "));
};
const PageRoot = ({ className, style, children, }) => {
    const defaultClass = 'flex flex-col w-full min-h-screen';
    const finalClass = clsx(defaultClass, className);
    return (/*#__PURE__*/React.createElement("div", { className: finalClass, style: style }, "\n      ", children, "\n    "));
};
const containerVariants = {
    shortest: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[768px]',
    short: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[1022px]',
    large: 'px-6 sm:px-8 w-full md:px-0 md:w-[80%] xl:w-[70%] 2xl:w-[60%] 2xl:max-w-[1440px]',
    full: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 xl:w-10/12 2xl:w-full 2xl:px-30px',
};
const Container = ({ className, style, children, variant = 'large', }) => {
    const defaultClass = 'self-center mx-auto';
    const finalClass = clsx(defaultClass, className, containerVariants[variant]);
    return (/*#__PURE__*/React.createElement("div", { className: finalClass, style: style }, "\n      ", children, "\n    "));
};
const ContainerRow = ({ className, style, children, variant = 'large', }) => {
    const defaultClass = 'self-center flex-row';
    const finalClass = clsx(defaultClass, className, containerVariants[variant]);
    return (/*#__PURE__*/React.createElement("div", { className: finalClass, style: style }, "\n      ", children, "\n    "));
};
const PaddingBox = ({ className, style, children, }) => {
    const defaultClass = 'py-4 md:py-8 lg:py-12 xl:py-20';
    const finalClass = clsx(defaultClass, className);
    return (/*#__PURE__*/React.createElement("div", { className: finalClass, style: style }, "\n      ", children, "\n    "));
};
const Separator = ({ className, style }) => {
    const defaultClass = 'h-[1px] w-full mt-[20px] border-b border-grey-light-scale-400 dark:border-grey-dark-scale-500';
    const finalClass = clsx(defaultClass, className);
    return /*#__PURE__*/React.createElement("div", { className: finalClass, style: style });
};
const SeparatorWindow = ({ className, style, children, }) => {
    const defaultClass = 'h-[1px] w-full mt-[20px] border-b border-window';
    const finalClass = clsx(defaultClass, className);
    return (/*#__PURE__*/React.createElement("div", { className: finalClass, style: style }, "\n      ", children, "\n    "));
};
const Window = ({ className, style, children, }) => {
    const finalClass = clsx('bg-window border border-window', '!border-0 dark:!border-2', 'shadow-sm dark:shadow-none', 'rounded-sm lg:rounded-[8px]', 'py-xs px-xs md:py-xs md:px-sm lg:py-sm lg:px-md', className);
    return (/*#__PURE__*/React.createElement("div", { className: finalClass, style: style }, "\n      ", children, "\n    "));
};

exports.Container = Container;
exports.ContainerRow = ContainerRow;
exports.PaddingBox = PaddingBox;
exports.PageRoot = PageRoot;
exports.Section = Section;
exports.Separator = Separator;
exports.SeparatorWindow = SeparatorWindow;
exports.Window = Window;
