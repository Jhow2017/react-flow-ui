import type { DsToastType } from './types';

import ComponentMounter from '../../../core/utils/component-mounter';
import { DsBox } from '../../../layout';
import { DsText } from '../../typography';
import { forwardRef, useEffect, useState } from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';

const DsToast: React.FC<DsToastType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;
    const [progress, setProgress] = useState<number>(attr.msToShow);

    // handle progress
    useEffect(() => {
        if (!attr.isToastActive) return;
        const interval: NodeJS.Timeout = setInterval(() => {
            if (!attr.isToastActive) return clearInterval(interval);
            setProgress((prev) => prev - 15);
        }, 15);

        return () => clearInterval(interval);
    }, [attr.isToastActive]);

    // handle component visibility
    useEffect(() => {
        if (progress <= 0) attr.setIsToastActive(false);
    }, [progress <= 0]);

    return (
        <LazyMotion features={domAnimation}>
            <DsBox as="section" overflow="hidden">
                <AnimatePresence>
                    {attr.isToastActive && (
                        <m.span
                            initial={{ right: '-500px', top: 24, position: 'fixed' }}
                            animate={{ right: 24 }}
                            exit={{ right: '-500px' }}
                            transition={{ type: 'spring', duration: 0.6 }}
                        >
                            <ComponentMounter
                                as="div"
                                ref={ref}
                                _styles={{
                                    bg:
                                        (attr.variant === 'danger' && 'var(--hoverRuby)') ||
                                        (attr.variant === 'success' && 'var(--seaweed)') ||
                                        (attr.variant === 'warning' && 'var(--sunny)') ||
                                        'var(--seaweed)',
                                    borderRadius: '6px',
                                    padding: '18px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    width: '334px',
                                    ...attr,
                                }}
                                {...attr}
                            >
                                <DsBox as="span" lineHeight="0" display="inline-block">
                                    {(attr.variant === 'danger' && (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1102_7596)">
                                                <ellipse cx="10" cy="10.1268" rx="10" ry="9.87315" fill="white" />
                                                <path
                                                    d="M5.54742 13.1177C5.15441 13.5057 5.15037 14.1389 5.53839 14.5319C5.92642 14.9249 6.55957 14.9289 6.95258 14.5409L5.54742 13.1177ZM14.4526 7.13602C14.8456 6.748 14.8496 6.11485 14.4616 5.72184C14.0736 5.32883 13.4404 5.32479 13.0474 5.71281L14.4526 7.13602ZM6.95258 14.5409L14.4526 7.13602L13.0474 5.71281L5.54742 13.1177L6.95258 14.5409Z"
                                                    fill="#CB034B"
                                                />
                                                <path
                                                    d="M14.4526 13.1177C14.8456 13.5057 14.8496 14.1389 14.4616 14.5319C14.0736 14.9249 13.4404 14.9289 13.0474 14.5409L14.4526 13.1177ZM5.54742 7.13602C5.15441 6.748 5.15037 6.11485 5.53839 5.72184C5.92642 5.32883 6.55957 5.32479 6.95258 5.71281L5.54742 7.13602ZM13.0474 14.5409L5.54742 7.13602L6.95258 5.71281L14.4526 13.1177L13.0474 14.5409Z"
                                                    fill="#CB034B"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1102_7596">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    )) ||
                                        (attr.variant === 'success' && (
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47716 17.5228 2 12 2C6.47716 2 2 6.47716 2 12C2 17.5228 6.47716 22 12 22ZM16.666 10.3487C17.078 9.98089 17.1138 9.34874 16.7459 8.93677C16.3781 8.5248 15.746 8.48902 15.334 8.85685L10.451 13.2167L8.21899 10.9078C7.83514 10.5107 7.20206 10.4999 6.80498 10.8838C6.40789 11.2676 6.39716 11.9007 6.78101 12.2978L9.68101 15.2978C10.0542 15.6838 10.6655 15.7063 11.066 15.3487L16.666 10.3487Z"
                                                    fill="#242A32"
                                                />
                                            </svg>
                                        )) ||
                                        (attr.variant === 'warning' && (
                                            <svg
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M22 12.7613C22 18.2842 17.5228 22.7613 12 22.7613C6.47716 22.7613 2 18.2842 2 12.7613C2 7.23848 6.47716 2.76132 12 2.76132C17.5228 2.76132 22 7.23848 22 12.7613ZM13.4286 18.4756C13.4286 19.2646 12.789 19.9042 12 19.9042C11.211 19.9042 10.5714 19.2646 10.5714 18.4756C10.5714 17.6866 11.211 17.047 12 17.047C12.789 17.047 13.4286 17.6866 13.4286 18.4756ZM12 5.61846C11.211 5.61846 10.5714 6.25806 10.5714 7.04704V14.6661C10.5714 15.4551 11.211 16.0947 12 16.0947C12.789 16.0947 13.4286 15.4551 13.4286 14.6661V7.04704C13.4286 6.25806 12.789 5.61846 12 5.61846Z"
                                                    fill="#242A32"
                                                />
                                            </svg>
                                        ))}
                                </DsBox>

                                <DsText
                                    size="medium"
                                    color={attr.variant === 'danger' ? 'var(--white)' : 'var(--headline)'}
                                    variant="normal"
                                >
                                    {children}
                                </DsText>

                                <DsBox
                                    as="span"
                                    h="6px"
                                    bgColor={
                                        (attr.variant === 'danger' && 'var(--lightRuby)') ||
                                        (attr.variant === 'success' && 'var(--dragonFly)') ||
                                        'var(--selectiveYellow)'
                                    }
                                    position="absolute"
                                    bottom="0"
                                    left="0"
                                    // using style instead of w beacause using w would generate too many
                                    // classnames, and increase bundle size a lot
                                    style={{ width: `${(100 * progress) / attr.msToShow}%` }}
                                />
                            </ComponentMounter>
                        </m.span>
                    )}
                </AnimatePresence>
            </DsBox>
        </LazyMotion>
    );
});

export default DsToast;
