'use client';

import React from 'react';
import Search from '../../images/Search.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function myPrimary() {
  return (
    <>
      <h2>
        <u>Primary</u>
      </h2>
      <div className='row'>
        <div>
          <h3>Default</h3>
          <ActionButton
            label='Search'
            icon={Search}
            onClick={() => console.log('clicked Primary button')}
            style={BUTTON_STYLE.Primary}
            className='mb-3'
          />
        </div>
        <div>
          <h3>Full Width</h3>
          <ActionButton
            label='Search'
            icon={Search}
            onClick={() => console.log('clicked Primary button')}
            style={BUTTON_STYLE.Primary}
            className='mb-3'
            fullWidth
          />
        </div>
        <div>
          <h3>Default (Disabled)</h3>
          <ActionButton
            label='Search'
            icon={Search}
            onClick={() => console.log('clicked Primary button')}
            style={BUTTON_STYLE.Primary}
            className='mb-3'
            disabled
          />
        </div>
        <div>
          <h3>Full Width & Disabled</h3>
          <ActionButton
            label='Search'
            icon={Search}
            onClick={() => console.log('clicked Primary button')}
            style={BUTTON_STYLE.Primary}
            className='mb-3'
            fullWidth
            disabled
          />
        </div>
      </div>
    </>
  );
}
