import { forwardRef } from 'react';

import type { DsBorderBoxType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';

const DsBorderBox: React.FC<DsBorderBoxType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter
            as={attr.as || 'div'}
            ref={ref}
            _styles={{
                border: '1px solid var(--frameGrey)',
                borderRadius: '10px',
                p: '16px',
                ...attr,
            }}
            {...attr}
        >
            {children}
        </ComponentMounter>
    );
});

export default DsBorderBox;
