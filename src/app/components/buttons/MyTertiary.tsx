import React from 'react';
import CircleRight from '../../images/CircleRightOrg.svg';
import ActionButton from './ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';

export default function myTertiary() {
  return (
    <>
      <h2>
        <u>Tertiary</u>
      </h2>
      <div className='row'>
        <div>
          <h3>Default</h3>
          <ActionButton
            label='Learn more'
            icon={CircleRight}
            style={BUTTON_STYLE.Tertiary}
            iconPosition='right'
            onClick={() => console.log('clicked Tertiary button')}
            className='mb-3'
          />
        </div>
        <div>
          <h3>Full Width</h3>
          <ActionButton
            label='Learn more'
            icon={CircleRight}
            style={BUTTON_STYLE.Tertiary}
            iconPosition='right'
            onClick={() => console.log('clicked Tertiary button')}
            fullWidth
            className='mb-3'
          />
        </div>
        <div>
          <h3>Default (Disabled)</h3>
          <ActionButton
            label='Learn more'
            icon={CircleRight}
            style={BUTTON_STYLE.Tertiary}
            iconPosition='right'
            onClick={() => console.log('clicked Tertiary button')}
            className='mb-3'
            disabled
          />
        </div>
        <div>
          <h3>Full Width & Disabled</h3>
          <ActionButton
            label='Learn more'
            icon={CircleRight}
            style={BUTTON_STYLE.Tertiary}
            iconPosition='right'
            onClick={() => console.log('clicked Tertiary button')}
            fullWidth
            disabled
            className='mb-3'
          />
        </div>
      </div>
    </>
  );
}
