'use strict';

var React = require('react');
var clsx = require('clsx');
var elements_input_index = require('../../elements/input/index.js');
var elements_typography_index = require('../../elements/typography/index.js');
var index = require('../../index-CWuYkOT-.js');
var tailwindMerge = require('tailwind-merge');
require('../../tslib.es6-VGxyZ2Ib.js');

const getCurrentInputValue = (options, selectedIndex, labelProp) => {
    if (!selectedIndex && selectedIndex !== 0)
        return '';
    if (!options[selectedIndex])
        return '';
    return labelProp ? options[selectedIndex][labelProp] : options[selectedIndex];
};
const getOptionIndexFromAllOptions = (options, option, idProp) => {
    const id = idProp ? option[idProp] : option;
    return options.findIndex(o => {
        const idToCompare = idProp ? o[idProp] : o;
        return idToCompare === id;
    });
};
const Select = ({ options, handleIndexSelection, idProp, selectedIndex = -1, excludeIndexes = [], noPermanentSelection = false, enableClear = false, labelProp = 'value', placeholder = 'Select', isInvalid = false, forceLightMode = false, useKeyboard = false, }) => {
    const wrapperRef = React.useRef(null);
    const optionsWithoutExcludedIndexes = options.filter((option, index) => !excludeIndexes.includes(index));
    const [inputValue, setInputValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        function handleClickOutside(event) {
            // @ts-ignore
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                const currentlyExpectedInputValue = getCurrentInputValue(options, selectedIndex, labelProp);
                if (useKeyboard) {
                    setInputValue(currentlyExpectedInputValue);
                }
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        wrapperRef,
        selectedIndex,
        handleIndexSelection,
        labelProp,
        options,
        idProp,
        excludeIndexes,
        noPermanentSelection,
        placeholder,
    ]);
    const optionsThatMatchInputValue = optionsWithoutExcludedIndexes.filter(option => {
        const optionValue = labelProp ? option[labelProp] : option;
        return optionValue.toLowerCase().includes(inputValue.toLowerCase());
    });
    const inputValueToDisplay = isOpen
        ? inputValue
        : noPermanentSelection
            ? ''
            : getCurrentInputValue(options, selectedIndex, labelProp);
    const isSelected = (option) => {
        if (!idProp && !labelProp)
            return false;
        const optionIndex = getOptionIndexFromAllOptions(options, option, idProp);
        return optionIndex === selectedIndex;
    };
    const drawerStyles = clsx('w-full flex flex-col space-y-1 items-start text-left', 'p-1 lg:p-2 rounded bg-window border-2 border-window shadow-md', 'z-50 absolute top-[100%] left-0 max-h-40 overflow-auto', !forceLightMode && 'dark:shadow-none');
    return (/*#__PURE__*/React.createElement("div", { className: 'flex w-full relative text-left', ref: wrapperRef }, "\n      ", /*#__PURE__*/React.createElement("div", { className: 'w-full', onClick: e => {
            setIsOpen(true);
        } }, "\n        ", /*#__PURE__*/React.createElement(elements_input_index.TextInput, { forceLightMode: forceLightMode, placeholder: placeholder, value: inputValueToDisplay, onChange: e => setInputValue(e.target.value), className: clsx('w-full', elements_input_index.baseInputStyles, isInvalid && forceLightMode && '!border-grey-light-scale-600', isInvalid && !forceLightMode && '!border-grey-light-scale-600 dark:!border-grey-dark-scale-300', !isOpen && 'cursor-pointer', isOpen && '!border-blue', !useKeyboard && 'pointer-events-none'), onFocus: () => {
            setInputValue('');
        } }), "\n      "), "\n      ", /*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: clsx('w-5 h-5 absolute right-3 transform top-[10px] pointer-events-none text-[#7e909c]', isOpen && 'rotate-180') }, "\n        ", /*#__PURE__*/React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }), "\n      "), "\n\n      ", enableClear && selectedIndex && selectedIndex >= 0 ? (/*#__PURE__*/React.createElement(index.Cross, { onClick: () => handleIndexSelection(-1), className: clsx('absolute transform top-[12px] right-[40px] cursor-pointer text-[#7e909c]') })) : null, "\n\n      ", isOpen && (/*#__PURE__*/React.createElement("div", { className: drawerStyles }, "\n          ", optionsThatMatchInputValue.map((option, index) => (/*#__PURE__*/React.createElement("div", { key: index, onClick: () => {
                    handleIndexSelection(getOptionIndexFromAllOptions(options, option, idProp));
                    setIsOpen(false);
                }, className: tailwindMerge.twMerge(clsx('p-2 m-0', 'text-start font-medium', 'text-xs xl:text-sm', '!outline-none', 'w-full select-none cursor-pointer text-center', 'bg-window rounded', forceLightMode && 'hover:bg-grey-light-scale-300', !forceLightMode && 'hover:bg-grey-light-scale-300 hover:dark:bg-grey-dark-scale-600', isSelected(option) && forceLightMode && '!bg-grey-light-scale-300', isSelected(option) && !forceLightMode && '!bg-grey-light-scale-300 dark:!bg-grey-dark-scale-500')) }, "\n              ", /*#__PURE__*/React.createElement(elements_typography_index.PTiny, { forceLightMode: forceLightMode, className: clsx('text-primary text-left !text-[14px] !leading-tight', isSelected(option) && forceLightMode && '!text-black', isSelected(option) && !forceLightMode && '!text-black dark:!text-white') }, "\n                ", labelProp ? option[labelProp] : option, "\n              "), "\n              ", option.subLabel && (/*#__PURE__*/React.createElement(elements_typography_index.PNano, { forceLightMode: forceLightMode, className: clsx('mt-1 text-tertiary text-left !text-[13px] !leading-tight', isSelected(option) && forceLightMode && '!text-grey-light-scale-800', isSelected(option) &&
                        !forceLightMode &&
                        '!text-grey-light-scale-800 dark:!text-grey-light-scale-600') }, "\n                  ", option.subLabel, "\n                ")), "\n            "))), "\n          ", optionsThatMatchInputValue.length === 0 && (/*#__PURE__*/React.createElement(elements_typography_index.PTiny, { forceLightMode: forceLightMode, className: clsx('text-secondary text-left select-none') }, "\n              No matches\n            ")), "\n        ")), "\n    "));
};

module.exports = Select;
