export type PetCommonModel = {
  name: string;
};

export enum PetStatusEnum {
  pending = 'pending',
  available = 'available',
  sold = 'sold',
}

export type PetCategory = Pick<PetCommonModel, 'name'>;

export type PetTags = Pick<PetCommonModel, 'name'>;

export type PetPhotoUrls = Pick<PetCommonModel, 'name'>;

export type Pet = {
  _id: string;
  name: string;
  category: PetCategory[];
  tags: PetTags[];
  photoUrls: PetPhotoUrls[];
  status: PetStatusEnum[];
};

export interface PetListState {
  pets: {
    list: Pet[];
    loading: boolean;
    error: boolean;
  };
}
