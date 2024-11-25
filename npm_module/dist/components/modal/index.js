'use strict';

var React = require('react');
var elements_buttons_index = require('../../elements/buttons/index.js');
var elements_typography_index = require('../../elements/typography/index.js');
var elements_layout_index = require('../../elements/layout/index.js');
require('../../tslib.es6-VGxyZ2Ib.js');
require('tailwind-merge');
require('clsx');

// @ts-ignore
const Modal = ({ showOpen = false, // modal state
clickElement = null, // JSX - the element to click to open the Modal
title = 'Modal title', // String
maxWidth = '500px', // String
description = '', // String
content, // JSX
options = [], // Array
overlayProps = null, // any React props
titleProps = null, // any React props
descriptionProps = null, // any React props
dialogOnClose, }) => {
    let [isOpen, setIsOpen] = React.useState(showOpen || false);
    React.useEffect(() => {
        setIsOpen(showOpen);
    }, [showOpen]);
    return (/*#__PURE__*/React.createElement("div", null, "\n      ", (showOpen || isOpen) && (/*#__PURE__*/React.createElement("div", { className: 'fixed inset-0 z-50 overflow-y-auto' }, "\n          ", /*#__PURE__*/React.createElement("div", { className: 'w-full min-h-screen text-center flex items-center justify-center' }, "\n            ", /*#__PURE__*/React.createElement("div", Object.assign({ className: 'tpds-modal-background-overlay fixed w-full h-full bg-black opacity-50' }, overlayProps)), "\n            ", /*#__PURE__*/React.createElement("div", { style: { maxWidth: maxWidth }, className: 'mx-2 inline-flex flex-col w-full rounded-lg my-8 overflow-hidden text-left align-middle transition-all transform bg-window dark:border-2 border-window shadow-xl' }, "\n              ", /*#__PURE__*/React.createElement(Content, { title: title, description: description, content: content, options: options, titleProps: titleProps, descriptionProps: descriptionProps, closeModal: () => {
                setIsOpen(false);
                dialogOnClose === null || dialogOnClose === void 0 ? void 0 : dialogOnClose();
            } }), "\n            "), "\n          "), "\n        ")), "\n      ", clickElement && (
        /* eslint-disable-next-line */
        /*#__PURE__*/React.createElement("div", { onClick: () => setIsOpen(!isOpen), className: 'inline-flex' }, "\n          ", clickElement, "\n        ")), "\n    "));
};
function Content({ title, description, content, options, titleProps, descriptionProps, closeModal, }) {
    if (!options || !options.length || !options[0]) {
        options = [
            {
                callBack: () => closeModal === null || closeModal === void 0 ? void 0 : closeModal(),
                label: 'Close',
                variant: 'secondary',
            },
        ];
    }
    const handleOption = (callBack) => {
        if (callBack) {
            callBack();
        }
        closeModal === null || closeModal === void 0 ? void 0 : closeModal();
    };
    return (/*#__PURE__*/React.createElement(React.Fragment, null, "\n      ", /*#__PURE__*/React.createElement("div", { className: 'py-sm px-sm' }, "\n        ", /*#__PURE__*/React.createElement(elements_typography_index.H6, Object.assign({ isBold: true }, titleProps), "\n          ", title, "\n        "), "\n        ", description && (/*#__PURE__*/React.createElement(elements_typography_index.P, Object.assign({}, descriptionProps, { className: 'text-secondary leading-tight mt-1' }), "\n            ", description, "\n          ")), "\n        ", content && (/*#__PURE__*/React.createElement(React.Fragment, null, "\n            ", /*#__PURE__*/React.createElement(elements_layout_index.Separator, { className: 'my-xs' }), "\n            ", /*#__PURE__*/React.createElement("div", { className: 'text-sm text-grey-light-scale-500' }, content), "\n          ")), "\n      "), "\n\n      ", /*#__PURE__*/React.createElement("div", { className: 'px-sm py-6 bg-grey-light-scale-200 dark:bg-grey-dark-scale-700 border-t border-grey-light-scale-400 dark:border-grey-dark-scale-300' }, "\n        ", /*#__PURE__*/React.createElement("div", { className: 'flex gap-4 justify-end' }, "\n          ", options.map(option => (/*#__PURE__*/React.createElement(elements_buttons_index.Button, { className: 'min-w-[80px]', key: option.label, onClick: () => handleOption(option.callBack), variant: option.variant || 'default' }, "\n              ", option.label || 'Close', "\n            "))), "\n        "), "\n      "), "\n    "));
}

module.exports = Modal;
