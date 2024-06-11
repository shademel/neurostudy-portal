import React from 'react';
import Search from '../../images/SearchOrg.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function mySecondaryFull() {
  return (
    <ActionButton
      label='Search'
      icon={Search}
      style={BUTTON_STYLE.SecondaryFull}
      disabled={false}
      onClick={() => console.log('clicked SecondaryFull button')}
    />
  );
}
