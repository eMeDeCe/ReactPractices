import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from './core/router';
import { PicturesProvider } from 'common-app/pictures';
import { LocationProvider } from 'common-app/location';

const App: React.FunctionComponent = () => {
  return (
    <LocationProvider>
      <PicturesProvider>
        <RouterComponent />
      </PicturesProvider>
    </LocationProvider>
  );
};

export default hot(App);
