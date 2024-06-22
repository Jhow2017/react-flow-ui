export const breakpoints: BreakpointProps<string> = {
  sm: '0px',
  md: '768px',
  lg: '1200px',
  xl: '1366px',
  xxl: '2560px'
}

export interface BreakpointProps<CssValue> {
  sm?: CssValue
  md?: CssValue
  lg?: CssValue
  xl?: CssValue
  xxl?: CssValue
}
