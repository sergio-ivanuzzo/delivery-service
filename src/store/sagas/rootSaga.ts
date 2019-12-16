import { all, takeEvery, AllEffect } from "redux-saga/effects";

import { RouteActionType } from "../actions/routeActions";
import {
    calculateDeliveryRouteCost,
    calculatePossibleDeliveryRoutes,
} from "./routeSagas";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(RouteActionType.ROUTE_DELIVERY_CALCULATE, calculateDeliveryRouteCost),
        takeEvery(
            RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE,
            calculatePossibleDeliveryRoutes
        )
    ]);
}
