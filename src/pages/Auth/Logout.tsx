import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { resetAuth, resetUser } from "../../redux/slices";
import { useNavigate } from "react-router-dom";
import { keysConfig } from "../../configs";
import { authServices } from "../../services";
import { generateQueryStringWithParams, handleError } from "../../utils";

const { RouteKeys } = keysConfig;

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const { accessToken, refreshToken } = useAppSelector((state) => state.auth);
    const queryStringWithParams = generateQueryStringWithParams();
    authServices
      .logout({ accessToken, refreshToken })
      .then(() => {
        dispatch(resetAuth());
        dispatch(resetUser());
        navigate(`/${RouteKeys.LOGIN}?${queryStringWithParams}`, {
          replace: true,
        });
      })
      .catch((error) => {
        handleError(error);
      });
  }, []);

  return <div>Logout</div>;
};
export default Logout;
