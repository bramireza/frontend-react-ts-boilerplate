import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { AuthLayout } from "../../layouts";
import { setUser, setAuth } from "../../redux/slices";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { authServices } from "../../services";
import { ButtonCustom } from "../../components";
import { keysConfig } from "../../configs";
import { useAuth } from "../../hooks";
import queryString from "query-string";
interface QueryStringParams {
  urlRedirect?: string;
  urlCallback?: string;
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
}
interface DataProps {
  accessToken: string;
  refreshToken: string;
  userId: string;
}
interface ParsedQueryString {
  query: QueryStringParams;
}

const { RouteKeys } = keysConfig;

const SignIn = () => {
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken, refreshToken, userId } = useAppSelector(
    (state) => state.auth,
  );
  const currentUrl = window.location.href;
  const { query: qs }: ParsedQueryString = queryString.parseUrl(currentUrl);

  const handleRedirect = (qs: QueryStringParams, data: DataProps) => {
    if (qs.urlCallback && qs.urlRedirect) {
      const queryObject = {
        urlRedirect: qs.urlRedirect,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        userId: data.userId,
      };
      const queryStringWithParams = queryString.stringify(queryObject, {
        sort: false,
      });

      window.location.href = `${qs.urlCallback}?${queryStringWithParams}`;
    } else {
      navigate(`/${RouteKeys.HOME}`, { replace: true });
    }
  };
  useEffect(() => {
    if (isAuthenticated !== undefined) {
      if (isAuthenticated) {
        setIsLoading(true);
        handleRedirect(qs, { accessToken, refreshToken, userId });
      } else {
        setIsLoading(false);
      }
    }
  }, [isAuthenticated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { accessToken, refreshToken, success, user } =
        await authServices.signIn(dataForm);
      if (success) {
        dispatch(
          setAuth({
            accessToken,
            refreshToken,
            userId: user._id,
          }),
        );
        dispatch(setUser(user));
        handleRedirect(qs, { accessToken, refreshToken, userId: user._id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <AuthLayout>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main", mb: 1 }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicio de Sesión
            </Typography>
            <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={dataForm.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    required
                    fullWidth
                    label="Contraseña"
                    id="password"
                    name="password"
                    autoComplete="password"
                    onChange={handleChange}
                    value={dataForm.password}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ justifyContent: "center", textAlign: "center", mt: 5 }}
              >
                <Grid item>
                  <ButtonCustom>Iniciar Sesión</ButtonCustom>
                  <Divider>o</Divider>
                  <ButtonCustom>Iniciar Sesión con Google</ButtonCustom>
                </Grid>
              </Grid>

              <Grid
                container
                sx={{ justifyContent: "center", textAlign: "center", mt: 5 }}
              >
                <Grid item>
                  <Typography>¿No tienes cuenta?</Typography>
                  <Link href="signup" variant="body2">
                    Registrate aquí
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </AuthLayout>
      )}
    </>
  );
};

export default SignIn;
