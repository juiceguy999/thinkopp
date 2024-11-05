import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps) => (
  <h1 className={'text-3xl sm:text-4xl md:text-5xl font-semibold max-w-lg'}>
    {children}
  </h1>
);
