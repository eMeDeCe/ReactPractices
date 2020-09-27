import React from 'react';
import { GalleryContainer } from 'pods/gallery';
import { CartContainer } from 'pods/cart';

export const GalleryScene: React.FC = () => {
  return (
    <>
      <GalleryContainer />
      <CartContainer />
    </>
  );
};
