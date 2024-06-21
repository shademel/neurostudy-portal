'use client';

import styles from '../page.module.css';
import AuthLeftBanner from '../component/AuthLeftBanner';
import AuthFormFooter from '../component/AuthFormFooter';
import classNames from 'classnames';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import TextBox, {
  TEXTBOX_COL_WIDTH,
} from '@/app/components/formElements/TextBox';
import Form from '@/app/components/formElements/Form';
import { EMAIL_REGEX } from '@/app/utilities/constants';

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
        <div className={classNames(styles.textColumn, 'col-md-8')}>
          <div className={styles.textColumnWrapper}>
            <div className={styles.textTitleWrapper}>
              <p className={styles.textTitle}>Sign Up</p>
              <span className={styles.smallTextTitle}>Its quick and easy</span>
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
            </Form>
            <AuthFormFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
