import React from 'react';

import './home.style.scss';
import { Directory } from '../../components/directory/directory.component';

export const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
