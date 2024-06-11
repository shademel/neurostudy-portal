import React from 'react';
import Search from '../../images/Search.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function myPrimaryFull() {
  return (
    <ActionButton
      label='Search'
      icon={Search}
      disabled={false}
      style={BUTTON_STYLE.PrimaryFull}
      onClick={() => console.log('clicked PrimaryFull button')}
    />
  );
}
