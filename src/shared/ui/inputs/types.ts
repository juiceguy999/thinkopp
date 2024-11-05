import { FieldError } from 'react-hook-form';
import { HTMLProps } from 'react';

export type InputsProps<T> = HTMLProps<T> & {
  error?: FieldError;
};
