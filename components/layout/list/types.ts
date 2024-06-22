import type { DetailedHTMLProps, LiHTMLAttributes, OlHTMLAttributes, ReactNode } from 'react';
import type { ComponentType } from '../../core/types/componentType';

export type DsListType = {
    children?: ReactNode;
    as?: 'ul' | 'ol';
} & DetailedHTMLProps<OlHTMLAttributes<HTMLUListElement>, HTMLUListElement> &
    ComponentType;

export type DsListItemType = {
    children?: ReactNode;
    as?: never;
} & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> &
    ComponentType;
