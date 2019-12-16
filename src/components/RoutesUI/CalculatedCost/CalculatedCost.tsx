import * as React from "react";

import {
    ICalculatedCostProps
} from "./CalculatedCostProps";

class CalculatedCost extends React.Component<ICalculatedCostProps> {
    public render(): React.ReactNode {
        if (this.props.route && this.props.cost) {
            return (
                <div>
                    {this.renderOutput()}
                </div>
            );
        } else {
            return null;
        }
    }

    protected renderOutput = (): React.ReactNode => {
        const label = `The delivery cost for route ${this.props.route}`;
        const cost = this.props.cost;
        return (
            <div>
                <span>
                    {label}
                </span>
                <span>
                    {cost}
                </span>
            </div>
        );
    }
}

export default CalculatedCost;
