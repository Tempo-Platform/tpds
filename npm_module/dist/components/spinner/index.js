'use strict';

var tslib_es6 = require('../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var tokens_index = require('../../tokens/index.js');
var clsx = require('clsx');

const colorPalettes = tokens_index.colors.color_palettes;
const processColor = (color) => {
    // make it easy to use TPDS color defaults
    switch (color) {
        case 'red':
            return colorPalettes.red[500];
        case 'blue':
            return colorPalettes.blue[500];
        case 'green':
            return colorPalettes.green[500];
        case 'orange':
            return colorPalettes.orange[500];
        case 'purple':
            return colorPalettes.purple[500];
        case 'yellow':
            return colorPalettes.yellow[500];
        case 'magenta':
            return colorPalettes.yellow[500];
        default:
            return color;
    }
};
function Spinner(_a) {
    var { color, radius, duration, strokeWidth = '3', className } = _a, props = tslib_es6.__rest(_a, ["color", "radius", "duration", "strokeWidth", "className"]);
    if (!color)
        color = 'currentColor';
    color = processColor(color);
    if (color === 'currentColor')
        color = 'text-primary';
    return (/*#__PURE__*/React.createElement("svg", Object.assign({}, props, { className: clsx('tpds-spinner', className), viewBox: '0 0 42 42', style: {
            animationDuration: `${duration ? duration : 900}ms`,
            width: `${radius ? radius : 40}px`,
            height: `${radius ? radius : 40}px`,
        } }), "\n      ", /*#__PURE__*/React.createElement("g", { fill: 'none', transform: 'translate(3 3)', strokeWidth: strokeWidth }, "\n        ", /*#__PURE__*/React.createElement("circle", { className: 'stroke-grey-light-scale-400/50 dark:stroke-grey-dark-scale-300/50', cx: '18', cy: '18', r: '18' }), "\n        ", /*#__PURE__*/React.createElement("path", { className: 'stroke-current text-primary', style: { color: color }, stroke: 'currentColor', d: 'M36 18c0-9.94-8.06-18-18-18', strokeLinecap: 'round', strokeLinejoin: 'round' }), "\n      "), "\n    "));
}

module.exports = Spinner;
