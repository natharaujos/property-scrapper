import * as React from "react";
import List from "@mui/material/List";
import { Box } from "@mui/material";
import { Inbox, Home } from "@mui/icons-material";
import useCustomTheme from "../../../hooks/useCustomTheme";
import CustomNavLink from "./components/CustomNavLink";

function NavBar() {
  const { blackColor } = useCustomTheme();

  return (
    <Box display={"flex"} width={"100%"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: blackColor.light,
          height: "100vh",
          width: "100%",
        }}
      >
        <List>
          <CustomNavLink icon={<Home />} text={"Home"} path={"/home"} />
          <CustomNavLink icon={<Inbox />} text={"Realtie"} path={"/realties"} />
        </List>
      </Box>
    </Box>
  );
}

export default NavBar;
