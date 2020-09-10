import React from 'react';
import { PicturesSelected, createEmptyPicturesSelected } from '././pictures.vm';

interface Context extends PicturesSelected {
  setPicturesSelected: (PicturesSelected: PicturesSelected) => void;
}

const zeroPictures = [];

export const PicturesContext = React.createContext<Context>({
  idsSelected: zeroPictures,
  setPicturesSelected: () =>
    console.warn(
      'If you area reading this, likely you forgot to add the provider on top of your app'
    ),
});

export const PicturesProvider: React.FC = ({ children }) => {
  const [PicturesSelected, setPicturesSelected] = React.useState<
    PicturesSelected
  >(createEmptyPicturesSelected());

  return (
    <PicturesContext.Provider
      value={{
        idsSelected: PicturesSelected.idsSelected,
        setPicturesSelected,
      }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
