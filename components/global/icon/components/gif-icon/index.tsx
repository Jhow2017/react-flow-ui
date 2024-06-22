import { IconProps } from '../../types'

export function GifIcon({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      <path
        fill={color}
        d="M13.875 6.75v10.5a1.125 1.125 0 1 1-2.25 0V6.75a1.125 1.125 0 1 1 2.25 0ZM21 7.875a1.125 1.125 0 0 0 0-2.25h-4.5a1.125 1.125 0 0 0-1.125 1.125v10.5a1.125 1.125 0 1 0 2.25 0v-4.125h2.625a1.125 1.125 0 1 0 0-2.25h-2.625v-3H21Zm-12 3H6.75a1.125 1.125 0 1 0 0 2.25h1.125v1.125a1.875 1.875 0 1 1-3.75 0v-4.5A1.875 1.875 0 0 1 6 7.875a2.044 2.044 0 0 1 1.72.958 1.125 1.125 0 0 0 1.925-1.166A4.281 4.281 0 0 0 6 5.625 4.13 4.13 0 0 0 1.875 9.75v4.5a4.125 4.125 0 0 0 8.25 0V12A1.125 1.125 0 0 0 9 10.875Z"
      />
    </svg>
  )
}
