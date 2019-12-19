import * as React from "react";

import { IAddRouteFormProps } from "./AddRouteFormProps";
import { IAddRouteFormState } from "./AddRouteFormState";
import ControlContainer from "../ControlContainer/ControlContainer";
import {
    IControlContainerInjectedProps
} from "../ControlContainer/ControlContainerProps";

const initialState: IAddRouteFormState = {
    vertex: "",
    node: "",
    cost: undefined
};

class AddRouteForm extends React.Component<IAddRouteFormProps, IAddRouteFormState> {
    public state: IAddRouteFormState = initialState;

    public render(): React.ReactNode {
        return (
            <div className={"form-container"}>
                <div className="text-center form-header">
                    Please add route between two towns
                </div>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete={"off"}
                    className={"flex-container"}
                >
                    <ControlContainer value={this.state.vertex}>
                        {(injectedProps: IControlContainerInjectedProps) => (
                            <>
                                <label
                                    className={`form-label ${injectedProps.showLabelAsPlaceholder}`}
                                    htmlFor="vertex"
                                >
                                    Start Point
                                </label>
                                <input
                                    id={"vertex"}
                                    type="text"
                                    onChange={this.handleInputChange("vertex")}
                                    value={this.state.vertex}
                                    className={"form-control"}
                                    onFocus={injectedProps.handleFocus}
                                    onBlur={injectedProps.handleBlur}
                                />
                            </>
                        )}
                    </ControlContainer>

                    <ControlContainer value={this.state.node}>
                        {(injectedProps: IControlContainerInjectedProps) => (
                            <>
                                <label
                                    className={`form-label ${injectedProps.showLabelAsPlaceholder}`}
                                    htmlFor="node"
                                >
                                    End Point
                                </label>
                                <input
                                    id={"node"}
                                    type="text"
                                    onChange={this.handleInputChange("node")}
                                    value={this.state.node}
                                    className={"form-control"}
                                    onFocus={injectedProps.handleFocus}
                                    onBlur={injectedProps.handleBlur}
                                />
                            </>
                        )}
                    </ControlContainer>

                    <ControlContainer value={this.state.cost}>
                        {(injectedProps: IControlContainerInjectedProps) => (
                            <>
                                <label
                                    className={`form-label ${injectedProps.showLabelAsPlaceholder}`}
                                    htmlFor="cost"
                                >
                                    Cost
                                </label>
                                <input
                                    id={"cost"}
                                    type="number"
                                    onChange={this.handleInputChange("cost")}
                                    value={this.state.cost || ""}
                                    className={"form-control"}
                                    onFocus={injectedProps.handleFocus}
                                    onBlur={injectedProps.handleBlur}
                                />
                                <div className="text-help">
                                    Cost of route between two towns
                                </div>
                            </>
                        )}
                    </ControlContainer>

                    <ControlContainer>
                        {() => (
                            <button
                                type="submit"
                                className={"primary"}
                                disabled={this.isDisabled}
                            >
                                Add
                            </button>
                        )}
                    </ControlContainer>
                </form>
            </div>
        );
    }

    protected get isDisabled() {
        const { vertex, node, cost } = this.state;

        if (!vertex || !node) {
            return true;
        }

        return cost < 0;
    }

    protected handleInputChange = (
        fieldName: string,
    ): (event: React.ChangeEvent) => void => (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const value = event.currentTarget.value;
        this.setState({
            ...this.state,
            [fieldName]: value,
        });
    }

    protected handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const { vertex, node, cost } = this.state;
        this.props.addRoute(vertex, node, cost);
        this.setState({
            ...initialState
        });
    }
}

export default AddRouteForm;
