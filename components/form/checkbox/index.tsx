import { forwardRef } from 'react'
import type { DsCheckboxType } from './types'

import ComponentMounter from '../../../core/utils/component-mounter'
import { DsBox, DsLabel } from '../../../layout'

import { DsIcon } from 'design-system/components/global'

const DsCheckbox: React.FC<DsCheckboxType> = forwardRef((props, ref) => {
  const { ...attr } = props

  return (
    <DsBox
      position="relative"
      overflow="hidden"
      display="inline-block"
      minW="26px"
      pointerEvents={attr.disabled ? 'none' : 'all'}
    >
      <ComponentMounter
        as="input"
        ref={ref}
        _styles={{
          width: '0px',
          height: '0px',
          top: '0px',
          left: '-999999px',
          display: 'none',
          visibility: 'hidden',
          ...attr
        }}
        _css={{
          sm: `
          &:checked {
            & + label {
                [data-checkbox-icon] {
                    display: ${attr.disabled ? 'flex' : 'block'};
                    transform: translateY(-50%);
                    width: -webkit-fill-available;
                }
    
                &:before {
                    background: #8E4DFF;
                    border-color: transparent;
                }
            }
        }
         `,
          ...attr._css
        }}
        placeholder={attr.label}
        type="checkbox"
        {...attr}
      />
      <DsLabel
        htmlFor={attr.id}
        display="flex"
        alignItems="flex-start"
        lineHeight={'26px'}
        cursor="pointer"
        fontSize="16px"
        position="relative"
        color={(attr.disabled && 'var(--amethystDeep)') || 'var(--actionBlue)'}
        _css={{
          sm: `
            &:before {
                content: '';
                width: 24px;
                height: 24px;
                min-width: 24px;
                min-height: 24px;
                flex: none;
                border-radius: 6px;
                margin-right: ${attr.label ? '8px' : '0px'};
                cursor: pointer;
                background: ${
                  (attr.disabled && 'var(--inactive)') ||
                  (attr.error && 'D4D8E7') ||
                  'transparent'
                };
                border: 2px  solid ${
                  (attr.disabled && 'var(--inactive)') ||
                  (attr.error && 'red') ||
                  '#D4D8E7'
                };
                ${attr.disabled ? 'background: var(--inactive);' : ''}
            }

            span a {
                color:blue;
                font-weight: 700;
                text-decoration:none;
            }
            `,
          lg: `
            span a:hover {
                text-decoration:underline;
            }
            `
        }}
      >
        <DsIcon
          as="span"
          size="xsmall"
          icon="check"
          color="var(--pureWhite)"
          position="absolute"
          top="45%"
          left="20%"
          display="none"
          transition="0.2s all cubic-bezier(0.4,0,0.2,1)"
          data-checkbox-icon
        />

        <span>{attr.label}</span>
      </DsLabel>
    </DsBox>
  )
})

export default DsCheckbox
