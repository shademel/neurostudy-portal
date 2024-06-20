'use client';

import { ChangeEvent, ReactNode } from 'react';
import styles from '../../styles/textbox.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';
import classNames from 'classnames';
import {
  Control,
  Controller,
  FieldValues,
  ValidationRule,
} from 'react-hook-form';
import { TEXTBOX_VARIANT } from '@/app/utilities/constants';

type TextBoxProps = {
  control: Control<FieldValues>;
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  variant?: TEXTBOX_VARIANT;
  pattern?: ValidationRule<RegExp>;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
  onBlur?: () => void;
};

export default function TextBox({
  control,
  className,
  variant,
  name,
  label,
  type = 'text',
  defaultValue = '',
  placeholder,
  required = false,
  pattern,
  onChange,
  onBlur,
}: TextBoxProps) {
  const rules = {
    required,
    pattern,
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={(props) => {
        const {
          field,
          formState: { errors },
        } = props;

        const error = errors[name];

        const inputClassName = classNames(
          className || styles.textBox,
          error && styles.textboxError,
          {
            [styles.long]: variant === TEXTBOX_VARIANT.LONG,
            [styles.longer]: variant === TEXTBOX_VARIANT.LONGER,
          }
        );

        return (
          <div className={styles.textBoxContainer}>
            <label htmlFor={name} className={styles.label}>
              <Typography
                variant={TypographyVariant.Body2}
                color={error && 'red'}
              >
                {label}
                {required && '* '}
                {required && (
                  <Typography
                    variant={TypographyVariant.LABELtext}
                    color='var(--grey)'
                  >
                    (required)
                  </Typography>
                )}
              </Typography>
            </label>
            <input
              type={type}
              placeholder={placeholder}
              className={inputClassName}
              {...field}
              onChange={function (this: HTMLInputElement, ...args) {
                field.onChange.apply(this, args);
                onChange?.apply(this, args);
              }}
              onBlur={function (this: HTMLInputElement) {
                field.onBlur.apply(this);
                onBlur?.apply(this);
              }}
            />
            {error && (
              <span className={styles.errorMessage}>
                {(error.message || `${label} is invalid.`) as ReactNode}
              </span>
            )}
          </div>
        );
      }}
    />
  );
}
