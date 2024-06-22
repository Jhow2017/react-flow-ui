import { Color } from '../../../core/types/cssValueTypes';

type SingularGraphData = {
    maxValue: number;
    currentValue: number;
    color: Color;
};

export type DsPieChartProps = {
    graphData: SingularGraphData;
    centralValue?: string | number;
    centralText?: string;
    size: `${string}px`;
};
