'use client';

import { useMemo, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import './ui.css';
import { InputsProps } from '@/shared/ui/inputs/types';
import { Input } from '@/shared/ui/inputs';

export interface Option {
  value: number | string;
  label: string;
}

type SelectOptions = ControllerRenderProps & {
  options: Option[];
  inputProps?: InputsProps<HTMLInputElement>;
};

export const Select = ({
  options,
  onChange,
  value: formValue,
  inputProps = {},
  ...props
}: SelectOptions) => {
  const selectedOptionIndex = useMemo(
    () => options.findIndex(({ value }) => value === formValue),
    [options, formValue]
  );

  const [isListShowed, setIsListShowed] = useState<boolean>(false);

  const hideList = () => {
    if (isListShowed) {
      props.onBlur();
    }
    setIsListShowed(false);
  };

  const showList = () => setIsListShowed(true);

  return (
    <div className={'relative'} onMouseLeave={hideList}>
      <input type="hidden" readOnly {...props} />
      <Input
        readOnly
        className={'focus:border-main-transparent ui-input cursor-pointer'}
        value={options?.[selectedOptionIndex]?.label ?? ''}
        {...inputProps}
        onClick={showList}
      />
      <ul
        className={`
          absolute z-[2] top-full w-full pt-2 transition-opacity pointer-events-none opacity-0 
          ${isListShowed ? 'pointer-events-auto opacity-100' : ''}
        `}
      >
        <div className={'max-h-32 overflow-y-auto'}>
          {options.map(({ value, label }, index) => (
            <li
              className={`
              [&:first-of-type]:border-t
              [&:first-of-type]:rounded-t-md [&:last-of-type]:rounded-b-md 
              border border-t-0
              p-2 cursor-pointer 
              hover:bg-zinc-50 
              transition-colors
              ${index === selectedOptionIndex ? 'bg-zinc-50' : 'bg-white'}
            `}
              onClick={() => {
                onChange(value);
              }}
              key={value}
            >
              {label}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
