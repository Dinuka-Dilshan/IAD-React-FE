import { Box, Typography } from "@mui/material";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Announcement from './Views/Announcement'
import Navbar from './Components/Navbar'
import "./App.css";
import RegisterStudent from "./Views/RegisterStudent";
// import Teacher from "./Views/Teacher";
// import AllTeachers from "./Views/AllTeachers";
// import Login from "./Views/Login";

function App() {
  return (
    
    //  !Commited by Avishka 
    // <Box
    //   height={"100vh"}
    //   width={"100vw"}
    //   display={"flex"}
    //   justifyContent="center"
    //   alignItems="center"
    // >
      // <Typography fontSize={'2rem'}>Hi!</Typography>
    // </Box>
      
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route 
            path={"/announcement"}
            element={<Announcement/>}
          />
          <Route 
            path={"/student/register"}
            element={<RegisterStudent/>}
          />
          {/* <Route 
            path={"/teachers"}
            element={<AllTeachers/>}
          /> */}
          {/* <Route 
            path={"/"}
            element={<Login/>}
          /> */}
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
