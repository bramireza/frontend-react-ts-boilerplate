import axios, { AxiosError, isAxiosError } from "axios";
import { keysConfig, envConfig } from "../configs";
import { getItemLocalStorage } from ".";

const { AuthKeys } = keysConfig;
export const api = axios.create({
  baseURL: envConfig.API_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true,
});

export const getConfigsWithAccessToken = () => {
  const accessToken = getItemLocalStorage(AuthKeys.ACCESS_TOKEN);
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export const handleError = (error: AxiosError | any) => {
  if (isAxiosError(error)) {
    if (error.response) {
      const { status, data } = error.response;
      console.log("Status code:", status);
      console.log("Data:", data);
    } else {
      console.log("Error:", error.message);
    }
  } else {
    console.log("Error:", error.message);
  }
};
