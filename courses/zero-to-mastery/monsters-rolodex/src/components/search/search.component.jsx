import React from 'react';

import './search.component.css';

export const Search = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search monsters..."
      className="search"
      value={value}
      onChange={onChange}
    />
  );
};
