import { forwardRef } from 'react';

import ComponentMounter from '../../core/utils/component-mounter';
import { DsListItemType, DsListType } from './types';

const DsList: React.FC<DsListType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter as={attr.as || 'ul'} ref={ref} {...attr}>
            {children}
        </ComponentMounter>
    );
});

const DsListItem: React.FC<DsListItemType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter as="li" ref={ref} {...attr}>
            {children}
        </ComponentMounter>
    );
});

export { DsList, DsListItem };
