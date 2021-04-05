import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
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
    preloadedState: preloadedState(),
  });
};

export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== 'production',
});

// export type StoreState = ReturnType<typeof preloadedState>;
// export type ReduxStore = Store<StoreState>;

export default store;