import React, { useEffect, useRef, useState } from 'react';
import TextBox, { TextboxVariant } from '../textbox/Textbox';
import ActionButton from '../buttons/ActionButton';
import CRMCreateResponseInterface from '@/app/interfaces/CRMCreateResponseInterface';
import UserSubscrtiptionInterface from '@/app/interfaces/UserSubscriptionInterface';
import { registerSubscriptionData } from '@/app/utilities/registerSubscriptionData';
import { EMAIL_REGEX } from '@/app/utilities/constants';
import styles from './dialog.module.css';
import Image from 'next/image';
import CloseButton from '../../images/close.png';
import MailboxLady from '../../images/mailboxLady.png';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';

const DialogPopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userSubscriptionData: UserSubscrtiptionInterface = {
      email: email,
    };
    if (emailError) {
      return;
    } else {
      const outcome: CRMCreateResponseInterface =
        await registerSubscriptionData(userSubscriptionData);
      if (outcome.id) {
        setSubmissionSuccess(true);
      }
    }
  };

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>();

  return (
    <div ref={popupRef} className={`${styles.dialogBackground}`}>
      <dialog open={true}>
        <div className={styles.closeButtonWrapper}>
          <button onClick={onClose}>
            <div className={styles.closeButton}>
              <Image src={CloseButton} alt='Close' title='Close' fill={true} />
            </div>
          </button>
        </div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={styles.container}>
            <div className={styles.imageWrapper}>
              <Image
                src={MailboxLady}
                alt='Subscribe to our Newsletter'
                title='Subscribe to out Newsletter'
                fill={true}
                quality={100}
              />
            </div>
            <div className={styles.contentWrapper}>
              {!submissionSuccess ? (
                <>
                  <div>
                    <p className={styles.title}>Subscribe to our Newsletter!</p>
                  </div>
                  <p className={styles.description}>
                    Be the first to get exclusive offers and latest news
                  </p>
                  <div className={styles.textArea}>
                    <TextBox
                      variant={TextboxVariant.LONG}
                      name={'Email'}
                      label={''}
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
                      label='Subscribe Now'
                      disabled={false}
                      className={styles.accessButton}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p className={styles.successTitle}>
                    <Typography variant={TypographyVariant.H2}>
                      <span className={styles.successSpan}>
                        Thank you for subscribing to
                      </span>
                      <span className={styles.successH2}>
                        Neurodiversity Academy!
                      </span>
                    </Typography>
                  </p>
                  <p className={styles.description}>
                    Check your email for our exclusive offers and latest news
                  </p>
                </>
              )}
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default DialogPopUp;
