import { FC } from 'react';

import { Forecast } from '../../types';

export interface WeatherReportProps {
  forecasts: Forecast[];
}

export const WeatherReport: FC<WeatherReportProps> = ({
  forecasts,
}) => {
  return (
    <div className="weather-report">
      <h2>Weather Report</h2>
      <code style={{ overflowWrap: 'anywhere' }}>
        {JSON.stringify(forecasts)}
      </code>
    </div>
  );
};
