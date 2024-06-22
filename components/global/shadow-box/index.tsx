import { forwardRef } from 'react';

import type { DsShadowBoxType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';

const DsShadowBox: React.FC<DsShadowBoxType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter
            as={attr.as || 'section'}
            ref={ref}
            _styles={{
                borderRadius: '10px',
                p: { sm: '24px 16px', md: '24px', lg: '32px' },
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
                backgroundColor: 'var(--white)',
                ...attr,
            }}
            {...attr}
        >
            {children}
        </ComponentMounter>
    );
});

export default DsShadowBox;
