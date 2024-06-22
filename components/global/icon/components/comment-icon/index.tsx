import { IconProps } from '../../types'

export function CommentIcon({ size, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fill={color}
        d="M20.25 4.125H3.75A1.875 1.875 0 0 0 1.875 6v15a1.858 1.858 0 0 0 1.084 1.697 1.867 1.867 0 0 0 1.998-.264l.017-.015 2.901-2.543H20.25A1.875 1.875 0 0 0 22.125 18V6a1.875 1.875 0 0 0-1.875-1.875Zm-.375 13.5H7.735c-.442 0-.87.156-1.207.44l-.018.015-2.385 2.09V6.374h15.75v11.25Z"
      />
    </svg>
  )
}
