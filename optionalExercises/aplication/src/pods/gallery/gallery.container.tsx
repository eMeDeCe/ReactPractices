import React from 'react';
import { GalleryComponent } from './gallery.component';
import { PictureInfo } from './gallery.vm';
import { mapPictureInfoListFromApiToVm } from './gallery.mapper';
import { getGallery } from './api';
import { LocationContext } from 'common-app/location';

export const GalleryContainer: React.FC = () => {
  const [pictures, setPictures] = React.useState<PictureInfo[]>([]);
  const { location } = React.useContext(LocationContext);

  const onLoadGallery = async () => {
    const apiGallery = await getGallery();
    const viewModelGallery = mapPictureInfoListFromApiToVm(apiGallery);
    const galleryDisplayed = viewModelGallery.filter(e => e.local === location);
    setPictures(galleryDisplayed);
  };

  React.useEffect(() => {
    onLoadGallery();
  }, [location]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Azulejos </h1>
      <GalleryComponent pictures={pictures} />
    </>
  );
};
