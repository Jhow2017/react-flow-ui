import { forwardRef } from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';

//types
import type { SidebarType } from './types';

//hooks
import useResponsive from 'hooks/useResponsive';
import useBreakpointPosition from 'hooks/useBreakpointPosition';

// internal design system
import ComponentMounter from 'design-system/core/utils/component-mounter';
import { DsIcon } from 'design-system/components/global';

const DsSideBar: React.FC<SidebarType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;
    const isMobile = useResponsive();
    const position = useBreakpointPosition(attr?.positionSideBar);

    return (
        <ComponentMounter
            as="div"
            ref={ref}
            _styles={{
                position: { sm: 'relative', md: 'absolute' },
                top: ' 0',
                bottom: '0',
                width: { sm: '100%', md: '500px' },
                visibility: attr.isVisible ? 'visible' : 'hidden',
                opacity: attr.isVisible ? '1' : '0',
                transition: 'all ease 0.2s',
                zIndex: '9999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            _css={attr._css}
        >
            {attr.isVisible && (
                <>
                    {isMobile && (
                        <div
                            onClick={() => {
                                attr.closeSideBar && attr.closeSideBar();
                            }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(20, 23, 27, 0.65)',
                                zIndex: 9998,
                            }}
                        />
                    )}
                    <LazyMotion features={domAnimation}>
                        <AnimatePresence>
                            {attr.isVisible && (
                                <m.div
                                    className="container-sidebar"
                                    initial={
                                        position === 'left'
                                            ? { opacity: 0, x: -280 }
                                            : position === 'right'
                                            ? { opacity: 0, x: 280 }
                                            : position === 'top'
                                            ? { opacity: 0, y: -280 }
                                            : { opacity: 0, y: 280 }
                                    }
                                    animate={
                                        position === 'left'
                                            ? { opacity: 1, x: 0 }
                                            : position === 'right'
                                            ? { opacity: 1, x: 0 }
                                            : position === 'top'
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 1, y: 0 }
                                    }
                                    exit={
                                        position === 'left'
                                            ? { opacity: 0, x: -280 }
                                            : position === 'right'
                                            ? { opacity: 0, x: 280 }
                                            : position === 'top'
                                            ? { opacity: 0, y: -280 }
                                            : { opacity: 0, y: 280 }
                                    }
                                    transition={{ delay: 0.1 }}
                                    style={{
                                        position: 'fixed',
                                        [position]: '0',
                                        width: 'auto',
                                        height: '100vh',
                                        zIndex: '9999',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        overflowY: 'auto',
                                        padding: '24px',
                                        background: 'var(--white)',
                                        boxShadow:
                                            position === 'left'
                                                ? '0px 4px 6px rgba(36, 42, 50, 0.2)'
                                                : position === 'right'
                                                ? '0px 4px 6px rgba(36, 42, 50, 0.16)'
                                                : position === 'top'
                                                ? '0px 4px 6px rgba(36, 42, 50, 0.2)'
                                                : '0px 4px 6px rgba(36, 42, 50, 0.16)',
                                    }}
                                >
                                    {children}
                                    {attr.closeSideBar && (
                                        <DsIcon
                                            icon="close"
                                            cursor="pointer"
                                            onClick={() => attr.closeSideBar()}
                                            display="flex"
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        />
                                    )}
                                </m.div>
                            )}
                        </AnimatePresence>
                    </LazyMotion>
                </>
            )}
        </ComponentMounter>
    );
});
export default DsSideBar;
