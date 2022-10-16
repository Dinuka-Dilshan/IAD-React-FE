import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SideNavItem from "./SideNavItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUser } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({});
    navigate("/");
  };

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      bgcolor="primary.main"
      py="2rem"
      boxSizing={"border-box"}
    >
      <Typography
        textAlign="center"
        color="white"
        fontSize="2rem"
        fontWeight="bold"
      >
        LMS
      </Typography>
      <Box pt={"2rem"} pl="1.1rem">
        <SideNavItem to="/dashboard/mycourses" title="My Courses" icon="Home" />
        <SideNavItem
          to="/dashboard/availablecourses"
          title="Available Courses"
          icon="Projects"
        />
        <SideNavItem
          to="/dashboard/announcements"
          title="Announcements"
          icon="MyProjects"
        />
        <SideNavItem to="/dashboard/profile" title="Profile" icon="Profile" />
      </Box>
      <Button
        onClick={handleLogout}
        variant="outlined"
        sx={{ color: "white", mt: "15rem", pl: "4rem", fontSize: "1.1rem" }}
      >
        <LogoutIcon fontSize="large" />{" "}
        <Typography fontWeight={500} ml={"1rem"}>
          Logout
        </Typography>
      </Button>
    </Box>
  );
};

export default SideNav;
