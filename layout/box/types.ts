import { ReactNode } from 'react';
import type { ComponentType } from '../../core/types/componentType';

export type DsBoxType = {
    children?: ReactNode;
    onMouseEnter?: React.MouseEventHandler<HTMLTextAreaElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLTextAreaElement>;
    onClick?: () => void;
} & ComponentType;
