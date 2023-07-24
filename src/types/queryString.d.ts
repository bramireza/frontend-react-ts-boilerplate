export interface QueryStringParams {
  urlRedirect?: string;
  urlCallback?: string;
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
}

export interface ParsedQueryString {
  query: QueryStringParams;
}

export interface DataQueryString {
  accessToken: string;
  refreshToken: string;
  userId: string;
}
