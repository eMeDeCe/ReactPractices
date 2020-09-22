import React from 'react';
import { GalleryContainer } from 'pods/gallery';
import { CartContainer } from 'pods/cart';
import { PicturesProvider } from 'common-app/pictures';
import { LocationProvider } from 'common-app/location';

export const GalleryScene: React.FC = () => {
  return (
    <>
      <LocationProvider>
        <PicturesProvider>
          <GalleryContainer />
          <CartContainer />
        </PicturesProvider>
      </LocationProvider>
    </>
  );
};
