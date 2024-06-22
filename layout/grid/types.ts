import type {
  AlignSelf,
  Global,
  JustifySelf
} from '../../core/types/cssValueTypes'
import type { ComponentType } from '../../core/types/componentType'
import type { BreakpointProps } from '../../config'
import { ReactNode } from 'react'

export type DsGridType = {
  children?: ReactNode
  templateColumns?: BreakpointProps<Global> | Global
  templateRows?: BreakpointProps<Global> | Global
  templateAreas?: BreakpointProps<Global> | Global
  columnStart?: BreakpointProps<Global> | Global
  columnEnd?: BreakpointProps<Global> | Global
  rowStart?: BreakpointProps<Global> | Global
  rowEnd?: BreakpointProps<Global> | Global
  column?: BreakpointProps<Global> | Global
  row?: BreakpointProps<Global> | Global
  area?: BreakpointProps<Global> | Global
  justify?: BreakpointProps<JustifySelf> | JustifySelf
  align?: BreakpointProps<AlignSelf> | AlignSelf
} & ComponentType
