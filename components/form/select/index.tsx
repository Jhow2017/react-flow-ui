import type { DsSelectType } from './types';

import { DsBox, DsFlex, DsGrid, DsLabel, DsList, DsListItem } from '../../../layout';
import { forwardRef, useRef, useState } from 'react';
import { DsButton, DsErrorMessage } from '../../global';
import { DsText } from '../../typography';
import onClickOutside from '../../../core/utils/onClickOutside';
import DsInput from '../input';
import LiqiLogoGif from '../../../assets/gifs/loading-icon-liqi.gif';
import Image from 'next/image';
import { DsIcon } from 'design-system/components/global';

const DsSelect: React.FC<DsSelectType> = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>('');

    const baseRef = useRef<HTMLDivElement>(null),
        { ...attr } = props,
        filteredList = attr.optionsArray?.filter((option) =>
            option.label
                .toLocaleLowerCase()
                .replace(/ /g, '')
                .includes(searchInput?.toLocaleLowerCase().replace(/ /g, '')),
        );

    onClickOutside(baseRef, () => setIsOpen(false));

    return (
        <DsBox
            ref={ref || baseRef}
            position="relative"
            width={attr.w || attr.width || '100%'}
            pointerEvents={attr.disabled ? 'none' : 'all'}
        >
            <DsButton
                type="button"
                variant="default"
                onClick={() => {
                    if (attr.setIsOpen) return attr.setIsOpen((prev) => !prev);
                    setIsOpen((prev) => !prev);
                }}
                display="flex"
                alignItems="center"
                position="relative"
                justifyContent="space-between"
                p={
                    (attr.size === 'small' && '5px 12px') ||
                    (attr.size === 'medium' && '11px 12px') ||
                    (attr.size === 'large' && '19.5px 12px') ||
                    '11px 12px'
                }
                border={`1px solid ${(attr.error && 'var(--ruby)') || 'var(--frameGrey)'}`}
                borderRadius={attr.size === 'small' ? '6px' : '10px'}
                background="var(--white)"
                outline="none"
                color="var(--headline)"
                width="100% !important"
                transition="all 0.2s cubic-bezier(0.4,0,0.2,1)"
                _css={{
                    sm: `
                            &:focus label { color: var(--writer) !important; };
                            ${
                                !attr.error
                                    ? '&:focus { border-color: var(--writer); & + label { color: var(--writer); } }'
                                    : ''
                            }
                            ${
                                attr.value
                                    ? `
                                    label { top: 0 !important; font-size: ${
                                        attr.size === 'large' ? '14px' : '12px'
                                    }; left: 7px; ${attr.error ? 'color: var(--ruby) !important' : ''} };
                                     `
                                    : ''
                            }
                            ${attr.disabled ? 'div + svg path { fill: var(--inactive) } ' : ''} }
                        `,
                    ...attr._css,
                }}
            >
                <DsFlex
                    align="center"
                    gap="8px"
                    overflow="hidden"
                    _css={{
                        sm: `svg { width: 24px; height: 24px }`,
                    }}
                >
                    {attr.optionsArray?.find((option) => option.value === attr.value)?.icon}
                    <DsText
                        variant="normal"
                        size="medium"
                        cursor="pointer"
                        color={attr.disabled ? 'var(--inactive)' : 'var(--additionalBlack)'}
                        fontSize={attr.size === 'large' ? '16px' : '14px'}
                        overflow="hidden"
                        _css={{ sm: 'white-space: nowrap; text-overflow: ellipsis' }}
                    >
                        {attr.optionsArray?.find((option) => option.value === attr.value)?.label}
                    </DsText>
                </DsFlex>
                <DsIcon icon="sort-down" size="small" />
                <DsLabel
                    htmlFor={attr.id || ''}
                    position="absolute"
                    top={
                        (attr.size === 'small' && '17px') ||
                        (attr.size === 'medium' && '22px') ||
                        (attr.size === 'large' && '32px') ||
                        '22px'
                    }
                    left="13px"
                    transform="translateY(-50%)"
                    bgColor="var(--white)"
                    padding="0 4px"
                    fontSize={attr.size === 'large' ? '16px' : '14px'}
                    transition="all .2s cubic-bezier(0.4,0,0.2,1)"
                    lineHeight="14px"
                    color={(attr.error && 'var(--ruby)') || (attr.disabled && 'var(--inactive)') || 'var(--writer)'}
                    pointerEvents="none"
                    _css={{ sm: 'transform-origin: bottom left;' }}
                >
                    {attr.label}
                </DsLabel>
            </DsButton>
            {attr.error ? (
                <DsErrorMessage htmlFor={attr.id || ''} mt="6px">
                    {attr.error}
                </DsErrorMessage>
            ) : (
                attr.supportLabel && (
                    <DsLabel htmlFor={attr.id || ''} color="var(--placeGrey)" mt="6px" display="inline-block">
                        {attr.supportLabel}
                    </DsLabel>
                )
            )}
            {(isOpen || attr.isOpen) && !attr.disabled && (
                <DsBox
                    overflow="hidden"
                    borderRadius={attr.size === 'small' ? '6px' : '10px'}
                    bgColor="var(--white)"
                    border="1px solid var(--frameGrey)"
                    left="0"
                    position="absolute"
                    top={
                        (attr.size === 'small' && '42px') ||
                        (attr.size === 'medium' && '54px') ||
                        (attr.size === 'large' && '71px') ||
                        '54px'
                    }
                    width="100%"
                    zIndex="1"
                >
                    {attr.hasSearch && (
                        <DsBox as="span" p="16px" display="block">
                            <DsInput
                                name="searchInput"
                                id="searchInput"
                                type="search"
                                value={searchInput}
                                size="small"
                                label="Buscar"
                                w="100%"
                                autoComplete="off"
                                onChange={(e) => setSearchInput((e.currentTarget as HTMLInputElement).value)}
                            />
                        </DsBox>
                    )}
                    {attr.onSearchUpdate && (
                        <DsBox as="span" p="16px" display="block">
                            <DsInput
                                name="searchInput"
                                id="searchInput"
                                type="search"
                                size="small"
                                label="Search"
                                w="100%"
                                autoComplete="off"
                                onChange={(e) =>
                                    !!attr.onSearchUpdate &&
                                    attr.onSearchUpdate((e.currentTarget as HTMLInputElement).value)
                                }
                            />
                        </DsBox>
                    )}
                    {attr.loading ? (
                        <DsGrid as="span" pb="16px" placeContent="center">
                            <Image src={LiqiLogoGif} width={65} height={65} alt="Carregando..." />
                        </DsGrid>
                    ) : (
                        <DsList
                            maxH={'240px'}
                            overflow="auto"
                            borderRadius={attr.size === 'small' ? '6px' : '10px'}
                            listStyle="none"
                        >
                            {filteredList?.map(({ key, label, supportLabel, value, disabled, icon }) => (
                                <DsListItem
                                    key={key}
                                    overflow="hidden"
                                    _css={{ sm: 'white-space: nowrap; text-overflow: ellipsis' }}
                                >
                                    <DsButton
                                        p="10.5px 16px"
                                        cursor="pointer"
                                        w="100%"
                                        border="none"
                                        bgColor={attr.value === value ? 'var(--frameGrey)' : 'var(--white)'}
                                        textAlign="left"
                                        fontWeight="normal"
                                        pointerEvents={disabled ? 'none' : 'auto'}
                                        _hover={{ bgColor: 'var(--lightGrey)' }}
                                        variant="default"
                                        type="button"
                                        gap="8px"
                                        display="flex"
                                        alignItems="center"
                                        overflow="hidden"
                                        _css={{ sm: 'white-space: nowrap; text-overflow: ellipsis' }}
                                        onClick={() => {
                                            attr.onOptionSelected(value);
                                            if (attr.setIsOpen) return attr.setIsOpen((prev) => false);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {icon && icon}
                                        <DsBox w="calc(100% - 24px)">
                                            <DsText
                                                display="block"
                                                w="100%"
                                                size="small"
                                                color={disabled ? 'var(--inactive)' : 'var(--writer)'}
                                                _css={{ sm: 'white-space: nowrap; text-overflow: ellipsis' }}
                                                style={{
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {label}
                                            </DsText>

                                            {supportLabel && (
                                                <DsText
                                                    display="block"
                                                    w="100%"
                                                    size="xsmall"
                                                    color={disabled ? 'var(--inactive)' : 'var(--decorGrey)'}
                                                    _css={{ sm: 'white-space: nowrap; text-overflow: ellipsis' }}
                                                    style={{
                                                        overflow: 'hidden',
                                                        whiteSpace: 'nowrap',
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    {supportLabel}
                                                </DsText>
                                            )}
                                        </DsBox>
                                    </DsButton>
                                </DsListItem>
                            ))}
                        </DsList>
                    )}
                </DsBox>
            )}
        </DsBox>
    );
});

export default DsSelect;
