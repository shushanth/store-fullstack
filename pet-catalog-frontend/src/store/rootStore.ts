import { configureStore, combineReducers } from '@reduxjs/toolkit';
import petListSlice from '../pages/petList/store/petListSlice';
import petDetailsSlice from '../pages/petDetails/store/petDetailsSlice';

const reducers = combineReducers({
  petListPage: petListSlice,
  petDetailsPage: petDetailsSlice,
});

const rootStore = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
