import React from 'react';
import Search from '../../images/Search.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function myPrimaryFullDisabled() {
  return (
    <ActionButton
      label='Search Disabled'
      icon={Search}
      disabled={true}
      style={BUTTON_STYLE.PrimaryFull}
    />
  );
}
