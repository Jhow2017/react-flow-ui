/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from 'react'

import ComponentMounter, {
  ComponentMounterType
} from 'design-system/core/utils/component-mounter'

const DsSection: React.FC<ComponentMounterType> = forwardRef((props, ref) => {
  const { children, ...attr } = props
  return (
    <ComponentMounter
      as="section"
      ref={ref}
      _styles={{
        position: 'relative',
        width: '100%',
        padding: { sm: '40px 24px', md: '40px 24px', lg: '80px 90px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        ...attr
      }}
      {...attr}
    >
      {children}
    </ComponentMounter>
  )
})

export default DsSection
