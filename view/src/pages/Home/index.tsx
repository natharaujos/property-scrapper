import { Grid } from "@mui/material";
import RealtyForm from "./RealtyForm/RealtyForm";

function Home() {
  return (
    <Grid container height={"100vh"} display={"flex"} alignItems={"center"}>
      <RealtyForm />
    </Grid>
  );
}

export default Home;
