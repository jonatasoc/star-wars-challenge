import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/success" component={Success} />
      <Route path="/error" component={Error} />
    </Switch>
  );
};

export default Routes;
