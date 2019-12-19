import * as React from "react";

import {
    IExistingRoutesProps,
} from "./ExistingRoutesProps";

import { maybe, uniqkey } from "../../../helpers";

class ExistingRoutes extends React.Component<IExistingRoutesProps> {
    public render(): React.ReactNode {
        const { routesBetweenTowns } = this.props;
        if (!maybe(routesBetweenTowns, "length")) {
            return null;
        }

        return (
            <div className={"data-container"}>
                <div className="title text-bold">
                    Existing Routes
                </div>
                {this.renderRoutes()}
            </div>
        );
    }

    protected renderRoutes = (): Array<React.ReactNode> => {
        return this.props.routesBetweenTowns.map((route) => (
            <div key={uniqkey()}>
                {route}
            </div>
        ));
    }
}

export default ExistingRoutes;
