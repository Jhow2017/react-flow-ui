import React, { useState } from 'react';

//types
import { DsFilterType } from './types';

//Design-system
import { DsBox, DsFlex } from 'design-system/layout';
import { DsTitle } from 'design-system/components/typography';
import { DsInput } from 'design-system/components/form';
import { DsButton, DsModal } from 'design-system/components/global';

//components
import AllFilters from './all-filters';

//images
import FilterIcon from 'design-system/assets/icons/filter-variant.svg';
import { useMixPanel } from 'utils/context-mixpanel';

const DsFilter: React.FC<DsFilterType> = (props) => {
    const { chipFilterConfig, dateRangerConfig, searchInputConfig, selectConfig, ...attrs } = props;
    const { eventTrack } = useMixPanel();
    const [isModalFilter, setIsModalFilter] = useState<boolean>(false);
    const [isSelectedDateRanger, setIsSelectedDateRanger] = useState<boolean>(false);

    const handleApplyFilter = () => {
        //onFilterChange && onFilterChange(selectedFilterOptions);
        setIsModalFilter(false);
    };

    return (
        <>
            <DsBox
                display="flex"
                alignItems={{ sm: 'flex-start', md: 'center' }}
                zIndex={'99'}
                position="relative"
                flexDirection={{ sm: 'row-reverse', md: 'column', lg: 'row' }}
                justifyContent={'space-between'}
                width={'100%'}
                gap={'16px'}
                {...attrs}
            >
                <DsButton
                    variant="secondary-grey"
                    size="small"
                    icon={<FilterIcon />}
                    onClick={() => setIsModalFilter(true)}
                    border={`2px solid ${isSelectedDateRanger && 'var(--writer)'}`}
                    display={{ sm: 'flex', md: 'none' }}
                >
                    Filtros
                </DsButton>
                <DsFlex display={{ sm: 'none', md: 'flex' }} gap={'16px'} flexWrap="wrap">
                    <AllFilters
                        chipFilterConfig={chipFilterConfig}
                        dateRangerConfig={dateRangerConfig}
                        selectConfig={selectConfig}
                        //add here the other DS filter types
                    />
                </DsFlex>

                {searchInputConfig?.onSearchChange && (
                    <DsBox
                        width={'100%'}
                        maxW={{ sm: '100%', md: '580px', lg: '245px' }}
                        ml={{ sm: '0', md: 'none', lg: 'auto' }}
                        {...searchInputConfig?.styles}
                    >
                        <DsInput
                            type="search"
                            id="searchInput"
                            name="searchInput"
                            label={searchInputConfig?.searchInputLabel}
                            size="small"
                            onChange={(e) => {
                                searchInputConfig?.onSearchChange((e.currentTarget as HTMLInputElement).value),
                                    searchInputConfig?.mixPanelProps &&
                                        eventTrack('CLIQUE BOTÃO', {
                                            ...searchInputConfig?.mixPanelProps,
                                        });
                            }}
                        />
                    </DsBox>
                )}
            </DsBox>

            <DsModal
                isVisible={isModalFilter}
                closeModal={() => setIsModalFilter(false)}
                w="100%"
                maxW={'100%'}
                height={'100vh'}
                display="flex"
                alignItems={{ sm: 'flex-start', md: 'center' }}
                position="relative"
                flexDirection={{ sm: 'column', md: 'row' }}
                justifyContent={'space-between'}
                borderRadius="0"
                padding={'24px'}
                {...attrs}
            >
                <DsBox>
                    <DsBox mb={'24px'}>
                        <DsTitle as="h2" size="small" color="var(--headline)">
                            Filtros
                        </DsTitle>
                    </DsBox>
                    <DsFlex gap={'16px'} flexWrap="wrap">
                        <AllFilters
                            chipFilterConfig={chipFilterConfig}
                            dateRangerConfig={dateRangerConfig}
                            setIsSelectedDateRanger={setIsSelectedDateRanger}
                            selectConfig={selectConfig}
                            //add here the other DS filter types
                        />
                    </DsFlex>
                </DsBox>
                <DsButton variant="primary" size="medium" w={'100%'} mt={'24px'} onClick={handleApplyFilter}>
                    Aplicar filtros
                </DsButton>
            </DsModal>
        </>
    );
};
export default DsFilter;
