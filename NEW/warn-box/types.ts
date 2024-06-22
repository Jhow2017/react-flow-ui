import { ReactNode } from 'react';
import { ComponentType } from 'design-system/core/types/componentType';

export type DsToastType = ComponentType & {
    children: ReactNode;
    variant: 'danger' | 'success' | 'warning' | 'neutral';
    color?: 'white' | 'black';
    fontSize: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
};
