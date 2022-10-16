import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useUser } from "../../context/UserProvider";

const AppBar = () => {
  const { user } = useUser();

  return (
    <Box
      width={"100%"}
      height={"10vh"}
      sx={{ borderBottom: "2px solid #2162FE" }}
      display="flex"
      alignItems={"center"}
      justifyContent="space-between"
      px={"1rem"}
      boxSizing="border-box"
    >
        <Typography>Logged In As {user?.fName} {user?.lName}</Typography>
      <Avatar sx={{ bgcolor: "GrayText" }}>
        {user && user.fName && user.fName[0].toUpperCase()}
      </Avatar>
    </Box>
  );
};

export default AppBar;
