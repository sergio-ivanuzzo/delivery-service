import * as React from "react";

import {
    IPossibleRoutesFormProps,
} from "./PossibleRoutesFormProps";
import {
    IPossibleRoutesFormState,
} from "./PossibleRoutesFormState";

class PossibleRoutesForm extends React.Component<IPossibleRoutesFormProps, IPossibleRoutesFormState> {
    public state: IPossibleRoutesFormState = {
        startPoint: "",
        destination: "",
        maxStopCount: 0
    };

    public render(): React.ReactNode {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete={"off"}
                    className={"flex-container"}
                >
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInputChange("startPoint")}
                            value={this.state.startPoint}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={this.handleInputChange("destination")}
                            value={this.state.destination}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            onChange={this.handleInputChange("maxStopCount")}
                            value={this.state.maxStopCount}
                        />
                    </div>
                    <div>
                        <button type="submit" className={"primary"}>
                            Calculate
                        </button>
                    </div>
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
            startPoint: "",
            destination: "",
            maxStopCount: 0
        })
    };
}

export default PossibleRoutesForm;
