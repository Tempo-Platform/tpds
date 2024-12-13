'use strict';

var React = require('react');
var elements_typography_index = require('../../elements/typography/index.js');
var assets_svgs_icons_index = require('../../assets/svgs/icons/index.js');
var clsx = require('clsx');
require('tailwind-merge');
require('../../tslib.es6-VGxyZ2Ib.js');

const RadioGroup = ({ options, handleIndexSelection, selectedIndex, lightOnly, }) => {
    return (/*#__PURE__*/React.createElement("div", { className: 'flex flex-col gap-y-1 w-full' }, "\n      ", options.map((option, index) => {
            const isActive = selectedIndex === index;
            return (/*#__PURE__*/React.createElement("div", { key: index, className: clsx(`flex w-full items-center justify-between cursor-pointer`, `py-2.5 px-4 rounded-lg overflow-hidden`, `border-2 border-[#E9EBEC] dark:border-[#323639]`, `transition-all duration-300`, isActive ? `bg-grey-light-scale-200 dark:bg-grey-dark-scale-300` : `bg-[#ffffff] dark:bg-[#1E2224]`, lightOnly && '!border-[#E9EBEC] !bg-[#ffffff]', isActive && lightOnly && '!bg-grey-light-scale-200'), onClick: handleIndexSelection ? () => handleIndexSelection(index) : undefined }, "\n            ", /*#__PURE__*/React.createElement("div", { className: 'flex flex-col gap-y-2 w-[calc(100%-40px)]!' }, "\n              ", /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { isMedium: true, className: clsx('capitalize leading-none', lightOnly && '!text-[#151819]') }, "\n                ", option.title, "\n              "), "\n              ", /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { className: clsx('text-secondary leading-tight', lightOnly && '!text-[#788187]') }, "\n                ", option.description, "\n              "), "\n            "), "\n            ", /*#__PURE__*/React.createElement("div", { className: clsx(`!w-[26px] !h-[26px] rounded-[50%] border-2 flex justify-center items-center`, `transition-all duration-300`, !lightOnly && `bg-transparent border-grey-light-scale-300 dark:border-grey-dark-scale-300`, lightOnly && `bg-transparent border-grey-light-scale-300`, isActive && '!border-transparent', isActive && lightOnly && '!bg-black', isActive && !lightOnly && '!bg-black dark:!bg-white') }, "\n              ", isActive && (/*#__PURE__*/React.createElement(assets_svgs_icons_index.CheckIcon, { className: clsx(lightOnly ? 'text-white relative top-0' : 'text-white relative top-0 dark:text-black') })), "\n            "), "\n          "));
        }), "\n    "));
};

module.exports = RadioGroup;
