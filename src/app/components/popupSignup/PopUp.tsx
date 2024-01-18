import React, { useState, useEffect } from 'react';
import Typography, { TypographyVariant } from '../typography/Typography';
import styles from './popup.module.css';
import TextBox, { TextboxVariant } from '../textbox/Textbox';
import ActionButton from '../buttons/ActionButton';

const PopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [emailTextboxVariant, setEmailTextboxVariant] = useState(
    TextboxVariant.LONGER
  );

  useEffect(() => {
    const handleResize = () => {
      setEmailTextboxVariant(
        window.innerWidth <= 800
          ? TextboxVariant.REGULAR
          : TextboxVariant.LONGER
      );
    };

    handleResize();

    window.addEventListener('resize', handleResize);
  }, []);
  const handleSubmit = () => {
    //??????
    console.log('Thank you for your request, we will get back to you soon');

    onClose();
  };
  const handleClose = () => {
    onClose();
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form className={styles.container}>
      <button className={styles.closeButton} onClick={() => handleClose()}>
        {' '}
        x
      </button>
      <div className={styles.header}>
        <Typography variant={TypographyVariant.H1}>Unlock Content</Typography>
      </div>
      <div className={styles.textboxBody}>
        <div className={styles.name}>
          <div className={styles.textArea}>
            <TextBox
              name={'firstName'}
              label={'First Name (required)'}
              type={'text'}
              value={''}
              required={true}
              placeholder={'example: John'}
              onChange={(e) => setFirstName(e.target.value)}
            ></TextBox>
          </div>
          <div className={styles.textArea}>
            <TextBox
              name={'lastName'}
              label={'Last Name (required)'}
              type={'text'}
              value={''}
              required={true}
              placeholder={'example: Smith'}
              onChange={(e) => setLastName(e.target.value)}
            ></TextBox>
          </div>
        </div>
        <div className={styles.textArea}>
          <TextBox
            name={'phoneNumber'}
            label={'Phone Number'}
            type={'text'}
            value={''}
            required={false}
            placeholder={''}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></TextBox>
        </div>
        <div className={styles.textArea}>
          <TextBox
            variant={emailTextboxVariant}
            name={'email'}
            label={'Email Address (required)'}
            type={'email'}
            value={''}
            required={true}
            placeholder={''}
            onChange={(e) => setEmail(e.target.value)}
          ></TextBox>
        </div>
        <div className={styles.buttonArea}>
          <ActionButton
            label='Submit'
            disabled={false}
            className={styles.accessButton}
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </form>
  );
};

export default PopUp;
