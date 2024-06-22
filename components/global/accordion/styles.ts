import styled from 'styled-components'
import ComponentMounter from 'design-system/core/utils/component-mounter'

export const ContentWrapper = styled(ComponentMounter)`
  max-height: 1px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  line-height: 1.4;
  color: var(--warmGrey);
`
