import React from 'react';

import { YoutubeSearchResult } from 'api/youtube-search-list-response.interface';

interface Props {
  video: YoutubeSearchResult | null;
}

const VideoDetail = ({ video }: Props) => {
  if (!video) {
    return <div>No video selected</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <div className="ui embed">
        <iframe
          title={'YouTube video player: ' + video.snippet?.title}
          src={videoSrc}
        />
      </div>
      <div className="video-detail ui segment">
        <h4 className="ui header">{video.snippet?.title}</h4>
        <p>{video.snippet?.description}</p>
      </div>
    </React.Fragment>
  );
};

export default VideoDetail;
