'use strict';

var tslib_es6 = require('../../../tslib.es6-VGxyZ2Ib.js');
var React = require('react');
var elements_input_index = require('../../../elements/input/index.js');
require('clsx');
require('tailwind-merge');

function InputNumber(_a) {
    var { initialValue, onChangeCallback, minValue = null, maxValue = null, maxLength = 100, allowFloats = true, floatPrecision = 2, className, placeholder, isInvalid, step } = _a, props = tslib_es6.__rest(_a, ["initialValue", "onChangeCallback", "minValue", "maxValue", "maxLength", "allowFloats", "floatPrecision", "className", "placeholder", "isInvalid", "step"]);
    if (initialValue === undefined || initialValue === null) {
        initialValue = '';
    }
    const initialStateValue = initialValue ? initialValue.toString() : '';
    const [value, setValue] = React.useState(initialStateValue);
    const validateInput = (input) => {
        let currentValueFloat = parseFloat(input);
        if (allowFloats) {
            currentValueFloat = parseFloat(currentValueFloat.toFixed(floatPrecision));
        }
        else {
            currentValueFloat = Math.round(parseInt(input));
        }
        if (maxLength) {
            let stringFloatValue = String(currentValueFloat);
            currentValueFloat = parseFloat(stringFloatValue.slice(0, maxLength));
        }
        if (maxValue) {
            currentValueFloat = Math.min(currentValueFloat, maxValue);
        }
        if (minValue) {
            currentValueFloat = Math.max(currentValueFloat, minValue);
        }
        return currentValueFloat;
    };
    const handleInput = (event) => {
        setValue(event.target.value);
    };
    const handleChange = (event) => {
        let value = event.target.value;
        if (value) {
            value = validateInput(value).toString();
        }
        setValue(value);
        onChangeCallback(value);
    };
    const handleBlur = (event) => {
        let value = validateInput(event.target.value).toString();
        setValue(value);
        onChangeCallback(value);
    };
    return (/*#__PURE__*/React.createElement(elements_input_index.TextInput, Object.assign({ type: 'number', step: step, placeholder: placeholder, className: className, 
    // min={minValue}
    // max={maxValue}
    isInvalid: isInvalid, onInput: handleInput, value: value, onChange: handleChange, onBlur: handleBlur }, props)));
}

module.exports = InputNumber;
