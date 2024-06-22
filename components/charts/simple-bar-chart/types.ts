export type SimpleBarChartProps = {
    graphHeight: string;
    graphData: {
        date: string;
        value: number;
        popupData?: {
            title: string;
            value: string;
        }[];
    }[];
};
