import { configureStore } from '@reduxjs/toolkit';
import { tournamentsReducer } from '../features/tournaments/tournamentsSlice';


export const store = configureStore({
  reducer: {
      tournaments: tournamentsReducer,
  }
});