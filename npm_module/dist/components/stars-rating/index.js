'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');

const convertToPercent = (rating) => {
    const percent = 100 - Math.round((rating / 5) * 100);
    return percent;
};
function StarsRatings(_a) {
    var { rating, width = 100, lightOnly = false } = _a, props = tslib_es6.__rest(_a, ["rating", "width", "lightOnly"]);
    const calculatedHeight = width / 5.5; // calculate height in proportion to width
    return (/*#__PURE__*/React.createElement("div", Object.assign({ className: 'relative', style: { width: width, height: calculatedHeight } }, props), "\n      ", /*#__PURE__*/React.createElement(FiveStars, { className: lightOnly ? 'fill-[#ddd]' : 'fill-[#ddd] dark:fill-[#777]', style: { width: width, height: calculatedHeight } }), "\n      ", /*#__PURE__*/React.createElement(FiveStars, { className: 'fill-[#EFB23D]', style: {
            width: width,
            height: calculatedHeight,
            clipPath: `inset(0px ${convertToPercent(rating)}% 0px 0px)`,
        } }), "\n    "));
}
function FiveStars({ className, style }) {
    return (/*#__PURE__*/React.createElement("svg", { className: 'absolute w-full top-0 left-0 transition-all duration-300 ease-in-out', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 172 32', style: style }, "\n      ", /*#__PURE__*/React.createElement("path", { className: className, d: 'M15.28 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86L.748 10.86h11.101L15.28 0zM50.238 0l3.43 10.86H64.77l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L50.237 0zM85.196 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L85.195 0zM120.28 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L120.28 0zM156.28 0l3.43 10.86h11.102l-8.981 6.712 3.43 10.86-8.981-6.712-8.981 6.711 3.43-10.86-8.981-6.711h11.101L156.28 0z' }), "\n    "));
}

module.exports = StarsRatings;
