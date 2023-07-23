import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types";
import { keysConfig } from "../../../configs";

const { UserKeys } = keysConfig;

const initialState: User = {
  _id: "",
  fullName: "",
  firstName: "",
  lastName: "",
  email: "",
  birthDay: null,
  nationality: "",
  gender: "",
  googleId: "",
  pictureUrl: "",
};

const userSlice = createSlice({
  name: UserKeys.NAME,
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => ({
      ...state,
      ...action.payload,
    }),
    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
