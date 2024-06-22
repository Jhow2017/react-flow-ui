import React, { useState } from 'react';
import { motion } from 'framer-motion';

//hooks
import useBreakpointPosition from 'hooks/useBreakpointPosition';

//types
import type { DsTooltipTypes } from './types';

// internal design system
import { DsText } from 'design-system/components/typography';
import { DsBox } from 'design-system/layout';

const DsTooltip: React.FC<DsTooltipTypes> = (props) => {
    const { children, description, direction, className, mixPanelProps, descriptionStyle, ...attr } = props;
    const position = useBreakpointPosition(direction);

    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => setShowTooltip(false);

    const getTooltipPositionStyles = () => {
        const currentDirection = position || 'top';

        switch (currentDirection) {
            case 'top':
                return `
                    top: 0;
                    transform: translate(-50%, -100%);
                    margin-top: -10px;
                 `;

            case 'bottom':
                return `
                    top: 100%;
                    transform: translate(-50%, 0);
                    margin-bottom: -10px;
                `;
            case 'left':
                return `
                    top: 50%;
                    left: 0;
                    transform: translate(-100%, -50%);
                    margin-left: -10px;
                `;
            case 'right':
                return `
                    top: 50%;
                    right: 0;
                    transform: translate(100%, -50%);
                    margin-right: -10px;
                `;
            default:
                return `
                    top: 0;
                    transform: translate(-50%, -100%);
                    margin-top: -10px;
                `;
        }
    };

    const getBeforeDirectionStyles = () => {
        const currentDirection = position || 'top';

        switch (currentDirection) {
            case 'top':
                return `
                    top: 100%;
                    left: 50%;
                    margin-top: -10px;
                    transform: translateY(-50%);
                `;

            case 'right':
                return `
                    top: 50%;
                    left: 0;
                    margin-left: -5px;
                    margin-top: -7px;
                    transform: translateY(-50%);
                `;
            case 'bottom':
                return `
                    top: 0;
                    left: 50%;
                    margin-top: -6px;
                    margin-left: -6px;
                    transform: translateY(-50%);
                `;

            case 'left':
                return `
                    top: 50%;
                    right: 0;
                    margin-right: -5px;
                    margin-top: -7px;
                    transform: translateY(-50%);
                `;

            default:
                return `
                    bottom: -5px;
                `;
        }
    };

    return (
        <DsBox
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            position="relative"
            width="fit-content"
            height="fit-content"
        >
            {children}
            {showTooltip && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <DsBox
                        background={attr?.background || attr.backgroundAttachment || attr.bg || 'var(--liqiBlue);'}
                        position="absolute"
                        pointerEvents="none"
                        zIndex={'4'}
                        padding="8px"
                        borderRadius="10px"
                        css={getTooltipPositionStyles}
                        minWidth={'200px'}
                        {...attr}
                    >
                        <DsBox
                            css={`
                          &::after {
                              ${getBeforeDirectionStyles}
                              position: absolute;
                              content: '';
                              width: 15px;
                              height: 15px;
                              background: ${
                                  attr?.background || attr.backgroundAttachment || attr.bg || 'var(--liqiBlue);'
                              }
                              transform: rotate(45deg);
                              border-radius: 2px;
                          }
                      `}

                        />
                        <DsText
                            size="xsmall"
                            textAlign="center"
                            fontFamily={'var(--secondaryFont)'}
                            variant="normal"
                            color={'var(--white)'}
                            {...descriptionStyle}
                        >
                            {description}
                        </DsText>
                    </DsBox>
                </motion.div>
            )}
        </DsBox>
    );
};

export default DsTooltip;
