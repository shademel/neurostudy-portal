import { ChangeEvent } from 'react';
import styles from './textbox.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';

export enum TextboxVariant {
  LONG = 'long',
  LONGER = 'longer',
  REGULAR = 'regular',
}

type TextBoxProps = {
  name: string;
  label: string;
  type: string;
  value: string;
  required: boolean;
  placeholder: string;
  errorMessage?: string;
  className?: string;
  variant?: TextboxVariant;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextBox(props: TextBoxProps) {
  let textBoxClass = props.className ? props.className : styles.textBox;
  if (props.errorMessage) {
    textBoxClass = `${textBoxClass} ${styles.textboxError}`;
  }
  if (props.variant === TextboxVariant.LONG) {
    textBoxClass = `${textBoxClass} ${styles.long}`;
  } else if (props.variant === TextboxVariant.LONGER) {
    textBoxClass = `${textBoxClass} ${styles.longer}`;
  }

  return (
    <div className={styles.textBoxContainer}>
      <label htmlFor={props.name} className={styles.label}>
        <Typography
          variant={TypographyVariant.Body2}
          color={props.errorMessage && 'red'}
        >
          {props.label}
        </Typography>
      </label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
        className={textBoxClass}
      />
      {props.errorMessage && (
        <span className={styles.errorMessage}>{props.errorMessage}</span>
      )}
    </div>
  );
}
