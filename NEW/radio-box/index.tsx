import ComponentMounter from '@ds/core/utils/component-mounter';
import { DsBox } from '@ds/layout';

// types
import { DsRadioBoxTypes } from './types';
import { useEffect, useState } from 'react';

const DsRadioBox: React.FC<DsRadioBoxTypes> = (props) => {
    const { selectedValue, onChange, options, isRadio = false, children, defaultValue, disabled, ...attr } = props;

    const handleOptionChange = (value) => {
        onChange(value);
    };

    const [defaultValueSelect, setDefaultValueSelect] = useState(defaultValue);

    useEffect(() => {
        const item = options?.find((option) => defaultValueSelect === option.value && option);
        if (item) {
            setDefaultValueSelect(defaultValue);
            onChange(item);
        }
    }, [defaultValue]);

    return (
        <ComponentMounter display={'flex'} flexDirection={'column'} gap={'24px'} {...attr}>
            {options?.map((option) => {
                const isChecked = defaultValueSelect
                    ? defaultValueSelect === option.value
                    : selectedValue === option.value;

                return (
                    <DsBox
                        key={option.value}
                        as="label"
                        display="flex"
                        padding="16px"
                        alignItems={'center'}
                        borderRadius="10px"
                        border={`${
                            disabled ? '1px solid var(--frameGrey)' : isChecked ? '2px solid var(--hoverBlue)' : '2px solid var(--frameGrey)'
                        }`}
                        background={disabled ? 'var(--detached)' : 'var(--white)'}
                        cursor={disabled ? 'initial' : 'pointer'}
                        _hover={{ border: !disabled && '2px solid var(--hoverBlue)' }}
                    >
                        <input
                            type="radio"
                            checked={isChecked}
                            onChange={() => handleOptionChange(option)}
                            style={{ display: 'none' }}
                            disabled={disabled}
                        />

                        {children}
                    </DsBox>
                );
            })}
        </ComponentMounter>
    );
};

export default DsRadioBox;
