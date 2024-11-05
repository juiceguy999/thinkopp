import { ValidationRule } from 'react-hook-form';

export const REQUIRED_RULE: ValidationRule<boolean> = {
  value: true,
  message: 'Заполните поле'
};

export const UNF_PATTERN: ValidationRule<RegExp> = {
  value: /^\d{3}-\d{3}-\d{3}-\d{2}-\d{3}$/,
  message: 'Поле должно соответствовать формату'
};
