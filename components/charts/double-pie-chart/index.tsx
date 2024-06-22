import { DsBox } from '../../../layout';
import { DsText } from '../../typography';
import type { DoublePieChartProps } from './types';

const DsDoublePieChart: React.FC<DoublePieChartProps> = ({
    centralValue,
    centralText,
    innerGraphData,
    outterGraphData,
}) => {
    return (
        <DsBox position="relative" h={'270px'} w={'270px'}>
            <DsBox
                as="span"
                w="270px"
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
                            outterGraphData.color
                        } 98%,#0000) top/16px 16px no-repeat,
                            conic-gradient(${outterGraphData.color} calc(${
                        outterGraphData.currentValue
                    }*1%), var(--watermark) 0);
                        -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - 16px),#000 calc(100% - 16px))
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        border-radius: 50%;
                        inset: calc(50% - 16px/2);
                        background: ${outterGraphData.color};
                        transform: rotate(calc(${outterGraphData.currentValue}*3.6deg)) translateY(calc(50% - ${
                        outterGraphData.currentValue > 46 ? '269px' : '270px'
                    }/2));
                    }
                `,
                }}
            />
            <DsBox
                as="span"
                w="203px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
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
                            innerGraphData.color
                        } 98%,#0000) top/16px 16px no-repeat,
                            conic-gradient(${innerGraphData.color} calc(${
                        innerGraphData.currentValue
                    }*1%), var(--watermark) 0);
                        -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - 16px),#000 calc(100% - 16px))
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        border-radius: 50%;
                        inset: calc(50% - 16px/2);
                        background: ${innerGraphData.color};
                        transform: rotate(calc(${innerGraphData.currentValue}*3.6deg)) translateY(calc(50% - ${
                        innerGraphData.currentValue > 44 && innerGraphData.currentValue < 85 ? '201px' : '203px'
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

export default DsDoublePieChart;
