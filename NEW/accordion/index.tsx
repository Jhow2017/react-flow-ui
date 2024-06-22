import React, { useState } from 'react';

//types
import { ComponentMounterType } from './types';

//components
import { DsButton, DsIcon } from 'design-system/components/global';
import ComponentMounter from 'design-system/core/utils/component-mounter';

import { DsBox } from 'design-system/layout';

//styles
import { ContentWrapper } from './styles';

const DsAccordionItem: React.FC<ComponentMounterType> = ({ children, styleIcon, colorIcon, ...attr }) => {
    const [isExpand, setExpand] = useState(false);

    const toggleClass = () => {
        setExpand((prev) => !prev);
    };

    return (
        <DsBox
            {...attr}
            as="div"
            _css={{
                sm: `
                    transition: all ease 0.2s;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    flex-direction: column;
                    position: relative;
                    background: var(--detached);
                    border-radius: 16px;
                    padding: 16px;
                    &.trigger {
                        ${ContentWrapper} {
                            max-height: 500px;
                        }
                    }
            `,
            }}
            className={isExpand ? 'trigger' : null}
            onClick={toggleClass}
            cursor={'pointer'}
        >
            <DsButton
                variant="default"
                type="button"
                bgColor="unset"
                border="0"
                position="absolute"
                _css={{
                    sm: `
                        top: ${isExpand ? '24%' : ' 35%' || '0'};
                        right: 2.83%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.2s ease-in-out;
                        transform: rotate(180deg);

                        &.expanded {
                            transform: rotate(0deg);
                        }
                    `,
                }}
                className={isExpand ? 'expanded' : null}
                {...styleIcon}
            >
                <DsIcon icon="chevron-up" cursor={'pointer'} color={colorIcon} />
            </DsButton>
            {children}
        </DsBox>
    );
};

const DsAccordionTitle: React.FC<ComponentMounterType> = ({ children, ...attr }) => {
    return (
        <ComponentMounter as="div" {...attr}>
            {children}
        </ComponentMounter>
    );
};

const DsAccordionContent: React.FC<any> = ({ children, ...attr }) => {
    return <ContentWrapper {...attr}>{children}</ContentWrapper>;
};

export { DsAccordionItem, DsAccordionTitle, DsAccordionContent };
