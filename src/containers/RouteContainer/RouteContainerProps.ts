import * as React from "react";
import RouteGraph from "../../dataStructures/RouteGraph";

export interface IRouteData {
    routeGraph: RouteGraph;
    route?: string[];
    cost?: number;
    routes?: string[];
}

export interface IRouteContainerProps extends IRouteData {
    actionAddRoute: (vertex: string, node: string, cost: number) => void;
    calculateDeliveryRouteCost: (routeGraph: RouteGraph, route: string[]) => void;
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
    calculateDeliveryRouteCost: (route: string[]) => void;
    calculatePossibleDeliveryRoutes: (
        startPoint: string,
        destination: string,
        maxStopCount?: number
    ) => void;
}
