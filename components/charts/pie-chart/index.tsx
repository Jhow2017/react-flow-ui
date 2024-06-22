import { DsBox } from '../../../layout';
import { DsText } from '../../typography';
import type { DsPieChartProps } from './types';

const DsPieChart: React.FC<DsPieChartProps> = ({ centralValue, centralText, graphData, size }) => {
    return (
        <DsBox position="relative" h={size} w={size}>
            <DsBox
                as="span"
                w="173px"
                display="inline-grid"
                placeContent="center"
                _css={{
                    sm: `
                        aspect-ratio: 1;

                        &::before {
                            content: "";
                            position: absolute;
                            border-radius: 50%;
                            inset: 0;
                            background: radial-gradient(farthest-side, ${
                                graphData.color
                            } 98%,#0000) top/16px 16px no-repeat,
                                conic-gradient(${graphData.color} calc(${
                        graphData.currentValue
                    }*1%), var(--watermark) 0);
                            -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - 16px),#000 calc(100% - 16px))
                        }

                        &::after {
                            content: "";
                            position: absolute;
                            border-radius: 50%;
                            inset: calc(50% - 16px/2);
                            background: ${graphData.color};
                            transform: rotate(calc(${graphData.currentValue}*3.6deg)) translateY(calc(50% - ${
                        graphData.currentValue > 44 && graphData.currentValue < 85
                            ? size
                            : `${Number(size.replace('px', '')) - 2}px`
                    }/2));
                        }
                `,
                }}
            />
            <DsBox position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
                <DsText variant="bold" size="large" fontFamily="var(--primaryFont)" fontSize="24px">
                    {centralValue}
                </DsText>
                <DsText variant="normal" size="small" as="span">
                    {centralText}
                </DsText>
            </DsBox>
        </DsBox>
    );
};

export default DsPieChart;
