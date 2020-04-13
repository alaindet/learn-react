import React from 'react';
import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import './App.scss';
import SearchBar from './../SearchBar/SearchBar';
import SearchPhotosResponse from './../../interfaces/SearchPhotoResponse';

export default class App extends React.Component {

  public onSearchSubmit(term: string): void {

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

    axios.get(url, config).then((response: AxiosResponse<SearchPhotosResponse>) => {
      console.log('response', response);
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
      </div>
    );
  }
}
