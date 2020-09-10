export interface PicturesSelected {
  idsSelected: string[];
}

export const createEmptyPicturesSelected = (): PicturesSelected => ({
  idsSelected: [],
});
