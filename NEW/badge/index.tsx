import { forwardRef } from 'react';
import { DsBox } from 'design-system/layout';
import { DsBoxType } from 'design-system/layout/box/types';

const DsBadge: React.FC<DsBoxType> = forwardRef((props, ref) => {
    const { ...attr } = props;
    return (
        <DsBox
            as="span"
            ref={ref}
            width="12px"
            height="12px"
            background="var(--dodgerBlue)"
            borderRadius="2px"
            {...attr}
        />
    );
});

export default DsBadge;
