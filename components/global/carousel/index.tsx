/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

// types
import { DsCarouselType } from './types'

// Ds
import { DsBox, DsFlex } from 'design-system/layout'
import { DsIcon } from 'design-system/components/global'
import ComponentMounter from 'design-system/core/utils/component-mounter'

const DsCarousel: React.FC<DsCarouselType> = props => {
  const {
    children,
    showArrows,
    showDots,
    autoPlay = false,
    interval = 3000,
    ...attr
  } = props

  const timerRef = useRef<number>(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isActiveArrow, setIsActiveArrow] = useState<number>(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const nextSlide = (currentSlide + 1) % children.length
      setCurrentSlide(nextSlide)
      setIsActiveArrow(nextSlide)
    },
    onSwipedRight: () => {
      const prevSlide = (currentSlide - 1 + children.length) % children.length
      setCurrentSlide(prevSlide)
      setIsActiveArrow(prevSlide)
    },
    trackMouse: true
  })

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = window.setInterval(() => {
        setCurrentSlide((currentSlide + 1) % activeSlide.length)
      }, interval)
    }
    return () => window.clearInterval(timerRef.current)
  }, [autoPlay, interval, currentSlide])

  const activeSlide = children.map((slide, index) => (
    <DsBox
      key={index}
      display="flex"
      justify-content="center"
      flex=" 0 0 auto"
      opacity={`${currentSlide === index ? 1 : 0}`}
      transition="all 0.5s ease"
      width="100%"
    >
      {slide}
    </DsBox>
  ))

  return (
    <ComponentMounter position={'relative'} {...attr}>
      <DsBox style={{ overflowX: 'hidden' }}>
        <div
          {...handlers}
          style={{
            display: 'flex',
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: ' all 0.5s ease'
          }}
        >
          {activeSlide}
        </div>

        {showArrows && (
          <DsFlex
            position={'absolute'}
            justifyContent="space-between"
            width={'100%'}
            top={'36%'}
          >
            {[1, 2].map((_, index) => (
              <DsIcon
                key={index}
                icon={index === 1 ? 'arrow-right' : 'arrow-left'}
                color="var(--pureWhite)"
                size="xsmall"
                width=" 31px"
                height=" 31px"
                borderRadius=" 50px "
                background={'green'}
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={() => {
                  index === 2
                    ? setCurrentSlide(
                        (currentSlide - 1 + activeSlide.length) %
                          activeSlide.length
                      )
                    : setCurrentSlide((currentSlide + 1) % activeSlide.length)
                  setIsActiveArrow((isActiveArrow + 1) % children.length)
                }}
              />
            ))}
          </DsFlex>
        )}

        {showDots && (
          <DsFlex
            className="carousel-dots"
            justifyContent={'center'}
            mt={'24px'}
            gap={'12px'}
          >
            {React.Children.map(children, (_, index) => (
              <DsBox
                className={
                  index === isActiveArrow
                    ? 'carousel-carousel-dot-active'
                    : 'carousel-carousel-dot'
                }
                key={index}
                width="10px"
                height="10px"
                borderRadius="50%"
                cursor={'pointer'}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsActiveArrow(index)
                }}
                transition="width 0.2s cubic-bezier(0.4,0,0.2,1)"
                _hover={{ width: '36px' }}
                background={index === isActiveArrow ? '#8E4DFF' : '#DFCCFF'}
              />
            ))}
          </DsFlex>
        )}
      </DsBox>
    </ComponentMounter>
  )
}

export default DsCarousel
