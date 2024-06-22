import { DsButtonType } from 'design-system/components/global/button/types'
import { ComponentType } from 'design-system/core/types/componentType'
import { Color } from 'design-system/core/types/cssValueTypes'
import { StylesType } from 'design-system/core/types/stylesType'
import { ReactNode } from 'react'

export type ComponentMounterType = {
  children?: ReactNode
  _styles?: StylesType
  styleIcon?: DsButtonType
  colorIcon?: Color
} & ComponentType
