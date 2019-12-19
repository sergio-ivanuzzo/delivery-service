import RouteGraph from "../../../dataStructures/RouteGraph";

export interface ICalculatedCostProps {
    routeGraph: RouteGraph;
    route?: string[];
    cost?: number;
    noRoute?: boolean;
}
