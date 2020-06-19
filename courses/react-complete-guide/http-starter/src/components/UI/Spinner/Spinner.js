import React from 'react';

import './Spinner.css';

/**
 * Thanks to
 * https://loading.io/css/
 */
const Spinner = (props) => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
