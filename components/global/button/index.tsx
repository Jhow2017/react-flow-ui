/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/ban-types */
import { forwardRef } from 'react'

import type { JSXElementConstructor, ReactElement } from 'react'
import type { DsButtonType } from './types'

import ComponentMounter from '../../../core/utils/component-mounter'
import styled from 'styled-components'
import Link from 'next/link'
import { DsBox } from 'design-system/layout'
import useBreakpointPosition from 'hooks/useBreakpointPosition'

const iconStyles = (
  hasIcon: ReactElement<any, JSXElementConstructor<any>> | null | undefined,
  iconRight?: boolean
): object => {
  return hasIcon
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        flexDirection: iconRight && 'row-reverse'
      }
    : {}
}

const globalButtonStyles = (attr: DsButtonType): object => ({
  borderRadius:
    (attr.size === 'small' && '6px') ||
    ((attr.size === 'medium' || attr.size === 'large') && '10px'),
  fontSize:
    ((attr.size === 'small' || attr.size === 'medium') && '14px') ||
    (attr.size === 'large' && '18px'),
  lineHeight:
    ((attr.size === 'small' || attr.size === 'medium') && '16px') ||
    (attr.size === 'large' && '18px'),
  fontWeight: '600',
  fontFamily: 'var(--secondaryFont)',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
  outline: 'none',
  textAlign: 'center',
  position: 'relative',
  textDecoration: 'none',
  pointerEvents: attr.disabled ? 'none' : 'all',
  userSelect: attr.disabled ? 'none' : 'auto',
  height:
    (attr.size === 'small' && '36px') ||
    (attr.size === 'medium' && '48px') ||
    (attr.size === 'large' && '65px')
})

const primaryButtonStyles = (attr: DsButtonType, dark?: boolean): object => ({
  _styles: {
    p:
      (attr.size === 'small' && '10px 16px') ||
      (attr.size === 'medium' && '16px 24px') ||
      (attr.size === 'large' && '23.5px 21.5px'),
    background:
      (attr.disabled && dark && '#181C21') ||
      (attr.disabled && 'var(--inactive)') ||
      (dark && 'var(--platinum)') ||
      'linear-gradient(91deg, #8E4DFF 0.55%, #C274FF 104.12%) ',
    border: 'none',
    color: attr.disabled && dark ? '#626568' : 'var(--white)',
    ...globalButtonStyles(attr),
    ...iconStyles(attr.icon, attr.iconAfter),
    ...attr
  },
  _hover: {
    background: dark
      ? 'var(--writer)'
      : attr.disabled
      ? 'red'
      : 'linear-gradient(91deg, #8E4DFF 0.55%, #8E4DFF 104.12%)',
    ...attr._hover
  }
})

const secondaryButtonStyles = (
  attr: DsButtonType,
  dark?: boolean,
  grey?: boolean
): object => ({
  _styles: {
    p:
      (attr?.size === 'small' && '10px 16px') ||
      (attr?.size === 'medium' && '16px 24px') ||
      (attr?.size === 'large' && '14.5px 24px'),
    bg:
      (attr.disabled && dark && '#181C21') ||
      (attr.disabled && 'var(--inactive)') ||
      (dark && 'var(--platinum)') ||
      '#EEE4FF',
    border: !attr.loading
      ? `2px solid ${
          attr.disabled
            ? dark
              ? 'var(--tagGrey)'
              : 'var(--inactive)'
            : dark
            ? 'var(--platinum)'
            : grey
            ? 'var(--frameGrey)'
            : 'transparent'
        }`
      : 'none',
    color: attr.disabled && dark ? '#626568' : '#8E4DFF',
    ...globalButtonStyles(attr),
    ...iconStyles(attr.icon, attr.iconAfter),
    ...attr
  },
  _hover: {
    bg: attr.disabled ? 'transparent' : !dark && !grey && 'var(--hoverBlue)',
    border: !attr.loading
      ? `2px solid ${
          attr.disabled
            ? dark
              ? 'var(--tagGrey)'
              : 'var(--inactive)'
            : (dark && 'var(--decorGrey)') ||
              (grey && 'var(--writer)') ||
              '#8E4DFF'
        }`
      : 'none',
    color: attr.disabled
      ? dark
        ? 'var(--tagGrey)'
        : 'var(--inactive)'
      : dark
      ? 'var(--symbol)'
      : grey
      ? 'var(--writer)'
      : '#8E4DFF',
    ...attr._hover
  }
})

