import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
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
    </Box>
  );
};

export default SideNav;
