import * as React from "react";

import {
    ICalculatedCostProps
} from "./CalculatedCostProps";

class CalculatedCost extends React.Component<ICalculatedCostProps> {
    public render(): React.ReactNode {
        if (this.props.route) {
            return (
                <div className={"data-container"}>
                    <div className="title text-bold">
                        Cost of delivery route
                    </div>
                    {this.renderOutput()}
                </div>
            );
        } else {
            return null;
        }
    }

    protected renderOutput = (): React.ReactNode => {
        let label = `The delivery cost for route ${this.props.route.join("-")}: `;
        if (this.props.noRoute) {
            label = `There are no route for ${this.props.route.join("-")}`;

            return (
                <div>
                    <span className="text-bold text-red">
                        {label}
                    </span>
                </div>
            );
        }
        const cost = this.props.cost;

        return (
            <div>
                <span className={"text-bold"}>
                    {label}
                </span>
                <span className={"text-bold text-green"}>
                    {cost}
                </span>
            </div>
        );
    }
}

export default CalculatedCost;
