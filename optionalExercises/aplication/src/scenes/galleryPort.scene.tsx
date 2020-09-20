import React from 'react';
import { GalleryContainer } from 'pods/gallery';
import { CartContainer } from 'pods/cart';
import { PicturesProvider } from 'common-app/pictures';

export const GalleryScene: React.FC = () => {
  return (
    <>
      <PicturesProvider>
        <GalleryContainer />
        <CartContainer />
      </PicturesProvider>
    </>
  );
};
