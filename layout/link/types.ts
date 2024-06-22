import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import type { ComponentType } from '../../core/types/componentType';

export type DsLinkType = {
    children?: ReactNode;
    href: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    as?: never;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> &
    ComponentType;
