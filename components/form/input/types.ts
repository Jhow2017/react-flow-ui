import type { ReactNode } from 'react'
import type { ComponentType } from '../../../core/types/componentType'
import { SourceInfo } from 'react-number-format'

type DsInputTypeSelector =
  | { type: 'text' | 'search' | 'date' | 'password' | 'email' }
  | {
      type: 'number'
      onValueChange?(
        data: { floatValue: number; formattedValue: string; value: string },
        sourceInfo?: SourceInfo
      ): void
      thousandSeparator?: boolean | string
      decimalSeparator?: string | boolean
      thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan'
      decimalScale?: number
      fixedDecimalScale?: boolean
      prefix?: string
      suffix?: string
      allowNegative?: boolean
      allowEmptyFormatting?: boolean
      allowLeadingZeros?: boolean
      defaultValue?: number | string
      isNumericString?: boolean
      displayType?: 'text' | 'input'
      format?: string
      removeFormatting?(formattedValue: string): string
      mask?: string
      customInput?: any
      isAllowed?(values: any): boolean
      allowedDecimalSeparators?: string[]
      customNumerals?: string[]
    }

export type DsInputType = ComponentType &
  DsInputTypeSelector & {
    children?: ReactNode
    id: string
    name: string
    type: 'text' | 'search' | 'number' | 'date' | 'password' | 'email'
    supportLabel?: string
    error?: string
    as?: never
    accept?: string | undefined
    alt?: string | undefined
    autoComplete?: string | undefined
    autoFocus?: boolean | undefined
    capture?: boolean | 'user' | 'environment' | undefined // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean | undefined
    crossOrigin?: string | undefined
    disabled?: boolean | undefined
    enterKeyHint?:
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
      | undefined
    form?: string | undefined
    formAction?: string | undefined
    formEncType?: string | undefined
    formMethod?: string | undefined
    formNoValidate?: boolean | undefined
    formTarget?: string | undefined
    height?: number | string | undefined
    list?: string | undefined
    decimalScale?: number | undefined
    max?: number | string | undefined
    maxLength?: number | undefined
    min?: number | string | undefined
    minLength?: number | undefined
    multiple?: boolean | undefined
    pattern?: string | undefined
    placeholder?: string | undefined
    readOnly?: boolean | undefined
    required?: boolean | undefined
    src?: string | undefined
    step?: number | string | undefined
    value?: string | ReadonlyArray<string> | number | undefined
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  }
