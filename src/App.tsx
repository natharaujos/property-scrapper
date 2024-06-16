import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./shared/components/NavBar";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Loading from "./shared/components/Loading";
import { useAppSelector } from "./hooks/useCustomRedux";

function App() {
  const loading = useAppSelector((state) => state.loading.loading);

  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} id="app" display={"flex"} height={"100vh"}>
        <Grid item xs={1}>
          <NavBar />
        </Grid>
        <Grid
          item
          id="conteudo-principal"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={10}
        >
          <Outlet />
        </Grid>
        <Loading open={loading} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
