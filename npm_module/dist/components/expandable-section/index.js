'use strict';

var React = require('react');
var elements_typography_index = require('../../elements/typography/index.js');
var assets_svgs_icons_index = require('../../assets/svgs/icons/index.js');
var clsx = require('clsx');
require('../../tslib.es6-VGxyZ2Ib.js');

const elementIsVisibleInViewport = (el, excludeElementId) => {
    const rect = el.getBoundingClientRect();
    let discountHeight = 0;
    if (excludeElementId) {
        const elementHeightDiscount = document.getElementById(excludeElementId);
        if (!elementHeightDiscount || !elementHeightDiscount.clientHeight) {
            console.error(`excludeElementId ${excludeElementId} not found`);
        }
        else {
            discountHeight = elementHeightDiscount.clientHeight;
        }
    }
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight - discountHeight &&
        rect.right <= window.innerWidth);
};
const handleToggleHeader = (isOpen, toggleOpen, headerRef, excludeElementId) => {
    const applyScrollIntoView = !isOpen;
    toggleOpen(!isOpen);
    if (applyScrollIntoView && headerRef.current) {
        setTimeout(() => {
            // @ts-ignore
            if (!elementIsVisibleInViewport(headerRef.current, excludeElementId)) {
                // @ts-ignore
                headerRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }, 300);
    }
};
function ExpandableSection({ title, children, shouldClose, excludeElementId, removeBorderTop, addBorderBottomIfOpen, }) {
    const headerRef = React.useRef(null);
    const [isOpen, toggleOpen] = React.useState(false);
    if (children && typeof children === 'string') {
        children = /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { style: { lineHeight: '1.5 !important' } }, children);
    }
    if (shouldClose && isOpen) {
        toggleOpen(false);
    }
    const rootClassName = clsx(isOpen && addBorderBottomIfOpen ? `border-b border-black/10 dark:border-white/10` : '');
    const headerClassName = clsx(`h-[44px] border-t border-b border-black/10 dark:border-white/10 w-full flex justify-between items-center px-[16px] transition-all cursor-pointer`, removeBorderTop && `!border-t-0`);
    const contentClassName = clsx(`grid px-[15px]`, isOpen ? `grid-rows-[1fr]` : `grid-rows-[0fr]`);
    const innerDivClassName = clsx('tpds-expandable-section-content', `overflow-hidden py-[0]`);
    return (/*#__PURE__*/React.createElement(React.Fragment, null, "\n      ", /*#__PURE__*/React.createElement("div", { className: rootClassName, ref: headerRef }, "\n        ", /*#__PURE__*/React.createElement("div", { className: headerClassName, onClick: () => handleToggleHeader(isOpen, toggleOpen, headerRef, excludeElementId) }, "\n          ", /*#__PURE__*/React.createElement(elements_typography_index.PSmall, { isMedium: true }, title), "\n          ", isOpen ? /*#__PURE__*/React.createElement(assets_svgs_icons_index.MinusIcon, { className: 'text-primary' }) : /*#__PURE__*/React.createElement(assets_svgs_icons_index.PlusIcon, { className: 'text-primary' }), "\n        "), "\n        ", /*#__PURE__*/React.createElement("div", { className: contentClassName, style: { transition: 'grid-template-rows 300ms' } }, "\n          ", /*#__PURE__*/React.createElement("div", { className: innerDivClassName }, children), "\n        "), "\n      "), "\n    "));
}

module.exports = ExpandableSection;
