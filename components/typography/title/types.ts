import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { ComponentType } from '../../../core/types/componentType'

export type DsTitleType = {
  children?: ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b' | 'strong'
  size?: 'xxxlarge' | 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small'
} & ComponentType &
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
