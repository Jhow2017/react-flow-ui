import { ReactNode } from 'react';
import type { ComponentType } from '../../../core/types/componentType';

export type DsTagType = {
    children: ReactNode;
    active?: boolean;
    onClick?(e: TouchEvent): void;
    disabled?: boolean;
} & ComponentType;
