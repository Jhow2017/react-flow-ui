import { ComponentType } from 'design-system/core/types/componentType';

export type DsProgressGradientBarTypes = {
    percentage: number;
    maxValue: number;
    colors: string[];
} & ComponentType;
