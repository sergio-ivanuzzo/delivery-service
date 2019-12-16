import * as React from "react";

import {
    ICalculateDeliveryCostFormProps as Props
} from "./CalculateDeliveryCostFormProps";
import {
    ICalculateDeliveryCostFormState as State
} from "./CalculateDeliveryCostFormState";

class CalculateDeliveryCostForm extends React.Component<Props, State> {
    public state: State = {
        route: ""
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
                            onChange={this.handleInputChange("route")}
                            value={this.state.route}
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
        const { route } = this.state;
        this.props.calculateDeliveryRouteCost(route.split(""));
        this.setState({
            route: ""
        });
    };
}

export default CalculateDeliveryCostForm;
