import { ComponentType } from 'design-system/core/types/componentType'

import { StylesType } from 'design-system/core/types/stylesType'

import { ImageProps } from 'next/image'
import { BreakpointProps } from '@ds/config'

export type ComponentMounterType = {
  width: string | BreakpointProps<string>
  height: string | BreakpointProps<string>
  _styles?: StylesType
} & ComponentType &
  ImageProps
