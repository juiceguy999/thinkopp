import { forwardRef } from 'react';
import type { InputsProps } from '../types';
import './ui.css';

export const Input = forwardRef<
  HTMLInputElement,
  InputsProps<HTMLInputElement>
>(({ className, error, ...props }, ref) => (
  <div className={'ui-input__wrapper'}>
    <input
      {...props}
      className={`ui-input h-[54px] ${!!error ? 'ui-input_invalid' : ''} ${className}`}
      ref={ref}
    />
    {error?.message && (
      <span className={'ui-input__error'}>{error.message}</span>
    )}
  </div>
));

Input.displayName = 'Input';
