'use client';
import React, { useCallback } from 'react';
import styles from './button.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BUTTON_STYLE } from '@/app/utilities/constants';

interface ActionButtonProps {
  label: string;
  icon?: string;
  style?: BUTTON_STYLE;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  to?: string;
}

export default function ActionButton({
  label,
  icon,
  style,
  disabled,
  onClick: onRootClick,
  iconPosition = 'left',
  className,
  type,
  to,
}: ActionButtonProps) {
  const router = useRouter();

  const onClick = useCallback(
    function (this: HTMLButtonElement, e: React.MouseEvent<HTMLButtonElement>) {
      onRootClick?.call(this, e);
      to && router.push(to);
    },
    [router, onRootClick, to]
  );

  let buttonStyles;

  switch (style) {
    case 'primary-full':
      buttonStyles = styles.btn1Full;
      break;
    case 'secondary':
      buttonStyles = styles.btn2;
      break;
    case 'secondary-full':
      buttonStyles = styles.btn2Full;
      break;
    case 'tertiary':
      buttonStyles = styles.btn3;
      break;
    case 'tertiary-full':
      buttonStyles = styles.btn3Full;
      break;
    default:
      buttonStyles = styles.btn1;
  }

  if (disabled) {
    buttonStyles = `${buttonStyles} ${styles.disabled}`;
  }
  if (className) {
    buttonStyles = `${buttonStyles} ${className}`;
  }

  return (
    <button
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {iconPosition === 'left' && icon && <Image src={icon} alt='icon' />}
      <span>{label}</span>
      {iconPosition === 'right' && icon && <Image src={icon} alt='icon' />}
    </button>
  );
}
