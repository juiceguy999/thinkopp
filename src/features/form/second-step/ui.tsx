'use client';

import { FormSteps, useFormContext } from '@/entities/form';
import { useEffect } from 'react';

export const FormSecondStep = () => {
  const { setStepValid } = useFormContext();

  useEffect(() => {
    setStepValid(FormSteps.Second, true);
  }, []);

  return (
    <div>
      <h1>test</h1>
    </div>
  );
};
