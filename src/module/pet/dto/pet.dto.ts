interface PetCategory {
  readonly id: number;
  readonly name: string;
}

interface PetPhotosUrls {
  readonly name: string;
}

interface PetTags {
  readonly id: number;
  readonly name: string;
}

export enum PetStatus {
  available = 'available',
  pending = 'pending',
  sold = 'sold',
}

export interface PetDTO {
  readonly name: string;
  readonly category: PetCategory;
  readonly photoUrls: PetPhotosUrls[];
  readonly tags: PetTags[];
  readonly status: [PetStatus.available | PetStatus.pending | PetStatus.sold];
}
