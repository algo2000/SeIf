import { compose, createStore, Store } from "redux";
import rootReducer from ".";

declare global {
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = ():Store => {
  const composeEnhancers = typeof(window as any) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(),
  );
  return store;
}

export default configureStore;