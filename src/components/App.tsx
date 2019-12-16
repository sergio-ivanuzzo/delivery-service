import * as React from "react";
import { Provider } from "react-redux";

import { store } from "../store/store";
import RouteContainer from "../containers/RouteContainer/RouteContainer";
import {
    IRouteContainerChildProps,
} from "../containers/RouteContainer/RouteContainerProps";
import AddRouteForm from "./RoutesUI/Forms/AddRouteForm/AddRouteForm";
import PossibleRoutesForm from "./RoutesUI/Forms/PossibleRoutesForm/PossibleRoutesForm";
import AvailableRoutes from "./RoutesUI/AvailableRoutes/AvailableRoutes";

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <RouteContainer>
                    {this.renderRoutesUI}
                </RouteContainer>
            </Provider>
        );
    }

    protected renderRoutesUI = (props: IRouteContainerChildProps): React.ReactNode => {
        return (
            <>
                <AddRouteForm {...props} />
                <AvailableRoutes {...props} />
                <PossibleRoutesForm {...props} />
            </>
        );
    }
}

export default App;
