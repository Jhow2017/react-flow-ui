import React from 'react';
import { keyframes } from 'styled-components';

//hooks
import useBreakpointPosition from 'hooks/useBreakpointPosition';

//components
import ComponentMounter from 'design-system/core/utils/component-mounter';
import { DsBox } from 'design-system/layout';
import { DsProgressGradientBarTypes } from './types';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const progressAnimation = keyframes`
    from {
        background-size: 0%;
    }
    to {
        background-size: 100%;
    }
`;

const DsProgressGradientBar: React.FC<DsProgressGradientBarTypes> = (props) => {
    const { percentage, maxValue, colors, ...attr } = props;

    const height = useBreakpointPosition(attr.height);

    return (
        <ComponentMounter
            position="relative"
            width="100%"
            css={`
                animation: ${fadeIn} 0.5s ease-out;
                animation-fill-mode: forwards;
            `}
            opacity="0"
            {...attr}
        >
            <DsBox
                height={`${height}`}
                borderRadius="16px"
                background={`linear-gradient(to right, ${colors.join(', ')})`}
                css={`
                    ${progressAnimation} 1s ease-out forwards
                `}
            />
            <DsBox
                position="absolute"
                left={`${(percentage / maxValue) * 100}%`}
                top="-3px"
                transform="translateX(-50%)"
                width={`${parseInt(height, 10) + parseInt(height, 10)}px`}
                height={`${parseInt(height, 10) + parseInt(height, 10)}px`}
                background="var(--placeGrey)"
                border="2px solid var(--white)"
                borderRadius="50%"
                transition="left 0.5s ease-in-out"
            />
        </ComponentMounter>
    );
};

export default DsProgressGradientBar;
