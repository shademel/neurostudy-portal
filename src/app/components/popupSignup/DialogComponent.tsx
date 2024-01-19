import React, { useEffect, useRef, useState } from 'react';
import TextBox, { TextboxVariant } from '../textbox/Textbox';
import ActionButton from '../buttons/ActionButton';
import styles from './dialog.module.css';
import CRMCreateResponseInterface from '@/app/interfaces/CRMCreateResponseInterface';
import { TeacherRegistrationType } from '@/app/interfaces/TeacherRegistrationType';
import { registerTeacherData } from '@/app/utilities/registerTeacherData';
import { isValidTeacherRegistrationData } from '@/app/utilities/validateTeacherRegistrationData';
import Typography, { TypographyVariant } from '../typography/Typography';

const DialogPopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const teacherRegistrationData: TeacherRegistrationType = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phoneNumber,
    };
    if (isValidTeacherRegistrationData(teacherRegistrationData)) {
      const outcome: CRMCreateResponseInterface = await registerTeacherData(
        teacherRegistrationData
      );
      if (outcome.id) {
        setSubmissionSuccess(true);
      }
    } else {
      // Set invalid data message for form
      // Better replace isValidTeacherRegistrationData with individual checks
      // so that we can set error messages for individual items
      console.log('invalid data');
    }
  };

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState(' ');
  const [phoneNumber, setPhoneNumber] = useState(' ');
  const [email, setEmail] = useState(' ');

  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const dialog = document.querySelector('dialog');
    if (dialog && !dialog.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className={`${styles.dialogBackground} ${
        submissionSuccess ? styles.hidden : ''
      }`}
    >
      <dialog open={!submissionSuccess}>
        <form
          className={styles.container}
          onSubmit={(event) => handleSubmit(event)}
        >
          {!submissionSuccess ? (
            <>
              <div className={styles.header}>
                <Typography variant={TypographyVariant.H1}>
                  Unlock Content
                </Typography>
              </div>
              <div className={styles.textboxBody}>
                <div className={styles.name}>
                  <div className={styles.textArea}>
                    <TextBox
                      name={'firstName'}
                      label={'First Name (required)'}
                      type={'text'}
                      value={firstName}
                      required={true}
                      placeholder={'Enter your first name'}
                      onChange={(e) => setFirstName(e.target.value.trim())}
                    ></TextBox>
                  </div>
                  <div className={styles.textArea}>
                    <TextBox
                      name={'lastName'}
                      label={'Last Name (required)'}
                      type={'text'}
                      value={lastName}
                      required={true}
                      placeholder={'Enter your last name'}
                      onChange={(e) => setLastName(e.target.value.trim())}
                    ></TextBox>
                  </div>
                </div>
                <div className={styles.textArea}>
                  <TextBox
                    name={'phoneNumber'}
                    label={'Phone Number'}
                    type={'text'}
                    value={phoneNumber}
                    required={false}
                    placeholder={'Enter your phone number'}
                    onChange={(e) => setPhoneNumber(e.target.value.trim())}
                  ></TextBox>
                </div>
                <div className={styles.textArea}>
                  <TextBox
                    variant={TextboxVariant.LONGER}
                    name={'email'}
                    label={'Email Address (required)'}
                    type={'email'}
                    value={email}
                    required={true}
                    placeholder={'Enter your email address'}
                    onChange={(e) => setEmail(e.target.value.trim())}
                  ></TextBox>
                </div>
                <div className={styles.buttonArea}>
                  <ActionButton
                    type='submit'
                    label='Submit'
                    disabled={false}
                    className={styles.accessButton}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className={styles.header}>
              <Typography variant={TypographyVariant.H1}>
                Thank you for your request, we will get back to you soon.
              </Typography>
              <ActionButton
                label='Close'
                disabled={false}
                className={styles.accessButton}
                onClick={() => onClose()}
              />
            </div>
          )}
        </form>
      </dialog>
    </div>
  );
};

export default DialogPopUp;
