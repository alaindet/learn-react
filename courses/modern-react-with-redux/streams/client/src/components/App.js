import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import NotFound from './errors/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
