import { Grid } from "@mui/material";
import DataGridRealties from "./components/DataGridRealties/DataGridRealties";

function Home() {
  return (
    <Grid
      container
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      <Grid
        item
        xs={8}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <DataGridRealties />
      </Grid>
    </Grid>
  );
}

export default Home;
