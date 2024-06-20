'use client';

import { ChangeEvent, ReactNode } from 'react';
import styles from '../../styles/textbox.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';
import classNames from 'classnames';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
  ValidationRule,
} from 'react-hook-form';
import { TEXTBOX_VARIANT } from '@/app/utilities/constants';
import { capitalizeStr } from '@/app/utilities/common';

interface TextBoxProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  type?: string;
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>> | undefined;
  required?: boolean;
  placeholder?: string;
  className?: string;
  variant?: TEXTBOX_VARIANT;
  pattern?: ValidationRule<RegExp>;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
  onBlur?: () => void;
  autoComplete?: string;
}

const TextBox = <TFieldValues extends FieldValues>({
  control,
  className,
  variant,
  name,
  label,
  type = 'text',
  defaultValue = '' as PathValue<TFieldValues, Path<TFieldValues>>,
  placeholder,
  required = false,
  pattern,
  onChange,
  onBlur,
  autoComplete,
}: TextBoxProps<TFieldValues>) => {
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
            {label && (
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
            )}
            <input
              type={type}
              placeholder={placeholder}
              className={inputClassName}
              autoComplete={autoComplete}
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
              <small className={styles.errorMessage}>
                {
                  (error.message ||
                    `${label || capitalizeStr(name)} is invalid.`) as ReactNode
                }
              </small>
            )}
          </div>
        );
      }}
    />
  );
};

export default TextBox;
