import * as React from "react";
import RouteGraph from "../../dataStructures/RouteGraph";

export interface IRouteData {
    routeGraph: RouteGraph;
    route?: Array<string>;
    cost?: number;
}

export interface IRouteContainerProps extends IRouteData {
    actionAddRoute: (vertex: string, node: string, cost: number) => void;
    calculateDeliveryRouteCost: (routeGraph: RouteGraph, route: Array<string>) => void;
    calculatePossibleDeliveryRoutes: (
        routeGraph: RouteGraph,
        startPoint: string,
        destination: string,
        maxStopCount?: number
    ) => void;
    children: (injectedProps: any) => React.ReactNode;
}

export interface IRouteContainerChildProps extends IRouteData {
    routeGraph: RouteGraph;
    addRoute: (vertex: string, node: string, cost: number) => void;
    calculateDeliveryRouteCost: (route: Array<string>) => void;
    calculatePossibleDeliveryRoutes: (
        startPoint: string,
        destination: string,
        maxStopCount?: number
    ) => void;
}
