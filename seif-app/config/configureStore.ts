import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import counterSlice, { initialState as ICounter } from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
});

const preloadedState = () => {
  return { counter: ICounter };
};

const store = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

export default store;