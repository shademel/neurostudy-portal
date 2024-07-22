import { FieldValues } from 'react-hook-form';

export interface ForgotPasswordFieldValues extends FieldValues {
  username: string;
  confirmationCode: string;
  newPassword: string;
}

export interface InitForgotPasswordProps {
  handleVerificationCode: (username: string) => void;
}

export interface FinishForgotPasswordProps {
  username: string;
  handleResetDone: () => void;
}
