import { Box, Card, CardContent, Grid, Divider, Button } from "@mui/material";
import { keysConfig } from "../../configs";
import { MainLayout } from "../../layouts";

const { RouteKeys } = keysConfig;

const Home = () => {
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
              <Grid
                container
                sx={{ justifyContent: "center", textAlign: "center" }}
              >
                <Grid item>
                  <Button
                    href={`/${RouteKeys.LOGIN}`}
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    fullWidth
                  >
                    Iniciar Sesión
                  </Button>
                  <Divider>o</Divider>
                  <Button
                    href={`/${RouteKeys.SIGNUP}`}
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    fullWidth
                  >
                    Registrar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Home;
