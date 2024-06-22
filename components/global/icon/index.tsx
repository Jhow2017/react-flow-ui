import { forwardRef } from 'react'
import ComponentMounter from '../../../core/utils/component-mounter'

// type
import type { DsIconType } from './types'

//all icons update
import { ICONS } from './icons'

const DsIcon: React.FC<DsIconType> = forwardRef((props, ref) => {
  const { fontSize, icon, size, color, ...attr } = props

  const IconComponent = ICONS[icon]
  if (!IconComponent) {
    return null
  }

  const sizeMapping = {
    xxlarge: '56px',
    xlarge: '48px',
    large: '40px',
    medium: '32px',
    small: '24px',
    xsmall: '16px'
  }

  const iconSize = fontSize ?? sizeMapping[size || 'small']
  const iconColor = (color as string) || 'var(--tagGrey)'

  return (
    <ComponentMounter
      as={attr.as || 'div'}
      ref={ref}
      _styles={{
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0',
        width: iconSize,
        height: iconSize,
        ...attr
      }}
      {...attr}
    >
      <IconComponent size={iconSize as any} color={iconColor} />
    </ComponentMounter>
  )
})

export default DsIcon
