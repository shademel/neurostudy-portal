'use client';

import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import styles from './auth.module.css';
import commonStyles from '@/app/styles/common.module.css';
import Form from '@/app/components/formElements/Form';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox from '@/app/components/formElements/TextBox';
import {
  BUTTON_STYLE,
  EMAIL_REGEX,
  TOAST_DEV_IN_PROGRESS_MESSAGE,
} from '@/app/utilities/constants';
import classNames from 'classnames';
import Link from 'next/link';
import ActionButton from '@/app/components/buttons/ActionButton';
import AuthFormHeader from './AuthFormHeader';
import AuthFormFooter from './AuthFormFooter';
import {
  SignUpOutput,
  autoSignIn,
  confirmSignUp,
  signUp,
} from 'aws-amplify/auth';
import { FORM_STATE } from '@/app/utilities/auth/constants';
import { useState } from 'react';
import LoaderWrapper from '../loaderWrapper/LoaderWrapper';
import toast from 'react-hot-toast';
import { notifyError } from '@/app/utilities/common';

interface SignUpFieldValues extends FieldValues {
  email: string;
  password: string;
  repeatPassword: string;
}

interface VerificationFieldValues extends FieldValues {
  code: string;
}

const AuthInitSignUp: React.FC = () => {
  const { control, handleSubmit }: UseFormReturn<SignUpFieldValues> =
    useForm<SignUpFieldValues>({ mode: 'onBlur' });
  const {
    control: verificationControl,
    handleSubmit: handleVerificationSubmit,
  }: UseFormReturn<VerificationFieldValues> = useForm<VerificationFieldValues>({
    mode: 'onBlur',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<FORM_STATE>(
    FORM_STATE.INITIALIZED
  );
  const [username, setUsername] = useState<string>('');

  const onSubmit = async (data: SignUpFieldValues) => {
    const { email, password } = data;

    setUsername('');
    setIsLoading(true);

    try {
      const { nextStep }: SignUpOutput = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true,
        },
      });

      const { signUpStep } = nextStep;

      if (signUpStep === FORM_STATE.CONFIRM_SIGN_UP) {
        setUsername(email);
        setFormState(signUpStep as FORM_STATE);
      } else {
        toast(TOAST_DEV_IN_PROGRESS_MESSAGE);
      }
    } catch (ex) {
      notifyError(ex as object);
    } finally {
      setIsLoading(false);
    }
  };

  const onVerificationSubmit = async (data: VerificationFieldValues) => {
    const { confirmationCode } = data;

    setIsLoading(true);

    try {
      const { nextStep }: SignUpOutput = await confirmSignUp({
        username,
        confirmationCode,
      });

      const { signUpStep } = nextStep;
      if (signUpStep === FORM_STATE.COMPLETE_AUTO_SIGN_IN) {
        try {
          await autoSignIn();
        } catch (ex) {
          notifyError(ex as object);
        }
      }
    } catch (ex) {
      notifyError(ex as object);
    } finally {
      autoSignIn;
      setIsLoading(false);
    }
  };

  const isConfirming = formState === FORM_STATE.CONFIRM_SIGN_UP;

  return (
    <LoaderWrapper
      isLoading={isLoading}
      className={styles.formColumnWrapper}
      expandLoaderWidth
    >
      <AuthFormHeader />
      {isConfirming && (
        <Form
          control={verificationControl}
          onSubmit={handleVerificationSubmit(onVerificationSubmit)}
        >
          <Typography variant={TypographyVariant.Body3MOB} className='pt-3'>
            Please enter the verification code sent to <b>{username}</b>.
          </Typography>
          <TextBox
            name='confirmationCode'
            label='Verification Code'
            required
            placeholder='Verification Code'
          />
          <div>
            <ActionButton
              type='submit'
              label='Verify'
              className={classNames(styles.btn, styles.submitBtn, 'mt-0')}
              style={BUTTON_STYLE.Secondary}
            />
          </div>
        </Form>
      )}
      <Form
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(isConfirming && commonStyles.hide)}
      >
        <TextBox
          name='email'
          type='email'
          label='Email Address'
          required
          placeholder='Email address'
          pattern={EMAIL_REGEX}
        />
        <TextBox
          name='password'
          type='password'
          label='Password'
          required
          placeholder='Password'
          autoComplete='new-password'
        />
        <TextBox
          name='repeatPassword'
          type='password'
          label='Repeat Password'
          required
          placeholder='Repeat Password'
          autoComplete='new-password'
        />
        <Typography
          variant={TypographyVariant.Body2}
          className={classNames('pt-3', commonStyles.textCenter)}
        >
          By signing up, you agree to our{' '}
          <Link href='#'>Terms and Conditions</Link>
        </Typography>
        <div className='my-3'>
          <ActionButton
            type='submit'
            label='Sign Up'
            style={BUTTON_STYLE.Primary}
            fullWidth
          />
        </div>
      </Form>
      <AuthFormFooter />
    </LoaderWrapper>
  );
};

export default AuthInitSignUp;
