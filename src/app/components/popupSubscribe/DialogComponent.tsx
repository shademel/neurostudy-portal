import React, { useEffect, useRef } from 'react';
import styles from './dialog.module.css';
import Image from 'next/image';
import CloseButton from '../../images/close.png';
import Subscribe from '../subscribe/subscribe';

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
        <Subscribe />
      </dialog>
    </div>
  );
};

export default DialogPopUp;
