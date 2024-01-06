import React from 'react';
import BuzzsproutPlayer from './Buzzsprout';

const DisplayPodcast = () => {
  const buzzsproutPodcastId = '2298033';

  return (
    <div>
      <h1>Display My Episode Series</h1>
      <BuzzsproutPlayer podcastId={buzzsproutPodcastId} />
    </div>
  );
};

export default DisplayPodcast;
