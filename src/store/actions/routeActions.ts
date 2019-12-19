import {
    RouteAction,
    RouteActionType
} from "./types/routeActionType";

export function addRoute(payload: Pick<RouteAction, "payload">) {
    return {
        type: RouteActionType.ROUTE_BETWEEN_TWO_TOWNS_ADD,
        ...payload,
    }
}

export function calculateDeliveryRouteCost(payload: Pick<RouteAction, "payload">) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_CALCULATE,
        ...payload,
    }
}

export function calculateDeliveryRouteCostComplete(payload: Pick<RouteAction, "payload">) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_CALCULATE_COMPLETE,
        ...payload,
    }
}

export function calculateDeliveryRouteCostError(payload: Pick<RouteAction, "payload">) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_CALCULATE_ERROR,
        ...payload,
    }
}

export function calculatePossibleDeliveryRoutes(payload: Pick<RouteAction, "payload">) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE,
        ...payload,
    }
}

export function calculatePossibleDeliveryRoutesComplete(
    payload: Pick<RouteAction, "payload">,
) {
    return {
        type: RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE_COMPLETE,
        ...payload,
    }
}
