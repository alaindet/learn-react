import React from 'react';

import './UserOutput.css';

const UserOutput = ({ content }) => {
  return (
    <div className="UserOutput">
      {content}
    </div>
  );
};

export default UserOutput;
