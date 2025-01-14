import React from 'react';
declare function ExpandableSection({ title, children, shouldClose, excludeElementId, removeBorderTop, addBorderBottomIfOpen, lightOnly, }: {
    title: string;
    children: React.ReactNode;
    shouldClose?: boolean;
    excludeElementId?: string;
    removeBorderTop?: boolean;
    addBorderBottomIfOpen?: boolean;
    lightOnly?: boolean;
}): React.JSX.Element;
export default ExpandableSection;
