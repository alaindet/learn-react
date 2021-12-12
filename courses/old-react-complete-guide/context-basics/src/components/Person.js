import React, { useContext } from 'react';

import './Person.css';
import WeatherContext from './../context/weather';
import ThemeContext from './../context/theme';

const Person = ({ name }) => {

  const weather = useContext(WeatherContext);
  const theme = useContext(ThemeContext);

  return (
      <div className="Person">
        <ul>
          <li><strong>Name: </strong>{name}</li>

          <li>
            <strong>Weather: </strong>
            <span className={`weather ${weather.weather}`}>{weather.weather}</span>
            <a href="#" onClick={weather.changeWeather}>(Change)</a>
          </li>

          <li>
            <strong>Theme: </strong>
            <span className={`theme ${theme.theme}`}>{theme.theme}</span>
            <a href="#" onClick={theme.changeTheme}>(Change)</a>
          </li>

        </ul>
      </div>
  );
};

export default Person;
