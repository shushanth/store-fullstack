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

//for tests
export function setupAppStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: reducers,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootStore.getState>;
export type RootStore = ReturnType<typeof setupAppStore>;

export default rootStore;
