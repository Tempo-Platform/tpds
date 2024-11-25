'use strict';

var React = require('react');
var clsx = require('clsx');
var elements_layout_index = require('../../elements/layout/index.js');
require('../../tslib.es6-VGxyZ2Ib.js');

const HeroBlock = ({ children, containerVariant = 'large', className }) => {
    const finalClass = clsx('h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]', className);
    return (/*#__PURE__*/React.createElement(elements_layout_index.Section, { className: finalClass }, "\n      ", /*#__PURE__*/React.createElement(elements_layout_index.Container, { variant: containerVariant, className: 'Container flex h-full flex-col justify-center' }, "\n        ", children, "\n      "), "\n    "));
};

module.exports = HeroBlock;
