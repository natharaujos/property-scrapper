import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Dialog } from "@mui/material";

type Loading = {
  open: boolean;
};

function Loading({ open }: Loading) {
  return (
    <Dialog open={open}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <CircularProgress />
      </div>
    </Dialog>
  );
}

export default Loading;
