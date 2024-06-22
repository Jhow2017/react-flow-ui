import { ReactNode } from 'react'
import type { ComponentType } from '../../../core/types/componentType'

export type DsShadowBoxType = {
  children: ReactNode
  onClick?: () => void
} & ComponentType
