import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.js';
import LandingPage from '../components/LandingPage';
import PlayerApp from '../PlayerApp';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/players" component={PlayerApp} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
