/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import Image, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

// types
import ComponentMounter from 'design-system/core/utils/component-mounter'
import { ComponentMounterType } from './types'
import useBreakpointPosition from 'hooks/useBreakpointPosition'

const DsImage: React.FC<ComponentMounterType> = forwardRef((props, ref) => {
  const { children, style, ...attr } = props

  const height = useBreakpointPosition(attr?.height)
  const width = useBreakpointPosition(attr?.width)

  return (
    <ComponentMounter className="container-image" as="div" ref={ref} {...attr}>
      <Image
        {...(props as ImageProps)}
        style={style}
        width={width}
        height={height}
      />
    </ComponentMounter>
  )
})

export default DsImage
