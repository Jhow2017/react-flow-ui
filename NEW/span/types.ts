import { ComponentType } from '@ds/core/types/componentType';
import type { ReactNode } from 'react';

export type DsSpanType = {
    children: ReactNode;
    as?: 'p' | 'small' | 'span' | 'strong' | 'b';
    variant?: 'normal' | 'bold';
    size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
} & ComponentType;
