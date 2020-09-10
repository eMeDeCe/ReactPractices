import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from './core/router';
import { PicturesProvider } from 'common-app/pictures';

const App: React.FunctionComponent = () => {
  return (
    <PicturesProvider>
      <RouterComponent />
    </PicturesProvider>
  );
};

export default hot(App);
