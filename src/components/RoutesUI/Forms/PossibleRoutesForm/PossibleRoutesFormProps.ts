export interface IPossibleRoutesFormProps {
    calculatePossibleDeliveryRoutes: (
        startPoint: string,
        destination: string,
        maxStopCount?: number
    ) => void;
}
