import React from 'react';

import { YoutubeSearchResult } from 'api/youtube-search-list-response.interface';
import './VideoItem.css';

interface Props {
  video: YoutubeSearchResult;
  onVideoSelect: (video: YoutubeSearchResult) => void;
}

const VideoItem = ({ video, onVideoSelect }: Props) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet?.thumbnails.medium.url}
        alt={video.snippet?.title}
      />
      <div className="content">
        <div className="header">
          {video.snippet?.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
