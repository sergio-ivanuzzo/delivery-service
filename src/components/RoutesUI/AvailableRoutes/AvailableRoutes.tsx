import * as React from "react";

import {
    IAvailableRoutesProps,
} from "./AvailableRoutesProps";
import {uniqkey} from "../../../helpers";

class AvailableRoutes extends React.Component<IAvailableRoutesProps> {
    public render(): React.ReactNode {
        if (this.props.routesBetweenTowns) {
            return (
                <div className={"data-container"}>
                    {this.renderRoutes()}
                </div>
            );
        } else {
            return null;
        }
    }

    protected renderRoutes = (): Array<React.ReactNode> => {
        return this.props.routesBetweenTowns.map((route) => (
            <div key={uniqkey()}>
                {route}
            </div>
        ));
    }
}

export default AvailableRoutes;
