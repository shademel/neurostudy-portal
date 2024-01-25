import React, { ChangeEvent } from 'react';
import styles from './textarea.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';

export enum TextAreaVariant {
  LONG = 'long',
  REGULAR = 'regular',
}

type TextAreaProps = {
  name: string;
  label: string;
  value: string;
  required: boolean;
  placeholder: string;
  errorMessage?: string;
  className?: string;
  row?: number;
  cols?: number;
  maxlength?: number;
  spellCheck?: boolean;
  variant?: TextAreaVariant;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
};

export default function TextArea(props: TextAreaProps) {
  let textAreaClass = props.className ? props.className : styles.textArea;
  if (props.errorMessage) {
    textAreaClass = `${textAreaClass} ${styles.textAreaError}`;
  }

  const rows = 5;
  const cols = 10;

  if (props.variant === TextAreaVariant.LONG) {
    textAreaClass = `${textAreaClass} ${styles.long}`;
  }

  return (
    <div className={styles.textAreaContainer}>
      <label htmlFor={props.name} className={styles.label}>
        <Typography
          variant={TypographyVariant.Body2}
          color={props.errorMessage && 'red'}
        >
          {props.label}
        </Typography>
      </label>
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
        className={textAreaClass}
        onBlur={props.onBlur}
        rows={props.variant === TextAreaVariant.LONG ? rows : undefined}
        cols={props.variant === TextAreaVariant.LONG ? cols : undefined}
        maxLength={props.maxlength}
        spellCheck={props.spellCheck}
      />
      {props.errorMessage && (
        <span className={styles.errorMessage}>{props.errorMessage}</span>
      )}
    </div>
  );
}
