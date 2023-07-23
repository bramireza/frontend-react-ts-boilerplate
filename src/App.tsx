import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { AuthGuard } from "./guards";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component, isPrivate }) =>
          isPrivate ? (
            <Route
              key={path}
              path={path}
              element={<AuthGuard component={Component} />}
            />
          ) : (
            <Route key={path} path={path} element={<Component />} />
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
