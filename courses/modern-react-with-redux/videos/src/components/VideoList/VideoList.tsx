import React from 'react';

import { YoutubeSearchResult } from 'api/youtube-search-list-response.interface';
import VideoItem from 'components/VideoItem/VideoItem';

interface Props {
  videos: YoutubeSearchResult[];
  onVideoSelect: (video: YoutubeSearchResult) => void;
}

const VideoList = ({ videos, onVideoSelect }: Props) => {

  const renderedList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};

export default VideoList;
