import { combineReducers } from "redux";
import seifReducer from './seifReducer';

const rootReducer = combineReducers({
  seifReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;