import * as React from "react";

import {
    IPossibleRoutesFormProps,
} from "./PossibleRoutesFormProps";
import {
    IPossibleRoutesFormState,
} from "./PossibleRoutesFormState";

import { maybe } from "../../../../helpers";
import {IControlContainerInjectedProps} from "../ControlContainer/ControlContainerProps";
import ControlContainer from "../ControlContainer/ControlContainer";

const initialState: IPossibleRoutesFormState = {
    startPoint: "",
    destination: "",
    maxStopCount: undefined
};

class PossibleRoutesForm extends React.Component<IPossibleRoutesFormProps, IPossibleRoutesFormState> {
    public state: IPossibleRoutesFormState = initialState;

    public render(): React.ReactNode {
        const { routesBetweenTowns } = this.props;
        if (!maybe(routesBetweenTowns, "length")) {
            return null;
        }

        return (
            <div className={"form-container"}>
                <div className="text-center form-header">
                    Possible routes from start point to end point
                </div>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete={"off"}
                    className={"flex-container"}
                >
                    <ControlContainer value={this.state.startPoint}>
                        {(injectedProps: IControlContainerInjectedProps) => (
                            <>
                                <label
                                    className={`form-label ${injectedProps.showLabelAsPlaceholder}`}
                                    htmlFor="startPoint"
                                >
                                    Start Point
                                </label>
                                <input
                                    id={"startPoint"}
                                    type="text"
                                    className={"form-control"}
                                    onChange={this.handleInputChange("startPoint")}
                                    value={this.state.startPoint}
                                    onFocus={injectedProps.handleFocus}
                                    onBlur={injectedProps.handleBlur}
                                />
                            </>
                        )}
                    </ControlContainer>
                    <ControlContainer value={this.state.destination}>
                        {(injectedProps: IControlContainerInjectedProps) => (
                            <>
                                <label
                                    className={`form-label ${injectedProps.showLabelAsPlaceholder}`}
                                    htmlFor="destination"
                                >
                                    Destination
                                </label>
                                <input
                                    id={"destination"}
                                    type="text"
                                    className={"form-control"}
                                    onChange={this.handleInputChange("destination")}
                                    value={this.state.destination}
                                    onFocus={injectedProps.handleFocus}
                                    onBlur={injectedProps.handleBlur}
                                />
                            </>
                        )}
                    </ControlContainer>
                    <ControlContainer value={this.state.maxStopCount}>
                        {(injectedProps: IControlContainerInjectedProps) => (
                            <>
                                <label
                                    className={`form-label ${injectedProps.showLabelAsPlaceholder}`}
                                    htmlFor="maxStopCount"
                                >
                                    Max Stop Count
                                </label>
                                <input
                                    id={"maxStopCount"}
                                    type="number"
                                    className={"form-control"}
                                    onChange={this.handleInputChange("maxStopCount")}
                                    value={this.state.maxStopCount || ""}
                                    onFocus={injectedProps.handleFocus}
                                    onBlur={injectedProps.handleBlur}
                                />
                                <div className="text-help">
                                    Optional
                                </div>
                            </>
                        )}
                    </ControlContainer>
                    <ControlContainer>
                        {() => (
                            <button type="submit" className={"primary"}>
                                Calculate
                            </button>
                        )}
                    </ControlContainer>
                </form>
            </div>
        );
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
        const { startPoint, destination, maxStopCount } = this.state;
        this.props.calculatePossibleDeliveryRoutes(
            startPoint,
            destination,
            maxStopCount
        );
        this.setState({
            ...initialState
        })
    };
}

export default PossibleRoutesForm;
