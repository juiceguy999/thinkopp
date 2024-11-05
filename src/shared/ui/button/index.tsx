import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { VARIANTS, SIZES } from './constants';

type VariantType = typeof VARIANTS;
type SizeType = typeof SIZES;

type ButtonProps = PropsWithChildren<{
  variant?: keyof VariantType;
  size?: keyof SizeType;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'outline',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        relative
        inline-flex items-center justify-center 
        gap-x-3
        font-helvetica font-normal
        text-center rounded-full 
        transition-colors duration-200 h-12 
        [&>svg]:absolute [&>svg]:top-0 [&>svg]:bottom-0
        [&>svg]:my-auto
        disabled:bg-[#efefef] disabled:text-[#acacac] disabled:border-none 
        disabled:cursor-no-drop
        ${VARIANTS[variant]} ${SIZES[size]} ${className}
      `}
    >
      {children}
    </button>
  );
};
