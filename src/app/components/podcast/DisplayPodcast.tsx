import React from 'react';
import BuzzsproutEmbed from './Buzzsprout';
import { BuzzsproutEmbedProps } from './Buzzsprout';

const DisplayPodcast: React.FC<BuzzsproutEmbedProps> = ({
  scriptSrc,
  containerId,
  singleBlog,
}) => {
  // const scriptSrc =
  //   'https://www.buzzsprout.com/2132579.js?container_id=buzzsprout-large-player&player=large';
  // const containerId = 'buzzsprout-large-player';

  return (
    <>
      <BuzzsproutEmbed
        scriptSrc={scriptSrc}
        containerId={containerId}
        singleBlog={singleBlog}
      />
    </>
  );
};

export default DisplayPodcast;
