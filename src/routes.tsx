import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const MovieDetail = lazy(() => import('pages/MovieDetail'));
const Search = lazy(() => import('pages/Search'));

const Routes = () => {
  console.log('Hello');
  return (
    <Switch>
      <Route
        path="/:category(popular|top_rated|upcoming|now_playing)?/:page(\d+)?"
        exact
        component={Home}
      />
      <Route path="/search/:query?/:page(\d+)?" exact component={Search} />
      <Route path="/movie/:id(\d+)" exact component={MovieDetail} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;