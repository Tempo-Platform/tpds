'use strict';

var React = require('react');
var clsx = require('clsx');

const getClassNamesForBreakpoint = (breakpoint) => {
    switch (breakpoint) {
        case 'sm':
            return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
        case 'md':
            return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
        case 'lg':
            return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
        case 'xl':
            return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
        case '2xl':
            return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
        default:
            return 'flex-col gap-y-[2px] h-auto sm:flex-row sm:gap-x-[2px] sm:h-[36px]';
    }
};
const RadioTabs = ({ items, selectedIndex, handleIndexSelection, className, style, stackAtBreakpoint, }) => {
    const containerStyles = clsx('flex gap-x-[2px] rounded-[4px] p-[2px] h-[36px]', 'bg-transparent border-2 !border-[#ededed] dark:!border-[#384147]', 
    // using template strings isn't working so we're using a dumb function
    stackAtBreakpoint && getClassNamesForBreakpoint(stackAtBreakpoint));
    const itemDivStyles = clsx('flex-1 overflow-hidden cursor-pointer', '!px-[7px] py-[4px]', 'flex justify-center', 'select-none !outline-none rounded-[3px]');
    const itemLabelStyles = clsx('font-semibold', 'text-[13px]', '!outline-none', 'overflow-hidden whitespace-nowrap text-ellipsis', '!m-0 self-center', 'relative top-0');
    return (/*#__PURE__*/React.createElement("div", { className: clsx('w-full', className), style: style }, "\n      ", /*#__PURE__*/React.createElement("div", { className: containerStyles }, "\n        ", items.map((item, index) => (/*#__PURE__*/React.createElement("div", { className: clsx(itemDivStyles, index === selectedIndex && 'bg-grey-light-scale-300 dark:bg-grey-dark-scale-300'), key: item.value || item.description || item.label || item, onClick: () => handleIndexSelection(index) }, "\n            ", /*#__PURE__*/React.createElement("p", { className: clsx(itemLabelStyles, index === selectedIndex
                ? 'text-grey-dark-scale-200 dark:text-grey-light-scale-300'
                : 'text-grey-light-scale-600 dark:text-grey-light-scale-900') }, "\n              ", item.value || item.description || item.label || item, "\n            "), "\n          "))), "\n      "), "\n    "));
};

module.exports = RadioTabs;
