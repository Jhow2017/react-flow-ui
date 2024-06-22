import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    JSXElementConstructor,
    ReactElement,
    ReactNode,
} from 'react';
import type { ComponentType } from '../../../core/types/componentType';

type DsButtonIconPerPositionTypeSelector =
    | {
          icon: ReactElement<any, JSXElementConstructor<any>>;
          iconAfter?: boolean;
      }
    | {
          icon?: undefined | null;
          iconAfter?: never;
      };

type DsButtonVariantPerTypeSelector =
    | ({
          variant:
              | 'primary'
              | 'primary-dark'
              | 'secondary'
              | 'secondary-grey'
              | 'secondary-dark'
              | 'tertiary'
              | 'tertiary-dark'
              | 'quaternary'
              | 'quinary'
              | 'default';
          size: 'small' | 'medium' | 'large';
      } & DsButtonIconPerPositionTypeSelector)
    | {
          variant: 'default';
          size?: never;
          icon?: never;
          iconAfter?: never;
      };

export type DsButtonType = {
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    href?: string;
} & ComponentType &
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> &
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    DsButtonVariantPerTypeSelector;
