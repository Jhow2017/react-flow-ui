import type { DsTextareaType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';
import { DsBox, DsLabel } from '../../../layout';
import DsErrorMessage from '../../global/error-message';
import { forwardRef } from 'react';

const DsTextarea: React.FC<DsTextareaType> = forwardRef((props, ref) => {
    const { ...attr } = props;
    const forcePlaceholder = { ...attr, placeholder: attr.label };

    return (
        <DsBox position="relative" width={attr.w || attr.width || ''} pointerEvents={attr.disabled ? 'none' : 'all'}>
            <ComponentMounter
                as="textarea"
                ref={ref}
                _styles={{
                    p:
                        (attr.size === 'small' && '7.5px 13px') ||
                        (attr.size === 'medium' && '8px 12px') ||
                        (attr.size === 'large' && '12px 16px') ||
                        '8px 12px',
                    height:
                        (attr.size === 'small' && '38px') ||
                        (attr.size === 'medium' && '60px') ||
                        (attr.size === 'large' && '76px') ||
                        '60px',
                    border: `1px solid ${attr.error ? 'var(--ruby)' : 'var(--frameGrey)'}`,
                    borderRadius: '10px',
                    outline: 'none',
                    color: attr.disabled ? 'var(--inactive)' : 'var(--additionalBlack)',
                    fontFamily: 'var(--secondaryFont)',
                    fontSize: '14px',
                    lineHeight: '22px',
                    width: '100% !important',
                    transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                    background: attr.disabled ? 'var(--detached)' : 'var(--white)',
                    ...attr,
                }}
                _css={{
                    sm: `
                    &::-webkit-scrollbar { display: block; width: 8px; };
                    &::-webkit-scrollbar-thumb {
                        background: var(--frameGrey); border-right: 3px solid white; border-radius: 6px;
                    };
                    resize: none;
                    ${!attr.disabled ? '&:not(:focus) + label { color: var(--writer) !important; }' : ''}
                    &::-webkit-input-placeholder { color: transparent };
                    &:not(:placeholder-shown) + label { top: 0 !important; font-size: ${
                        attr.size === 'large' ? '14px' : '12px'
                    }; left: ${attr.size === 'large' ? '14px' : '8.5px'}; ${
                        attr.error ? 'color: var(--ruby) !important' : ''
                    } };
                     &:focus + label { top: 0 !important; font-size: ${
                         attr.size === 'large' ? '14px' : '12px'
                     }; left: ${attr.size === 'large' ? '14px' : '8.5px'}; };
                     ${
                         !attr.error
                             ? '&:focus { border-color: var(--writer); & + label { color: var(--writer); } }'
                             : ''
                     }
                 `,
                    ...attr._css,
                }}
                {...forcePlaceholder}
            />
            <DsLabel
                htmlFor={attr.id}
                position="absolute"
                top={
                    (attr.size === 'small' && '17px') ||
                    (attr.size === 'medium' && '16px') ||
                    (attr.size === 'large' && '25px') ||
                    '16px'
                }
                left={attr.size === 'large' ? '18px' : '12px'}
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
            {attr.error ? (
                <DsErrorMessage htmlFor={attr.id}>{attr.error}</DsErrorMessage>
            ) : (
                attr.supportLabel && (
                    <DsLabel htmlFor={attr.id} color="var(--placeGrey)" display="inline-block">
                        {attr.supportLabel}
                    </DsLabel>
                )
            )}
        </DsBox>
    );
});

export default DsTextarea;
