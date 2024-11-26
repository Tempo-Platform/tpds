import React from 'react';
type IconProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
};
export declare function DangerIcon({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function DefaultIcon({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function InfoIcon({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function SuccessIcon({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function WarningIcon({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export {};
