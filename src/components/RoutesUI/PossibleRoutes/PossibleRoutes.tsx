import * as React from "react";

import { IPossibleRoutesProps } from "./PossibleRoutesProps";

class PossibleRoutes extends React.Component<IPossibleRoutesProps> {
    public render(): React.ReactNode {
        if (this.props.routes) {
            return (
                <>
                    <div>
                        {this.renderRoutes()}
                    </div>
                    <div>
                        Total: {this.props.routes.length}
                    </div>
                </>
            );
        } else {
            return null;
        }
    }

    protected renderRoutes = (): Array<React.ReactNode> => {
        return this.props.routes.map((route) => (
            <div>
                {route}
            </div>
        ));
    }
}

export default PossibleRoutes;
