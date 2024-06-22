/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from 'react'

import type { DsTitleType } from './types'

import ComponentMounter from '../../../core/utils/component-mounter'

const DsTitle: React.FC<DsTitleType> = forwardRef((props, ref) => {
  const { children, ...attr } = props

  return (
    <ComponentMounter
      as={attr.as}
      ref={ref}
      _styles={{
        fontFamily: 'var(--primaryFont)',
        fontWeight: '600',
        fontSize:
          (attr.size === 'xxxlarge' && '2.5rem') ||
          (attr.size === 'xxlarge' && '2rem') ||
          (attr.size === 'xlarge' && '1.5rem') ||
          (attr.size === 'large' && '1.25rem') ||
          (attr.size === 'medium' && '1.125rem') ||
          (attr.size === 'small' && '1rem') ||
          (attr.as === 'h1' && '1.5rem') ||
          (attr.as === 'h2' && '1.25rem') ||
          (attr.as === 'h3' && '1rem') ||
          '1rem',
        lineHeight:
          (attr.size === 'xxxlarge' && '3rem') ||
          (attr.size === 'xxlarge' && '2.375rem') ||
          (attr.size === 'xlarge' && '2rem') ||
          (attr.size === 'large' && '1.75rem') ||
          (attr.size === 'medium' && '1.625rem') ||
          (attr.size === 'small' && '1.5rem') ||
          (attr.as === 'h1' && '2rem') ||
          (attr.as === 'h2' && '1.75rem') ||
          (attr.as === 'h3' && '1.5rem') ||
          '1.5rem',
        color: 'var(--amethystDeep)',
        ...attr
      }}
      {...attr}
    >
      {children}
    </ComponentMounter>
  )
})

export default DsTitle
