import React from 'react';

import { YoutubeSearchResult } from 'api/youtube-search-list-response.interface';

interface Props {
  video: YoutubeSearchResult;
}

const VideoItem = ({ video }: Props) => {
  return (
    <div>
      Video Item
    </div>
  );
};

export default VideoItem;
