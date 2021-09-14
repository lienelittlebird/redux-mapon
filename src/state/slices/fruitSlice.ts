import { createSlice } from "@reduxjs/toolkit";

interface fruitState {
  value: string;
}

const initialState: fruitState = { value: "Apples" };

export const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    toOrangesAndBack: (state) => {
      if (state.value === "Apples") {
        state.value = "Oranges";
      } else {
        state.value = "Apples";
      }
    },
    reset: () => initialState,
  },
});

export const { toOrangesAndBack, reset } = fruitSlice.actions;

export default fruitSlice.reducer;
