import React from 'react';

export enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2',
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
  tabIndex?: number;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  ariaLabel,
  ariaLabelledBy,
  role,
  tabIndex,
}) => {
  const getStyle = () => {
    switch (variant) {
      case TypographyVariant.H1:
        return { fontSize: '48px', fontWeight: 'bold' };
      case TypographyVariant.H2:
        return { fontSize: '36px', fontWeight: 'medium' };
      case TypographyVariant.Body1:
        return { fontSize: '24px', fontWeight: 'regular' };
      case TypographyVariant.Body2Strong:
        return { fontSize: '16px', fontWeight: 'semibold' };
      case TypographyVariant.Body2:
        return { fontSize: '16px', fontWeight: 'regular' };
      default:
        return {};
    }
  };

  const style = getStyle();

  return (
    <div
      style={style}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      role={role}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
};

export default Typography;
