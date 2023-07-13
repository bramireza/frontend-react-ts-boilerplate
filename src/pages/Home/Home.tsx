import { MainLayout } from "../../layouts";
import { Box, Grid, Divider, Card, CardContent, Button } from "@mui/material";

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
            <Box>
              <Grid
                container
                sx={{ justifyContent: "center", textAlign: "center" }}
              >
                <Grid item>
                  <Button
                    href="/signin"
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    fullWidth
                  >
                    Inicia Sesion aqui
                  </Button>
                  <Divider>o</Divider>
                  <Button
                    href="/signup"
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    fullWidth
                  >
                    Registrate aquí
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
