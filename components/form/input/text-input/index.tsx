import type { DsInputType } from '../types';

import { useCustomTheme } from '@ctx/theme';

import ComponentMounter from '../../../../core/utils/component-mounter';
import { DsBox, DsLabel } from '../../../../layout';
import DsErrorMessage from '../../../global/error-message';

import { DsIcon } from 'design-system/components/global';

const InputText: React.FC<DsInputType> = (props) => {
    const { forwardedRef, ...attr } = props;
    const forceTypeText = { ...attr, type: 'text' };

    const { theme } = useCustomTheme();

    return (
        <DsBox position="relative" width={attr.w || attr.width || ''}>
            <ComponentMounter
                as="input"
                ref={forwardedRef}
                _styles={{
                    p:
                        attr.size === 'small'
                            ? '8.5px 12px'
                            : attr.size === 'medium'
                            ? '14.5px'
                            : attr.size === 'large'
                            ? '21.5px 21.5px'
                            : '14.5px',
                    border: `1px solid ${
                        attr.error
                            ? theme === 'dark'
                                ? 'var(--lightRuby)'
                                : 'var(--ruby)'
                            : theme === 'dark'
                            ? 'var(--writer)'
                            : 'var(--frameGrey)'
                    }`,
                    borderRadius: attr.size === 'small' ? '6px' : '10px',
                    background: attr.disabled
                        ? theme === 'dark'
                            ? 'var(--additionalBlack)'
                            : 'var(--detached)'
                        : theme === 'dark'
                        ? 'var(--additionalBlack)'
                        : 'var(--white)',
                    outline: 'none',
                    color: attr.disabled
                        ? theme === 'dark'
                            ? 'var(--overtone)'
                            : 'var(--inactive)'
                        : theme === 'dark'
                        ? 'var(--white)'
                        : 'var(--additionalBlack)',
                    fontFamily: 'var(--secondaryFont)',
                    fontSize: attr.size === 'large' ? '16px' : '14px',
                    width: '100% !important',
                    transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                    ...attr,
                }}
                placeholder={attr.label}
                _css={{
                    sm: `
                           ${
                               !attr.disabled
                                   ? `&:not(:focus) + label { color: ${
                                         theme === 'dark' ? 'var(--symbol)' : 'var(--writer)'
                                     } !important; }`
                                   : ''
                           }
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
                                    ? `&:focus { border-color: ${
                                          theme === 'dark' ? 'var(--white)' : 'var(--writer)'
                                      }; & + label { color: ${theme === 'dark' ? 'var(--white)' : 'var(--writer)'}; } }`
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
                    attr.size === 'small'
                        ? '17px'
                        : attr.size === 'medium'
                        ? '23.5px'
                        : attr.size === 'large'
                        ? '33px'
                        : '23.5px'
                }
                left={attr.size === 'large' ? '25px' : '12px'}
                transform="translateY(-50%)"
                bgColor={
                    (attr.disabled && (theme === 'dark' ? 'var(--additionalBlack)' : 'var(--detached)')) ||
                    (theme === 'dark' ? 'var(--additionalBlack)' : 'var(--white)')
                }
                padding="0 4px"
                fontSize={attr.size === 'large' ? '16px' : '14px'}
                transition="all .2s cubic-bezier(0.4,0,0.2,1)"
                lineHeight="14px"
                color={
                    (attr.error && (theme === 'dark' ? 'var(--lightRuby)' : 'var(--ruby)')) ||
                    (attr.disabled && (theme === 'dark' ? 'var(--overtone)' : 'var(--inactive)')) ||
                    'var(--decorGrey)'
                }
                pointerEvents="none"
                _css={{ sm: 'transform-origin: bottom left;' }}
            >
                {attr.label}
            </DsLabel>
            {attr.type === 'search' && (
                <DsLabel
                    htmlFor={attr.id}
                    position="absolute"
                    top={
                        attr.size === 'small'
                            ? '19.5px'
                            : attr.size === 'medium'
                            ? '25px'
                            : attr.size === 'large'
                            ? '33px'
                            : '25px'
                    }
                    right={attr.size === 'large' ? '18px' : '13px'}
                    transform="translateY(-50%)"
                    color={attr.error ? 'var(--ruby)' : 'var(--decorGrey)'}
                >
                    <DsIcon size="small" icon="search" color="var(--tagGrey)" />
                </DsLabel>
            )}
            {attr.error ? (
                <DsErrorMessage htmlFor={attr.id} mt="6px">
                    {attr.error}
                </DsErrorMessage>
            ) : (
                attr.supportLabel && (
                    <DsLabel
                        htmlFor={attr.id}
                        color={theme === 'dark' ? 'var(--frameGrey)' : 'var(--placeGrey)'}
                        mt="6px"
                        display="inline-block"
                    >
                        {attr.supportLabel}
                    </DsLabel>
                )
            )}
        </DsBox>
    );
};

export default InputText;
