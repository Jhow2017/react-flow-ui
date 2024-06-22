import React, { useEffect, useState } from 'react';

//types
import { DsChipstype } from './types';

//ctx
import { useMixPanel } from 'utils/context-mixpanel';

//Design-system
import { DsFlex } from 'design-system/layout';
import DsTag from 'design-system/components/global/tag';
import { DsIcon } from 'design-system/components/global';

const DsChips: React.FC<DsChipstype> = (props) => {
    const { options, onFilterChange, mixPanelProps, ...attr } = props;
    const { eventTrack } = useMixPanel();
    const [selectedFilterOptions, setSelectedFilterOptions] = useState<string[]>([]);

    const handleOptionClick = (option: string) => {
        if (selectedFilterOptions?.includes(option)) {
            setSelectedFilterOptions(selectedFilterOptions.filter((selectedOption) => selectedOption !== option));
        } else {
            setSelectedFilterOptions([...selectedFilterOptions, option]);
        }
    };

    useEffect(() => {
        if (selectedFilterOptions) {
            onFilterChange && onFilterChange(selectedFilterOptions);
        }
    }, [selectedFilterOptions]);

    return (
        <>
            {options?.length > 0 && (
                <DsFlex gap={'16px'} flexWrap="wrap" {...attr}>
                    {options?.map((option, index) => (
                        <DsTag
                            key={index}
                            onClick={() => {
                                handleOptionClick(option),
                                    mixPanelProps &&
                                        eventTrack('CLIQUE BOTÃO', {
                                            nome_filtro: option,
                                            ...mixPanelProps,
                                        });
                            }}
                            background={selectedFilterOptions?.includes(option) ? 'var(--lightGrey)' : 'var(--white)'}
                            border={`1px solid ${
                                selectedFilterOptions?.includes(option) ? 'var(--frameGrey)' : 'var(--frameGrey)'
                            }`}
                            height={'36px'}
                            _hover={{
                                bgColor: 'var(--frameGrey)',
                                border: '1px solid var(--inactive)',
                            }}
                        >
                            <DsFlex alignItems={'center'} gap="9px">
                                {option}
                                {selectedFilterOptions?.includes(option) && <DsIcon icon="close" size="xsmall" />}
                            </DsFlex>
                        </DsTag>
                    ))}
                </DsFlex>
            )}
        </>
    );
};

export default DsChips;
