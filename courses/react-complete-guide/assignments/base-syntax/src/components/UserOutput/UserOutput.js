import React from 'react';

import './UserOutput.css';

const UserOutput = ({ content }) => {
  return (
    <div className="user-output">
      {content}
    </div>
  );
};

export default UserOutput;
