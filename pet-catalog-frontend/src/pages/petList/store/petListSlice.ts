import { Pet, PetListState } from './petListSliceModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PetListState = {
  pets: {
    list: [],
    loading: false,
    error: false,
  },
};

const petListSlice = createSlice({
  name: 'petListSlice',
  initialState,
  reducers: {
    fetchPetListLoading: (
      state,
      { payload = true }: PayloadAction<boolean>,
    ) => {
      state.pets.loading = payload;
      state.pets.error = false;
    },
    fetchPetListSuccess: (state, { payload }: PayloadAction<Pet[]>) => {
      state.pets.list = [...payload];
      state.pets.loading = false;
      state.pets.error = false;
    },
    fetchPetsError: (state, { payload = true }: PayloadAction<boolean>) => {
      state.pets.error = payload;
      state.pets.loading = false;
    },
  },
});

export const { fetchPetListLoading, fetchPetListSuccess, fetchPetsError } =
  petListSlice.actions;

export default petListSlice.reducer;
