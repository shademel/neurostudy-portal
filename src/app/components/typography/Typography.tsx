import React from 'react';
import styles from './typography.module.css';

export enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2', //Subheading
  Body1 = 'body1',
  Body2Strong = 'body2-strong',
  Body2 = 'body2',
  Body3MOBstrong = 'body3-mob-strong',
  Body3MOB = 'body3-mob',
  LABELtext = 'labelText',
}

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  role?: string;
  color?: string;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  ariaLabel,
  ariaLabelledBy,
  role,
  color,
}) => {
  const style = color ? { color } : {};
  switch (variant) {
    case TypographyVariant.H1:
      return (
        <h1
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.heading1}
          style={style}
        >
          {children}
        </h1>
      );
    case TypographyVariant.H2:
      return (
        <h2
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.heading2}
          style={style}
        >
          {children}
        </h2>
      );
    case TypographyVariant.Body1:
      return (
        <span
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body1}
          style={style}
        >
          {children}
        </span>
      );
    case TypographyVariant.Body2Strong:
      return (
        <span
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body2Strong}
          style={style}
        >
          {children}
        </span>
      );
    case TypographyVariant.Body2:
      return (
        <span
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body2}
          style={style}
        >
          {children}
        </span>
      );
    case TypographyVariant.Body3MOBstrong:
      return (
        <span
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.mobBody3Strong}
          style={style}
        >
          {children}
        </span>
      );
    case TypographyVariant.Body3MOB:
      return (
        <span
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.mobBody3}
          style={style}
        >
          {children}
        </span>
      );
    case TypographyVariant.LABELtext:
      return (
        <span
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.labelText}
          style={style}
        >
          {children}
        </span>
      );

    default:
      return (
        <span
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body1}
          style={style}
        >
          {children}
        </span>
      );
  }
};

export default Typography;
