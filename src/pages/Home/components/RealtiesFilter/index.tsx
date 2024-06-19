import Box from "@mui/material/Box";
import useCustomTheme from "../../../../hooks/useCustomTheme";
import { RealtyDto } from "../../interfaces/RealtyDto";
import { useEffect, useState } from "react";
import RealtyService from "../../services/RealtyService";
import { Grid, Typography } from "@mui/material";
import RealtyForm from "../RealtyForm/RealtyForm";
import CustomSkeleton from "../../../../shared/components/CustomSkeleton";
import DataGridRealties from "../DataGridRealties";

function RealtiesFilter() {
  const { greyColor } = useCustomTheme();
  const [realties, setRealties] = useState<RealtyDto[]>([]);
  const [showDataGridSkeleton, setShowDataGridSkeleton] =
    useState<boolean>(false);

  async function getRealtiesData() {
    try {
      setShowDataGridSkeleton(true);
      const result = await RealtyService.getRealties();
      setRealties(result);
    } catch (error) {
      console.log(error);
    } finally {
      setShowDataGridSkeleton(false);
    }
  }

  useEffect(() => {
    getRealtiesData();
  }, []);

  return (
    <Box
      sx={{ backgroundColor: greyColor.main }}
      borderRadius={"1rem"}
      padding={"3rem"}
      height={"80vh"}
      width={"80%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} height={"20%"}>
          <RealtyForm getRealtiesData={getRealtiesData} />
        </Grid>
        <Grid item xs={12} height={"10%"}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            Listagem de Imobiliárias
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          height={"70%"}
          display={"flex"}
          alignItems={"stretch"}
        >
          {showDataGridSkeleton ? (
            <CustomSkeleton />
          ) : (
            <DataGridRealties realties={realties} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default RealtiesFilter;
