import { DsBox, DsFlex } from '../../../layout';
import { DsText } from '../../typography';
import DsButton from '../button';
import { DsTabsType } from './types';

const DsTabs: React.FC<DsTabsType> = ({
    currentTab,
    tabGroupBorderColor,
    setCurrentTab,
    onChangeTab,
    tabsList,
    size,
    ...attr
}) => {
    return (
        <DsBox
            position="relative"
            ml={{ sm: '-16px', lg: '0' }}
            w={{ sm: '100vw', lg: '100%' }}
            overflow="hidden"
            {...attr}
        >
            {/* gradient for mobile devices */}
            <DsBox
                position="absolute"
                as="span"
                bottom="3px"
                left="0"
                w="32px"
                height="calc(100% - 3px)"
                background="linear-gradient(83deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);"
                zIndex="2"
                display={{ sm: 'block', lg: 'none' }}
            />

            <DsBox
                position="absolute"
                as="span"
                bottom="3px"
                right="0"
                w="32px"
                height="calc(100% - 3px)"
                background="linear-gradient(83deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"
                zIndex="2"
                display={{ sm: 'block', lg: 'none' }}
            />
            {/* end gradient for mobile devices */}

            <DsFlex
                as="ul"
                align="center"
                w="100%"
                overflow="auto"
                justifyContent={attr?.justifyContent || 'flex-start'}
                borderBottom={`1px solid ${tabGroupBorderColor || 'var(--frameGrey)'}`}
                _css={{
                    sm: '&::-webkit-scrollbar {  display: none }',
                }}
            >
                {tabsList?.map((item, index) => (
                    <DsButton
                        as="li"
                        variant="default"
                        p={size === 'small' ? '0 16px' : '0 32px'}
                        height="47px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flex="none"
                        width="auto !important"
                        bg="transparent"
                        border="none"
                        cursor="pointer"
                        position="relative"
                        disabled={item?.disabled}
                        w={item?.width || 'fit-content'}
                        key={index}
                        _css={{
                            sm: `&::after {
                                content: '';
                                background: var(--liqiBlue);
                                width: 100%;
                                height: 2px;
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                transform: scaleX(${currentTab === item?.value ? '1' : '0'});
                                transition: cubic-bezier(0.4,0,0.2,1) all 0.3s;}`,
                        }}
                        onClick={() => {
                            setCurrentTab(item?.value), onChangeTab && onChangeTab(item);
                        }}
                    >
                        <DsText
                            as={currentTab === item?.value ? 'strong' : 'span'}
                            variant={currentTab === item?.value ? 'bold' : 'normal'}
                            size={size || 'medium'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            height="47px"
                            transition=".2s"
                            color={item?.disabled ? 'var(--inactive)' : 'var(--writer)'}
                            _hover={{ color: 'var(--liqiBlue)' }}
                        >
                            {item?.title}
                        </DsText>
                    </DsButton>
                ))}
            </DsFlex>
        </DsBox>
    );
};

export default DsTabs;
