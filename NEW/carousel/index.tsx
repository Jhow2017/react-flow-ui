import React, { useEffect, useRef, useState } from 'react';

//types
import { DsCarouselType } from './types';

//Ds
import { DsBox, DsFlex } from 'design-system/layout';
import { DsIcon } from 'design-system/components/global';
import ComponentMounter from 'design-system/core/utils/component-mounter';

const DsCarousel: React.FC<DsCarouselType> = (props) => {
    const { children, showArrows, showDots, autoPlay = false, interval = 3000, ...attr } = props;
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isActiveArrow, setIsActiveArrow] = useState<number>(0);
    const timerRef = useRef<number>(null);

    useEffect(() => {
        if (autoPlay) {
            timerRef.current = window.setInterval(() => {
                setCurrentSlide((currentSlide + 1) % activeSlide.length);
            }, interval);
        }
        return () => window.clearInterval(timerRef.current);
    }, [autoPlay, interval, currentSlide]);

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
    ));

    return (
        <ComponentMounter position={'relative'} {...attr}>
            <DsBox style={{ overflowX: 'hidden' }}>
                <DsFlex transform={`translateX(-${currentSlide * 100}%)`} transition=" all 0.5s ease">
                    {activeSlide}
                </DsFlex>

                {showArrows && (
                    <DsFlex position={'absolute'} justifyContent="space-between" width={'100%'} top={'36%'}>
                        {[1, 2].map((_, index) => (
                            <DsIcon
                                key={index}
                                icon={index === 1 ? 'arrow-right' : 'arrow-left'}
                                color="var(--white)"
                                size="xsmall"
                                width=" 31px"
                                height=" 31px"
                                borderRadius=" 50px "
                                background={'var(--placeGrey)'}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                cursor="pointer"
                                onClick={() => {
                                    index === 2
                                        ? setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length)
                                        : setCurrentSlide((currentSlide + 1) % activeSlide.length);
                                    setIsActiveArrow((isActiveArrow + 1) % children.length);
                                }}
                            />
                        ))}
                    </DsFlex>
                )}

                {showDots && (
                    <DsFlex className="carousel-dots" justifyContent={'center'} mt={'24px'} gap={'6px'}>
                        {React.Children.map(children, (_, index) => (
                            <DsBox
                                className={
                                    index === isActiveArrow ? 'carousel-carousel-dot-active' : 'carousel-carousel-dot'
                                }
                                key={index}
                                width="32px"
                                borderRadius="4px"
                                cursor={'pointer'}
                                onClick={() => {
                                    setCurrentSlide(index);
                                    setIsActiveArrow(index);
                                }}
                                transition="width 0.2s cubic-bezier(0.4,0,0.2,1)"
                                _hover={{ width: '36px' }}
                                border={
                                    index === isActiveArrow ? '2px solid var(--liqiBlue)' : '2px solid var(--decorGrey)'
                                }
                            />
                        ))}
                    </DsFlex>
                )}
            </DsBox>
        </ComponentMounter>
    );
};

export default DsCarousel;
