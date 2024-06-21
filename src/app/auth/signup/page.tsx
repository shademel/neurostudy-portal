'use client';

import styles from '../page.module.css';
import commonStyles from '@/app/styles/common.module.css';
import ActionButton from '@/app/components/buttons/ActionButton';
import AuthLeftBanner from '../component/AuthLeftBanner';
import AuthFormFooter from '../component/AuthFormFooter';
import classNames from 'classnames';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox, {
  TEXTBOX_COL_WIDTH,
} from '@/app/components/formElements/TextBox';
import Form from '@/app/components/formElements/Form';
import { EMAIL_REGEX } from '@/app/utilities/constants';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import Link from 'next/link';

interface SignUpFieldValues extends FieldValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  date: number;
  month: number;
  year: number;
}

const SignUpPage = () => {
  const { control }: UseFormReturn<SignUpFieldValues> =
    useForm<SignUpFieldValues>({ mode: 'onBlur' });

  return (
    <main className='main-container'>
      <div className='row'>
        <AuthLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          <div className={styles.formColumnWrapper}>
            <div className={styles.formTitleWrapper}>
              <div className={styles.formTitle}>Sign Up</div>
              <Typography
                variant={TypographyVariant.Body2}
                color='var(--grey-500)'
              >
                Its quick and easy
              </Typography>
            </div>
            <Form control={control}>
              <TextBox
                name='firstName'
                label='First Name'
                required
                placeholder='First Name'
                colWidth={TEXTBOX_COL_WIDTH.HALF}
              />
              <TextBox
                name='lastName'
                label='Surname'
                required
                placeholder='Surname'
                colWidth={TEXTBOX_COL_WIDTH.HALF}
              />
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
                label='New Password'
                required
                placeholder='New Password'
                autoComplete='new-password'
              />
              <Typography
                variant={TypographyVariant.Body3MOB}
                className={classNames(styles.dobLabel, 'col-md-12', 'pt-2')}
              >
                Date of Birth
              </Typography>
              <div className='col-md-12'>
                <div className={classNames(styles.dobInputContainer, 'row')}>
                  <TextBox
                    name='date'
                    type='number'
                    label='Date'
                    required
                    placeholder='Date'
                  />
                  <TextBox
                    name='month'
                    type='number'
                    label='Month'
                    required
                    placeholder='Month'
                  />
                  <TextBox
                    name='year'
                    type='number'
                    label='Year'
                    required
                    placeholder='Year'
                  />
                </div>
              </div>
              <Typography
                variant={TypographyVariant.Body2}
                className={classNames('pt-3 pb-2', commonStyles.textCenter)}
              >
                By signing up, you agree to our{' '}
                <Link href='#'>Terms and Conditions</Link>
              </Typography>
              <div>
                <ActionButton
                  type='submit'
                  label='Sign Up'
                  disabled={true}
                  className={styles.submitBtn}
                />
              </div>
            </Form>
            <AuthFormFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
