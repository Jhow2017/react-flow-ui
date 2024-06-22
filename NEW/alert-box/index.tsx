import { forwardRef } from 'react';

//types
import { DsAlertBoxType } from './types';

//Design-system
import ComponentMounter from 'design-system/core/utils/component-mounter';
import { DsText } from 'design-system/components/typography';
import DsDivider from '../divider';

const DsAlertBox: React.FC<DsAlertBoxType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter
            as="div"
            ref={ref}
            display={'flex'}
            gap={'12px'}
            p={'16px'}
            borderRadius="10px"
            border="1px solid var(--frameGrey);"
            {...attr}
        >
            <DsDivider
                w={'7px'}
                m={'0'}
                h={'auto'}
                borderRadius="80px"
                bg={
                    (attr.variant === 'danger' && 'var(--babyPink)') ||
                    (attr.variant === 'success' && 'var(--lightMint)') ||
                    (attr.variant === 'warning' && 'var(--sunny)') ||
                    (attr.variant === 'neutral' && 'var(--aquaBlue)')
                }
            />
            <DsText size={'small'} color="var(--writer)" variant="normal">
                {children}
            </DsText>
        </ComponentMounter>
    );
});

export default DsAlertBox;
