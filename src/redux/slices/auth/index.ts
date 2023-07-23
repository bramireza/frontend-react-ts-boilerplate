import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getItemLocalStorage,
  removeItemLocalStorage,
  setItemLocalStorage,
} from "../../../utils";
import { keysConfig } from "../../../configs";
import { Auth } from "../../../types";

const { AuthKeys } = keysConfig;

const initialState: Auth = {
  accessToken: getItemLocalStorage(AuthKeys.ACCESS_TOKEN) || "",
  refreshToken: getItemLocalStorage(AuthKeys.REFRESH_TOKEN) || "",
  userId: getItemLocalStorage(AuthKeys.USER_ID) || "",
};

const authSlice = createSlice({
  name: AuthKeys.NAME,
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      const { accessToken, refreshToken, userId } = action.payload;
      setItemLocalStorage<string>(AuthKeys.ACCESS_TOKEN, accessToken);
      setItemLocalStorage<string>(AuthKeys.REFRESH_TOKEN, refreshToken);
      setItemLocalStorage<string>(AuthKeys.USER_ID, userId);
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.userId = userId;
    },
    resetAuth: () => {
      removeItemLocalStorage(AuthKeys.ACCESS_TOKEN);
      removeItemLocalStorage(AuthKeys.REFRESH_TOKEN);
      removeItemLocalStorage(AuthKeys.USER_ID);
      return initialState;
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
