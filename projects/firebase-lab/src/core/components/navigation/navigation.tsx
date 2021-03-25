import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

export const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sign-in">Shopping List</Link></li>
        </ul>
      </nav>
    </div>
  );
};
