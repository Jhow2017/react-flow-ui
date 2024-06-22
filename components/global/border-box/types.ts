import { ReactNode } from 'react';
import type { ComponentType } from '../../../core/types/componentType';

export type DsBorderBoxType = {
    children: ReactNode;
    large?: boolean;
} & ComponentType;
