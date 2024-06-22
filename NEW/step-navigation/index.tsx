//types
import { DsStepNavigationType } from './types';

// internal system
import ComponentMounter from 'design-system/core/utils/component-mounter';
import { DsBox, DsFlex } from 'design-system/layout';
import { DsText } from 'design-system/components/typography';
import { DsButton } from 'design-system/components/global';

const DsStepNavigation: React.FC<DsStepNavigationType> = (props) => {
    const {
        currentStep,
        formSteps,
        activeStepColor,
        completedStepColor,
        defaultStepColor,
        titleStyles,
        descriptionStyle,
        ...attr
    } = props;

    //const colors
    const activeColorStep = activeStepColor || 'var(--inactive)';
    const completedColorStep = completedStepColor || 'var(--headline)';
    const defaultColorStep = defaultStepColor || 'var(--white)';

    return (
        <ComponentMounter width="100%;" maxWidth="600px" margin="0 auto;" {...attr}>
            <DsBox
                className="container-step-navigation"
                display="flex"
                justifyContent="space-between"
                flexDirection={'column'}
                position="relative"
                gap={'8px'}
            >
                {formSteps?.map((item, index) => (
                    <DsFlex key={index} alignItems={'flex-start'} flexDirection={'column'} gap={'8px'}>
                        <DsBox display="flex" justifyContent="center" alignItems="center" gap={'16px'}>
                            <DsButton
                                variant="default"
                                backgroundColor={
                                    (currentStep === item?.id && 'var(--white)') ||
                                    (currentStep > item?.id && 'var(--headline)') ||
                                    (currentStep < item?.id && 'var(--white)') ||
                                    'var(--white)'
                                }
                                border={`1px solid ${
                                    (currentStep === item?.id && 'var(--headline)') ||
                                    (currentStep > item?.id && 'var(--headline)') ||
                                    (currentStep < item?.id && 'var(--inactive)') ||
                                    'var(--white)'
                                }`}
                                color={
                                    (currentStep === item?.id && 'var(--headline)') ||
                                    (currentStep > item?.id && 'var(--white)') ||
                                    (currentStep < item?.id && 'var(--inactive)') ||
                                    'var(--white)'
                                }
                                width="24px"
                                height="24px"
                                fontSize={'14px'}
                                lineHeight={'22px'}
                                fontWeight={'600'}
                                fontFamily={'var(--secondaryFont)'}
                                borderRadius="25px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {item?.id}
                            </DsButton>

                            {item?.title && (
                                <DsText size="medium" variant="bold" color="var(--writer)" {...titleStyles}>
                                    {item?.title}
                                </DsText>
                            )}
                        </DsBox>
                        <DsFlex
                            justifyContent={'center'}
                            margin="0 0px 0 12px"
                            padding="0px 0px 0 27px"
                            borderLeft={`2px dotted ${
                                index === formSteps.length - 1
                                    ? defaultColorStep
                                    : currentStep === item?.id
                                    ? activeColorStep
                                    : currentStep > item?.id
                                    ? completedColorStep
                                    : currentStep < item?.id
                                    ? activeColorStep
                                    : defaultColorStep
                            }`}
                            transition="0.4s ease;"
                        >
                            <DsBox>
                                {item?.description && (
                                    <DsText size="small" variant="normal" color="var(--writer)" {...descriptionStyle}>
                                        {item?.description}
                                    </DsText>
                                )}
                            </DsBox>
                        </DsFlex>
                    </DsFlex>
                ))}
            </DsBox>
        </ComponentMounter>
    );
};
export default DsStepNavigation;
