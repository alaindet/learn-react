import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    maxResults: process.env.REACT_APP_API_RESULTS,
    key: process.env.REACT_APP_API_KEY,
    part: 'snippet',
    type: 'video',
  }
};

export default axios.create(config);
