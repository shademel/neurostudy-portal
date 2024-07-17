'use client';

import ActionButton from '../buttons/ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';
import {
  getAxiosAuthErrorMessage,
  notifyError,
  notifySuccess,
} from '@/app/utilities/common';
import { useEffect, useRef, useState } from 'react';
import LoaderWrapper from '../loader/LoaderWrapper';
import { DEFAULT_RESEND_OTP_WAIT_TIME } from '@/app/utilities/auth/constants';
import resendSignUpCode from '@/app/utilities/auth/resendSignUpCode';

interface PropType {
  username: string;
}

const AuthResendOTPBtn: React.FC<PropType> = ({ username }: PropType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(() => Date.now());
  const [lastSentTime, setLastSentTime] = useState<number>(startTime);

  const timeLeft = Math.round(
    (DEFAULT_RESEND_OTP_WAIT_TIME - (lastSentTime - startTime)) / 1000
  );
  const anyTimeLeft = timeLeft > 0;
  const disabled = isLoading || anyTimeLeft;

  const disabledRef = useRef<boolean>(disabled);
  disabledRef.current = disabled;

  useEffect(() => {
    setInterval(() => {
      disabledRef.current && setLastSentTime(Date.now());
    }, 1000);
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await resendSignUpCode({ username });
    } catch (ex) {
      notifyError(getAxiosAuthErrorMessage(ex as object));
    } finally {
      notifySuccess('Code sent!');
      setStartTime(Date.now());
      setIsLoading(false);
    }
  };

  return (
    <LoaderWrapper isLoading={isLoading}>
      <ActionButton
        type='button'
        label={'Resend Code' + (anyTimeLeft ? ` (${timeLeft})` : '')}
        disabled={disabled}
        style={BUTTON_STYLE.Secondary}
        onClick={onSubmit}
      />
    </LoaderWrapper>
  );
};

export default AuthResendOTPBtn;
