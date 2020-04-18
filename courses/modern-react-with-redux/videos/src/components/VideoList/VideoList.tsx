import React from 'react';

import { YoutubeSearchResult } from 'api/youtube-search-list-response.interface';
import VideoItem from 'components/VideoItem/VideoItem';

interface Props {
  videos: YoutubeSearchResult[];
}

const VideoList = ({ videos }: Props) => {

  const renderedList = videos.map(video => (
    <VideoItem key={video.id.videoId} video={video} />
  ));

  return (
    <div>
      {renderedList}
    </div>
  );
};

export default VideoList;
