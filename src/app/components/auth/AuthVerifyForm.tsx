'use client';

import styles from './auth.module.css';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import Form from '../formElements/Form';
import Typography, { TypographyVariant } from '../typography/Typography';
import ActionButton from '../buttons/ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';
import classNames from 'classnames';
import { FORM_STATE } from '@/app/utilities/auth/constants';
import { SignUpOutput, autoSignIn, confirmSignUp } from 'aws-amplify/auth';
import { notifyError } from '@/app/utilities/common';
import TextBox from '../formElements/TextBox';

interface PropType {
  username: string;
  setIsLoading: (isLoading: boolean) => void;
}

interface VerificationFieldValues extends FieldValues {
  code: string;
}

const AuthVerifyForm: React.FC<PropType> = ({
  username,
  setIsLoading,
}: PropType) => {
  const { control, handleSubmit }: UseFormReturn<VerificationFieldValues> =
    useForm<VerificationFieldValues>({ mode: 'onBlur' });

  const onSubmit = async (data: VerificationFieldValues) => {
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
      setIsLoading(false);
    }
  };

  return (
    <Form control={control} onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default AuthVerifyForm;
