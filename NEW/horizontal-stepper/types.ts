//config Ds
import { BreakpointProps } from 'design-system/config';

//types
import { ComponentType } from 'design-system/core/types/componentType';
import { Float } from '../types';
import { DsTextType } from 'design-system/components/typography/text/types';
import { Color } from 'design-system/core/types/cssValueTypes';
import { DsTitleType } from 'design-system/components/typography/title/types';

export interface Step {
    id: number;
    title: string;
    description?: string;
}

export type DsHorizontalStepperType = ComponentType & {
    currentStep?: number;
    formSteps?: Step[];
    activeStepColor?: Color;
    completedStepColor?: Color;
    defaultStepColor?: Color;
    titleStyles?: Partial<Omit<DsTitleType, 'children'>>;
    descriptionStyle?: Partial<Omit<DsTextType, 'children'>>;
    direction?: BreakpointProps<Float> | Float;
};
