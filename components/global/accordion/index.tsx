import React, { useState } from 'react'

// types
import { ComponentMounterType } from './types'

// components
import { DsButton, DsIcon } from 'design-system/components/global'
import ComponentMounter from 'design-system/core/utils/component-mounter'

import { DsBox } from 'design-system/layout'

// styles
import { ContentWrapper } from './styles'

const DsAccordionItem: React.FC<ComponentMounterType> = ({
  children,
  styleIcon,
  colorIcon,
  ...attr
}) => {
  const [isExpand, setExpand] = useState(false)

  const toggleClass = () => {
    setExpand(prev => !prev)
  }

  return (
    <DsBox
      {...attr}
      as="div"
      _css={{
        sm: `
                    transition: all ease 0.2s;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    flex-direction: column;
                    position: relative;
                    border-bottom: 1px solid #EDEFF4;
                    border-radius: 0;
                    padding: 12px 0 16px 0;
                    max-width: 500px;

                    &.trigger {
                        ${ContentWrapper} {
                            max-height: 500px;
                            max-width: 95%;
                        }
                    }
            `
      }}
      className={isExpand ? 'trigger' : null}
      onClick={toggleClass}
      cursor={'pointer'}
    >
      <DsButton
        variant="default"
        type="button"
        bgColor="unset"
        border="0"
        position="absolute"
        right="0"
        display="flex"
        align-items=" center"
        justify-content=" center"
        cursor="pointer"
        transition=" all 0.2s ease-in-out"
        transform=" rotate(180deg)"
        _css={{
          sm: `
                        width: 24px;
                        height: 24px;
                        border: 2px solid #BF97FF;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0;
                        top: ${isExpand ? '10%' : '24%' || '0'};
                        &.expanded {
                            transform: rotate(0deg);
                        }
                    `,
          md: `

                    top: ${isExpand ? '20%' : ' 30%' || '0'};
                    &.expanded {
                        transform: rotate(0deg);
                    }

                `
        }}
        className={isExpand ? 'expanded' : null}
        {...styleIcon}
      >
        <DsIcon
          icon="chevron-up"
          size="xsmall"
          cursor={'pointer'}
          color={colorIcon}
        />
      </DsButton>
      {children}
    </DsBox>
  )
}

const DsAccordionTitle: React.FC<ComponentMounterType> = ({
  children,
  ...attr
}) => {
  return (
    <ComponentMounter as="div" {...attr}>
      {children}
    </ComponentMounter>
  )
}

const DsAccordionContent: React.FC<any> = ({ children, ...attr }) => {
  return <ContentWrapper {...attr}>{children}</ContentWrapper>
}

export { DsAccordionItem, DsAccordionTitle, DsAccordionContent }
