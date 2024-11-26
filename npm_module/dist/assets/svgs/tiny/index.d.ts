import React from 'react';
type IconProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    active?: boolean;
};
export declare function Copy({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function Cross({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function DummyIcon({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function Play({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function PowerSwitch({ active, className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function Reboot({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export declare function Stop({ className, style, onClick, ...props }: IconProps): React.JSX.Element;
export {};
