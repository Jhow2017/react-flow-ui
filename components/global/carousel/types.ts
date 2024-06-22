import { ComponentType } from 'design-system/core/types/componentType'

export type DsCarouselType = ComponentType & {
  children: JSX.Element[]
  showArrows?: boolean
  showDots?: boolean
  autoPlay?: boolean
  interval?: number
}
