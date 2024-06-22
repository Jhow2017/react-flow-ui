import { forwardRef } from 'react';

import type { DsFileType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';
import { DsBox, DsFlex, DsLabel } from '../../../layout';

import { DsIcon } from 'design-system/components/global';

const DsFile: React.FC<DsFileType> = forwardRef((props, ref) => {
    const { ...attr } = props;

    return (
        <DsBox position="relative" width={attr.w || attr.width || ''} pointerEvents={attr.disabled ? 'none' : 'all'}>
            <ComponentMounter
                as="input"
                type="file"
                ref={ref}
                _styles={{
                    display: 'none',
                    ...attr,
                }}
                placeholder={attr.label}
                _css={{
                    sm: `
                           &::-webkit-input-placeholder { color: transparent };
                           ${
                               attr.fileName
                                   ? `& + div label:first-of-type { top: 0 !important; left: 8px; font-size: ${
                                         attr.size === 'large' ? '14px' : '12px'
                                     } };`
                                   : ''
                           }
                           ${attr.error && !attr.fileName ? '& + div label { color: var(--writer) !important; }' : ''}
                        `,
                    ...attr._css,
                }}
                {...attr}
            />
            <DsFlex
                height={
                    (attr.size === 'small' && '36px') ||
                    (attr.size === 'medium' && '48px') ||
                    (attr.size === 'large' && '65px') ||
                    '48px'
                }
                pl={attr.size === 'large' ? '22px' : '12px'}
                border={`1px solid ${attr.error ? 'var(--ruby)' : 'var(--frameGrey)'}`}
                borderRadius={attr.size === 'small' ? '6px' : '10px'}
                background="var(--white)"
                outline="none"
                color="var(--headline)"
                fontFamily="var(--secondaryFont)"
                fontSize={attr.size === 'large' ? '16px' : '14px'}
                width="100% !important"
                transition="all 0.2s cubic-bezier(0.4,0,0.2,1)"
                align="center"
                justify="space-between"
            >
                <DsLabel
                    htmlFor={attr.id}
                    position="absolute"
                    top={
                        (attr.size === 'small' && '18px') ||
                        (attr.size === 'medium' && '24px') ||
                        (attr.size === 'large' && '31px') ||
                        '24px'
                    }
                    left={attr.size === 'large' ? '18px' : '12px'}
                    transform="translateY(-50%)"
                    bgColor="var(--white)"
                    padding="0 4px"
                    fontSize={attr.size === 'large' ? '16px' : '14px'}
                    transition="all .2s cubic-bezier(0.4,0,0.2,1)"
                    lineHeight="14px"
                    color={(attr.disabled && 'var(--inactive)') || (attr.error && 'var(--ruby)') || 'var(--writer)'}
                    pointerEvents="none"
                    _css={{ sm: 'transform-origin: bottom left;' }}
                >
                    {attr.label}
                </DsLabel>
                <span
                    style={{
                        color: attr.disabled ? 'var(--inactive)' : 'var(--writer)',
                        fontSize: '14px',
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontFamily: 'var(--secondaryFont)',
                        paddingRight: '8px',
                    }}
                >
                    {props.fileName || ''}
                </span>
                <DsLabel
                    htmlFor={attr.id}
                    borderRadius={attr.size === 'small' ? '6px' : '10px'}
                    p={
                        (attr.size === 'small' && '0 16px') ||
                        (attr.size === 'medium' && '0 24px') ||
                        (attr.size === 'large' && '0 22px') ||
                        '0 24px'
                    }
                    border={`2px solid ${attr.error ? 'var(--ruby)' : 'var(--frameGrey)'}`}
                    color={attr.disabled ? 'var(--inactive)' : 'var(--writer)'}
                    fontWeight="600"
                    fontSize={attr.size === 'large' ? '18px' : '14px'}
                    transition="cubic-bezier(0.4,0,0.2,1) 0.2s all"
                    height={
                        (attr.size === 'small' && '36px') ||
                        (attr.size === 'medium' && '48px') ||
                        (attr.size === 'large' && '65px') ||
                        '48px'
                    }
                    mr="-1px"
                    display="grid"
                    placeContent="center"
                    cursor="pointer"
                >
                    Selecionar
                </DsLabel>
            </DsFlex>
            {attr.error ? (
                <DsLabel
                    htmlFor={attr.id}
                    color="var(--ruby)"
                    display="inline-flex"
                    alignItems="center"
                    gap="5px"
                    mt="6px"
                >
                    <DsIcon icon="exclamation-circle" size="xsmall" color="var(--ruby)" />
                    {attr.error}
                </DsLabel>
            ) : (
                attr.supportLabel && (
                    <DsLabel htmlFor={attr.id} mt="6px" display="inline-block">
                        {attr.supportLabel}
                    </DsLabel>
                )
            )}
        </DsBox>
    );
});

export default DsFile;
