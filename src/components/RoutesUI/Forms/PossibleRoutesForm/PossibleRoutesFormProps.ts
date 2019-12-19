export interface IPossibleRoutesFormProps {
    routesBetweenTowns?: string[];
    calculatePossibleDeliveryRoutes: (
        startPoint: string,
        destination: string,
        maxStopCount?: number
    ) => void;
}
