import queryString from "query-string";
import { QueryStringParams } from "../types";
import { keysConfig } from "../configs";

const { RouteKeys } = keysConfig;

export const generateQueryStringWithParams = () => {
  const currentUrl = window.location.href;
  const { origin } = new URL(currentUrl);

  const { query: queryStringInUrl } = queryString.parseUrl(currentUrl);
  const queryObject: QueryStringParams = {
    urlRedirect: currentUrl,
    urlCallback: `${origin}/${RouteKeys.CALLBACK}`,
  };

  return queryString.stringify(queryStringInUrl || queryObject, {
    sort: false,
  });
};
