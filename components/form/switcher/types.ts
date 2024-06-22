import type { ChangeEventHandler } from 'react';
import type { ComponentType } from '../../../core/types/componentType';

export type DsSwitcherType = ComponentType & {
    id: string;
    name: string;
    type?: never;
    label?: string;
    labelBefore?: boolean;
    as?: never;
    accept?: string | undefined;
    alt?: string | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    capture?: boolean | 'user' | 'environment' | undefined;
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
    list?: string | undefined;
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