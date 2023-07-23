import { api, getConfigsWithAccessToken } from "../utils";
import {
  ApiResponse,
  DataRefreshToken,
  DataRevokeTokens,
  DataSignIn,
  DataSignUp,
  UserResponse,
  UserTokensResponse,
} from "../types";

const baseRequest = "/auth";

export const signUp = async (dates: DataSignUp) => {
  const { data } = await api.post<UserResponse>(`${baseRequest}/signup`, dates);
  return data;
};

export const signIn = async (dates: DataSignIn) => {
  const { data } = await api.post<UserTokensResponse>(
    `${baseRequest}/signin`,
    dates,
  );
  return data;
};

export const refreshToken = async (dates: DataRefreshToken) => {
  const { data } = await api.post<UserTokensResponse>(
    `${baseRequest}/refreshtoken`,
    dates,
  );
  return data;
};

export const revokeTokens = async (dates: DataRevokeTokens) => {
  const { data } = await api.post<ApiResponse>(
    `${baseRequest}/revoketokens`,
    dates,
    getConfigsWithAccessToken(),
  );
  return data;
};

export const me = async () => {
  const { data } = await api.get<UserResponse>(
    `${baseRequest}/me`,
    getConfigsWithAccessToken(),
  );
  return data;
};

export const logout = async () => {
  const { data } = await api.get<ApiResponse>(`${baseRequest}/logout`);
  return data;
};
