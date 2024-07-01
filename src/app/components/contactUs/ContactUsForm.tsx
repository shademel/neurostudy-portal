'use client';
import React, { useState } from 'react';
import TextBox from '@/app/components/formElements/TextBox/TextBox';
import TextArea from '@/app/components/formElements/TextArea/TextArea';
import ActionButton from '../buttons/ActionButton';
import styles from './contactUs.module.css';
import CRMCreateResponseInterface from '@/app/interfaces/CRMCreateResponseInterface';
import { UserFormSubmissionType } from '@/app/interfaces/UserFormSubmissionType';
import {
  BUTTON_STYLE,
  EMAIL_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
} from '@/app/utilities/constants';
import { registerContactData } from '@/app/utilities/register/registerContactData';
import Form from '@/app/components/formElements/Form';
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import { notifyError, notifySuccess } from '@/app/utilities/common';
import LoaderWrapper from '../loader/LoaderWrapper';
import ContactUsLeftBanner from './ContactUsLeftBanner';
import classNames from 'classnames';

interface ContactFieldValues extends FieldValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  jobtitle: string;
  message: string;
}

const ContactUsForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods: UseFormReturn<ContactFieldValues> =
    useForm<ContactFieldValues>({ mode: 'onBlur' });

  const onSubmit = async (data: ContactFieldValues) => {
    const { firstname, lastname, email, phone, jobtitle, message } = data;

    const userRegistrationData: UserFormSubmissionType = {
      firstname,
      lastname,
      email,
      phone,
      jobtitle,
      message,
    };

    setIsLoading(true);

    try {
      const outcome = (await registerContactData(
        userRegistrationData
      )) as CRMCreateResponseInterface;
      if (outcome.id) {
        notifySuccess('Successfully sent');
      }
    } catch (error) {
      notifyError(error as object);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className='row'>
        <ContactUsLeftBanner />
        <div className={classNames(styles.formColumn, 'col-md-8')}>
          <LoaderWrapper
            isLoading={isLoading}
            className={styles.formColumnWrapper}
            expandLoaderWidth
          >
            <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
              <div className={styles.textboxBody}>
                <div className={styles.nameArea}>
                  <div>
                    <TextBox
                      name='firstname'
                      label='First Name'
                      required
                      placeholder='Enter your first name'
                      pattern={NAME_REGEX}
                      showLabel
                      className={'col-md-12'}
                    />
                  </div>
                  <div>
                    <TextBox
                      name='lastname'
                      label='Last Name'
                      required
                      placeholder='Enter your last name'
                      pattern={NAME_REGEX}
                      showLabel
                      className={'col-md-12'}
                    />
                  </div>
                </div>
                <div className={styles.phoneArea}>
                  <div>
                    <TextBox
                      name='phone'
                      label='Phone number'
                      placeholder='Enter your phone number'
                      pattern={PHONE_REGEX}
                      showLabel
                      className={'col-md-12'}
                    />
                  </div>
                  <div className={styles.secondPhone}>
                    <TextBox
                      name='secondphone'
                      label='Phone number'
                      placeholder='Enter your phone number'
                      pattern={PHONE_REGEX}
                      showLabel
                      className={'col-md-12'}
                    />
                  </div>
                </div>
                <div className={styles.emailJobArea}>
                  <div>
                    <TextBox
                      name='email'
                      label='Email Address'
                      required
                      placeholder='Enter your email address'
                      pattern={EMAIL_REGEX}
                      showLabel
                    />
                  </div>
                  <div>
                    <TextBox
                      name='jobtitle'
                      label='Designation'
                      required
                      placeholder='Teacher, Student, Institute, Other'
                      showLabel
                    />
                  </div>
                </div>
                <div className={styles.messageArea}>
                  <TextArea
                    name='message'
                    label='Message'
                    showLabel
                    placeholder={'Enter your message'}
                    rules={{
                      maxLength: 300,
                    }}
                  ></TextArea>
                </div>
                <div className='border-box-parent col-md-12 my-3'>
                  <ActionButton
                    type='submit'
                    label='Login'
                    style={BUTTON_STYLE.Primary}
                    fullWidth
                  />
                </div>
              </div>
            </Form>
          </LoaderWrapper>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
