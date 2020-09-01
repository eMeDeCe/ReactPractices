import React from 'react';
import { PictureInfo } from './gallery.vm';


interface Props {
  pictures: PictureInfo[];
}

export const GalleryComponent: React.FC<Props> = ({ pictures }) => {
  return (
    <>
      {pictures.map(e => (
        <li key={e.id}>
          {e.title}
          <img src={`src/assets/${e.picUrl}`} style={{ width: '10rem' }}></img>
        </li>
      ))}
    </>
  );
};
