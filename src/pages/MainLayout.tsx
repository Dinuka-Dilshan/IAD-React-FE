import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import SideNav from "../components/SideNav";

const MainLayout = () => {
 
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={"100vw"}
      height="100vh"
    >
      <Box width={"20vw"}>
        <SideNav />
      </Box>
      <Box width={"80vw"} alignSelf={"stretch"} sx={{ overflowY: "scroll" }}>
        <AppBar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
