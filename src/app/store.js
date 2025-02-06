import { configureStore } from '@reduxjs/toolkit';
import { tournamentsReducer } from '../features/tournaments/tournamentsSlice';
import {userReducer} from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
      tournaments: tournamentsReducer,
      user: userReducer
  }
});