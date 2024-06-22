import { forwardRef } from 'react';

import type { DsTagType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';

const DsTag: React.FC<DsTagType> = forwardRef((props, ref) => {
    const { children, onClick, ...attr } = props;
    const secureOnClickValidation = { ...attr, onClick: !attr.disabled && onClick };

    return (
        <ComponentMounter
            as="button"
            ref={ref}
            _styles={{
                color: attr.disabled ? 'var(--inactive)' : 'var(--headline)',
                fontFamily: 'var(--secondaryFont)',
                fontSize: '0.875rem',
                fontWeight: '400',
                lineHeight: '22px',
                padding: '7px 16px',
                background: attr.active ? 'var(--backgroundTagFilter)' : 'transparent',
                borderRadius: '6px',
                border: `1px solid ${attr.active ? 'var(--borderTagFilter)' : 'var(--frameGrey)'}`,
                pointerEvents: attr.disabled ? 'none' : 'all',
                cursor: 'pointer',
                transition: 'all 0.17s ease',
            }}
            _hover={{ bgColor: 'var(--borderTagFilter)', border: '1px solid var(--borderHoverTagFilter)' }}
            {...secureOnClickValidation}
        >
            {children}
        </ComponentMounter>
    );
});

export default DsTag;
