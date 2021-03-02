import { ActionType, createAction, createReducer } from "typesafe-actions";

interface SeifReducer {
  no: number,
  text: string,
}

const initialState: SeifReducer = {
  no: 0,
  text: 'hello',
}

export const RESET_TEXT = 'seifReducer/RESET_TEXT';
export const ADD_TEXT = 'seifReducer/ADD_TEXT';
export const REMOVE_TEXT = 'seifReducer/REMOVE_TEXT';

export const resetText = createAction(RESET_TEXT)();
export const addText = createAction(ADD_TEXT)<SeifReducer>();
export const removeText = createAction(REMOVE_TEXT)();

export const actions = {resetText, addText, removeText}
type SeifReducerActions = ActionType<typeof actions>;

const testReducer = createReducer<SeifReducer, SeifReducerActions>(initialState, {
    [RESET_TEXT]: () => ({
        no: 0,
        text: 'hello',
    }),
    [ADD_TEXT]: (state, action) => {
        console.log(state.text);
        return ({
            no: action.payload.no,
            text: action.payload.text
        });
    }, 
    [REMOVE_TEXT]: () => ({
      no: 0,
      text: '',
  }),
});

export default testReducer;