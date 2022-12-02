import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  tokenReducer,
});

export const store = configureStore({
  reducer: reducers,
});
