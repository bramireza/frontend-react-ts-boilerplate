import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import settingsReducer from "./slices/settings";

const store = configureStore({
  reducer: {
    auth: authReducer,

    settings: settingsReducer,
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
