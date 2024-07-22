'use client';

import styles from './auth.module.css';
import { ForgotPasswordFieldValues } from '@/app/interfaces/ForgotPasswordInterface';
import { FORM_STATE } from '@/app/utilities/auth/constants';
import { resetPassword, ResetPasswordOutput } from 'aws-amplify/auth';
import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import Form from '@/app/components/formElements/Form';
import TextBox from '@/app/components/formElements/TextBox/TextBox';
import toast from 'react-hot-toast';
import LoaderWrapper from '../loader/LoaderWrapper';
import AuthFormHeader from './AuthFormHeader';
import ActionButton from '../buttons/ActionButton';
import {
  BUTTON_STYLE,
  EMAIL_REGEX,
  TOAST_DEV_IN_PROGRESS_MESSAGE,
} from '@/app/utilities/constants';
import { notifyError } from '@/app/utilities/common';
import AuthFormFooter from './AuthFormFooter';
import { InitForgotPasswordProps } from '@/app/interfaces/ForgotPasswordInterface';

const AuthInitForgotPassword: React.FC<InitForgotPasswordProps> = ({
  handleVerificationCode,
}) => {
  const methods: UseFormReturn<ForgotPasswordFieldValues> =
    useForm<ForgotPasswordFieldValues>({
      mode: 'onBlur',
    });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: ForgotPasswordFieldValues) => {
    const { username } = data;

    setIsLoading(true);

    try {
      const output: ResetPasswordOutput = await resetPassword({ username });

      const {
        nextStep: { resetPasswordStep, codeDeliveryDetails },
      } = output;
      switch (resetPasswordStep) {
        case FORM_STATE.CONFIRM_RESET_PASSWORD_WITH_CODE:
          toast(
            `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
          );
          handleVerificationCode(username);
          break;
        default:
          toast(TOAST_DEV_IN_PROGRESS_MESSAGE);
          break;
      }
    } catch (ex) {
      notifyError(ex as object);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoaderWrapper
      isLoading={isLoading}
      className={styles.formColumnWrapper}
      expandLoaderWidth
    >
      <AuthFormHeader title='Forgot Password?' subText='lorem ipsum' />
      <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
        <TextBox
          name='username'
          type='email'
          label='Email Address'
          required
          placeholder='Email address'
          pattern={EMAIL_REGEX}
        />
        <div className='my-3'>
          <ActionButton
            type='submit'
            label='Send Login Link'
            style={BUTTON_STYLE.Primary}
            fullWidth
          />
        </div>
      </Form>
      <AuthFormFooter />
    </LoaderWrapper>
  );
};

export default AuthInitForgotPassword;
