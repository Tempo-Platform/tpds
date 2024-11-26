'use strict';

var React = require('react');
var clsx = require('clsx');
var elements_typography_index = require('../../elements/typography/index.js');
var assets_svgs_tiny_index = require('../../assets/svgs/tiny/index.js');
var elements_input_index = require('../../elements/input/index.js');
require('../../tslib.es6-VGxyZ2Ib.js');
require('tailwind-merge');

const getCurrentInputValue = (options, selectedIndexes) => {
    if (!selectedIndexes || selectedIndexes.length === 0)
        return [];
    return options.filter((option, index) => selectedIndexes.includes(index));
};
const getOptionIndexFromAllOptions = (options, option, idProp) => {
    const id = idProp ? option[idProp] : option;
    return options.findIndex(o => {
        const idToCompare = idProp ? o[idProp] : o;
        return idToCompare === id;
    });
};
const SelectMulti = ({ options, selectedIndexes, handleSelectionUpdate, idProp, excludeIndexes = [], isInvalid = false, labelProp = 'value', placeholder = 'Select', omitSelectedInDropdown = true, truncateAfterNumItems = -1, className = '', }) => {
    const wrapperRef = React.useRef(null);
    const inputRef = React.useRef(null);
    const optionsWithoutExcludedIndexes = options.filter((option, index) => !excludeIndexes.includes(index));
    const [displayValue, setDisplayValue] = React.useState(getCurrentInputValue(options, selectedIndexes));
    const [inputValue, setInputValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        const currentlyExpectedInputValue = getCurrentInputValue(options, selectedIndexes);
        const isDifferent = JSON.stringify(currentlyExpectedInputValue) !== JSON.stringify(displayValue);
        if (isDifferent) {
            setDisplayValue(currentlyExpectedInputValue);
        }
        function handleClickOutside(event) {
            // @ts-ignore
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        wrapperRef,
        selectedIndexes,
        handleSelectionUpdate,
        labelProp,
        options,
        idProp,
        excludeIndexes,
        placeholder,
        inputValue,
        displayValue,
    ]);
    const optionsThatMatchInputValue = optionsWithoutExcludedIndexes.filter(option => {
        const optionValue = labelProp ? option[labelProp] : option;
        return optionValue.toLowerCase().includes(inputValue.toLowerCase());
    });
    const inputValueToDisplay = isOpen ? inputValue : '';
    const isSelected = (option) => {
        if (!selectedIndexes || selectedIndexes.length === 0)
            return false;
        const optionIndex = getOptionIndexFromAllOptions(options, option, idProp);
        return selectedIndexes.includes(optionIndex);
    };
    const removeSelectedItem = (item) => {
        const itemIndex = getOptionIndexFromAllOptions(options, item, idProp);
        const updatedSelection = selectedIndexes.filter(item => item !== itemIndex);
        handleSelectionUpdate(updatedSelection);
    };
    const clickTruncatedItems = () => {
        const newMaxIndex = truncateAfterNumItems;
        const updatedSelection = selectedIndexes.slice(0, newMaxIndex);
        handleSelectionUpdate(updatedSelection);
    };
    const addSelectedItem = (item) => {
        const itemIndex = getOptionIndexFromAllOptions(options, item, idProp);
        const updatedSelectionArray = [...selectedIndexes];
        updatedSelectionArray.push(itemIndex);
        handleSelectionUpdate(updatedSelectionArray);
    };
    const optionsThatAreStillNotSelected = optionsThatMatchInputValue.filter(option => !isSelected(option));
    const optionsToShow = omitSelectedInDropdown ? optionsThatAreStillNotSelected : optionsThatMatchInputValue;
    const tagRootClass = clsx('text-grey-dark-scale-200 dark:text-grey-light-scale-400', 'inline-flex shadow bg-black dark:bg-white rounded py-0.5 px-1.5', 'h-[24px] inline-flex rounded py-0.5 px-1.5 select-none justify-center items-center align-center gap-1', 'inline-flex rounded py-0.5 px-1.5 select-none justify-center align-center gap-1', 'select-none justify-center items-center align-center gap-1');
    const tagRootClassInverted = clsx(tagRootClass, '!bg-black dark:!bg-white !text-white');
    const tagClass = clsx('text-[11px] font-bold whitespace-nowrap !text-white dark:!text-black m-0', 'relative top-[-1px]');
    const xClass = clsx('text-[11px] font-bold whitespace-nowrap !text-white dark:!text-black m-0');
    let selectedTagsToDisplay = displayValue;
    if (truncateAfterNumItems !== -1 && displayValue.length > truncateAfterNumItems) {
        selectedTagsToDisplay = displayValue.slice(0, truncateAfterNumItems);
    }
    return (/*#__PURE__*/React.createElement("div", { className: clsx('w-full relative', !isOpen && 'cursor-pointer', className), ref: wrapperRef, 
    // @ts-ignore
    onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } }, "\n      ", /*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 20 20', strokeWidth: 1.5, stroke: 'currentColor', onClick: e => {
            e.stopPropagation();
            e.preventDefault();
            setIsOpen(!isOpen);
        }, className: clsx('pointer-events-none', 'w-4 h-4 absolute right-[12px] top-[11px]', 'text-tertiary', 
        //'!hover:text-black !hover:dark:text-white',
        isOpen && 'rotate-180 !top-[12px] !right-[9px]') }, "\n        ", /*#__PURE__*/React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }), "\n      "), "\n      ", displayValue.length > 0 && (/*#__PURE__*/React.createElement("div", { className: 'absolute right-[34px] top-[12px]' }, "\n          ", /*#__PURE__*/React.createElement(assets_svgs_tiny_index.Cross, { className: 'text-tertiary hover:text-black hover:dark:text-white cursor-pointer', onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
                handleSelectionUpdate([]);
            } }), "\n        ")), "\n      ", /*#__PURE__*/React.createElement("div", { className: clsx(elements_input_index.baseInputStyles, 'flex flex-row flex-wrap gap-2 items-center justify-between', 'font-normal', 'border-2', isInvalid && '!border-red', 'cursor-pointer', 'select-none', isOpen && '!border-blue') }, "\n        ", /*#__PURE__*/React.createElement("div", { className: 'flex gap-1 flex-wrap' }, "\n          ", selectedTagsToDisplay &&
            selectedTagsToDisplay.map((item, index) => (/*#__PURE__*/React.createElement("div", { key: index, className: tagRootClass, onClick: () => {
                    removeSelectedItem(item);
                } }, "\n                ", /*#__PURE__*/React.createElement("p", { className: tagClass, style: { lineHeight: 'normal' } }, "\n                  ", "\n                  ", item[labelProp] || item, "\n                "), "\n                ", /*#__PURE__*/React.createElement(XIcon, { className: xClass }), "\n              "))), "\n          ", truncateAfterNumItems !== -1 && truncateAfterNumItems && displayValue.length > truncateAfterNumItems && (/*#__PURE__*/React.createElement("div", { className: tagRootClassInverted, onClick: clickTruncatedItems }, "\n              ", /*#__PURE__*/React.createElement("p", { className: tagClass, style: { lineHeight: 'normal' } }, "\n                +", displayValue.length - truncateAfterNumItems, "\n              "), "\n            ")), "\n          ", /*#__PURE__*/React.createElement("input", { ref: inputRef, className: clsx('inline-flex', 'bg-transparent', 'font-normal', 'w-auto', 'p-0', 'ml-1.5 mr-auto', '!outline-none', '!border-none', '!text-secondary', !isOpen && 'cursor-pointer'), type: 'text', placeholder: placeholder, value: inputValueToDisplay, onChange: e => setInputValue(e.target.value), onFocus: () => {
            setInputValue('');
            setIsOpen(true);
        } }), "\n        "), "\n      "), "\n      ", isOpen && (/*#__PURE__*/React.createElement("div", { className: 'w-full flex flex-col space-y-1 items-start text-left p-1 lg:p-2 rounded bg-window border-2 border-window shadow-md dark:shadow-none z-50 absolute top-[100%] left-0 max-h-40 overflow-auto' }, "\n          ", optionsToShow.map((option, index) => (/*#__PURE__*/React.createElement("div", { key: labelProp ? option[labelProp] : option, onClick: e => {
                    e.stopPropagation();
                    e.preventDefault();
                    isSelected(option) ? removeSelectedItem(option) : addSelectedItem(option);
                    //setIsOpen(false)
                }, className: clsx('p-2 m-0', 'text-start font-medium', 'text-xs xl:text-sm', '!outline-none', `w-full select-none cursor-pointer text-center`, `bg-window rounded`, `hover:bg-grey-light-scale-100 hover:dark:bg-grey-dark-scale-600`, isSelected(option) && `!bg-grey-light-scale-300 dark:!bg-grey-dark-scale-500`) }, "\n              ", /*#__PURE__*/React.createElement(elements_typography_index.PTiny, { className: clsx('text-primary text-left', isSelected(option) && `!text-black dark:!text-white`) }, "\n                ", labelProp ? option[labelProp] : option, "\n              "), "\n            "))), "\n        ")), "\n    "));
};
function XIcon({ className }) {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', className: clsx('w-[14px] h-[14px]', className), viewBox: '0 0 20 20' }, "\n      ", /*#__PURE__*/React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' }), "\n    "));
}

module.exports = SelectMulti;
