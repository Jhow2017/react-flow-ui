import { breakpoints } from '../../config'

import type { BreakpointProps } from '../../config'

const generateCustomCss = (_css: BreakpointProps<string>): string => {
  let styles = ''

  for (const breakpoint in _css) {
    styles += `
            @media (min-width: ${breakpoints[breakpoint]}) {
                ${_css[breakpoint]}
            }
        `
  }

  return styles
}

export default generateCustomCss
