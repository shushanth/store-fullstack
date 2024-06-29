import { configureStore, combineReducers } from '@reduxjs/toolkit';
import petListSlice from '../pages/petList/store/petListSlice';

const reducers = combineReducers({
  petListPage: petListSlice,
});

const rootStore = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
