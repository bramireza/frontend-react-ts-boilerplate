import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { keysConfig } from "../configs";
import { generateQueryStringWithParams } from "../utils";

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
  if (isAuthenticated) {
    return <Component />;
  } else {
    const queryStringWithParams = generateQueryStringWithParams();

    return (
      <Navigate to={`/${RouteKeys.LOGIN}?${queryStringWithParams}`} replace />
    );
  }
};

export default AuthGuard;
