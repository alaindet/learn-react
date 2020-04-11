import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments';

const App = () => {
  return (
    <Comments />
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