const tertiaryButtonStyles = (attr: DsButtonType, dark?: boolean): object => ({
  _styles: {
    p:
      (attr.size === 'small' && (attr.disabled ? '8px 14px' : '10px 16px')) ||
      (attr.size === 'medium' && (attr.disabled ? '14px 22px' : '16px 24px')) ||
      (attr.size === 'large' &&
        (attr.disabled ? '21.5px 19.5px' : '23.5px 21.5px')),
    bg: attr.disabled
      ? dark
        ? 'var(--additionalBlack)'
        : 'var(--white) !important'
      : 'var(--intenseGradient) !important',
    border: attr.disabled
      ? `2px solid ${dark ? 'var(--headline)' : 'var(--inactive)'}`
      : 'none',
    position: 'relative',
    zIndex: '1',
    overflow: 'hidden',
    color: attr.disabled
      ? dark
        ? 'var(--platinum)'
        : 'var(--inactive)'
      : dark
      ? 'var(--white)'
      : 'var(--writer)',
    ...globalButtonStyles(attr),
    ...iconStyles(attr.icon, attr.iconAfter),
    ...attr
  },

  _css: {
    lg: ':hover > [data-hover] {opacity:1;}'
  }
})

const quaternaryButtonStyles = (attr: DsButtonType): object => ({
  _styles: {
    p:
      (attr.size === 'small' && '10px 16px') ||
      (attr.size === 'medium' && '16px 24px') ||
      (attr.size === 'large' && '23.5px 21.5px'),
    bgColor: attr.disabled ? 'var(--headline)' : 'var(--pigmentGreen)',
    border: 'none',
    color: attr.disabled ? 'var(--platinum)' : 'var(--white)',
    ...globalButtonStyles(attr),
    ...iconStyles(attr.icon, attr.iconAfter),
    ...attr
  },
  _hover: { bg: 'var(--seaweed)', ...attr._hover }
})

const quinaryButtonStyles = (attr: DsButtonType): object => ({
  _styles: {
    p:
      (attr.size === 'small' && '10px 16px') ||
      (attr.size === 'medium' && '16px 24px') ||
      (attr.size === 'large' && '23.5px 21.5px'),
    bgColor: attr.disabled ? 'var(--headline)' : 'var(--ruby)',
    border: 'none',
    color: attr.disabled ? 'var(--platinum)' : 'var(--white)',
    ...globalButtonStyles(attr),
    ...iconStyles(attr.icon, attr.iconAfter),
    ...attr
  },
  _hover: { bg: 'var(--hoverRuby)', ...attr._hover }
})

