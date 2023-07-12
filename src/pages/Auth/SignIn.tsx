import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { AuthLayout } from "../../layouts";
import { api } from "../../utils";
import { setAccessToken } from "../../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export interface IUserResponse {
  _id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  googleId: string;
  success: boolean;
}

const SignIn = () => {
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const {
    auth: { accessToken },
  } = useAppSelector((state) => state);

  console.log("token:", accessToken);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
      const { data } = await api.post<IUserResponse>("/auth/signin", dataForm);
      dispatch(setAccessToken(data.accessToken));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuthGoogle = async (tokenResponse: any) => {
    console.log(tokenResponse);
    const { data } = await api.post<IUserResponse>(
      "auth/google/callback",
      tokenResponse.code,
    );
    console.log(data);
    dispatch(setAccessToken(data.accessToken));
    console.log(tokenResponse);
  };

  return (
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
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Grid item>
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 5, mb: 2, width: "250px" }}
              >
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid item>
              <Divider>o</Divider>
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 5, mb: 2, width: "250px" }}
                onClick={handleAuthGoogle}
              >
                Iniciar Sesión con Google
              </Button>
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
  );
};

export default SignIn;
