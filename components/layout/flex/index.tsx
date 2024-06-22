import { forwardRef } from 'react';

import type { DsFlexType } from './types';

import ComponentMounter from '../../core/utils/component-mounter';

const DsFlex: React.FC<DsFlexType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;
    const { align, justify, wrap, direction } = attr;

    attr.display = attr.display || 'flex';
    attr.alignItems = align || attr.alignItems;
    attr.justifyContent = justify || attr.justifyContent;
    attr.flexWrap = wrap || attr.flexWrap;
    attr.flexDirection = direction || attr.flexDirection;

    return (
        <ComponentMounter as={attr.as || 'div'} ref={ref} {...attr}>
            {children}
        </ComponentMounter>
    );
});

export default DsFlex;
