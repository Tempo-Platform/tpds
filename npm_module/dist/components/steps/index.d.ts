import React from 'react';
declare function StepsComponent({ steps, currentStepIndex, style, ...props }: {
    steps: {
        title: string;
    }[];
    currentStepIndex?: number;
    style?: React.CSSProperties;
}): React.JSX.Element;
export default StepsComponent;
