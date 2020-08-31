import React from 'react';
import { PictureInfo } from './gallery.vm';

interface Props {
  pictures: PictureInfo[];
}

export const GalleryComponent: React.FunctionComponent<Props> = ({
  pictures
 }) => {

  return (
      {pictures.map(e => (
        <li key={e.id}>{e.title}</li>
      ))}
  );
};
