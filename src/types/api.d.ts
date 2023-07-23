import { User } from ".";

export interface ApiResponse {
  success: boolean;
  message?: string;
}
export interface UserResponse extends ApiResponse {
  user: User;
}
export interface UserTokensResponse extends UserResponse {
  accessToken: string;
  refreshToken: string;
}

export interface DataSignIn {
  email: string;
  password: string;
}
export interface DataSignUp extends DataSignIn {
  firstName: string;
  lastName: string;
}

export interface DataRefreshToken {
  refreshToken: string;
}
export interface DataRevokeTokens {
  userId: string;
}
