import React from 'react';
declare const Callout: ({ variant, title, text, omitIcon, customIcon, children, ...props }: {
    variant?: string;
    title?: string;
    text?: string | React.ReactNode;
    omitIcon?: boolean;
    customIcon?: React.ReactNode;
    children?: React.ReactNode;
}) => React.JSX.Element;
export default Callout;
