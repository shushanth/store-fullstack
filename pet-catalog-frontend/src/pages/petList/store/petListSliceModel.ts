export type PetSliceCommon = {
  name: string;
};

export enum PetStatusEnum {
  all = 'All',
  pending = 'pending',
  available = 'available',
  sold = 'sold',
}

export type PetCategory = Pick<PetSliceCommon, 'name'>;

export type PetTags = Pick<PetSliceCommon, 'name'>;

export type PetPhotoUrls = Pick<PetSliceCommon, 'name'>;

export type Pet = {
  _id: string;
  name: string;
  category: PetCategory[];
  tags: PetTags[];
  photoUrls: PetPhotoUrls[];
  status: PetStatusEnum;
};

export interface PetListState {
  pets: {
    list: Pet[];
    loading: boolean;
    error: boolean;
  };
}
