import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage/session";

const reducers = combineReducers({
  tokenReducer,
});

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["tokenReducer"],
};

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
