'use client';

import styles from './auth.module.css';
import ActionButton from '../buttons/ActionButton';
import AuthLeftBanner from './AuthLeftBanner';
import AuthFormFooter from './AuthFormFooter';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox from '@/app/components/formElements/TextBox/TextBox';
import { BUTTON_STYLE, EMAIL_REGEX } from '@/app/utilities/constants';
import classNames from 'classnames';
import Form from '@/app/components/formElements/Form';
import AuthFormHeader from './AuthFormHeader';
import LoaderWrapper from '../loader/LoaderWrapper';
import { useState } from 'react';

interface ForgotPasswordFieldValues extends FieldValues {
  username: string;
}

const ForgotPassword = () => {
  const methods: UseFormReturn<ForgotPasswordFieldValues> =
    useForm<ForgotPasswordFieldValues>({
      mode: 'onBlur',
    });

  const [isLoading] = useState<boolean>(false);

  const onSubmit = async () => {};

  return (
    <main className={styles.container}>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
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
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
