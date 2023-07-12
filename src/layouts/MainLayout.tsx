import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import { useAppSelector } from "../hooks/redux";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: IProps) => {
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
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;
