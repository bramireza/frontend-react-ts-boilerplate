import queryString from "query-string";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { setAuth } from "../../redux/slices";
import { useNavigate } from "react-router-dom";
import { keysConfig } from "../../configs";

interface QueryStringParams {
  urlRedirect?: string;
  urlCallback?: string;
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
}

interface ParsedQueryString {
  query: QueryStringParams;
}

const { RouteKeys } = keysConfig;

const Callback = () => {
  const [isLoading, _setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUrl = window.location.href;
  const { query: qs }: ParsedQueryString = queryString.parseUrl(currentUrl);

  useEffect(() => {
    if (qs.urlRedirect && qs.accessToken && qs.refreshToken && qs.userId) {
      const { accessToken, refreshToken, userId } = qs;
      dispatch(setAuth({ accessToken, refreshToken, userId }));
      window.location.href = qs.urlRedirect;
    } else {
      navigate(`/${RouteKeys.HOME}`, { replace: true });
    }
  }, []);

  return <>{isLoading ? "Loading..." : <div>Callback</div>}</>;
};
export default Callback;
