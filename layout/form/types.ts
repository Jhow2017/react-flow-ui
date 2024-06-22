import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from 'react';
import type { ComponentType } from '../../core/types/componentType';

export type DsFormType = {
    as?: never;
    children?: ReactNode;
} & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> &
    ComponentType;
