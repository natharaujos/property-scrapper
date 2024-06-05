import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container flex={"column"}>
      <Grid item xs={1}>
        <NavBar />
      </Grid>
      <Grid item xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default App;
