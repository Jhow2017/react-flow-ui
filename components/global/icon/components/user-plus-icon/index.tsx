import { IconProps } from '../../types'

export function UserPlusIcon({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 256 256"
    >
      <rect width={256} height={256} fill="none" />
      <line
        x1={200}
        y1={136}
        x2={248}
        y2={136}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <line
        x1={224}
        y1={112}
        x2={224}
        y2={160}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <circle
        cx={108}
        cy={100}
        r={60}
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <path
        d="M22.2,200a112,112,0,0,1,171.6,0"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  )
}
