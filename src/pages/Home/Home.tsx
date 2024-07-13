import { Grid } from "@mui/material";
import RealtiesFilter from "./components/RealtiesFilter/RealtiesFilter";

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
        <RealtiesFilter />
      </Grid>
    </Grid>
  );
}

export default Home;
