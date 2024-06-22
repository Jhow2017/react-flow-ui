import React from 'react';
import { forwardRef } from 'react';

import type { DsStampType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';

const DsStamp: React.FC<DsStampType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter
            as={attr.as || 'span'}
            ref={ref}
            _styles={{
                display: 'inline-block',
                backgroundColor: `var(--${attr.variant})`,
                p: '6px 8px',
                borderRadius: '6px',
                textTransform: attr.toUpperCase ? 'uppercase' : 'none',
                color:
                    ((attr.variant === 'hoverRuby' || attr.variant === 'ocean' || attr.variant === 'writer') &&
                        'var(--white)') ||
                    'var(--additionalBlack)',
                lineHeight: '0.75rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                fontFamily: 'var(--secondaryFont)',
                ...attr,
            }}
            {...attr}
        >
            {children}
        </ComponentMounter>
    );
});

export default DsStamp;
