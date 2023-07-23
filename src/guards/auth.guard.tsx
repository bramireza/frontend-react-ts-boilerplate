import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { keysConfig } from "../configs";

interface AuthGuardProps {
  component: () => JSX.Element;
}

const AuthGuard = ({ component: Component }: AuthGuardProps) => {
  const { isAuthenticated } = useAuth();
  const { RouteKeys } = keysConfig;

  if (isAuthenticated === undefined) {
    console.log("loading...");
    return null;
  }

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to={`/${RouteKeys.LOGIN}`} replace />
  );
};

export default AuthGuard;
