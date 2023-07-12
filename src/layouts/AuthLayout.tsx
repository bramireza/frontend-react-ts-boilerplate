import {
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useAppSelector } from "../hooks/redux";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const AuthLayout = ({ children }: IProps) => {
  const { themeMode } = useAppSelector((state) => state.settings);
  const isLight = themeMode === "dark";
  const theme = createTheme({
    palette: {
      primary: {
        main: "#651fff",
      },
      mode: isLight ? "light" : "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
              {children}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default AuthLayout;
