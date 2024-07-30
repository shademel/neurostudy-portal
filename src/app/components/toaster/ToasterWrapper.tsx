'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import styles from './toaster.module.css';
import classNames from 'classnames';
import {
  ToastContainerItemClass,
  ToastIconClass,
  ToastItemProps,
} from '@/app/utilities/toaster/constants';
import { constructToast, destructToast } from '.';

const ToasterWrapper: React.FC = () => {
  const toastsRef = useRef<ToastItemProps[]>([]);
  // NOTE
  // Utilized to trigger a `forceUpdate`
  const setToken = useState<number>(0)[1];

  useEffect(() => {
    const addToast = (
      type: ToastItemProps['type'],
      props: string | Omit<ToastItemProps, 'type'>
    ) => {
      toastsRef.current = [
        ...toastsRef.current,
        { ...(typeof props === 'string' ? { message: props } : props), type },
      ];
      setToken(Math.random());
    };

    constructToast({
      error: (props: string | Omit<ToastItemProps, 'type'>) => {
        addToast('error', props);
      },
      success: (props: string | Omit<ToastItemProps, 'type'>) => {
        addToast('success', props);
      },
    });

    return () => {
      destructToast();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Toaster
        containerClassName={styles.oldContainer}
        toastOptions={{
          className: classNames(styles.common, styles.default),
          success: {
            className: classNames(styles.common, styles.success),
            iconTheme: {
              primary: 'var(--skyBlue)',
              secondary: 'var(--navyBlue)',
            },
          },
          error: {
            className: classNames(styles.common, styles.error),
          },
        }}
      />
      <div className={styles.container}>
        {toastsRef.current.map((item: ToastItemProps, index) => {
          const { type } = item;

          return (
            <div key={index} className={styles.containerItem}>
              <div
                className={classNames(
                  styles.containerBody,
                  styles[ToastContainerItemClass[type]]
                )}
              >
                <div className={styles[ToastIconClass[type]]} />
                <div>{item.message}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToasterWrapper;
