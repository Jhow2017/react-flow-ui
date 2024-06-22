import React, { Dispatch, SetStateAction } from 'react';
import { ComponentType } from '../../../core/types/componentType';
import { BreakpointProps } from '../../../config';
import { Color } from '../../../core/types/cssValueTypes';

export interface DsTabType {
    title: React.ReactNode | string;
    value: string;
    width?: string;
    disabled?: boolean;
}
export interface DsTabsType extends ComponentType {
    currentTab: string;
    tabsList: DsTabType[];
    setCurrentTab: Dispatch<SetStateAction<string>>;
    size?: 'small' | 'medium';
    tabGroupBorderColor?: BreakpointProps<Color> | Color;
    onChangeTab?: (obj: DsTabType) => void;
}
