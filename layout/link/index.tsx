/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from 'react'
import dynamic from 'next/dynamic'

import type { DsLinkType } from './types'

import ComponentMounter from '../../core/utils/component-mounter'
const Link = dynamic(() => import('next/link'))

const DsLink: React.FC<DsLinkType> = forwardRef((props, ref) => {
  const { children, ...attr } = props

  return (
    <Link href={attr.href} passHref legacyBehavior>
      <ComponentMounter
        as="a"
        ref={ref}
        _styles={{
          fontFamily: 'var(--secondaryFont)',
          color: 'var(--black)',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '21px',
          textDecoration: 'none',
          ...attr
        }}
        _hover={{ textDecoration: 'underline' }}
        {...attr}
      >
        {children}
      </ComponentMounter>
    </Link>
  )
})

export default DsLink
