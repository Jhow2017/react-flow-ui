import NumberFormat from 'react-number-format';

import type { DsInputType } from '../types';

import ComponentMounter from '../../../../core/utils/component-mounter';
import DsErrorMessage from '../../../global/error-message';
import { DsBox, DsLabel } from '../../../../layout';

const InputNumber: React.FC<DsInputType> = (props) => {
    const { forwardedRef, ...attr } = props;
    const forceTypeText = {
        thousandSeparator: '.',
        decimalSeparator: ',',
        decimalScale: 2,
        ...attr,
        type: 'text',
    };

    return (
        <DsBox position="relative" width={attr.w || attr.width || ''}>
            <ComponentMounter
                as={NumberFormat as any}
                ref={forwardedRef}
                _styles={{
                    p:
                        (attr.size === 'small' && '8.5px 12px') ||
                        (attr.size === 'medium' && '14.5px') ||
                        (attr.size === 'large' && '21.5px 21.5px'),
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
                            ${!attr.disabled ? '&:not(:focus) + label { color: var(--writer) !important; }' : ''}
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
                {...forceTypeText}
            />
            <DsLabel
                htmlFor={attr.id}
                position="absolute"
                top={
                    (attr.size === 'small' && '17px') ||
                    (attr.size === 'medium' && '23.5px') ||
                    (attr.size === 'large' && '33px')
                }
                left={attr.size === 'large' ? '25px' : '12px'}
                transform="translateY(-50%)"
                bgColor="var(--white)"
                padding="0 4px"
                fontSize={attr.size === 'large' ? '16px' : '14px'}
                transition="all .2s cubic-bezier(0.4,0,0.2,1)"
                lineHeight="14px"
                color={(attr.error && 'var(--ruby)') || (attr.disabled && 'var(--inactive)') || 'var(--decorGrey)'}
                pointerEvents="none"
                _css={{ sm: 'transform-origin: bottom left;' }}
            >
                {attr.label}
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

export default InputNumber;
