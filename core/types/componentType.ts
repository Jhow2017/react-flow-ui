import { CSSProperties, Ref } from 'react'
import { BreakpointProps } from '../../config'
import { StylesType } from './stylesType'

type ComponentType = {
  ref?: Ref<any>
  forwardedRef?: Ref<any>
  className?: string
  id?: string
  style?: CSSProperties
  as?: string
  _hover?: StylesType
  _focus?: StylesType
  _css?: BreakpointProps<string>
  css?: CSSProperties
} & StylesType

export type { ComponentType }
