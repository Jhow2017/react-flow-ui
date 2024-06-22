import React from 'react';

//types
import { DsFilterType } from '../types';

//Design-system
import { DsBox } from 'design-system/layout';
import { FilterItem } from 'components/filter';
import { DsSelect } from 'design-system/components/form';

//components
import DsDivider from '../../divider';
import DsChips from '../chip';

const AllFilters: React.FC<DsFilterType> = ({
    chipFilterConfig,
    dateRangerConfig,
    selectConfig,
    setIsSelectedDateRanger,
}) => {
    return (
        <DsBox display={'flex'} gap={{ sm: '0', md: '16px' }} flexDirection={{ sm: 'column', md: 'row' }}>
            {chipFilterConfig?.options && (
                <DsChips
                    options={chipFilterConfig?.options}
                    onFilterChange={chipFilterConfig?.onFilterChange}
                    mixPanelProps={chipFilterConfig?.mixPanelProps}
                />
            )}

            {selectConfig?.onOptionSelected && (
                <DsSelect
                    value={selectConfig?.value}
                    label={selectConfig?.label}
                    size={selectConfig?.size}
                    optionsArray={selectConfig?.optionsArray}
                    onOptionSelected={selectConfig?.onOptionSelected}
                    {...selectConfig?.styles}
                />
            )}

            {dateRangerConfig?.isDateRange && (
                <>
                    {chipFilterConfig?.options?.length > 0 && (
                        <DsDivider
                            w={{ sm: '100%', md: '1px' }}
                            height={{ sm: '1px', md: '100%' }}
                            margin={{ sm: '16px 0', md: '0' }}
                        />
                    )}
                    <FilterItem
                        hasPeriod={dateRangerConfig?.hasPeriod}
                        isDateRange={dateRangerConfig?.isDateRange}
                        mixPanelProps={dateRangerConfig?.mixPanelProps}
                        placeholderDateRange={dateRangerConfig?.placeHolderDateRange}
                        onDateUpdate={(from, to) => dateRangerConfig?.onDateUpdate(from, to)}
                        setIsSelectedDateRanger={setIsSelectedDateRanger}
                    />
                </>
            )}
        </DsBox>
    );
};

export default AllFilters;
