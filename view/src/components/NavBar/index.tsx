import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import { Inbox, Home } from "@mui/icons-material";
import { BLACK } from "../../shared/constants/Colors";

function NavBar() {
  return (
    <List>
      <ListItemButton>
        <ListItemIcon color={BLACK}>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" color={BLACK} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon color={BLACK}>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary="Realties" color={BLACK} />
      </ListItemButton>
    </List>
  );
}

export default NavBar;
