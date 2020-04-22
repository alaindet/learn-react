import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com'
};

export default axios.create(config);
