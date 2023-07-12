import { Home, PageNotFound, SignUp } from "../pages/";
import SignIn from "../pages/Auth/SignIn";

interface IRoute {
  path: string;
  Component: () => JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "*",
    Component: PageNotFound,
  },
];
