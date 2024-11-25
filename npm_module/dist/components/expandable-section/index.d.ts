import React from 'react';
declare function ExpandableSection({ title, children, shouldClose, excludeElementId, removeBorderTop, addBorderBottomIfOpen, }: {
    title: string;
    children: React.ReactNode;
    shouldClose?: boolean;
    excludeElementId?: string;
    removeBorderTop?: boolean;
    addBorderBottomIfOpen?: boolean;
}): React.JSX.Element;
export default ExpandableSection;
