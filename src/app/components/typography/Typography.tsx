import React from 'react';
import styles from './typography.module.css';

export enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2', //Subheading
  Body1 = 'body1',
  Body2Strong = 'body2-strong',
  Body2 = 'body2',
}

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  role?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  ariaLabel,
  ariaLabelledBy,
  role,
}) => {
  switch (variant) {
    case TypographyVariant.H1:
      return (
        <h1
          area-aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.heading1}
        >
          {children}
        </h1>
      );
    case TypographyVariant.H2:
      return (
        <h2
          area-aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.heading2}
        >
          {children}
        </h2>
      );
    case TypographyVariant.Body1:
      return (
        <span
          area-aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body1}
        >
          {children}
        </span>
      );
    case TypographyVariant.Body2Strong:
      return (
        <span
          area-aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body2Strong}
        >
          {children}
        </span>
      );
    case TypographyVariant.Body2:
      return (
        <span
          area-aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body2}
        >
          {children}
        </span>
      );
    default:
      return (
        <span
          area-aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          role={role}
          className={styles.body1}
        >
          {children}
        </span>
      );
  }
};

export default Typography;
