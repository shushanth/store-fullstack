import { Pet } from '../../petList/store/petListSliceModel';
export interface PetDetailsState {
  pet: Pet;
  loading: boolean;
  error: boolean;
}
