import type { DsRadioType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';
import { DsBox, DsLabel } from '../../../layout';
import { forwardRef } from 'react';

const DsRadio: React.FC<DsRadioType> = forwardRef((props, ref) => {
    const { ...attr } = props;

    return (
        <DsBox
            position="relative"
            overflow="hidden"
            display="inline-block"
            pointerEvents={attr.disabled ? 'none' : 'all'}
        >
            <ComponentMounter
                as="input"
                ref={ref}
                _styles={{
                    position: 'absolute',
                    top: '50%',
                    left: '-999999px',
                    transform: 'translateY(-50%)',
                    ...attr,
                }}
                _css={{
                    sm: `
                        &:checked + label span {
                            border: 1px solid ${
                                (attr.disabled && 'var(--frameGrey)') ||
                                (attr.error && 'var(--ruby)') ||
                                'var(--liqiBlue)'
                            };
                            &:before {
                                transform: scale(1);
                            }
                        }
                    `,
                    ...attr._css,
                }}
                placeholder={attr.label}
                type="radio"
                {...attr}
            />
            <DsLabel
                htmlFor={attr.id}
                display="inline-flex"
                alignItems="center"
                cursor="pointer"
                fontSize="16px"
                color={(attr.disabled && 'var(--inactive)') || (attr.error && 'var(--ruby)') || 'var(--writer)'}
            >
                <DsBox
                    as="span"
                    maxW="16px"
                    maxH="16px"
                    minW="16px"
                    minH="16px"
                    marginRight={attr.label ? '8px' : ''}
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background={attr.disabled ? 'var(--detached)' : 'var(--white)'}
                    border={`1px solid ${(attr.error && 'var(--ruby)') || 'var(--frameGrey)'}`}
                    _css={{
                        sm: `
                            &:before {
                                content: '';
                                width: 8px;
                                height: 8px;
                                border-radius: 50%;
                                background: ${
                                    (attr.disabled && 'var(--frameGrey)') ||
                                    (attr.error && 'var(--ruby)') ||
                                    'var(--liqiBlue)'
                                };
                                transform: scale(0);
                                transition: cubic-bezier(0.4,0,0.2,1) 0.2s all;
                            }
                        `,
                        ...attr._css,
                    }}
                />
                {attr.label && attr.label}
            </DsLabel>
        </DsBox>
    );
});

export default DsRadio;
