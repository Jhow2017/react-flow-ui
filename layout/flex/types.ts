import type { AlignItems, FlexDirection, FlexWrap, JustifyContent } from '../../core/types/cssValueTypes';
import type { ComponentType } from '../../core/types/componentType';
import type { BreakpointProps } from '../../config';
import { ReactNode } from 'react';

export type DsFlexType = {
    children?: ReactNode;
    align?: BreakpointProps<AlignItems> | AlignItems;
    justify?: BreakpointProps<JustifyContent> | JustifyContent;
    wrap?: BreakpointProps<FlexWrap> | FlexWrap;
    direction?: BreakpointProps<FlexDirection> | FlexDirection;
    onClick?: () => void;
} & ComponentType;
