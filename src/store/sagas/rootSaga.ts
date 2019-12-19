import { all, takeEvery, AllEffect } from "redux-saga/effects";

import {
    calculateDeliveryRouteCost,
    calculatePossibleDeliveryRoutes,
} from "./routeSagas";
import { RouteActionType } from "../actions/types/routeActionType";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(RouteActionType.ROUTE_DELIVERY_CALCULATE, calculateDeliveryRouteCost),
        takeEvery(
            RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE,
            calculatePossibleDeliveryRoutes
        )
    ]);
}
