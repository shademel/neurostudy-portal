'use client';

import { ChangeEvent } from 'react';
import styles from './textarea.module.css';
import commonStyles from '@/app/styles/common.module.css';
import classNames from 'classnames';
import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { TEXTBOX_COL_WIDTH } from '../TextBox/TextBox';
import Label from '../Label/Label';
import ErrorBox from '../ErrorBox/ErrorBox';

interface TextAreaProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  showLabel?: boolean;
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>> | undefined;
  required?: boolean;
  placeholder?: string;
  className?: string;
  rows?: number;
  cols?: TEXTBOX_COL_WIDTH;
  onChange?: ((event: ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
  onBlur?: () => void;
  rules?: Pick<
    RegisterOptions<FieldValues>,
    'maxLength' | 'minLength' | 'validate' | 'required'
  >;
}

const TextArea = <TFieldValues extends FieldValues>({
  name,
  label,
  showLabel = false,
  defaultValue = '' as PathValue<TFieldValues, Path<TFieldValues>>,
  required = false,
  placeholder,
  className,
  rows = 5,
  cols = TEXTBOX_COL_WIDTH.FULL,
  onChange,
  onBlur,
  rules: rootRules,
}: TextAreaProps<TFieldValues>) => {
  const { control } = useFormContext();

  const rules = {
    required,
    ...rootRules,
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
          styles.message,
          className,
          error && commonStyles.error
        );

        return (
          <div
            className={classNames(
              'border-box-parent col-md-' + cols,
              styles.textAreaContainer
            )}
          >
            {showLabel && (
              <Label
                name={name}
                color={error && 'red'}
                label={label}
                required={required}
              />
            )}
            <textarea
              placeholder={placeholder}
              className={inputClassName}
              rows={rows}
              cols={cols}
              {...field}
              onChange={function (this: HTMLTextAreaElement, ...args) {
                field.onChange.apply(this, args);
                onChange?.apply(this, args);
              }}
              onBlur={function (this: HTMLTextAreaElement) {
                field.onBlur.apply(this);
                onBlur?.apply(this);
              }}
            />
            {error && (
              <ErrorBox message={error.message?.toString()} label={label} />
            )}
          </div>
        );
      }}
    />
  );
};

export default TextArea;
