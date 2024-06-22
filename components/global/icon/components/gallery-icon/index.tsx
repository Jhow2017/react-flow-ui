import { IconProps } from '../../types'

export function GalleryIcon({ size, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      <path
        fill={color}
        d="M13.5 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm8.625-3.75v13.5a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875V5.25A1.875 1.875 0 0 1 3.75 3.375h16.5a1.875 1.875 0 0 1 1.875 1.875Zm-18 .375v7.474l3.174-3.175a1.875 1.875 0 0 1 2.652 0l3.86 3.857 1.61-1.61a1.875 1.875 0 0 1 2.651 0l1.803 1.806V5.625H4.125Zm0 12.75h11.094l-6.594-6.594-4.5 4.5v2.094Zm15.75 0v-1.219l-3.128-3.128-1.346 1.347 3 3h1.474Z"
      />
    </svg>
  )
}
