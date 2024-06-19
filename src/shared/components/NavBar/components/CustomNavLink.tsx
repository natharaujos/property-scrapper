import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import useCustomTheme from "../../../../hooks/useCustomTheme";

type ICustomNavLink = {
  icon: React.ReactNode;
  text: string;
  path: string;
};

function CustomNavLink({ icon, text, path }: ICustomNavLink) {
  const { greyColor } = useCustomTheme();

  return (
    <NavLink
      to={path}
      className={({ isPending, isActive }) => {
        return isPending ? "pending" : isActive ? "active" : "";
      }}
      style={({ isActive }) => {
        return {
          fontWeight: "bolder",
          color: greyColor.main,
          textDecoration: "none",
          backgroundColor: isActive ? "white" : "",
        };
      }}
    >
      <ListItemButton>
        <ListItemIcon sx={{ color: greyColor.main }}>{icon}</ListItemIcon>
        <Typography fontWeight={"bold"}>{text}</Typography>
      </ListItemButton>
    </NavLink>
  );
}

export default CustomNavLink;
