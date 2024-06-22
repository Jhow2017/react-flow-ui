import ComponentMounter from '@ds/core/utils/component-mounter'

//types
import type { DsInputType } from './types'

const DsInput: React.FC<DsInputType> = props => {
  const { forwardedRef, ...attr } = props
  const forceTypeText = { ...attr, type: 'text' }

  return (
    <ComponentMounter
      as="input"
      ref={forwardedRef}
      placeholder={attr?.placeholder}
      value={attr?.value}
      color="var(--lavenderPurple)"
      fontFamily="var(--secondaryFont)"
      fontSize="16px"
      fontWeight="400"
      lineHeight="normal"
      _css={{
        sm: `
          &::-webkit-input-placeholder { 
            color: ${attr?.color || 'var(--lavenderPurple)'} 
          };
        `
      }}
      {...forceTypeText}
      {...attr}
    />
  )
}

export default DsInput
