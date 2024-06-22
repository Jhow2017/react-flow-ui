import type { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from 'react';
import type { ComponentType } from '../../../core/types/componentType';

export type DsErrorMessageType = {
    children: ReactNode;
    htmlFor: string;
} & DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> &
    ComponentType;
