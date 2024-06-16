import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useCustomTheme from "../../../hooks/useCustomTheme";
import { RealtyDto } from "../interfaces/RealtyDto";
import { useEffect, useState } from "react";
import RealtyService from "../services/RealtyService";
import { Grid, Typography } from "@mui/material";
import RealtyForm from "../RealtyForm/RealtyForm";
import CustomSkeleton from "../../../shared/components/CustomSkeleton";

function DataGridRealties() {
  const { greyColor } = useCustomTheme();
  const [realties, setRealties] = useState<RealtyDto[]>([]);
  const [showDataGridSkeleton, setShowDataGridSkeleton] =
    useState<boolean>(false);

  const larguraReferencia = window.innerWidth;

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: larguraReferencia * 0.1 },
    {
      field: "name",
      headerName: "Name",
      width: larguraReferencia * 0.14,
    },
    {
      field: "link",
      headerName: "Link",
      width: larguraReferencia * 0.15,
    },
  ];

  const rows = realties.map((r) => {
    const realtie = {
      id: r.name + "1",
      name: r.name,
      link: r.link,
    };

    return realtie;
  });

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
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={6}
              rowsPerPageOptions={[6]}
              disableSelectionOnClick
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DataGridRealties;
