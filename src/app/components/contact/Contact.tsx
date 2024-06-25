import React from 'react';
import ActionButton from '../buttons/ActionButton';
import styles from './contact.module.css';
import { BUTTON_STYLE } from '@/app/utilities/constants';

const Contact = () => {
  return (
    <div className={styles.buttonArea}>
      <ActionButton
        label='Contact us'
        disabled={false}
        style={BUTTON_STYLE.Primary}
        fullWidth
        to='/contact'
      />
    </div>
  );
};

export default Contact;
