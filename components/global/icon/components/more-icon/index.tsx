import { IconProps } from '../../types'

export function MoreIcon({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        fill={color}
        d="M14.625 12.5a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0ZM4.5 9.875a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm15 0a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Z"
      />
    </svg>
  )
}
