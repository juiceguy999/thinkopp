import { PropsWithChildren } from 'react';

type FieldProps = PropsWithChildren<{ name: string }>;

export const Field = ({ children, name }: FieldProps) => (
  <label className="mb-6">
    <span className="mb-3.5 block text-sub font-helveticaNeue font-normal opacity-70">
      {name}
    </span>
    {children}
  </label>
);
