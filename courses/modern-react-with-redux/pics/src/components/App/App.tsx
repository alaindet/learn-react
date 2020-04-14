import React from 'react';
import unsplash from './../../api/unsplash';
import { AxiosResponse } from 'axios';

import './App.scss';
import SearchBar from './../SearchBar/SearchBar';
import ImageList from './../ImageList/ImageList';
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

    let response: AxiosResponse<SearchPhotosResponse>;
    const url = ''+process.env.REACT_APP_API_SEARCH_PHOTOS_URL;
    const config = {
      params: {
        query: term
      }
    };

    response = await unsplash.get(url, config);
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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
