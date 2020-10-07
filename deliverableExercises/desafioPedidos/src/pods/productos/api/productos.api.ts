import { PictureInfo } from './productos.api-model';
import { mockPictureInfo } from './productos.mock-data';

let gallery = [...mockPictureInfo];

export const getGallery = async (): Promise<PictureInfo[]> => {
  return gallery;
};

export const deletePicture = async (id: string): Promise<boolean> => {
  gallery = gallery.filter(e => e.id !== id);
  return true;
};
