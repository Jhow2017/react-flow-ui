/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from 'react'

import type { DsTextType } from './types'

import ComponentMounter from '../../../core/utils/component-mounter'

const DsText: React.FC<DsTextType> = forwardRef((props, ref) => {
  const { children, ...attr } = props

  return (
    <ComponentMounter
      as={attr.as || 'p'}
      ref={ref}
      _styles={{
        fontFamily: 'var(--secondaryFont)',
        fontWeight: attr.variant === 'bold' ? '600' : '400',
        fontSize:
          (attr.size === 'xxlarge' && '1.5rem') ||
          (attr.size === 'xlarge' && '1.25rem') ||
          (attr.size === 'large' && '1.125rem') ||
          (attr.size === 'medium' && '1rem') ||
          (attr.size === 'small' && '0.875rem') ||
          (attr.size === 'xsmall' && '0.75rem') ||
          '1rem',
        lineHeight:
          (attr.size === 'xxlarge' && '2rem') ||
          (attr.size === 'xlarge' && '1.75rem') ||
          (attr.size === 'large' && '1.625rem') ||
          (attr.size === 'medium' && '1.5rem') ||
          (attr.size === 'small' && '1.375rem') ||
          (attr.size === 'xsmall' && '1.25rem') ||
          '1.5rem',
        color: attr.variant === 'bold' ? 'var(--amethystDeep)' : 'var(--white)',
        ...attr
      }}
      {...attr}
    >
      {children}
    </ComponentMounter>
  )
})

export default DsText
