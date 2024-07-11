import React from 'react';
import CircleRight from '../../images/CircleRightOrg.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function myTertiary() {
  return (
    <div className='row'>
      <ActionButton
        label='Learn more'
        icon={CircleRight}
        style={BUTTON_STYLE.Tertiary}
        iconPosition='right'
        onClick={() => console.log('clicked Tertiary button')}
        className='mb-3'
      />
      <ActionButton
        label='Learn more'
        icon={CircleRight}
        style={BUTTON_STYLE.Tertiary}
        iconPosition='right'
        onClick={() => console.log('clicked Tertiary button')}
        fullWidth
        className='mb-3'
      />
      <ActionButton
        label='Learn more'
        icon={CircleRight}
        style={BUTTON_STYLE.Tertiary}
        iconPosition='right'
        onClick={() => console.log('clicked Tertiary button')}
        className='mb-3'
        disabled
      />
      <ActionButton
        label='Learn more'
        icon={CircleRight}
        style={BUTTON_STYLE.Tertiary}
        iconPosition='right'
        onClick={() => console.log('clicked Tertiary button')}
        fullWidth
        disabled
      />
    </div>
  );
}
