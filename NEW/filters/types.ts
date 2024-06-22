import { Dayjs } from 'dayjs';
import { DsSelectType } from 'design-system/components/form/select/types';
import { ComponentType } from 'design-system/core/types/componentType';
import { StylesType } from 'design-system/core/types/stylesType';
import { parametersEvent } from 'utils/context-mixpanel/types/parametersEvent';

type SelectConfigTypes = {
    value?: DsSelectType['value'];
    label?: DsSelectType['label'];
    size?: DsSelectType['size'];
    optionsArray?: DsSelectType['optionsArray'];
    onOptionSelected?: DsSelectType['onOptionSelected'];
    mixPanelProps?: parametersEvent;
    styles?: StylesType;
};

type SearchInputConfigTypes = {
    searchInputLabel?: string;
    onSearchChange?: (e: string) => void;
    mixPanelProps?: parametersEvent;
    styles?: StylesType;
};

type ChipFilterConfigTypes = {
    options?: string[];
    onFilterChange?: (selectedOptions: string[]) => void;
    styles?: StylesType;
    mixPanelProps?: parametersEvent;
};

type DateRangerConfigTypes = {
    hasPeriod?: boolean;
    isDateRange?: boolean;
    placeHolderDateRange?: string;
    onDateUpdate?: (from: Dayjs, to: Dayjs) => void;
    dateRange?: {
        from: any;
        to: any;
    };
    mixPanelProps?: parametersEvent;
    styles?: StylesType;
};

export type DsFilterType = {
    //Filter chip config
    chipFilterConfig?: ChipFilterConfigTypes;

    //Filter DatePicker
    dateRangerConfig?: DateRangerConfigTypes;

    //input Search config
    searchInputConfig?: SearchInputConfigTypes;

    // Select config
    selectConfig?: SelectConfigTypes;

    //add here the other DS filter types

    //others
    setIsSelectedDateRanger?: React.Dispatch<React.SetStateAction<boolean>>;
} & ComponentType;
