import React from 'react';
import BuzzsproutEmbed from './Buzzsprout';

const DisplayPodcast: React.FC = () => {
  const scriptSrc =
    'https://www.buzzsprout.com/2132579.js?container_id=buzzsprout-large-player&player=large';
  const containerId = 'buzzsprout-large-player';

  return (
    <div>
      <BuzzsproutEmbed scriptSrc={scriptSrc} containerId={containerId} />
    </div>
  );
};

export default DisplayPodcast;
