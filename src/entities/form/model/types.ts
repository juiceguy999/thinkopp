import { ReactElement } from 'react';

export enum FormSteps {
  // eslint-disable-next-line no-unused-vars
  First = 'first',
  // eslint-disable-next-line no-unused-vars
  Second = 'second'
}

export type Steps = Record<FormSteps, ReactElement>;
export type StepsState = Record<
  FormSteps,
  {
    isValid: boolean;
    isSubmitted: boolean;
  }
>;
