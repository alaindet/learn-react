import React from 'react';

const style = {
  username: {
    fontWeight: '900'
  }
};

const userOutput = (props) => {
  return !props.username ? null : (
    <p>
      Your username is
      &nbsp;
      <span
        style={style.username}
      >
        {props.username}
      </span>
    </p>
  );
};

export default userOutput;
