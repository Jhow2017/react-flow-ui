import { forwardRef } from 'react';

import type { DsErrorMessageType } from './types';

import { useCustomTheme } from '@ctx/theme';

import ComponentMounter from '../../../core/utils/component-mounter';

// import ExclamationCircleIcon from '../../../assets/icons/exclamation-circle.svg';
import { DsIcon } from 'design-system/components/global';

const DsErrorMessage: React.FC<DsErrorMessageType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    const { theme } = useCustomTheme();

    return (
        <ComponentMounter
            as="label"
            ref={ref}
            _styles={{
                color: theme === 'dark' ? 'var(--lightRuby)' : 'var(--ruby)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--secondaryFont)',
                fontSize: '14px',
                ...attr,
            }}
            _css={{ sm: 'svg { flex: none; }' }}
            {...attr}
        >
            <DsIcon icon="exclamation-circle" size="xsmall" color="var(--ruby)" />
            {children}
        </ComponentMounter>
    );
});

export default DsErrorMessage;
