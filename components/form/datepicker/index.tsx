import type { DsDatepickerType } from './types';

import { DsBox, DsLabel } from '../../../layout';
import { forwardRef, useState } from 'react';
import { DsButton, DsErrorMessage } from '../../global';
import { DsText } from '../../typography';
import { DatePicker } from '@atlaskit/datetime-picker';
import { DsIcon } from 'design-system/components/global';
import { useDetectClickOutside } from 'react-detect-click-outside';

const DsDatepicker: React.FC<DsDatepickerType> = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { ...attr } = props;

    const clickOutDatepicker = useDetectClickOutside({
        onTriggered: () => {
            setIsOpen(false);
        },
    });

    return (
        <DsBox
            ref={ref || clickOutDatepicker}
            position="relative"
            width={attr.w || attr.width || ''}
            _css={{
                sm: `
                    button[data-selected] {
                        background: var(--liqiBlue);
                        font-weight: 600;
                    }
                    button[data-focused] {
                        border: none;
                    }
                    button[data-prev-selected] {
                        background: var(--lightGrey);
                    }
                    [class*='-Menu'] {
                        border-radius: 12px;
                        overflow: hidden;
                    }
                    [class*='-control'] {
                        display: none;
                    }
                `,
            }}
        >
            <DsButton
                type="button"
                variant="default"
                onClick={() => (attr.setIsOpen ? attr.setIsOpen((prev) => !prev) : setIsOpen((prev) => !prev))}
                display="flex"
                alignItems="center"
                position="relative"
                justifyContent="space-between"
                p={
                    (attr.size === 'small' && '5px 13px') ||
                    (attr.size === 'medium' && '11px') ||
                    (attr.size === 'large' && '19.5px 21px') ||
                    '11px'
                }
                border={`1px solid ${attr.error ? 'var(--ruby)' : 'var(--frameGrey)'}`}
                borderRadius="10px"
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
                                attr.displayedValue
                                    ? `
                                    label { top: 0 !important; font-size: ${
                                        attr.size === 'large' ? '14px' : '12px'
                                    }; left: 7px; ${attr.error ? 'color: var(--ruby) !important' : ''} };
                                     `
                                    : ''
                            }
                        `,
                    ...attr._css,
                }}
            >
                <DsText
                    variant="normal"
                    size="medium"
                    cursor="pointer"
                    paddingRight="8px"
                    fontSize={attr.size === 'large' ? '16px' : '14px'}
                >
                    {attr.displayedValue}
                </DsText>
                <DsIcon size="small" icon="calendar-range-outline" />
                <DsLabel
                    htmlFor={attr.id || ''}
                    position="absolute"
                    top={
                        (attr.size === 'small' && '17px') ||
                        (attr.size === 'medium' && '22px') ||
                        (attr.size === 'large' && '29.5px') ||
                        '22px'
                    }
                    left={attr.size === 'large' ? '18px' : '13px'}
                    transform="translateY(-50%)"
                    bgColor="var(--white)"
                    padding="0 4px"
                    fontSize={attr.size === 'large' ? '16px' : '14px'}
                    transition="all .2s cubic-bezier(0.4,0,0.2,1)"
                    lineHeight="14px"
                    color={attr.error ? 'var(--ruby)' : 'var(--decorGrey)'}
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
            <DatePicker
                locale={'pt-BR'}
                onChange={(e) => {
                    if (!e) return;
                    attr.onDateSelect(e);
                    attr.setIsOpen ? attr.setIsOpen((prev) => false) : setIsOpen(false);
                }}
                isOpen={isOpen}
                {...attr}
            />
        </DsBox>
    );
});

export default DsDatepicker;
