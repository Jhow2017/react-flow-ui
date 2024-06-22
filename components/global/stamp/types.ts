import { ReactNode } from 'react'
import type { ComponentType } from '../../../core/types/componentType'

export type DsStampType = {
  children: ReactNode
  variant:
    | 'primary-primary-6'
    | 'lavenderPurple'
    | 'pureLilac'
    | 'brightLilac'
    | 'softOrchid'
    | 'pureWhite'
    | 'white'
    | 'black'
    | 'clearSkyBlue'
  toUpperCase?: boolean
} & ComponentType
