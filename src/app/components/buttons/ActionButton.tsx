'use client';
import React, { useCallback } from 'react';
import styles from './button.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BUTTON_STYLE } from '@/app/utilities/constants';
import classNames from 'classnames';

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
  fullWidth?: boolean;
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
  fullWidth,
}: ActionButtonProps) {
  const router = useRouter();

  const onClick = useCallback(
    function (this: HTMLButtonElement, e: React.MouseEvent<HTMLButtonElement>) {
      onRootClick?.call(this, e);
      to && router.push(to);
    },
    [router, onRootClick, to]
  );

  const buttonStyles = classNames(className, {
    [styles.primary]: style === BUTTON_STYLE.Primary,
    [styles.secondary]: style === BUTTON_STYLE.Secondary,
    [styles.tertiary]: style === BUTTON_STYLE.Tertiary,
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
  });

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
