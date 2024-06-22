import { forwardRef } from 'react';
import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import type { DsLinkType } from './types';

import ComponentMounter from '../../core/utils/component-mounter';

const DsLink: React.FC<DsLinkType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <Link href={attr.href} passHref legacyBehavior>
            <ComponentMounter
                as="a"
                ref={ref}
                _styles={{
                    fontFamily: 'var(--secondaryFont)',
                    color: 'var(--liqiBlue)',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    textDecoration: 'none',
                    ...attr,
                }}
                _hover={{ textDecoration: 'underline' }}
                {...attr}
            >
                {children}
            </ComponentMounter>
        </Link>
    );
});

export default DsLink;
