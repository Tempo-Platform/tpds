'use strict';

var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

const baseStyles = 'text-primary mt-0 mr-0 mb-0 ml-0';
const calculateFinalClass = (defaultClass, props) => {
    const finalClass = tailwindMerge.twMerge(baseStyles, defaultClass, props.isSmall && '!text-sm', props.isUnderline && '!underline', props.isUppercase && '!uppercase', props.isItalic && '!italic', props.isLight && '!font-light', props.isMedium && '!font-medium', props.isBold && '!font-bold', props.isExtraBold && '!font-extrabold', props.isHeavy && '!font-black', props.isPulsing && '!animate-pulse', props.isCentered && '!text-center', props.noSelect && '!select-none', props.isWhite && '!text-white', props.isGreen && '!text-green', props.isRed && '!text-red', props.isBlue && '!text-blue', props.isOrange && '!text-orange', props.isYellow && '!text-yellow', props.leadingNone && '!leading-none', props.isLabel && '!select-none', props.isLabel && '!leading-none', props.isLabel && '!font-label', props.forceLightMode && '!text-black');
    return finalClass;
};
const pNanoClass = 'text-xxs md:text-xs';
const pTinyClass = 'text-xs md:text-sm';
const pSmallClass = 'text-sm md:text-base';
const pClass = 'text-base md:text-lg';
const pLargeClass = 'text-lg md:text-xl';
const h6Class = 'text-base md:text-lg lg:text-xl xl:text-2xl tracking-normal leading-tight';
const h5Class = 'text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-normal leading-tight';
const h4Class = 'text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-normal leading-tight';
const h3Class = 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight';
const h2Class = 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight';
const h1Class = 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight';
const PNano = (props) => {
    const finalClass = calculateFinalClass(pNanoClass, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const PTiny = (props) => {
    const finalClass = calculateFinalClass(pTinyClass, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const PSmall = (props) => {
    const finalClass = calculateFinalClass(pSmallClass, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const P = (props) => {
    const finalClass = calculateFinalClass(pClass, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const PLarge = (props) => {
    const finalClass = calculateFinalClass(pLargeClass, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const H6 = (props) => {
    const finalClass = calculateFinalClass(h6Class, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("h6", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const H5 = (props) => {
    const finalClass = calculateFinalClass(h5Class, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("h5", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const H4 = (props) => {
    const finalClass = calculateFinalClass(h4Class, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("h4", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const H3 = (props) => {
    const finalClass = calculateFinalClass(h3Class, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("h3", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const H2 = (props) => {
    const finalClass = calculateFinalClass(h2Class, props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("h2", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }), "\n      ", props.children, "\n    "));
};
const H1 = (props) => {
    const finalClass = calculateFinalClass(h1Class, props);
    return (/*#__PURE__*/React.createElement("h1", { className: clsx(finalClass, props.className), style: props.style, onClick: props.onClick }, "\n      ", props.children, "\n    "));
};
// // helpers
const AccentColor = (props) => {
    const finalClass = calculateFinalClass('!text-blue', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Bold = (props) => {
    const finalClass = calculateFinalClass('!font-bold', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Medium = (props) => {
    const finalClass = calculateFinalClass('!font-medium', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Underline = (props) => {
    const finalClass = calculateFinalClass('!underline', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Red = (props) => {
    const finalClass = calculateFinalClass('!text-red', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Blue = (props) => {
    const finalClass = calculateFinalClass('!text-blue', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Green = (props) => {
    const finalClass = calculateFinalClass('!text-green', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Orange = (props) => {
    const finalClass = calculateFinalClass('!text-orange', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const Code = (props) => {
    const finalClass = calculateFinalClass('font-mono font-bold', props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("span", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
// // form labels
const FormLabelNano = (props) => {
    const finalClass = calculateFinalClass(clsx(pNanoClass, 'font-label text-tertiary font-medium leading-none'), props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const FormLabelTiny = (props) => {
    const finalClass = calculateFinalClass(clsx(pTinyClass, 'font-label text-tertiary font-medium leading-none'), props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const FormLabelSmall = (props) => {
    const finalClass = calculateFinalClass(clsx(pSmallClass, 'font-label text-tertiary font-medium leading-none'), props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};
const FormLabel = (props) => {
    const finalClass = calculateFinalClass(clsx(pClass, 'font-label text-tertiary font-medium leading-none'), props);
    const xprops = { id: props.id };
    return (/*#__PURE__*/React.createElement("p", Object.assign({}, xprops, { className: clsx(finalClass, props.className), style: props.style }), "\n      ", props.children, "\n    "));
};

exports.AccentColor = AccentColor;
exports.Blue = Blue;
exports.Bold = Bold;
exports.Code = Code;
exports.FormLabel = FormLabel;
exports.FormLabelNano = FormLabelNano;
exports.FormLabelSmall = FormLabelSmall;
exports.FormLabelTiny = FormLabelTiny;
exports.Green = Green;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Medium = Medium;
exports.Orange = Orange;
exports.P = P;
exports.PLarge = PLarge;
exports.PNano = PNano;
exports.PSmall = PSmall;
exports.PTiny = PTiny;
exports.Red = Red;
exports.Underline = Underline;
