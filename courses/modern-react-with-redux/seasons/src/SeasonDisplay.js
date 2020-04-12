import React from 'react';
import './SeasonDisplay.css';

const config = {
  warm: {
    message: 'Let\'s hit the beach!',
    icon: 'sun',
  },
  cold: {
    message: 'It\'s chilly!',
    icon: 'snowflake',
  }
};

const getSeason = (latitude, month) => {

  const isBetweenAprilAndOctober = month >= 4 && month <= 10;
  const isNorthernEmisphere = latitude > 0;

  if (
    (isNorthernEmisphere && isBetweenAprilAndOctober) ||
    (!isNorthernEmisphere && !isBetweenAprilAndOctober)
  ) {
    return 'warm';
  }

  return 'cold';
};

const SeasonDisplay = (props) => {

  const latitude = props.latitude;
  const month = (new Date()).getMonth() + 1;
  const season = getSeason(latitude, month);
  const { message, icon } = config[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${icon}`}></i>
      <h1>{message}</h1>
      <i className={`icon-right massive icon ${icon}`}></i>
    </div>
  );
}

export default SeasonDisplay;
