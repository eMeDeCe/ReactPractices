import React from 'react';
import { PicturesSelected } from './pictures.vm';

interface Context extends PicturesSelected {
  addSelectedPicture(picture: string, url: string, title: string);
  removeSelectedPicture(picture: string);
  emptyCart();
}

let countPictures = 0;

export const PicturesContext = React.createContext<Context>({
  idsSelected: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addSelectedPicture: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeSelectedPicture: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  emptyCart: () => {},
  totalSelected: 0,
  selectedItems: [],
  infoSelectedItems: [],
});

export const PicturesProvider: React.FC = ({ children }) => {
  const [idsSelected] = React.useState('');
  const [totalSelected, setTotalSelected] = React.useState(0);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [infoSelectedItems, setInfoSelectedItems] = React.useState([]);

  const addSelectedPicture = (element, url, title) => {
    countPictures++;
    setTotalSelected(countPictures);
    setSelectedItems(searches => [...searches, element]);
    setInfoSelectedItems(searches => [
      ...searches,
      { id: element, title: title, url: url },
    ]);
  };
  const removeSelectedPicture = element => {
    countPictures--;
    setTotalSelected(countPictures);
    setInfoSelectedItems(
      infoSelectedItems.filter(searches => searches.id !== element)
    );
  };

  const emptyCart = () => {
    countPictures = 0;
    setTotalSelected(countPictures);
    setInfoSelectedItems([]);
  };

  return (
    <PicturesContext.Provider
      value={{
        idsSelected,
        addSelectedPicture,
        removeSelectedPicture,
        totalSelected,
        selectedItems,
        infoSelectedItems,
        emptyCart,
      }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
