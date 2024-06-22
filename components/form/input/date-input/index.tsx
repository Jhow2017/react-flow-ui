import type { DsInputType } from '../types';

import ComponentMounter from '../../../../core/utils/component-mounter';
import { DsBox, DsLabel } from '../../../../layout';

import DsErrorMessage from '../../../global/error-message';
import { DsIcon } from 'design-system/components/global';

const InputDate: React.FC<DsInputType> = (props) => {
    const { forwardedRef, ...attr } = props;

    return (
        <DsBox position="relative" width={attr.w || attr.width || ''}>
            <ComponentMounter
                as="input"
                ref={forwardedRef}
                _styles={{
                    p:
                        (attr.size === 'small' && '8.5px 12px') ||
                        (attr.size === 'medium' && '14.5px') ||
                        (attr.size === 'large' && '21.5px 21.5px') ||
                        '14.5px',
                    border: `1px solid ${attr.error ? 'var(--ruby)' : 'var(--frameGrey)'}`,
                    borderRadius: attr.size === 'small' ? '6px' : '10px',
                    background: attr.disabled ? 'var(--detached)' : 'var(--white)',
                    outline: 'none',
                    color: attr.disabled ? 'var(--inactive)' : 'var(--additionalBlack)',
                    fontFamily: 'var(--secondaryFont)',
                    fontSize: attr.size === 'large' ? '16px' : '14px',
                    width: '100% !important',
                    transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                    ...attr,
                }}
                placeholder={attr.label}
                _css={{
                    sm: `
                           &:not(:focus) + label { color: var(--writer) !important; };
                           &::-webkit-input-placeholder { color: transparent };
                           &:not(:placeholder-shown) + label { top: 0 !important; font-size: ${
                               attr.size === 'large' ? '14px' : '12px'
                           }; left: ${attr.size === 'large' ? '16.5px' : '8.5px'}; ${
                        attr.error ? 'color: var(--ruby) !important' : ''
                    } };
                            &:focus + label { top: 0 !important; font-size: ${
                                attr.size === 'large' ? '14px' : '12px'
                            }; left: ${attr.size === 'large' ? '16.5px' : '8.5px'}; };
                            ${
                                !attr.error
                                    ? '&:focus { border-color: var(--writer); & + label { color: var(--writer); } }'
                                    : ''
                            }
                        `,
                    ...attr._css,
                }}
                {...attr}
            />
            <DsLabel
                htmlFor={attr.id}
                position="absolute"
                top={
                    (attr.size === 'small' && '17px') ||
                    (attr.size === 'medium' && '23.5px') ||
                    (attr.size === 'large' && '30.5px') ||
                    '23.5px'
                }
                left={attr.size === 'large' ? '25px' : '12px'}
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
            <DsLabel
                htmlFor={attr.id}
                position="absolute"
                top={
                    (attr.size === 'small' && '19.5px') ||
                    (attr.size === 'medium' && '25px') ||
                    (attr.size === 'large' && '33px') ||
                    '25px'
                }
                right={attr.size === 'large' ? '18px' : '13px'}
                transform="translateY(-50%)"
                color={attr.error ? 'var(--ruby)' : 'var(--decorGrey)'}
            >
                <DsIcon size="small" icon="calendar-range-outline" background={props.background || 'var(--white)'} />
            </DsLabel>
            {attr.error ? (
                <DsErrorMessage htmlFor={attr.id} mt="6px">
                    {attr.error}
                </DsErrorMessage>
            ) : (
                attr.supportLabel && (
                    <DsLabel htmlFor={attr.id} color="var(--placeGrey)" mt="6px" display="inline-block">
                        {attr.supportLabel}
                    </DsLabel>
                )
            )}
        </DsBox>
    );
};

export default InputDate;
