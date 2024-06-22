import { forwardRef } from 'react';
import type { DsCheckboxType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';
import { DsBox, DsLabel } from '../../../layout';

import { DsIcon } from 'design-system/components/global';

const DsCheckbox: React.FC<DsCheckboxType> = forwardRef((props, ref) => {
    const { ...attr } = props;

    return (
        <DsBox
            position="relative"
            overflow="hidden"
            display="inline-block"
            minW="26px"
            pointerEvents={attr.disabled ? 'none' : 'all'}
        >
            <ComponentMounter
                as="input"
                ref={ref}
                _styles={{
                    width: '0px',
                    height: '0px',
                    top: '0px',
                    left: '-999999px',
                    opacity: '0',
                    visibility: 'hidden',
                    ...attr,
                }}
                _css={{
                    sm: `
                        &:checked {
                            & + label {
                                [data-checkbox-icon] {
                                    opacity: ${attr.disabled ? '.5' : '1'};
                                    transform: translateY(-50%);
                                }
                            }
                        }
                    `,
                    ...attr._css,
                }}
                placeholder={attr.label}
                type="checkbox"
                {...attr}
            />
            <DsLabel
                htmlFor={attr.id}
                display="flex"
                alignItems="flex-start"
                lineHeight={'26px'}
                cursor="pointer"
                fontSize="16px"
                position="relative"
                color={(attr.disabled && 'var(--inactive)') || 'var(--writer)'}
                _css={{
                    sm: `
                        &:before {
                            content: '';
                            width: 24px;
                            height: 24px;
                            min-width: 24px;
                            min-height: 24px;
                            flex: none;
                            border-radius: 6px;
                            margin-right: ${attr.label ? '8px' : '0px'};
                            cursor: pointer;
                            border: 1px solid ${
                                (attr.disabled && 'var(--frameGrey)') ||
                                (attr.error && 'var(--ruby)') ||
                                'var(--symbol)'
                            };
                            ${attr.disabled ? 'background: var(--detached);' : ''}
                        }

                        span a {
                            color:var(--liqiBlue);
                            font-weight: 700;
                            text-decoration:none;
                        }
                `,
                    lg: `
                        span a:hover {
                            text-decoration:underline;
                        }
                    `,
                }}
            >
                <DsIcon
                    as="span"
                    size="small"
                    icon="check"
                    color="var(--liqiBlue)"
                    position="absolute"
                    top="14px"
                    left="2px"
                    opacity="0"
                    transition="0.2s all cubic-bezier(0.4,0,0.2,1)"
                    data-checkbox-icon
                />
                {/* <CheckIcon width="24" height="24" /> */}
                <span>{attr.label}</span>
            </DsLabel>
        </DsBox>
    );
});

export default DsCheckbox;
