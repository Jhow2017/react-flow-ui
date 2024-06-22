import { ReactNode } from 'react';
import { ComponentType } from 'design-system/core/types/componentType';

export type DsAlertBoxType = ComponentType & {
    children: ReactNode;
    variant: 'danger' | 'success' | 'warning' | 'neutral';
};
