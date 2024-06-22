import { ReactNode } from 'react'
import type { ComponentType } from '../../../core/types/componentType'

export type DsModalType = ComponentType & {
  children: ReactNode
  isVisible: boolean
  closeModal?: () => void
  onClickOutside?: () => void
}
