import { IconProps } from '../../types'

export function HouseIcon({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
      <path
        fill={color}
        d="M20.771 9.454 13.276 2.38l-.015-.014a1.868 1.868 0 0 0-2.523 0l-.016.014L3.23 9.454a1.882 1.882 0 0 0-.604 1.379V19.5A1.875 1.875 0 0 0 4.5 21.375H9a1.875 1.875 0 0 0 1.875-1.875v-4.125h2.25V19.5A1.875 1.875 0 0 0 15 21.375h4.5a1.875 1.875 0 0 0 1.875-1.875v-8.667a1.882 1.882 0 0 0-.604-1.379Zm-1.646 9.67h-3.75V15a1.876 1.876 0 0 0-1.875-1.875h-3A1.875 1.875 0 0 0 8.625 15v4.125h-3.75v-8.13L12 4.268l7.125 6.727v8.13Z"
      />
    </svg>
  )
}
