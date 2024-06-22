import SvgComponent from '../../SvgComponent'
import { IconProps } from '../../types'

export function CheckIcon({ size, color }: IconProps) {
  return (
    <SvgComponent size={size} viewBox="0 0 16 15" fill="none">
      <path
        d="M2 7.69231L6.73684 12L14 5"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgComponent>
  )
}
