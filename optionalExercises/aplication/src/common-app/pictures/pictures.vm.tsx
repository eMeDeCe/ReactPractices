export interface PicturesSelected {
  idsSelected: string;
  totalSelected: number;
  selectedItems: string[];
}

export const createEmptyPicturesSelected = (): PicturesSelected => ({
  idsSelected: '',
  totalSelected: 0,
  selectedItems: [],
});
