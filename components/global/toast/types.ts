import { ReactNode } from 'react';
import type { ComponentType } from '../../../core/types/componentType';

export type DsToastType = ComponentType & {
    children: ReactNode;
    msToShow: number;
    isToastActive: boolean;
    setIsToastActive(state: boolean): void;
    variant: 'danger' | 'success' | 'warning';
};
