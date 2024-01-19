import React, { useEffect, useRef, useState } from 'react';
import TextBox, { TextboxVariant } from '../textbox/Textbox';
import ActionButton from '../buttons/ActionButton';
import styles from './dialog.module.css';
import CRMCreateResponseInterface from '@/app/interfaces/CRMCreateResponseInterface';
import { TeacherRegistrationType } from '@/app/interfaces/TeacherRegistrationType';
import { registerTeacherData } from '@/app/utilities/registerTeacherData';
import Typography, { TypographyVariant } from '../typography/Typography';
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
} from '@/app/utilities/constants';

const DialogPopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const teacherRegistrationData: TeacherRegistrationType = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phone: phoneNumber,
    };
    if (firstNameError || lastNameError || phoneNumberError || emailError) {
      return;
    } else {
      const outcome: CRMCreateResponseInterface = await registerTeacherData(
        teacherRegistrationData
      );
      if (outcome.id) {
        setSubmissionSuccess(true);
      }
    }
  };

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState<string | undefined>();
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState<string | undefined>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState<string | undefined>(
    ''
  );
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>();

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
                      name={'FirstName'}
                      label={'First Name (required)'}
                      type={'text'}
                      value={firstName}
                      required={true}
                      placeholder={'Enter your first name'}
                      errorMessage={firstNameError}
                      onChange={(e) => setFirstName(e.target.value.trim())}
                      onBlur={() =>
                        !NAME_REGEX.test(firstName)
                          ? setFirstNameError('First Name is invalid')
                          : setFirstNameError(undefined)
                      }
                    />
                  </div>
                  <div className={styles.textArea}>
                    <TextBox
                      name={'LastName'}
                      label={'Last Name (required)'}
                      type={'text'}
                      value={lastName}
                      required={true}
                      placeholder={'Enter your last name'}
                      errorMessage={lastNameError}
                      onBlur={() =>
                        !NAME_REGEX.test(lastName)
                          ? setLastNameError('Last Name is invalid')
                          : setLastNameError(undefined)
                      }
                      onChange={(e) => setLastName(e.target.value.trim())}
                    />
                  </div>
                </div>
                <div className={styles.textArea}>
                  <TextBox
                    name={'PhoneNumber'}
                    label={'Phone Number'}
                    type={'text'}
                    value={phoneNumber}
                    errorMessage={phoneNumberError}
                    required={false}
                    placeholder={'Enter your phone number'}
                    onBlur={() =>
                      !PHONE_REGEX.test(phoneNumber)
                        ? setPhoneNumberError('Phone number is invalid')
                        : setPhoneNumberError(undefined)
                    }
                    onChange={(e) => setPhoneNumber(e.target.value.trim())}
                  />
                </div>
                <div className={styles.textArea}>
                  <TextBox
                    variant={TextboxVariant.LONGER}
                    name={'Email'}
                    label={'Email Address (required)'}
                    type={'email'}
                    value={email}
                    required={true}
                    errorMessage={emailError}
                    placeholder={'Enter your email address'}
                    onBlur={() =>
                      !EMAIL_REGEX.test(email)
                        ? setEmailError('Email Address is invalid')
                        : setEmailError(undefined)
                    }
                    onChange={(e) => setEmail(e.target.value.trim())}
                  />
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
