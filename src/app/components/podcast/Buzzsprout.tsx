import React from 'react';

interface BuzzsproutPlayerProps {
  podcastId: string;
}

const BuzzsproutPlayer: React.FC<BuzzsproutPlayerProps> = ({ podcastId }) => {
  return (
    <iframe
      title='Buzzsprout Player'
      width='100%'
      height='200'
      src={`https://www.buzzsprout.com/${2298033}?client_source=large_player&iframe=true`}
    ></iframe>
  );
};

export default BuzzsproutPlayer;
