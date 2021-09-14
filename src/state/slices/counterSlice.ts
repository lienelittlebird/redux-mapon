import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}

const initialState: counterState = { value: 40 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    multiplyByTwo: (state) => {
      state.value = state.value * 2;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  multiplyByTwo,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
