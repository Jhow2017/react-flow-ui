import { forwardRef } from 'react';

import type { DsLabelType } from './types';

import ComponentMounter from '../../core/utils/component-mounter';

const DsLabel: React.FC<DsLabelType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter
            as="label"
            _styles={{
                fontSize: '14px',
                fontFamily: 'var(--secondaryFont)',
                fontWeight: '400',
                lineHeight: '22px',
                color: 'var(--decorGrey)',
                ...attr,
            }}
            {...attr}
        >
            {children}
        </ComponentMounter>
    );
});

export default DsLabel;
