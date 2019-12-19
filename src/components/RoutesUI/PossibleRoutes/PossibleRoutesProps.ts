import RouteGraph from "../../../dataStructures/RouteGraph";

export interface IPossibleRoutesProps {
    routeGraph: RouteGraph;
    routes?: string[];
    maxStopCount?: number;
}
