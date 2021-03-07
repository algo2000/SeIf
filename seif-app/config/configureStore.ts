import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterSlice from '../modules/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();