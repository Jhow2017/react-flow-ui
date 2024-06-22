import { forwardRef } from 'react';

import type { DsFormType } from './types';

import ComponentMounter from '../../core/utils/component-mounter';

const DsForm: React.FC<DsFormType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter as="form" ref={ref} {...attr}>
            {children}
        </ComponentMounter>
    );
});

export default DsForm;
