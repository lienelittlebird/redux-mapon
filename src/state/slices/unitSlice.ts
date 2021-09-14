import { createSlice } from "@reduxjs/toolkit";

interface unitState {
  value: number;
}

const initialState: unitState = { value: 40 };

export const unitSlice: any = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state = action.payload;
    },
    resetItems: () => initialState,
  },
});

export const { setItems, resetItems } = unitSlice.actions;

export default unitSlice.reducer;
