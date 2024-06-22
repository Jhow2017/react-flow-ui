import type { DsSwitcherType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';
import { DsBox, DsFlex, DsLabel } from '../../../layout';
import { forwardRef } from 'react';
import { DsText } from 'design-system/components/typography';

const DsSwitcher: React.FC<DsSwitcherType> = forwardRef((props, ref) => {
    const { ...attr } = props;

    return (
        <DsFlex flexDirection={attr.labelBefore ? 'row-reverse' : 'row'}>
            <DsLabel
                htmlFor={attr.id}
                _css={{ sm: 'input:checked + span { left: 26px; background-color: var(--liqiBlue) }' }}
                w="48px"
                h="24px"
                display="block"
                border={`1px solid ${attr.disabled ? 'var(--inactive)' : 'var(--frameGrey)'}`}
                borderRadius="34px"
                position="relative"
                cursor={attr.disabled ? 'default' : 'pointer'}
            >
                <ComponentMounter
                    as="input"
                    ref={ref}
                    _styles={{
                        display: 'none',
                        ...attr,
                    }}
                    type="checkbox"
                    {...attr}
                />
                <DsBox
                    as="span"
                    h="24px"
                    w="24px"
                    bgColor={attr.disabled ? 'var(--inactive)' : 'var(--decorGrey)'}
                    borderRadius="50%"
                    left="0"
                    top="50%"
                    transition="left 0.2s cubic-bezier(0.4,0,0.2,1), background-color 0.2s cubic-bezier(0.4,0,0.2,1)"
                    transform="translateY(-50%)"
                    position="absolute"
                />
            </DsLabel>

            {attr.label && (
                <DsLabel
                    htmlFor={attr.id}
                    lineHeight={'24px'}
                    cursor={attr.disabled ? 'default' : 'pointer'}
                    fontSize="16px"
                    position="relative"
                    color={(attr.disabled && 'var(--inactive)') || 'var(--writer)'}
                    marginLeft={attr.labelBefore ? '0' : '8px'}
                    marginRight={attr.labelBefore ? '8px' : '0'}
                >
                    {attr.label}
                </DsLabel>
            )}
        </DsFlex>
    );
});

export default DsSwitcher;
