import RouteGraph from "../../../../dataStructures/RouteGraph";

export interface ICalculateDeliveryCostFormProps {
    routeGraph: RouteGraph;
    calculateDeliveryRouteCost: (route: string[]) => void;
    routesBetweenTowns?: string[];
}
