import { useFormContext } from '@/entities/form';
import { Button } from '@/shared/ui/button';
import { useMemo } from 'react';
import { ArrowLeft } from '@/shared/ui/icon/arrow-left';

export const FormNavigation = () => {
  const {
    currentStep,
    stepsState,
    stepsKeys,
    setStepSubmitted,
    setCurrentStep
  } = useFormContext();
  const currentStepValue = useMemo(
    () => stepsState?.[currentStep],
    [stepsState, currentStep]
  );

  return (
    <footer
      className={'sticky flex md:flex-row flex-col gap-y-4 justify-end mt-auto'}
    >
      <div
        className={
          'w-max md:absolute inset-0 mx-auto flex items-center gap-x-2'
        }
      >
        {stepsKeys.map((key, index) => (
          <Button
            disabled={!stepsState[key]?.isValid && key !== currentStep}
            className={`
              font-interTight
              disabled:border-0 disabled:bg-white disabled:text-black/50
              !px-0 !py-0 w-10 h-10
              flex items-center justify-center
              rounded-full 
              ${key === currentStep ? 'border border-black/25' : 'border-0'}
            `}
            onClick={() => setCurrentStep(key)}
            key={`${key}-${index}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <Button
        className={'md:w-[248px] pr-10'}
        onClick={() => setStepSubmitted(currentStep, true)}
        disabled={!currentStepValue?.isValid}
      >
        Следующий шаг
        <ArrowLeft />
      </Button>
    </footer>
  );
};
