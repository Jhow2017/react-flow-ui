import styled, { css } from 'styled-components'

import type { BreakpointProps } from '../../config'
import { breakpoints } from '../../config'
import { StylesType } from '../types/stylesType'
import generateCustomCss from '../utils/generateCustomCss'
import generateNormalCss from '../utils/generateNormalCss'

interface BaseStyleProps {
  _styles?: StylesType
  _hover?: StylesType
  _focus?: StylesType
  _css?: BreakpointProps<string>
}

const BaseStyle = styled.div<BaseStyleProps>`
  ${({ _styles }) => css`
    ${generateNormalCss(_styles)}
  `}

  ${({ _hover }) =>
    _hover &&
    css`
      ${breakpoints?.lg
        ? `
          @media screen and  (min-width: ${breakpoints?.lg}) {
                &:hover {
                    ${generateNormalCss(_hover)};
                }
            }
        `
        : `
            &:hover {
                ${generateNormalCss(_hover)};
            }
        `}
    `}

    ${({ _focus }) =>
    _focus &&
    css`
      ${breakpoints?.lg
        ? `
            @media (min-width: ${breakpoints?.lg}) {
                &:hover {
                    ${generateNormalCss(_focus)};
                }
            }
        `
        : `
            &:focus {
                ${generateNormalCss(_focus)}
            }
        `}
    `}

    ${({ _css }) =>
    _css &&
    css`
      ${generateCustomCss(_css)}
    `}
`

export default BaseStyle
