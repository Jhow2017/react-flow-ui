import { forwardRef } from 'react';

import ComponentMounter from 'design-system/core/utils/component-mounter';
import { ComponentMounterType } from '../accordion/types';

const DsContainer: React.FC<ComponentMounterType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;
    return (
        <ComponentMounter
            as="div"
            ref={ref}
            _styles={{
                display: 'flex',
                margin: '0 auto',
                width: '100%',
                maxWidth: { sm: `100%`, md: `1128px` },
                ...attr,
            }}
            {...attr}
        >
            {children}
        </ComponentMounter>
    );
});

export default DsContainer;
