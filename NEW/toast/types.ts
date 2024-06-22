import type { JSXElementConstructor, ReactElement } from 'react';
import { DsTextType } from '@ds/components/typography/text/types';
import { ComponentType } from '@ds/core/types/componentType';
import { DsBoxType } from '@ds/layout/box/types';

export type VariantTypes = 'success' | 'error' | 'warning' | 'info';
export type PositionTypes = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type ToastOptions = {
    position?: PositionTypes; //need to implement
    autoClose?: boolean;//need to implement
    hideProgressBar?: boolean;
    closeOnClick?: boolean;//need to implement
    pauseOnHover?: boolean;
    theme?: 'default' | 'dark' | 'light';//need to implement
    duration?: number;
    size?: 'small' | 'medium' | 'large';//need to implement
    stylesMessage?: Partial<Omit<DsTextType, 'children'>>;
    stylesContainer?: DsBoxType;
};

export type ToastStore = {
    toasts: DsToastTypes[];
    addToast: (toast: DsToastTypes) => void;
    removeToast: () => void;
};

export type DsToastTypes = ComponentType & {
    message: string | ReactElement<any, string | JSXElementConstructor<any>>;
    variant: VariantTypes;
    options?: ToastOptions;
};
