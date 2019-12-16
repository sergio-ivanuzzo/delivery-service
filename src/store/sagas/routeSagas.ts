import { put } from "redux-saga/effects";
import { toast } from "react-toastify";

import * as RouteActions from "../actions/routeActions";
import { RouteAction } from "../actions/routeActions";
import { RouteActionType } from "../actions/routeActions";

export function* calculateDeliveryRouteCost(action: RouteAction) {
    if (action.type === RouteActionType.ROUTE_DELIVERY_CALCULATE) {
        const { routeGraph, route } = action.payload;

        let totalCost = 0;
        let noRoute = false;

        for (let i = 1; i < route.length; i++) {
            const startPoint = route[i - 1];
            const endPoint = route[i];
            if (!startPoint && !endPoint) {
                break;
            }
            console.log(startPoint, endPoint);

            const nodes = routeGraph.adgencyList.get(startPoint);
            if (nodes) {
                if (nodes.includes(endPoint)) {
                    const cost = routeGraph.mapCostToRoute.get(
                        startPoint + endPoint
                    );
                    totalCost += Number(cost);
                } else {
                    noRoute = true;
                    break;
                }
            }
        }

        if (noRoute) {
            toast.error(`There are no route for ${route.join("")}`);
            yield put(RouteActions.calculateDeliveryRouteCostError(route));
        } else {
            yield put(RouteActions.calculateDeliveryRouteCostComplete({
                route,
                cost: totalCost
            }));
        }
    }
}

export function* calculatePossibleDeliveryRoutes(action: RouteAction) {
    if (action.type === RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE) {
        const {
            routeGraph,
            startPoint,
            destination,
            maxStopCount
        } = action.payload;

        const routes: Array<string> = [];
        let route: Array<string> = [];

        const visited = new Map<string, boolean>();
        Array.from(routeGraph.adgencyList.keys()).forEach((vertex: string) => {
            visited.set(vertex, false);
        });

        const findPath = (vertex, stopCount) => {

            visited.set(vertex, true);
            route.push(vertex);

            if (vertex === destination) {
                routes.push(route.join("-"));
            } else {
                const nodes = routeGraph.adgencyList.get(vertex);
                if (!nodes) {
                    return routes;
                }

                if (maxStopCount && stopCount < maxStopCount || !maxStopCount) {
                    nodes.forEach((node) => {
                        if (!visited.get(node)) {
                            findPath(node, stopCount + 1);
                        }
                    });
                }
            }

            route.pop();
            visited.set(vertex, false);

            return routes;
        };

        findPath(startPoint, 0);

        yield put(RouteActions.actionCalculatePossibleDeliveryRoutesComplete({
            routes
        }))
    }
}
