'use client';

import React from 'react';
import Search from '../../images/SearchOrg.svg';
import ActionButton, { ButtonStyle } from './ActionButton';

export default function mySecondaryFull() {
  return (
    <ActionButton
      label='Search'
      icon={Search}
      style={ButtonStyle.SecondaryFull}
      disabled={false}
      onClick={() => console.log('clicked SecondaryFull button')}
    />
  );
}
