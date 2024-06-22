import { IconProps } from '../../types'

export function SmilyIcon({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      <path
        fill={color}
        d="M16.724 14.813c-1.031 1.786-2.755 2.812-4.724 2.812-1.969 0-3.69-1.025-4.724-2.813a1.125 1.125 0 0 1 1.948-1.124c.365.63 1.21 1.687 2.776 1.687 1.566 0 2.411-1.057 2.776-1.688a1.126 1.126 0 1 1 1.948 1.126ZM22.125 12A10.124 10.124 0 1 1 12 1.875 10.136 10.136 0 0 1 22.125 12Zm-2.25 0A7.875 7.875 0 1 0 12 19.875 7.883 7.883 0 0 0 19.875 12Zm-11.25-.375a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6.75-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  )
}
