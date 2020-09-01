import React from 'react';
import { GalleryComponent } from './gallery.component';
import { PictureInfo } from './gallery.vm';
import { mapPictureInfoListFromApiToVm } from './gallery.mapper';
import { getGallery } from './api';

export const GalleryContainer: React.FunctionComponent = () => {
  const [pictures, setPictures] = React.useState<PictureInfo[]>([]);

  const onLoadGallery = async () => {
    const apiGallery = await getGallery();
    const viewModelGallery = mapPictureInfoListFromApiToVm(apiGallery);
    setPictures(viewModelGallery);
  };

  React.useEffect(() => {
    onLoadGallery();
  }, []);

  return (
    <>
      <h1>Hello from gallery list POD Container</h1>
      <GalleryComponent pictures={pictures} />
    </>
  );
};
