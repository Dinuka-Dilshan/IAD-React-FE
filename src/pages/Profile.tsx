import { Avatar, Box, Typography } from "@mui/material";
import { useUser } from "../context/UserProvider";

const Profile = () => {
  const { user } = useUser();

  return (
    <Box
      p={"2rem"}
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignItems={"center"}
      height='70%'
      gap={5}
      
    >
      <Avatar sx={{ bgcolor: "#2162FE", width: 100, height: 100 }}>
        {user && user.fName && user.fName[0].toUpperCase()}
      </Avatar>
      <Typography textAlign={"center"} fontSize={"1.5rem"}>
        {user.fName} {user.lName}
      </Typography>
      <Typography textAlign={"center"} fontSize={"1.3rem"}>
        {user.email}
      </Typography>
    </Box>
  );
};

export default Profile;
