import React from 'react';

import './Person.css';
import { Button } from './../theme/button';
import WeatherContext from './../context/weather';

const Person = ({ name }) => {
  return (
    <WeatherContext.Consumer>
      {(context) => (
        <div className="Person">
          <ul>
            <li>
              <strong>Name: </strong>
              {name}
            </li>
            <li>
              <strong>Weather: </strong>
              It's going to be
              &nbsp;
              <span className={context.weather}>{context.weather}</span>
            </li>
            <li>
              <Button size="small" onClick={context.changeWeather}>
                Change Weather
              </Button>
              &nbsp;
              at random
            </li>
          </ul>
        </div>
      )}
    </WeatherContext.Consumer>
  );
};

export default Person;
