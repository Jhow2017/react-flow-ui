import { ReactNode } from 'react';
import type { ComponentType } from '../../../core/types/componentType';

export type DsStampType = {
    children: ReactNode;
    variant:
        | 'hoverRuby'
        | 'symbol'
        | 'writer'
        | 'tagPurple'
        | 'martianDirt'
        | 'ocean'
        | 'caribeanSea'
        | 'dragonFly'
        | 'selectiveYellow'
        | 'lightPurple'
        | 'sunny'
        | 'lightMint'
        | 'frameGrey'
        | 'butterYellow'
        | 'lavander'
        | 'lightGrey';
    toUpperCase?: boolean;
} & ComponentType;
