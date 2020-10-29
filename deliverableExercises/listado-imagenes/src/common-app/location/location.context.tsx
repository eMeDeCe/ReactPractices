import React from 'react';
import { Location } from './location.vm';

//type Context = Location;

interface Context extends Location {
  updatingLocation(location: string);
}

export const LocationContext = React.createContext<Context>({
  location: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updatingLocation: () => {},
});
export const LocationProvider: React.FC = ({ children }) => {
  const [location, setLocation] = React.useState('and');
  const updatingLocation = location => {
    setLocation(location);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        updatingLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
