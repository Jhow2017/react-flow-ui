import { ComponentType } from '../../../core/types/componentType';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export type DsTextareaType = {
    size: 'small' | 'medium' | 'large';
    label: string;
    name: string;
    id: string;
    error?: string;
    supportLabel?: string;
} & ComponentType &
    DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
