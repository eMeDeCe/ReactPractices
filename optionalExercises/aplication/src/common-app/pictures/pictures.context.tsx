import React from 'react';
import { PicturesSelected } from './pictures.vm';

interface Context extends PicturesSelected {
  ToggleSelectedPicture(picture: string, url: string, title: string);
}

let countPictures = 0;

export const PicturesContext = React.createContext<Context>({
  idsSelected: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ToggleSelectedPicture: () => {},
  totalSelected: 0,
  selectedItems: [],
  infoSelectedItems: [],
});

export const PicturesProvider: React.FC = ({ children }) => {
  const [idsSelected, setIdsSelected] = React.useState('');
  const [totalSelected, setTotalSelected] = React.useState(0);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [infoSelectedItems, setInfoSelectedItems] = React.useState([]);

  const ToggleSelectedPicture = (element, url, title) => {
    countPictures++;
    setTotalSelected(countPictures);
    setSelectedItems(searches => [...searches, element]);
    setInfoSelectedItems(searches => [
      ...searches,
      { id: element, title: title, url: url },
    ]);
  };

  console.log(infoSelectedItems);

  return (
    <PicturesContext.Provider
      value={{
        idsSelected,
        ToggleSelectedPicture,
        totalSelected,
        selectedItems,
        infoSelectedItems,
      }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
