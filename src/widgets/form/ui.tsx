'use client';

import { useMemo, useState } from 'react';
import { FormContext, FormSteps, Steps, StepsState } from '@/entities/form';
import { FormFirstStep } from '@/features/form/first-step';
import { FormNavigation } from '@/features/form/navigation';
import { FormSecondStep } from '@/features/form/second-step';

const steps: Steps = {
  [FormSteps.First]: <FormFirstStep />,
  [FormSteps.Second]: <FormSecondStep />
};

export const Form = () => {
  const [currentStep, setCurrentStep] = useState<FormSteps>(FormSteps.First);
  const [stepsState, setStepsState] = useState<StepsState>({
    [FormSteps.First]: {
      isSubmitted: false,
      isValid: false
    },
    [FormSteps.Second]: {
      isValid: false,
      isSubmitted: false
    }
  });

  const stepsKeys = useMemo(
    () => Object.keys(stepsState) as FormSteps[],
    [stepsState]
  );

  const setStepValid = (key: FormSteps, value: boolean) => {
    const prevState = stepsState[key];

    setStepsState({
      ...stepsState,
      [key]: {
        ...prevState,
        isValid: value
      }
    });
  };

  const setStepSubmitted = (key: FormSteps, value: boolean) => {
    const prevState = stepsState[key];

    setStepsState({
      ...stepsState,
      [key]: {
        ...prevState,
        isSubmitted: value
      }
    });
  };

  const nextStep = () => {
    const index = stepsKeys.findIndex((s) => s === currentStep);
    const nextKey = stepsKeys?.[index + 1];

    if (nextKey) {
      setCurrentStep(nextKey);
    }
  };

  return (
    <div className={'container mt-14 md:mt-28'}>
      <FormContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          stepsState,
          setStepValid,
          stepsKeys,
          setStepSubmitted,
          nextStep
        }}
      >
        <div className={'flex flex-col mb-12 h-[643px]'}>
          <div className={'mb-16 md:mb-24'}>{steps[currentStep]}</div>
          <FormNavigation />
        </div>
      </FormContext.Provider>
    </div>
  );
};
