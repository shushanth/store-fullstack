import { PetListState } from './petListSliceModel';
import { createSlice } from '@reduxjs/toolkit';

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
    fetchPetList: (state, { payload }) => {
      state.pets.list = payload;
    },
  },
});

export const { fetchPetList } = petListSlice.actions;

export default petListSlice.reducer;
