import { ReactNode } from 'react';
import { BreakpointProps } from 'design-system/config';
import { ComponentType } from 'design-system/core/types/componentType';
import { Float } from '../types';

export type SidebarType = ComponentType & {
    children: ReactNode;
    isVisible: boolean;
    closeSideBar?: () => void;
    positionSideBar: BreakpointProps<Float> | Float;
};
