import RouteGraph from "../../dataStructures/RouteGraph";
import { IRouteData } from "../../containers/RouteContainer/RouteContainerProps";
import {
    RouteAction,
    RouteActionType
} from "../actions/types/routeActionType";

export interface IRouteReducerState extends IRouteData {
    routesBetweenTowns: string[];
    noRoute: boolean;
}

export const initialState: IRouteReducerState = {
    routeGraph: new RouteGraph(),
    routesBetweenTowns: [],
    noRoute: false
};

export const routeReducer = (state = initialState, action: RouteAction): IRouteReducerState => {
    switch (action.type) {
        case RouteActionType.ROUTE_BETWEEN_TWO_TOWNS_ADD: {
            const { vertex, node, cost } = action.payload;
            state.routeGraph.addEdge(vertex, node, cost);

            const routesBetweenTowns = Array.from(
                state.routeGraph.mapCostToRoute.entries()
            ).map((item) => {
                return item.join("");
            });

            return {
                ...state,
                routesBetweenTowns
            };
        }
        case RouteActionType.ROUTE_DELIVERY_CALCULATE_COMPLETE: {
            return {
                ...state,
                route: action.payload.route,
                cost: action.payload.cost
            }
        }
        case RouteActionType.ROUTE_DELIVERY_CALCULATE_ERROR: {
            return {
                ...state,
                route: action.payload.route,
                noRoute: true
            }
        }
        case RouteActionType.ROUTE_DELIVERY_POSSIBLE_ROUTES_CALCULATE_COMPLETE: {
            return {
                ...state,
                routes: action.payload.routes
            }
        }
        default: {
            return state;
        }
    }
};
