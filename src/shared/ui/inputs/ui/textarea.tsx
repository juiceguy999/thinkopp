import { forwardRef } from 'react';
import type { InputsProps } from '../types';
import './ui.css';

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  InputsProps<HTMLTextAreaElement>
>(({ className, error, ...props }, ref) => (
  <div className={'ui-input__wrapper'}>
    <textarea
      {...props}
      className={`ui-input resize-none h-[157px]  ${!!error ? 'ui-input_invalid' : ''} ${className}`}
      ref={ref}
    />
    {error?.message && (
      <span className={'ui-input__error'}>{error.message}</span>
    )}
  </div>
));

Textarea.displayName = 'Textarea';
