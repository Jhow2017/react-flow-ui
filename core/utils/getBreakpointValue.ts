import { BreakpointProps } from '../../config'

const getBreakpointValue = (
  value: string | BreakpointProps<string>,
  breakpoint: string
): string => {
  if (!value) return ''

  if (typeof value === 'string') {
    return { sm: value }[breakpoint] || ''
  }

  return value[breakpoint] || ''
}

export default getBreakpointValue
