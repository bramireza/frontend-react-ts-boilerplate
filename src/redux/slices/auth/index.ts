import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItemLocalStorage, setItemLocalStorage } from "../../../utils";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  accessToken: getItemLocalStorage("accessToken") || null,
  refreshToken: getItemLocalStorage("refreshToken") || null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
      setItemLocalStorage("accessToken", action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      setItemLocalStorage("refreshToken", action.payload);
      state.refreshToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAccessToken, setRefreshToken, setIsLoading } =
  authSlice.actions;

export default authSlice.reducer;
