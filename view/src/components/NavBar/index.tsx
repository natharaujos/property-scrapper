import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import { Inbox } from "@mui/icons-material";

function NavBar() {
  return (
    <Drawer variant="permanent">
      <Box role="presentation">
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Realties" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}

export default NavBar;