const DsButton: React.FC<DsButtonType> = forwardRef((props, ref) => {
  const { children, ...attr } = props
  const defaultButton = (
    <ComponentMounter
      as={props.href ? 'a' : 'button'}
      _styles={{
        transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: 'var(--secondaryFont)',
        textDecoration: 'none',
        pointerEvents: props.loading || props.disabled ? 'none' : 'all',
        cursor: props.loading || props.disabled ? 'default' : 'pointer',
        ...attr
      }}
      ref={ref}
      {...attr}
    >
      {children}
    </ComponentMounter>
  )

  let styles: any = null

  const size = useBreakpointPosition(attr.size)

  if (attr.variant === 'primary') {
    styles = primaryButtonStyles({ ...attr, size })
  } else if (attr.variant === 'primary-dark') {
    styles = primaryButtonStyles({ ...attr, size }, true)
  } else if (attr.variant === 'secondary') {
    styles = secondaryButtonStyles({ ...attr, size })
  } else if (attr.variant === 'secondary-dark') {
    styles = secondaryButtonStyles({ ...attr, size }, true)
  } else if (attr.variant === 'secondary-grey') {
    styles = secondaryButtonStyles({ ...attr, size }, false, true)
  } else if (attr.variant === 'tertiary') {
    styles = tertiaryButtonStyles({ ...attr, size })
  } else if (attr.variant === 'tertiary-dark') {
    styles = tertiaryButtonStyles({ ...attr, size }, true)
  } else if (attr.variant === 'quaternary') {
    styles = quaternaryButtonStyles({ ...attr, size })
  } else if (attr.variant === 'quinary') {
    styles = quinaryButtonStyles({ ...attr, size })
  }

  const button = (
    <ComponentMounter
      as={props.href ? 'a' : 'button'}
      ref={ref}
      _styles={{
        ...styles?._styles,
        pointerEvents: props.loading || props.disabled ? 'none' : 'all',
        userSelect: props.loading || props.disabled ? 'none' : 'all',
        cursor: props.loading || props.disabled ? 'default' : 'pointer'
      }}
      _css={
        props.variant === 'tertiary' || props.variant === 'tertiary-dark'
          ? { lg: ':hover > [data-hover] {opacity:1;}' }
          : {}
      }
      _hover={{ ...styles?._hover }}
      {...attr}
    >
      {(props.variant === 'tertiary' || props.variant === 'tertiary-dark') && (
        <>
          <DsBox
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            zIndex="-2"
            opacity="0"
            transition="all 0.6s ease 0s"
            transform="rotateY(-180deg)"
            background="var(--intenseGradient)"
            data-hover
            _css={{
              lg: `
                    animation: 1.5s linear 0s infinite normal none running spinButton;

                    @keyframes spinButton {
                        from {transform:rotate(0deg);}
                        to {transform:rotate(360deg);}
                    }

                `
            }}
            _hover={{ opacity: '1' }}
          />
          <DsBox
            position="absolute"
            top="2px"
            left="2px"
            width="calc(100% - 4px)"
            height="calc(100% - 4px)"
            zIndex="-1"
            borderRadius="8px"
            background={
              attr.background || attr.variant === 'tertiary-dark'
                ? 'var(--additionalBlack)'
                : 'var(--white)'
            }
          />
        </>
      )}
      <Loading className={attr.loading ? 'active' : ''}>
        {attr.loading && <Dots />}
      </Loading>
      {attr.icon && attr.icon}
      {children}
    </ComponentMounter>
  )

  if (attr.variant === 'default') {
    return props.href ? (
      <Link href={props.href} passHref>
        {defaultButton}
      </Link>
    ) : (
      defaultButton
    )
  } else if (
    attr.variant === 'primary' ||
    attr.variant === 'primary-dark' ||
    attr.variant === 'secondary' ||
    attr.variant === 'secondary-dark' ||
    attr.variant === 'secondary-grey' ||
    attr.variant === 'tertiary' ||
    attr.variant === 'tertiary-dark' ||
    attr.variant === 'quaternary' ||
    attr.variant === 'quinary'
  ) {
    return button
  } else {
    return <span style={{ margin: 10 }}>variant not found</span>
  }
})

export default DsButton
export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: -1px;
  height: calc(100% + 2px);
  background: #8e4dff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transition: 0.2s;

  &.active {
    opacity: 1;
  }
`

const Dots = styled.div`
  position: relative;
  left: -9999px;
  width: 7px;
  height: 7px;
  border-radius: 5px;
  background-color: var(--pureWhite);
  color: var(--pureWhite);
  box-shadow: 9984px 0 0 0 var(--pureWhite), 9999px 0 0 0 var(--pureWhite),
    10014px 0 0 0 var(--pureWhite);
  animation: dotTyping 1.5s infinite linear;

  @keyframes dotTyping {
    0% {
      box-shadow: 9984px 0 0 0 var(--pureWhite), 9999px 0 0 0 var(--pureWhite),
        10014px 0 0 0 var(--pureWhite);
    }
    16.667% {
      box-shadow: 9984px -10px 0 0 var(--pureWhite),
        9999px 0 0 0 var(--pureWhite), 10014px 0 0 0 var(--pureWhite);
    }
    33.333% {
      box-shadow: 9984px 0 0 0 var(--pureWhite), 9999px 0 0 0 var(--pureWhite),
        10014px 0 0 0 var(--pureWhite);
    }
    50% {
      box-shadow: 9984px 0 0 0 var(--pureWhite),
        9999px -10px 0 0 var(--pureWhite), 10014px 0 0 0 var(--pureWhite);
    }
    66.667% {
      box-shadow: 9984px 0 0 0 var(--pureWhite), 9999px 0 0 0 var(--pureWhite),
        10014px 0 0 0 var(--pureWhite);
    }
    83.333% {
      box-shadow: 9984px 0 0 0 var(--pureWhite), 9999px 0 0 0 var(--pureWhite),
        10014px -10px 0 0 var(--pureWhite);
    }
    100% {
      box-shadow: 9984px 0 0 0 var(--pureWhite), 9999px 0 0 0 var(--pureWhite),
        10014px 0 0 0 var(--pureWhite);
    }
  }
`
