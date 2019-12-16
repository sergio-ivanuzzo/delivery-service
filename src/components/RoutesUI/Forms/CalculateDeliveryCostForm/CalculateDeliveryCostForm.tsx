import * as React from "react";

import {
    ICalculateDeliveryCostFormProps
} from "./CalculateDeliveryCostFormProps";
import {
    ICalculateDeliveryCostFormState
} from "./CalculateDeliveryCostFormState";

class CalculateDeliveryCostForm extends
    React.Component<ICalculateDeliveryCostFormProps, ICalculateDeliveryCostFormState> {
    public render(): React.ReactNode {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete={"off"}
                    className={"flex-container"}
                >
                    <div></div>
                </form>
            </div>
        );
    }

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

export default CalculateDeliveryCostForm;
