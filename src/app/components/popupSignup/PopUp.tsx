import React from 'react';
import Typography, { TypographyVariant } from '../typography/Typography';
import styles from './popup.module.css';
import TextBox, { TextboxVariant } from '../textbox/Textbox';
import ActionButton from '../buttons/ActionButton';

interface PopUpProps {}

const PopUp: React.FC<PopUpProps> = () => {
  const handleSubmit = () => {
    // router.push(`/????`);
    console.log('form submited successfully');
  };

  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <Typography variant={TypographyVariant.H2}>Unlock Content</Typography>
      </div>
      <div className={styles.name}>
        <div className={styles.textArea}>
          <TextBox
            name={'firstName'}
            label={'First Name* (required)'}
            type={'text'}
            value={''}
            required={true}
            placeholder={'example: John'}
            onChange={() => {
              console.log('modal');
            }}
          ></TextBox>
        </div>
        <div className={styles.textArea}>
          <TextBox
            name={'lastName'}
            label={'Last Name* (required)'}
            type={'text'}
            value={''}
            required={true}
            placeholder={'example: Smith'}
            onChange={() => {
              console.log('modal');
            }}
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
          onChange={() => {
            console.log('modal');
          }}
        ></TextBox>
      </div>
      <div className={styles.textArea}>
        <TextBox
          variant={TextboxVariant.LONGER}
          name={'email'}
          label={'Email Address* (required)'}
          type={'email'}
          value={''}
          required={true}
          placeholder={''}
          onChange={() => {
            console.log('modal');
          }}
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
    </form>
  );
};

export default PopUp;
