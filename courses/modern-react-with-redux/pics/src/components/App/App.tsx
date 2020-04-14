import React from 'react';
import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import './App.scss';
import SearchBar from './../SearchBar/SearchBar';
import { SearchPhotosImage, SearchPhotosResponse } from './../../interfaces/SearchPhotoResponse';

interface Props {}

interface State {
  images: SearchPhotosImage[];
}

export default class App extends React.Component<Props, State> {

  state: State = {
    images: []
  };

  private async onSearchSubmit(term: string) {

    const url = ''+process.env.REACT_APP_API_SEARCH_PHOTOS_URL;
    const accessKey = process.env.REACT_APP_API_ACCESS_KEY;
    const config: AxiosRequestConfig = {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      }
    };

    let response: AxiosResponse<SearchPhotosResponse>;
    response = await axios.get(url, config);
    this.setState({ images: response.data.results });
  }

  private renderResultsCounter(): JSX.Element | null {
    if (!this.state.images.length) {
      return null;
    }

    return <p>Found {this.state.images.length} images</p>;
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        {this.renderResultsCounter()}
      </div>
    );
  }
}
