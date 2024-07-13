import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { RealtyDto } from "../../interfaces/RealtyDto";

interface IDataGridRealties {
  realties: RealtyDto[];
}

function DataGridRealties({ realties }: IDataGridRealties) {
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

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={6}
      rowsPerPageOptions={[6]}
      disableSelectionOnClick
    />
  );
}

export default DataGridRealties;
