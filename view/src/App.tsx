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
      <Grid container lg={12} id="app" display={"flex"} height={"100vh"}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid
          id="conteudo-principal"
          marginLeft={"300px"}
          width={"100vw"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Outlet />
        </Grid>
        <Loading open={loading} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
