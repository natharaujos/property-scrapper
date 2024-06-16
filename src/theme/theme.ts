import { createTheme } from "@mui/material/styles";
import { BLACK, GRAY, GREEN, RED } from "../shared/constants/Colors";

const theme = createTheme({
  palette: {
    primary: {
      main: BLACK,
    },
    secondary: {
      main: GRAY,
    },
    success: {
      main: GREEN,
    },
    error: {
      main: RED,
    },
  },
});

export default theme;
