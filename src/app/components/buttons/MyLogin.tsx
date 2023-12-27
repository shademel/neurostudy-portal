'use client';

import React from 'react';
import ArrowDownCircle from '../../images/arrowDownCircle.svg';
import ActionButton from './ActionButton';
export default function myLogin() {
  return (
    <ActionButton
      label='Login'
      icon={ArrowDownCircle}
      disabled={false}
      iconPosition='right'
      onClick={() => console.log('clicked login button')}
    />
  );
}
