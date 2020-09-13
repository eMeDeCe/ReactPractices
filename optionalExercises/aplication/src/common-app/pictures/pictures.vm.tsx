export interface PicturesSelected {
  idsSelected: string;
  totalSelected: number;
}

export const createEmptyPicturesSelected = (): PicturesSelected => ({
  idsSelected: '',
  totalSelected: 0,
});
