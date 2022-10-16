import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link, useMatch } from "react-router-dom";
import iconMapper from "./IconMapper";

export type IconType = "Home" | "Projects" | "MyProjects" | "Chats" | "Profile";

interface Props {
  to: string;
  icon: IconType;
  title: string;
}

const SideNavItem: React.FC<Props> = ({ to, title, icon }) => {
  const isActive = useMatch(to);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={"1.5rem"}
      py="1rem"
      my={"0.5rem"}
      bgcolor={isActive ? "white" : "primary.main"}
      sx={{ borderTopLeftRadius: "100vh", borderBottomLeftRadius: "100vh" }}
    >
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        {iconMapper(icon, isActive ? true : false)}
      </Box>
      <Box flex={3} display="flex" alignItems="center">
        <Link to={to} style={{ textDecoration: "none" }}>
          <Typography
            fontWeight={500}
            fontSize="1.2rem"
            color={isActive ? "primary.main" : "primary.light"}
          >
            {title}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default SideNavItem;
