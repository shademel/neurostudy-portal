import { ChangeEvent } from 'react';
import styles from './textbox.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';
import classNames from 'classnames';

export enum TextboxVariant {
  LONG = 'long',
  LONGER = 'longer',
  REGULAR = 'regular',
}

type TextBoxProps = {
  name: string;
  label: string;
  type: string;
  value?: string | undefined;
  required: boolean;
  placeholder: string;
  errorMessage?: string;
  className?: string;
  variant?: TextboxVariant;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};

export default function TextBox({
  className,
  errorMessage,
  variant,
  name,
  label,
  type,
  value,
  placeholder,
  required,
  onBlur,
  onChange,
}: TextBoxProps) {
  const inputClassName = classNames(
    className || styles.textBox,
    errorMessage && styles.textboxError,
    {
      [styles.long]: variant === TextboxVariant.LONG,
      [styles.longer]: variant === TextboxVariant.LONGER,
    }
  );

  return (
    <div className={styles.textBoxContainer}>
      <label htmlFor={name} className={styles.label}>
        <Typography
          variant={TypographyVariant.Body2}
          color={errorMessage && 'red'}
        >
          {label}
        </Typography>
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={inputClassName}
        onBlur={onBlur}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
}
