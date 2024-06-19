import * as React from "react";
import List from "@mui/material/List";
import { Box, Grid, Typography } from "@mui/material";
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
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: blackColor.light,
          height: "100vh",
          width: "100%",
        }}
        rowGap={10}
      >
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography
              textAlign="center"
              marginTop="1rem"
              color={"secondary"}
              fontWeight={"bold"}
            >
              Property Scrapper
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop="2rem">
            <List>
              <CustomNavLink icon={<Home />} text={"Home"} path={"/home"} />
              <CustomNavLink
                icon={<Inbox />}
                text={"Realtie"}
                path={"/realties"}
              />
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default NavBar;
