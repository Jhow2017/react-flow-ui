import { ComponentType } from 'design-system/core/types/componentType';
import { ReactNode } from 'react';

interface Option {
    label: string;
    value: string;
    [''] ?: string;
}

export type DsRadioBoxTypes = {
    data?: any;
    selectedValue?: string;
    defaultValue?: string;
    onChange: (item: { value: string }) => void;
    options: Option[];
    isRadio?: boolean;
    disabled?: boolean;
    children?: ReactNode;
} & ComponentType;
