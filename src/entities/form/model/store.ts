import { createContext, useContext } from 'react';
import { FormSteps, StepsState } from './types';

interface Context {
  currentStep: FormSteps;
  setCurrentStep: (_key: FormSteps) => void;
  stepsKeys: FormSteps[];
  stepsState: Partial<StepsState>;
  setStepValid: (_key: FormSteps, _value: boolean) => void;
  setStepSubmitted: (_key: FormSteps, _value: boolean) => void;
  nextStep: () => void;
}

export const FormContext = createContext<Context>({
  stepsKeys: [],
  stepsState: {},
  currentStep: FormSteps.First,
  setCurrentStep: (_key: FormSteps) => {},
  setStepValid: (_key: FormSteps, _value: boolean) => {},
  setStepSubmitted: (_key: FormSteps, _value: boolean) => {},
  nextStep: () => {}
});

export const useFormContext = () => useContext(FormContext);
