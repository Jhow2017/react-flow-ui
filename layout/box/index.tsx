/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from 'react'

import type { DsBoxType } from './types'

import ComponentMounter from '../../core/utils/component-mounter'

const DsBox: React.FC<DsBoxType> = forwardRef((props, ref) => {
  const { children, ...attr } = props

  return (
    <ComponentMounter as={attr.as || 'div'} ref={ref} {...attr}>
      {children}
    </ComponentMounter>
  )
})

export default DsBox
