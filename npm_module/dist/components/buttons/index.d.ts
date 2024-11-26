import React from 'react';
export declare const Button: ({ label, iconBefore, iconAfter, variant, loading, className, onClick, ...props }: {
    label: string;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    variant: string;
    loading?: boolean;
    className?: string;
    onClick?: () => void;
}) => React.JSX.Element;
export declare function ExternalLinkIcon({ ...props }: {
    [x: string]: any;
}): React.JSX.Element;
export declare function ExternalLinkButton({ label, variant, ...props }: {
    label: string;
    variant?: string;
}): React.JSX.Element;
