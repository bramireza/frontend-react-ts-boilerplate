import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import settingsReducer from "./slices/settings";
import userReducer from "./slices/user";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    settings: settingsReducer,
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
