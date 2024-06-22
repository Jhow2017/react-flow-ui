import { useEffect, useState } from 'react';
import { DsBox, DsList, DsListItem } from '../../../layout';
import { DsShadowBox } from '../../global';
import { DsText } from '../../typography';
import { SimpleBarChartProps } from './types';

const DsSimpleBarChart: React.FC<SimpleBarChartProps> = ({ graphHeight, graphData }) => {
    const [highestValue, setHighestValue] = useState<number>(null);

    useEffect(() => {
        let inMemoryHighestValue = 0;

        graphData.forEach(({ value }) => {
            if (value > inMemoryHighestValue) inMemoryHighestValue = value;
        });

        setHighestValue(inMemoryHighestValue * 1.18);
    }, [graphData]);

    return (
        <DsList
            listStyle="none"
            display="flex"
            alignItems="flex-end"
            gap="16px"
            p="0"
            m="0"
            position="relative"
            h={graphHeight}
        >
            <DsBox
                as="hr"
                w="100%"
                h="2px"
                border="none"
                bgColor="var(--frameGrey)"
                position="absolute"
                bottom="18px"
            />
            {graphData.map(({ date, value, popupData }) => {
                const percentCalc = (value * 100) / highestValue;
                return (
                    <DsListItem
                        key={date}
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        alignItems="center"
                        gap="8px"
                        minH="24px"
                        h={percentCalc + '%'}
                        position="relative"
                    >
                        <DsBox
                            as="span"
                            w="16px"
                            minH="24px"
                            h={percentCalc + '%'}
                            bgColor={!value ? 'var(--lightGrey)' : 'var(--liqiBlue)'}
                            borderRadius="10px 10px 0 0"
                            cursor={percentCalc ? 'help' : 'not-allowed'}
                            _css={{ sm: '&:hover + ul { transform: scale(1); transform-origin: left bottom; }' }}
                        />
                        {percentCalc && popupData?.length ? (
                            <DsShadowBox
                                as="ul"
                                position="absolute"
                                bottom={`calc(${percentCalc}% + 30px)`}
                                left="27px"
                                p="16px"
                                h="fit-content"
                                w="283px"
                                transform="scale(0)"
                                transition="transform 0.25s cubic-bezier(0.53, 0.21, 0, 1)"
                                overflow="hidden"
                                zIndex="1"
                                listStyle="none"
                                _css={{
                                    sm: 'transform-origin: left bottom; li + li { border-top: 1px solid var(--frameGrey); padding-top: 8px; margin-top: 8px; }',
                                }}
                            >
                                {popupData.map((data) => (
                                    <DsListItem>
                                        <DsText as="span" variant="normal" size="small" display="block">
                                            {data.title}
                                        </DsText>
                                        <DsText as="strong" variant="bold" size="small" mt="4px">
                                            {data.value}
                                        </DsText>
                                    </DsListItem>
                                ))}
                            </DsShadowBox>
                        ) : (
                            ''
                        )}
                        <DsText as="small" variant="normal" size="xsmall">
                            {date}
                        </DsText>
                    </DsListItem>
                );
            })}
        </DsList>
    );
};

export default DsSimpleBarChart;
