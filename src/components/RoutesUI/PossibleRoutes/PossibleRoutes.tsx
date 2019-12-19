import * as React from "react";

import { IPossibleRoutesProps } from "./PossibleRoutesProps";
import { uniqkey } from "../../../helpers";

class PossibleRoutes extends React.Component<IPossibleRoutesProps> {
    public render(): React.ReactNode {
        if (this.props.routes) {
            return (
                <div className={"data-container"}>
                    <div className="title text-bold">
                        {this.title}
                    </div>
                    <div>
                        {this.renderRoutes()}
                    </div>
                    <div className={"total"}>
                        Total: {this.props.routes.length}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    protected get title() {
        let { routes } = this.props;
        routes = routes[0].split("-");
        const start = routes[0];
        const dest = routes[routes.length - 1];

        return `Possible Routes from ${start} to ${dest} (${this.maxStopCountHint})`;
    }

    protected get maxStopCountHint(): string {
        const { maxStopCount } = this.props;
        if (maxStopCount) {
            return `With max stop count: ${maxStopCount}`
        } else {
            return "Without stop limitation";
        }
    }

    protected renderRoutes = (): Array<React.ReactNode> => {
        return this.props.routes.map((route) => (
            <div key={uniqkey()}>
                {route}
            </div>
        ));
    }
}

export default PossibleRoutes;
