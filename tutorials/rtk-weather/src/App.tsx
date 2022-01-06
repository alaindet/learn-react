import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/core/store';
import { fetchWeatherForecast, selectForecasts, selectWeatherStatus, WeatherReport } from 'src/features/weather';
import './App.css';

export const ROME = {
  lat: '41.902782',
  lon: '12.496366',
};

export const App = () => {
  const dispatch = useAppDispatch();
  const [fetchCounter, setFetchCounter] = useState(0);

  useEffect(() => {
    if (fetchCounter > 0) {
      dispatch(fetchWeatherForecast(ROME));
    }
  }, [dispatch, fetchCounter]);

  const forecasts = useAppSelector(selectForecasts);
  const forecastStatus = useAppSelector(selectWeatherStatus);

  const onFetchWeather = useCallback(
    () => setFetchCounter(i => i + 1),
    [setFetchCounter]
  );

  return (
    <div className="app">
      {forecastStatus === 'idle' && (
        <button onClick={onFetchWeather}>Fetch weather</button>
      )}

      {forecastStatus === 'loading' && (
        <p>Loading forecasts...</p>
      )}

      {forecastStatus === 'succeeded' && (
        <>
          <button onClick={onFetchWeather}>Fetch weather</button>
          <WeatherReport forecasts={forecasts} />
        </>
      )}
    </div>
  );
};
