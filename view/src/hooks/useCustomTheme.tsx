import { useTheme } from "@mui/material";

function useCustomTheme() {
  const theme = useTheme();
  const blackColor = theme.palette.primary;
  const greyColor = theme.palette.secondary;
  const greenColor = theme.palette.success;
  const redColor = theme.palette.error;

  return { blackColor, greyColor, greenColor, redColor };
}

export default useCustomTheme;
