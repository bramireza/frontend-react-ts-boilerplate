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
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { AuthLayout } from "../../layouts";
import { useState } from "react";
import { api } from "../../utils";
import { IUserResponse } from "./SignIn";
import { setAccessToken } from "../../redux/slices/auth";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
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
      const { data } = await api.post<IUserResponse>("/auth/signup", dataForm);
      dispatch(setAccessToken(data.accessToken));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
          <AppRegistrationIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Nombres"
                id="firstName"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                onChange={handleChange}
                value={dataForm.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Apellidos"
                id="lastName"
                name="lastName"
                autoComplete="lastName"
                onChange={handleChange}
                value={dataForm.lastName}
              />
            </Grid>
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
                Registrar
              </Button>
              <Divider>o</Divider>
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 2, mb: 2, width: "250px" }}
              >
                Inicia Sesión con Google
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Grid item>
              <Typography>¿Ya tienes cuenta?</Typography>
              <Link href="signin" variant="body2">
                Inicia Sesión aquí
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default SignUp;
