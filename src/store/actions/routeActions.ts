import RouteGraph from "../../dataStructures/RouteGraph";

export enum RouteActionType {
    ROUTE_BETWEEN_TWO_TOWNS_ADD = "ROUTE_BETWEEN_TWO_TOWNS_ADD",
    ROUTE_DELIVERY_CALCULATE = "ROUTE_DELIVERY_CALCULATE",
    ROUTE_DELIVERY_CALCULATE_COMPLETE = "ROUTE_DELIVERY_CALCULATE_COMPLETE",
    ROUTE_DELIVERY_CALCULATE_ERROR = "ROUTE_DELIVERY_CALCULATE_ERROR",
    ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE = "ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE",
    ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE_COMPLETE = "ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE_COMPLETE",
}

type IRouteActionPayload = {
    vertex: string;
    node: string;
    cost: number;
} | {
    routeGraph: RouteGraph;
    route: string[];
} | {
    route: string[];
    cost: number;
} | {
    routeGraph: RouteGraph;
    startPoint: string;
    destination: string;
    maxStopCount?: number;
} | {
    routes: string[];
};

export type RouteAction = {
    type: RouteActionType.ROUTE_BETWEEN_TWO_TOWNS_ADD,
    payload: {
        vertex: string;
        node: string;
        cost: number;
    },
} | {
    type: RouteActionType.ROUTE_DELIVERY_CALCULATE,
    payload: {
        routeGraph: RouteGraph;
        route: string[];
    },
} | {
    type: RouteActionType.ROUTE_DELIVERY_CALCULATE_COMPLETE,
    payload: {
        route: string[];
        cost: number;
    },
} | {
    type: RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE,
    payload: {
        routeGraph: RouteGraph,
        startPoint: string,
        destination: string,
        maxStopCount?: number
    },
} | {
    type: RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE_COMPLETE,
    payload: {
        routes: string[];
    },
}

export function actionAddRoute(payload: IRouteActionPayload) {
    return {
        type: RouteActionType.ROUTE_BETWEEN_TWO_TOWNS_ADD,
        payload,
    }
}

export function calculateDeliveryRouteCost(payload: IRouteActionPayload) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_CALCULATE,
        payload,
    }
}

export function calculateDeliveryRouteCostComplete(payload: IRouteActionPayload) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_CALCULATE_COMPLETE,
        payload,
    }
}

export function calculateDeliveryRouteCostError(route: Array<string>) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_CALCULATE_ERROR,
        payload: {
            route,
        },
    }
}

export function actionCalculatePossibleDeliveryRoutes(payload: IRouteActionPayload) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE,
        payload,
    }
}

export function actionCalculatePossibleDeliveryRoutesComplete(
    payload: IRouteActionPayload,
) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE_COMPLETE,
        payload,
    }
}
