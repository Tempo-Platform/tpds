'use strict';

var React = require('react');
var elements_input_index = require('../../../elements/input/index.js');
require('../../../tslib.es6-VGxyZ2Ib.js');
require('clsx');
require('tailwind-merge');

function InputPrice({ initialValue, currencySymbol, onChangeCallback, }) {
    if (!currencySymbol) {
        console.error('Please provide a currency prop');
        return null;
    }
    if (!initialValue) {
        initialValue = '';
    }
    const limitToNumbers = (value) => {
        return value.replace(/[^0-9.]/g, '');
    };
    const applyPriceFormat = (value) => {
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const preProcessApplyPriceFormat = (value) => {
        const indexOfDecimal = value.indexOf('.');
        if (indexOfDecimal !== -1) {
            // ensure we format only before the decimals
            // split the string into 2 parts, before and after the decimal
            const beforeDecimal = value.slice(0, indexOfDecimal);
            const afterDecimal = value.slice(indexOfDecimal);
            // apply price format to the part before the decimal
            const formattedPart = applyPriceFormat(beforeDecimal);
            // return the formatted part and the part after the decimal
            return `${formattedPart}${afterDecimal}`;
        }
        else {
            return applyPriceFormat(value);
        }
    };
    const applyCurrencySymbol = (value) => {
        return `${currencySymbol} ${value}`;
    };
    const handleKeyDown = (e) => {
        // prevent 2 full stops
        if (e.keyCode === 190 && value.indexOf('.') !== -1) {
            e.preventDefault();
        }
    };
    const formatValue = (value) => {
        const onlyNums = limitToNumbers(value);
        const formattedValue = preProcessApplyPriceFormat(onlyNums);
        return applyCurrencySymbol(formattedValue);
    };
    const initialStateValue = formatValue(initialValue ? initialValue.toString() : '');
    // eslint-disable-next-line
    const [value, setValue] = React.useState(initialStateValue);
    const handleChange = (event) => {
        setValue(formatValue(event.target.value));
        if (onChangeCallback) {
            onChangeCallback(limitToNumbers(event.target.value));
        }
    };
    return /*#__PURE__*/React.createElement(elements_input_index.TextInput, { type: 'text', onKeyDown: handleKeyDown, value: value, onChange: handleChange });
}

module.exports = InputPrice;
