import React from 'react';

const weatherContext = React.createContext({
  weather: 'rainy',
  changeWeather: () => { },
});

export default weatherContext;
