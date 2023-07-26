import { useNavigate } from "react-router-dom";
import { keysConfig } from "../../configs";
import { useAppSelector } from "../../hooks";
import { MainLayout } from "../../layouts";
import {
  Box,
  Card,
  CardContent,
  Button,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import { generateQueryStringWithParams } from "../../utils";

const { RouteKeys } = keysConfig;

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const queryStringWithParams = generateQueryStringWithParams();

    navigate(`/${RouteKeys.LOGOUT}?${queryStringWithParams}`, {
      replace: true,
    });
  };
  const user = useAppSelector((state) => state.user);
  return (
    <MainLayout>
      <Card sx={{ zIndex: 1, boxShadow: "none", mt: 5, borderRadius: 5 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                textAlign: "center",
                display: "contents",
              }}
            >
              <Card sx={{ maxWidth: 345, display: "contents" }}>
                <CardMedia
                  sx={{
                    height: 100,
                    width: 100,
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                  image={`${user.pictureUrl}`}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.fullName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nombres: {user.firstName}
                    <br />
                    Apellidos: {user.lastName}
                    <br />
                    Email: {user.email}
                    <br />
                    Género: {user.gender || "Sin Género"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    fullWidth
                  >
                    Cerrar Sesión
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Home;
