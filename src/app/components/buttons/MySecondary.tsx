import React from 'react';
import Search from '../../images/SearchOrg.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function mySecondary() {
  return (
    <div className='row'>
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Secondary button')}
        style={BUTTON_STYLE.Secondary}
        className='mb-3'
      />
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Secondary button')}
        style={BUTTON_STYLE.Secondary}
        fullWidth
        className='mb-3'
      />
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Secondary button')}
        style={BUTTON_STYLE.Secondary}
        className='mb-3'
        disabled
      />
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Secondary button')}
        style={BUTTON_STYLE.Secondary}
        fullWidth
        disabled
      />
    </div>
  );
}
