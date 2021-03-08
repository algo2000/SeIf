import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export type ICounter = {
  value: number,
};

export const initialState: ICounter = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state): ICounter => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement: (state): ICounter => {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    incrementByAmount: (state, action: PayloadAction<ICounter>): ICounter => {
      const {payload} = action;
      return {
        ...state,
        value: state.value + payload.value,
      };
    },
    decrementByAmount: (state, action: PayloadAction<ICounter>): ICounter => {
      const {payload} = action;
      return {
        ...state,
        value: state.value - payload.value
      };
    }
  },
});

export const useCounterState = () => {
  return useSelector((state: { counter: ICounter }) => state);
};

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;