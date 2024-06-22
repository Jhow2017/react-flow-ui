import SvgComponent from '../../SvgComponent'
import { IconProps } from '../../types'

export function ChevronLeftIcon({ size, color }: IconProps) {
  return (
    <SvgComponent size={size} viewBox="0 0 13 21">
      <path
        d="M0.78125 10.5391C0.78125 10.3906 0.808594 10.2539 0.863281 10.1289C0.917969 9.99609 1 9.875 1.10938 9.76562L10.4023 0.671875C10.6133 0.46875 10.8672 0.367188 11.1641 0.367188C11.3672 0.367188 11.5469 0.414062 11.7031 0.507812C11.8672 0.601562 11.9961 0.730469 12.0898 0.894531C12.1914 1.05078 12.2422 1.23047 12.2422 1.43359C12.2422 1.72266 12.1367 1.97656 11.9258 2.19531L3.39453 10.5391L11.9258 18.8828C12.1367 19.1016 12.2422 19.3555 12.2422 19.6445C12.2422 19.8477 12.1914 20.0273 12.0898 20.1836C11.9961 20.3477 11.8672 20.4766 11.7031 20.5703C11.5469 20.6641 11.3672 20.7109 11.1641 20.7109C10.8672 20.7109 10.6133 20.6055 10.4023 20.3945L1.10938 11.3125C1 11.2031 0.917969 11.0859 0.863281 10.9609C0.808594 10.8281 0.78125 10.6875 0.78125 10.5391Z"
        fill={color}
      />
    </SvgComponent>
  )
}