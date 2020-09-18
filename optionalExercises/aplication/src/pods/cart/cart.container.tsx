import React from 'react';
import { CartComponent } from './cart.component';
import { PicturesContext } from 'common-app/pictures';

export const CartContainer: React.FC = () => {
  const { idsSelected, addSelectedPicture, totalSelected } = React.useContext(
    PicturesContext
  );
  return (
    <>
      <CartComponent />
    </>
  );
};
