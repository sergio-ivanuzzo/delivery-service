import * as React from "react";

import {
    ICalculateDeliveryCostFormProps as Props
} from "./CalculateDeliveryCostFormProps";
import {
    ICalculateDeliveryCostFormState as State
} from "./CalculateDeliveryCostFormState";

import { maybe } from "../../../../helpers";
import {
    IControlContainerInjectedProps
} from "../ControlContainer/ControlContainerProps";
import ControlContainer from "../ControlContainer/ControlContainer";

const initialState: State = {
    route: ""
};

class CalculateDeliveryCostForm extends React.Component<Props, State> {
    public state: State = initialState;

    public render(): React.ReactNode {
        const { routesBetweenTowns } = this.props;
        if (!maybe(routesBetweenTowns, "length")) {
            return null;
        }

        return (
            <div className={"form-container"}>
                <div className="text-center form-header">
                    Here you can calculate cost of delivery route
                </div>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete={"off"}
                    className={"flex-container"}
                >
                    <ControlContainer value={this.state.route}>
                        {(injectedProps: IControlContainerInjectedProps) => (
                            <>
                                <label
                                    className={`form-label ${injectedProps.showLabelAsPlaceholder}`}
                                    htmlFor="route"
                                >
                                    Route
                                </label>
                                <input
                                    id={"route"}
                                    type="text"
                                    className={"form-control"}
                                    onChange={this.handleInputChange("route")}
                                    value={this.state.route}
                                    onFocus={injectedProps.handleFocus}
                                    onBlur={injectedProps.handleBlur}
                                />
                                <div className="text-help">
                                    Type only points, for example: ABC
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
                                Calculate
                            </button>
                        )}
                    </ControlContainer>
                </form>
            </div>
        );
    }

    protected get isDisabled() {
        return !this.state.route;
    }

    protected handleInputChange = (
        fieldName: string
    ): (event: React.ChangeEvent) => void => (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = event.currentTarget.value;
        this.setState({
            ...this.state,
            [fieldName]: value
        });
    };

    protected handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const { route } = this.state;
        this.props.calculateDeliveryRouteCost(route.split(""));
        this.setState({
            ...initialState
        });
    };
}

export default CalculateDeliveryCostForm;
