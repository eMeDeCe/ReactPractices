export interface PicturesSelected {
  idsSelected: string;
  totalSelected: number;
  selectedItems: string[];
  infoSelectedItems: { id: string; title: string; url: string }[];
}

export const createEmptyPicturesSelected = (): PicturesSelected => ({
  idsSelected: '',
  totalSelected: 0,
  selectedItems: [],
  infoSelectedItems: [],
});
