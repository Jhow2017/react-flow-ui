import { ComponentType } from '../../../core/types/componentType';

export type DsDatepickerType = {
    label: string;
    size: 'small' | 'medium' | 'large';
    displayedValue: string;
    onDateSelect(e: string): void;
    isOpen?: boolean;
    setIsOpen?(state: (prev: boolean) => boolean): void;
    maxDate?: string;
    minDate?: string;
    error?: string;
    supportLabel?: string;
} & ComponentType;
