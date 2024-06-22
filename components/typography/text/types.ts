import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { ComponentType } from '../../../core/types/componentType'

export type DsTextType = {
  children?: ReactNode
  as?: 'p' | 'small' | 'span' | 'strong' | 'b'
  variant?: 'normal' | 'bold'
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'
} & ComponentType &
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
