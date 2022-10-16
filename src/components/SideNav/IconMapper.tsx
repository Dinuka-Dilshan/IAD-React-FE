import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { IconType } from "./SideNavItem";

const IconMapper = (name: IconType, isActive: boolean) => {
  if (name === "Home") {
    return (
      <HomeIcon
        fontSize="large"
        sx={{
          color: isActive ? "primary.main" : "primary.light",
        }}
      />
    );
  }
  if (name === "Projects") {
    return (
      <ShowChartIcon
        fontSize="large"
        sx={{
          color: isActive ? "primary.main" : "primary.light",
        }}
      />
    );
  }
  if (name === "MyProjects") {
    return (
      <AccountTreeRoundedIcon
        fontSize="large"
        sx={{
          color: isActive ? "primary.main" : "primary.light",
        }}
      />
    );
  }
  if (name === "Chats") {
    return (
      <ForumIcon
        fontSize="large"
        sx={{
          color: isActive ? "primary.main" : "primary.light",
        }}
      />
    );
  }
  if (name === "Profile") {
    return (
      <PersonOutlineIcon
        fontSize="large"
        sx={{
          color: isActive ? "primary.main" : "primary.light",
        }}
      />
    );
  }
};

export default IconMapper;
