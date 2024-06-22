import { SvgComponentProps } from './types'

export default function SvgComponent(props: SvgComponentProps) {
  const { children, size, ...attr } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...attr}
    >
      {children}
    </svg>
  )
}
