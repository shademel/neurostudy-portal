import React from 'react';
import CircleRight from '../../images/CircleRightOrg.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function myTertiaryFull() {
  return (
    <ActionButton
      label='Learn more'
      icon={CircleRight}
      style={BUTTON_STYLE.TertiaryFull}
      disabled={false}
      iconPosition='right'
      onClick={() => console.log('clicked TertiaryFull button')}
    />
  );
}
