import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { RootStore, RootState } from '../../store/rootStore';

// import appReducer from "../../store/appSlice";
// import homeReducer from "../../pages/home/store/homeSlice";
// import userListReducer from "../../pages/userList/store/userListSlice";
// import userDetailReducer from "../../pages/userDetail/store/userDetailSlice";

import petListSlice from '../../pages/petList/store/petListSlice';
import petDetailsSlice from '../../pages/petDetails/store/petDetailsSlice';
import { Provider } from 'react-redux';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: RootStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: combineReducers({
        petListPage: petListSlice,
        petDetailsPage: petDetailsSlice,
      }),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
