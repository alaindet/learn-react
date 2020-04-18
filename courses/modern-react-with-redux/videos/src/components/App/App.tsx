import React from 'react';
import { AxiosResponse } from 'axios';

import youtube from 'api/youtube';
import YoutubeSearchListResponse, { YoutubeSearchResult } from 'api/youtube-search-list-response.interface';
import Props from './Props.interface';
import State from './State.interface';
import './App.css';
import SearchBar from 'components/SearchBar/SearchBar';
import VideoList from 'components/VideoList/VideoList';
import VideoDetail from 'components/VideoDetail/VideoDetail';

export default class App extends React.Component<Props, State> {

  state: State = {
    videos: [],
    selectedVideo: null,
    defaultSearch: 'rick astley',
  };

  componentDidMount() {
    this.onSearchSubmit(this.state.defaultSearch);
  }

  onVideoSelect(video: YoutubeSearchResult): void {
    this.setState({
      selectedVideo: video
    })
  }

  async onSearchSubmit(term: string) {

    let response: AxiosResponse<YoutubeSearchListResponse>;
    response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  render() {
    return (
      <div className="ui container">

        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />

        <div className="ui stackable four column grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="one wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect.bind(this)}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
