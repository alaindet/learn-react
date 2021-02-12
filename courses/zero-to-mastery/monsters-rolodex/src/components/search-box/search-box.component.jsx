import React from 'react';

import './search-box.component.css';

export const SearchBox = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="search"
      value={value}
      onChange={onChange}
    />
  );
};
