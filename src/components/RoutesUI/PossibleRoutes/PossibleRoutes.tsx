import * as React from "react";

import { IPossibleRoutesProps } from "./PossibleRoutesProps";
import { uniqkey } from "../../../helpers";

class PossibleRoutes extends React.Component<IPossibleRoutesProps> {
    public render(): React.ReactNode {
        if (this.props.routes) {
            return (
                <div className={"data-container"}>
                    <div>
                        {this.renderRoutes()}
                    </div>
                    <div>
                        Total: {this.props.routes.length}
                    </div>
                </div>
            );
        } else {
            return null;
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
