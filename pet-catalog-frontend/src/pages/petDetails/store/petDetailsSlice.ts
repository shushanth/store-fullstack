import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PetDetailsState } from './petDetailsSliceModel';
import { Pet, PetStatusEnum } from './../../petList/store/petListSliceModel';

const initialState: PetDetailsState = {
  loading: false,
  error: false,
  pet: {
    _id: '',
    name: '',
    category: [],
    tags: [],
    photoUrls: [],
    status: PetStatusEnum.available,
  },
};

const petDetailsSlice = createSlice({
  name: 'petDetailsSlice',
  initialState,
  reducers: {
    fetchPetDetailsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = true;
      state.error = false;
    },
    fetchPetDetailsSuccess: (state, { payload }: PayloadAction<Pet>) => {
      debugger;
      state.pet = payload;
      state.loading = false;
      state.error = false;
    },
    fetchPetDetailsError: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchPetDetailsLoading,
  fetchPetDetailsError,
  fetchPetDetailsSuccess,
} = petDetailsSlice.actions;

export default petDetailsSlice.reducer;
