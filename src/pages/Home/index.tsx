import { Grid } from "@mui/material";
import DataGridRealties from "./DataGridRealties/DataGridRealties";

function Home() {
  return (
    <Grid
      container
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
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
