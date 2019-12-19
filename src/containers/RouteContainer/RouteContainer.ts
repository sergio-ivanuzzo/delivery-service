import * as React from "react";
import { AnyAction, Dispatch } from "redux";
import { connect } from "react-redux";

import { IStoreState } from "../../store/reducers/rootReducer";
import {
    IRouteContainerChildProps,
    IRouteContainerProps
} from "./RouteContainerProps";
import * as RouteActions from "../../store/actions/routeActions";
import RouteGraph from "../../dataStructures/RouteGraph";

class RouteContainer extends React.Component<IRouteContainerProps> {
    public render(): React.ReactNode {
        return this.props.children(this.injectedProps);
    }

    protected get injectedProps(): IRouteContainerChildProps {
        return {
            // properties
            routeGraph: this.props.routeGraph,
            route: this.props.route,
            cost: this.props.cost,
            routes: this.props.routes,
            routesBetweenTowns: this.props.routesBetweenTowns,
            maxStopCount: this.props.maxStopCount,
            noRoute: this.props.noRoute,

            // methods
            addRoute: this.addRoute,
            calculateDeliveryRouteCost: this.calculateDeliveryRouteCost,
            calculatePossibleDeliveryRoutes: this.calculatePossibleDeliveryRoutes
        }
    }

    protected addRoute = (vertex: string, node: string, cost: number): void => {
        this.props.actionAddRoute(vertex, node, cost);
    };

    protected calculateDeliveryRouteCost = (route: Array<string>): void => {
        this.props.calculateDeliveryRouteCost(this.props.routeGraph, route);
    };

    protected calculatePossibleDeliveryRoutes = (
        startPoint: string,
        destination: string,
        maxStopCount?: number
    ): void => {
        this.props.calculatePossibleDeliveryRoutes(
            this.props.routeGraph,
            startPoint,
            destination,
            maxStopCount
        );
    }
}

const mapStateToProps = (state: IStoreState) => ({
    routeGraph: state.routeReducer.routeGraph,
    route: state.routeReducer.route,
    cost: state.routeReducer.cost,
    routes: state.routeReducer.routes,
    routesBetweenTowns: state.routeReducer.routesBetweenTowns,
    maxStopCount: state.routeReducer.maxStopCount,
    noRoute: state.routeReducer.noRoute,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    actionAddRoute: (
        vertex: string,
        node: string,
        cost: number
    ) => dispatch(RouteActions.addRoute({
        payload: {
            vertex,
            node,
            cost
        }
    })),
    calculateDeliveryRouteCost: (
        routeGraph: RouteGraph,
        route: Array<string>
    ) => dispatch(RouteActions.calculateDeliveryRouteCost({
        payload: {
            routeGraph,
            route
        }
    })),
    calculatePossibleDeliveryRoutes: (
        routeGraph: RouteGraph,
        startPoint: string,
        destination: string,
        maxStopCount?: number
    ) => dispatch(RouteActions.calculatePossibleDeliveryRoutes({
        payload: {
            routeGraph,
            startPoint,
            destination,
            maxStopCount
        }
    }))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteContainer);
