import React from 'react';
type IconProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent) => void;
};
export declare function BugIcon({ className, style, onClick }: IconProps): React.JSX.Element;
export declare function CheckIcon({ className, style, onClick }: IconProps): React.JSX.Element;
export declare function ErrorIcon({ className, style, onClick }: IconProps): React.JSX.Element;
export declare function InfoIcon({ className, style, onClick }: IconProps): React.JSX.Element;
export declare function NoteIcon({ className, style, onClick }: IconProps): React.JSX.Element;
export declare function TipIcon({ className, style, onClick }: IconProps): React.JSX.Element;
export declare function WarningIcon({ className, style, onClick }: IconProps): React.JSX.Element;
export {};
