import { ComponentType } from 'design-system/core/types/componentType';
import { parametersEvent } from 'utils/context-mixpanel/types/parametersEvent';

export type DsChipstype = {
    options: string[];
    onFilterChange?: (selectedOptions: string[]) => void;
    mixPanelProps?: parametersEvent;
} & ComponentType;
