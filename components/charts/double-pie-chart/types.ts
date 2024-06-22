import { Color } from '../../../core/types/cssValueTypes';

type SingularGraphData = {
    maxValue: number;
    currentValue: number;
    color: Color;
};

export type DoublePieChartProps = {
    innerGraphData: SingularGraphData;
    outterGraphData: SingularGraphData;
    centralValue?: string | number;
    centralText?: string;
    size?: `${string}px`;
};
