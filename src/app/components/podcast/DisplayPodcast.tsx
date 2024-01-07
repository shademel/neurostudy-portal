import React from 'react';
import BuzzsproutEmbed from './Buzzsprout';

const DisplayPodcast: React.FC = () => {
  const scriptSrc =
    'https://www.buzzsprout.com/2298033.js?artist=Majid+&container_id=buzzsprout-large-player-artist-majid&player=large';
  const containerId = 'buzzsprout-large-player-artist-majid';

  return (
    <div>
      <BuzzsproutEmbed scriptSrc={scriptSrc} containerId={containerId} />
    </div>
  );
};

export default DisplayPodcast;
