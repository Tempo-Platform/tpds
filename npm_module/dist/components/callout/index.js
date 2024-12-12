'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var clsx = require('clsx');
var assets_svgs_notifications_index = require('../../assets/svgs/notifications/index.js');
var elements_typography_index = require('../../elements/typography/index.js');

const baseStyle = 'bg-zinc-50 dark:!bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 rounded-lg py-4 px-6';
const headerBaseStyle = 'flex items-center font-medium text-lg';
const headerVariantStyles = {
    default: '!text-grey-dark-scale-700 dark:!text-grey-light-scale-500',
    success: '!text-green dark:!text-green',
    info: '!text-blue dark:!text-blue',
    danger: '!text-red dark:!text-red',
    warning: '!text-orange dark:!text-orange',
    tip: '!text-purple dark:!text-purple',
    bug: '!text-orange dark:!text-orange',
    note: '!text-grey-dark-scale-700 dark:!text-white',
};
const getIcon = (variant) => {
    switch (variant) {
        case 'success':
            return /*#__PURE__*/React.createElement(assets_svgs_notifications_index.CheckIcon, null);
        case 'info':
            return /*#__PURE__*/React.createElement(assets_svgs_notifications_index.InfoIcon, null);
        case 'danger':
            return /*#__PURE__*/React.createElement(assets_svgs_notifications_index.ErrorIcon, null);
        case 'warning':
            return /*#__PURE__*/React.createElement(assets_svgs_notifications_index.WarningIcon, null);
        case 'tip':
            return /*#__PURE__*/React.createElement(assets_svgs_notifications_index.TipIcon, null);
        case 'bug':
            return /*#__PURE__*/React.createElement(assets_svgs_notifications_index.BugIcon, null);
        case 'note':
            return /*#__PURE__*/React.createElement(assets_svgs_notifications_index.NoteIcon, null);
        default:
            return null;
    }
};
const Callout = (_a) => {
    var { variant = 'default', title, text, omitIcon = false, customIcon, children } = _a, props = tslib_es6.__rest(_a, ["variant", "title", "text", "omitIcon", "customIcon", "children"]);
    return (/*#__PURE__*/React.createElement("div", Object.assign({}, props, { className: baseStyle }), "\n      ", /*#__PURE__*/React.createElement("div", { className: clsx(headerBaseStyle) }, "\n        ", !customIcon && !omitIcon && variant !== 'default' && /*#__PURE__*/React.createElement("span", { className: 'mr-2' }, getIcon(variant)), "\n        ", customIcon && !omitIcon && /*#__PURE__*/React.createElement("span", { className: 'mr-2' }, customIcon), "\n        ", title && (/*#__PURE__*/React.createElement(elements_typography_index.P, { isMedium: true, className: clsx(headerVariantStyles[variant]) }, "\n            ", title, "\n          ")), "\n      "), "\n      ", /*#__PURE__*/React.createElement("div", { className: 'mt-2' }, "\n        ", text && /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { isMedium: true, className: '!text-zinc-500 dark:!text-zinc-400' }, text), "\n        ", children, "\n      "), "\n    "));
};

module.exports = Callout;
