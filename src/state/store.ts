import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import FruitChange from "./slices/fruitSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    fruit: FruitChange,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
