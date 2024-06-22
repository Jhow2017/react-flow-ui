import { IconProps } from '../../types'

export function ChevronUpIcon({ size, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7682 14.6402C18.4146 15.0644 17.7841 15.1218 17.3598 14.7682L12 10.3017L6.64016 14.7682C6.21588 15.1218 5.58532 15.0644 5.23175 14.6402C4.87819 14.2159 4.93551 13.5853 5.35979 13.2318L11.3598 8.23175C11.7306 7.92271 12.2693 7.92271 12.6402 8.23175L18.6402 13.2318C19.0644 13.5853 19.1218 14.2159 18.7682 14.6402Z"
        fill={color}
      />
    </svg>
  )
}
