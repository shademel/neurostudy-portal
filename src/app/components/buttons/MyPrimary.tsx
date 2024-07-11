'use client';

import React from 'react';
import Search from '../../images/Search.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function myPrimary() {
  return (
    <div className='row'>
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Primary button')}
        style={BUTTON_STYLE.Primary}
        className='mb-3'
      />
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Primary button')}
        style={BUTTON_STYLE.Primary}
        fullWidth
        className='mb-3'
      />
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Primary button')}
        style={BUTTON_STYLE.Primary}
        className='mb-3'
        disabled
      />
      <ActionButton
        label='Search'
        icon={Search}
        onClick={() => console.log('clicked Primary button')}
        style={BUTTON_STYLE.Primary}
        fullWidth
        disabled
      />
    </div>
  );
}
