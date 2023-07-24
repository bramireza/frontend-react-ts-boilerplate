import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { resetAuth, resetUser } from "../../redux/slices";
import { useNavigate } from "react-router-dom";
import { keysConfig } from "../../configs";
import { authServices } from "../../services";
import { handleError } from "../../utils";

const { RouteKeys } = keysConfig;

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authServices
      .logout()
      .then(() => {
        dispatch(resetAuth());
        dispatch(resetUser());
        navigate(`/${RouteKeys.LOGIN}`, { replace: true });
      })
      .catch((error) => {
        handleError(error);
      });
  }, []);

  return <div>Logout</div>;
};
export default Logout;
