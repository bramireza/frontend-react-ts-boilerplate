import queryString from "query-string";
import { QueryStringParams } from "../types";
import { keysConfig } from "../configs";

const { RouteKeys } = keysConfig;

export const generateQueryStringWithParams = () => {
  const currentUrl = window.location.href;
  const { origin, search } = new URL(currentUrl);

  const queryStringInUrl = queryString.parse(search);
  const queryObject: QueryStringParams = {
    urlRedirect: currentUrl,
    urlCallback: `${origin}/${RouteKeys.CALLBACK}`,
  };

  return queryString.stringify(queryStringInUrl || queryObject, {
    sort: false,
  });
};
