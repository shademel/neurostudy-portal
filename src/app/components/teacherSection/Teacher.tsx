import React, { useState } from 'react';
import styles from './teacher.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';
import ActionButton from '../buttons/ActionButton';
import PopUp from '../popupSignup/PopUp';

export default function Teacher() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className={styles.teacherContainer}>
      <div>
        <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
          Are you a teacher interested in Neurodiversity training?
        </Typography>
      </div>
      <div className={styles.teacherBodyText}>
        <Typography variant={TypographyVariant.Body1} color='var(--BondBlack)'>
          Use our best in class courses to equip yourself with the tools you
          need to become better and you can improve your employability with our
          certificate.
        </Typography>
      </div>
      <div>
        <ActionButton
          label='Access courses'
          disabled={false}
          className={styles.accessButton}
          onClick={openModal}
        />
      </div>
      {isModalOpen && <PopUp onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
