import React from 'react';
import { PicturesSelected } from './pictures.vm';

interface Context extends PicturesSelected {
  ToggleSelectedPicture(picture: string);
}

let countPictures = 0;
const listSelected = [];

export const PicturesContext = React.createContext<Context>({
  idsSelected: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ToggleSelectedPicture: () => {},
  totalSelected: 0,
});

function sendInfo(element) {
  console.log('esperando a enterarme');
}

export const PicturesProvider: React.FC = ({ children }) => {
  const [idsSelected, setIdsSelected] = React.useState('');
  const [totalSelected, setTotalSelected] = React.useState(0);

  const ToggleSelectedPicture = element => {
    countPictures++;
    setTotalSelected(countPictures);
    listSelected.push(element);
    console.log(listSelected);
    sendInfo(element);
  };

  return (
    <PicturesContext.Provider
      value={{
        idsSelected,
        ToggleSelectedPicture,
        totalSelected,
      }}
    >
      {children}
    </PicturesContext.Provider>
  );
};
