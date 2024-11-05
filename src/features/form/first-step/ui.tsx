'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSetPersistedFormData } from '@/shared/hooks/use-set-persisted-form-data';
import { REQUIRED_RULE, UNF_PATTERN } from '@/shared/constants/validation';
import { COUNTRIES_OPTIONS, FORMAT_OPTIONS, GENRE_OPTIONS } from './constants';

import { InputMask } from '@react-input/mask';
import { InputNumberFormat } from '@react-input/number-format';

import { Field } from '@/shared/ui/field';
import { Input, Select, Textarea } from '@/shared/ui/inputs';
import { UNF_MASK } from '@/shared/constants/mask';
import { FormSteps, useFormContext } from '@/entities/form';

interface FormState {
  name: string;
  genre: string;
  format: string;
  unf?: string;
  country: string;
  price?: string;
  description: string;
}

const initialData: FormState = {
  country: '',
  format: '',
  genre: '',
  price: '',
  unf: '',
  name: '',
  description: ''
};

export const FormFirstStep = () => {
  const { stepsState, setStepValid, setStepSubmitted, nextStep } =
    useFormContext();
  const { control, reset, handleSubmit, formState } = useForm<FormState>({
    defaultValues: initialData,
    mode: 'onBlur'
  });

  const firstStepState = useMemo(
    () => stepsState[FormSteps.First],
    [stepsState]
  );

  useSetPersistedFormData<FormState>(FormSteps.First, reset);

  const onValid = useCallback(
    (value: FormState) => {
      localStorage.setItem(FormSteps.First, JSON.stringify(value));

      setStepSubmitted(FormSteps.First, false);
      nextStep();
    },
    [setStepSubmitted, nextStep]
  );

  useEffect(() => {
    setStepValid(FormSteps.First, formState.isValid);
  }, [formState.isValid]);

  useEffect(() => {
    if (!firstStepState) return;

    if (firstStepState.isSubmitted) {
      handleSubmit(onValid)();
    }
  }, [firstStepState, handleSubmit]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-x-[123px] [&>div]:flex [&>div]:flex-col">
        <div>
          <Controller
            control={control}
            name={'name'}
            rules={{
              required: REQUIRED_RULE
            }}
            render={({ field, fieldState }) => (
              <Field name={'Название проекта'}>
                <Input
                  {...field}
                  error={fieldState?.error}
                  placeholder={'Название'}
                />
              </Field>
            )}
          />

          <Controller
            control={control}
            name={'genre'}
            rules={{
              required: REQUIRED_RULE
            }}
            render={({ field, fieldState }) => (
              <Field name={'Жанр'}>
                <Select
                  options={GENRE_OPTIONS}
                  inputProps={{
                    placeholder: 'Жанр',
                    error: fieldState?.error,
                    onBlur: field.onBlur
                  }}
                  {...field}
                />
              </Field>
            )}
          />

          <Controller
            control={control}
            name={'format'}
            rules={{
              required: REQUIRED_RULE
            }}
            render={({ field, fieldState }) => (
              <Field
                name={
                  'Формат (для онлайн-платформ, большого экрана, интернета, другое)'
                }
              >
                <Select
                  options={FORMAT_OPTIONS}
                  inputProps={{
                    placeholder: 'Формат',
                    error: fieldState?.error,
                    onBlur: field.onBlur
                  }}
                  {...field}
                />
              </Field>
            )}
          />

          <Controller
            control={control}
            name={'unf'}
            rules={{
              pattern: UNF_PATTERN
            }}
            render={({ field, fieldState }) => (
              <Field name={'№ УНФ или отсутствует'}>
                <InputMask
                  className={'mt-auto'}
                  placeholder={'890-000-000-00-000'}
                  error={fieldState?.error}
                  component={Input}
                  {...UNF_MASK}
                  {...field}
                />
              </Field>
            )}
          />
        </div>

        <div>
          <Controller
            control={control}
            name={'country'}
            rules={{
              required: REQUIRED_RULE
            }}
            render={({ field, fieldState }) => (
              <Field name={'Страна-производитель (копродукция)'}>
                <Select
                  options={COUNTRIES_OPTIONS}
                  inputProps={{
                    placeholder: 'Страна',
                    error: fieldState?.error
                  }}
                  {...field}
                />
              </Field>
            )}
          />

          <Controller
            control={control}
            name={'price'}
            render={({ field, fieldState }) => (
              <Field
                name={
                  'Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть'
                }
              >
                <InputNumberFormat
                  placeholder={'Сметная стоимость'}
                  error={fieldState?.error}
                  component={Input}
                  format={'currency'}
                  currency={'RUB'}
                  currencyDisplay={'narrowSymbol'}
                  locales={'ru-RU'}
                  signDisplay={'never'}
                  minimumFractionDigits={0}
                  maximumFractionDigits={0}
                  {...field}
                />
              </Field>
            )}
          />

          <Controller
            control={control}
            name={'description'}
            render={({ field, fieldState }) => (
              <Field name={'Синопсис'}>
                <Textarea
                  {...field}
                  placeholder={'Напишите краткое изложение'}
                  error={fieldState?.error}
                />
              </Field>
            )}
          />
        </div>
        {/*<div>*/}
        {/*  <div className="mb-6">*/}
        {/*    <label className="mb-[14px] block text-[15px] font-normal opacity-70">*/}
        {/*      Название проекта*/}
        {/*    </label>*/}
        {/*    <Input*/}
        {/*      {...register('name', { required: true })}*/}
        {/*      placeholder="Название"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="mb-6">*/}
        {/*    <label className="mb-[14px] block text-[15px] font-normal opacity-70">*/}
        {/*      Жанр*/}
        {/*    </label>*/}
        {/*    <Input placeholder="Жанр" />*/}
        {/*  </div>*/}
        {/*  <div className="mb-12">*/}
        {/*    <label className="mb-[14px] block text-[15px] font-normal opacity-70">*/}
        {/*      Формат (для онлайн-платформ, большого экрана, интернета, другое)*/}
        {/*    </label>*/}
        {/*    <Input placeholder="Формат" />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label className="mb-[14px] block text-[15px] font-normal opacity-70">*/}
        {/*      № УНФ или отсутствует*/}
        {/*    </label>*/}
        {/*    <Input placeholder="890-000-000-00-000" />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <div className="mb-8">*/}
        {/*    <label className="mb-[14px] block text-[15px] font-normal opacity-70">*/}
        {/*      Страна-производитель (копродукция)*/}
        {/*    </label>*/}
        {/*    <Input placeholder="Страна" />*/}
        {/*  </div>*/}
        {/*  <div className="mb-8">*/}
        {/*    <label className="mb-[14px] block text-[15px] font-normal opacity-70">*/}
        {/*      Сведения о сметной стоимости производства фильма на территории*/}
        {/*      Нижегородской области, если есть*/}
        {/*    </label>*/}
        {/*    <Input placeholder="Сметная стоимость" />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label className="mb-[14px] block text-[15px] font-normal opacity-70">*/}
        {/*      Сведения о сметной стоимости производства фильма на территории*/}
        {/*      Нижегородской области, если есть*/}
        {/*    </label>*/}
        {/*    <Textarea placeholder="Напишите краткое изложение" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </form>
  );
};
