export interface IControlContainerProps {
    value?: any;
    children: (injectedProps: IControlContainerInjectedProps) => React.ReactNode;
}

export interface IControlContainerInjectedProps {
    showLabelAsPlaceholder: string;
    handleFocus: (event: React.FocusEvent) => void;
    handleBlur: (event: React.FocusEvent) => void;
}
