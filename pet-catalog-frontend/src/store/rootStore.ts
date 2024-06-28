import { configureStore } from '@reduxjs/toolkit';

const rootStore = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== 'production',
});

export default rootStore;
