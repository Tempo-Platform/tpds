'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var elements_buttons_index = require('../../elements/buttons/index.js');
var components_spinner_index = require('../spinner/index.js');
require('tailwind-merge');
require('clsx');
require('../../tokens/index.js');

const Button = (_a) => {
    var { label, iconBefore, iconAfter, variant, loading, className, onClick } = _a, props = tslib_es6.__rest(_a, ["label", "iconBefore", "iconAfter", "variant", "loading", "className", "onClick"]);
    return (/*#__PURE__*/React.createElement(elements_buttons_index.Button, Object.assign({ variant: variant, className: className, onClick: onClick }, props), "\n      ", iconBefore && iconBefore, "\n      ", label, "\n      ", iconAfter && iconAfter, "\n      ", loading && /*#__PURE__*/React.createElement(components_spinner_index, { className: 'block', radius: 15 }), "\n    "));
};
function ExternalLinkIcon(_a) {
    var props = tslib_es6.__rest(_a, []);
    return (/*#__PURE__*/React.createElement("svg", Object.assign({}, props, { xmlns: 'http://www.w3.org/2000/svg', width: '14', height: '14', viewBox: '0 0 13 14' }), "\n      ", /*#__PURE__*/React.createElement("path", { className: 'fill-current', d: 'M12.62.625L8.48.65a.347.347 0 00-.355.356v.838c0 .203.152.38.355.38l1.88-.076.05.051-7.084 7.084a.385.385 0 00-.101.203c0 .076.05.178.101.229l.584.584c.05.05.152.101.229.101.05 0 .152-.05.203-.101l7.084-7.084.05.05-.076 1.88c0 .203.178.355.381.355h.838a.347.347 0 00.356-.355L13 1.005a.39.39 0 00-.38-.38zm-1.651 7.313h-.406a.418.418 0 00-.407.406v3.91c0 .101-.076.152-.152.152H1.37c-.101 0-.152-.05-.152-.152V3.62c0-.076.05-.152.152-.152h3.91a.418.418 0 00.407-.406v-.407a.437.437 0 00-.407-.406H1.22C.533 2.25 0 2.809 0 3.469v8.937c0 .686.533 1.219 1.219 1.219h8.937c.66 0 1.219-.533 1.219-1.219V8.344a.437.437 0 00-.406-.406z' }), "\n    "));
}
function ExternalLinkButton(_a) {
    var { label, variant } = _a, props = tslib_es6.__rest(_a, ["label", "variant"]);
    return /*#__PURE__*/React.createElement(Button, Object.assign({ variant: variant || 'default', label: label, iconAfter: /*#__PURE__*/React.createElement(ExternalLinkIcon, null) }, props));
}

exports.Button = Button;
exports.ExternalLinkButton = ExternalLinkButton;
exports.ExternalLinkIcon = ExternalLinkIcon;
