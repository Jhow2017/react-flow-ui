import { JSXElementConstructor, ReactElement } from 'react';
import { ComponentType } from '../../../core/types/componentType';

export type DsSelectType = {
    label: string;
    onSearchUpdate?(value: string): void;
    size: 'small' | 'medium' | 'large';
    value: string | undefined;
    onOptionSelected(value: string): void;
    optionsArray: {
        label: string;
        supportLabel?: string;
        value: string;
        key: string | number;
        disabled?: boolean;
        icon?: ReactElement<any, JSXElementConstructor<any>>;
    }[];
    hasSearch?: boolean;
    loading?: boolean;
    isOpen?: boolean;
    setIsOpen?(state: (prev: boolean) => boolean): void;
    error?: string;
    disabled?: boolean;
    supportLabel?: string;
} & ComponentType;
