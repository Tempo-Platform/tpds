import React from 'react';
declare const Modal: ({ showOpen, clickElement, title, maxWidth, description, content, options, overlayProps, titleProps, descriptionProps, dialogOnClose, }: {
    title?: string;
    showOpen?: boolean;
    clickElement?: React.ReactNode;
    maxWidth?: string;
    description?: string;
    content?: React.ReactNode;
    options?: any[];
    overlayProps?: any;
    titleProps?: any;
    descriptionProps?: any;
    dialogOnClose?: () => void;
}) => React.JSX.Element;
export default Modal;
