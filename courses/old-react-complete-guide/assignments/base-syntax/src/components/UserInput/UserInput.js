import React from 'react';

import './UserInput.css';

const UserInput = ({ change, value }) => {
  return (
    <div className="UserInput">
      <input
        type="text"
        value={value}
        onChange={change}
      />
    </div>
  );
}

export default UserInput;
