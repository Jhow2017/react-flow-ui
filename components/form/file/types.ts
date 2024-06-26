import type { ChangeEventHandler } from 'react';
import type { ComponentType } from '../../../core/types/componentType';

export type DsFileType = ComponentType & {
    label: string;
    id: string;
    name: string;
    size: 'small' | 'medium' | 'large';
    supportLabel?: string;
    fileName: string;
    error?: string;
    type?: never;
    as?: never;
    accept?: string | undefined;
    alt?: string | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    capture?: boolean | 'user' | 'environment' | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean | undefined;
    crossOrigin?: string | undefined;
    disabled?: boolean | undefined;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    height?: number | string | undefined;
    list?: string | undefined;
    max?: number | string | undefined;
    maxLength?: number | undefined;
    min?: number | string | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    src?: string | undefined;
    step?: number | string | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: ChangeEventHandler | undefined;
};
