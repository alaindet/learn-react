import React from 'react';

import PostList from 'components/PostList';

interface Props {

}

const App = (props: Props) => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;
