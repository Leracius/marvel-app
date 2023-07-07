import { configureStore } from '@reduxjs/toolkit';
import marvelReducer from './ResultSlice';

const store = configureStore({
  reducer: {
    marvel: marvelReducer,
  },
});

export default store;
