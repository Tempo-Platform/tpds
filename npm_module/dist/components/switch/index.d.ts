import React from 'react';
export type SwitchProps = {
    active?: boolean;
    onClick?: () => void;
    variant?: 'info' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
};
declare function Switch({ active, onClick, variant, disabled }: SwitchProps): React.JSX.Element;
export default Switch;
