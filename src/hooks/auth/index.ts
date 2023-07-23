import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "..";
import { authServices } from "../../services";
import { setAuth, setUser } from "../../redux/slices";
import { AxiosError, isAxiosError } from "axios";
import { handleError } from "../../utils";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const authenticateUserWithRefreshToken = async (error: AxiosError | any) => {
    // Error is expiredToken
    if (isAxiosError(error) && error.response?.status === 401) {
      try {
        const { accessToken, refreshToken, user } =
          await authServices.refreshToken({
            refreshToken: auth.refreshToken,
          });

        dispatch(setAuth({ accessToken, refreshToken, userId: user._id }));
        dispatch(setUser(user));
        setIsAuthenticated(true);
      } catch (refreshError) {
        handleError(refreshError);
        setIsAuthenticated(false);
      }
    } else {
      handleError(error);
      setIsAuthenticated(false);
    }
  };
  const authenticateUser = async () => {
    try {
      const { success, user } = await authServices.me();
      if (success) {
        setIsAuthenticated(true);
        dispatch(setUser(user));
      }
    } catch (error) {
      authenticateUserWithRefreshToken(error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return { isAuthenticated };
};
