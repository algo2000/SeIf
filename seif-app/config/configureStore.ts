import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterSlice, { initialState as ICounter } from '../features/counter/counterSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

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

export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== 'production',
});

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

export default store;