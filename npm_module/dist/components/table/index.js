'use strict';

var React = require('react');
var clsx = require('clsx');
var elements_typography_index = require('../../elements/typography/index.js');
var elements_buttons_index = require('../../elements/buttons/index.js');
var assets_svgs_arrows_index = require('../../assets/svgs/arrows/index.js');
require('../../tslib.es6-VGxyZ2Ib.js');
require('tailwind-merge');

const getColumnAlign = (alignType) => {
    switch (alignType) {
        case 'center':
            return 'center';
        case 'right':
            return 'end';
        default:
            return 'start';
    }
};
const columnVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
};
const renderElement = (item, column, rowIndex, elementIndex) => {
    return (/*#__PURE__*/React.createElement("div", { key: `row-${rowIndex}-element-${elementIndex}`, className: 'flex items-center', style: {
            justifyContent: getColumnAlign(column.align),
        } }, "\n      ", column.render ? (column.render(item)) : (/*#__PURE__*/React.createElement(elements_typography_index.PTiny, { className: clsx('whitespace-nowrap text-ellipsis overflow-hidden', column.addClass) }, "\n          ", item[column.propName], "\n        ")), "\n    "));
};
const runSort = (array, column, sortDirection) => {
    const compare = column.sortFunction
        ? column.sortFunction
        : (a, b) => {
            if (a[column.propName] < b[column.propName]) {
                return -1;
            }
            if (a[column.propName] > b[column.propName]) {
                return 1;
            }
            return 0;
        };
    sortDirection === 1 ? array.sort(compare) : array.sort(compare).reverse();
    return array;
};
function Table({ columns, data, pagination = true, rowsPerPage = 10, page = 1, router = null, rowClick = null, density = 'high', // 'low', 'medium', 'high'
rowSpacing = 'low', // 'none', 'low', 'medium', 'high'
customRowClass, customHeaderClass, }) {
    const [sortByColumn, setSortByColumn] = React.useState(null);
    const [sortDirection, setSortDirection] = React.useState(1);
    const headerClass = clsx('grid gap-2', columnVariants[columns.length], 'mb-1', 'px-4 py-1.5');
    const rowClass = clsx('grid gap-4 rounded-[3px]', columnVariants[columns.length], 'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900 border border-grey-light-scale-300 dark:border-grey-dark-scale-700 dark:shadow-none', 'px-4', density === 'high' && 'py-2', density === 'medium' && 'py-3', density === 'low' && 'py-4', rowClick && 'cursor-pointer hover:border-grey-light-scale-500 dark:hover:border-grey-dark-scale-100', rowSpacing === 'none' && '!border-b-0 last:!border-b', customRowClass);
    const rowsContainerClass = clsx('flex flex-col mb-4', rowSpacing === 'low' && 'gap-y-1', rowSpacing === 'medium' && 'gap-y-2', rowSpacing === 'high' && 'gap-y-3', rowSpacing === 'none' && 'gap-y-0');
    const numPages = Math.ceil(data.length / rowsPerPage);
    if (pagination && !router) {
        throw new Error('TPDS: Table component requires router prop when pagination is enabled, to "push" new page to router.');
    }
    const handleBackToFirstPage = () => {
        router.push(window.location.pathname);
    };
    const handleGoToLastPage = () => {
        router.push(`${window.location.pathname}?page=${numPages}`);
    };
    const handleClickToNextPage = () => {
        router.push(`${window.location.pathname}?page=${page + 1}`);
    };
    const handleClickToPreviousPage = () => {
        router.push(`${window.location.pathname}?page=${page - 1}`);
    };
    if (sortByColumn) {
        data = runSort(data, sortByColumn, sortDirection);
    }
    let showPagination = pagination && data.length > rowsPerPage;
    if (showPagination) {
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        data = data.slice(startIndex, endIndex);
    }
    return (/*#__PURE__*/React.createElement("div", null, "\n      ", /*#__PURE__*/React.createElement("div", { className: headerClass }, "\n        ", columns.map((column, columnIndex) => (/*#__PURE__*/React.createElement(elements_typography_index.PTiny, { isMedium: true, key: `column-${columnIndex}`, className: clsx('select-none whitespace-nowrap text-ellipsis overflow-hidden flex gap-x-2 items-center', column.enableSort && 'cursor-pointer', customHeaderClass), style: {
                textAlign: getColumnAlign(column.align),
            }, onClick: column.enableSort
                ? () => {
                    if (!sortByColumn) {
                        setSortDirection(1);
                        setSortByColumn(column);
                    }
                    else {
                        if (sortByColumn.propName === column.propName && sortDirection === 1) {
                            setSortDirection(-1);
                        }
                        else if (sortByColumn.propName === column.propName && sortDirection === -1) {
                            setSortDirection(1);
                            setSortByColumn(null);
                        }
                        else {
                            setSortDirection(1);
                            setSortByColumn(column);
                        }
                    }
                }
                : undefined }, "\n            ", column.label, ' ', "\n            ", sortByColumn && sortByColumn.propName === column.propName && (/*#__PURE__*/React.createElement(assets_svgs_arrows_index.TriangleDown, { className: 'inline-block ml-1', style: { transform: sortDirection === 1 ? '' : 'rotate(180deg)' } })), "\n          "))), "\n      "), "\n      ", /*#__PURE__*/React.createElement("div", { className: rowsContainerClass }, "\n        ", data.map((item, rowIndex) => (/*#__PURE__*/React.createElement("div", { key: `row-${rowIndex}`, className: rowClass, onClick: rowClick ? () => rowClick(item) : undefined }, "\n            ", columns.map((column, elementIndex) => {
                return renderElement(item, column, rowIndex, elementIndex);
            }), "\n          "))), "\n      "), "\n      ", showPagination && (/*#__PURE__*/React.createElement("div", { className: 'flex justify-end gap-1' }, "\n          ", /*#__PURE__*/React.createElement(elements_buttons_index.Button, { className: '!p-2 min-w-0 text-primary', variant: 'secondary', isDisabled: page === 1, isSmall: true, onClick: handleBackToFirstPage }, "\n            ", /*#__PURE__*/React.createElement(BeginningIcon, null), "\n          "), "\n          ", /*#__PURE__*/React.createElement(elements_buttons_index.Button, { className: '!p-2 min-w-0 text-primary', variant: 'secondary', isDisabled: page === 1, isSmall: true, onClick: handleClickToPreviousPage }, "\n            ", /*#__PURE__*/React.createElement(FirstIcon, null), "\n          "), "\n\n          ", /*#__PURE__*/React.createElement(elements_buttons_index.Button, { className: '!p-2 min-w-0 pointer-events-none', variant: 'secondary', isDisabled: page === numPages, isSmall: true, onClick: handleClickToNextPage }, "\n            ", page, " ", /*#__PURE__*/React.createElement("span", { className: 'opacity-50' }, "/ ", numPages), "\n          "), "\n          ", /*#__PURE__*/React.createElement(elements_buttons_index.Button, { className: '!p-2 min-w-0 text-primary', variant: 'secondary', isDisabled: page === numPages, isSmall: true, onClick: handleClickToNextPage }, "\n            ", /*#__PURE__*/React.createElement(NextIcon, null), "\n          "), "\n          ", /*#__PURE__*/React.createElement(elements_buttons_index.Button, { className: '!p-2 min-w-0 text-primary', variant: 'secondary', isDisabled: page === numPages, isSmall: true, onClick: handleGoToLastPage }, "\n            ", /*#__PURE__*/React.createElement(LastIcon, null), "\n          "), "\n        ")), "\n    "));
}
function BeginningIcon() {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'none', viewBox: '0 0 20 20' }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M11.725 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L11.3 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L8.35 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H8.35l3.875 3.9c.125.1.125.3 0 .425l-.5.475zM4.9 4.8c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.8z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#fff', fillOpacity: '0.01', d: 'M0 0H20V20H0z' }), "\n    "));
}
function FirstIcon() {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'none', viewBox: '0 0 20 20' }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M10.125 15.45c-.1.125-.3.125-.425 0l-5.225-5.225a.288.288 0 010-.425L9.7 4.575c.125-.125.325-.125.425 0l.5.475c.125.125.125.325 0 .425L6.75 9.35h8.55c.15 0 .3.15.3.3v.7c0 .175-.15.3-.3.3H6.75l3.875 3.9c.125.1.125.3 0 .425l-.5.475z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#fff', fillOpacity: '0.01', d: 'M0 0H20V20H0z' }), "\n    "));
}
function NextIcon() {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '19', height: '20', fill: 'none', viewBox: '0 0 19 20' }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M9.275 4.575c.1-.125.3-.125.425 0L14.925 9.8c.125.125.125.3 0 .425L9.7 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H4.1c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#fff', fillOpacity: '0.01', d: 'M0 0H19V20H0z' }), "\n    "));
}
function LastIcon() {
    return (/*#__PURE__*/React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'none', viewBox: '0 0 20 20' }, "\n      ", /*#__PURE__*/React.createElement("path", { fill: 'currentColor', d: 'M8.075 4.575c.1-.125.3-.125.425 0L13.725 9.8c.125.125.125.3 0 .425L8.5 15.45c-.125.125-.325.125-.425 0l-.5-.475c-.125-.125-.125-.325 0-.425l3.875-3.875H2.9c-.15 0-.3-.15-.3-.3v-.7c0-.175.15-.3.3-.3h8.55l-3.875-3.9c-.125-.1-.125-.3 0-.425l.5-.475zM14.9 15.225c0 .15.125.3.3.3h.7c.15 0 .3-.15.3-.3V4.797c0-.15-.125-.3-.3-.3h-.7c-.15 0-.3.15-.3.3v10.428z' }), "\n      ", /*#__PURE__*/React.createElement("path", { fill: '#fff', fillOpacity: '0.01', d: 'M0 0H20V20H0z' }), "\n    "));
}

module.exports = Table;
