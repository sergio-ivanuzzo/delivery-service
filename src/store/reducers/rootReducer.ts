import { combineReducers } from "redux";

import { IRouteReducerState, routeReducer } from "./routeReducer";

export interface IStoreState {
    routeReducer: IRouteReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    routeReducer
});
