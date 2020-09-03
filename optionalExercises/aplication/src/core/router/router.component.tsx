import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { LoginScene, GalleryScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.login]}
          component={LoginScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.gallery]}
          component={GalleryScene}
        />
      </Switch>
    </Router>
  );
};
