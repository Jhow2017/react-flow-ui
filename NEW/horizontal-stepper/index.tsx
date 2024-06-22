//hooks
import useResponsive from 'hooks/useResponsive';

//types
import { DsHorizontalStepperType } from './types';

// internal system
import ComponentMounter from 'design-system/core/utils/component-mounter';
import { DsBox, DsFlex } from 'design-system/layout';
import { DsText } from 'design-system/components/typography';
import { DsButton, DsIcon } from 'design-system/components/global';

const DsHorizontalStepper: React.FC<DsHorizontalStepperType> = (props) => {
    const { currentStep, formSteps, titleStyles, descriptionStyle, ...attr } = props;
    const isMobile = useResponsive();

    const totalSteps = formSteps.length;
    const width = currentStep > formSteps?.length ? '100%' : `${(100 / (totalSteps - 1)) * (currentStep - 1)}%`;
    return (
        <ComponentMounter>
            <DsBox
                display="flex"
                justifyContent="space-between"
                marginTop="70px"
                position="relative"
                _css={{
                    sm: `
                        :before {
                            content: '';
                            position: absolute;
                            background: var(--lightGrey);
                            height: 2px;
                            width: 100%;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 0;
                        }
                        :after {
                            content: '';
                            position: absolute;
                            background: var(--placeGrey);
                            height: 2px;
                            width: ${width};
                            top: 50%;
                            transition: 0.4s ease;
                            transform: translateY(-50%);
                            left: 0;
                        }
                `,
                }}
                {...attr}
            >
                {formSteps.map((item, index) => (
                    <DsFlex alignItems={'center'} position={'relative'} zIndex={'1'} key={index}>
                        <DsButton
                            variant="default"
                            width="52px"
                            height="52px"
                            borderRadius="50%"
                            backgroundColor={
                                (currentStep === item?.id && 'var(--placeGrey)') ||
                                (currentStep > item?.id && 'var(--placeGrey)') ||
                                (currentStep < item?.id && 'var(--lightGrey)') ||
                                'var(--lightGrey)'
                            }
                            color={
                                (currentStep === item?.id && 'var(--white)') ||
                                (currentStep > item?.id && 'var(--white)') ||
                                (currentStep < item?.id && 'var(--decorGrey)') ||
                                'var(--decorGrey)'
                            }
                            border="6px solid var(--white)"
                            transition="0.4s ease"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {currentStep > item?.id ? <DsIcon icon="check" color={'var(--white)'} /> : item?.id}
                        </DsButton>
                        {isMobile ? (
                            currentStep === item?.id && (
                                <DsText
                                    size="small"
                                    variant="normal"
                                    p={'0 8px 0 2px'}
                                    color={
                                        (currentStep === item?.id && 'var(--writer)') ||
                                        (currentStep > item?.id && 'var(--writer)') ||
                                        (currentStep < item?.id && 'var(--decorGrey)') ||
                                        'var(--decorGrey)'
                                    }
                                    backgroundColor={'var(--white)'}
                                    {...descriptionStyle}
                                >
                                    {item?.title}
                                </DsText>
                            )

                        ) : (
                            <DsText
                                size="small"
                                variant="normal"
                                p={'0 8px 0 2px'}
                                color={
                                    (currentStep === item?.id && 'var(--writer)') ||
                                    (currentStep > item?.id && 'var(--writer)') ||
                                    (currentStep < item?.id && 'var(--decorGrey)') ||
                                    'var(--decorGrey)'
                                }
                                backgroundColor={'var(--white)'}
                                {...descriptionStyle}
                            >
                                {item?.title}
                            </DsText>
                        )}
                    </DsFlex>
                ))}
            </DsBox>
        </ComponentMounter>
    );
};
export default DsHorizontalStepper;
