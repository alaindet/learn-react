import axios from 'axios';

const baseURL = 'https://api.met.no/weatherapi/locationforecast/2.0';

export const client = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
