import { forwardRef } from 'react';
import type { DsInputType } from './types';

import InputText from './text-input';
import InputDate from './date-input';
import InputNumber from './number-input';
import InputPassword from './password-input';

const DsInput: React.FC<DsInputType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <>
            {attr.type === 'text' || attr.type === 'search' ? (
                <InputText forwardedRef={ref} {...attr} />
            ) : attr.type === 'date' ? (
                <InputDate forwardedRef={ref} {...attr} />
            ) : attr.type === 'number' ? (
                <InputNumber forwardedRef={ref} {...attr} />
            ) : attr.type === 'password' ? (
                <InputPassword forwardedRef={ref} {...attr} />
            ) : (
                <span style={{ margin: 10 }}>type currently not supported</span>
            )}
        </>
    );
});

export default DsInput;
