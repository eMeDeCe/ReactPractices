import * as apiModel from './api/gallery.api-model';
import * as viewModel from './gallery.vm';

const mapPictureInfoFromApiToVm = (
  PictureInfo: apiModel.PictureInfo
): viewModel.PictureInfo => ({
  ...PictureInfo,
});

export const mapPictureInfoListFromApiToVm = (
  gallery: apiModel.PictureInfo[]
): viewModel.PictureInfo[] => gallery.map(e => mapPictureInfoFromApiToVm(e));
