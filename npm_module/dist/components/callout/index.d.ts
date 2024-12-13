import React from 'react';
declare const Callout: ({ variant, title, text, omitIcon, customIcon, children, customBgClass, ...props }: {
    variant?: string;
    title?: string;
    text?: string | React.ReactNode;
    omitIcon?: boolean;
    customIcon?: React.ReactNode;
    children?: React.ReactNode;
    customBgClass?: string;
}) => React.JSX.Element;
export default Callout;
