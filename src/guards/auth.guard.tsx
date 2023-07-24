import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { keysConfig } from "../configs";
import queryString from "query-string";
import { QueryStringParams } from "../types";

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
    const currentUrl = window.location.href;
    const urlWithoutPath = new URL(currentUrl).origin;

    const queryObject: QueryStringParams = {
      urlRedirect: currentUrl,
      urlCallback: `${urlWithoutPath}/${RouteKeys.CALLBACK}`,
    };
    const queryStringWithParams = queryString.stringify(queryObject, {
      sort: false,
    });

    return (
      <Navigate to={`/${RouteKeys.LOGIN}?${queryStringWithParams}`} replace />
    );
  }
};

export default AuthGuard;
