import { forwardRef, ReactNode } from 'react';
import BaseStyle from '../../styles';
import { ComponentType } from '../../types/componentType';
import { StylesType } from '../../types/stylesType';
import removeAttributesFromDom from '../removeAttributesFromDom';

type ComponentMounterType = {
    children?: ReactNode;
    _styles?: StylesType;
} & ComponentType;

const ComponentMounter: React.FC<ComponentMounterType> = forwardRef((props, ref) => {
    const { children, ...attr } = props;

    return (
        <BaseStyle
            as={attr.as as any}
            ref={ref}
            _styles={{ ...attr._styles, ...attr }}
            _css={attr._css}
            _hover={attr._hover}
            _focus={attr._focus}
            {...removeAttributesFromDom(attr)}
        >
            {children}
        </BaseStyle>
    );
});

export default ComponentMounter;
