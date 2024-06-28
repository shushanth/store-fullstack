export enum PetStatusEnum {
  pending = 'pending',
  available = 'available',
  sold = 'sold',
}

export type PetCategory = {
  name: string;
};

export type PetTags = {
  name: string;
};

export type PetPhotoUrls = {
  name: string;
};

export type Pet = {
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
