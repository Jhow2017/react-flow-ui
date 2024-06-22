import { DsBox } from 'design-system/layout';
import { DsBoxType } from 'design-system/layout/box/types';
import { forwardRef } from 'react';

const DsDivider: React.FC<DsBoxType> = forwardRef((props, ref) => {
    const { ...attr } = props;

    return <DsBox as="hr" h="36px" w="1px" border="none" bgColor="var(--frameGrey)" m="0 16px" {...attr} />;
});

export default DsDivider;
