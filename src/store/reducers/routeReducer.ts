import {
    RouteAction,
    RouteActionType
} from "../actions/routeActions";
import RouteGraph from "../../dataStructures/RouteGraph";
import {
    IRouteData
} from "../../containers/RouteContainer/RouteContainerProps";

export interface IRouteReducerState extends IRouteData {}

export const initialState: IRouteReducerState = {
    routeGraph: new RouteGraph()
};

export const routeReducer = (state = initialState, action: RouteAction): IRouteReducerState => {
    switch (action.type) {
        case RouteActionType.ROUTE_BETWEEN_TWO_TOWNS_ADD: {
            const { vertex, node, cost } = action.payload;
            state.routeGraph.addEdge(vertex, node, cost);

            return state;
        }
        case RouteActionType.ROUTE_DELIVERY_CALCULATE_COMPLETE: {
            return {
                ...state,
                route: action.payload.route,
                cost: action.payload.cost
            }
        }
        default: {
            return state;
        }
    }
};
