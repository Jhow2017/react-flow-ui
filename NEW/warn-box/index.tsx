import { forwardRef } from 'react';

//types
import { DsToastType } from './types';

//Design-system
import ComponentMounter from 'design-system/core/utils/component-mounter';
import { DsIcon } from 'design-system/components/global';
import { DsText } from 'design-system/components/typography';

const DsWarnBox: React.FC<DsToastType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <ComponentMounter
            as="div"
            ref={ref}
            _styles={{
                h: '72px',
                w: { sm: '100%', md: '100%' },
                borderRadius: '10px',
                p: '16px',
                bg:
                    (attr.variant === 'danger' && 'var(--babyPink)') ||
                    (attr.variant === 'success' && 'var(--lightMint)') ||
                    (attr.variant === 'warning' && 'var(--butterYellow)') ||
                    (attr.variant === 'neutral' && 'var(--aquaBlue)'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: '12px',
                ...attr,
            }}
            {...attr}
        >
            <DsIcon
                icon="alert"
                borderRadius="10px 0px 0px 10px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _css={{
                    sm: `
                        svg {
                            circle { stroke: var(--selectiveYellow) ; fill: ${
                                attr.variant === 'danger' ? 'var(--white)' : 'var(--selectiveYellow)'
                            }},
                        path { stroke:var(--white); fill: ${
                            attr.variant === 'danger' ? 'var(--white)' : 'var(--selectiveYellow)'
                        }}
                    `,
                }}
            />

            <DsText size={props?.fontSize || 'small'} color="var(--writer)" variant="normal">
                {children}
            </DsText>
        </ComponentMounter>
    );
});

export default DsWarnBox;
