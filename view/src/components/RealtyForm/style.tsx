import { makeStyles } from "@mui/styles";
import { LIGHT_GREEN } from "../../shared/constants/Colors";

const useStyles = makeStyles({
  paper: {
    padding: "2rem",
    height: "400px",
    width: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LIGHT_GREEN,
    borderRadius: "1rem",
  },
});

export default useStyles;
