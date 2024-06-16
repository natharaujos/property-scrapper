import * as React from "react";
import List from "@mui/material/List";
import { Box, Drawer } from "@mui/material";
import { Inbox, Home } from "@mui/icons-material";
import useCustomTheme from "../../../hooks/useCustomTheme";
import CustomNavLink from "./components/CustomNavLink";

function NavBar() {
  const { blackColor } = useCustomTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        PaperProps={{ sx: { backgroundColor: blackColor.light } }}
      >
        <List>
          <CustomNavLink icon={<Home />} text={"Home"} path={"/home"} />
          <CustomNavLink icon={<Inbox />} text={"Realtie"} path={"/realties"} />
        </List>
      </Drawer>
    </Box>
  );
}

export default NavBar;
