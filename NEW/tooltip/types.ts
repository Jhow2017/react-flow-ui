import { ReactNode } from 'react';

//types
import { DsTextType } from 'design-system/components/typography/text/types';
import { parametersEvent } from 'utils/context-mixpanel/types/parametersEvent';
import { ComponentType } from 'design-system/core/types/componentType';

//config
import { BreakpointProps } from 'design-system/config';
import { Float } from '../types';

export type DsTooltipTypes = {
    children?: ReactNode;
    className?: string;
    direction?: BreakpointProps<Float> | Float;
    description: string;
    descriptionStyle?: Partial<Omit<DsTextType, 'children'>>;
    mixPanelProps?: parametersEvent;
} & ComponentType;
