import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import useCustomTheme from "../../../hooks/useCustomTheme";
import { RealtyDto } from "../interfaces/RealtyDto";
import { useEffect, useState } from "react";
import RealtyService from "../services/RealtyService";
import { Grid, Typography } from "@mui/material";

function DataGridRealties() {
  const { greenColor } = useCustomTheme();
  const [realties, setRealties] = useState<RealtyDto[]>([]);

  const larguraReferencia = window.innerWidth;

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: larguraReferencia * 0.1 },
    {
      field: "name",
      headerName: "Name",
      width: larguraReferencia * 0.1,
      editable: true,
    },
    {
      field: "link",
      headerName: "Link",
      width: larguraReferencia * 0.15,
      editable: true,
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

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await RealtyService.getRealties();
        setRealties(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box
      sx={{ backgroundColor: greenColor.main }}
      padding={"5rem"}
      borderRadius={"1rem"}
      height={"50vh"}
      width={"80%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        container
        xs={12}
        height={"80%"}
        display={"flex"}
        alignItems={"center"}
      >
        <Grid xs={12}>
          <Typography fontWeight={"bold"} textAlign={"center"} mb={"1rem"}>
            Listagem de Imobiliárias
          </Typography>
        </Grid>
        <Grid item xs={12} height={"100%"}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DataGridRealties;
