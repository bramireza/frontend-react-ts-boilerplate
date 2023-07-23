import { keysConfig } from "../configs";
import {
  Callback,
  Dashboard,
  Home,
  Logout,
  PageNotFound,
  SignIn,
  SignUp,
} from "../pages";

interface IRoute {
  path: string;
  Component: () => JSX.Element;
  isPrivate: boolean;
}
const { RouteKeys } = keysConfig;
export const routes: IRoute[] = [
  {
    path: "/",
    Component: Dashboard,
    isPrivate: false,
  },
  {
    path: `/${RouteKeys.HOME}`,
    Component: Home,
    isPrivate: true,
  },
  {
    path: `/${RouteKeys.SIGNUP}`,
    Component: SignUp,
    isPrivate: false,
  },
  {
    path: `/${RouteKeys.LOGIN}`,
    Component: SignIn,
    isPrivate: false,
  },
  {
    path: `/${RouteKeys.LOGOUT}`,
    Component: Logout,
    isPrivate: false,
  },
  {
    path: `/${RouteKeys.CALLBACK}`,
    Component: Callback,
    isPrivate: false,
  },
  {
    path: "*",
    Component: PageNotFound,
    isPrivate: false,
  },
];
