/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'

import ComponentMounter, {
  ComponentMounterType
} from 'design-system/core/utils/component-mounter'

const DsContainer: React.FC<ComponentMounterType> = forwardRef((props, ref) => {
  const { children, ...attr } = props
  return (
    <ComponentMounter
      as="div"
      ref={ref}
      _styles={{
        display: 'flex',
        margin: '0 auto',
        width: '100%',
        maxWidth: { sm: '100%', md: '1185px' },
        ...attr
      }}
      {...attr}
    >
      {children}
    </ComponentMounter>
  )
})

export default DsContainer
