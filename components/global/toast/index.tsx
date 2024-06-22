import React, {
  CSSProperties,
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { create } from 'zustand'

// types
import { DsBox } from '@ds/layout'
import { DsToastTypes, ToastOptions, ToastStore } from './types'
import { StylesType } from '@ds/core/types/stylesType'

// Components
import { DsIcon } from '@ds/components/global'
import { DsText } from '@ds/components/typography'
import { DsIconSvgType } from '@ds/components/global/icon/types'

const useToastStore = create<ToastStore>(set => ({
  toasts: [],
  addToast: toast => set(state => ({ toasts: [...state.toasts, toast] })),
  removeToast: () => set(state => ({ toasts: state.toasts.slice(1) }))
}))

const Toast: React.FC<DsToastTypes> = ({ message, variant, options }) => {
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // const startTime = Date.now()
    let elapsedTime = 0
    let progressBeforeHover = progress

    const interval = setInterval(() => {
      if (!isHovered) {
        elapsedTime += 100
        const progress =
          (elapsedTime / (options?.duration ?? 3000)) * 100 +
          progressBeforeHover

        if (progress >= 100) {
          clearInterval(interval)
          useToastStore.getState().removeToast()
        }

        setProgress(progress)
      }
    }, 100)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      useToastStore.getState().removeToast()
    }, options?.duration ?? 3000 - elapsedTime)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [isHovered, options?.duration, progress])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const progressBarVisible = !options?.hideProgressBar

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <DsBox
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        as="div"
        css={{
          ...(options?.stylesContainer as CSSProperties),
          backgroundColor:
            variant === 'success'
              ? 'red'
              : variant === 'error'
              ? 'blue'
              : variant === 'warning'
              ? 'yellow'
              : variant === 'info'
              ? '#fff'
              : '',
          padding: '18px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: '334px',
          borderRadius: '8px',
          boxShadow: '0px 2px 10px -5px rgba(75, 86, 127, 0.18)'
        }}
      >
        {/* <DsIcon
          icon={
            (variant === 'error' && 'step-error') ||
            (variant === 'success' && 'check-full') ||
            (variant === 'warning' && 'alert') ||
            ((variant === 'info' && 'alert') as DsIconSvgType)
          }
        /> */}
        <DsText
          size="medium"
          color={variant === 'error' ? 'var(--white)' : 'var(--lavenderPurple)'}
          variant="normal"
          {...options?.stylesMessage}
        >
          {message}
        </DsText>
        {progressBarVisible && (
          <DsBox
            as="span"
            h="6px"
            //@ts-ignore
            bgColor={
              (variant === 'success' && 'green') ||
              (variant === 'error' && 'green') ||
              (variant === 'warning' && 'green') ||
              ((variant === 'info' &&
                'var(--clearSkyBlue)') as StylesType['backgroundColor'])
            }
            position="absolute"
            bottom="0"
            left="0"
            width={`${progress}%`}
            transition="width 0.1s linear"
          />
        )}
      </DsBox>
    </motion.div>
  )
}

const ToastContainer: React.FC = () => {
  const toasts = useToastStore(state => state.toasts)
  const handleGetPositionStyles = (position: string | undefined) => {
    switch (position) {
      case 'top-left':
        return { top: '20px', left: '20px' }
      case 'top-right':
        return { top: '20px', right: '20px' }
      case 'bottom-left':
        return { bottom: '20px', left: '20px' }
      case 'bottom-right':
        return { bottom: '20px', right: '20px' }
      default:
        return { top: '20px', right: '20px' }
    }
  }

  return (
    <DsBox
      position="fixed"
      //{...handleGetPositionStyles(toast?.options?.position)}
      top={'100px'}
      right={'20px'}
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      zIndex="9999"
      gap={'30px'}
    >
      <AnimatePresence initial={false}>
        {toasts?.map((toast, index) => (
          <Toast
            key={index}
            message={toast?.message}
            variant={toast?.variant}
            options={toast?.options}
          />
        ))}
      </AnimatePresence>
    </DsBox>
  )
}

const toast = {
  success: (
    message: string | ReactElement<any, string | JSXElementConstructor<any>>,
    options?: ToastOptions
  ) => {
    useToastStore.getState().addToast({ message, variant: 'success', options })
  },
  error: (message: string | ReactElement, options?: ToastOptions) => {
    useToastStore.getState().addToast({ message, variant: 'error', options })
  },
  info: (message: string | ReactElement, options?: ToastOptions) => {
    useToastStore.getState().addToast({ message, variant: 'info', options })
  },
  warning: (message: string | ReactElement, options?: ToastOptions) => {
    useToastStore.getState().addToast({ message, variant: 'warning', options })
  }
}

export { ToastContainer, toast }
