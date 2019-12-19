import * as React from "react";

import {
    IControlContainerProps as Props,
    IControlContainerInjectedProps as InjectedProps
} from "./ControlContainerProps";
import { IControlContainerState as State } from "./ControlContainerState";

class ControlContainer extends React.Component<Props, State> {

    public state: State = {
        isFocused: false
    };

    public get showLabelAsPlaceholder() {
        return this.state.isFocused || this.props.value ? "active" : "";
    }

    public render(): React.ReactNode {
        return (
            <div className="control-container">
                {this.props.children(this.injectedProps)}
            </div>
        );
    }

    protected get injectedProps(): InjectedProps {
        return {
            showLabelAsPlaceholder: this.showLabelAsPlaceholder,
            handleFocus: this.handleFocus,
            handleBlur: this.handleBlur
        }
    }

    protected handleFocus = (event: React.FocusEvent): void => {
        this.setState({
            isFocused: true
        });
    }

    protected handleBlur = (event: React.FocusEvent): void => {
        this.setState({
            isFocused: false
        });
    }
}

export default ControlContainer;
