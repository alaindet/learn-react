import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const apiAccessKey = process.env.REACT_APP_API_ACCESS_KEY;
const config: AxiosRequestConfig = {
  baseURL: apiBaseUrl,
  headers: {
    Authorization: `Client-ID ${apiAccessKey}`,
  }
};

export default axios.create(config);
