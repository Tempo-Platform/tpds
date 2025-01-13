'use strict';

var React = require('react');
var elements_input_index = require('../../elements/input/index.js');
var reactColorful = require('react-colorful');
var clsx = require('clsx');
require('../../tslib.es6-VGxyZ2Ib.js');
require('tailwind-merge');

const classColorSquare = clsx('cursor-pointer', 'w-full max-w-[38px] h-[38px] rounded-[6px] relative', 'bg-grey-light-scale-400 dark:bg-grey-dark-scale-400');
const classColorInnerSquare = clsx('w-[26px] h-[26px] rounded-[3px] absolute top-[6px] left-[6px]');
const classColorPickerWrapper = clsx('tpds-color-picker inline-flex gap-x-1 w-full relative');
const ColorPickerInput = (props) => {
    let { onChangeHandler, hexColor, placeholder, swatchSide, omitTextInput } = props;
    if (!placeholder) {
        placeholder = 'Hex';
    }
    if (!swatchSide) {
        swatchSide = 'right';
    }
    const wrapperRef = React.useRef(null);
    const [colorPickerActive, setColorPickerActive] = React.useState(false);
    const handlePickerColorChange = (color) => {
        onChangeHandler(color);
    };
    const onInputChangeHandler = (e) => {
        onChangeHandler(e.target.value);
    };
    React.useEffect(() => {
        function handleClickOutside(event) {
            // @ts-ignore
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setColorPickerActive(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);
    const swatchJSX = (/*#__PURE__*/React.createElement("div", { className: classColorSquare, onClick: () => setColorPickerActive(!colorPickerActive) }, "\n      ", /*#__PURE__*/React.createElement("div", { className: classColorInnerSquare, style: { backgroundColor: hexColor } }), "\n    "));
    return (/*#__PURE__*/React.createElement("div", { className: classColorPickerWrapper, ref: wrapperRef }, "\n      ", swatchSide === 'left' && swatchJSX, "\n      ", !omitTextInput && /*#__PURE__*/React.createElement(elements_input_index.TextInput, { placeholder: placeholder, value: hexColor, onChange: onInputChangeHandler }), "\n      ", colorPickerActive && (/*#__PURE__*/React.createElement("div", { className: 'absolute top-[35px] left-0 z-10' }, "\n          ", /*#__PURE__*/React.createElement(reactColorful.HexAlphaColorPicker, { color: hexColor, onChange: handlePickerColorChange }), "\n        ")), "\n      ", swatchSide === 'right' && swatchJSX, "\n    "));
};

module.exports = ColorPickerInput;
