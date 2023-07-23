import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { resetAuth, resetUser } from "../../redux/slices";
import { useNavigate } from "react-router-dom";
import { keysConfig } from "../../configs";

const { RouteKeys } = keysConfig;

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    dispatch(resetAuth());
    dispatch(resetUser());
    navigate(`/${RouteKeys.LOGIN}`, { replace: true });
  }, []);

  return <div>Logout</div>;
};
export default Logout;
