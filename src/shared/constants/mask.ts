import { InputMaskProps } from '@react-input/mask';

type Mask = Pick<InputMaskProps, 'mask' | 'replacement'>;

export const UNF_MASK: Mask = {
  mask: '___-___-___-__-___',
  replacement: { _: /\d/ }
};
